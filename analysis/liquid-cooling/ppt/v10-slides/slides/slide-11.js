const pptxgen = require('pptxgenjs'); const theme = require('./theme');
const { addPageBadge, addTopBar, addFooter } = require('./_helpers');
function createSlide(pres) {
  const s = pres.addSlide(); s.background = { color: 'FFFFFF' }; addTopBar(s, theme);
  s.addText('SOM: 海悟营收推算 (国内线)', { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 20, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  
  s.addTable([
    [{ text: '指标', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center', valign: 'middle' } },
     { text: '2026E', options: { bold: true, fontSize: 9, fontFace: 'Arial', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center', valign: 'middle' } },
     { text: '2028E', options: { bold: true, fontSize: 9, fontFace: 'Arial', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center', valign: 'middle' } },
     { text: '2030E', options: { bold: true, fontSize: 9, fontFace: 'Arial', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center', valign: 'middle' } }],
    [
      ['国内营收(¥)', '50M', '400M', '1.0B'],
      ['Manifold份额', '1%', '2%', '3%'],
      ['冷板份额', '0%', '1%', '2%'],
      ['SAM占比', '<0.5%', '~1%', '~1.5%'],
    ].map(r => r.map((c,i) => ({ text: c, options: { fontSize: 10, fontFace: i===0?'Microsoft YaHei':'Arial', color: theme.primary, align: 'center', valign: 'middle', bold: i===0, border: { color: theme.light, pt: 0.5 } } })))
  ], { x: 0.5, y: 1.2, w: 9, colW: [2.5, 2, 2, 2.5], rowH: 0.4, border: { color: theme.secondary, pt: 0.5 } });
  
  // Formula
  s.addText('推算公式', { x: 0.5, y: 3.2, w: 4, h: 0.3, fontSize: 14, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  const formulas = [
    '国内营收 = Σ(组件SAM × 市场份额 × 产能利用率 × 客户导入率 × 价格折扣)',
    '2026E: ¥39B Manifold SAM × 1% × 70% × 50% × 90% ≈ ¥50M',
  ];
  formulas.forEach((f, i) => s.addText(f, { x: 0.5, y: 3.6 + i*0.4, w: 9, h: 0.3, fontSize: 9, fontFace: 'Microsoft YaHei', color: theme.secondary }));
  
  s.addText('海外线: 2028E ¥100M(ODM) → 2030E ¥200M(自有渠道)', { x: 0.5, y: 4.5, w: 9, h: 0.4, fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true });
  s.addText('源: 五看三定v5 SOM推算 + OEM BOM × 机柜数', { x: 0.5, y: 5.1, w: 9, h: 0.2, fontSize: 7, fontFace: 'Microsoft YaHei', color: theme.secondary });
  addPageBadge(s, '11', theme); addFooter(s, theme);
  return s;
}
module.exports = { createSlide };
