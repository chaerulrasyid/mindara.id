// ═══════════════════════════════════════════════
//  COLOR SYSTEM
// ═══════════════════════════════════════════════
const LEVEL_COLORS = [
  { a:'#003B35', b:'#004F46', t:'light' },
  { a:'#FFA858', b:'#FFB870', t:'dark'  },
  { a:'#1A6B5C', b:'#228A78', t:'light' },
  { a:'#C97030', b:'#DD8040', t:'light' },
  { a:'#004A42', b:'#006055', t:'light' },
  { a:'#E8924A', b:'#F5A460', t:'dark'  },
  { a:'#2A7A6A', b:'#38988A', t:'light' },
  { a:'#B86030', b:'#CC7040', t:'light' },
];

const PALETTE = [
  { a:'#003B35', b:'#004F46', t:'light', label:'Teal Gelap'    },
  { a:'#FFA858', b:'#FFB870', t:'dark',  label:'Oranye'        },
  { a:'#1A6B5C', b:'#228A78', t:'light', label:'Teal Sedang'   },
  { a:'#C97030', b:'#DD8040', t:'light', label:'Coklat Oranye' },
  { a:'#004A42', b:'#005A52', t:'light', label:'Teal Tua'      },
  { a:'#E8924A', b:'#F5A460', t:'dark',  label:'Pasir Terang'  },
  { a:'#2A7A6A', b:'#38988A', t:'light', label:'Teal Muda'     },
  { a:'#B86030', b:'#CC7040', t:'light', label:'Coklat Tua'    },
  { a:'#8B5A2B', b:'#A06A35', t:'light', label:'Coklat'        },
  { a:'#5A8A80', b:'#6A9A90', t:'light', label:'Abu-teal'      },
];

const TEXT_LIGHT = '#FFFCF8';
const TEXT_DARK  = '#003B35';

// ═══════════════════════════════════════════════
//  DEMO MAP STRUCTURES
// ═══════════════════════════════════════════════
const DEMO_MAPS = {
  'Skripsi S1': {
    root: 'Skripsi S1',
    branches: [
      { label: 'Pendahuluan',    children: ['Latar Belakang','Rumusan Masalah','Tujuan','Manfaat'] },
      { label: 'Kajian Pustaka', children: ['Teori Utama','Penelitian Terdahulu','Kerangka Berpikir'] },
      { label: 'Metodologi',     children: ['Jenis Penelitian','Populasi & Sampel','Teknik Analisis'] },
      { label: 'Hasil & Bahasan',children: ['Temuan Data','Analisis','Diskusi','Implikasi'] },
      { label: 'Penutup',        children: ['Kesimpulan','Saran','Keterbatasan'] },
    ]
  },
  'Rencana Bisnis Startup': {
    root: 'Rencana Bisnis',
    branches: [
      { label: 'Value Proposition', children: ['Problem Statement','Solusi','Unique Selling Point'] },
      { label: 'Target Market',     children: ['Segmen Utama','Customer Persona','Market Size'] },
      { label: 'Model Bisnis',      children: ['Revenue Stream','Struktur Biaya','Channel'] },
      { label: 'Operasional',       children: ['Tim Inti','Tech Stack','Roadmap'] },
      { label: 'Keuangan',          children: ['Proyeksi Revenue','Break Even','Funding Need'] },
    ]
  },
  'Agentic AI': {
    root: 'Agentic AI',
    branches: [
      { label: 'Arsitektur',   children: ['Planning Engine','Memory Module','Tool Executor','Orchestrator'] },
      { label: 'Use Cases',    children: ['Otomasi Bisnis','Customer Service','Data Analysis','Code Assistant'] },
      { label: 'Tools & RAG',  children: ['Vector DB','LLM API','Function Calling','Knowledge Base'] },
      { label: 'Tantangan',    children: ['Hallucination','Keamanan','Biaya Operasi','Kontrol'] },
      { label: 'Masa Depan',   children: ['Multi-Agent','AGI','Regulasi AI'] },
    ]
  },
  'Manajemen Proyek': {
    root: 'Manajemen Proyek',
    branches: [
      { label: 'Perencanaan',  children: ['Scope','Timeline','Resource Plan','Budget'] },
      { label: 'Eksekusi',     children: ['Task Assignment','Daily Standup','Sprint','Deliverable'] },
      { label: 'Monitoring',   children: ['KPI','Progress Report','Risk Register','Status Meeting'] },
      { label: 'Tim',          children: ['Struktur Tim','Peran & Tanggung Jawab','Komunikasi'] },
      { label: 'Penutupan',    children: ['Evaluasi','Lessons Learned','Dokumentasi'] },
    ]
  },
  'Belajar Data Science': {
    root: 'Data Science',
    branches: [
      { label: 'Fondasi',       children: ['Statistik','Matematika','Python/R','SQL'] },
      { label: 'Data Wrangling',children: ['Pandas','Cleaning','EDA','Feature Engineering'] },
      { label: 'Machine Learning',children:['Supervised','Unsupervised','Model Evaluation','Tuning'] },
      { label: 'Deep Learning', children: ['Neural Network','CNN','RNN','Transformers'] },
      { label: 'Portfolio',     children: ['Kaggle','GitHub','Blog','Project Nyata'] },
    ]
  },
  'Strategi Karir': {
    root: 'Strategi Karir',
    branches: [
      { label: 'Self Assessment', children: ['Skill Audit','Passion','Nilai Hidup','Kepribadian'] },
      { label: 'Target Karir',    children: ['Role Impian','Industri','Timeline 5 Tahun'] },
      { label: 'Skill Building',  children: ['Hard Skill','Soft Skill','Sertifikasi','Mentoring'] },
      { label: 'Personal Brand',  children: ['LinkedIn','Portfolio','Networking','Konten'] },
      { label: 'Eksekusi',        children: ['Lamaran','Interview','Negosiasi','Onboarding'] },
    ]
  },
};

const DEMO_BANK = {
  default:           ['Pengertian','Manfaat','Tantangan','Implementasi','Contoh Kasus','Evaluasi','Referensi'],
  'Agentic AI':      ['Arsitektur Agent','Memory Module','Planning Engine','Tool Use','Multi-Agent','RAG','Evaluasi'],
  'Data':            ['Sumber Data','Kualitas Data','Pipeline ETL','Analisis','Visualisasi','Keamanan Data'],
  'Bisnis':          ['Model Revenue','Segmen Pasar','Kompetitor','Value Proposition','KPI','Roadmap'],
  'Strategi':        ['Visi & Misi','SWOT Analysis','OKR','Timeline','Sumber Daya','Risiko'],
  'Teknologi':       ['Frontend','Backend','Database','API','Keamanan','Skalabilitas'],
  'Produk':          ['User Research','Fitur Utama','MVP','Desain UI/UX','Testing','Launch'],
};

