const pptxgen = require('pptxgenjs'); const theme = require('./theme');
function createSlide(pres) {
  const s = pres.addSlide(); s.background = { color: theme.primary };
  s.addText('组件深度', { x: 0.8, y: 1.2, w: 8.4, h: 1.2, fontSize: 60, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true });
  s.addText('冷板 · CDU · Manifold · 快接头', { x: 0.8, y: 2.5, w: 8.4, h: 0.8, fontSize: 28, fontFace: 'Microsoft YaHei', color: 'FFFFFF' });
  s.addText('机柜级液冷四大组件拆解：市场空间 · 竞争格局 · 海悟机会', { x: 0.8, y: 3.5, w: 8.4, h: 0.5, fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.light });
  return s;
}
module.exports = { createSlide };
