const pptxgen = require('pptxgenjs'); const theme = require('./theme');
const { addPageBadge, addTopBar, addFooter } = require('./_helpers');
function createSlide(pres) {
  const s = pres.addSlide(); s.background = { color: 'FFFFFF' }; addTopBar(s, theme);
  s.addText('机柜级液冷组件BOM: NVL72单柜分解', { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 18, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  
  s.addTable([
    [{ text: '组件', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '数量', options: { bold: true, fontSize: 9, fontFace: 'Arial', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '单价(USD)', options: { bold: true, fontSize: 9, fontFace: 'Arial', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '小计(USD)', options: { bold: true, fontSize: 9, fontFace: 'Arial', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '占比', options: { bold: true, fontSize: 9, fontFace: 'Arial', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '技术壁垒', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '海悟机会', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } }],
    [
      ['GPU冷板','72','$200-400','$14.4-28.8K','30%','GPU厂家标准定','P1: 认证后主力(Intel UQD)'],
      ['CPU冷板','18-36','$80-150','$1.4-5.4K','5%','Intel/OCP标准','P1: 认证后主力(2028)'],
      ['内存冷板','72','$30-50','$2.2-3.6K','4%','Gen6 SSD液冷趋势','P0: 蓝海差异化(2027)'],
      ['电源冷板','36+','$50-100','$1.8-3.6K','4%','供应商空白→蓝海','P0: 蓝海爆量(2027)'],
      ['快接头','200+','$20-80','$4-16K','16%','Staubli垄断72%','P1: 国产替代窗口'],
      ['CDU','1-2','$15-30K','$15-60K','20%','技术壁垒低→规模化','P2: 远期系统级'],
      ['Manifold','8-16','$500-1.5K','$4-24K','8%','技术壁垒低','P0: 先行出量(2026)'],
      ['管路/安装/其他','—','—','$8-12K','13%','—','跟踪'],
    ].map(r => r.map((c,i) => ({ text: c, options: { fontSize: 7.5, fontFace: i===0?'Microsoft YaHei':'Arial', color: theme.primary, align: 'center', valign: 'middle', border: { color: theme.light, pt: 0.5 } } })))
  ], { x: 0.5, y: 1.0, w: 9, colW: [1.1, 0.5, 1.1, 1.1, 0.5, 1.5, 2.2], rowH: 0.3, border: { color: theme.secondary, pt: 0.5 } });
  
  s.addText('单柜液冷组件总额: ~$50-100K | 2026E 液冷组件TAM $17-22B(全球)', { x: 0.5, y: 3.8, w: 9, h: 0.4, fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true });
  s.addText('海悟优先级: Manifold(低壁垒出量)→电源冷板+内存冷板(蓝海差异化)→CPU冷板(认证主力)→CDU+快接头(远期)', { x: 0.5, y: 4.3, w: 9, h: 0.4, fontSize: 10, fontFace: 'Microsoft YaHei', color: theme.primary });
  s.addText('源: 架构图参考-液冷PPT配套.md + cooling/ + 五看三定v5 Component TAM', { x: 0.5, y: 5.1, w: 9, h: 0.2, fontSize: 7, fontFace: 'Microsoft YaHei', color: theme.secondary });
  addPageBadge(s, '27', theme); addFooter(s, theme);
  return s;
}
module.exports = { createSlide };
