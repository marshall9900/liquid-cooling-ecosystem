let pptxgen, t;
pptxgen = require('pptxgenjs'); t = require('./theme');
const { section } = require('./_h');

function createSlide(p) {
  const s = p.addSlide();
  section(s, t, '四', '看机会', '技术窗口与市场切入');
}

module.exports = { createSlide };
