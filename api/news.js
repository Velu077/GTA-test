const NEWS = [
  {
    id: "news-0",
    title: "Rockstar Games Locks Release Window: Fall 2025 Countdown In Full Effect",
    category: "RELEASE",
    tag: "OFFICIAL",
    tagColor: "#ff2d6d",
    date: "Mar 25, 2025",
    readTime: "3 min",
    source: "Rockstar Newswire",
    summary: "Rockstar Games Newswire confirms GTA VI targets Fall 2025 window. Take-Two Interactive backs the timeline in their latest earnings call, reaffirming the most anticipated game release in history.",
    highlights: ["Fall 2025 confirmed", "No PC date yet", "PS5 & Xbox Series X launch"]
  },
  {
    id: "news-1",
    title: "Rockstar Confirms Fall 2025 in Take-Two Q3 FY2025 Earnings Call",
    category: "RELEASE",
    tag: "CONFIRMED",
    tagColor: "#ff2d6d",
    date: "Feb 10, 2025",
    readTime: "5 min",
    source: "Take-Two Interactive",
    summary: "Take-Two CFO Lainie Goldstein reaffirmed GTA VI's Fall 2025 release window during Q3 FY2025 earnings, stating no delays are anticipated and development is on track.",
    highlights: ["Q3 FY2025 confirmation", "No delays anticipated", "Budget: $2B+ production"]
  },
  {
    id: "news-2",
    title: "State of Leonida Map Estimated 2.5x Larger Than Los Santos",
    category: "MAP",
    tag: "ANALYSIS",
    tagColor: "#ffc531",
    date: "Jan 2, 2025",
    readTime: "6 min",
    source: "Leonida Cartography Team",
    summary: "Detailed analysis of Trailer 1 reveals Vice City and the State of Leonida is approximately 2.5Ã— the size of GTA V's Los Santos. Features include dynamic Everglades wetlands, urban Vice City sprawl, rural farmland, and extensive coastal zones.",
    highlights: ["2.5x Los Santos size", "Dynamic Everglades", "Port Gellhorn industrial zone"]
  },
  {
    id: "news-3",
    title: "Lucia & Jason: Bonnie-and-Clyde Dynamic Detailed by Insider",
    category: "CHARACTERS",
    tag: "EXCLUSIVE",
    tagColor: "#a855f7",
    date: "July 30, 2024",
    readTime: "4 min",
    source: "Kotaku Insider",
    summary: "Internal mechanics revealed: players dynamically switch between Lucia's tactical agility and Jason's heavy weapons. Features shared bankrolls and trust levels that affect missions, safe house access, and unique dialogue trees.",
    highlights: ["Dynamic character switching", "Shared bankroll system", "Trust level mechanics"]
  },
  {
    id: "news-4",
    title: "200+ Licensed Tracks Confirmed â€” Tom Petty Opens Trailer 1",
    category: "SOUNDTRACK",
    tag: "MUSIC",
    tagColor: "#00f5ff",
    date: "Jun 14, 2024",
    readTime: "3 min",
    source: "Music Business Worldwide",
    summary: "Sources confirm 200+ licensed tracks at launch across Vice City Pop Classics, Radio Espantoso, and a new Miami Trap station. Tom Petty's 'Love Is a Long Road' opened Trailer 1 to massive fanfare.",
    highlights: ["200+ licensed tracks", "Vice City Pop Classics", "Radio Espantoso returns"]
  },
  {
    id: "news-5",
    title: "Trailer 2 Expected at PlayStation 5 Pro Showcase â€” 60FPS Ray Tracing",
    category: "GRAPHICS",
    tag: "RUMOUR",
    tagColor: "#ff6b35",
    date: "May 5, 2024",
    readTime: "4 min",
    source: "Digital Foundry",
    summary: "Rockstar marketing schedules suggest Trailer 2 will premiere alongside the PlayStation 5 Pro showcase, highlighting 60 FPS Ray Tracing mode and dynamic AI pedestrian interactions using Rockstar's new RAGE IX engine.",
    highlights: ["60 FPS Ray Tracing", "PS5 Pro exclusive mode", "RAGE IX engine reveal"]
  },
  {
    id: "news-6",
    title: "Hurricane System Confirmed â€” Dynamic Weather Affects Gameplay",
    category: "GAMEPLAY",
    tag: "FEATURE",
    tagColor: "#00f5ff",
    date: "Apr 20, 2024",
    readTime: "5 min",
    source: "VGC",
    summary: "A dynamic hurricane weather system has been confirmed for Vice City. Hurricanes affect NPC behaviour, vehicle handling, mission availability and create new criminal opportunities during city evacuations.",
    highlights: ["Real hurricane system", "Dynamic NPC evacuation", "Storm-based missions"]
  },
  {
    id: "news-7",
    title: "Lucia's Backstory: Leonida DOC, Cartel Ties & Vice City Underworld",
    category: "STORY",
    tag: "LORE",
    tagColor: "#a855f7",
    date: "Mar 1, 2024",
    readTime: "7 min",
    source: "GTA Forums",
    summary: "Deep-dive into Lucia Caminos' backstory: released from Leonida Department of Corrections, recruited by a Vice City cartel, and eventually forming a partnership with Jason Duval on a cross-state criminal odyssey.",
    highlights: ["Prison backstory", "Cartel connection", "Cross-state heists"]
  },
  {
    id: "news-8",
    title: "10,000 Unique NPC Behaviors â€” Most Advanced AI in GTA History",
    category: "TECHNOLOGY",
    tag: "TECH",
    tagColor: "#ffc531",
    date: "Feb 15, 2024",
    readTime: "6 min",
    source: "Rockstar Technical Blog",
    summary: "Rockstar's new RAGE IX engine powers over 10,000 unique NPC behavior trees. NPCs react to weather, crime, player reputation, and social media within the game world. Vice City residents post about player crimes online.",
    highlights: ["10,000 NPC behaviors", "In-game social media", "Reputation system"]
  },
  {
    id: "news-9",
    title: "PC Release Expected 18 Months After Console Launch",
    category: "PLATFORMS",
    tag: "PC",
    tagColor: "#ff6b35",
    date: "Jan 10, 2024",
    readTime: "3 min",
    source: "Bloomberg",
    summary: "Following GTA V's tradition, GTA VI is expected to launch on PC approximately 18 months after the console release. Extended development for PC optimisation has been confirmed to include DLSS 4, Ray Reconstruction and Ultra 4K support.",
    highlights: ["PC: ~18 months post-console", "DLSS 4 support", "4K Ultra texture pack"]
  },
  {
    id: "news-10",
    title: "Vice City Fully Reimagined â€” Miami 2026 Aesthetic with Retro 80s Easter Eggs",
    category: "MAP",
    tag: "WORLD",
    tagColor: "#ffc531",
    date: "Dec 5, 2023",
    readTime: "8 min",
    source: "Eurogamer",
    summary: "Vice City has been rebuilt from scratch with a 2026 Miami aesthetic â€” skyscrapers, ocean drives, Art Deco architecture and hidden 80s Vice City references. The Malibu Club, Mansion and strip are confirmed.",
    highlights: ["Modern 2026 Miami", "80s Vice City Easter eggs", "Malibu Club confirmed"]
  },
  {
    id: "news-11",
    title: "GTA VI Trailer 1 Breaks All YouTube Records â€” 200M Views in 24 Hours",
    category: "MILESTONES",
    tag: "RECORD",
    tagColor: "#ff2d6d",
    date: "Dec 4, 2023",
    readTime: "2 min",
    source: "YouTube",
    summary: "GTA VI Trailer 1 became the most-viewed non-music YouTube video in history with over 200 million views in 24 hours, surpassing previous records by a factor of 3x and crashing Rockstar's official website.",
    highlights: ["200M views in 24hrs", "Most-viewed game trailer ever", "Rockstar site crashed"]
  }
];

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
  const { category } = req.query;
  const data = category && category !== 'ALL'
    ? NEWS.filter(n => n.category === category)
    : NEWS;
  res.json({ items: data, total: data.length });
};