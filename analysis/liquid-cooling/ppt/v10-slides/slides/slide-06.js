const pptxgen = require('pptxgenjs'); const theme = require('./theme');
const { addPageBadge, addTopBar, addFooter } = require('./_helpers');
function createSlide(pres) {
  const s = pres.addSlide(); s.background = { color: 'FFFFFF' }; addTopBar(s, theme);
  s.addText('GPU功耗每代翻倍 — 风冷已到极限', { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 18, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  
  // GPU power evolution data
  const gpus = [
    ['H100', '2023', '700W', '推荐冷板', theme.secondary],
    ['H200', '2024', '750W', '推荐冷板', theme.secondary],
    ['B200', '2025', '1000W', '必须冷板', theme.accent],
    ['GB200', '2025', '1200W', '整柜冷板', theme.accent],
    ['GB300', '2025H2', '1400W', '整柜冷板', theme.accent],
    ['Rubin', '2026H2', '1500W+', '冷板+浸没', 'e76f51'],
  ];
  
  // Simplified bar chart using rectangles
  gpus.forEach((gpu, i) => {
    const x = 0.5 + i * 1.55;
    const w = Math.min(parseInt(gpu[2]) / 150, 7); // scale
    const barW = w * 0.08;
    const barH = parseInt(gpu[2]) / 200;
    
    s.addText(gpu[0], { x, y: 3.8, w: 1.4, h: 0.3, fontSize: 8, fontFace: 'Arial', color: theme.primary, align: 'center', bold: true });
    s.addText(gpu[2], { x, y: 2.0 - barH/2, w: 1.4, h: 0.25, fontSize: 9, fontFace: 'Arial', color: gpu[4], align: 'center', bold: true });
    s.addShape('rect', { x: x + 0.2, y: 3.5 - barH, w: 1.0, h: barH, fill: { color: gpu[4] }, rectRadius: 0.05 });
  });
  
  // Threshold lines
  s.addShape('rect', { x: 0.5, y: 2.8, w: 9, h: 0.02, fill: { color: 'e76f51' } });
  s.addText('← 风冷极限(600W) →', { x: 3, y: 2.55, w: 4, h: 0.25, fontSize: 9, fontFace: 'Microsoft YaHei', color: 'e76f51', align: 'center' });
  
  s.addText('源: NVIDIA官网 + GPU洞察 v5 + SEC 10-K NVDA 2026-02-25', { x: 0.5, y: 4.8, w: 9, h: 0.3, fontSize: 7, fontFace: 'Microsoft YaHei', color: theme.secondary });
  addPageBadge(s, '06', theme); addFooter(s, theme);
  return s;
}
module.exports = { createSlide };
