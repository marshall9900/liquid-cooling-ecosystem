let pptxgen, t;
pptxgen = require('pptxgenjs'); t = require('./theme');
function createSlide(p) {
  const s = p.addSlide();
  s.background = { color: t.primary };
  s.addShape('rect', { x: 0, y: 0, w: 10, h: 0.1, fill: { color: t.accent } });
  s.addText('谢谢', { x: 0.8, y: 1.4, w: 8.4, h: 1.2, fontSize: 56, fontFace: 'Microsoft YaHei', color: 'FFFFFF', bold: true, align: 'center' });
  s.addText('Thank You', { x: 0.8, y: 2.5, w: 8.4, h: 0.8, fontSize: 28, fontFace: 'Arial', color: t.accent, align: 'center' });
  s.addShape('rect', { x: 3.5, y: 3.4, w: 3, h: 0.04, fill: { color: t.accent } });
  s.addText('海悟科技 · 机柜级液冷战略', { x: 0.8, y: 3.6, w: 8.4, h: 0.5, fontSize: 14, fontFace: 'Microsoft YaHei', color: t.light, align: 'center' });
  s.addShape('rect', { x: 0, y: 5.5, w: 10, h: 0.08, fill: { color: t.accent } });
  s.addText('51', { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 10, fontFace: 'Arial', color: t.accent, bold: true, align: 'center', valign: 'middle' });
  s.addText('海悟科技 | 机柜级液冷战略 | 2026-05 | 机密', { x: 0.8, y: 4.8, w: 5, h: 0.3, fontSize: 9, fontFace: 'Microsoft YaHei', color: t.light });
}
module.exports = { createSlide };
