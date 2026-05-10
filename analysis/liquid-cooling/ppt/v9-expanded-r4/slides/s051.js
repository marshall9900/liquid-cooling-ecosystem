const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s); badge(s, '51');
  title(s, '液冷组件竞争全景');
  dataTable(s,
    ['组件', '国际龙头', '国内龙头', 'TAM(¥B)', '国产化', '海悟'],
    [
      ['GPU冷板', 'CoolIT/AVC/nVent', '英维克/高澜/曙光', '5-8', '<10%', 'P2'],
      ['CPU冷板', 'CoolIT/AVC/Delta', '英维克/同飞', '3-5', '<15%', 'P1'],
      ['CDU', 'Vertiv/Schneider', '英维克/曙光/高澜', '8-12', '~60%', 'P2'],
      ['Manifold', '—', '英维克/高澜/同飞', '3-5', '~70%', 'P0'],
      ['快接头', 'Staubli 72%', '国产<5%', '2-4', '<5%', 'P1']
    ],
    { colW: [1.1, 1.3, 1.5, 1, 0.8, 1.2] }
  );
  insight(s, 'Manifold(国产70%)+电源冷板(空白)=海悟P0双轮 冷板暂避NV认证壁垒 2027+国产GPU窗口', 3.3);
  source(s, 'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-gb300-liquid-cooling-domestic-breakthrough.md → 国产降价25-32%+UQD 2.0打破专利 | SEC:VRT/AVC(3017.TW) | 东吴证券2025-01-26→冷板式液冷空间测算 | 国信证券2025-09-29→液冷市场规模');
}

module.exports = { createSlide };
