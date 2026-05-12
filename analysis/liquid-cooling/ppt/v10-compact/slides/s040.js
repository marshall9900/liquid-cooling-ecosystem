const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s); badge(s, '54');
  title(s, 'Vertiv/Schneider/Staubli：国际三强');
  dataTable(s,
    ['公司', '液冷营收', '优势', 'ASP', '海悟机会'],
    [
      ['Vertiv', 'CDU $500M+', 'CDU全球渠道', '$120K-150K', '价格低30%本土化'],
      ['Schneider', '$800M+', '电气冷却一体化', '$130K-180K', '2029+远期'],
      ['Staubli', '$300M+(快接头)', '密封专利72%份额', '$20-80/个', '搭售Manifold']
    ],
    { colW: [1.5, 1.5, 1.5, 1.5, 1.5] }
  );
  insight(s, '国际巨头CDU价格差30%+ → 国产替代空间大 Staubli快接头72%份额=Manifold搭售机会', 2.85);
  source(s, 'SEC:VRT年报→CDU营收 | SEC:SBGSY→电气一体化 | Staubli官网→快接头72%份额 | sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-06-global-liquid-cooling-market-173b-usd.md → CDU交货16-24周 | 国信证券2025-09-29→北美冷板$1040/kW | ASP为行业估算');
}

module.exports = { createSlide };
