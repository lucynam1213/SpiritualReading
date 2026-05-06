#!/usr/bin/env node
'use strict';

/* ============================================================
 * scripts/generate-audio.js
 *
 * Pre-generate ElevenLabs MP3s for every chapter of the ebook so
 * the deployed site can serve audio/{sectionIndex}.mp3 to visitors
 * without spending API credits at runtime.
 *
 *   ─ HOW TO USE ───────────────────────────────────────────────
 *   1. Install Node 18 or newer.
 *   2. Copy the env template:
 *
 *        cp .env.example .env
 *
 *   3. Open .env and paste your ElevenLabs key:
 *
 *        ELEVENLABS_API_KEY=xi-api-key-here
 *
 *   4. From the repo root, run:
 *
 *        node scripts/generate-audio.js
 *
 *   The script writes one MP3 per section to audio/{sectionIndex}.mp3.
 *   Re-runs skip files that already exist, so you can interrupt and
 *   resume safely.
 *
 *   ─ FLAGS ────────────────────────────────────────────────────
 *   --force            Regenerate every chapter (overwrites existing
 *                      mp3s — useful after changing voice settings).
 *   --only=<n>         Only generate section index <n>. Handy for
 *                      auditioning a voice on a single chapter.
 *   --voice=<id>       Override the voice ID for this run only.
 *   --help             Print this usage and exit.
 *
 *   ─ ENVIRONMENT ──────────────────────────────────────────────
 *   ELEVENLABS_API_KEY    Required. Read from .env.
 *   ELEVENLABS_VOICE_ID   Optional. If unset, falls back to the
 *                         runtime default in script.js
 *                         (TTS_API_DEFAULTS.voiceId).
 *
 *   ─ SAFETY ───────────────────────────────────────────────────
 *   • The cover (sections[0]) is skipped — never narrated.
 *   • Sections over ~4,500 characters are skipped with a warning;
 *     ElevenLabs caps a single request at ~5,000 chars.
 *   • On the first 401 / 403 / 429 response we bail out immediately
 *     to protect the user's quota when something's structurally
 *     wrong (bad key, rate limit, monthly cap hit).
 * ============================================================ */

const fs   = require('fs/promises');
const path = require('path');
const os   = require('os');

const ROOT = path.resolve(__dirname, '..');

