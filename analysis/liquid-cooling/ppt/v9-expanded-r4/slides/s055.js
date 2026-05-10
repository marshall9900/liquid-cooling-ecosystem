const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s); badge(s, '55');
  title(s, '高澜/曙光数创/同飞/申菱：国内二线');
  dataTable(s,
    ['公司', '液冷营收', '产品', '客户', 'vs海悟'],
    [
      ['高澜', '¥0.5-1.0B', '冷板+CDU', '浪潮+腾讯', '直接竞争'],
      ['曙光数创', '¥0.3-0.5B', '冷板+CDU', '中科曙光', '信创链竞争'],
      ['同飞', '~¥0.2B', 'CDU+温控', '—', 'CDU中低端'],
      ['申菱', '~¥0.15B', 'Manifold+CDU', '—', 'Manifold竞争']
    ],
    { colW: [1.2, 1.2, 1.8, 1.5, 2.2] }
  );
  insight(s, '高澜(最强)+曙光(信创)→海悟差异: 电源冷板(它们都未做) Manifold品质+交期突显', 2.85);
  source(s, '高澜股份(300499)/曙光数创(872808)/同飞股份(300990)2025年报 | 东吴证券2025-01-26→国产冷板液冷放量 | 国信证券2025-09-29→国产液冷竞争力');
}

module.exports = { createSlide };
