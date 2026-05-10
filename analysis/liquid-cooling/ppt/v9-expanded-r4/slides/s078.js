const { badge, topBar, footer, title, dataTable, source } = require('./_h');
function createSlide(p) { const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s);
  title(s, "四件套协同价值与机会优先级总排序");
  dataTable(s, ["维度","Manifold","电源冷板","CPU冷板","快接头","GPU冷板","CDU"], [
    ["TAM ¥B(2030)","25","39","8","6","15","150"],
    ["空白率(%)","40","100","60","85","60","35"],
    ["认证壁垒","无","无","Intel(高)","专利(中)","NV(高)","无"],
    ["时间窗口","2026","2026Q3","2028H1","2027搭售","2027+","2029+"],
    ["海悟能力","M++","M","M-","M-","M--","M"],
    ["策略","P0出量","P0蓝海","P1认证","P1搭售","P2认证","P2搭售"]
  ], { colW: [1.2,1.2,1,1.2,1,0.8,1] });
  source(s, "P71-P77全部源文件汇总 | 能力评估为海悟内部自评 | Manifold+电源冷板=双P0 | 📐铁律⑩索引");
  footer(s); badge(s, "78"); }
module.exports = { createSlide };
