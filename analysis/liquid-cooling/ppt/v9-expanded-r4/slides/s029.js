const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, topBar, footer, title, bulletList, insight, source } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, '平头哥+昆仑芯+其他GPU-液冷机会对比');
  bulletList(s, [
    { title: '① 平头哥(阿里)', text: '60万卡→全液冷→阿里招标。海悟P1:CDU/Manifold/冷板→通过H3C+思泉→需阿里认证', color: t.primary },
    { title: '② 昆仑芯(百度)', text: '20万卡→350W→风冷为主。昆仑芯R300冷板→百度认证→海悟P2(需认证长周期)', color: t.primary },
    { title: '③ 沐曦/景嘉微/摩尔/壁仞', text: '出货<10万/家→风冷为主→液冷需求小→海悟P3(非主力远期跟踪)', color: t.secondary },
    { title: '④ GPU策略建议', text: '聚焦昇腾(P1)+寒武纪(P0)+海光(P1)+平头哥(P1)=4家T1 GPU→P3其余', color: t.highlight }
  ]);
  insight(s, '4家T1 GPU合计340万卡/年 聚焦P0/P1 GPU = 液冷采购¥2.5-5.2B');
  source(s, 'sources/GPU对比表格-精确修正.csv+sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-haiguang-dcu-deep-compute-series.md)');
  badge(s, '29');
}
module.exports = { createSlide };
