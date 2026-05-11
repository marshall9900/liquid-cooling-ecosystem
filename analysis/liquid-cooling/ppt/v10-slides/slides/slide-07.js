const pptxgen = require('pptxgenjs'); const theme = require('./theme');
const { addPageBadge, addTopBar, addFooter } = require('./_helpers');
function createSlide(pres) {
  const s = pres.addSlide(); s.background = { color: 'FFFFFF' }; addTopBar(s, theme);
  s.addText('全球OTT AI Capex 持续暴涨', { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 18, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  
  const data = [
    ['Microsoft', '$65B', '$80B', '+23%', theme.secondary],
    ['Google', '$60B', '$75B', '+25%', theme.secondary],
    ['Amazon', '$75B', '$100B', '+33%', theme.secondary],
    ['Meta', '$40B', '$65B', '+63%', theme.secondary],
    ['字节跳动', '¥200B(估)', '¥200-250B', '+10-25%', theme.accent],
    ['阿里云', '¥180B(估)', '¥180-220B', '+0-22%', theme.accent],
    ['腾讯', '¥120B(估)', '¥120-150B', '+0-25%', theme.accent],
    ['百度', '¥80B(估)', '¥80-100B', '+0-25%', theme.accent],
  ];
  
  s.addTable([
    [{ text: '公司', options: { bold: true, fontSize: 10, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center', valign: 'middle' } },
     { text: '2025E', options: { bold: true, fontSize: 9, fontFace: 'Arial', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center', valign: 'middle' } },
     { text: '2026E', options: { bold: true, fontSize: 9, fontFace: 'Arial', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center', valign: 'middle' } },
     { text: 'YoY', options: { bold: true, fontSize: 9, fontFace: 'Arial', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center', valign: 'middle' } }],
    ...data.map(r => r.slice(0,4).map((c,i) => ({ text: c, options: { fontSize: 9, fontFace: i===0?'Microsoft YaHei':'Arial', color: theme.primary, align: 'center', valign: 'middle', bold: i===0, border: { color: theme.light, pt: 0.5 } } })))
  ], { x: 0.5, y: 1.0, w: 9, colW: [2, 2, 2, 1.5], rowH: 0.3, border: { color: theme.secondary, pt: 0.5 } });
  
  s.addText('全球OTT AI Capex 2026E: ~$362B → 液冷采购额 $29-36B (8-10%)', { x: 0.5, y: 3.8, w: 9, h: 0.4, fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true });
  s.addText('🔥 MS承诺2年AI基础设施翻倍 | Anthropic签约SpaceX Colossus 1 DC | Google TPU8全栈AI | AI推理转向CPU (Arista)', { x: 0.5, y: 4.2, w: 9, h: 0.25, fontSize: 8, fontFace: 'Microsoft YaHei', color: 'e76f51' });
  s.addText('源: SEC 10-Q + NetworkWorld/ServeTheHome/Next Platform (2026-05-07~11)', { x: 0.5, y: 4.8, w: 9, h: 0.3, fontSize: 7, fontFace: 'Microsoft YaHei', color: theme.secondary });
  addPageBadge(s, '07', theme); addFooter(s, theme);
  return s;
}
module.exports = { createSlide };
