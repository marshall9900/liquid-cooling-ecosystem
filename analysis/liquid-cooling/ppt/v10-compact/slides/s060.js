const h = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; h.topBar(s); h.footer(s);
  h.title(s, '目标拆解 | 2026→2028→2030三年营收路径');
  s.addChart(p.charts.LINE, [{ name: '液冷营收(¥M)', labels: ["2026","2027","2028","2030"], values: [7,75,350,1500] },{ name: 'SOM份额(%)', labels: ["2026","2027","2028","2030"], values: [0.35,1.5,4,6.5] }], { x: 0.5, y: 0.65, w: 9, h: 2.8, showTitle: false, lineSize: 2.5, lineSmooth: true, chartColors: ["4BACC6","F79646"] });
  h.dataTable(s, ['KPI维度','2026目标','衡量标准'], [['Manifold客户','3-5家OEM/OTT送样','送样→测试通过→首单'],['团队','液冷团队15-20人','销售+方案+研发']], { y: 3.5999999999999996, rowH: 0.25, colW: [1.5,1.8,3.5] });
  h.insight(s, '三年路径:2026验证→2027批量→2028规模→2030领导 | 海悟=国内TOP3机柜级液冷组件供应商 全栈方案:冷板+CDU+Manifold+快接头 | SOM从0.2%→5-8% CAGR>100%', Math.min(4.489999999999999, 4.4));
  h.source(s, 's084+s088+s089合并: 海悟液冷战略三年规划 SOM=液冷TAM×海悟份额 2026为验证年');
}
module.exports = { createSlide };