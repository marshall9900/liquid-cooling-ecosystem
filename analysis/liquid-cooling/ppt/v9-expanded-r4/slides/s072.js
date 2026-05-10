const { badge, topBar, footer, title, dataTable, source } = require('./_h');
function createSlide(p) { const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s);
  title(s, "电源冷板：TAM ¥0.5B→¥19B 蓝海(锚定52万柜)");
  dataTable(s, ["指标","2026","2027","2028","2030"], [
    ["单柜数量","36片+","50片+","80片+","120片+"],
    ["ASP(¥)","400-800","350-700","300-600","250-500"],
    ["需求(万片)","10-20","50-100","200-500","800-1,500"],
    ["TAM(¥B)","0.5-1","1.5-3","6-15","20-39"],
    ["国内供方","空白","空白","空白","空白"],
    ["海悟(¥M)","立项","100","200","400"]
  ], { colW: [1.3,1.3,1.3,1.3,1.3] });
  source(s, "sources/reports/supernode/H3_AP202604081821055447_1.pdf 中银国际→国产排序; s005 AIDC液冷机柜10→52万架(锚定运营商); TAM=单柜数×ASP×机柜数。2030:120片×¥300×52万柜≈¥18.7B【估算】 | 📐铁律⑩索引+⑪推算公式");
  footer(s); badge(s, "72"); }
module.exports = { createSlide };
