const t = require('./theme');
const { badge, topBar, footer, title, source, bulletList } = require('./_h');
function createSlide(p) { const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s);
  title(s, "供应链策略与海悟自主化路线");
  bulletList(s, [
    { title: "【1】密封件国产化", text: "当前进口3M/Parker占70%+ → 2026开发国产替代(宁波/苏州厂商) → 2027切换30% → 降本15%", color: t.primary },
    { title: "【2】泵国产化", text: "Grundfos/Iwaki为主 → 国产磁力泵(凯泉/南方) → 2026测试 → 2027批量 → 降本20%", color: t.primary },
    { title: "【3】快接头自研", text: "Staubli专利绕过 → 差异化密封结构 → 2027专利申请 → 2028量产 → 降本40%", color: t.primary },
    { title: "【4】供应链总目标", text: "2026进口比例70% → 2028进口比例30% → 2030进口比例<10%。总降本幅度30-40%", color: t.primary }
  ]);
  source(s, 'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-gb300-liquid-cooling-domestic-breakthrough.md → UQD 2.0打破专利+国产降价32% | 国金证券2025-11-03→3D打印冷板趋势 | 民生证券2023-12-27→液冷板行业深度 | 📐铁律⑩索引');
  footer(s); badge(s, "63"); }
module.exports = { createSlide };
