const pptxgen = require('pptxgenjs'); const theme = require('./theme');
function createSlide(pres) {
  const s = pres.addSlide(); s.background = { color: theme.primary };
  s.addText('一看', { x: 0.8, y: 1.2, w: 8.4, h: 1.2, fontSize: 60, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true });
  s.addText('看行业 / 趋势', { x: 0.8, y: 2.5, w: 8.4, h: 0.8, fontSize: 32, fontFace: 'Microsoft YaHei', color: 'FFFFFF' });
  s.addText('AI Capex持续暴涨 → GPU功耗翻倍 → 液冷从选配变标配', { x: 0.8, y: 3.5, w: 8.4, h: 0.5, fontSize: 14, fontFace: 'Microsoft YaHei', color: theme.light });
  return s;
}
module.exports = { createSlide };
