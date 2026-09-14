// === DATA ===

const NEWS_DATA = [
  {
    id: "news-0",
    title: "Rockstar Games Locks Release Window: Countdown From Today Onwards In Full Effect",
    category: "RELEASE WINDOW",
    date: "Mar 25, 2025",
    readTime: "3 min read",
    summary: "Rockstar Games Newswire confirms GTA VI targets Fall 2025 window, with Take-Two Interactive backing the timeline in their earnings call."
  },
  {
    id: "news-1",
    title: "Rockstar Games Confirms Fall 2025 Release Target in Take-Two Earnings Call",
    category: "RELEASE DATE",
    date: "Feb 10, 2025",
    readTime: "5 min read",
    summary: "Take-Two Interactive's Q3 FY2025 earnings call reaffirmed GTA VI's Fall 2025 release window, with CFO confirming no delays are anticipated."
  },
  {
    id: "news-2",
    title: "State of Leonida Map Scale: Estimated 2.5x Larger Than Los Santos",
    category: "MAP",
    date: "Jan 2, 2025",
    readTime: "6 min read",
    summary: "Analysis from Leonida Cartography Team reveals the Vice City and Leonida state map is estimated to be 2.5× the size of GTA V's Los Santos, featuring dynamic wetlands, urban sprawl and coastal zones."
  },
  {
    id: "news-3",
    title: "Dual Protagonist Chemistry: Lucia & Jason Bonnie-and-Clyde Dynamic Detailed",
    category: "CHARACTERS",
    date: "July 30, 2024",
    readTime: "4 min read",
    summary: "Internal mechanics revealed: players dynamically switch between Lucia's tactical agility and Jason's heavy weapons expertise. Features shared bankrolls and trust levels that affect missions and dialogue."
  },
  {
    id: "news-4",
    title: "Confirmed Radio Stations Featuring Classic 80s Synth & Modern Miami Trap",
    category: "SOUNDTRACK",
    date: "Jun 14, 2024",
    readTime: "3 min read",
    summary: "Sources confirm Vice City Pop Classics, Radio Espantoso and a new Miami Trap station. Tom Petty \"Love Is a Long Road\" confirmed as trailer soundtrack. 200+ licensed tracks expected at launch."
  },
  {
    id: "news-5",
    title: "Trailer 2 Expected Alongside PS5 Pro Showcase — 60 FPS Ray Tracing Confirmed",
    category: "GRAPHICS",
    date: "May 5, 2024",
    readTime: "4 min read",
    summary: "Rockstar marketing schedules suggest Trailer 2 will premiere alongside PlayStation 5 Pro enhancements showcase, highlighting 60 FPS Ray Tracing and dynamic AI pedestrian interactions."
  }
];

const TRAILERS_DATA = [
  {
    id: "trailer-1",
    title: "GTA VI — Official Trailer 1",
    subtitle: "Vice City Revealed — Lucia & Jason",
    tag: "OFFICIAL",
    youtubeId: "QdBZExpgErs",
    breakdownCount: 84,
    views: "200M+ views",
    likes: "12.4M likes",
    highlights: [
      "Lucia in Leonida Department of Corrections uniform",
      "Tom Petty \"Love Is a Long Road\" soundtrack debut",
      "Vice City Beach crowded with hundreds of NPCs"
    ]
  },
  {
    id: "trailer-2",
    title: "GTA VI — Behind the Scenes: Building Vice City",
    subtitle: "Rockstar Games Official Developer Insight",
    tag: "DEVELOPER INSIGHT",
    youtubeId: "QdBZExpgErs",
    views: "45M+ views",
    likes: "3.2M likes",
    highlights: [
      "Motion capture from 1,200 actor sessions",
      "AI crowd system with 10,000 unique pedestrian behaviors",
      "Dynamic weather — hurricane system confirmed"
    ]
  }
];

