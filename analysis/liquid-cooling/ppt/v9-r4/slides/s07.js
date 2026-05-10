const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { sectionSlide } = require('./_h');
function createSlide(pr) { const s = pr.addSlide();   sectionSlide(s, "二看 ★", "看市场：需求侧全景", "OTT × GPU × OEM × IDC运营方 四维需求拆解"); }
module.exports = { createSlide };
