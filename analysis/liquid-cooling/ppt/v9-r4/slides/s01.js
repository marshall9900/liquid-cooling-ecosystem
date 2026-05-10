const p = require('pptxgenjs'); const t = require('./theme');
function createSlide(pr) {
  const s = pr.addSlide();
  s.background = { color: t.primary };
  s.addShape('rect', { x: 0, y: 0, w: 10, h: 0.1, fill: { color: t.highlight } });
  s.addText('海悟科技\n机柜级液冷战略洞察', { x: 0.8, y: 1.2, w: 8.4, h: 1.8, fontSize: 46, fontFace: 'Microsoft YaHei', color: 'FFFFFF', bold: true });
  s.addText('基于华为五看三定方法论 · 聚焦液冷组件\n冷板 · Manifold · CDU · 快接头', { x: 0.8, y: 3.0, w: 8.4, h: 0.8, fontSize: 18, fontFace: 'Microsoft YaHei', color: t.accent });
  s.addShape('rect', { x: 0, y: 4.6, w: 10, h: 0.06, fill: { color: t.highlight } });
  s.addText('海悟科技 | 数据中心热管理 | 2026年5月 | 机密', { x: 0.8, y: 4.8, w: 8.4, h: 0.4, fontSize: 12, fontFace: 'Microsoft YaHei', color: 'EEECE1' });
  s.addNotes('海悟科技 机柜级液冷战略洞察 v9 (R4)\n基于华为五看三定方法论\n2026年5月\n全PPT数据来源见各页备注——所有引用指向sources/原始文件');
}
module.exports = { createSlide };
