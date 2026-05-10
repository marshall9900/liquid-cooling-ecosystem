const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "四件套协同价值与机会优先级总排序");
  dataTable(s, ["维度","Manifold","电源冷板","CPU冷板","快接头","GPU冷板","CDU"], [["TAM ¥B(2030)","25","39","8","6","15","150"],["空白率(%)","40","100","60","85","60","35"],["认证壁垒","无","无","Intel(高)","专利(中)","NV(高)","无"],["时间窗口","2026可送样","2026Q3","2028H1","2027搭售","2027+国产","2029+"],["海悟能力","M++","M","M-","M-","M--","M"],["策略","P0出量","P0蓝海","P1认证","P1搭售","P2认证","P2搭售"]], { colW: [1.2,1.2,1,1.2,1,0.8,1] });
  source(s, "表P44：四件套协同\\n来源：全部分析汇总 | Kimi+Mega复核\\nManifold+电源冷板=双P0→2026双轮启动\n📐 推算过程：协同价值: Manifold送样→建立OEM关系→冷板交叉销售→快接头搭售→CDU系统打包。单柜ASP: Manifold ¥48K + 冷板 ¥150K + CDU ¥100K + 快接头 ¥60K → 系统打包 ¥300K (vs 单买 ¥358K 节省15%)。海悟能力: M++ = 已量产; M = 有基础; M- = 需补; M-- = 空白");
  insight(s, "Manifold+电源冷板=双P0→2026双轮启动→抢占就位→2027加速");
  badge(s, "44");
}
module.exports = { createSlide };
