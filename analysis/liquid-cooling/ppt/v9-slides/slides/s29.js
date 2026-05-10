let pptxgen, t;
pptxgen = require('pptxgenjs'); t = require('./theme');
const { badge, bar, ft, title, hdrCell, dataCell, dataTable } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  bar(s, t);
  title(s, t, '竞争强度矩阵：竞品×产品维度');

  dataTable(s, t,
    ['厂商', 'GPU冷板', 'CPU冷板', '电源冷板', 'CDU', 'Manifold', '快接头'],
    [
      ['CoolIT', '★★★★★一供', '★★★★', '—', '—', '—', '—'],
      ['AVC(奇鋐)', '★★★★', '★★★', '—', '—', '—', '—'],
      ['nVent', '★★★', '★★★', '—', '—', '—', '—'],
      ['英维克', '★★★', '★★★', '—', '★★★★★', '★★★★', '—'],
      ['高澜股份', '★★', '★★', '—', '★★', '★★★', '—'],
      ['Vertiv', '—', '—', '—', '★★★★★', '—', '—'],
      ['Staubli', '—', '—', '—', '—', '—', '★★★★★'],
      ['海悟科技', '☆ 关注', '☆ 关注', '★★蓝海P0', '☆ 储备', '★★P0出量', '☆ 储备']
    ],
    [1.1, 1.2, 1.1, 1.2, 1.3, 1.2, 1.2],
    0.65
  );

  ft(s, t);
  badge(s, '29', t);
}

module.exports = { createSlide };
