const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { sectionSlide } = require('./_h');
function createSlide(pr) { const s = pr.addSlide();   sectionSlide(s, "三看", "看竞争+产业链", "全球液冷组件供应商全景 · 竞争差距 · 供应链结构"); }
module.exports = { createSlide };
