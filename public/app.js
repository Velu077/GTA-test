/* ==========================================
   GTA VI COUNTDOWN VAULT â€” app.js
   ========================================== */

// ── API BASE ──
// Works on Vercel (https), local server (http), AND file:// (uses fallback)
const API = location.protocol === 'file:' ? null : '';

// â”€â”€ STATE â”€â”€
let activeTab = 'home';
let activeRadio = null;
let audioCtx = null;
let radioNodes = {};
let wpFilter = 'ALL';
let newsFilter = 'ALL';
let allWallpapers = [];
let allNews = [];
let allRadio = [];
let wpLightboxData = null;
let deferredInstallPrompt = null;
let toastTimer = null;

// â”€â”€ RELEASE TARGET: October 1, 2025 â”€â”€
const RELEASE_TARGET = new Date('2025-10-01T00:00:00Z').getTime();

// â”€â”€ FLUTTER SOURCE CODE SNIPPETS â”€â”€
const FLUTTER_CODE = {
  pubspec: `name: gta6_countdown_vault
description: "Polished GTA VI Countdown & 4K AMOLED Wallpapers Android App"
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
  cached_network_image: ^3.3.1
  flutter_wallpaper_manager: ^1.0.4

dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^3.0.0

flutter:
  uses-material-design: true
  assets:
    - assets/wallpapers/
    - assets/icons/
    - assets/fonts/
  fonts:
    - family: BebasNeue
      fonts:
        - asset: assets/fonts/BebasNeue-Regular.ttf
    - family: SpaceGrotesk
      fonts:
        - asset: assets/fonts/SpaceGrotesk-Bold.ttf
    - family: JetBrainsMono
      fonts:
        - asset: assets/fonts/JetBrainsMono-ExtraBold.ttf`,

  main: `import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:provider/provider.dart';
import 'theme/neon_theme.dart';
import 'screens/countdown_screen.dart';
import 'screens/news_screen.dart';
import 'screens/trailers_screen.dart';
import 'screens/wallpaper_screen.dart';
import 'screens/system_screen.dart';
import 'services/wallpaper_state.dart';

void main() {
  WidgetsFlutterBinding.ensureInitialized();
  // Android edge-to-edge AMOLED bars
  SystemChrome.setSystemUIOverlayStyle(
    const SystemUiOverlayStyle(
      statusBarColor: Colors.transparent,
      systemNavigationBarColor: Color(0xFF000000),
    ),
  );
  SystemChrome.setEnabledSystemUIMode(SystemUiMode.edgeToEdge);
  SystemChrome.setPreferredOrientations([DeviceOrientation.portraitUp]);
  runApp(
    ChangeNotifierProvider(
      create: (_) => WallpaperState(),
      child: const GTA6App(),
    ),
  );
}

class GTA6App extends StatelessWidget {
  const GTA6App({super.key});
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'GTA VI Countdown',
      debugShowCheckedModeBanner: false,
      theme: NeonTheme.dark(),
      home: const MainScreen(),
    );
  }
}

class MainScreen extends StatefulWidget {
  const MainScreen({super.key});
  @override
  State<MainScreen> createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen> {
  int _currentIndex = 0;
  final List<Widget> _screens = const [
    CountdownScreen(),
    NewsScreen(),
    TrailersScreen(),
    WallpaperScreen(),
    SystemScreen(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF000000),
      body: _screens[_currentIndex],
      bottomNavigationBar: _buildNav(),
    );
  }

  Widget _buildNav() {
    return BottomNavigationBar(
      currentIndex: _currentIndex,
      onTap: (i) => setState(() => _currentIndex = i),
      backgroundColor: const Color(0xFF000000),
      selectedItemColor: const Color(0xFFFF2D6D),
      unselectedItemColor: const Color(0xFF5A5572),
      type: BottomNavigationBarType.fixed,
      selectedLabelStyle: const TextStyle(
        fontFamily: 'JetBrainsMono', fontSize: 9, letterSpacing: 1.5),
      unselectedLabelStyle: const TextStyle(
        fontFamily: 'JetBrainsMono', fontSize: 9),
      items: const [
        BottomNavigationBarItem(icon: Icon(Icons.explore), label: 'HOME'),
        BottomNavigationBarItem(icon: Icon(Icons.feed), label: 'NEWS'),
        BottomNavigationBarItem(icon: Icon(Icons.smart_display), label: 'TRAILERS'),
        BottomNavigationBarItem(icon: Icon(Icons.wallpaper), label: 'PAPERS'),
        BottomNavigationBarItem(icon: Icon(Icons.tune), label: 'SYSTEM'),
      ],
    );
  }
}`,

  theme: `import 'package:flutter/material.dart';

class NeonTheme {
  static const pink   = Color(0xFFFF2D6D);
  static const cyan   = Color(0xFF00F5FF);
  static const gold   = Color(0xFFFFC531);
  static const orange = Color(0xFFFF6B35);
  static const bg     = Color(0xFF000000);
  static const bg1    = Color(0xFF0F0F18);
  static const bg2    = Color(0xFF161622);
  static const surface = Color(0xFF1A1A28);

  static ThemeData dark() => ThemeData(
    brightness: Brightness.dark,
    scaffoldBackgroundColor: bg,
    primaryColor: pink,
    colorScheme: const ColorScheme.dark(
      primary: pink,
      secondary: cyan,
      background: bg,
      surface: surface,
    ),
    fontFamily: 'SpaceGrotesk',
    textTheme: const TextTheme(
      displayLarge: TextStyle(
        fontFamily: 'BebasNeue', color: Colors.white,
        fontSize: 80, letterSpacing: -2),
      headlineLarge: TextStyle(
        fontFamily: 'SpaceGrotesk', color: Colors.white,
        fontSize: 24, fontWeight: FontWeight.w700),
      bodyMedium: TextStyle(
        fontFamily: 'Outfit', color: Color(0xFFF0EEFF), fontSize: 14),
      labelSmall: TextStyle(
        fontFamily: 'JetBrainsMono', color: Color(0xFF5A5572),
        fontSize: 9, letterSpacing: 2),
    ),
  );
}`,

  countdown: `import 'dart:async';
import 'package:flutter/material.dart';
import '../theme/neon_theme.dart';

class CountdownScreen extends StatefulWidget {
  const CountdownScreen({super.key});
  @override
  State<CountdownScreen> createState() => _CountdownScreenState();
}

class _CountdownScreenState extends State<CountdownScreen> {
  final _target = DateTime.utc(2025, 10, 1);
  late Timer _timer;
  Duration _remaining = Duration.zero;

  @override
  void initState() {
    super.initState();
    _tick();
    _timer = Timer.periodic(const Duration(seconds: 1), (_) => _tick());
  }

  void _tick() {
    final now = DateTime.now().toUtc();
    final diff = _target.difference(now);
    setState(() => _remaining = diff.isNegative ? Duration.zero : diff);
  }

  @override
  void dispose() { _timer.cancel(); super.dispose(); }

  String _pad(int n, [int len = 2]) => n.toString().padLeft(len, '0');

  @override
  Widget build(BuildContext context) {
    final d  = _remaining.inDays;
    final h  = _remaining.inHours % 24;
    final m  = _remaining.inMinutes % 60;
    final s  = _remaining.inSeconds % 60;

    return Scaffold(
      backgroundColor: NeonTheme.bg,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text('GTA VI', style: TextStyle(
              fontFamily: 'BebasNeue', fontSize: 96,
              color: Colors.white,
              shadows: [Shadow(color: Color(0xAAFF2D6D), blurRadius: 40)])),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                _block(_pad(d, 3), 'DAYS'),
                _sep(),
                _block(_pad(h), 'HRS'),
                _sep(),
                _block(_pad(m), 'MIN'),
                _sep(),
                _block(_pad(s), 'SEC'),
              ],
            ),
          ],
        ),
      ),
    );
  }

  Widget _block(String val, String label) => Container(
    margin: const EdgeInsets.symmetric(horizontal: 4),
    padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
    decoration: BoxDecoration(
      color: NeonTheme.surface,
      borderRadius: BorderRadius.circular(12),
      border: Border.all(color: NeonTheme.pink.withOpacity(0.2)),
    ),
    child: Column(children: [
      Text(val, style: const TextStyle(
        fontFamily: 'BebasNeue', fontSize: 42, color: Colors.white,
        shadows: [Shadow(color: Color(0xAAFF2D6D), blurRadius: 20)])),
      Text(label, style: const TextStyle(
        fontFamily: 'JetBrainsMono', fontSize: 8, letterSpacing: 2,
        color: Color(0xFF5A5572))),
    ]),
  );

  Widget _sep() => const Padding(
    padding: EdgeInsets.only(bottom: 20),
    child: Text(':', style: TextStyle(
      fontFamily: 'BebasNeue', fontSize: 40, color: Color(0xFFFF2D6D))),
  );
}`
};