const WALLPAPERS_DATA = [
  { id: "wp-1", title: "VICE CITY SUNSET", subtitle: "LEONIDA VISTA", category: "LANDSCAPES", badge: "4K UHD", badgeColor: "#00eefc", color: "linear-gradient(160deg,#ff6b35,#ff479c,#13131a)" },
  { id: "wp-2", title: "NEON DOWNTOWN", subtitle: "VICE CITY NIGHTS", category: "CITYSCAPES", badge: "AMOLED", badgeColor: "#a855f7", color: "linear-gradient(160deg,#00eefc,#a855f7,#13131a)" },
  { id: "wp-3", title: "LUCIA & JASON", subtitle: "LEONIDA OUTLAWS", category: "CHARACTERS", badge: "CONCEPT ART", badgeColor: "#ff479c", color: "linear-gradient(160deg,#ff479c,#600030,#13131a)" },
  { id: "wp-4", title: "LEONIDA WETLANDS", subtitle: "GOLDEN HOUR", category: "LANDSCAPES", badge: "4K UHD", badgeColor: "#00eefc", color: "linear-gradient(160deg,#f7a832,#ff6b35,#13131a)" },
  { id: "wp-5", title: "VICE CITY BEACH", subtitle: "OCEANVIEW DRIVE", category: "CITYSCAPES", badge: "AMOLED", badgeColor: "#a855f7", color: "linear-gradient(160deg,#00bcd4,#3f51b5,#13131a)" },
  { id: "wp-6", title: "LUCIA CAMINOS", subtitle: "PROTAGONIST", category: "CHARACTERS", badge: "ART", badgeColor: "#ff479c", color: "linear-gradient(160deg,#ff479c,#ff6b35,#13131a)" },
  { id: "wp-7", title: "PORT GELLHORN", subtitle: "INDUSTRIAL ZONE", category: "CITYSCAPES", badge: "4K UHD", badgeColor: "#00eefc", color: "linear-gradient(160deg,#546e7a,#37474f,#13131a)" },
  { id: "wp-8", title: "Vice CITY RACE TRACK", subtitle: "MIAMI VIBES", category: "VEHICLES", badge: "AMOLED", badgeColor: "#a855f7", color: "linear-gradient(160deg,#f44336,#9c27b0,#13131a)" },
  { id: "wp-9", title: "JASON DUVAL", subtitle: "CO-PROTAGONIST", category: "CHARACTERS", badge: "ART", badgeColor: "#ff479c", color: "linear-gradient(160deg,#00eefc,#1565c0,#13131a)" },
  { id: "wp-10", title: "LEONIDA ALLIGATOR BAY", subtitle: "SWAMP TERRITORY", category: "LANDSCAPES", badge: "4K UHD", badgeColor: "#00eefc", color: "linear-gradient(160deg,#2e7d32,#1b5e20,#13131a)" },
  { id: "wp-11", title: "VICE CITY NEON STRIP", subtitle: "NIGHTLIFE", category: "CITYSCAPES", badge: "AMOLED", badgeColor: "#a855f7", color: "linear-gradient(160deg,#e91e63,#9c27b0,#ff479c,#13131a)" },
  { id: "wp-12", title: "GTA VI LOGO", subtitle: "OFFICIAL ARTWORK", category: "LOGOS", badge: "OFFICIAL", badgeColor: "#ff479c", color: "linear-gradient(160deg,#13131a,#1c1c26,#ff479c)" }
];

const WP_CATEGORIES = ["ALL", "LANDSCAPES", "CITYSCAPES", "CHARACTERS", "VEHICLES", "LOGOS"];

const RADIO_DATA = [
  { id: "r1", name: "Vice City Pop Classics", frequency: "102.3", genre: "80s POP · CLASSICS" },
  { id: "r2", name: "Radio Espantoso", frequency: "107.7", genre: "LATIN · RUMBA · TROPICAL" },
  { id: "r3", name: "Leonida Trap FM", frequency: "95.1", genre: "MIAMI TRAP · HIP-HOP" },
  { id: "r4", name: "Vice City Synth Wave", frequency: "88.9", genre: "SYNTHWAVE · RETRO ELECTRO" },
  { id: "r5", name: "Leonida Country Roads", frequency: "101.5", genre: "COUNTRY · SOUTHERN ROCK" }
];

