const pptxgen = require('pptxgenjs'); const theme = require('./theme');
const { addPageBadge, addTopBar, addFooter } = require('./_helpers');
function createSlide(pres) {
  const s = pres.addSlide(); s.background = { color: 'FFFFFF' }; addTopBar(s, theme);
  s.addText('采购决策链: GPU 定标准 > OEM 做适配 > DC 自主决策', { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 18, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  
  const chain = [
    ['GPU 芯片厂家\n(定冷板标准)', 'NVIDIA: 选OEM+认证供应商\n昇腾: 灵衢互联 一年一代翻倍\nAtlas950→960→970(2028)', '海悟 → 争取NVIDIA认证\n昇腾线需华为认证体系', theme.primary],
    ['↓', '', '', 'FFFFFF'],
    ['服务器 OEM\n(做适配采购)', 'H3C/浪潮/宁畅: NVIDIA适配\n超聚变: 华为体系\n华勤: ODM灵活', '海悟 → Manifold送样\n→ 冷板跟进 → CDU远期', theme.secondary],
    ['↓', '', '', 'FFFFFF'],
    ['OTT/IDC 运营方\n(自主决策CDU/Manifold)', '字节/阿里: CDU招标\n运营商DC: 自主采购\n海外: OCP认证通道', '海悟 → 通过秦淮/数据港\n→ OCP认证 → 海外', theme.accent],
  ];
  
  chain.forEach(([title, detail, haiwu, color], i) => {
    if (title === '↓') {
      s.addText('▼', { x: 2.5, y: 1.7 + i*1.1, w: 5, h: 0.3, fontSize: 14, fontFace: 'Arial', color: theme.secondary, align: 'center' });
      return;
    }
    const y = 1.0 + i * 1.3;
    s.addShape('roundRect', { x: 0.5, y, w: 9, h: 1.1, fill: { color: color }, rectRadius: 0.1 });
    s.addText(title, { x: 0.7, y: y+0.1, w: 2.5, h: 0.9, fontSize: 10, fontFace: 'Microsoft YaHei', color: 'FFFFFF', bold: true, valign: 'middle' });
    s.addText(detail, { x: 3.3, y: y+0.1, w: 3, h: 0.9, fontSize: 9, fontFace: 'Microsoft YaHei', color: 'FFFFFF', valign: 'middle' });
    s.addText(haiwu, { x: 6.5, y: y+0.1, w: 2.8, h: 0.9, fontSize: 9, fontFace: 'Microsoft YaHei', color: 'FFFFFF', valign: 'middle' });
  });
  
  s.addText('核心洞察: 冷板标准由GPU公司决定，OEM只做适配。海悟必须先过GPU厂家标准这关。', { x: 0.5, y: 4.9, w: 9, h: 0.3, fontSize: 9, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true });
  addPageBadge(s, '17', theme); addFooter(s, theme);
  return s;
}
module.exports = { createSlide };
