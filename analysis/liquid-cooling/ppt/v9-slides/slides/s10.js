const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, bar, ft, title, dataTable, insightBox, takeaway } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; bar(s, t);
  title(s, t, 'OTT 深度：快手 / 拼多多 / 百度');
  dataTable(s, t,
    ['公司', 'AI Capex 2026E', '超节点标准', '液冷方案', 'DC规模', '采购特征'],
    [
      ['快手', '¥60-80B', '可灵架构(自研)', '冷板起步', '乌兰察布/张家口', '招标制，价格敏感'],
      ['拼多多', '¥30-50B', '—（采购为主）', '风冷为主', '—', '液冷需求小(P0不是)'],
      ['百度', '¥80-100B', '昆仑芯R300集群', '冷板+风冷', '阳泉/保定/徐水', '昆仑芯国产，CDU外购'],
    ],
    [1.1, 1.5, 1.6, 1.3, 1.6, 1.9],
    0.65
  );
  insightBox(s, t, '🎯 海悟机会评估', '快手(P1)：CDU/Manifold招标制，价格敏感型客户，2026H2跟踪窗口。百度(P2)：昆仑芯R300集群CDU外购，但需百度认证壁垒。拼多多(P3)：短期液冷需求极小，非优先客户。核心策略：先攻头部(阿里/字节)，稳扎腾讯，再拓快手/百度。', 0.5, 2.45, 9, 0.75);
  takeaway(s, t, '💡 关键策略：OTT客户按P0→P3分级管理。P0=阿里/字节(CDU+Manifold+冷板直接供给)，P1=腾讯/快手(通过OEM间接进入)，P2=华为/百度(长期跟踪)，P3=拼多多(暂不投入)。核心破局点：CDU+快接头组合通过H3C/浪潮等OEM认证。', 3.35);
  ft(s, t); badge(s, '10', t);
}
module.exports = { createSlide };