const PUBSPEC_CODE = `name: gta6_countdown_vault
description: "A polished Vice City GTA 6 Countdown & 4K AMOLED Wallpapers Android App."
publish_to: 'none'
version: 1.0.0+1

environment:
  sdk: '>=3.0.0 <4.0.0'

dependencies:
  flutter:
    sdk: flutter
  provider: ^6.1.1
  shared_preferences: ^2.2.2
  url_launcher: ^6.2.3
  flutter_local_notifications: ^16.3.0
  http: ^1.2.0

flutter:
  uses-material-design: true
  assets:
    - assets/wallpapers/
    - assets/icons/
  fonts:
    - family: SpaceGrotesk
      fonts:
        - asset: assets/fonts/SpaceGrotesk-Bold.ttf
          weight: 700
    - family: JetBrainsMono
      fonts:
        - asset: assets/fonts/JetBrainsMono-ExtraBold.ttf
          weight: 800`;

// === STATE ===
let activeTab = 'home';
let radioPlaying = false;
let activeWpFilter = 'ALL';
let activeRadio = null;
let toastTimer = null;

// Countdown target: Fall 2025 — Oct 1, 2025
const TARGET = new Date('2025-10-01T00:00:00Z').getTime();

// === INIT ===
document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  buildNews();
  buildTrailers();
  buildWallpapers();
  buildRadio();
  buildPubspec();
  startCountdown();
  bindHeader();
});

// === COUNTDOWN ===
function startCountdown() {
  tick();
  setInterval(tick, 1000);
}
function pad(n, len = 2) { return String(n).padStart(len, '0'); }
function tick() {
  const now = Date.now();
  const diff = TARGET - now;
  if (diff <= 0) {
    document.getElementById('t-days').textContent = '000';
    document.getElementById('t-hours').textContent = '00';
    document.getElementById('t-mins').textContent = '00';
    document.getElementById('t-secs').textContent = '00';
    return;
  }
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);
  document.getElementById('t-days').textContent = pad(days, 3);
  document.getElementById('t-hours').textContent = pad(hours);
  document.getElementById('t-mins').textContent = pad(mins);
  document.getElementById('t-secs').textContent = pad(secs);
}

// === NAV ===
function buildNav() {
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });
}
function switchTab(tab) {
  activeTab = tab;
  document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(b => b.classList.remove('active'));
  const sec = document.getElementById('tab-' + tab);
  if (sec) sec.classList.add('active');
  const btn = document.querySelector(`.nav-item[data-tab="${tab}"]`);
  if (btn) btn.classList.add('active');
  document.getElementById('app-main').scrollTop = 0;
}

// === HEADER ===
function bindHeader() {
  document.getElementById('btn-apk').addEventListener('click', () => { switchTab('system'); showToast('Download APK from the System tab'); });
  document.getElementById('btn-flutter').addEventListener('click', () => { switchTab('system'); showToast('Flutter source code below'); });
  document.getElementById('btn-radio').addEventListener('click', toggleRadio);
}
function toggleRadio() {
  radioPlaying = !radioPlaying;
  const btn = document.getElementById('btn-radio');
  btn.classList.toggle('playing', radioPlaying);
  showToast(radioPlaying ? '🎵 Vice City Radio Synth — ON' : '🔇 Radio stopped');
}

// === NEWS ===
function buildNews() {
  const container = document.getElementById('news-list');
  container.innerHTML = NEWS_DATA.map(n => `
    <article class="news-card">
      <div class="news-meta">
        <span class="news-tag">${n.category}</span>
        <span class="news-date">${n.date}</span>
        <span class="news-read">${n.readTime}</span>
      </div>
      <h3 class="news-title">${n.title}</h3>
      <p class="news-summary">${n.summary}</p>
    </article>
  `).join('');
}

