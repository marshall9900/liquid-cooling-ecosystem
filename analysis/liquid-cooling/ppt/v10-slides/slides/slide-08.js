const pptxgen = require('pptxgenjs'); const theme = require('./theme');
const { addPageBadge, addTopBar, addFooter } = require('./_helpers');
function createSlide(pres) {
  const s = pres.addSlide(); s.background = { color: 'FFFFFF' }; addTopBar(s, theme);
  s.addText('一看小结：液冷不是趋势问题，是速度问题', { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 18, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  
  const items = [
    ['GPU功耗', 'H100 700W → Rubin 1500W+ (5年翻倍)', '风冷物理极限~600W，液冷刚性不可逆'],
    ['AI Capex', '全球OTT $362B(2026E), 中国 ¥650B', '液冷采购额 $29-36B/年'],
    ['国产芯片', '🔥 国产165万张(41%)，华为81万颗领跑', '英伟达95%→55% — 国产供应链液冷认证窗口'],
    ['液冷机柜', '2025E ~10万架→2030E ~52万架(智算口径)', '智算AIDC内液冷渗透35%→80%，全量口径不可套用'],
    ['🔥 冷却可靠性', 'AWS US-East-1热事件宕机(2026.05.07)', '冷却恢复5h+ = DC最慢链路 → 冗余冷却=采购刚需'],
  ];
  
  items.forEach(([t, d, i], idx) => {
    const y = 1.2 + idx * 1.0;
    s.addShape('rect', { x: 0.5, y, w: 0.08, h: 0.8, fill: { color: theme.accent } });
    s.addText(t, { x: 0.8, y, w: 2, h: 0.35, fontSize: 13, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
    s.addText(d, { x: 0.8, y: y+0.35, w: 4, h: 0.25, fontSize: 10, fontFace: 'Microsoft YaHei', color: theme.secondary });
    s.addText('→ ' + i, { x: 5, y: y+0.35, w: 4.5, h: 0.25, fontSize: 10, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true });
  });
  
  addPageBadge(s, '08', theme); addFooter(s, theme);
  return s;
}
module.exports = { createSlide };
