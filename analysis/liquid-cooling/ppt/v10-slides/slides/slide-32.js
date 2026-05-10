const pptxgen = require('pptxgenjs'); const theme = require('./theme');
const { addPageBadge, addTopBar, addFooter } = require('./_helpers');
function createSlide(pres) {
  const s = pres.addSlide(); s.background = { color: 'FFFFFF' }; addTopBar(s, theme);
  s.addText('组件优先级矩阵: 海悟进攻路线', { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 20, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  
  s.addTable([
    [{ text: '组件', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '优先级', options: { bold: true, fontSize: 9, fontFace: 'Arial', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: 'TAM 2026E(¥B)', options: { bold: true, fontSize: 9, fontFace: 'Arial', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '技术壁垒', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '竞争烈度', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '差异化空间', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '海悟策略', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '启动时间', options: { bold: true, fontSize: 9, fontFace: 'Arial', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } }],
    [
      ['Manifold','P0','3-5','低','中','小(降本)','先行出量→建立关系','2026Q1'],
      ['电源冷板','P0','1-3','中','低(空白)','大(竞品无)','蓝海差异化爆量','2026Q3'],
      ['内存冷板','P0','1-3','中','低(空白)','大(竞品少)','蓝海差异化','2026Q4'],
      ['CPU冷板','P1','12-18','高(认证)','高','中(认证壁垒)','认证后主力','2027H2'],
      ['快接头(国产)','P1','5-10','中','垄断(1家)','高(国产替代)','配套销售','2027'],
      ['CDU','P2','8-12','低','极高','小','远期系统打包','2028'],
      ['GPU冷板','P2','12-18','极高(认证)','高','小(NVIDIA锁)','认证后跟进','2028+'],
    ].map(r => r.map(c => ({ text: c, options: { fontSize: 7.5, fontFace: 'Microsoft YaHei', color: theme.primary, align: 'center', valign: 'middle', border: { color: theme.light, pt: 0.5 } } })))
  ], { x: 0.5, y: 1.1, w: 9, colW: [1.1, 0.6, 1.1, 1.1, 1, 1.2, 1.7, 1], rowH: 0.35, border: { color: theme.secondary, pt: 0.5 } });
  
  s.addText('⚡ 2026核心动作: ① Manifold送样H3C/浪潮(¥50M)  ② 电源冷板研发立项(2027蓝海爆量¥300M)', { x: 0.5, y: 4.2, w: 9, h: 0.4, fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true });
  addPageBadge(s, '32', theme); addFooter(s, theme);
  return s;
}
module.exports = { createSlide };
