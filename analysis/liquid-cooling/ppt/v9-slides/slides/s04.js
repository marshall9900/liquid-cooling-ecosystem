const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { section } = require('./_h');
function createSlide(p) {
  const s = p.addSlide();
  section(s, t, '一', '看宏观', '全球AI算力趋势 / 中国AIDC建设 / 政策与PUE铁拳');
}
module.exports = { createSlide };
