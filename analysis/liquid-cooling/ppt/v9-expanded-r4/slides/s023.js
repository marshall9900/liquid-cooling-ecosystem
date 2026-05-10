const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, topBar, footer, title, bulletList, source } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, '昇腾-OEM生态与液冷机会');
  bulletList(s, [
    { title: '① 超聚变嫡系', text: '华为昇腾核心OEM(40%)→Atlas 900整柜液冷→华为指定冷板→海悟机会:Manifold/CDU(非GPU绑定)', color: t.primary },
    { title: '② 开放OEM', text: '浪潮(25%)/宁畅(10%)→910B/950PR出货→冷板华为指定度较低→Manifold/CDU外购→海悟直接机会', color: t.primary },
    { title: '③ 液冷趋势', text: '910B:风冷/冷板可选→950PR:推荐冷板→950DT:冷板为主→Atlas 900:液冷整柜刚需', color: t.primary },
    { title: '④ 海悟策略', text: '昇腾体系=半封闭(华为指定冷板)→海悟不做冷板正面竞争→Manifold/CDU突破', color: t.primary },
    { title: '⑤ 优先级', text: 'P1(Manifold/CDU)→通过浪潮/宁畅→冷板P2(认证后2027+)', color: t.primary }
  ]);
  source(s, 'sources/GPU对比表格-精确修正.csv → 昇腾全系TDP/出货; sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md → 昇腾950PR 75万颗已订满; sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-gb300-liquid-cooling-domestic-breakthrough.md → 国产冷板降价25-32% 交付10-15周; 推算:Manifold=180万卡×60%(液冷)×¥2K/卡×5%=¥10M');
  badge(s, '23');
}
module.exports = { createSlide };
