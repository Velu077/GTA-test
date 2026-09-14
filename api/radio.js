const STATIONS = [
  {
    id: "r1",
    name: "Vice City Pop Classics",
    shortName: "VCP",
    frequency: "102.3 FM",
    genre: "80S POP Â· DISCO Â· CLASSICS",
    description: "The ultimate 80s Vice City nostalgia station. Miami pop, synth hits and disco classics from the original Vice City era.",
    color: "#ff2d6d",
    dj: "Fernando Martinez",
    oscillatorType: "sine",
    baseFrequency: 220
  },
  {
    id: "r2",
    name: "Radio Espantoso",
    shortName: "ESP",
    frequency: "107.7 FM",
    genre: "LATIN Â· RUMBA Â· TROPICAL",
    description: "Latin heat from Leonida. Rumba, salsa, tropical sounds and Latin pop from across the Americas.",
    color: "#ffc531",
    dj: "Pepe",
    oscillatorType: "triangle",
    baseFrequency: 261
  },
  {
    id: "r3",
    name: "Leonida Trap FM",
    shortName: "TRAP",
    frequency: "95.1 FM",
    genre: "MIAMI TRAP Â· HIP-HOP Â· DRILL",
    description: "Modern Vice City sound. Miami trap, drill, Southern hip-hop and the streets of Leonida State.",
    color: "#a855f7",
    dj: "Dreadnaught",
    oscillatorType: "sawtooth",
    baseFrequency: 110
  },
  {
    id: "r4",
    name: "Vice City Synth Wave",
    shortName: "SYN",
    frequency: "88.9 FM",
    genre: "SYNTHWAVE Â· RETRO ELECTRO Â· DARKSYNTH",
    description: "Neon nights and retro futures. Synthwave, darksynth and electro for the Vice City night shift.",
    color: "#00f5ff",
    dj: "M.O.V.E.",
    oscillatorType: "square",
    baseFrequency: 174
  },
  {
    id: "r5",
    name: "Leonida Country Roads",
    shortName: "LCR",
    frequency: "101.5 FM",
    genre: "COUNTRY Â· SOUTHERN ROCK Â· AMERICANA",
    description: "The sound of rural Leonida. Country, Southern rock and Americana for the swamps and highways.",
    color: "#ff6b35",
    dj: "Bobby Ray",
    oscillatorType: "triangle",
    baseFrequency: 196
  },
  {
    id: "r6",
    name: "Vice FM",
    shortName: "VFM",
    frequency: "100.1 FM",
    genre: "DANCE Â· EDM Â· HOUSE",
    description: "The Vice City club anthem station. EDM, house, techno and dance for the Ocean Drive nightlife scene.",
    color: "#ff2d6d",
    dj: "DJ Mix",
    oscillatorType: "sine",
    baseFrequency: 293
  },
  {
    id: "r7",
    name: "Emotion 98.3",
    shortName: "EMO",
    frequency: "98.3 FM",
    genre: "SOFT ROCK Â· POWER BALLADS Â· 80S",
    description: "Smooth sounds for Vice City sunsets. Power ballads, soft rock and 80s hits to cruise the coastline.",
    color: "#a855f7",
    dj: "Fernando",
    oscillatorType: "sine",
    baseFrequency: 246
  },
  {
    id: "r8",
    name: "Leonida News Radio",
    shortName: "LNR",
    frequency: "1450 AM",
    genre: "NEWS Â· TALK Â· COMMENTARY",
    description: "All the Vice City crime, weather and Leonida State news. Satirical reporting on your criminal exploits.",
    color: "#ffc531",
    dj: "Various",
    oscillatorType: "triangle",
    baseFrequency: 130
  }
];

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
  res.json({ items: STATIONS, total: STATIONS.length });
};