// ── Tiny .env loader (no dotenv dependency) ──────────────────
async function loadEnv(file) {
  let text;
  try { text = await fs.readFile(file, 'utf8'); }
  catch (_) { return; }   // .env missing — fine, we'll error on missing key below
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    // Allow optional leading `export ` for shell compatibility
    const m = line.match(/^(?:export\s+)?([A-Z_][A-Z0-9_]*)\s*=\s*(.*)$/i);
    if (!m) continue;
    let val = m[2].trim();
    if ((val.startsWith('"') && val.endsWith('"')) ||
        (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    if (!(m[1] in process.env)) process.env[m[1]] = val;
  }
}

// ── Pull `sections` + `TTS_API_DEFAULTS` straight out of script.js ──
// We sandbox just enough browser globals that the file loads as a
// CommonJS module, then re-export the data we need. This means the
// generator and the live app stay in lockstep: change the text in
// script.js and the next run picks it up automatically.
async function loadFromScriptJs(scriptPath) {
  const src = await fs.readFile(scriptPath, 'utf8');
  const sandboxPrelude = `
    const noop = () => {};
    const stubEl = new Proxy({}, {
      get: (t, k) => {
        if (k === 'addEventListener' || k === 'removeEventListener') return noop;
        if (k === 'classList') return { add: noop, remove: noop, toggle: noop };
        if (k === 'style')     return new Proxy({}, { get: () => '', set: () => true });
        if (k === 'dataset')   return {};
        if (k === 'querySelector')    return () => stubEl;
        if (k === 'querySelectorAll') return () => [];
        if (k === 'appendChild' || k === 'removeChild') return noop;
        if (k === 'setAttribute' || k === 'removeAttribute') return noop;
        if (k === 'getAttribute') return () => null;
        if (k === 'focus' || k === 'blur') return noop;
        if (k === 'remove') return noop;
        return undefined;
      },
      set: () => true
    });
    const document = {
      getElementById:    () => stubEl,
      querySelector:     () => stubEl,
      querySelectorAll:  () => [],
      createElement:     () => stubEl,
      addEventListener:  noop,
      body: stubEl
    };
    // No 'speechSynthesis' key on window → ttsSupported() returns false
    // and initTts() short-circuits without trying to touch voices.
    const window = {
      innerWidth: 800,
      addEventListener:    noop,
      removeEventListener: noop
    };
    const localStorage = { getItem: () => null, setItem: noop, removeItem: noop };
  `;
  const wrapped = sandboxPrelude + '\n' + src +
    '\nmodule.exports = { sections, TTS_API_DEFAULTS };';

  const tmpPath = path.join(
    os.tmpdir(),
    `spiritual-reading-sandbox-${Date.now()}-${process.pid}.js`
  );
  await fs.writeFile(tmpPath, wrapped);
  try {
    delete require.cache[tmpPath];
    return require(tmpPath);
  } finally {
    await fs.unlink(tmpPath).catch(() => {});
  }
}

// ── ElevenLabs request ───────────────────────────────────────
// NOTE: keep voice_settings in sync with fetchElevenLabsAudio() in
// script.js so pre-generated and on-demand audio sound the same.
async function generateAudio({ apiKey, voiceId, modelId, text }) {
  const url = `https://api.elevenlabs.io/v1/text-to-speech/${encodeURIComponent(voiceId)}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'xi-api-key':   apiKey,
      'Content-Type': 'application/json',
      'Accept':       'audio/mpeg'
    },
    body: JSON.stringify({
      text,
      model_id: modelId,
      voice_settings: {
        // Tuned for calm, warm, natural Korean narration with the male
        // voice — slightly higher style for less robotic delivery,
        // higher similarity to keep the voice grounded.
        stability:         0.5,
        similarity_boost:  0.85,
        style:             0.35,
        use_speaker_boost: true
      }
    })
  });
  if (!res.ok) {
    let msg = `${res.status} ${res.statusText || ''}`.trim();
    try {
      const data   = await res.json();
      const detail = data && (data.detail && (data.detail.message || data.detail) || data.message);
      if (detail) msg = typeof detail === 'string' ? detail : JSON.stringify(detail);
    } catch (_) {}
    const err = new Error(msg);
    err.status = res.status;
    throw err;
  }
  return Buffer.from(await res.arrayBuffer());
}

// ── CLI parsing ──────────────────────────────────────────────
function parseArgs(argv) {
  const flags = { force: false, only: null, voice: null, help: false };
  for (const a of argv.slice(2)) {
    if (a === '--help' || a === '-h')      flags.help = true;
    else if (a === '--force')              flags.force = true;
    else if (a.startsWith('--only='))      flags.only  = parseInt(a.slice(7), 10);
    else if (a.startsWith('--voice='))     flags.voice = a.slice(8);
    else {
      console.error(`Unknown argument: ${a}`);
      console.error('Run with --help for usage.');
      process.exit(2);
    }
  }
  return flags;
}

function printUsage() {
  console.log([
    'Usage: node scripts/generate-audio.js [flags]',
    '',
    'Generates audio/{sectionIndex}.mp3 for every chapter using',
    'ElevenLabs. Reads ELEVENLABS_API_KEY from .env.',
    '',
    'Flags:',
    '  --force            Regenerate even if the mp3 already exists',
    '  --only=<n>         Generate only section index <n>',
    '  --voice=<id>       Override the voice ID for this run',
    '  --help, -h         Show this message'
  ].join('\n'));
}

// ── Main ─────────────────────────────────────────────────────
async function main() {
  const flags = parseArgs(process.argv);
  if (flags.help) { printUsage(); return; }

  await loadEnv(path.join(ROOT, '.env'));

  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) {
    console.error('ELEVENLABS_API_KEY is missing.');
    console.error('');
    console.error('  cp .env.example .env');
    console.error('  # then edit .env and set ELEVENLABS_API_KEY=xi-api-key-here');
    process.exit(1);
  }

  const { sections, TTS_API_DEFAULTS } =
    await loadFromScriptJs(path.join(ROOT, 'script.js'));

  const voiceId = flags.voice || process.env.ELEVENLABS_VOICE_ID || TTS_API_DEFAULTS.voiceId;
  const modelId = TTS_API_DEFAULTS.modelId;

  console.log(`Voice ID:  ${voiceId}`);
  console.log(`Model:     ${modelId}`);
  console.log(`Sections:  ${sections.length}`);
  console.log('');

  const audioDir = path.join(ROOT, 'audio');
  await fs.mkdir(audioDir, { recursive: true });

  let totalChars = 0;
  let generated  = 0;
  let kept       = 0;
  let failed     = 0;

  for (let i = 0; i < sections.length; i++) {
    if (flags.only != null && flags.only !== i) continue;

    const section = sections[i];

    if (section.type === 'cover') {
      console.log(`[${String(i).padStart(2)}] skip  cover`);
      kept++;
      continue;
    }

    const outPath = path.join(audioDir, `${i}.mp3`);
    if (!flags.force) {
      try {
        const stat = await fs.stat(outPath);
        const sizeKB = (stat.size / 1024).toFixed(1);
        console.log(`[${String(i).padStart(2)}] keep  ${sizeKB.padStart(7)} KB — ${section.title}`);
        kept++;
        continue;
      } catch (_) { /* file missing → generate below */ }
    }

    const text = section.content.replace(/\n+/g, ' ').replace(/\s+/g, ' ').trim();
    if (text.length > 4500) {
      console.warn(`[${String(i).padStart(2)}] warn  ${text.length} chars exceeds the 4,500-char request limit — skipping: ${section.title}`);
      failed++;
      continue;
    }

    process.stdout.write(`[${String(i).padStart(2)}] make  ${String(text.length).padStart(4)} chars … `);
    const t0 = Date.now();
    try {
      const buf = await generateAudio({ apiKey, voiceId, modelId, text });
      await fs.writeFile(outPath, buf);
      const elapsed = ((Date.now() - t0) / 1000).toFixed(1);
      const sizeKB  = (buf.length / 1024).toFixed(1);
      console.log(`done (${sizeKB} KB, ${elapsed}s) — ${section.title}`);
      generated++;
      totalChars += text.length;
    } catch (err) {
      console.log('FAILED');
      console.error(`        ${err.message}`);
      failed++;
      // Bail on auth / quota issues so we don't keep hammering the API
      if (err.status === 401 || err.status === 403 || err.status === 429) {
        console.error('Stopping early — auth or quota error. Check your API key and plan limits.');
        break;
      }
    }
  }

  console.log('');
  console.log(`Done. Generated: ${generated}, kept: ${kept}, failed: ${failed}.`);
  if (totalChars > 0) {
    const credits = totalChars.toLocaleString();
    console.log(`Sent ${credits} characters to ElevenLabs (≈ ${credits} credits on multilingual_v2).`);
  }
}

main().catch(err => {
  console.error('Fatal:', err && err.stack || err);
  process.exit(1);
});
