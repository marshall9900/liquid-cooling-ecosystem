const pptxgen = require('pptxgenjs'); const theme = require('./theme');
function createSlide(pres) {
  const s = pres.addSlide(); s.background = { color: theme.primary };
  s.addText('三定', { x: 0.8, y: 1.2, w: 8.4, h: 1.2, fontSize: 60, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true });
  s.addText('定目标 / 定策略 / 定控制点', { x: 0.8, y: 2.5, w: 8.4, h: 0.8, fontSize: 32, fontFace: 'Microsoft YaHei', color: 'FFFFFF' });
  return s;
}
module.exports = { createSlide };
