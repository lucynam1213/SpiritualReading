// ============================================================
// EBOOK ADMIN — admin.js
//
// Reads ebook data from script.js globals (read-only).
// Drafts are saved to localStorage only.
// "Generate Updated Data" produces copyable JS.
// "Save to GitHub" uses the GitHub Contents API to commit
//   only the data blocks in script.js — nothing else changes.
//
// SECURITY: The GitHub token is held only in a JS variable
// for the duration of the API call. It is NEVER written to
// localStorage, sessionStorage, the DOM, or any log output.
// ============================================================

// ── Audio files present in audio/ folder ───────────────────
// Update this list if you add or rename audio files.
const KNOWN_AUDIO_FILES = [
  'audio/1.mp3',
  'audio/2.mp3',
  'audio/3.mp3',
  'audio/4.mp3',
  'audio/5.mp3',
  'audio/6.mp3',
  'audio/7.mp3',
  'audio/8.mp3',
  'audio/9.mp3',
  'audio/10.mp3',
  'audio/11.mp3',
  'audio/12.mp3',
  'audio/13.mp3',
  'audio/14.mp3',
  'audio/15.mp3',
  'audio/16.mp3',
];

const DRAFT_KEY    = 'ebook_admin_draft_v1';
const BOOK_END_DEF = 41; // default BOOK_END_PAGE when not overridden

// ── GitHub API config (no secrets here) ────────────────────
const GH_OWNER  = 'lucynam1213';
const GH_REPO   = 'SpiritualReading';
const GH_BRANCH = 'main';
const GH_FILE   = 'script.js';
// Markers that bracket the replaceable data block in script.js.
// Everything between these two lines is overwritten; everything
// outside is preserved byte-for-byte.
const GH_BLOCK_START = 'const CHARS_PER_PAGE ='; // line kept; replacement starts AFTER it
const GH_BLOCK_END   = '// PAGINATION ENGINE '; // line kept; replacement ends BEFORE it

// ── State ──────────────────────────────────────────────────
let adminSections = [];   // working copy — editable
let adminAnchors  = {};   // working copy of PAGE_ANCHORS
let adminEndPage  = BOOK_END_DEF;
let selectedIdx   = -1;   // -1 = "new chapter" mode
let isDirty       = false; // unsaved form changes

// ── Init ───────────────────────────────────────────────────
function init() {
  populateAudioDropdown();
  loadFromGlobals();
  renderList();
  setFormMode('empty');
  bindEvents();
  updateDraftBanner();
}

// Load from script.js globals (sections, PAGE_ANCHORS, BOOK_END_PAGE)
function loadFromGlobals() {
  if (typeof sections !== 'undefined' && Array.isArray(sections)) {
    // Attach the default audio path (audio/{sectionIndex}.mp3) per section
    adminSections = sections.map((s, i) => ({
      type:    s.type    || 'chapter',
      title:   s.title   || '',
      content: s.content || '',
      _audio:  KNOWN_AUDIO_FILES.includes(`audio/${i}.mp3`) ? `audio/${i}.mp3` : '',
    }));
  } else {
    adminSections = [];
    console.warn('[Admin] sections[] not found — script.js may not have loaded.');
  }

  adminAnchors = (typeof PAGE_ANCHORS  !== 'undefined') ? { ...PAGE_ANCHORS  } : {};
  adminEndPage = (typeof BOOK_END_PAGE !== 'undefined') ?   BOOK_END_PAGE      : BOOK_END_DEF;
}

// ── Audio dropdown ──────────────────────────────────────────
function populateAudioDropdown() {
  const sel = document.getElementById('fAudio');
  KNOWN_AUDIO_FILES.forEach(f => {
    const opt = document.createElement('option');
    opt.value = f;
    // Show just the filename for readability
    opt.textContent = f.replace('audio/', '');
    sel.appendChild(opt);
  });
}