/* ==========================================
   DOM INIT
   ========================================== */
document.addEventListener('DOMContentLoaded', async () => {
  // Register service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  }

  // PWA install prompt
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    document.getElementById('install-banner').classList.remove('hidden');
  });
  document.getElementById('install-btn').addEventListener('click', async () => {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    const { outcome } = await deferredInstallPrompt.userChoice;
    if (outcome === 'accepted') showToast('âœ… GTA VI Vault installed!');
    deferredInstallPrompt = null;
    document.getElementById('install-banner').classList.add('hidden');
  });
  document.getElementById('install-dismiss').addEventListener('click', () => {
    document.getElementById('install-banner').classList.add('hidden');
  });

  // Spawn hero particles
  spawnParticles();

  // Boot sequence
  startCountdown();
  setupNav();
  setupHeader();
  setupCodeTabs();

  function dismissSplash() {
    const splash = document.getElementById('splash');
    if (splash && !splash.classList.contains('gone')) {
      splash.classList.add('gone');
    }
  }

  // Dismiss splash with a hard 2.0s guarantee
  const splashTimer = setTimeout(dismissSplash, 2000);

  // Load data in background
  Promise.allSettled([
    loadNews(),
    loadTrailers(),
    loadWallpapers(),
    loadRadio()
  ]).finally(() => {
    dismissSplash();
  });
});

