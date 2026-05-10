const pptxgen = require('pptxgenjs'); const theme = require('./theme');
function createSlide(pres) {
  const s = pres.addSlide(); s.background = { color: theme.primary };
  s.addText('附录', { x: 0.8, y: 1.2, w: 8.4, h: 1.2, fontSize: 60, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true });
  s.addText('数据溯源 · 方法论 · 源文件索引', { x: 0.8, y: 2.5, w: 8.4, h: 0.8, fontSize: 24, fontFace: 'Microsoft YaHei', color: 'FFFFFF' });
  s.addText('所有数据均可追溯至具体源文件，遵循五铁律三维治理体系', { x: 0.8, y: 3.5, w: 8.4, h: 0.5, fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.light });
  return s;
}
module.exports = { createSlide };
