const pptxgen = require('pptxgenjs'); const theme = require('./theme');
const { addPageBadge, addTopBar, addFooter } = require('./_helpers');
function createSlide(pres) {
  const s = pres.addSlide(); s.background = { color: 'FFFFFF' }; addTopBar(s, theme);
  s.addText('TAM: 总可寻址市场', { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 20, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  
  // Global
  s.addText('全球', { x: 0.5, y: 1.0, w: 4, h: 0.4, fontSize: 14, fontFace: 'Microsoft YaHei', color: theme.secondary, bold: true });
  s.addTable([
    [{ text: '指标', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '2026E', options: { bold: true, fontSize: 9, fontFace: 'Arial', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '2028E', options: { bold: true, fontSize: 9, fontFace: 'Arial', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '2030E', options: { bold: true, fontSize: 9, fontFace: 'Arial', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } }],
    ...['液冷机柜(万架)|120|480|1000+', '组件TAM($B)|17-22|48-60|100+'].map(r => {
      const cells = r.split('|');
      return cells.map((c,i) => ({ text: c, options: { fontSize: 9, fontFace: i===0?'Microsoft YaHei':'Arial', color: theme.primary, align: 'center', valign: 'middle', border: { color: theme.light, pt: 0.5 } } }));
    })
  ], { x: 0.5, y: 1.4, w: 4, colW: [1.3, 0.9, 0.9, 0.9], rowH: 0.3, border: { color: theme.secondary, pt: 0.5 } });
  
  // China
  s.addText('中国', { x: 5.2, y: 1.0, w: 4, h: 0.4, fontSize: 14, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true });
  s.addTable([
    [{ text: '指标', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.accent }, color: 'FFFFFF', align: 'center' } },
     { text: '2026E', options: { bold: true, fontSize: 9, fontFace: 'Arial', fill: { color: theme.accent }, color: 'FFFFFF', align: 'center' } },
     { text: '2028E', options: { bold: true, fontSize: 9, fontFace: 'Arial', fill: { color: theme.accent }, color: 'FFFFFF', align: 'center' } },
     { text: '2030E', options: { bold: true, fontSize: 9, fontFace: 'Arial', fill: { color: theme.accent }, color: 'FFFFFF', align: 'center' } }],
    ...['液冷机柜(万架)|53|210|400+', '组件TAM(¥B)|~39|~120|~250'].map(r => {
      const cells = r.split('|');
      return cells.map((c,i) => ({ text: c, options: { fontSize: 9, fontFace: i===0?'Microsoft YaHei':'Arial', color: theme.primary, align: 'center', valign: 'middle', border: { color: theme.light, pt: 0.5 } } }));
    })
  ], { x: 5.2, y: 1.4, w: 4.3, colW: [1.3, 1, 1, 1], rowH: 0.3, border: { color: theme.accent, pt: 0.5 } });
  
  // Methodology
  s.addText('推算方法：液冷机柜数 = DC六大集群 × 新建DC液冷渗透率(50%→80%)。组件TAM = 机柜数 × 液冷组件ASP(全球基准USD/国产化¥)', { x: 0.5, y: 2.6, w: 9, h: 0.4, fontSize: 8, fontFace: 'Microsoft YaHei', color: theme.secondary });
  
  // SAM
  s.addText('SAM: 海悟可服务市场 (中国组件TAM中可切入部分)', { x: 0.5, y: 3.1, w: 9, h: 0.4, fontSize: 14, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  s.addTable([
    [{ text: '组件', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '2026E SAM(¥B)', options: { bold: true, fontSize: 9, fontFace: 'Arial', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '2028E SAM(¥B)', options: { bold: true, fontSize: 9, fontFace: 'Arial', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '备注', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } }],
    [['Manifold','3-5','10-15','低门槛, 适合出海量'],['电源冷板','0.5-1','3-5','蓝海, 供应商空白'],['CPU冷板','8-12','20-30','需Intel/OCP认证'],['内存冷板','0.5-1','3-5','Gen6 SSD液冷趋势'],['快接头(国产)','1-2','5-10','P0国产替代窗口']]
    .map(r => r.map(c => ({ text: c, options: { fontSize: 8, fontFace: 'Microsoft YaHei', color: theme.primary, align: 'center', valign: 'middle', border: { color: theme.light, pt: 0.5 } } })))
  ], { x: 0.5, y: 3.5, w: 9, colW: [1.5, 2, 2, 3.5], rowH: 0.28, border: { color: theme.secondary, pt: 0.5 } });
  
  s.addText('源: 五看三定v5 + OEM BOM推算 + IDC机柜数交叉验证', { x: 0.5, y: 5.1, w: 9, h: 0.2, fontSize: 7, fontFace: 'Microsoft YaHei', color: theme.secondary });
  addPageBadge(s, '10', theme); addFooter(s, theme);
  return s;
}
module.exports = { createSlide };