// ── CONTEXT BANK: key = "root_node" atau "parent_node" (lowercase) ──────────
const CONTEXT_BANK = {
  // Agentic AI → cabang utama
  'agentic ai_arsitektur':    ['Planning Engine','Memory Layer','Tool Executor','Feedback Loop','Orchestrator','State Manager'],
  'agentic ai_use cases':     ['Customer Service Bot','Code Assistant','Research Agent','Data Pipeline','Workflow Otomatis','Content Generator'],
  'agentic ai_tools & rag':   ['Vector Database','Embedding Model','Chunking Strategy','Retrieval Logic','Reranking','Hybrid Search'],
  'agentic ai_tantangan':     ['Prompt Injection','Biaya Token','Latency Tinggi','Output Tidak Stabil','Kontrol Agent','Auditabilitas'],
  'agentic ai_masa depan':    ['Autonomous Agent','Self-improving AI','Agent Marketplace','Regulasi Global','Human-AI Teaming'],
  // Agentic AI → level 2
  'arsitektur_planning':      ['Task Decomposition','Goal Hierarchy','Action Selection','Constraint Handling','Replanning'],
  'arsitektur_memory':        ['Working Memory','Episodic Store','Semantic Cache','Memory Pruning','Context Window'],
  'arsitektur_memory module': ['Short-term Memory','Long-term Memory','Memory Retrieval','Memory Update','Forgetting Curve'],
  'arsitektur_planning engine':['Task Decomposition','Goal Setting','Action Space','Sub-goal Chain','Priority Queue'],
  'arsitektur_tool executor': ['Function Calling','API Gateway','Sandboxing','Error Handling','Tool Registry'],
  'arsitektur_orchestrator':  ['Agent Supervisor','Task Router','Load Balancer','Workflow Engine','Event Bus'],
  'tools & rag_vector database':['Pinecone','Weaviate','ChromaDB','FAISS','pgvector','Index Strategy'],
  'tools & rag_embedding model':['OpenAI Ada','Sentence-BERT','Cohere Embed','BGE Model','Fine-tuning'],

  // Skripsi → cabang utama
  'skripsi_pendahuluan':      ['Latar Belakang','Rumusan Masalah','Tujuan Penelitian','Manfaat','Batasan Masalah','Definisi Istilah'],
  'skripsi_kajian pustaka':   ['Teori Utama','Penelitian Terdahulu','Kerangka Berpikir','Hipotesis','Gap Research'],
  'skripsi_metodologi':       ['Jenis Penelitian','Populasi & Sampel','Instrumen','Teknik Pengumpulan','Analisis Data','Validitas & Reliabilitas'],
  'skripsi_hasil & bahasan':  ['Deskripsi Data','Hasil Uji','Interpretasi','Perbandingan Teori','Implikasi'],
  'skripsi_penutup':          ['Kesimpulan','Saran Praktis','Saran Penelitian Lanjut','Keterbatasan','Kontribusi'],
  // Skripsi → level 2
  'pendahuluan_latar belakang':['Konteks Global','Konteks Indonesia','Kondisi Saat Ini','Problem Statement','Urgensitas'],
  'metodologi_analisis data': ['Uji Normalitas','Uji Hipotesis','Regresi Linear','ANOVA','Thematic Analysis'],

  // Rencana Bisnis → cabang utama
  'rencana bisnis_value proposition':['Problem Statement','Solusi Ditawarkan','Unique Selling Point','Customer Benefit','Pain & Gain'],
  'rencana bisnis_target market':    ['Segmen Primer','Customer Persona','Market Size (TAM/SAM/SOM)','Demografi','Psikografi'],
  'rencana bisnis_model bisnis':     ['Revenue Stream','Struktur Biaya','Gross Margin','Unit Economics','Monetisasi'],
  'rencana bisnis_operasional':      ['Tim Inti','Tech Stack','Vendor','SOP','Quality Control'],
  'rencana bisnis_keuangan':         ['Proyeksi Revenue','Break Even Point','Cash Flow','Funding Need','ROI'],

  // Manajemen Proyek → cabang utama
  'manajemen proyek_perencanaan':    ['Project Charter','WBS','Gantt Chart','Resource Plan','Risk Register'],
  'manajemen proyek_eksekusi':       ['Sprint Planning','Daily Standup','Task Assignment','Deliverable','Code Review'],
  'manajemen proyek_monitoring':     ['KPI Dashboard','Earned Value','Variance Analysis','Status Report','Change Request'],
  'manajemen proyek_tim':            ['RACI Matrix','Kompetensi','Komunikasi','Resolusi Konflik','Onboarding'],

  // Data Science → cabang utama
  'data science_fondasi':            ['Statistik Deskriptif','Probabilitas','Aljabar Linear','Python Dasar','SQL Dasar'],
  'data science_machine learning':   ['Supervised Learning','Unsupervised Learning','Reinforcement Learning','Model Evaluation','Hyperparameter Tuning'],
  'data science_deep learning':      ['Arsitektur ANN','Backpropagation','CNN','RNN/LSTM','Transformer','Transfer Learning'],
  'data science_portfolio':          ['Kaggle Competition','GitHub Projects','Streamlit App','Blog Artikel','Sertifikasi'],

  // Strategi Karir → cabang utama
  'strategi karir_self assessment':  ['Inventori Skill','Strengths Finder','Values Clarification','MBTI/DISC','Feedback 360'],
  'strategi karir_skill building':   ['Hard Skill Roadmap','Soft Skill','Online Course','Mentorship','Practice Project'],
  'strategi karir_personal brand':   ['LinkedIn Optimization','Portfolio Website','Thought Leadership','Networking Event','Content Creator'],
};

// ═══════════════════════════════════════════════
//  STATE
// ═══════════════════════════════════════════════
let nodes   = {};
let sel     = null;
let ctxId   = null;
let vx=0, vy=0, vs=1;
let panning=false, px0=0, py0=0, pvx0=0, pvy0=0;
let dragId=null, dox=0, doy=0, didDrag=false;
let apiKey  = localStorage.getItem('mi_key')  || '';
let aiProv  = localStorage.getItem('mi_prov') || 'demo';

// ═══════════════════════════════════════════════
//  WELCOME SCREEN
// ═══════════════════════════════════════════════
document.getElementById('welcome-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') startGenerate();
});

document.getElementById('panel-gen-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') panelGenerate();
});

function setExample(topic) {
  document.getElementById('welcome-input').value = topic;
  document.getElementById('welcome-input').focus();
}

async function startGenerate() {
  const topic = document.getElementById('welcome-input').value.trim();
  if (!topic) { document.getElementById('welcome-input').focus(); return; }
  hideWelcome();
  await generateMap(topic);
}

function startBlank() {
  hideWelcome();
  nodes = {};
  render();
  checkEmpty();
}

function hideWelcome() {
  const w = document.getElementById('welcome');
  w.classList.add('hiding');
  setTimeout(() => { w.style.display='none'; }, 400);
  document.getElementById('ai-panel').classList.remove('hidden');
}

