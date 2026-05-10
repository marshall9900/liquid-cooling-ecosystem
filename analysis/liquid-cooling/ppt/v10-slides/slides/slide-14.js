const pptxgen = require('pptxgenjs'); const theme = require('./theme');
const { addPageBadge, addTopBar, addFooter } = require('./_helpers');
function createSlide(pres) {
  const s = pres.addSlide(); s.background = { color: 'FFFFFF' }; addTopBar(s, theme);
  s.addText('差异化路线：四步进阶', { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 20, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  
  const steps = [
    ['① Manifold出量', '2026', '低门槛建立客户信任', '¥50M', theme.secondary],
    ['② 蓝海爆量', '2027', '电源冷板+内存冷板差异化', '¥300M', theme.accent],
    ['③ 认证主力', '2028', 'Intel UQD+CPU冷板认证后主力', '¥400M', '0077b6'],
    ['④ 全栈系统', '2030', 'CDU+快接头+运维一体化', '¥1.0B', theme.primary],
  ];
  
  steps.forEach(([title, year, desc, revenue, color], i) => {
    const x = 0.5 + i * 2.3;
    s.addShape('roundRect', { x, y: 1.2, w: 2.1, h: 3.5, fill: { color }, rectRadius: 0.15 });
    s.addText(title, { x: x+0.1, y: 1.4, w: 1.9, h: 0.5, fontSize: 12, fontFace: 'Microsoft YaHei', color: 'FFFFFF', bold: true });
    s.addText(year, { x: x+0.1, y: 2.0, w: 1.9, h: 0.4, fontSize: 18, fontFace: 'Arial', color: 'FFFFFF', bold: true });
    s.addText(desc, { x: x+0.1, y: 2.6, w: 1.9, h: 0.6, fontSize: 9, fontFace: 'Microsoft YaHei', color: 'FFFFFF' });
    s.addText(revenue, { x: x+0.1, y: 3.5, w: 1.9, h: 0.5, fontSize: 16, fontFace: 'Arial', color: 'FFFFFF', bold: true });
    // Arrow between steps (except last)
    if (i < 3) s.addText('→', { x: x+2.15, y: 2.3, w: 0.2, h: 0.5, fontSize: 24, fontFace: 'Arial', color: theme.primary, bold: true, align: 'center' });
  });
  
  addPageBadge(s, '14', theme); addFooter(s, theme);
  return s;
}
module.exports = { createSlide };
