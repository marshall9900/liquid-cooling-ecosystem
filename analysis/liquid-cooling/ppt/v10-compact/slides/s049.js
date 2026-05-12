const { badge, topBar, footer, title, dataTable, source } = require('./_h');
function createSlide(p) { const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s);
  title(s, "液冷组件全行业战斗力矩阵");
  dataTable(s, ["公司","冷板","CDU","Manifold","快接头","综合","vs海悟"], [
    ["CoolIT","S","B","C","D","A","正面"],
    ["AVC","A","C","D","C","A-","正面"],
    ["英维克","A","A","A","C","A","最强国内"],
    ["高澜","B","B","B","D","B+","正面"],
    ["Vertiv","C","S","C","B","A","CDU远期"],
    ["Staubli","D","D","D","S","B","搭售"],
    ["海悟","C(目标)","C(远期)","A(目标)","B(远期)","B→A-","—"]
  ], { colW: [1,0.6,0.6,0.6,0.6,1,1.2] });
  source(s, "各公司年报+行业分析 | S/A/B/C/D=绝对/领先/成熟/发展中/无 | 📐铁律⑩索引");
  footer(s); badge(s, "67"); }
module.exports = { createSlide };
