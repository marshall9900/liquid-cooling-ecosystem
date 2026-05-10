const pptxgen = require('pptxgenjs'); const theme = require('./theme');
const { addPageBadge, addTopBar, addFooter } = require('./_helpers');
function createSlide(pres) {
  const s = pres.addSlide(); s.background = { color: 'FFFFFF' }; addTopBar(s, theme);
  s.addText('定策略: 五步进攻路线', { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 20, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  
  const strategies = [
    { n:'①', t:'Manifold破冰', d:'低门槛送样H3C/浪潮/宁畅 → 建立供应商关系 → 证明交付能力', p:'P0', color: theme.accent },
    { n:'②', t:'蓝海差异化', d:'电源冷板+内存冷板 = 竞品均未覆盖 → 差异化标签 → 溢价空间', p:'P0', color: theme.accent },
    { n:'③', t:'认证突围', d:'Intel UQD(2028H1前) → NVIDIA认证 → 阿里认证 = 准入三证', p:'P0', color: 'e76f51' },
    { n:'④', t:'国产替代', d:'快接头国产化(成本低30%) → 借国产GPU/政策窗口 → P1储备', p:'P1', color: theme.secondary },
    { n:'⑤', t:'海外双线', d:'ODM(华勤/富士康)间接出货 → OEM认证取得 → 自有渠道', p:'P2', color: theme.secondary },
  ];
  
  strategies.forEach((st, i) => {
    const y = 1.1 + i * 0.85;
    s.addShape('roundRect', { x: 0.5, y, w: 9, h: 0.75, fill: { color: i%2===0?'f0f7ff':'FFFFFF' }, rectRadius: 0.08 });
    s.addShape('oval', { x: 0.6, y: y+0.1, w: 0.5, h: 0.5, fill: { color: st.color } });
    s.addText(st.n, { x: 0.6, y: y+0.1, w: 0.5, h: 0.5, fontSize: 16, fontFace: 'Arial', color: 'FFFFFF', bold: true, align: 'center', valign: 'middle' });
    s.addText(st.t, { x: 1.3, y: y+0.05, w: 2.5, h: 0.3, fontSize: 14, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
    s.addText(st.p, { x: 1.3, y: y+0.35, w: 0.6, h: 0.25, fontSize: 9, fontFace: 'Arial', color: st.color, bold: true });
    s.addText(st.d, { x: 4.0, y: y+0.05, w: 5.3, h: 0.65, fontSize: 9, fontFace: 'Microsoft YaHei', color: theme.secondary, valign: 'middle' });
  });
  
  addPageBadge(s, '23', theme); addFooter(s, theme);
  return s;
}
module.exports = { createSlide };
