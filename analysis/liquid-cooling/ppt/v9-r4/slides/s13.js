const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { sectionSlide } = require('./_h');
function createSlide(pr) { const s = pr.addSlide();   sectionSlide(s, "二看★", "看市场：GPU芯片", "液冷需求载体 · OEM伙伴映射"); }
module.exports = { createSlide };
