const CATEGORIES = ["LANDSCAPES", "CITYSCAPES", "CHARACTERS", "VEHICLES", "LOGOS", "ABSTRACT"];

const makeGrad = (colors) => `linear-gradient(160deg, ${colors.join(', ')}, #000000)`;

const WALLPAPERS = [
  { id:"wp-1",  title:"Vice City Sunset",       subtitle:"Leonida Coastline",      category:"LANDSCAPES",  badge:"4K UHD",     badgeColor:"#00f5ff", gradient: makeGrad(["#ff6b35","#ff2d6d","#1a0010"]) },
  { id:"wp-2",  title:"Neon Downtown Strip",    subtitle:"Vice City Nights",       category:"CITYSCAPES",  badge:"AMOLED",     badgeColor:"#a855f7", gradient: makeGrad(["#00f5ff","#a855f7","#110022"]) },
  { id:"wp-3",  title:"Lucia & Jason",          subtitle:"Leonida Outlaws",        category:"CHARACTERS",  badge:"CONCEPT ART",badgeColor:"#ff2d6d", gradient: makeGrad(["#ff2d6d","#7b003e","#000"]) },
  { id:"wp-4",  title:"Everglades Gold",        subtitle:"Leonida Wetlands",       category:"LANDSCAPES",  badge:"4K UHD",     badgeColor:"#ffc531", gradient: makeGrad(["#ffc531","#ff6b35","#0d0800"]) },
  { id:"wp-5",  title:"Ocean Drive Night",      subtitle:"Vice City Beach",        category:"CITYSCAPES",  badge:"AMOLED",     badgeColor:"#00f5ff", gradient: makeGrad(["#0055ff","#00f5ff","#000820"]) },
  { id:"wp-6",  title:"Lucia Caminos",          subtitle:"Primary Protagonist",    category:"CHARACTERS",  badge:"HERO ART",   badgeColor:"#ff2d6d", gradient: makeGrad(["#ff2d6d","#ff6b35","#200010"]) },
  { id:"wp-7",  title:"Port Gellhorn",          subtitle:"Industrial Docklands",   category:"CITYSCAPES",  badge:"4K UHD",     badgeColor:"#00f5ff", gradient: makeGrad(["#546e7a","#263238","#000"]) },
  { id:"wp-8",  title:"Leonida Alligator Bay",  subtitle:"Swamp Territory",        category:"LANDSCAPES",  badge:"NATURE",     badgeColor:"#4caf50", gradient: makeGrad(["#1b5e20","#004d1a","#000"]) },
  { id:"wp-9",  title:"Jason Duval",            subtitle:"Co-Protagonist",         category:"CHARACTERS",  badge:"HERO ART",   badgeColor:"#00f5ff", gradient: makeGrad(["#00f5ff","#0044cc","#000820"]) },
  { id:"wp-10", title:"Vice City Race Track",   subtitle:"Supercar Circuit",       category:"VEHICLES",    badge:"AMOLED",     badgeColor:"#ffc531", gradient: makeGrad(["#ffc531","#ff3a00","#100500"]) },
  { id:"wp-11", title:"GTA VI Logo",            subtitle:"Official Artwork",       category:"LOGOS",       badge:"OFFICIAL",   badgeColor:"#ff2d6d", gradient: makeGrad(["#ff2d6d","#a8003a","#000"]) },
  { id:"wp-12", title:"Vice City Sunrise",      subtitle:"Leonida Dawn",           category:"LANDSCAPES",  badge:"4K UHD",     badgeColor:"#ffc531", gradient: makeGrad(["#ff9800","#ff2d6d","#100010"]) },
  { id:"wp-13", title:"Art Deco Vice City",     subtitle:"1980s Architecture",     category:"CITYSCAPES",  badge:"RETRO",      badgeColor:"#a855f7", gradient: makeGrad(["#9c27b0","#673ab7","#0a0010"]) },
  { id:"wp-14", title:"Dual Protagonists",      subtitle:"Lucia & Jason Together", category:"CHARACTERS",  badge:"ART",        badgeColor:"#ff2d6d", gradient: makeGrad(["#ff2d6d","#00f5ff","#0d0018"]) },
  { id:"wp-15", title:"Supercar Collection",    subtitle:"Vice City Garage",       category:"VEHICLES",    badge:"VEHICLES",   badgeColor:"#00f5ff", gradient: makeGrad(["#f44336","#9c27b0","#0d0010"]) },
  { id:"wp-16", title:"Neon Glitch Art",        subtitle:"Digital Vice City",      category:"ABSTRACT",    badge:"GLITCH",     badgeColor:"#ff2d6d", gradient: makeGrad(["#ff2d6d","#00f5ff","#a855f7"]) },
  { id:"wp-17", title:"Hurricane Vice City",    subtitle:"Storm Season",           category:"LANDSCAPES",  badge:"DYNAMIC",    badgeColor:"#00f5ff", gradient: makeGrad(["#1565c0","#0d47a1","#000820"]) },
  { id:"wp-18", title:"Malibu Club Interior",   subtitle:"Vice City Nightclub",    category:"CITYSCAPES",  badge:"INTERIOR",   badgeColor:"#ff2d6d", gradient: makeGrad(["#e91e63","#880e4f","#0d0010"]) },
  { id:"wp-19", title:"Lucia Mugshot",          subtitle:"Leonida DOC",            category:"CHARACTERS",  badge:"ICONIC",     badgeColor:"#ff2d6d", gradient: makeGrad(["#ff2d6d","#6d0025","#000"]) },
  { id:"wp-20", title:"Vice City from Above",   subtitle:"Aerial Skyline",         category:"CITYSCAPES",  badge:"4K UHD",     badgeColor:"#ffc531", gradient: makeGrad(["#ffc531","#ff6b35","#001010"]) },
  { id:"wp-21", title:"RAGE IX Engine",         subtitle:"Tech Showcase",          category:"ABSTRACT",    badge:"TECH",       badgeColor:"#00f5ff", gradient: makeGrad(["#00f5ff","#006080","#000c10"]) },
  { id:"wp-22", title:"Offshore Patrol Boat",   subtitle:"Vice City Coastguard",   category:"VEHICLES",    badge:"MARITIME",   badgeColor:"#00f5ff", gradient: makeGrad(["#0077b6","#023e8a","#000810"]) },
  { id:"wp-23", title:"Jason â€” Wanted Level 5", subtitle:"Maximum Heat",           category:"CHARACTERS",  badge:"WANTED",     badgeColor:"#ff2d6d", gradient: makeGrad(["#ff2d6d","#cc0000","#100000"]) },
  { id:"wp-24", title:"Vice City Expressway",   subtitle:"Night Drive",            category:"VEHICLES",    badge:"NIGHT",      badgeColor:"#ffc531", gradient: makeGrad(["#ffc531","#ff6b35","#0a0500"]) }
];

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
  const { category } = req.query;
  const items = category && category !== 'ALL'
    ? WALLPAPERS.filter(w => w.category === category)
    : WALLPAPERS;
  res.json({ items, total: WALLPAPERS.length, categories: ['ALL', ...CATEGORIES] });
};