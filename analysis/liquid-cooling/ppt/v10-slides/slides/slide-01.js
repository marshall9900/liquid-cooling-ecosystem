const pptxgen = require('pptxgenjs');
const theme = require('./theme');
const { addFooter } = require('./_helpers');

const slideConfig = { type: 'cover', index: 1, title: '海悟液冷五看三定' };

function createSlide(pres) {
  const slide = pres.addSlide();
  slide.background = { color: theme.primary };
  
  // Top accent line
  slide.addShape('rect', { x: 0, y: 0, w: 10, h: 0.1, fill: { color: theme.accent } });
  
  // Main title
  slide.addText('海悟科技\n机柜级液冷战略', {
    x: 0.8, y: 1.2, w: 8.4, h: 1.8,
    fontSize: 48, fontFace: 'Microsoft YaHei', color: 'FFFFFF', bold: true, align: 'left'
  });
  
  // Subtitle
  slide.addText('五看三定 · v10', {
    x: 0.8, y: 3.0, w: 8.4, h: 0.6,
    fontSize: 28, fontFace: 'Microsoft YaHei', color: theme.accent, align: 'left'
  });
  
  // Bottom info bar
  slide.addShape('rect', { x: 0, y: 4.5, w: 10, h: 0.08, fill: { color: theme.accent } });
  slide.addText('海悟科技 | 数据中心热管理 | 2026年5月', {
    x: 0.8, y: 4.7, w: 8.4, h: 0.4,
    fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.light, align: 'left'
  });
  
  return slide;
}
module.exports = { createSlide, slideConfig };
