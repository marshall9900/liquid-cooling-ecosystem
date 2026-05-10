const pptxgen = require('pptxgenjs');
const theme = require('./theme');
const { addPageBadge, addTopBar } = require('./_helpers');

function createSlide(pres) {
  const slide = pres.addSlide();
  slide.background = { color: 'FFFFFF' };
  addTopBar(slide, theme);
  
  slide.addText('执行摘要：一句话结论', { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 22, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  
  // Big statement
  slide.addText('液冷不是趋势问题，是速度问题。', {
    x: 0.5, y: 1.1, w: 9, h: 0.8,
    fontSize: 24, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true
  });
  
  const boxes = [
    { title: '电源冷板蓝海 🔴P0', desc: '供应商空白\n2026E ¥50M → 2028E ¥5B SAM', x: 0.5, color: '00b4d8' },
    { title: 'Manifold先行 🟠P0', desc: 'H3C/浪潮送样\n快接头敲门→CDU协同', x: 3.7, color: '0077b6' },
    { title: '海外双线独立 🟡P1', desc: '国内线: ¥50M→¥1B(2030)\n海外线: ¥0→¥200M(2030)', x: 6.9, color: '03045e' },
  ];
  
  boxes.forEach(b => {
    slide.addShape('roundRect', { x: b.x, y: 2.2, w: 2.8, h: 2.0, fill: { color: b.color }, rectRadius: 0.15 });
    slide.addText(b.title, { x: b.x+0.15, y: 2.35, w: 2.5, h: 0.5, fontSize: 14, fontFace: 'Microsoft YaHei', color: 'FFFFFF', bold: true });
    slide.addText(b.desc, { x: b.x+0.15, y: 2.85, w: 2.5, h: 1.2, fontSize: 10, fontFace: 'Microsoft YaHei', color: 'FFFFFF' });
  });
  
  slide.addText('数据溯源：基于GPU/Supernode/OEM/OTT/IDC/Cooling十维分析，全部含溯源链', {
    x: 0.5, y: 4.5, w: 9, h: 0.5, fontSize: 9, fontFace: 'Microsoft YaHei', color: theme.secondary
  });
  
  addPageBadge(slide, '03', theme);
  return slide;
}
module.exports = { createSlide };
