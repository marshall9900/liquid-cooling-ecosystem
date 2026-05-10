const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, bar, ft, title, bulletList, insightBox } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  bar(s, t);
  title(s, t, 'OTT 液冷采购决策链');

  bulletList(s, t, [
    { title: 'GPU选择 → 定冷板', text: 'NVIDIA GPU → CoolIT/AVC冷板  |  昇腾 → 超聚变/浪潮冷板  |  自研GPU → 开放招标\n海悟路径：通过OEM认证（NVIDIA/Intel）→ 进入供应商名录', color: t.primary },
    { title: 'OEM采购 → 选组件', text: '阿里/字节/腾讯通过OEM（H3C/浪潮/宁畅）采购服务器 → OEM决定液冷组件品牌\n海悟路径：先打入OEM体系 → H3C/浪潮是首选入口', color: t.secondary },
    { title: 'OTT自主 → 定CDU', text: 'CDU/Manifold由OTT自主招标  |  冷板由GPU+OEM推荐  |  快接头兼容性优先\n海悟路径：Manifold先行切入 → CDU远期搭售', color: t.accent },
  ], 0.65);

  insightBox(s, t, '💡 核心洞察', '海悟最佳切入点在CDU招标 + Manifold送样环节。GPU冷板绑定（NVIDIA/昇腾选OEM）→ 需先过OEM认证；Manifold/CDU由OTT/OEM自主招标，无强制认证壁垒，是海悟最短平快的进入路径。', 0.5, 3.15, 9, 0.85);

  insightBox(s, t, '🎯 战略优先级', 'P0: Manifold直接送样 → H3C/浪潮/宁畅  |  P1: CDU参与OTT招标  |  P2: 冷板通过OEM认证  |  P3: 快接头国产替代窗口', 0.5, 4.15, 9, 0.7);

  ft(s, t);
  badge(s, '11', t);
}
module.exports = { createSlide };
