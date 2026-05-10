const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { sectionSlide } = require('./_h');
function createSlide(pr) { const s = pr.addSlide();   sectionSlide(s, "四看", "看机会 + 看自己", "机柜级液冷组件深度拆解 · 供需缺口 · 海悟能力匹配"); }
module.exports = { createSlide };
