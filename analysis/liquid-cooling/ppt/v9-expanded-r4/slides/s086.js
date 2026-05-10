const { badge, topBar, footer, title, dataTable, source } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s);
  title(s, "关键里程碑 & 风险管控矩阵");
  dataTable(s, ["阶段","时间","里程碑","风险","概率","对策"], [
    ["1","2026Q1","H3C/浪潮/宁畅送样","测试fail","高","多客户+保底3家"],
    ["2","2026Q3","电源冷板研发立项","技术难度","中","专利+A/B方案"],
    ["3","2027H1","Manifold¥50M","供应不稳定","中","产能冗余+备份"],
    ["4","2027Q3","电源冷板首次OEM送样","竞品跟进","中","先发6-12月+绑客"],
    ["5","2028H1","Intel UQD认证","未通过","中","国产UQD标准"],
    ["6","2028","CPU冷板+快接头","产能/人才","中/高","扩产+校企合作"],
    ["7","2030","全栈+海外ODM","技术突变/海外","低/高","浸没储备/国内"],
  ], { y: 0.65, colW: [0.5,0.8,2.5,1.6,0.5,1.4] });
  source(s, "风险对标: sources/sec/oem/VRT/submissions_2026-05-09.json, sources/sec/oem/VRT/VRT-10-K_2026-02-13.md026-02-13.md → Vertiv风险因子(Risk Factors):供应链/关税/竞争 | 开源证券 2025-07-31 → Vertiv+Celestica上调指引(液冷提速) | sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-06-super-node-insight.md → Staubli交期>12周(供应风险) | 📐6个月送样→12月PoC→24月规模→48月¥1B_铁律⑩");
  badge(s, "86");
}
module.exports = { createSlide };
