let pptxgen, t, section;
pptxgen = require('pptxgenjs'); t = require('./theme'); ({section} = require('./_h'));
function createSlide(p) {
  const s = p.addSlide();
  section(s, t, '▸', '三定', '定目标 · 定策略 · 定节奏');
  s.addText('43', { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 10, fontFace: 'Arial', color: t.accent, bold: true, align: 'center', valign: 'middle' });
}
module.exports = { createSlide };
