const pptxgen = require('pptxgenjs'); const theme = require('./theme');
const { addPageBadge, addTopBar, addFooter } = require('./_helpers');
function createSlide(pres) {
  const s = pres.addSlide(); s.background = { color: 'FFFFFF' }; addTopBar(s, theme);
  s.addText('三定小结: 时间路线图', { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 20, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  
  const milestones = [
    ['2026H1', 'Manifold送样H3C/浪潮', 'P0', theme.accent],
    ['2026H2', '电源冷板研发立项+热测试台', 'P0', theme.accent],
    ['2027', 'Manifold批量+电源冷板蓝海爆量', 'P0', theme.accent],
    ['2027Q2', 'Intel UQD认证启动(B计划触发前)', 'P0', 'e76f51'],
    ['2028H1', 'Intel UQD认证通过+CPU冷板主力', 'P1', theme.secondary],
    ['2028-30', 'CDU+快接头+海外ODM→认证→自有', 'P2', theme.secondary],
  ];
  
  milestones.forEach(([time, milestone, pri, color], i) => {
    const x = 0.5 + (i < 3 ? i * 3.1 : (i-3) * 3.1);
    const y = i < 3 ? 1.2 : 3.5;
    const yi = i < 3 ? i : i - 3;
    const yy = y + yi * 1.2;
    
    s.addShape('roundRect', { x, y: yy, w: 2.8, h: 1.0, fill: { color }, rectRadius: 0.1 });
    s.addText(time, { x: x+0.1, y: yy+0.05, w: 2.6, h: 0.3, fontSize: 12, fontFace: 'Arial', color: 'FFFFFF', bold: true });
    s.addText(milestone, { x: x+0.1, y: yy+0.4, w: 2.6, h: 0.5, fontSize: 9, fontFace: 'Microsoft YaHei', color: 'FFFFFF' });
    s.addText(pri, { x: x+1.8, y: yy+0.05, w: 0.8, h: 0.3, fontSize: 9, fontFace: 'Arial', color: 'FFFFFF', bold: true });
  });
  
  addPageBadge(s, '25', theme); addFooter(s, theme);
  return s;
}
module.exports = { createSlide };
