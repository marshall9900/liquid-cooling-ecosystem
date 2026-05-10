const pptxgen = require('pptxgenjs'); const theme = require('./theme');
const { addPageBadge, addTopBar, addFooter } = require('./_helpers');
function createSlide(pres) {
  const s = pres.addSlide(); s.background = { color: 'FFFFFF' }; addTopBar(s, theme);
  s.addText('CDU | 2030E全球$20.6B, 占比36%', { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 18, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  
  s.addTable([
    [{ text: '维度', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '数据', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } }],
    [['单柜ASP','$30K (NVL72配1台)'],['TAM(2030E)','全球 $20.6B | 中国 ¥350B'],
     ['TAM增长','2026 $4.5B → 2030 $20.6B (CAGR 46.4%)'],['分类','集中式(大规模)/分布式(小规模) × 风液/液液'],
     ['主要玩家','Vertiv/Schneider/Delta/nVent/CoolIT/台达 | 国内:英维克/曙光数创/高澜/申菱'],
     ['CDU泵','格兰富/赛莱默/穆格/威乐 主导 | 🔥飞龙HP22K已量产(国产突破)'],
     ['竞争烈度','高 (同质化, 价格战) | 壁垒: 规模+客户粘性 > 纯技术'],
     ['海悟机会','P2远期 (不主攻, 但Manifold/冷板建立关系后, 远期协同CDU系统打包)']].map(r => r.map(c => ({ text: c, options: { fontSize: 9, fontFace: 'Microsoft YaHei', color: theme.primary, align: 'center', valign: 'middle', border: { color: theme.light, pt: 0.5 } } })))
  ], { x: 0.5, y: 1.0, w: 9, colW: [2, 7], rowH: 0.4, border: { color: theme.secondary, pt: 0.5 } });
  
  s.addText('源: 国信证券(2026-04-14) | 结论: CDU技术壁垒低,竞争最激烈。不主攻,但需储备能力以备系统级打包。', { x: 0.5, y: 4.5, w: 9, h: 0.4, fontSize: 9, fontFace: 'Microsoft YaHei', color: theme.secondary });
  addPageBadge(s, '29', theme); addFooter(s, theme);
  return s;
}
module.exports = { createSlide };
