const pptxgen = require('pptxgenjs'); const theme = require('./theme');
function createSlide(pres) {
  const s = pres.addSlide(); s.background = { color: theme.primary };
  s.addText('四看', { x: 0.8, y: 1.2, w: 8.4, h: 1.2, fontSize: 60, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true });
  s.addText('看客户 / 渠道', { x: 0.8, y: 2.5, w: 8.4, h: 0.8, fontSize: 32, fontFace: 'Microsoft YaHei', color: 'FFFFFF' });
  s.addText('GPU → OTT → OEM → 海悟 四级决策链', { x: 0.8, y: 3.5, w: 8.4, h: 0.5, fontSize: 14, fontFace: 'Microsoft YaHei', color: theme.light });
  return s;
}
module.exports = { createSlide };
