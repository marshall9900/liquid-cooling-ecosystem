const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "关键里程碑 & 风险管控矩阵");
  dataTable(s, ["阶段","时间","里程碑","风险","概率","对策"], [["①","2026Q1","H3C/浪潮/宁畅送样","测试fail","高","多客户+保底3家"],["②","2026Q3","电源冷板研发立项","技术难度","中","专利+A/B方案"],["③","2027H1","Manifold¥50M","供应不稳定","中","产能冗余+备份"],["④","2027Q3","电源冷板首次OEM送样","竞品跟进","中","先发6-12月+绑客"],["⑤","2028H1","Intel UQD认证","未通过→B计划","中","国产UQD标准"],["⑥","2028","CPU冷板+快接头","产能/人才","中/高","扩产+校企"],["⑦","2030","全栈+海外ODM","技术突变/海外","低/高","浸没储备/国内"]], { colW: [0.5,0.8,2.5,1.6,0.5,1.4] });
  source(s, "表P51：里程碑+风险\\n来源：全部分析 | Kimi+Mega复核\\n6月送样→12月PoC→24月规模→48月¥1B\\n关键风险：认证周期+人才+竞品跟进");
  insight(s, "6个月送样→12月PoC→24月规模→48月¥1B。关键风险=认证+人才+竞品");
  badge(s, "51");
}
module.exports = { createSlide };
