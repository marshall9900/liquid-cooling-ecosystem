const pptxgen = require('pptxgenjs'); const theme = require('./theme');
const { addPageBadge, addTopBar, addFooter } = require('./_helpers');
function createSlide(pres) {
  const s = pres.addSlide(); s.background = { color: 'FFFFFF' }; addTopBar(s, theme);
  s.addText('快接头 | 2030E全球$5B, 国产替代最强窗口', { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 18, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  
  s.addTable([
    [{ text: '维度', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '数据', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } }],
    [['ASP','UQD $70/对 (国信证券NVL72基准) | 普通 $20-30/个'],
     ['单柜数量','126对 (NVL72) | 200+个 (含交换机)'],
     ['TAM(2030E)','全球 $5.0B (CAGR 39.8%) | 中国 ¥85B'],
     ['垄断玩家','Danfoss/Staubli/Parker/CPC Top5占58%'],
     ['国产追赶','🇨🇳中航光电/川环科技(300547)/溯联股份(301397 UQD)'],
     ['技术壁垒','密封寿命10万次+ | 液体兼容性 | 零泄漏'],
     ['海悟位置','P1储备 (不做主力, 但需与Manifold/冷板配套销售)']].map(r => r.map(c => ({ text: c, options: { fontSize: 9, fontFace: 'Microsoft YaHei', color: theme.primary, align: 'center', valign: 'middle', border: { color: theme.light, pt: 0.5 } } })))
  ], { x: 0.5, y: 1.0, w: 9, colW: [2, 7], rowH: 0.42, border: { color: theme.secondary, pt: 0.5 } });
  
  s.addText('源: 国信证券(2026-04-14) | 国产替代窗口2-3年, 成本优势30%+国产化政策驱动', { x: 0.5, y: 4.2, w: 9, h: 0.4, fontSize: 9, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true });
  addPageBadge(s, '30', theme); addFooter(s, theme);
  return s;
}
module.exports = { createSlide };
