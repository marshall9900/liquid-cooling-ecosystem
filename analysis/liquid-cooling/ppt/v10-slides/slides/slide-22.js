const pptxgen = require('pptxgenjs'); const theme = require('./theme');
const { addPageBadge, addTopBar, addFooter } = require('./_helpers');
function createSlide(pres) {
  const s = pres.addSlide(); s.background = { color: 'FFFFFF' }; addTopBar(s, theme);
  s.addText('定目标: 国内线营收路线', { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 20, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  
  s.addTable([
    [{ text: '年份', options: { bold: true, fontSize: 10, fontFace: 'Arial', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '营收(¥)', options: { bold: true, fontSize: 10, fontFace: 'Arial', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '核心产品', options: { bold: true, fontSize: 10, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '关键里程碑', options: { bold: true, fontSize: 10, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '风险', options: { bold: true, fontSize: 10, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } }],
    [
      ['2026','¥50M','Manifold','H3C/浪潮送样测试→小批量','送样延期'],
      ['2027','¥300M','Manifold+电源冷板+内存冷板','蓝海爆量, 建立差异化品牌','竞品跟进'],
      ['2028','¥400M','+CPU冷板+快接头','Intel UQD认证通过, 进入头部OEM','认证未通过'],
      ['2030','¥1.0B','全组件+CDU+运维','全栈液冷组件供应商, 国内份额3%','技术路线变化'],
    ].map(r => r.map(c => ({ text: c, options: { fontSize: 9, fontFace: 'Microsoft YaHei', color: theme.primary, align: 'center', valign: 'middle', border: { color: theme.light, pt: 0.5 } } })))
  ], { x: 0.5, y: 1.1, w: 9, colW: [0.8, 1.2, 2, 3, 2], rowH: 0.55, border: { color: theme.secondary, pt: 0.5 } });
  
  addPageBadge(s, '22', theme); addFooter(s, theme);
  return s;
}
module.exports = { createSlide };
