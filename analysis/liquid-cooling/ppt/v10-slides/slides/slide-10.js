const pptxgen = require('pptxgenjs'); const theme = require('./theme');
const { addPageBadge, addTopBar, addFooter } = require('./_helpers');
function createSlide(pres) {
  const s = pres.addSlide(); s.background = { color: 'FFFFFF' }; addTopBar(s, theme);
  s.addText('TAM: 总可寻址市场 (国信证券 2026-04-14)', { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 18, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  
  // Global
  s.addText('全球液冷组件市场 ($B)', { x: 0.5, y: 0.9, w: 4, h: 0.35, fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.secondary, bold: true });
  s.addTable([
    [{ text: '组件', options: { bold: true, fontSize: 8, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '2026E', options: { bold: true, fontSize: 8, fontFace: 'Arial', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '2028E', options: { bold: true, fontSize: 8, fontFace: 'Arial', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '2030E', options: { bold: true, fontSize: 8, fontFace: 'Arial', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } }],
    ...['冷板|5.4|13.0|23.0','CDU|4.5|11.3|20.6','快接头|1.3|3.0|5.0','Manifold|0.6|1.4|2.3'].map(r => {
      const cells = r.split('|'); const isManifold = cells[0] === 'Manifold';
      return cells.map((c,i) => ({ text: c, options: { fontSize: 8, fontFace: i===0?'Microsoft YaHei':'Arial', color: theme.primary, bold: i===0, align: 'center', valign: 'middle', border: { color: theme.light, pt: 0.5 } } }));
    }),
    [{ text: '合计', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: 'e76f51' }, color: 'FFFFFF', align: 'center' } },
     { text: '12.6', options: { bold: true, fontSize: 9, fontFace: 'Arial', fill: { color: 'e76f51' }, color: 'FFFFFF', align: 'center' } },
     { text: '30.3', options: { bold: true, fontSize: 9, fontFace: 'Arial', fill: { color: 'e76f51' }, color: 'FFFFFF', align: 'center' } },
     { text: '53.5', options: { bold: true, fontSize: 9, fontFace: 'Arial', fill: { color: 'e76f51' }, color: 'FFFFFF', align: 'center' } }],
  ], { x: 0.5, y: 1.25, w: 4.5, colW: [1.2, 1.1, 1.1, 1.1], rowH: 0.28, border: { color: theme.secondary, pt: 0.5 } });

  s.addText('CAGR 43.6%  |  冷板+CDU占81.5%', { x: 0.5, y: 2.85, w: 4.5, h: 0.25, fontSize: 9, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true });

  // China  
  s.addText('中国市场推估 (全球×25-30%)', { x: 5.3, y: 0.9, w: 4.3, h: 0.35, fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true });
  s.addTable([
    [{ text: '组件', options: { bold: true, fontSize: 8, fontFace: 'Microsoft YaHei', fill: { color: theme.accent }, color: 'FFFFFF', align: 'center' } },
     { text: '2030E(¥B)', options: { bold: true, fontSize: 8, fontFace: 'Arial', fill: { color: theme.accent }, color: 'FFFFFF', align: 'center' } },
     { text: '海悟机会', options: { bold: true, fontSize: 8, fontFace: 'Microsoft YaHei', fill: { color: theme.accent }, color: 'FFFFFF', align: 'center' } }],
    [['冷板','~400','P0蓝海(电源/内存)'],['CDU','~350','P2远期系统级'],
     ['快接头','~85','P1国产替代'],['Manifold','~40','P0先行出量']].map(r => r.map(c => ({ text: c, options: { fontSize: 8, fontFace: 'Microsoft YaHei', color: theme.primary, align: 'center', valign: 'middle', border: { color: theme.light, pt: 0.5 } } })))
  ], { x: 5.3, y: 1.25, w: 4.3, colW: [1.2, 1.3, 1.8], rowH: 0.28, border: { color: theme.accent, pt: 0.5 } });
  
  // Value chain
  s.addText('单机柜液冷价值量 (NVL72基准: $83,770)', { x: 0.5, y: 3.2, w: 9, h: 0.35, fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.secondary, bold: true });
  s.addTable([
    [{ text: '冷板(服务)', options: { bold: true, fontSize: 8, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: 'CDU', options: { bold: true, fontSize: 8, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '快接头', options: { bold: true, fontSize: 8, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: 'Manifold', options: { bold: true, fontSize: 8, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '其他', options: { bold: true, fontSize: 8, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } }],
    [{ text: '$32,400', options: { fontSize: 11, fontFace: 'Arial', color: theme.accent, bold: true, align: 'center', valign: 'middle' } },
     { text: '$30,000', options: { fontSize: 11, fontFace: 'Arial', color: theme.accent, bold: true, align: 'center', valign: 'middle' } },
     { text: '$8,820', options: { fontSize: 11, fontFace: 'Arial', color: theme.primary, align: 'center', valign: 'middle' } },
     { text: '$4,000', options: { fontSize: 11, fontFace: 'Arial', color: theme.primary, align: 'center', valign: 'middle' } },
     { text: '$8,550', options: { fontSize: 11, fontFace: 'Arial', color: theme.secondary, align: 'center', valign: 'middle' } }],
    [{ text: '39%', options: { fontSize: 9, fontFace: 'Arial', color: theme.accent, bold: true, align: 'center', valign: 'middle' } },
     { text: '36%', options: { fontSize: 9, fontFace: 'Arial', color: theme.accent, bold: true, align: 'center', valign: 'middle' } },
     { text: '11%', options: { fontSize: 9, fontFace: 'Arial', color: theme.primary, align: 'center', valign: 'middle' } },
     { text: '5%', options: { fontSize: 9, fontFace: 'Arial', color: theme.primary, align: 'center', valign: 'middle' } },
     { text: '10%', options: { fontSize: 9, fontFace: 'Arial', color: theme.secondary, align: 'center', valign: 'middle' } }],
  ], { x: 0.5, y: 3.55, w: 9, colW: [1.8, 1.8, 1.8, 1.8, 1.8], rowH: [0.25, 0.45, 0.25], border: { color: theme.secondary, pt: 0.5 } });
  
  s.addText('液冷占机柜(~$3M)约3%，但技术壁垒高、替换粘性强 | 源: 国信证券《服务器液冷专题》(2026-04-14)', { x: 0.5, y: 4.55, w: 9, h: 0.25, fontSize: 7, fontFace: 'Microsoft YaHei', color: theme.secondary });

  // SAM
  s.addText('SAM: 海悟可服务市场 (中国组件TAM中可切入)', { x: 0.5, y: 4.8, w: 9, h: 0.3, fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  s.addText('Manifold ¥3-5B(26E)→¥10-15B(28E) | 电源冷板 ¥0.5-1B→¥3-5B | 快接头(国产) ¥1-2B→¥5-10B', { x: 0.5, y: 5.1, w: 9, h: 0.3, fontSize: 8, fontFace: 'Microsoft YaHei', color: theme.primary });

  addPageBadge(s, '10', theme); addFooter(s, theme);
  return s;
}
module.exports = { createSlide };
