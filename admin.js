// ============================================================
// EBOOK ADMIN — admin.js
//
// Local-only admin panel. All ebook data is read from the
// globals (sections, PAGE_ANCHORS, BOOK_END_PAGE) that
// script.js exposes — admin.js never writes to any file.
//
// Drafts are saved to localStorage only.
// The "Generate Updated Data" button produces copyable JS;
// paste it manually into script.js when you're ready.
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
