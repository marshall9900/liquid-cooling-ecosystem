const t = require('./theme');
const { badge, topBar, footer, title, bulletList, source, insight } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s); badge(s, '58');
  title(s, '英维克深度：海悟竞争策略矩阵');
  bulletList(s, [
    { title: '【1】Manifold', text: '英维克主供腾讯+H3C → 海悟差异化:品质+价格-15%(英维克ASP ¥10K→海悟¥8.5K)+交期缩短(6周→4周)', color: t.primary },
    { title: '【2】CDU', text: '英维克主导 → 海悟P2远期(2029+)。短期避免正面竞争 先做Manifold+冷板', color: t.primary },
    { title: '【3】电源冷板★', text: '英维克未覆盖 → 海悟P0蓝海。2026立项→2027POC→先发+专利+绑OEM', color: t.primary },
    { title: '【4】整体策略', text: '不正面挑战英维克全栈 → Manifold+电源冷板双轮差异化 → 建立战略纵深后扩展冷板', color: t.primary }
  ]);
  insight(s, '差异定位: Manifold(价格-15%+交期-33%) 电源冷板(蓝海独享) 建立纵深后扩展全栈', 3.85);
  source(s, '英维克(002837)2025年报 | sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-gb300-liquid-cooling-domestic-breakthrough.md → 国产降价25-32%+交期减半 | ASP差价为行业估算');
}

module.exports = { createSlide };