// ── Chapter list ────────────────────────────────────────────
function renderList() {
  const list  = document.getElementById('chapterList');
  const count = document.getElementById('chapterCount');
  count.textContent = adminSections.length;

  if (adminSections.length === 0) {
    list.innerHTML = '<div style="padding:24px 18px;color:#9ca3af;font-size:13px;">No sections loaded.</div>';
    return;
  }

  list.innerHTML = adminSections.map((s, i) => {
    const page     = adminAnchors[s.title];
    const pageTag  = page    ? `<span class="page-tag">p.${page}</span>` : '';
    const audioTag = s._audio ? `<span class="audio-tag">🔊 ${s._audio.replace('audio/', '')}</span>` : '';
    const sel      = i === selectedIdx ? 'selected' : '';

    return `
      <div class="chapter-row ${sel}" data-idx="${i}">
        <div class="row-main">
          <span class="row-index">${i}</span>
          <span class="type-tag type-${s.type}">${s.type}</span>
          <span class="row-title">${escHtml(s.title) || '<em style="color:#9ca3af">no title</em>'}</span>
        </div>
        <div class="row-meta">${pageTag}${audioTag}</div>
      </div>`;
  }).join('');

  list.querySelectorAll('.chapter-row').forEach(row => {
    row.addEventListener('click', () => selectChapter(parseInt(row.dataset.idx)));
  });
}

// ── Form ────────────────────────────────────────────────────

function setFormMode(mode) {
  // mode: 'empty' | 'editing' | 'new'
  const heading = document.getElementById('formHeading');
  if (mode === 'empty')   heading.textContent = 'Select a chapter to edit';
  if (mode === 'editing') heading.textContent = `Editing section ${selectedIdx}`;
  if (mode === 'new')     heading.textContent = 'New chapter';
  clearStatus();
}

function selectChapter(idx) {
  selectedIdx = idx;
  const s = adminSections[idx];

  document.getElementById('fType').value      = s.type    || 'chapter';
  document.getElementById('fTitle').value     = s.title   || '';
  document.getElementById('fStartPage').value = adminAnchors[s.title] || '';
  document.getElementById('fAudio').value     = s._audio  || '';
  document.getElementById('fContent').value   = s.content || '';

  setFormMode('editing');
  isDirty = false;
  renderList(); // re-highlight selected row
}

function clearForm() {
  selectedIdx = -1;
  document.getElementById('fType').value      = 'chapter';
  document.getElementById('fTitle').value     = '';
  document.getElementById('fStartPage').value = '';
  document.getElementById('fAudio').value     = '';
  document.getElementById('fContent').value   = '';
  isDirty = false;
  renderList();
}

function startNewChapter() {
  clearForm();
  setFormMode('new');
}

function readForm() {
  return {
    type:      document.getElementById('fType').value.trim(),
    title:     document.getElementById('fTitle').value.trim(),
    startPage: parseInt(document.getElementById('fStartPage').value) || null,
    audio:     document.getElementById('fAudio').value,
    content:   document.getElementById('fContent').value,
  };
}

// Validate and commit form data into adminSections / adminAnchors
function commitForm() {
  const d = readForm();

  if (!d.title) {
    showStatus('Title is required.', 'err');
    return false;
  }

  if (selectedIdx === -1) {
    // Add new section at end
    adminSections.push({ type: d.type, title: d.title, content: d.content, _audio: d.audio });
    selectedIdx = adminSections.length - 1;
  } else {
    const s = adminSections[selectedIdx];
    // If title changed, migrate the anchor key
    if (s.title && s.title !== d.title && adminAnchors[s.title] !== undefined) {
      adminAnchors[d.title] = adminAnchors[s.title];
      delete adminAnchors[s.title];
    }
    s.type    = d.type;
    s.title   = d.title;
    s.content = d.content;
    s._audio  = d.audio;
  }

  // Update / add page anchor
  if (d.startPage && d.title) {
    adminAnchors[d.title] = d.startPage;
  }

  isDirty = false;
  return true;
}

// ── localStorage draft ──────────────────────────────────────
function saveDraft() {
  if (!commitForm()) return;

  const draft = {
    savedAt:     new Date().toISOString(),
    sections:    adminSections,
    anchors:     adminAnchors,
    endPage:     adminEndPage,
    selectedIdx,
  };
  try {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    showStatus('Draft saved ✓', 'ok');
    updateDraftBanner();
    renderList();
  } catch (e) {
    showStatus('Could not save draft (localStorage full?)', 'err');
  }
}