function backToWelcome() { showDashboard(); }

// ═══════════════════════════════════════════════
//  CANVAS MANAGEMENT (DASHBOARD)
// ═══════════════════════════════════════════════
const FREE_LIMIT = 3;
let currentCanvasId = null;

function getCanvases() {
  return JSON.parse(localStorage.getItem('mi_canvases') || '[]');
}
function saveCanvasesMeta(list) {
  localStorage.setItem('mi_canvases', JSON.stringify(list));
}

function showDashboard() {
  if (currentCanvasId) _saveToSlot(false);
  currentCanvasId = null;
  document.getElementById('main').style.display       = 'none';
  document.getElementById('welcome').style.display    = 'none';
  document.getElementById('floating-bar').className   = '';
  document.getElementById('left-sidebar').className   = '';
  document.getElementById('ai-panel').classList.add('hidden');
  nodes = {}; sel = null; render();
  // Tampilkan dashboard
  renderDashboard();
  document.getElementById('dashboard').style.display = 'flex';
}

function renderDashboard() {
  const canvases = getCanvases();
  const counter  = document.getElementById('dash-counter');
  const grid     = document.getElementById('dash-grid');
  const banner   = document.getElementById('dash-banner');
  const atLimit  = canvases.length >= FREE_LIMIT;

  counter.textContent = `${canvases.length}/${FREE_LIMIT} Maps`;
  counter.className   = 'dash-map-badge' + (atLimit ? ' full' : '');
  banner.className    = 'dash-banner' + (atLimit ? ' show' : '');
  grid.innerHTML      = '';

  // Kartu canvas yang ada (terbaru dulu)
  [...canvases].reverse().forEach(cv => {
    const card = document.createElement('div');
    card.className = 'canvas-card canvas-existing';
    card.innerHTML = `
      <div class="card-icon-area">
        <svg width="40" height="48" viewBox="0 0 40 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="38" height="46" rx="4" stroke="currentColor" stroke-width="2.5"/>
          <line x1="8" y1="14" x2="32" y2="14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <line x1="8" y1="22" x2="32" y2="22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <line x1="8" y1="30" x2="22" y2="30" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <div class="card-info">
        <div class="card-name">${cv.name}</div>
        <div class="card-meta">${formatDate(new Date(cv.updatedAt))}</div>
      </div>
      <div class="card-actions">
        <button class="card-btn" onclick="event.stopPropagation();openCanvas('${cv.id}')">Buka</button>
        <button class="card-btn card-btn-danger" onclick="event.stopPropagation();deleteCanvas('${cv.id}')">Hapus</button>
      </div>`;
    card.addEventListener('click', () => openCanvas(cv.id));
    grid.appendChild(card);
  });

  // Kartu buat baru / upgrade (di akhir grid atau awal jika kosong)
  const actionCard = document.createElement('div');
  if (!atLimit) {
    actionCard.className = 'canvas-card canvas-new';
    actionCard.onclick = () => openNameModal();
    actionCard.innerHTML = `<div class="card-new-icon">＋</div><div class="card-new-label">Canvas Baru</div>`;
    grid.insertBefore(actionCard, grid.firstChild);
  } else {
    actionCard.className = 'canvas-card canvas-upgrade';
    actionCard.onclick = () => showUpgradeModal();
    actionCard.innerHTML = `<div class="card-new-icon">✦</div><div class="card-new-label">Upgrade ke Pro</div><div class="card-limit-note">Batas 3 canvas gratis tercapai</div>`;
    grid.insertBefore(actionCard, grid.firstChild);
  }
}

function openNameModal() {
  const modal = document.getElementById('name-modal');
  const inp   = document.getElementById('name-input');
  inp.value   = '';
  modal.style.display = 'flex';
  setTimeout(() => inp.focus(), 80);
  inp.onkeydown = e => {
    if (e.key === 'Enter')  confirmCreateCanvas();
    if (e.key === 'Escape') closeNameModal();
  };
}
function closeNameModal()   { document.getElementById('name-modal').style.display   = 'none'; }
function showUpgradeModal() { document.getElementById('upgrade-modal').style.display = 'flex'; }
function closeUpgradeModal(){ document.getElementById('upgrade-modal').style.display = 'none'; }

function confirmCreateCanvas() {
  const name = document.getElementById('name-input').value.trim() || 'Canvas Baru';
  closeNameModal();
  const id = 'cv_' + Date.now();
  const list = getCanvases();
  list.push({ id, name, createdAt: Date.now(), updatedAt: Date.now(), nodeCount: 0 });
  saveCanvasesMeta(list);
  currentCanvasId = id;
  nodes = {}; sel = null;
  _enterEditor(name, false); // langsung ke editor, skip welcome
  render(); checkEmpty();
}

function openCanvas(id) {
  const cv = getCanvases().find(c => c.id === id);
  if (!cv) return;
  currentCanvasId = id;
  const raw = localStorage.getItem('mi_canvas_' + id);
  nodes = raw ? (JSON.parse(raw).nodes || {}) : {};
  sel = null;
  const hasNodes = Object.keys(nodes).length > 0;
  _enterEditor(cv.name, !hasNodes);
  if (hasNodes) { render(); checkEmpty(); resetView(); }
}

function deleteCanvas(id) {
  if (!confirm('Hapus canvas ini? Data tidak bisa dikembalikan.')) return;
  saveCanvasesMeta(getCanvases().filter(c => c.id !== id));
  localStorage.removeItem('mi_canvas_' + id);
  renderDashboard();
}

function _enterEditor(name, showWelcome) {
  document.getElementById('dashboard').style.display  = 'none';
  document.getElementById('main').style.display       = 'flex';
  document.getElementById('floating-bar').className   = 'show';
  document.getElementById('left-sidebar').className   = 'show';
  document.getElementById('toolbar-canvas-name').textContent = name;
  if (showWelcome) {
    document.getElementById('welcome').style.display = 'flex';
    document.getElementById('welcome').classList.remove('hiding');
    document.getElementById('welcome-input').value = '';
    document.getElementById('ai-panel').classList.add('hidden');
  } else {
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('ai-panel').classList.remove('hidden');
  }
}

// ═══════════════════════════════════════════════
//  GRID SETTINGS
// ═══════════════════════════════════════════════
const GRID_SIZES     = { s: 16, m: 28, l: 44 };
const GRID_OPACITIES = { light: 0.05, med: 0.1, strong: 0.18 };

let gridStyle   = localStorage.getItem('mi_grid_style')   || 'dots';
let gridSize    = localStorage.getItem('mi_grid_size')    || 'm';
let gridOpacity = localStorage.getItem('mi_grid_opacity') || 'med';

