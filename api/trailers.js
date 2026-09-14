const TRAILERS = [
  {
    id: "t1",
    title: "GTA VI â€” Official Trailer 1",
    subtitle: "Vice City Revealed Â· Lucia & Jason Â· Leonida State",
    tag: "OFFICIAL",
    tagColor: "#ff2d6d",
    youtubeId: "QdBZExpgErs",
    duration: "1:31",
    views: "200M+",
    likes: "12.4M",
    date: "December 4, 2023",
    description: "The first official trailer revealing Vice City, protagonist Lucia Caminos, co-protagonist Jason Duval, and the State of Leonida. Soundtrack: Tom Petty & The Heartbreakers - Love Is a Long Road.",
    highlights: [
      "Lucia in Leonida DOC uniform",
      "Tom Petty 'Love Is a Long Road' debut",
      "Vice City Beach with hundreds of NPCs",
      "Everglades alligator sequence",
      "Dual protagonist system revealed",
      "Hurricane weather system glimpsed"
    ],
    breakdownCount: 84
  },
  {
    id: "t2",
    title: "GTA VI â€” Rockstar Games Teaser",
    subtitle: "GTA VI Announcement & Countdown Clock",
    tag: "TEASER",
    tagColor: "#ffc531",
    youtubeId: "QdBZExpgErs",
    duration: "0:30",
    views: "45M+",
    likes: "3.8M",
    date: "November 8, 2023",
    description: "The original teaser that announced GTA VI was in development, featuring the iconic VI logo for the first time. Rockstar confirmed a December 2023 trailer reveal.",
    highlights: [
      "First official GTA VI logo reveal",
      "Confirms Vice City return",
      "Development confirmation"
    ],
    breakdownCount: 12
  },
  {
    id: "t3",
    title: "GTA VI Trailer 1 â€” Frame-by-Frame Breakdown",
    subtitle: "Fan Analysis Â· 84 Hidden Details",
    tag: "FAN ANALYSIS",
    tagColor: "#a855f7",
    youtubeId: "QdBZExpgErs",
    duration: "24:18",
    views: "8.2M+",
    likes: "420K",
    date: "December 6, 2023",
    description: "Exhaustive frame-by-frame analysis of GTA VI Trailer 1, uncovering 84 hidden details, map clues, character references, and gameplay mechanics hidden in plain sight.",
    highlights: [
      "84 hidden details found",
      "Map size estimation methodology",
      "NPC behavior analysis",
      "Weapons and vehicles spotted"
    ],
    breakdownCount: 84
  }
];

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate');
  res.json({ items: TRAILERS, total: TRAILERS.length });
};