const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { section } = require('./_h');
function createSlide(p) {
  const s = p.addSlide();
  section(s, t, '二', '看市场', 'OTT需求全景 / GPU生态 / OEM竞争 / IDC运营方');
}
module.exports = { createSlide };
