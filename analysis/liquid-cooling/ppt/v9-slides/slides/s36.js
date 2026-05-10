const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { section } = require('./_h');

function createSlide(p) {
  const s = p.addSlide();
  section(s, t, '五', '看供应', '供应链与产能');
  return s;
}
module.exports = { createSlide };