/* ==========================================
   PARTICLES
   ========================================== */
function spawnParticles() {
  const container = document.getElementById('hero-particles');
  if (!container) return;
  for (let i = 0; i < 30; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 3 + 1;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${Math.random()*100}%;
      bottom:${Math.random()*40}%;
      animation-duration:${4 + Math.random()*8}s;
      animation-delay:${Math.random()*6}s;
      --tx: ${(Math.random()-0.5)*60}px;
      background: ${Math.random() > 0.5 ? 'var(--pink)' : 'var(--cyan)'};
    `;
    container.appendChild(p);
  }
}

/* ==========================================
   COUNTDOWN
   ========================================== */
function startCountdown() {
  tick();
  setInterval(tick, 1000);
}
const pad = (n, l=2) => String(Math.max(0,n)).padStart(l,'0');
function tick() {
  const diff = RELEASE_TARGET - Date.now();
  if (diff <= 0) {
    ['t-days','t-hours','t-mins','t-secs'].forEach((id,i) =>
      document.getElementById(id).textContent = i===0?'000':'00');
    return;
  }
  document.getElementById('t-days').textContent  = pad(Math.floor(diff/86400000),3);
  document.getElementById('t-hours').textContent = pad(Math.floor(diff%86400000/3600000));
  document.getElementById('t-mins').textContent  = pad(Math.floor(diff%3600000/60000));
  document.getElementById('t-secs').textContent  = pad(Math.floor(diff%60000/1000));
}

/* ==========================================
   NAVIGATION
   ========================================== */
function setupNav() {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });
}
function switchTab(tab) {
  if (activeTab === tab) { document.getElementById('app-main').scrollTop = 0; return; }
  activeTab = tab;
  document.querySelectorAll('.tab-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tab-'+tab)?.classList.add('active');
  document.querySelector(`.nav-btn[data-tab="${tab}"]`)?.classList.add('active');
  document.getElementById('app-main').scrollTop = 0;
}
window.switchTab = switchTab;

/* ==========================================
   HEADER
   ========================================== */
function setupHeader() {
  document.getElementById('btn-apk').addEventListener('click', () => {
    switchTab('system'); showToast('â¬‡ï¸ APK download in System tab');
  });
  document.getElementById('btn-flutter').addEventListener('click', () => {
    switchTab('system'); showToast('ðŸ“¦ Flutter source in System tab');
  });
  document.getElementById('btn-radio').addEventListener('click', toggleHeaderRadio);
}
function toggleHeaderRadio() {
  if (activeRadio) {
    stopRadio();
  } else if (allRadio.length) {
    playRadio(allRadio[0].id);
  }
}

/* ==========================================
   DATA LOADERS (API with fallback)
   ========================================== */
async function fetchOrFallback(endpoint, fallback) {
  if (!API) return fallback;
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 3500);
    const r = await fetch(API + endpoint, { signal: controller.signal });
    clearTimeout(timeoutId);
    if (!r.ok) throw new Error(r.status);
    return await r.json();
  } catch { return fallback; }
}

// â”€â”€ NEWS â”€â”€
const FALLBACK_NEWS = {items:[
  {id:"n0",title:"Rockstar Confirms Fall 2025 Release Window",category:"RELEASE",tag:"OFFICIAL",tagColor:"#ff2d6d",date:"Mar 25, 2025",readTime:"3 min",source:"Rockstar Newswire",summary:"Rockstar Newswire confirms GTA VI targets Fall 2025, reaffirmed by Take-Two Interactive in their Q3 FY2025 earnings call.",highlights:["Fall 2025 confirmed","PS5 & Xbox Series X","No PC date yet"]},
  {id:"n1",title:"State of Leonida: 2.5x Larger Than Los Santos",category:"MAP",tag:"ANALYSIS",tagColor:"#ffc531",date:"Jan 2, 2025",readTime:"6 min",source:"Leonida Cartography Team",summary:"Trailer 1 analysis reveals the Leonida map is 2.5Ã— GTA V's Los Santos, with Everglades wetlands, urban Vice City and Port Gellhorn.",highlights:["2.5x Los Santos","Dynamic Everglades","Port Gellhorn confirmed"]},
  {id:"n2",title:"Lucia & Jason: Bonnie-and-Clyde Dynamic Detailed",category:"CHARACTERS",tag:"EXCLUSIVE",tagColor:"#a855f7",date:"July 30, 2024",readTime:"4 min",source:"Kotaku",summary:"Players switch between Lucia's stealth and Jason's heavy combat. Shared bankrolls and trust levels affect missions and dialogue.",highlights:["Dynamic switching","Shared bankroll","Trust levels"]},
  {id:"n3",title:"200+ Licensed Tracks â€” Tom Petty Opens Trailer 1",category:"SOUNDTRACK",tag:"MUSIC",tagColor:"#00f5ff",date:"Jun 14, 2024",readTime:"3 min",source:"MBW",summary:"200+ licensed tracks confirmed at launch. Vice City Pop Classics and Radio Espantoso return. Tom Petty's 'Love Is a Long Road' debuted in Trailer 1.",highlights:["200+ tracks","Radio Espantoso","Tom Petty confirmed"]},
  {id:"n4",title:"Hurricane Weather System Changes Gameplay",category:"GAMEPLAY",tag:"FEATURE",tagColor:"#00f5ff",date:"Apr 20, 2024",readTime:"5 min",source:"VGC",summary:"Hurricanes affect NPC behaviour, vehicle handling and mission availability, creating criminal opportunities during city evacuations.",highlights:["Hurricane system","Dynamic NPCs","Storm missions"]},
  {id:"n5",title:"10,000 NPC Behaviors â€” RAGE IX Engine",category:"TECHNOLOGY",tag:"TECH",tagColor:"#ffc531",date:"Feb 15, 2024",readTime:"6 min",source:"Digital Foundry",summary:"RAGE IX powers 10,000+ unique NPC behaviors reacting to weather, crime, player reputation and in-game social media posts.",highlights:["10,000 behaviors","In-game social media","Reputation system"]}
]};

async function loadNews() {
  const data = await fetchOrFallback('/api/news', FALLBACK_NEWS);
  allNews = data.items || [];
  renderNewsFilters();
  renderNews();
  renderHomeNewsPreview();
}

function renderNewsFilters() {
  const cats = ['ALL', ...new Set(allNews.map(n => n.category))];
  const bar = document.getElementById('news-filter');
  bar.innerHTML = cats.map(c =>
    `<button class="filter-pill${c===newsFilter?' active':''}" onclick="filterNews('${c}')">${c}</button>`
  ).join('');
}

function renderNews() {
  const filtered = newsFilter==='ALL' ? allNews : allNews.filter(n => n.category===newsFilter);
  const el = document.getElementById('news-list');
  el.innerHTML = filtered.map(n => newsCard(n)).join('');
}

function renderHomeNewsPreview() {
  const el = document.getElementById('home-news-preview');
  if (!el) return;
  el.innerHTML = allNews.slice(0,3).map(n => newsCard(n, true)).join('');
}

function newsCard(n, compact=false) {
  const tagStyle = `background:${n.tagColor}22;color:${n.tagColor};border:1px solid ${n.tagColor}44`;
  const hls = (!compact && n.highlights?.length)
    ? `<div class="news-highlights">${n.highlights.map(h=>`<span class="news-hl">${h}</span>`).join('')}</div>`
    : '';
  return `
<article class="news-card" onclick="showToast('ðŸ“° ${n.source}')">
  <div class="news-meta">
    <span class="news-tag" style="${tagStyle}">${n.tag||n.category}</span>
    <span class="news-date">${n.date}</span>
    <span class="news-rt">${n.readTime||''}</span>
  </div>
  ${n.source ? `<div class="news-source"><span class="material-symbols-outlined" style="font-size:11px">source</span>${n.source}</div>` : ''}
  <h3 class="news-title">${n.title}</h3>
  <p class="news-summary">${n.summary}</p>
  ${hls}
</article>`;
}

window.filterNews = (cat) => {
  newsFilter = cat;
  renderNewsFilters();
  renderNews();
};

// â”€â”€ TRAILERS â”€â”€
const FALLBACK_TRAILERS = {items:[
  {id:"t1",title:"GTA VI â€” Official Trailer 1",subtitle:"Vice City Revealed Â· Lucia & Jason Â· Leonida State",tag:"OFFICIAL",tagColor:"#ff2d6d",youtubeId:"QdBZExpgErs",duration:"1:31",views:"200M+",likes:"12.4M",date:"Dec 4, 2023",description:"The first official reveal: Vice City, Lucia Caminos, Jason Duval, and the State of Leonida.",highlights:["Lucia in Leonida DOC uniform","Tom Petty soundtrack debut","Hundreds of NPCs on Vice City Beach","Hurricane glimpsed","Dual protagonist reveal"]},
  {id:"t2",title:"GTA VI â€” Teaser Announcement",subtitle:"Official GTA VI Existence Confirmation",tag:"TEASER",tagColor:"#ffc531",youtubeId:"QdBZExpgErs",duration:"0:30",views:"45M+",likes:"3.8M",date:"Nov 8, 2023",description:"Rockstar's teaser confirming GTA VI development with the first logo reveal.",highlights:["First VI logo reveal","Vice City confirmed","December trailer announced"]},
  {id:"t3",title:"Trailer 1 â€” 84 Hidden Details Breakdown",subtitle:"Frame-by-Frame Fan Analysis",tag:"ANALYSIS",tagColor:"#a855f7",youtubeId:"QdBZExpgErs",duration:"24:18",views:"8.2M+",likes:"420K",date:"Dec 6, 2023",description:"Community breakdown uncovering 84 hidden details in GTA VI Trailer 1.",highlights:["84 hidden details","Map size estimation","Weapons & vehicles spotted","NPC behavior analysis"]}
]};

async function loadTrailers() {
  const data = await fetchOrFallback('/api/trailers', FALLBACK_TRAILERS);
  renderTrailers(data.items || []);
}

function renderTrailers(trailers) {
  const el = document.getElementById('trailers-list');
  el.innerHTML = trailers.map(t => {
    const tagStyle = `background:${t.tagColor}22;color:${t.tagColor};border:1px solid ${t.tagColor}44`;
    const hls = t.highlights?.length
      ? `<ul class="trailer-hl-list">${t.highlights.map(h=>`<li>${h}</li>`).join('')}</ul>`
      : '';
    return `
<div class="trailer-card">
  <div class="trailer-thumb" onclick="openYT('${t.youtubeId}','${t.title.replace(/'/g,"\\'")}')">
    <img src="https://img.youtube.com/vi/${t.youtubeId}/maxresdefault.jpg"
         alt="${t.title}" loading="lazy"
         onerror="this.src='https://img.youtube.com/vi/${t.youtubeId}/hqdefault.jpg'"/>
    <div class="trailer-play-overlay">
      <div class="play-circle-btn"><span class="material-symbols-outlined">play_arrow</span></div>
    </div>
    <span class="trailer-dur">${t.duration}</span>
  </div>
  <div class="trailer-info">
    <span class="trailer-tag" style="${tagStyle}">${t.tag}</span>
    <h3 class="trailer-title">${t.title}</h3>
    <p class="trailer-sub">${t.subtitle}</p>
    <div class="trailer-stats">
      <span><span class="material-symbols-outlined">visibility</span>${t.views} views</span>
      <span><span class="material-symbols-outlined">thumb_up</span>${t.likes}</span>
      <span><span class="material-symbols-outlined">calendar_month</span>${t.date}</span>
    </div>
    ${hls}
  </div>
</div>`;
  }).join('');
}

// â”€â”€ WALLPAPERS â”€â”€
const FALLBACK_WP = {items:[
  {id:"w1",title:"Vice City Sunset",subtitle:"Leonida Coastline",category:"LANDSCAPES",badge:"4K UHD",badgeColor:"#00f5ff",gradient:"linear-gradient(160deg,#ff6b35,#ff2d6d,#000)"},
  {id:"w2",title:"Neon Downtown",subtitle:"Vice City Nights",category:"CITYSCAPES",badge:"AMOLED",badgeColor:"#a855f7",gradient:"linear-gradient(160deg,#00f5ff,#a855f7,#000)"},
  {id:"w3",title:"Lucia & Jason",subtitle:"Leonida Outlaws",category:"CHARACTERS",badge:"CONCEPT ART",badgeColor:"#ff2d6d",gradient:"linear-gradient(160deg,#ff2d6d,#7b003e,#000)"},
  {id:"w4",title:"Everglades Gold",subtitle:"Wetlands",category:"LANDSCAPES",badge:"4K UHD",badgeColor:"#ffc531",gradient:"linear-gradient(160deg,#ffc531,#ff6b35,#000)"},
  {id:"w5",title:"Ocean Drive",subtitle:"Vice City Beach",category:"CITYSCAPES",badge:"AMOLED",badgeColor:"#00f5ff",gradient:"linear-gradient(160deg,#0055ff,#00f5ff,#000)"},
  {id:"w6",title:"Lucia Caminos",subtitle:"Protagonist",category:"CHARACTERS",badge:"HERO ART",badgeColor:"#ff2d6d",gradient:"linear-gradient(160deg,#ff2d6d,#ff6b35,#000)"},
  {id:"w7",title:"Port Gellhorn",subtitle:"Industrial Zone",category:"CITYSCAPES",badge:"4K UHD",badgeColor:"#00f5ff",gradient:"linear-gradient(160deg,#546e7a,#263238,#000)"},
  {id:"w8",title:"Everglades Alligators",subtitle:"Swamp Territory",category:"LANDSCAPES",badge:"NATURE",badgeColor:"#4caf50",gradient:"linear-gradient(160deg,#1b5e20,#004d1a,#000)"},
  {id:"w9",title:"Jason Duval",subtitle:"Co-Protagonist",category:"CHARACTERS",badge:"HERO ART",badgeColor:"#00f5ff",gradient:"linear-gradient(160deg,#00f5ff,#0044cc,#000)"},
  {id:"w10",title:"Race Circuit",subtitle:"Vice City Track",category:"VEHICLES",badge:"AMOLED",badgeColor:"#ffc531",gradient:"linear-gradient(160deg,#ffc531,#ff3a00,#000)"},
  {id:"w11",title:"GTA VI Logo",subtitle:"Official Artwork",category:"LOGOS",badge:"OFFICIAL",badgeColor:"#ff2d6d",gradient:"linear-gradient(160deg,#ff2d6d,#a8003a,#000)"},
  {id:"w12",title:"Hurricane Vice City",subtitle:"Storm Season",category:"LANDSCAPES",badge:"DYNAMIC",badgeColor:"#00f5ff",gradient:"linear-gradient(160deg,#1565c0,#0d47a1,#000)"}
]};

async function loadWallpapers() {
  const data = await fetchOrFallback('/api/wallpapers', FALLBACK_WP);
  allWallpapers = data.items || [];
  const cats = ['ALL', ...new Set(allWallpapers.map(w => w.category))];
  renderWpFilters(cats);
  renderWallpapers();
}

function renderWpFilters(cats) {
  const bar = document.getElementById('wp-filter');
  bar.innerHTML = (cats || ['ALL']).map(c =>
    `<button class="filter-pill${c===wpFilter?' active':''}" onclick="filterWp('${c}')">${c}</button>`
  ).join('');
}

function renderWallpapers() {
  const filtered = wpFilter==='ALL' ? allWallpapers : allWallpapers.filter(w => w.category===wpFilter);
  const grid = document.getElementById('wp-grid');
  if (!filtered.length) {
    grid.innerHTML = `<p style="color:var(--text2);padding:20px;font-size:13px">No wallpapers found.</p>`;
    return;
  }
  grid.innerHTML = filtered.map((w,i) => `
<div class="wp-card" onclick="openLightbox(${i},'${wpFilter}')">
  <div class="wp-bg" style="background:${w.gradient};width:100%;height:100%;position:absolute;inset:0"></div>
  <div class="wp-overlay">
    <span class="wp-badge" style="color:${w.badgeColor}">${w.badge}</span><br>
    <span class="wp-title">${w.title}</span><br>
    <span class="wp-sub">${w.subtitle}</span>
  </div>
  <div class="wp-hover-actions">
    <button class="wp-action" onclick="event.stopPropagation();showToast('â¤ï¸ Favorited!')">
      <span class="material-symbols-outlined">favorite</span>
    </button>
    <button class="wp-action" onclick="event.stopPropagation();showToast('â¬‡ï¸ Downloading ${w.title}...')">
      <span class="material-symbols-outlined">download</span>
    </button>
  </div>
</div>`).join('');
}

window.filterWp = (cat) => {
  wpFilter = cat;
  renderWpFilters(['ALL', ...new Set(allWallpapers.map(w => w.category))]);
  renderWallpapers();
};

// â”€â”€ RADIO â”€â”€
const FALLBACK_RADIO = {items:[
  {id:"r1",name:"Vice City Pop Classics",frequency:"102.3 FM",genre:"80S POP Â· CLASSICS",color:"#ff2d6d",oscillatorType:"sine",baseFrequency:220},
  {id:"r2",name:"Radio Espantoso",frequency:"107.7 FM",genre:"LATIN Â· RUMBA Â· TROPICAL",color:"#ffc531",oscillatorType:"triangle",baseFrequency:261},
  {id:"r3",name:"Leonida Trap FM",frequency:"95.1 FM",genre:"MIAMI TRAP Â· HIP-HOP",color:"#a855f7",oscillatorType:"sawtooth",baseFrequency:110},
  {id:"r4",name:"Vice City Synth Wave",frequency:"88.9 FM",genre:"SYNTHWAVE Â· ELECTRO",color:"#00f5ff",oscillatorType:"square",baseFrequency:174},
  {id:"r5",name:"Leonida Country",frequency:"101.5 FM",genre:"COUNTRY Â· SOUTHERN ROCK",color:"#ff6b35",oscillatorType:"triangle",baseFrequency:196},
  {id:"r6",name:"Vice FM",frequency:"100.1 FM",genre:"DANCE Â· EDM Â· HOUSE",color:"#ff2d6d",oscillatorType:"sine",baseFrequency:293},
  {id:"r7",name:"Emotion 98.3",frequency:"98.3 FM",genre:"SOFT ROCK Â· POWER BALLADS",color:"#a855f7",oscillatorType:"sine",baseFrequency:246},
  {id:"r8",name:"Leonida News Radio",frequency:"1450 AM",genre:"NEWS Â· TALK Â· SATIRE",color:"#ffc531",oscillatorType:"triangle",baseFrequency:130}
]};

async function loadRadio() {
  const data = await fetchOrFallback('/api/radio', FALLBACK_RADIO);
  allRadio = data.items || [];
  renderRadio();
}

function renderRadio() {
  const el = document.getElementById('radio-list');
  const [freq, band] = (r) => {
    const parts = r.frequency.split(' ');
    return [parts[0], parts[1]||'FM'];
  };
  el.innerHTML = allRadio.map(r => {
    const [f, b] = r.frequency.split(' ');
    const playing = activeRadio === r.id;
    return `
<div class="radio-card${playing?' playing':''}" onclick="playRadio('${r.id}')" style="${playing?'border-color:'+r.color+'44':''}">
  <div class="radio-freq-badge" style="${playing?'border-color:'+r.color+'44':''}">
    <span class="radio-freq" style="color:${r.color}">${f}</span>
    <span class="radio-band">${b||'FM'}</span>
  </div>
  <div class="radio-info">
    <div class="radio-name">${r.name}</div>
    <div class="radio-genre">${r.genre}</div>
  </div>
  <div class="radio-waveform">
    <div class="wv-bar" style="background:${r.color}"></div>
    <div class="wv-bar" style="background:${r.color}"></div>
    <div class="wv-bar" style="background:${r.color}"></div>
    <div class="wv-bar" style="background:${r.color}"></div>
    <div class="wv-bar" style="background:${r.color}"></div>
  </div>
</div>`;
  }).join('');
}

/* ==========================================
   WEB AUDIO RADIO SYNTH
   ========================================== */
function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function playRadio(id) {
  if (activeRadio === id) { stopRadio(); return; }
  stopRadio();
  const station = allRadio.find(r => r.id === id);
  if (!station) return;

  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = station.oscillatorType || 'sine';
    osc.frequency.setValueAtTime(station.baseFrequency || 220, ctx.currentTime);
    // Subtle pitch variation
    osc.frequency.linearRampToValueAtTime(
      (station.baseFrequency || 220) * 1.005,
      ctx.currentTime + 2
    );

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(800, ctx.currentTime);
    filter.Q.setValueAtTime(0.5, ctx.currentTime);

    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 0.5);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);
    osc.start();

    // Add a second harmonic
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime((station.baseFrequency||220) * 1.5, ctx.currentTime);
    gain2.gain.setValueAtTime(0, ctx.currentTime);
    gain2.gain.linearRampToValueAtTime(0.02, ctx.currentTime + 0.5);
    osc2.connect(gain2);
    gain2.connect(ctx.destination);
    osc2.start();

    radioNodes = { osc, osc2, gain, gain2 };
    activeRadio = id;
  } catch(e) {
    console.warn('Web Audio not available', e);
    activeRadio = id;
  }

  // Update header radio button
  const radioBtnIcon = document.getElementById('radio-icon');
  document.getElementById('btn-radio').classList.add('playing');
  if (radioBtnIcon) radioBtnIcon.textContent = 'radio';

  renderRadio();
  showToast('ðŸŽµ ' + station.name + ' â€” ' + station.frequency);
}

function stopRadio() {
  if (radioNodes.osc) {
    try {
      const ctx = getAudioCtx();
      radioNodes.gain?.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.3);
      radioNodes.gain2?.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.3);
      setTimeout(() => { radioNodes.osc?.stop(); radioNodes.osc2?.stop(); }, 350);
    } catch {}
  }
  radioNodes = {};
  activeRadio = null;
  document.getElementById('btn-radio').classList.remove('playing');
  renderRadio();
}

window.playRadio = playRadio;

/* ==========================================
   YOUTUBE MODAL
   ========================================== */
window.openYT = (videoId, title) => {
  const modal = document.getElementById('yt-modal');
  const iframe = document.getElementById('yt-iframe');
  iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  modal.classList.remove('hidden');
};
window.closeYTModal = () => {
  document.getElementById('yt-iframe').src = '';
  document.getElementById('yt-modal').classList.add('hidden');
};

/* ==========================================
   WALLPAPER LIGHTBOX
   ========================================== */
window.openLightbox = (idx, filter) => {
  const filtered = filter && filter!=='ALL'
    ? allWallpapers.filter(w => w.category===filter)
    : allWallpapers;
  const w = filtered[idx];
  if (!w) return;

  document.getElementById('lb-visual').style.cssText =
    `background:${w.gradient};width:100%;aspect-ratio:9/16;max-height:55vh`;
  document.getElementById('lb-title').textContent = w.title;
  document.getElementById('lb-sub').textContent   = w.subtitle;
  document.getElementById('lb-badge').textContent = w.badge;

  document.getElementById('wp-lightbox').classList.remove('hidden');
};
window.closeLightbox = () => {
  document.getElementById('wp-lightbox').classList.add('hidden');
};

/* ==========================================
   CODE VIEWER
   ========================================== */
function setupCodeTabs() {
  const tabs = document.querySelectorAll('.code-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const file = tab.dataset.file;
      document.getElementById('code-filename').textContent = tab.textContent.trim();
      document.getElementById('code-pre').textContent = FLUTTER_CODE[file] || '';
    });
  });
  // Load default
  document.getElementById('code-pre').textContent = FLUTTER_CODE.pubspec;
}

window.copyCode = () => {
  const code = document.getElementById('code-pre').textContent;
  navigator.clipboard?.writeText(code).then(() => showToast('âœ… Code copied!'));
};

/* ==========================================
   TOAST
   ========================================== */
window.showToast = (msg) => {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
};