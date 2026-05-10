const pptxgen = require('pptxgenjs'); const theme = require('./theme');
const { addPageBadge, addTopBar, addFooter } = require('./_helpers');
function createSlide(pres) {
  const s = pres.addSlide(); s.background = { color: 'FFFFFF' }; addTopBar(s, theme);
  s.addText('定控制点: 风险管控矩阵', { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 20, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  
  s.addTable([
    [{ text: '风险', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '影响', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '概率', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '对策', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '触发器', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } }],
    [
      ['Intel UQD认证未通过','致命','中高','2026Q2启动申请+预留6个月缓冲','2027Q2未取得=启动B计划'],
      ['H3C送样测试失败','高','中','多客户并行+内部前置测试','送样前内部测试未通过不休'],
      ['电源冷板竞品跟进','中','中','先发优势6-12月窗口+专利布局','竞品发布后1周内评估对策'],
      ['技术路线变化(浸没加速)','高','低→中','冷板→浸没路线储备2028启动','2027年浸没渗透率超15%'],
      ['海外认证壁垒','中','高','ODM间接出货先行+OCP认证2027启动','2028年海外营收仍为0 = 重新评估'],
      ['人才竞争(液冷工程师稀缺)','中','高','与高校合建联合实验室+应届培养','核心岗位空缺>90天告警'],
    ].map(r => r.map(c => ({ text: c, options: { fontSize: 7.5, fontFace: 'Microsoft YaHei', color: theme.primary, align: 'center', valign: 'middle', border: { color: theme.light, pt: 0.5 } } })))
  ], { x: 0.5, y: 1.1, w: 9, colW: [1.6, 0.6, 0.6, 3.5, 2.7], rowH: 0.55, border: { color: theme.secondary, pt: 0.5 } });
  
  addPageBadge(s, '24', theme); addFooter(s, theme);
  return s;
}
module.exports = { createSlide };
