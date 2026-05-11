const pptxgen = require('pptxgenjs'); const theme = require('./theme');
const { addPageBadge, addTopBar, addFooter } = require('./_helpers');
function createSlide(pres) {
  const s = pres.addSlide(); s.background = { color: 'FFFFFF' }; addTopBar(s, theme);
  s.addText('竞争格局：海悟差异化路线', { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 20, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  
  const comps = [
    ['英维克', '国内龙头', '¥1.5-2B液冷', '不做CDU正面竞争', '切蓝海组件(电源/内存冷板)'],
    ['CoolIT/AVC', '国际龙头(NVIDIA认证)', '$8B+(Vertiv)', '国内OEM渠道+成本优势', '通过H3C/浪潮切入'],
    ['Staubli', '快接头垄断72%', '非公开(私企)', '国产替代P1储备，不主攻', 'P0窗口1-2年, 成本低30%'],
    ['高澜/申菱/同飞', '国内同类', '¥0.5-2B各', 'Manifold先出量建关系', '差异化: 电源冷板蓝海'],
  ];
  
  comps.forEach(([name, pos, scale, strat, diff], i) => {
    const y = 1.1 + i * 1.0;
    s.addShape('roundRect', { x: 0.5, y, w: 9, h: 0.85, fill: { color: i%2===0?'f0f7ff':'FFFFFF' }, rectRadius: 0.1 });
    s.addText(name, { x: 0.7, y: y+0.05, w: 1.5, h: 0.3, fontSize: 13, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
    s.addText(pos + ' | ' + scale, { x: 0.7, y: y+0.35, w: 3, h: 0.25, fontSize: 9, fontFace: 'Microsoft YaHei', color: theme.secondary });
    s.addText('海悟策略: ' + strat, { x: 4, y: y+0.05, w: 2.5, h: 0.3, fontSize: 10, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true });
    s.addText('差异化: ' + diff, { x: 4, y: y+0.35, w: 5.3, h: 0.25, fontSize: 9, fontFace: 'Microsoft YaHei', color: theme.secondary });
  });
  
  s.addText('源: cooling/2026-05-09-cooling-competition-insight.md v7 + 各公司年报/SEC', { x: 0.5, y: 5.1, w: 9, h: 0.2, fontSize: 7, fontFace: 'Microsoft YaHei', color: theme.secondary });
  s.addText('🔥 新: Arista XPO集成冷板400W/模块(12.8T/模块) — 光模块冷板蓝海确认 | 气冷vs液冷长期共存 | 供应链全链短缺1-2年', { x: 0.5, y: 5.3, w: 9, h: 0.2, fontSize: 7, fontFace: 'Microsoft YaHei', color: 'e76f51', bold: true });
  addPageBadge(s, '13', theme); addFooter(s, theme);
  return s;
}
module.exports = { createSlide };
