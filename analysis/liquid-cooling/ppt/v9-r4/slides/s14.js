const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "华为昇腾：910B→950PR→950DT → Atlas 900");
  dataTable(s, ["芯片","TDP","HBM","出货(2026E)","OEM","液冷要求"], [["910B","310W","64GB","~60万","超聚变/浪潮/宁畅","风冷/冷板可选"],["950PR","~400W","96GB(估)","~80万","超聚变/浪潮/宁畅","推荐冷板"],["950DT","~500W","128GB(估)","~40万","超聚变/浪潮","冷板为主"],["Atlas 900","200kW+","—","—","超聚变(嫡系)","液冷整柜刚需"]], { colW: [1.3,1,1.2,1.1,1.3,1.5] });
  source(s, "数据来源：\\n• sources/GPU对比表格-精确修正.csv → 昇腾910B/950PR/950DT 已核实参数\\n• 华为官网公开资料 → 昇腾产品规格\\n• sources/wechat/2026-05-06-super-node-insight.md → 超节点液冷方案\\n• sources/eastmoney/ (666篇研报归档) → 东方财富研报 昇腾产业链\\n• 【估算】基于公开数据推算，标记为估算: 950DT/950PR TDP为估算(华为未公开正式参数); 出货量为行业专家推算\n📐 推算过程：出货量推算: 昇腾总出货~180万卡 = 910B 60万(存量+新产)+950PR 80万(新产+跨年度)+950DT 40万(新产)。基于华为公开指引×产能利用率×良率推算。TDP: 910B实测310W，950PR/950DT为基于制程/晶体管数/频率线性外推(标记估算)");
  insight(s, "昇腾由超聚变主导(华为嫡系)，海悟需通过Manifold/CDU切入(非GPU绑定)，冷板P2认证后");
  badge(s, "14");
}
module.exports = { createSlide };
