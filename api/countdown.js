module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');

  const TARGET = new Date('2025-10-01T00:00:00Z').getTime();
  const now = Date.now();
  const diff = Math.max(0, TARGET - now);

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);

  res.json({
    days, hours, mins, secs,
    totalMs: diff,
    target: '2025-10-01T00:00:00Z',
    releaseLabel: 'Fall 2025',
    releaseStatus: diff <= 0 ? 'released' : 'countdown',
    source: 'Take-Two Interactive Q3 FY2025 Earnings'
  });
};