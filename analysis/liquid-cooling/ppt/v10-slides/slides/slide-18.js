const pptxgen = require('pptxgenjs'); const theme = require('./theme');
function createSlide(pres) {
  const s = pres.addSlide(); s.background = { color: theme.primary };
  s.addText('五看', { x: 0.8, y: 1.2, w: 8.4, h: 1.2, fontSize: 60, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true });
  s.addText('看自己', { x: 0.8, y: 2.5, w: 8.4, h: 0.8, fontSize: 32, fontFace: 'Microsoft YaHei', color: 'FFFFFF' });
  s.addText('能力矩阵 × 差距分析 × 待海悟输入项', { x: 0.8, y: 3.5, w: 8.4, h: 0.5, fontSize: 14, fontFace: 'Microsoft YaHei', color: theme.light });
  return s;
}
module.exports = { createSlide };
