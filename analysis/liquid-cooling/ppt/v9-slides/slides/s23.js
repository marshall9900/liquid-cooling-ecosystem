let pptxgen, t;
pptxgen = require('pptxgenjs'); t = require('./theme');
const { badge, bar, ft, title, hdrCell, dataCell, dataTable } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  bar(s, t);
  title(s, t, 'CDU竞争全景');

  dataTable(s, t,
    ['厂商', '国家/地区', '功率(kW)', 'ASP(¥万)', '认证状态', '份额(估)'],
    [
      ['英维克', '中国', '50-150', '30-80', 'OCP进行中', '~25%'],
      ['Vertiv(维谛)', '美国', '50-200', '50-120', '✅ Certified', '~18%'],
      ['曙光数创', '中国', '50-120', '35-70', '—', '~15%'],
      ['Schneider', '法国', '50-200', '60-150', '✅ Certified', '~12%'],
      ['高澜股份', '中国', '30-100', '25-60', '—', '~10%'],
      ['Delta(台达)', '台湾', '30-120', '35-80', '—', '~8%'],
      ['申菱/同飞', '中国', '30-80', '20-50', '—', '~5%'],
      ['Boyd/GRC', '国际', '50-150', '50-100', '✅', '~7%']
    ],
    [1.2, 1.0, 1.0, 1.2, 1.1, 1.0],
    0.65
  );

  ft(s, t);
  badge(s, '23', t);
}

module.exports = { createSlide };