function applyGridSettings() {
  const wrap = document.getElementById('canvas-wrap');
  wrap.dataset.gridStyle = gridStyle;
  wrap.style.setProperty('--grid-size', GRID_SIZES[gridSize] + 'px');
  wrap.style.setProperty('--grid-opacity', GRID_OPACITIES[gridOpacity]);

  document.getElementById('ls-grid').classList.toggle('active', gridStyle !== 'none');
  document.querySelectorAll('.gp-style-opt').forEach(b => b.classList.toggle('active', b.dataset.gstyle === gridStyle));
  document.querySelectorAll('[data-gsize]').forEach(b => b.classList.toggle('active', b.dataset.gsize === gridSize));
  document.querySelectorAll('[data-gopacity]').forEach(b => b.classList.toggle('active', b.dataset.gopacity === gridOpacity));
}

function setGridStyle(v)   { gridStyle = v;   localStorage.setItem('mi_grid_style', v);   applyGridSettings(); }
function setGridSize(v)    { gridSize = v;    localStorage.setItem('mi_grid_size', v);    applyGridSettings(); }
function setGridOpacity(v) { gridOpacity = v; localStorage.setItem('mi_grid_opacity', v); applyGridSettings(); }

function toggleGridPanel(e) {
  e.stopPropagation();
  const pop = document.getElementById('grid-popover');
  if (pop.classList.contains('open')) { closeGridPanel(); return; }
  const r = document.getElementById('ls-grid').getBoundingClientRect();
  pop.style.left = (r.right + 10) + 'px';
  pop.style.top  = r.top + 'px';
  pop.classList.add('open');
  const ph = pop.getBoundingClientRect().height;
  if (r.top + ph > window.innerHeight - 10) {
    pop.style.top = Math.max(10, window.innerHeight - ph - 10) + 'px';
  }
}
function closeGridPanel() {
  document.getElementById('grid-popover').classList.remove('open');
}
document.addEventListener('click', e => {
  const pop = document.getElementById('grid-popover');
  if (pop.classList.contains('open') && !pop.contains(e.target) && !document.getElementById('ls-grid').contains(e.target)) {
    closeGridPanel();
  }
});

