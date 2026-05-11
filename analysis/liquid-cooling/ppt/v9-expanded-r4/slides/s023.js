const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, topBar, footer, title, bulletList, source } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, '昇腾-OEM生态与液冷机会');
  bulletList(s, [
    { title: '① 超聚变嫡系', text: '华为昇腾核心OEM(40%)→Atlas 950 SuperPoD整柜液冷(出厂标配)→华为指定冷板→海悟机会:Manifold/CDU(非GPU绑定)', color: t.primary },
    { title: '② 开放OEM', text: '浪潮(25%)/宁畅(10%)→910B/910C/950PR出货→冷板华为指定度较低→Manifold/CDU外购→海悟直接机会', color: t.primary },
    { title: '③ 液冷趋势(全代际)', text: '910B:风冷可选(400W)→910C:冷板(600W)→950PR:Must冷板(800-1000W)→950DT:Must冷板(1000-1200W)→960:微通道(1500W+)→970:MLCP(2000W+)', color: t.primary },
    { title: '④ 海悟策略', text: '昇腾体系=半封闭(华为指定冷板)→海悟不做冷板正面竞争→Manifold/CDU突破→灵衢2.0开放生态=新入口', color: t.primary },
    { title: '⑤ 优先级', text: 'P0:Manifold(通过浪潮/宁畅/H3C)→P1:CDU(2027+)→P2:冷板(认证后)→目标:2026年Manifold送样测试', color: t.primary }
  ]);
  source(s, '华为全联接大会2025(已核实) | 华金证券昇腾950研报(2026-04-12) | 证券时报2025-09-18 | 昇腾2026出货目标120万(产能仅75万,缺口45万) | DeepSeek V4适配950PR→大厂抢购潮');
  badge(s, '23');
}
module.exports = { createSlide };
