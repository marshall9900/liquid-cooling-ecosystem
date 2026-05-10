const pptxgen = require('pptxgenjs'); const theme = require('./theme');
const { addPageBadge, addTopBar, addFooter } = require('./_helpers');
function createSlide(pres) {
  const s = pres.addSlide(); s.background = { color: 'FFFFFF' }; addTopBar(s, theme);
  s.addText('快接头 | 国产替代最强窗口', { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 20, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  
  s.addTable([
    [{ text: '维度', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '数据', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } }],
    [['ASP','UQD快接头 $50-80/个 | 普通快接头 $20-30/个'],['单柜数量','200+个(NVL72需大量接口)'],
     ['TAM(2026E)','全球 $2-4B | 中国 ¥5-10B'],['技术壁垒','中等 (密封+耐久+液体兼容性)'],
     ['垄断玩家','Staubli 72% (瑞士私企, 非公开财报)'],['国产替代','P1 储备 (成本低30%+ 政策窗口)'],
     ['监控指标','Staubli产能/交期/涨价 = 国产替代触发器'],['海悟位置','不主攻, 但须与冷板/Manifold配套销售']].map(r => r.map(c => ({ text: c, options: { fontSize: 9, fontFace: 'Microsoft YaHei', color: theme.primary, align: 'center', valign: 'middle', border: { color: theme.light, pt: 0.5 } } })))
  ], { x: 0.5, y: 1.1, w: 9, colW: [2, 7], rowH: 0.38, border: { color: theme.secondary, pt: 0.5 } });
  
  s.addText('🔴 关键窗口: Staubli垄断72%市场, 国产替代窗口1-2年。成本优势30%+国产化政策 = P1储备。', { x: 0.5, y: 4.4, w: 9, h: 0.5, fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true });
  addPageBadge(s, '30', theme); addFooter(s, theme);
  return s;
}
module.exports = { createSlide };