function setEditorTool(tool) {
  // Visual active state
  document.querySelectorAll('.ls-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById('ls-' + tool);
  if (btn) btn.classList.add('active');
  // Pan mode: change canvas cursor
  const cw = document.getElementById('canvas-wrap');
  if (tool === 'pan') {
    cw.style.cursor = 'grab';
    cw.dataset.tool = 'pan';
  } else {
    cw.style.cursor = 'default';
    cw.dataset.tool = 'select';
  }
}

function _saveToSlot(showToast = true) {
  if (!currentCanvasId) return;
  localStorage.setItem('mi_canvas_' + currentCanvasId, JSON.stringify({ nodes }));
  const list = getCanvases();
  const cv   = list.find(c => c.id === currentCanvasId);
  if (cv) { cv.updatedAt = Date.now(); cv.nodeCount = Object.keys(nodes).length; saveCanvasesMeta(list); }
  if (showToast) toast('Canvas disimpan');
}

function formatDate(d) {
  const diff = Date.now() - d;
  if (diff < 60000)    return 'Baru saja';
  if (diff < 3600000)  return Math.floor(diff/60000) + ' menit lalu';
  if (diff < 86400000) return Math.floor(diff/3600000) + ' jam lalu';
  if (diff < 604800000)return Math.floor(diff/86400000) + ' hari lalu';
  return d.toLocaleDateString('id-ID');
}

async function panelGenerate() {
  const topic = document.getElementById('panel-gen-input').value.trim();
  if (!topic) return;
  document.getElementById('panel-gen-input').value = '';
  await generateMap(topic);
}

// ═══════════════════════════════════════════════
//  AI GENERATE FROM PROMPT
// ═══════════════════════════════════════════════
async function generateMap(topic) {
  // Show generating overlay
  const overlay = document.getElementById('gen-overlay');
  document.getElementById('gen-topic-label').textContent = `"${topic}"`;
  overlay.classList.add('show');

  const statuses = [
    'Menganalisis topik...',
    'Merancang struktur peta...',
    'Menyusun cabang utama...',
    'Menambahkan detail...',
    'Selesai!'
  ];
  let si = 0;
  const statusEl = document.getElementById('gen-status');
  const statusInterval = setInterval(() => {
    if (si < statuses.length - 1) {
      statusEl.textContent = statuses[++si];
    }
  }, 400);

  try {
    let mapData;

    if (apiKey && aiProv !== 'demo') {
      mapData = await generateFromAI(topic);
    } else {
      await sleep(2000);
      mapData = getDemoMap(topic);
    }

    clearInterval(statusInterval);
    statusEl.textContent = 'Selesai!';
    await sleep(300);

    overlay.classList.remove('show');
    buildMapFromData(mapData);

  } catch(e) {
    clearInterval(statusInterval);
    overlay.classList.remove('show');
    toast('Gagal generate. Menggunakan mode demo.');
    await sleep(200);
    buildMapFromData(getDemoMap(topic));
  }
}

function getDemoMap(topic) {
  // Find closest match
  for (const key of Object.keys(DEMO_MAPS)) {
    if (topic.toLowerCase().includes(key.toLowerCase()) ||
        key.toLowerCase().includes(topic.toLowerCase().split(' ')[0])) {
      return DEMO_MAPS[key];
    }
  }
  // Generic fallback
  return {
    root: topic,
    branches: [
      { label: 'Pengertian',    children: ['Definisi','Sejarah','Ruang Lingkup'] },
      { label: 'Komponen Utama',children: ['Elemen 1','Elemen 2','Elemen 3'] },
      { label: 'Manfaat',       children: ['Bagi Individu','Bagi Organisasi','Bagi Masyarakat'] },
      { label: 'Tantangan',     children: ['Internal','Eksternal','Solusi'] },
      { label: 'Implementasi',  children: ['Perencanaan','Eksekusi','Evaluasi'] },
    ]
  };
}

async function generateFromAI(topic) {
  const prompt = `Buat struktur mind map untuk topik "${topic}" dalam bahasa Indonesia.
Jawab HANYA dengan JSON valid tanpa markdown, format:
{"root":"${topic}","branches":[{"label":"Cabang Utama","children":["anak1","anak2","anak3"]}]}
Buat 4-5 cabang utama, setiap cabang 3-4 anak. Singkat dan padat.`;

  const result = await callAI(prompt);

  // Extract JSON from response
  const jsonMatch = result.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error('Invalid JSON response');
  return JSON.parse(jsonMatch[0]);
}

function buildMapFromData(data) {
  nodes = {};
  const wrap = document.getElementById('canvas-wrap');
  const W = wrap.clientWidth || 900;
  const H = wrap.clientHeight || 600;
  const cx = W / 2, cy = H / 2;

  const rootId = createNode(null, data.root, cx, cy);

  data.branches.forEach(branch => {
    const branchId = createNode(rootId, branch.label, 0, 0);
    branch.children?.forEach(child => createNode(branchId, child, 0, 0));
  });

  layoutAll(cx, cy);

  vx = 0; vy = 0; vs = 0.85;
  updateVP(); render(); checkEmpty();
  toast(`✦ Peta "${data.root}" berhasil dibuat`);
}

// ═══════════════════════════════════════════════
//  HORIZONTAL TREE LAYOUT
// ═══════════════════════════════════════════════
const X_GAP = 210;  // jarak horizontal antar level
const Y_GAP = 22;   // jarak vertikal antar sibling

function childrenOf(pid) {
  return Object.values(nodes).filter(n => n.parentId === pid);
}

function nodeH(id) {
  // estimasi tinggi node + padding vertikal
  const n = nodes[id];
  if (!n) return 40;
  const lines = Math.ceil(n.text.length / 16);
  const base = n.level === 0 ? 44 : n.level === 1 ? 38 : 34;
  return base * lines;
}

function subtreeH(id) {
  const ch = childrenOf(id);
  if (!ch.length) return nodeH(id);
  const total = ch.reduce((s, c) => s + subtreeH(c.id), 0) + (ch.length - 1) * Y_GAP;
  return Math.max(nodeH(id), total);
}

function placeChildren(parent, children, dir) {
  if (!children.length) return;
  const total = children.reduce((s, c) => s + subtreeH(c.id), 0) + (children.length - 1) * Y_GAP;
  let y = parent.y - total / 2;
  children.forEach(c => {
    const h = subtreeH(c.id);
    c.x = parent.x + dir * X_GAP;
    c.y = y + h / 2;
    placeChildren(c, childrenOf(c.id), dir);
    y += h + Y_GAP;
  });
}

function layoutAll(cx, cy) {
  const root = Object.values(nodes).find(n => !n.parentId);
  if (!root) return;
  if (cx !== undefined) { root.x = cx; root.y = cy; }

  const allCh = childrenOf(root.id);
  if (!allCh.length) return;

  // Bagi rata: separuh kiri, separuh kanan
  const half  = Math.ceil(allCh.length / 2);
  const rightCh = allCh.slice(0, half);
  const leftCh  = allCh.slice(half);

  placeChildren(root, rightCh,  1);
  placeChildren(root, leftCh,  -1);
}

// ═══════════════════════════════════════════════
//  NODE HELPERS
// ═══════════════════════════════════════════════
function makeId() {
  return 'n' + Date.now().toString(36) + Math.random().toString(36).slice(2,6);
}

function nodeSize(text, level) {
  const fs = level === 0 ? 14.5 : 12.5;
  const w  = Math.max(level===0?148:108, text.length*(level===0?9:8)+44);
  const h  = level === 0 ? 52 : 40;
  return { w, h, fs };
}

function createNode(parentId, text, x, y) {
  const id  = makeId();
  const par = parentId ? nodes[parentId] : null;
  const lv  = par ? par.level + 1 : 0;
  const ci  = lv % LEVEL_COLORS.length;
  nodes[id] = { id, text, x:x??0, y:y??0, parentId, level:lv,
    ca: LEVEL_COLORS[ci].a, cb: LEVEL_COLORS[ci].b, tc: LEVEL_COLORS[ci].t };
  return id;
}

function checkEmpty() {
  const hint = document.getElementById('empty-hint');
  hint.style.display = Object.keys(nodes).length === 0 ? 'block' : 'none';
}

// ═══════════════════════════════════════════════
//  AUTO LAYOUT
// ═══════════════════════════════════════════════
function autoPlace(id) {
  // Setelah tambah node manual, re-layout seluruh tree
  layoutAll();
}

// ═══════════════════════════════════════════════
//  RENDER
// ═══════════════════════════════════════════════
function render() {
  renderEdges();
  renderNodes();
  document.getElementById('node-count').textContent = Object.keys(nodes).length+' node';
}

function renderEdges() {
  const layer=document.getElementById('edge-layer');
  layer.innerHTML='';
  Object.values(nodes).forEach(n=>{
    if(!n.parentId) return;
    const p=nodes[n.parentId]; if(!p) return;
    const el=svgEl('path');
    el.setAttribute('d', bezier(p.x,p.y,n.x,n.y));
    el.setAttribute('class','edge');
    el.setAttribute('stroke',n.ca);
    el.setAttribute('opacity','0.45');
    layer.appendChild(el);
  });
}

function bezier(x1,y1,x2,y2){
  const mx=(x1+x2)/2;
  return `M${x1} ${y1} C${mx} ${y1} ${mx} ${y2} ${x2} ${y2}`;
}

function renderNodes() {
  const layer=document.getElementById('node-layer');
  layer.innerHTML='';
  Object.values(nodes).forEach(n=>renderNode(n,layer));
}

function renderNode(n, layer) {
  const {w,h,fs}=nodeSize(n.text,n.level);
  const isSel=n.id===sel, isRoot=n.level===0;
  const tc=n.tc==='dark'?TEXT_DARK:TEXT_LIGHT;

  const g=svgEl('g');
  g.setAttribute('class','node-group'+(isSel?' node-selected':''));
  g.setAttribute('data-id',n.id);
  g.setAttribute('transform',`translate(${n.x-w/2},${n.y-h/2})`);

  // Gradient
  const gid='g_'+n.id;
  const old=document.getElementById(gid); if(old) old.remove();
  const grad=svgEl('linearGradient');
  grad.id=gid;
  grad.setAttribute('x1','0%'); grad.setAttribute('y1','0%');
  grad.setAttribute('x2','100%'); grad.setAttribute('y2','100%');
  const s1=svgEl('stop'); s1.setAttribute('offset','0%');   s1.setAttribute('stop-color',n.ca);
  const s2=svgEl('stop'); s2.setAttribute('offset','100%'); s2.setAttribute('stop-color',n.cb);
  grad.appendChild(s1); grad.appendChild(s2);
  document.querySelector('#canvas defs').appendChild(grad);

  // Body
  const body=svgEl('rect');
  body.setAttribute('class','node-body');
  body.setAttribute('width',w); body.setAttribute('height',h);
  body.setAttribute('rx',isRoot?'10':'7');
  body.setAttribute('fill',`url(#${gid})`);
  g.appendChild(body);

  // Selection ring
  if(isSel){
    const sr=svgEl('rect');
    sr.setAttribute('x','-2'); sr.setAttribute('y','-2');
    sr.setAttribute('width',w+4); sr.setAttribute('height',h+4);
    sr.setAttribute('rx',isRoot?'11':'8');
    sr.setAttribute('fill','none');
    sr.setAttribute('stroke','#FFA858');
    sr.setAttribute('stroke-width','2.5');
    sr.setAttribute('pointer-events','none');
    g.appendChild(sr);
  }

  // Root inner detail
  if(isRoot){
    const ir=svgEl('rect');
    ir.setAttribute('x','5'); ir.setAttribute('y','5');
    ir.setAttribute('width',w-10); ir.setAttribute('height',h-10);
    ir.setAttribute('rx','6'); ir.setAttribute('fill','none');
    ir.setAttribute('stroke','rgba(255,252,248,0.2)');
    ir.setAttribute('stroke-width','1');
    g.appendChild(ir);
  }

  // Text
  const txt=svgEl('text');
  txt.setAttribute('class','node-text');
  txt.setAttribute('x',w/2); txt.setAttribute('y',h/2);
  txt.setAttribute('font-size',fs);
  txt.setAttribute('font-weight',isRoot?'700':'500');
  txt.setAttribute('fill',tc);
  txt.setAttribute('letter-spacing',isRoot?'-0.3':'0');
  txt.textContent=n.text;
  g.appendChild(txt);

  // Quick-add (+)
  const addG=svgEl('g');
  addG.setAttribute('class','add-btn');
  addG.setAttribute('transform',`translate(${w-11},${h/2-9})`);
  const addC=svgEl('circle');
  addC.setAttribute('cx','9'); addC.setAttribute('cy','9'); addC.setAttribute('r','9');
  addC.setAttribute('fill','rgba(255,252,248,0.22)');
  const addT=svgEl('text');
  addT.setAttribute('x','9'); addT.setAttribute('y','9');
  addT.setAttribute('font-size','13'); addT.setAttribute('fill',tc);
  addT.setAttribute('dominant-baseline','middle'); addT.setAttribute('text-anchor','middle');
  addT.setAttribute('pointer-events','none'); addT.setAttribute('font-weight','600');
  addT.textContent='+';
  addG.appendChild(addC); addG.appendChild(addT);
  addG.addEventListener('click',e=>{e.stopPropagation(); openEdit(null,n.id);});
  g.appendChild(addG);

  // Events
  g.addEventListener('mousedown', e=>onNodeDown(e,n.id));
  g.addEventListener('click',     e=>{e.stopPropagation(); if(!didDrag) selectNode(n.id);});
  g.addEventListener('dblclick',  e=>{e.stopPropagation(); openEdit(n.id);});
  g.addEventListener('contextmenu',e=>{e.preventDefault(); e.stopPropagation(); showCtx(e,n.id);});

  layer.appendChild(g);
}

function svgEl(tag){
  return document.createElementNS('http://www.w3.org/2000/svg',tag);
}

// ═══════════════════════════════════════════════
//  SELECTION
// ═══════════════════════════════════════════════
function setDelBtn(disabled) {
  // support both old hidden btn-del and new sidebar btn-del-side
  const b1 = document.getElementById('btn-del');
  const b2 = document.getElementById('btn-del-side');
  if (b1) b1.disabled = disabled;
  if (b2) {
    b2.style.opacity  = disabled ? '0.35' : '1';
    b2.style.cursor   = disabled ? 'not-allowed' : 'pointer';
    b2.disabled       = disabled;
  }
}

function selectNode(id){
  sel=id;
  const n=nodes[id];
  setDelBtn(!id || n?.level===0);
  document.getElementById('sel-text').textContent=n?n.text:'— Klik node di peta —';
  document.getElementById('sel-text').style.cssText=n
    ?'font-size:13.5px;font-weight:600;color:var(--text);font-style:normal;'
    :'font-size:13px;color:var(--text-faint);font-style:italic;';
  if(n) generateSuggestions(n); // node.id tersedia di dalam n
  render();
}

function deselect(){
  sel=null;
  setDelBtn(true);
  document.getElementById('sel-text').textContent='— Klik node di peta —';
  document.getElementById('sel-text').style.cssText='font-size:13px;color:var(--text-faint);font-style:italic;';
  document.getElementById('chips').innerHTML='<span style="color:var(--text-faint);font-size:12.5px;font-style:italic;">Pilih node untuk saran AI</span>';
  render();
}

// ═══════════════════════════════════════════════
//  NODE OPERATIONS
// ═══════════════════════════════════════════════
function addChild(){
  const pid=sel||Object.keys(nodes)[0];
  if(!pid) return;
  openEdit(null,pid);
}

function deleteSelected(){
  if(!sel||nodes[sel]?.level===0) return;
  deleteRecursive(sel);
  sel=null;
  setDelBtn(true);
  render(); checkEmpty();
}

function deleteRecursive(id){
  Object.keys(nodes).filter(x=>nodes[x].parentId===id).forEach(deleteRecursive);
  delete nodes[id];
}

// ═══════════════════════════════════════════════
//  DRAG
// ═══════════════════════════════════════════════
function onNodeDown(e,id){
  if(e.button!==0) return;
  e.stopPropagation();
  didDrag=false; dragId=id;
  const pt=s2c(e.clientX,e.clientY);
  dox=nodes[id].x-pt.x; doy=nodes[id].y-pt.y;
  window.addEventListener('mousemove',onDragMove);
  window.addEventListener('mouseup',onDragUp);
}
function onDragMove(e){
  if(!dragId) return;
  didDrag=true;
  const pt=s2c(e.clientX,e.clientY);
  nodes[dragId].x=pt.x+dox; nodes[dragId].y=pt.y+doy;
  render();
}
function onDragUp(){
  window.removeEventListener('mousemove',onDragMove);
  window.removeEventListener('mouseup',onDragUp);
  dragId=null;
  setTimeout(()=>{didDrag=false;},50);
}

// ═══════════════════════════════════════════════
//  PAN & ZOOM
// ═══════════════════════════════════════════════
function s2c(sx,sy){
  const r=document.getElementById('canvas-wrap').getBoundingClientRect();
  return{x:(sx-r.left-vx)/vs, y:(sy-r.top-vy)/vs};
}
function updateVP(){
  document.getElementById('vp').setAttribute('transform',`translate(${vx},${vy}) scale(${vs})`);
  document.getElementById('zoom-val').textContent=Math.round(vs*100)+'%';
}
function zoomBy(f,cx,cy){
  const wrap=document.getElementById('canvas-wrap');
  cx=cx??wrap.clientWidth/2; cy=cy??wrap.clientHeight/2;
  const ns=Math.min(3,Math.max(0.15,vs*f));
  vx=cx-(cx-vx)*ns/vs; vy=cy-(cy-vy)*ns/vs; vs=ns;
  updateVP();
}
function resetView(){vx=0;vy=0;vs=1;updateVP();}

const wrap=document.getElementById('canvas-wrap');
wrap.addEventListener('mousedown',e=>{
  if(e.target.closest('.node-group')) return;
  panning=true; px0=e.clientX; py0=e.clientY; pvx0=vx; pvy0=vy;
  wrap.classList.add('panning');
  deselect(); hideCtx();
});
window.addEventListener('mousemove',e=>{
  if(!panning) return;
  vx=pvx0+e.clientX-px0; vy=pvy0+e.clientY-py0; updateVP();
});
window.addEventListener('mouseup',()=>{panning=false;wrap.classList.remove('panning');});
wrap.addEventListener('wheel',e=>{
  e.preventDefault();
  const r=wrap.getBoundingClientRect();
  zoomBy(e.deltaY<0?1.1:0.9,e.clientX-r.left,e.clientY-r.top);
},{passive:false});

// ═══════════════════════════════════════════════
//  CONTEXT MENU
// ═══════════════════════════════════════════════
function showCtx(e,id){
  ctxId=id; selectNode(id);
  const m=document.getElementById('ctx');
  m.style.display='block'; m.style.left=e.clientX+'px'; m.style.top=e.clientY+'px';
  const r=m.getBoundingClientRect();
  if(r.right>innerWidth)  m.style.left=(e.clientX-r.width)+'px';
  if(r.bottom>innerHeight)m.style.top=(e.clientY-r.height)+'px';
}
function hideCtx(){document.getElementById('ctx').style.display='none';}
document.addEventListener('click',hideCtx);
function ctx_addChild(){hideCtx();openEdit(null,ctxId);}
function ctx_edit(){hideCtx();openEdit(ctxId);}
function ctx_delete(){hideCtx();sel=ctxId;deleteSelected();}
function ctx_expand(){hideCtx();selectNode(ctxId);expandAI(ctxId);}
function ctx_color(){hideCtx();openColorModal(ctxId);}

// ═══════════════════════════════════════════════
//  EDIT MODAL
// ═══════════════════════════════════════════════
let editId=null,editPid=null;
function openEdit(id,pid){
  editId=id; editPid=pid;
  document.getElementById('edit-title').textContent=id?'Edit Node':'Tambah Node Baru';
  document.getElementById('edit-inp').value=id?(nodes[id]?.text||''):'';
  document.getElementById('edit-modal').classList.add('open');
  setTimeout(()=>{document.getElementById('edit-inp').focus();document.getElementById('edit-inp').select();},80);
}
function closeEdit(){document.getElementById('edit-modal').classList.remove('open');editId=editPid=null;}
function confirmEdit(){
  const t=document.getElementById('edit-inp').value.trim();
  if(!t) return;
  if(editId){ nodes[editId].text=t; }
  else if(editPid){ const nid=createNode(editPid,t); autoPlace(nid); sel=nid; }
  render(); if(sel) selectNode(sel); closeEdit(); checkEmpty();
}
document.getElementById('edit-inp').addEventListener('keydown',e=>{
  if(e.key==='Enter') confirmEdit();
  if(e.key==='Escape') closeEdit();
});

// ═══════════════════════════════════════════════
//  COLOR MODAL
// ═══════════════════════════════════════════════
let colorTargetId=null;
function openColorModal(id){
  colorTargetId=id;
  const grid=document.getElementById('color-grid');
  grid.innerHTML='';
  PALETTE.forEach(p=>{
    const btn=document.createElement('div');
    const tc=p.t==='dark'?'#003B35':'#FFFCF8';
    btn.style.cssText=`width:92px;height:52px;border-radius:7px;cursor:pointer;
      background:linear-gradient(135deg,${p.a},${p.b});
      display:flex;align-items:center;justify-content:center;
      font-size:11px;color:${tc};font-weight:600;
      font-family:'Inter',sans-serif;letter-spacing:0.1px;
      transition:transform 0.12s;border:1.5px solid transparent;`;
    btn.textContent=p.label;
    btn.onmouseenter=()=>{btn.style.transform='scale(1.06)';btn.style.borderColor='rgba(0,59,53,0.3)';};
    btn.onmouseleave=()=>{btn.style.transform='';btn.style.borderColor='transparent';};
    btn.onclick=()=>{
      if(colorTargetId&&nodes[colorTargetId]){
        nodes[colorTargetId].ca=p.a; nodes[colorTargetId].cb=p.b; nodes[colorTargetId].tc=p.t;
        render();
      }
      closeColorModal();
    };
    grid.appendChild(btn);
  });
  document.getElementById('color-modal').classList.add('open');
}
function closeColorModal(){document.getElementById('color-modal').classList.remove('open');}

// ═══════════════════════════════════════════════
//  KEYBOARD
// ═══════════════════════════════════════════════
document.addEventListener('keydown',e=>{
  if(['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)) return;
  if(e.key==='Escape')                       {hideCtx();closeEdit();closeApiModal();closeColorModal();closeGridPanel();}
  if(e.key==='Delete'||e.key==='Backspace')  deleteSelected();
  if(e.key==='Tab')  {e.preventDefault();addChild();}
  if(e.key==='F2')   {if(sel) openEdit(sel);}
});

// ═══════════════════════════════════════════════
//  SAVE / LOAD / EXPORT
// ═══════════════════════════════════════════════
function saveMap(){ _saveToSlot(true); }
function loadMap(){ toast('Gunakan Dashboard untuk membuka canvas tersimpan.'); }
function exportMap(){
  const b=new Blob([JSON.stringify({nodes},null,2)],{type:'application/json'});
  const u=URL.createObjectURL(b);
  const a=document.createElement('a'); a.href=u; a.download='mindara-export.json'; a.click();
  URL.revokeObjectURL(u);
}

// ═══════════════════════════════════════════════
//  AI PANEL FEATURES
// ═══════════════════════════════════════════════
function togglePanel(){document.getElementById('ai-panel').classList.toggle('hidden');}

// ── Ambil konteks hierarki node (root → parent → current) ──────────────────
function getNodeContext(id) {
  const path = [];
  let cur = nodes[id];
  while (cur) {
    path.unshift(cur.text);
    cur = cur.parentId ? nodes[cur.parentId] : null;
  }
  return {
    root:    path[0]  || '',
    parent:  path.length > 1 ? path[path.length - 2] : null,
    current: path[path.length - 1] || '',
    path,
    depth:   path.length - 1,
  };
}

// ── Cari saran di CONTEXT_BANK berdasarkan hierarki ────────────────────────
function lookupContextBank(ctx) {
  const root    = ctx.root.toLowerCase();
  const parent  = (ctx.parent || '').toLowerCase();
  const current = ctx.current.toLowerCase();

  // 1. root + current (paling spesifik)
  if (CONTEXT_BANK[`${root}_${current}`])   return CONTEXT_BANK[`${root}_${current}`];
  // 2. parent + current
  if (CONTEXT_BANK[`${parent}_${current}`]) return CONTEXT_BANK[`${parent}_${current}`];
  // 3. root + partial current (kata pertama)
  const word = current.split(' ')[0];
  for (const k of Object.keys(CONTEXT_BANK)) {
    if (k.startsWith(`${root}_`) && k.includes(word)) return CONTEXT_BANK[k];
  }
  // 4. Fallback ke DEMO_BANK keyword match
  for (const k of Object.keys(DEMO_BANK)) {
    if (current.includes(k.toLowerCase()) || k.toLowerCase().includes(word)) return DEMO_BANK[k];
  }
  return DEMO_BANK.default;
}

async function generateSuggestions(node){
  const cont = document.getElementById('chips');
  cont.innerHTML = '<span class="spin"></span>';
  await sleep(apiKey && aiProv !== 'demo' ? 0 : 320);

  const ctx = getNodeContext(node.id);

  if (apiKey && aiProv !== 'demo') {
    try {
      // Kirim konteks hierarki penuh ke AI
      const pathStr = ctx.path.join(' → ');
      const prompt  =
        `Kamu asisten mind map yang cerdas.\n` +
        `Topik utama peta: "${ctx.root}"\n` +
        `Hierarki node: ${pathStr}\n` +
        `Node saat ini: "${ctx.current}" (level ${ctx.depth})\n\n` +
        `Buat 7 sub-topik yang SPESIFIK dan RELEVAN untuk node ini. ` +
        `Pertimbangkan konteks hierarki — jangan saran yang terlalu generik. ` +
        `Jawab hanya nama topik, satu per baris, maks 3 kata.`;
      const res   = await callAI(prompt);
      const items = res.split('\n').map(s => s.replace(/^[-•\d.]\s*/,'').trim()).filter(Boolean).slice(0,8);
      cont.innerHTML = items.map(chip).join('');
    } catch { cont.innerHTML = demoChips(ctx); }
  } else {
    cont.innerHTML = demoChips(ctx);
  }

  // Konteks & relasi
  const rel   = document.getElementById('ai-relate');
  rel.style.display = 'block';
  const bank  = lookupContextBank(ctx);
  const depth = ctx.depth;
  const hint  = depth === 0
    ? 'Ini node root. Saran di atas adalah cabang utama yang relevan.'
    : depth === 1
    ? `Cabang dari <strong>${ctx.root}</strong>. Saran di atas spesifik untuk konteks ini.`
    : `Sub-cabang dari <strong>${ctx.parent}</strong> dalam peta <strong>${ctx.root}</strong>.`;
  rel.innerHTML = `${hint} Klik saran untuk langsung menambahkan ke peta.`;
}

function demoChips(ctx) {
  const bank = lookupContextBank(ctx);
  return bank.slice(0, 8).map(chip).join('');
}

function chip(s){
  return `<span class="chip" onclick="addChip('${s.replace(/'/g,"\\'")}')">${s}</span>`;
}

function addChip(text){
  if(!sel) return;
  const nid=createNode(sel,text);
  autoPlace(nid); render(); selectNode(nid);
}

async function askAI(){
  const q=document.getElementById('ai-q').value.trim();
  if(!q) return;
  const resp=document.getElementById('ai-resp');
  resp.style.display='block';
  resp.innerHTML='<span class="spin"></span> Memproses...';
  const ctx=nodes[sel]?.text||'topik ini';
  const prompt=`Mind map node: "${ctx}". Pertanyaan: ${q}. Jawab bahasa Indonesia, maks 3 kalimat.`;
  if(!apiKey||aiProv==='demo'){
    await sleep(800);
    resp.innerHTML=`<strong>${ctx}</strong>: Ini adalah area yang mencakup beberapa dimensi penting — definisi yang jelas, konteks penerapan di Indonesia, dan langkah implementasi yang terukur.`;
  }else{
    try{resp.innerHTML=await callAI(prompt);}
    catch(e){resp.innerHTML=`<span style="color:var(--danger)">Error: ${e.message}</span>`;}
  }
  document.getElementById('ai-q').value='';
}

document.getElementById('ai-q').addEventListener('keydown',e=>{
  if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();askAI();}
});

async function expandAI(id){
  if(!nodes[id]) return;
  const text=nodes[id].text;
  toast('✦ Mengembangkan ide...');
  let items;
  if(apiKey&&aiProv!=='demo'){
    try{
      const res=await callAI(`Buat 5 sub-topik singkat untuk "${text}". Satu per baris.`);
      items=res.split('\n').map(s=>s.trim()).filter(Boolean).slice(0,5);
    }catch{items=(DEMO_BANK[text]||DEMO_BANK.default).slice(0,5);}
  }else{
    await sleep(700);
    items=(DEMO_BANK[text]||DEMO_BANK.default).slice(0,5);
  }
  items.forEach((t,i)=>setTimeout(()=>{
    const nid=createNode(id,t); autoPlace(nid); render();
  },i*160));
}

// ═══════════════════════════════════════════════
//  AI API CALLS
// ═══════════════════════════════════════════════
async function callAI(prompt){
  if(aiProv==='openai'){
    const r=await fetch('https://api.openai.com/v1/chat/completions',{
      method:'POST',
      headers:{'Content-Type':'application/json','Authorization':`Bearer ${apiKey}`},
      body:JSON.stringify({model:'gpt-4o-mini',messages:[{role:'user',content:prompt}],max_tokens:400})
    });
    const d=await r.json();
    if(d.error) throw new Error(d.error.message);
    return d.choices[0].message.content;
  }
  if(aiProv==='claude'){
    const r=await fetch('https://api.anthropic.com/v1/messages',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'x-api-key':apiKey,
        'anthropic-version':'2023-06-01',
        'anthropic-dangerous-direct-browser-access':'true'
      },
      body:JSON.stringify({model:'claude-haiku-4-5-20251001',max_tokens:400,messages:[{role:'user',content:prompt}]})
    });
    const d=await r.json();
    if(d.error) throw new Error(d.error.message);
    return d.content[0].text;
  }
}

