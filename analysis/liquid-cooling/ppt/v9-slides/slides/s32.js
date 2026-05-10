let pptxgen, t;
pptxgen = require('pptxgenjs'); t = require('./theme');
const { badge, bar, ft, title, hdrCell, dataCell, dataTable } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  bar(s, t);
  title(s, t, '液冷TAM测算');

  dataTable(s, t,
    ['年份', 'TAM(¥B)', 'CAGR', '中国占比', 'SAM(海悟可达)', 'SOM(海悟国内)', 'SOM(海悟海外)'],
    [
      ['2026E', '39', '—', '35%(~¥13B)', '~¥15B', '¥0.05B', '0'],
      ['2027E', '65', '67%', '38%(~¥25B)', '~¥25B', '¥0.15B', '¥0.02B'],
      ['2028E', '120', '85%', '40%(~¥48B)', '~¥45B', '¥0.4B', '¥0.1B'],
      ['2029E', '175', '46%', '42%(~¥74B)', '~¥65B', '¥0.7B', '¥0.15B'],
      ['2030E', '250', '43%', '45%(~¥113B)', '~¥100B', '¥1.0B', '¥0.2B']
    ],
    [0.7, 0.9, 0.7, 1.1, 1.3, 1.2, 1.2],
    0.65
  );

  ft(s, t);
  badge(s, '32', t);
}

module.exports = { createSlide };
