const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, bar, ft, title, bulletList, insightBox } = require('./_h');

function createSlide(p) {
  const s = p.addSlide();
  s.background = { color: 'FFFFFF' };
  bar(s, t);
  title(s, t, '快接头供应格局：Staubli垄断 + 国产替代窗口');

  bulletList(s, t, [
    {
      title: '市场规模：¥2-4B TAM，20-30%缺口',
      text: '单柜8-48对快接头 × ASP ¥200-500 × 26.5万柜 = ¥2-4B中国TAM。缺口20-30%，主因Staubli产能有限+交期长。2030E全球¥5-8B。',
      color: t.accent,
    },
    {
      title: '竞争格局：Staubli 72%份额，国产率<5%',
      text: 'Staubli(瑞士)在快接头领域绝对垄断，72%市场份额。国产玩家几乎空白（航天科工/振华在研）。国产替代空间巨大但研发周期1-2年。',
      color: t.primary,
    },
    {
      title: '技术壁垒：水密性+耐久性+低流阻三要素',
      text: '核心指标：插拔寿命>10,000次、泄漏率<10^-6 cc/s、流阻<5kPa@10L/min。密封材料选择+精密加工是核心难点。门槛中高，需1-2年研发周期。',
      color: t.secondary,
    },
  ], 0.65);

  insightBox(s, t, '🔑 海悟机会窗口',
    '快接头是Manifold/冷板的"必配组件"——掌握快接头=增强系统方案能力。\n海悟定位P1：2026Q3启动快接头技术储备+配套研发，与Manifold/冷板形成"组件组合拳"，提升OEM客户一站式采购吸引力。目标2028H1实现自有快接头送样。',
    0.5, 3.25, 9, 0.95);

  ft(s, t);
  badge(s, '40', t);
}
module.exports = { createSlide };
