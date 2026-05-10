const pptxgen = require('pptxgenjs'); const theme = require('./theme');
const { addPageBadge, addTopBar, addFooter } = require('./_helpers');
function createSlide(pres) {
  const s = pres.addSlide(); s.background = { color: 'FFFFFF' }; addTopBar(s, theme);
  s.addText('CDU | 组件最大价值但壁垒低', { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 20, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  
  s.addTable([
    [{ text: '维度', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '数据', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } }],
    [['单柜ASP','$15-30K (NVL72 配1-2台)'],['TAM(2026E)','全球 $3.5-5B | 中国 ¥8-12B'],
     ['技术壁垒','低 (泵+换热器+控制=装配集成)'],['主要玩家','Vertiv/Schneider/Delta/英维克/高澜/曙光数创'],
     ['竞争烈度','最高 (同质化严重, 价格战)'],['海悟机会','P2远期 (不想打价格战, 但系统级需有CDU能力)'],
     ['策略','Manifold/冷板建立客户关系后, 远期协同CDU系统打包']].map(r => r.map(c => ({ text: c, options: { fontSize: 9, fontFace: 'Microsoft YaHei', color: theme.primary, align: 'center', valign: 'middle', border: { color: theme.light, pt: 0.5 } } })))
  ], { x: 0.5, y: 1.1, w: 9, colW: [2, 7], rowH: 0.38, border: { color: theme.secondary, pt: 0.5 } });
  
  s.addText('⚠️ CDU技术壁垒低, 竞争最激烈。海悟不主攻, 但须储备能力以备系统级打包。', { x: 0.5, y: 4.2, w: 9, h: 0.5, fontSize: 11, fontFace: 'Microsoft YaHei', color: 'e76f51', bold: true });
  addPageBadge(s, '29', theme); addFooter(s, theme);
  return s;
}
module.exports = { createSlide };