function loadDraft() {
  const raw = localStorage.getItem(DRAFT_KEY);
  if (!raw) {
    alert('No saved draft found.\n\nUse "Save Draft" first to persist your work.');
    return;
  }
  const draft = JSON.parse(raw);
  adminSections = draft.sections  || [];
  adminAnchors  = draft.anchors   || {};
  adminEndPage  = draft.endPage   || BOOK_END_DEF;
  selectedIdx   = draft.selectedIdx ?? -1;

  renderList();
  if (selectedIdx >= 0 && selectedIdx < adminSections.length) {
    selectChapter(selectedIdx);
  } else {
    clearForm();
    setFormMode('empty');
  }
  updateDraftBanner();
  showStatus('Draft loaded ✓', 'ok');
}

function updateDraftBanner() {
  const el  = document.getElementById('draftInfo');
  const raw = localStorage.getItem(DRAFT_KEY);
  if (raw) {
    const d = JSON.parse(raw);
    const when = d.savedAt ? new Date(d.savedAt).toLocaleString() : 'unknown time';
    el.textContent = `Draft in localStorage — ${d.sections?.length ?? 0} sections · saved ${when}`;
    el.hidden = false;
  } else {
    el.hidden = true;
  }
}

// ── Status feedback ─────────────────────────────────────────
function showStatus(msg, type) {
  const el = document.getElementById('formStatus');
  el.textContent = msg;
  el.className = `status-tag status-${type}`;
  if (type === 'ok') setTimeout(clearStatus, 3000);
}

function clearStatus() {
  const el = document.getElementById('formStatus');
  el.textContent = '';
  el.className = 'status-tag';
}

