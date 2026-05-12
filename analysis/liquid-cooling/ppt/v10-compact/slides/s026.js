const pptxgen = require('pptxgenjs');
const { sectionSlide } = require('./_h');
function createSlide(p) { const s = p.addSlide();
  sectionSlide(s, '二看', '看市场：IDC运营方', 'CSP运营商·IDC运营方·采购特征与海悟切入');
}
module.exports = { createSlide };
