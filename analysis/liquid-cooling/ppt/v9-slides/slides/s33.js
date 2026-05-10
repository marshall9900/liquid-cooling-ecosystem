let pptxgen, t;
pptxgen = require('pptxgenjs'); t = require('./theme');
const { badge, bar, ft, title, bulletList } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  bar(s, t);
  title(s, t, '液冷组件供需状态');

  bulletList(s, t, [
    {
      title: 'GPU冷板 — 供不应求',
      text:  '需求爆发(CAGR>60%)，供给由CoolIT/AVC双寡头主导(合计~65%)。NVIDIA认证周期12-18月 → 新增产能受限。国产缺认证 → 供给缺口持续至2028。国内价格溢价30-50%。',
      color: t.primary
    },
    {
      title: 'CDU — 供需平衡，同质化竞争',
      text:  '8+厂商充分竞争(英维克/Vertiv/曙光/高澜等)，供给充足。价格战已开启，ASP年降5-10%。差异化方向：智能化(变频效率)/系统集成。',
      color: t.secondary
    },
    {
      title: 'Manifold — 短期偏紧，2027缓解',
      text:  '液冷机柜增速(>50%) >> 产能扩张速度 → 2026-27短期偏紧。壁垒低 → 新进入者快速扩产(英维克/高澜/同飞/申菱均已布局)。海悟2026送样→2027量产窗口恰好。',
      color: t.accent
    },
    {
      title: '快接头 — Staubli垄断，供给不足',
      text:  'Staubli占72%份额，交期12-16周(延长中)。产能受限+液冷需求爆发 → 供需矛盾尖锐。国产替代(成本低30%+)是必然趋势，但密封/耐久技术需突破(2-3年窗口)。',
      color: '0077b6'
    }
  ], 0.65);

  ft(s, t);
  badge(s, '33', t);
}

module.exports = { createSlide };
