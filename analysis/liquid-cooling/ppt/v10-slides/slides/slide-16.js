const pptxgen = require('pptxgenjs'); const theme = require('./theme');
const { addPageBadge, addTopBar, addFooter } = require('./_helpers');
function createSlide(pres) {
  const s = pres.addSlide(); s.background = { color: 'FFFFFF' }; addTopBar(s, theme);
  s.addText('客户/渠道优先级矩阵', { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 20, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  
  s.addTable([
    [{ text: '优先级', options: { bold: true, fontSize: 9, fontFace: 'Arial', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center', valign: 'middle' } },
     { text: '客户', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center', valign: 'middle' } },
     { text: '切入点', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center', valign: 'middle' } },
     { text: '2026目标(¥)', options: { bold: true, fontSize: 9, fontFace: 'Arial', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center', valign: 'middle' } },
     { text: '开放性', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center', valign: 'middle' } },
     { text: '进度', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center', valign: 'middle' } }],
    [['🔴P0','H3C(新华三)','Manifold送样→小批量','¥25M','较高','待送样'],
     ['🔴P0','浪潮信息','Manifold送样→测试','¥15M','中','待送样'],
     ['🟠P1','宁畅信息','Manifold送样','¥10M','高','待送样'],
     ['🟠P1','华勤技术','ODM渠道','¥5M','中','待接触'],
     ['🟠P1','超聚变','需华为认证','—','低','未启动'],
     ['🟡P2','Dell(海外)','远期(双认证)','—','低(认证)','未启动'],
     ['🟡P2','Supermicro(海外)','远期','—','中','跟踪']]
    .map(r => r.map(c => ({ text: c, options: { fontSize: 8, fontFace: 'Microsoft YaHei', color: theme.primary, align: 'center', valign: 'middle', border: { color: theme.light, pt: 0.5 } } })))
  ], { x: 0.5, y: 1.1, w: 9, colW: [0.8, 1.5, 2, 1.2, 1, 1.5], rowH: 0.32, border: { color: theme.secondary, pt: 0.5 } });
  
  s.addText('间接通道: 通过H3C/秦淮数据 → 阿里/字节 (H3C为阿里+字节核心OEM伙伴)', { x: 0.5, y: 3.7, w: 9, h: 0.4, fontSize: 10, fontFace: 'Microsoft YaHei', color: theme.accent });
  s.addText('2026核心任务: H3C+浪潮 Manifold送样测试 → 建立供应商关系 → 借H3C项目接触阿里/字节液冷团队', { x: 0.5, y: 4.2, w: 9, h: 0.5, fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  s.addText('源: oem/2026-05-09-oem-server-insight.md + decision/2026-05-09-decision-chain.md', { x: 0.5, y: 5.1, w: 9, h: 0.2, fontSize: 7, fontFace: 'Microsoft YaHei', color: theme.secondary });
  addPageBadge(s, '16', theme); addFooter(s, theme);
  return s;
}
module.exports = { createSlide };
