const pptxgen = require('pptxgenjs'); const theme = require('./theme');
const { addPageBadge, addTopBar, addFooter } = require('./_helpers');
function createSlide(pres) {
  const s = pres.addSlide(); s.background = { color: 'FFFFFF' }; addTopBar(s, theme);
  s.addText('机柜级液冷组件BOM: NVL72单柜分解 ($83,770)', { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 18, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  s.addText('源: 国信证券《服务器液冷专题》(2026-04-14)', { x: 0.5, y: 0.7, w: 9, h: 0.25, fontSize: 7, fontFace: 'Microsoft YaHei', color: theme.secondary });
  
  s.addTable([
    [{ text: '组件', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '数量', options: { bold: true, fontSize: 9, fontFace: 'Arial', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '单价(USD)', options: { bold: true, fontSize: 9, fontFace: 'Arial', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '小计(USD)', options: { bold: true, fontSize: 9, fontFace: 'Arial', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '占比', options: { bold: true, fontSize: 9, fontFace: 'Arial', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '技术壁垒', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } },
     { text: '海悟机会', options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center' } }],
    [
      ['冷板(服务器)','108','300','32,400','39%','GPU厂家标准定','P1: Intel UQD认证后主力'],
      ['冷板(交换机)','18','200','3,600','4%','—','P1'],
      ['CDU','1','30,000','30,000','36%','规模壁垒>技术壁垒','P2: 远期系统级打包'],
      ['快接头','126','70','8,820','11%','Staubli垄断72%→国产替代窗口','P1: 川环/溯联/中航光电已在追赶'],
      ['Manifold','2','2,000','4,000','5%','精密加工+耐腐蚀','P0: 先行出量(2026)'],
      ['风扇(服务器)','144','25','3,600','4%','—','跟踪'],
      ['风扇(交换机)','54','25','1,350','2%','—','跟踪'],
    ].map(r => r.map((c,i) => ({ text: c, options: { fontSize: 8, fontFace: i===0?'Microsoft YaHei':'Arial', color: (i===4&&(c==='39%'||c==='36%'))?theme.accent:theme.primary, bold: (i===3&&c==='32,400')||(i===3&&c==='30,000'), align: 'center', valign: 'middle', border: { color: theme.light, pt: 0.5 } } })))
  ], { x: 0.5, y: 1.1, w: 9, colW: [1.3, 0.6, 0.9, 1.0, 0.7, 2.0, 2.5], rowH: 0.32, border: { color: theme.secondary, pt: 0.5 } });
  
  s.addText('单柜液冷总额: $83,770 | 冷板(43%)+CDU(36%)=79% | 液冷占机柜(~$3M)约3%', { x: 0.5, y: 3.8, w: 9, h: 0.4, fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true });
  
  s.addText('海悟优先级: Manifold(低壁垒出量)→电源冷板(蓝海×技术同源)→CPU冷板(认证主力)→快接头(国产替代协同)→CDU(远期系统级)', { x: 0.5, y: 4.4, w: 9, h: 0.4, fontSize: 10, fontFace: 'Microsoft YaHei', color: theme.primary });
  
  s.addText('关键: 2026年是"交易落地"元年 — 液冷从可选→标配，下半年规模化出货 (华源证券+国信证券共识)', { x: 0.5, y: 4.9, w: 6.5, h: 0.3, fontSize: 9, fontFace: 'Microsoft YaHei', color: 'e76f51', bold: true });
  try { s.addImage({ path: __dirname + '/../../imgs/gx_-17.png', x: 6.0, y: 4.4, w: 3.2, h: 1.5 }); } catch(e) {}
  addPageBadge(s, '27', theme); addFooter(s, theme);
  return s;
}
module.exports = { createSlide };
