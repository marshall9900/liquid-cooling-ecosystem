let pptxgen, t;
pptxgen = require('pptxgenjs'); t = require('./theme');
const { badge, bar, ft, title, bulletList, insightBox } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  bar(s, t);
  title(s, t, 'CDU详细竞品分析');

  bulletList(s, t, [
    {
      title: 'Vertiv(维谛) — 国际龙头',
      text:  '全球品牌+渠道，50-200kW CDU全系列覆盖，ASP ¥50-120万/台，份额~18%。优势：电气+冷却一体化方案，全球认证齐全。劣势：价格高、国内响应慢。',
      color: t.primary
    },
    {
      title: '英维克 — 国内龙头',
      text:  '国产化+全栈方案(冷板+CDU+Manifold)，50-150kW CDU，ASP ¥30-80万/台，份额~25%。优势：运营商客户+腾讯，OCP认证进行中。劣势：与国际品牌有品牌溢价差距。',
      color: t.secondary
    },
    {
      title: '曙光数创 — 曙光DCU配套',
      text:  '依托中科曙光DCU生态，50-120kW CDU，ASP ¥35-70万/台，份额~15%。优势：曙光DCU绑定+国资背景，沉浸式液冷经验。劣势：受限于曙光生态圈。',
      color: t.accent
    },
    {
      title: '高澜股份 — 性价比路线',
      text:  '中小规模CDU为主(30-100kW)，ASP ¥25-60万/台，份额~10%。优势：性价比高、电力电子冷却技术积累。劣势：品牌影响力弱、大功率段未覆盖。',
      color: t.secondary
    }
  ], 0.65);

  insightBox(s, t, '💡 海悟策略',
    'CDU赛道同质化严重，价格战已开启。海悟P2远期(不做CDU主力)，但必须储备CDU能力以支撑系统级打包(Manifold+冷板+CDU)。远期可通过系统集成差异化突围。',
    0.5, 3.85, 9, 0.8
  );

  ft(s, t);
  badge(s, '24', t);
}

module.exports = { createSlide };