// === TRAILERS ===
function buildTrailers() {
  const container = document.getElementById('trailers-list');
  container.innerHTML = TRAILERS_DATA.map(t => `
    <div class="trailer-card">
      <div class="trailer-thumb" onclick="openYoutube('${t.youtubeId}')">
        <img src="https://img.youtube.com/vi/${t.youtubeId}/maxresdefault.jpg" alt="${t.title}" loading="lazy" onerror="this.src='https://img.youtube.com/vi/${t.youtubeId}/hqdefault.jpg'"/>
        <div class="play-btn">
          <span class="material-symbols-outlined">play_circle</span>
        </div>
      </div>
      <div class="trailer-info">
        <span class="trailer-tag">${t.tag}</span>
        <h3 class="trailer-title">${t.title}</h3>
        <p class="trailer-sub">${t.subtitle}</p>
        <div class="trailer-stats">
          <span><span class="material-symbols-outlined">visibility</span>${t.views}</span>
          <span><span class="material-symbols-outlined">thumb_up</span>${t.likes}</span>
        </div>
        ${t.highlights ? `<ul style="margin-top:10px;padding-left:16px;display:flex;flex-direction:column;gap:4px;">${t.highlights.map(h => `<li style="font-size:11px;color:var(--text2);line-height:1.4">${h}</li>`).join('')}</ul>` : ''}
      </div>
    </div>
  `).join('');
}
function openYoutube(id) {
  window.open('https://www.youtube.com/watch?v=' + id, '_blank');
}

// === WALLPAPERS ===
function buildWallpapers() {
  buildWpFilter();
  renderWallpapers();
}
function buildWpFilter() {
  const container = document.getElementById('wp-filter');
  container.innerHTML = WP_CATEGORIES.map(cat => `
    <button class="wp-filter-btn${cat === activeWpFilter ? ' active' : ''}" onclick="filterWp('${cat}')">${cat}</button>
  `).join('');
}
function filterWp(cat) {
  activeWpFilter = cat;
  buildWpFilter();
  renderWallpapers();
}
function renderWallpapers() {
  const filtered = activeWpFilter === 'ALL' ? WALLPAPERS_DATA : WALLPAPERS_DATA.filter(w => w.category === activeWpFilter);
  const container = document.getElementById('wp-grid');
  if (filtered.length === 0) {
    container.innerHTML = '<p style="color:var(--text2);font-size:13px;padding:20px 0">No wallpapers in this category.</p>';
    return;
  }
  container.innerHTML = filtered.map(w => `
    <div class="wp-card" style="background:${w.color}" onclick="showToast('Downloading: ${w.title}...')">
      <div class="wp-card-overlay">
        <span class="wp-badge" style="background:rgba(0,0,0,0.6);color:${w.badgeColor}">${w.badge}</span><br/>
        <span class="wp-title">${w.title}</span><br/>
        <span class="wp-sub">${w.subtitle}</span>
      </div>
      <div class="wp-actions">
        <button class="wp-action-btn" onclick="event.stopPropagation();showToast('Added to favorites!')">
          <span class="material-symbols-outlined">favorite</span>
        </button>
        <button class="wp-action-btn" onclick="event.stopPropagation();showToast('Downloading ${w.title}...')">
          <span class="material-symbols-outlined">download</span>
        </button>
      </div>
    </div>
  `).join('');
}

// === RADIO ===
function buildRadio() {
  const container = document.getElementById('radio-list');
  container.innerHTML = RADIO_DATA.map(r => `
    <div class="radio-card${activeRadio === r.id ? ' playing' : ''}" onclick="playRadio('${r.id}')">
      <div class="radio-freq">${r.frequency}</div>
      <div class="radio-info">
        <div class="radio-name">${r.name}</div>
        <div class="radio-genre">${r.genre}</div>
      </div>
      <button class="radio-play">
        <span class="material-symbols-outlined">${activeRadio === r.id ? 'pause' : 'play_arrow'}</span>
      </button>
    </div>
  `).join('');
}
function playRadio(id) {
  activeRadio = activeRadio === id ? null : id;
  buildRadio();
  const station = RADIO_DATA.find(r => r.id === id);
  if (activeRadio && station) {
    showToast('🎵 Playing: ' + station.name);
  } else {
    showToast('🔇 Radio stopped');
  }
}

// === PUBSPEC ===
function buildPubspec() {
  document.getElementById('code-pubspec').textContent = PUBSPEC_CODE;
}

// === TOAST ===
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}

// Expose globally for inline onclick
window.showToast = showToast;
window.openYoutube = openYoutube;
window.filterWp = filterWp;
window.playRadio = playRadio;
