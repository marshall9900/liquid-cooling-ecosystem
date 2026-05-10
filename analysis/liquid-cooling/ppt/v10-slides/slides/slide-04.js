const pptxgen = require('pptxgenjs');
const theme = require('./theme');
const { addPageBadge, addTopBar } = require('./_helpers');

function createSlide(pres) {
  const slide = pres.addSlide();
  slide.background = { color: 'FFFFFF' };
  addTopBar(slide, theme);
  slide.addText('营收路线图：双线驱动', { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 20, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  
  // Domestic
  slide.addText('国内线 (¥)', { x: 0.5, y: 1.1, w: 4, h: 0.4, fontSize: 14, fontFace: 'Microsoft YaHei', color: theme.secondary, bold: true });
  const domestic = [
    ['2026', '¥50M', 'Manifold批量→H3C/浪潮/宁畅'],
    ['2027', '¥300M', '+电源冷板+内存冷板蓝海爆量'],
    ['2028', '¥400M', '+CPU冷板+快接头(认证通过)'],
    ['2030', '¥1.0B', '全组件+系统级(含CDU)+运维'],
  ];
  slide.addTable([
    [{ text: '年', options: { bold: true, fontSize: 9, fontFace: 'Arial', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '营收', options: { bold: true, fontSize: 9, fontFace: 'Arial', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '里程碑', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } }],
    ...domestic.map(r => r.map(c => ({ text: c, options: { fontSize: 8, fontFace: 'Microsoft YaHei', color: theme.primary, align: 'center', valign: 'middle', border: { color: theme.light, pt: 0.5 } } })))
  ], { x: 0.5, y: 1.5, w: 4, colW: [0.6, 1, 2.4], rowH: 0.3, border: { color: theme.secondary, pt: 0.5 } });
  
  // Overseas
  slide.addText('海外线 (¥)', { x: 5.2, y: 1.1, w: 4, h: 0.4, fontSize: 14, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true });
  const overseas = [
    ['2026-27', '¥0', '通过ODM间接出货(华勤等)'],
    ['2028', '¥100M', 'OEM认证取得+海外DC项目'],
    ['2030', '¥200M', '自有海外渠道'],
  ];
  slide.addTable([
    [{ text: '年', options: { bold: true, fontSize: 9, fontFace: 'Arial', fill: { color: theme.accent }, color: 'FFFFFF', align: 'center' } },
     { text: '营收', options: { bold: true, fontSize: 9, fontFace: 'Arial', fill: { color: theme.accent }, color: 'FFFFFF', align: 'center' } },
     { text: '里程碑', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.accent }, color: 'FFFFFF', align: 'center' } }],
    ...overseas.map(r => r.map(c => ({ text: c, options: { fontSize: 8, fontFace: 'Microsoft YaHei', color: theme.primary, align: 'center', valign: 'middle', border: { color: theme.light, pt: 0.5 } } })))
  ], { x: 5.2, y: 1.5, w: 4.3, colW: [0.7, 1, 2.6], rowH: 0.3, border: { color: theme.accent, pt: 0.5 } });
  
  // Strategy
  slide.addText('进入策略', { x: 0.5, y: 3.2, w: 4, h: 0.3, fontSize: 14, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  const arrows = [
    '① Manifold先行（低门槛出量）→建立客户信任',
    '② 电源冷板+内存冷板（蓝海爆量）→差异化',
    '③ CPU冷板（认证后主力）→Intel/NVIDIA认证',
    '④ CDU+快接头（远期系统级）→全栈能力',
    '⑤ 海外 ODM→OEM认证→自有渠道',
  ];
  arrows.forEach((a, i) => {
    slide.addText(a, { x: 0.5, y: 3.6 + i*0.3, w: 9, h: 0.25, fontSize: 9, fontFace: 'Microsoft YaHei', color: theme.primary });
  });
  
  addPageBadge(slide, '04', theme);
  return slide;
}
module.exports = { createSlide };
