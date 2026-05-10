const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "寒武纪：思元590→690，生态最开放");
  dataTable(s, ["芯片","TDP","HBM","出货(2026E)","OEM","海悟机会"], [["590","350W","64GB","~30万","浪潮/宁畅/联想","Manifold直接机会"],["690","~500W","128GB(估)","~20万","浪潮/宁畅","冷板蓝海→绑客户"]], { colW: [1,1,1.2,1.1,1.5,1.8] });
  source(s, "数据来源：\\n• sources/GPU对比表格-精确修正.csv → 思元590参数 (已核实)\\n• 寒武纪2025年报 → 出货量/营收\\n• sources/eastmoney/ (666篇研报归档) → 东方财富研报 寒武纪链\\n• 【估算】基于公开数据推算，标记为估算: 690 TDP为估算(未公开发布); 出货量为行业推算\\n• 590->690 TDP 350W->500W = 功耗跳升 → 冷板从可选变推荐");
  insight(s, "寒武纪生态最开放(OEM自主选液冷)，海悟Manifold/冷板直接机会");
  badge(s, "15");
}
module.exports = { createSlide };
