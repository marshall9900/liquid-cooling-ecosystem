const pptxgen = require('pptxgenjs'); const theme = require('./theme');
const { addPageBadge, addTopBar, addFooter } = require('./_helpers');
function createSlide(pres) {
  const s = pres.addSlide(); s.background = { color: 'FFFFFF' }; addTopBar(s, theme);
  s.addText('能力矩阵 & 差距分析', { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 20, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  
  s.addTable([
    [{ text: '维度', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '现状', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '差距', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '动作', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '时间', options: { bold: true, fontSize: 9, fontFace: 'Arial', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } }],
    [
      ['产品','Manifold有基础','电源/内存冷板空白','研发立项(P0)','2026H2'],
      ['认证','无Intel/NVIDIA/阿里认证','最大短板','2026Q2启动Intel UQD','2028H1前'],
      ['客户','接触H3C/浪潮/宁畅','管道深度不透明','【待海悟输入】','—'],
      ['产能','【待海悟输入】','【待海悟输入】','—','—'],
      ['测试','【待海悟输入】','热性能测试台空白','2026Q3自建','2026Q3'],
      ['海外','无','无海外渠道/认证','2026准备ODM渠道','2028'],
    ].map(r => r.map(c => ({ text: c, options: { fontSize: 8, fontFace: 'Microsoft YaHei', color: theme.primary, align: 'center', valign: 'middle', border: { color: theme.light, pt: 0.5 } } })))
  ], { x: 0.5, y: 1.1, w: 9, colW: [0.8, 1.8, 1.8, 2.6, 1], rowH: 0.45, border: { color: theme.secondary, pt: 0.5 } });
  
  s.addText('🔴 最大短板: 认证（Intel UQD/NVIDIA/阿里）= 液冷准入门槛', { x: 0.5, y: 4.2, w: 9, h: 0.4, fontSize: 12, fontFace: 'Microsoft YaHei', color: 'e76f51', bold: true });
  s.addText('【待海悟输入】标记项需海悟内部确认后补全', { x: 0.5, y: 4.7, w: 9, h: 0.3, fontSize: 9, fontFace: 'Microsoft YaHei', color: theme.secondary });
  addPageBadge(s, '19', theme); addFooter(s, theme);
  return s;
}
module.exports = { createSlide };