// ═══════════════════════════════════════════════
//  API KEY MODAL
// ═══════════════════════════════════════════════
function openApiModal(){
  document.getElementById('key-inp').value=apiKey;
  document.getElementById('prov-sel').value=aiProv;
  document.getElementById('api-modal').classList.add('open');
}
function closeApiModal(){document.getElementById('api-modal').classList.remove('open');}
function saveApiKey(){
  apiKey=document.getElementById('key-inp').value.trim();
  aiProv=document.getElementById('prov-sel').value;
  localStorage.setItem('mi_key',apiKey);
  localStorage.setItem('mi_prov',aiProv);
  const b=document.getElementById('api-badge');
  if(apiKey&&aiProv!=='demo'){b.textContent=aiProv==='openai'?'OpenAI':'Claude';b.className='api-badge set';}
  else{b.textContent='Demo';b.className='api-badge demo';}
  closeApiModal(); toast('Pengaturan AI disimpan');
}

// ═══════════════════════════════════════════════
//  UTILS
// ═══════════════════════════════════════════════
function toast(msg){
  const el=document.createElement('div');
  el.className='toast'; el.textContent=msg;
  document.body.appendChild(el);
  setTimeout(()=>el.remove(),2300);
}
function sleep(ms){return new Promise(r=>setTimeout(r,ms));}

// ═══════════════════════════════════════════════
//  BOOT
// ═══════════════════════════════════════════════
window.addEventListener('load',()=>{
  if(apiKey&&aiProv!=='demo'){
    const b=document.getElementById('api-badge');
    b.textContent=aiProv==='openai'?'OpenAI':'Claude';
    b.className='api-badge set';
  }
  applyGridSettings();
  updateVP();
  // Mulai dari dashboard
  showDashboard();
});
