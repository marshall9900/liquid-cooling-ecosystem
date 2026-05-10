const pptxgen = require('pptxgenjs'); const theme = require('./theme');
const { addPageBadge, addTopBar, addFooter } = require('./_helpers');
function createSlide(pres) {
  const s = pres.addSlide(); s.background = { color: 'FFFFFF' }; addTopBar(s, theme);
  s.addText('GPU冷板 | 液冷组件最大赛道', { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 20, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  
  s.addText('市场空间', { x: 0.5, y: 1.0, w: 4, h: 0.4, fontSize: 14, fontFace: 'Microsoft YaHei', color: theme.secondary, bold: true });
  const marketData = [
    ['规格','H100 700W → GB200 1200W → Rubin 1500W+'],
    ['TAM(2026E)','全球 $5-8B | 中国 ¥12-18B'],
    ['ASP(CPU冷板)','$80-150/片'],
    ['ASP(GPU冷板)','$200-400/片(NVIDIA认证加成)'],
  ];
  marketData.forEach(([k,v], i) => {
    s.addText(k, { x: 0.5, y: 1.5+i*0.35, w: 1.5, h: 0.3, fontSize: 9, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
    s.addText(v, { x: 2, y: 1.5+i*0.35, w: 3, h: 0.3, fontSize: 9, fontFace: 'Microsoft YaHei', color: theme.primary });
  });
  
  s.addText('竞争格局', { x: 5.2, y: 1.0, w: 4, h: 0.4, fontSize: 14, fontFace: 'Microsoft YaHei', color: theme.secondary, bold: true });
  const compData = [
    ['CoolIT','国际龙头','NVIDIA认证','$300-350/片'],
    ['AVC(奇鋐)','国际主要','NVIDIA认证','$250-300/片'],
    ['nVent','国际','CFD认证','$450-500/片'],
    ['英维克','国内龙头','在研','¥800-1200/片'],
    ['高澜','国内','在研','¥600-1000/片'],
    ['海悟','待认证','—','—'],
  ];
  compData.forEach(([name, pos, cert, price], i) => {
    s.addText(name+(i<3?' 🔒':''), { x: 5.2, y: 1.5+i*0.3, w: 1.2, h: 0.25, fontSize: 8, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
    s.addText(pos+' | '+cert+' | '+price, { x: 6.5, y: 1.5+i*0.3, w: 3, h: 0.25, fontSize: 8, fontFace: 'Microsoft YaHei', color: theme.secondary });
  });
  
  s.addText('海悟机会: ⚠️CPU冷板需要Intel UQD认证(2028H1前), GPU冷板需NVIDIA认证(1-2年)。2026-27策略: Manifold破冰+电源冷板蓝海差异化先行。', { x: 0.5, y: 3.7, w: 9, h: 0.7, fontSize: 10, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true });
  s.addText('国际冷板市场由NVIDIA认证体系锁定，新进入者P0任务: Intel UQD认证(2026Q2启动)+NVIDIA样品测试(2027)', { x: 0.5, y: 4.5, w: 9, h: 0.5, fontSize: 9, fontFace: 'Microsoft YaHei', color: theme.secondary });
  addPageBadge(s, '28', theme); addFooter(s, theme);
  return s;
}
module.exports = { createSlide };
