const pptxgen = require('pptxgenjs'); const theme = require('./theme');
const { addPageBadge, addTopBar, addFooter } = require('./_helpers');
function createSlide(pres) {
  const s = pres.addSlide(); s.background = { color: 'FFFFFF' }; addTopBar(s, theme);
  s.addText('一看小结：液冷不是趋势问题，是速度问题', { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 18, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  
  const items = [
    ['GPU功耗', 'H100 700W → Rubin 1500W+ (5年翻倍)', '风冷物理极限~600W，液冷刚性不可逆'],
    ['AI Capex', '全球OTT $362B(2026E), 中国 ¥650B', '液冷采购额 $29-36B/年'],
    ['液冷渗透率', '2026年50%+新建DC必须液冷', '从选配变标配，PUE政策铁拳(1.25/1.15)'],
    ['DC建设加速', '中国6大集群, 2026E液冷机柜53万', '2030E 400万+，TAM确定性极强'],
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