// ── Generate output ─────────────────────────────────────────
function generateOutput() {
  if (adminSections.length === 0) {
    showStatus('No sections to generate.', 'err');
    return;
  }

  // PAGE_ANCHORS block
  const anchorLines = Object.entries(adminAnchors)
    .map(([title, page]) => `  ${JSON.stringify(title)}: ${page},`)
    .join('\n');
  const anchorsBlock =
    `const PAGE_ANCHORS = {\n${anchorLines}\n};`;

  const endPageBlock =
    `const BOOK_END_PAGE = ${adminEndPage}; // One past the last printed page (for final-section target).`;

  // sections[] block
  const sectionItems = adminSections.map((s, i) => {
    // Escape backticks and template literal ${} in content
    const safeContent = (s.content || '')
      .replace(/\\/g, '\\\\')
      .replace(/`/g,  '\\`')
      .replace(/\$\{/g, '\\${');

    return (
      `  {\n` +
      `    type: ${JSON.stringify(s.type)},\n` +
      `    title: ${JSON.stringify(s.title)},\n` +
      `    content: \`${safeContent}\`\n` +
      `  }`
    );
  });
  const sectionsBlock = `const sections = [\n${sectionItems.join(',\n')}\n];`;

  const timestamp = new Date().toLocaleString();
  const lines = [
    `// ── Generated by Ebook Admin · ${timestamp} ────────────────────────────`,
    `// Paste this into script.js, replacing the existing PAGE_ANCHORS,`,
    `// BOOK_END_PAGE, and sections blocks. Do NOT replace anything else.`,
    ``,
    anchorsBlock,
    endPageBlock,
    ``,
    sectionsBlock,
  ];

  const output = lines.join('\n');
  document.getElementById('outputArea').value = output;
  document.getElementById('btnCopy').disabled = false;
  document.getElementById('outputArea').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function copyOutput() {
  const area = document.getElementById('outputArea');
  const btn  = document.getElementById('btnCopy');

  if (!area.value) return;

  // Prefer modern Clipboard API; fall back to execCommand
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(area.value).then(() => {
      btn.textContent = '✓ Copied!';
      setTimeout(() => { btn.textContent = 'Copy to Clipboard'; }, 2500);
    }).catch(() => fallbackCopy(area, btn));
  } else {
    fallbackCopy(area, btn);
  }
}

function fallbackCopy(area, btn) {
  area.select();
  try {
    document.execCommand('copy');
    btn.textContent = '✓ Copied!';
    setTimeout(() => { btn.textContent = 'Copy to Clipboard'; }, 2500);
  } catch (_) {
    alert('Could not copy automatically.\nPlease select all text in the output box and copy manually (Cmd+A, Cmd+C).');
  }
}

// ── GitHub save ─────────────────────────────────────────────

// UTF-8–safe base64 encode/decode (handles Korean characters correctly).
function base64ToUtf8(b64) {
  const bytes = Uint8Array.from(atob(b64.replace(/\n/g, '')), c => c.charCodeAt(0));
  return new TextDecoder('utf-8').decode(bytes);
}

function utf8ToBase64(str) {
  const bytes = new TextEncoder().encode(str);
  let binary = '';
  bytes.forEach(b => binary += String.fromCharCode(b));
  return btoa(binary);
}

// Fetch the current script.js from GitHub and return { sha, content }.
async function fetchScriptJs(token) {
  const url = `https://api.github.com/repos/${GH_OWNER}/${GH_REPO}/contents/${GH_FILE}`;
  const res = await fetch(url, {
    headers: {
      'Authorization':        `Bearer ${token}`,
      'Accept':               'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(`GitHub API ${res.status}: ${err.message || res.statusText}`);
  }
  const data = await res.json();
  return { sha: data.sha, content: base64ToUtf8(data.content) };
}

// Commit newContent back to GitHub as script.js.
async function commitScriptJs(token, newContent, sha) {
  const url = `https://api.github.com/repos/${GH_OWNER}/${GH_REPO}/contents/${GH_FILE}`;
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization':        `Bearer ${token}`,
      'Accept':               'application/vnd.github+json',
      'Content-Type':         'application/json',
      'X-GitHub-Api-Version': '2022-11-28',
    },
    body: JSON.stringify({
      message: 'Update ebook chapters from admin page',
      content: utf8ToBase64(newContent),
      sha,
      branch: GH_BRANCH,
    }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(`GitHub API ${res.status}: ${err.message || res.statusText}`);
  }
  return res.json();
}

// Find the replaceable block in the original script.js and swap in
// freshly generated PAGE_ANCHORS + BOOK_END_PAGE + sections content.
function buildReplacedContent(original) {
  // Find the end of the CHARS_PER_PAGE line (replacement starts on the next line).
  const startLineIdx = original.indexOf('\n', original.indexOf(GH_BLOCK_START));
  if (startLineIdx === -1) {
    throw new Error('Could not locate CHARS_PER_PAGE line in script.js.\nIs this the right file?');
  }

  // Find the PAGINATION ENGINE comment line (replacement ends just before it).
  const endIdx = original.indexOf(GH_BLOCK_END);
  if (endIdx === -1) {
    throw new Error('Could not locate PAGINATION ENGINE comment in script.js.\nIs this the right file?');
  }
  // Walk back to the start of that line so we don't cut mid-comment.
  const endLineIdx = original.lastIndexOf('\n', endIdx) + 1;

  if (startLineIdx >= endLineIdx) {
    throw new Error('Marker positions are inverted — file structure may have changed.');
  }

  // Build the new data block.
  const newBlock = buildDataBlock();

  return original.slice(0, startLineIdx + 1)
    + '\n'
    + newBlock
    + '\n'
    + original.slice(endLineIdx);
}

// Generate the PAGE_ANCHORS + BOOK_END_PAGE + sections JS string.
function buildDataBlock() {
  // PAGE_ANCHORS
  const anchorLines = Object.entries(adminAnchors)
    .map(([title, page]) => `  ${JSON.stringify(title)}: ${page},`)
    .join('\n');
  const anchorsBlock = `// Printed-book page anchors: section title → first printed page of that section\nconst PAGE_ANCHORS = {\n${anchorLines}\n};`;

  const endPageBlock = `const BOOK_END_PAGE = ${adminEndPage}; // One past the last printed page (for final-section target).`;

  // sections[]
  const sectionItems = adminSections.map(s => {
    const safeContent = (s.content || '')
      .replace(/\\/g,  '\\\\')
      .replace(/`/g,   '\\`')
      .replace(/\$\{/g, '\\${');
    return (
      `  {\n` +
      `    type: ${JSON.stringify(s.type)},\n` +
      `    title: ${JSON.stringify(s.title)},\n` +
      `    content: \`${safeContent}\`\n` +
      `  }`
    );
  });
  const sectionsBlock = `const sections = [\n${sectionItems.join(',\n')}\n];`;

  return [anchorsBlock, endPageBlock, '', sectionsBlock].join('\n');
}

// Sanity-check that the replacement didn't accidentally remove critical JS.
function verifySafety(original, updated) {
  const mustExist = [
    'function buildPages(',
    'function renderPage(',
    'function renderCover(',
    'function renderToc(',
    'function splitParasIntoPages(',
    'speechSynthesis',
    'ElevenLabs',
    'ttsPlayBtn',
  ];
  const missing = mustExist.filter(fn => !updated.includes(fn));
  if (missing.length > 0) {
    throw new Error(
      `Safety check failed — these required functions/strings are missing from the updated file:\n` +
      missing.map(m => `  • ${m}`).join('\n') +
      `\n\nThe save was cancelled. No changes were made.`
    );
  }
  // Size sanity: updated file should be within 50 %–200 % of original
  const ratio = updated.length / original.length;
  if (ratio < 0.5 || ratio > 2) {
    throw new Error(
      `Safety check failed: updated file is ${Math.round(ratio * 100)}% the size of the original.\n` +
      `This seems wrong. The save was cancelled.`
    );
  }
}

// GitHub status UI helpers.
function setGhStatus(html, type) {
  const el = document.getElementById('ghStatus');
  el.innerHTML = html;
  el.className = `gh-status gh-${type}`;
  el.hidden = false;
}

function clearGhStatus() {
  const el = document.getElementById('ghStatus');
  el.hidden = true;
  el.className = 'gh-status';
}

function setGhBtnLoading(loading) {
  const btn = document.getElementById('btnSaveGitHub');
  btn.disabled = loading;
  btn.textContent = loading ? '⏳ Saving…' : '⬆ Save to GitHub';
}

// Main save-to-GitHub flow.
async function saveToGitHub() {
  const token = document.getElementById('ghToken').value.trim();

  if (!token) {
    setGhStatus('Please paste your GitHub Personal Access Token first.', 'err');
    return;
  }
  if (adminSections.length === 0) {
    setGhStatus('No sections to save — load ebook data first.', 'err');
    return;
  }

  const confirmed = confirm(
    'Save chapters to GitHub?\n\n' +
    'Repository : lucynam1213/SpiritualReading\n' +
    'File       : script.js\n' +
    'Branch     : main\n\n' +
    'Only the sections[], PAGE_ANCHORS, and BOOK_END_PAGE\n' +
    'data blocks will be replaced. All audio logic, design,\n' +
    'and TTS code is preserved unchanged.\n\n' +
    'Continue?'
  );
  if (!confirmed) return;

  clearGhStatus();
  setGhBtnLoading(true);

  try {
    // 1. Fetch current file + SHA from GitHub
    setGhStatus('Fetching current script.js from GitHub…', 'loading');
    const { sha, content: original } = await fetchScriptJs(token);

    // 2. Build updated content
    const updated = buildReplacedContent(original);

    // 3. Run safety checks before committing
    verifySafety(original, updated);

    // 4. Commit to GitHub
    setGhStatus('Uploading changes to GitHub…', 'loading');
    const result = await commitScriptJs(token, updated, sha);

    const commitUrl = result.commit?.html_url ||
      `https://github.com/${GH_OWNER}/${GH_REPO}/commits/${GH_BRANCH}`;
    setGhStatus(
      `✓ Saved successfully! &nbsp;<a href="${commitUrl}" target="_blank" rel="noopener noreferrer">View commit on GitHub →</a>`,
      'ok'
    );

  } catch (err) {
    setGhStatus(`✗ ${escHtml(err.message)}`, 'err');
  } finally {
    setGhBtnLoading(false);
  }
}

// ── Utilities ───────────────────────────────────────────────
function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ── Event bindings ──────────────────────────────────────────
function bindEvents() {
  document.getElementById('btnSaveDraft').addEventListener('click', saveDraft);
  document.getElementById('btnReset').addEventListener('click', () => {
    if (isDirty && !confirm('Discard unsaved changes?')) return;
    clearForm();
    setFormMode('empty');
  });
  document.getElementById('btnAddNew').addEventListener('click', startNewChapter);
  document.getElementById('btnLoadDraft').addEventListener('click', loadDraft);
  document.getElementById('btnGenerate').addEventListener('click', generateOutput);
  document.getElementById('btnCopy').addEventListener('click', copyOutput);
  document.getElementById('btnSaveGitHub').addEventListener('click', saveToGitHub);

  // Track unsaved changes
  ['fType','fTitle','fStartPage','fAudio','fContent'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => { isDirty = true; });
  });

  // Warn before closing with unsaved work
  window.addEventListener('beforeunload', e => {
    if (isDirty) {
      e.preventDefault();
      e.returnValue = '';
    }
  });
}

// ── Start ───────────────────────────────────────────────────
init();
