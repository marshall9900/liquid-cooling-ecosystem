const pptxgen = require('pptxgenjs'); const theme = require('./theme');
const { addPageBadge, addTopBar, addFooter } = require('./_helpers');
function createSlide(pres) {
  const s = pres.addSlide(); s.background = { color: 'FFFFFF' }; addTopBar(s, theme);
  s.addText('液冷组件BOM与战略矩阵 | NVL72单柜 $83,770', { x: 0.5, y: 0.2, w: 9, h: 0.4, fontSize: 17, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  s.addText('源: 国信证券《服务器液冷专题》(2026-04-14) | BOM + 优先级 + 海悟战略 三合一视图', { x: 0.5, y: 0.55, w: 9, h: 0.2, fontSize: 7, fontFace: 'Microsoft YaHei', color: theme.secondary });

  s.addTable([
    [{ text: '组件', options: { bold: true, fontSize: 8, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center', valign: 'middle' } },
     { text: '数量', options: { bold: true, fontSize: 8, fontFace: 'Arial', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center', valign: 'middle' } },
     { text: 'BOM占比', options: { bold: true, fontSize: 8, fontFace: 'Arial', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center', valign: 'middle' } },
     { text: '优先级', options: { bold: true, fontSize: 8, fontFace: 'Arial', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center', valign: 'middle' } },
     { text: 'TAM 2026E(¥B)', options: { bold: true, fontSize: 8, fontFace: 'Arial', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center', valign: 'middle' } },
     { text: '技术壁垒', options: { bold: true, fontSize: 8, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center', valign: 'middle' } },
     { text: '竞争烈度', options: { bold: true, fontSize: 8, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center', valign: 'middle' } },
     { text: '海悟策略', options: { bold: true, fontSize: 8, fontFace: 'Microsoft YaHei', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center', valign: 'middle' } },
     { text: '启动', options: { bold: true, fontSize: 8, fontFace: 'Arial', fill: { color: theme.primary }, color: 'FFFFFF', align: 'center', valign: 'middle' } }],
    [
      ['冷板(服务器)','108','39%','P1','12-18','GPU厂家标准定','高','Intel UQD认证后主力','2027H2'],
      ['CDU','1','36%','P2','8-12','规模>技术壁垒','极高','远期系统级打包','2028'],
      ['快接头','126','11%','P1','5-10','密封寿命10万次+','垄断(Staubli72%)','国产替代·配套销售','2027'],
      ['Manifold','2','5%','P0','3-5','低(精密加工)','中','先行出量·建信任','2026Q1'],
      ['电源冷板','—','—','P0','1-3','中(热设计)','低(空白)','蓝海差异化爆量','2026Q3'],
      ['内存冷板','—','—','P0','1-3','中','低(空白)','蓝海差异化','2026Q4'],
      ['GPU冷板','—','—','P2','12-18','极高(NVIDIA认证)','高','认证后跟进','2028+'],
    ].map((r,i) => r.map((c,j) => {
      let color = theme.primary;
      let bold = false;
      if (j === 2 && (c === '39%' || c === '36%')) { color = theme.accent; bold = true; }
      if (j === 3 && c === 'P0') { color = theme.accent; bold = true; }
      if (j === 3 && c === 'P1') { color = '0077b6'; bold = true; }
      if (j === 4 && i === 0) { bold = true; }
      if (j === 7 && (c.includes('P0') || c.includes('蓝海'))) { color = theme.accent; }
      return { text: c, options: { fontSize: 7.5, fontFace: j===0?'Microsoft YaHei':'Arial', color, bold, align: 'center', valign: 'middle', border: { color: theme.light, pt: 0.5 } } };
    }))
  ], { x: 0.5, y: 0.85, w: 9, colW: [1.0, 0.5, 0.65, 0.55, 0.9, 1.15, 0.9, 1.75, 0.7], rowH: 0.3, border: { color: theme.secondary, pt: 0.5 } });

  // Summary section
  s.addShape('rect', { x: 0.5, y: 3.4, w: 9, h: 0.02, fill: { color: theme.secondary } });

  s.addText('单柜液冷总额: $83,770 | 冷板(43%)+CDU(36%)=79% | 液冷占机柜(~$3M)约3%，但技术壁垒高、替换粘性强', { x: 0.5, y: 3.55, w: 9, h: 0.3, fontSize: 9, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true });
  s.addText('海悟进攻路线: Manifold(低壁垒出量)→电源冷板(蓝海爆量)→CPU冷板(认证主力)→快接头(国产替代协同)→CDU(远期系统级)', { x: 0.5, y: 3.9, w: 9, h: 0.3, fontSize: 10, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  s.addText('⚡ 2026核心动作: ① Manifold送样H3C/浪潮(¥50M)  ② 电源冷板研发立项(2027蓝海爆量¥300M)  |  关键: 2026是"交易落地"元年，液冷从可选→标配', { x: 0.5, y: 4.3, w: 9, h: 0.35, fontSize: 9, fontFace: 'Microsoft YaHei', color: 'e76f51', bold: true });
  s.addText('🔥 Arista XPO光模块冷板400W(12.8T/模块) 蓝海确认 | 源: 国信证券(2026-04-14) + 华源证券共识', { x: 0.5, y: 4.7, w: 6.5, h: 0.3, fontSize: 7.5, fontFace: 'Microsoft YaHei', color: theme.secondary });
  try { s.addImage({ path: __dirname + '/../../imgs/gx_-17.png', x: 6.2, y: 4.5, w: 3.2, h: 1.5 }); } catch(e) {}

  addPageBadge(s, '27', theme); addFooter(s, theme);
  return s;
}
module.exports = { createSlide };
