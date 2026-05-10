const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, topBar, footer, title, dataTable, source, insight, kpiRow } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, '字节跳动-业务概览：液冷最大单体客户');
  kpiRow(s, [
    { label: 'GPU投入(2026E)', value: '¥2,600亿', color: t.light },
    { label: '超节点功率', value: '~150kW', color: 'FFF8F0' },
    { label: '现有GPU', value: '~200万卡', color: 'F5F7FA' }
  ], 0.65);
  dataTable(s, ['维度', '数据'], [
    ['GPU投入(2026E)', '直采¥2,300亿+租赁¥300亿'],
    ['超节点方案', '72卡方案 单柜~150kW'],
    ['自研芯片', '三星6nm流片 2026E 20-30万张 ¥170-180亿'],
    ['现有GPU', '昇腾25万+寒武纪+自研 合计~200万卡'],
    ['DC集群', '张家口/芜湖/贵安/中卫 海外:马来西亚柔佛']
  ], { colW: [2, 7], y: 1.55 });
  insight(s, '字节GPU投入¥2,600亿超腾讯+阿里+百度总和 液冷=最大单体采购');
  source(s, 'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md → 字节GPU直采¥2,300亿+租赁¥300亿 昇腾950PR锁定25万颗; sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-bytedance-alibaba-idc-procurement-2026.md → 字节2026 IDC需求1.5GW 自研芯片年内5万颗 国产化15-20%; 推算:自研预算=20-30万卡×¥6K-8K/卡');
  badge(s, '12');
}
module.exports = { createSlide: createSlide };
