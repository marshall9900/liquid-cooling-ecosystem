const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { section } = require('./_h');

function createSlide(p) {
  const s = p.addSlide();
  section(s, t, '二', '看市场', 'GPU与OEM生态');
  return s;
}
module.exports = { createSlide };
