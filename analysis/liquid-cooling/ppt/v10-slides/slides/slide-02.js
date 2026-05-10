const pptxgen = require('pptxgenjs');
const theme = require('./theme');
const { addPageBadge } = require('./_helpers');

function createSlide(pres) {
  const slide = pres.addSlide();
  slide.background = { color: 'FFFFFF' };
  slide.addShape('rect', { x: 0, y: 0, w: 10, h: 0.06, fill: { color: theme.accent } });
  
  slide.addText('目录', { x: 0.5, y: 0.3, w: 9, h: 0.7, fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  
  const items = [
    ['01', '执行摘要', 'PP3-5', theme.accent],
    ['02', '一看：看行业/趋势', 'PP6-8', theme.secondary],
    ['03', '二看：看市场/空间', 'PP9-13', theme.secondary],
    ['04', '三看：看竞争', 'PP14-17', theme.secondary],
    ['05', '四看：看客户/渠道', 'PP18-21', theme.secondary],
    ['06', '五看：看自己', 'PP22-24', theme.secondary],
    ['07', '三定：目标/策略/控制点', 'PP25-30', theme.primary],
    ['08', '组件深度：冷板/CDU/Manifold/快接头', 'PP31-36', theme.primary],
    ['09', '附录：数据溯源', 'PP37-38', theme.secondary],
  ];
  
  items.forEach(([num, title, pages, color], i) => {
    const y = 1.3 + i * 0.42;
    slide.addText(num, { x: 0.5, y, w: 0.6, h: 0.35, fontSize: 14, fontFace: 'Arial', color: color, bold: true });
    slide.addText(title, { x: 1.2, y, w: 5, h: 0.35, fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.primary });
    slide.addText(pages, { x: 8.5, y, w: 1, h: 0.35, fontSize: 10, fontFace: 'Arial', color: theme.secondary });
  });
  
  addPageBadge(slide, '02', theme);
  return slide;
}
module.exports = { createSlide };
