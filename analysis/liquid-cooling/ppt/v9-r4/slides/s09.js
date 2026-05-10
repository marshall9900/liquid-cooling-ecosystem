const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "字节跳动：大禹超节点——液冷最大单体客户");
  dataTable(s, ["指标","数据"], [["GPU投入","¥2,600亿（直采¥2,300亿+租赁¥300亿）"],["超节点方案","72卡方案(GPU:交换=6:1)，单柜~150kW"],["自研芯片","三星6nm流片，2026E 20-30万张，¥170-180亿预算"],["现有GPU","昇腾25万+寒武纪250亿+自研，全新冷板=零既有供应商"],["液冷采购","¥60-75万/柜 × ~3,000柜 = ¥18-22亿/年"],["OEM合作","浪潮信息（百亿级液冷大单）+ 宁畅信息"],["海外","马来西亚柔佛DC已试点72卡超节点"],["海悟进入","通过浪潮/宁畅渠道 → 自研芯片冷板（全新市场零竞争）"]], { colW: [2.2,6.8] });
  source(s, "数据来源：\\n• sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md → 芯片专家纪要 2026.05 字节GPU ¥2,300亿\\n• sources/wechat/2026-05-07-bytedance-alibaba-idc-procurement-2026.md → 字节/阿里IDC采购 2026\\n• sources/wechat/2026-05-06-super-node-insight.md → 72卡超节点方案\\n• sources/eastmoney/ (666篇研报归档) → 相关券商研报\\n• 【估算】基于公开数据推算，标记为估算: 液冷采购 = 单柜BOM(¥60-75万)×柜数(~3,000); 字节自研芯片¥170-180亿 = 20-30万×¥6,000-8,000/卡\n📐 推算过程：液冷采购(¥/年) = 单柜BOM(¥60-75万)×柜数(~3,000) = ¥18-22亿/年。字节自研芯片¥170-180亿 = 20-30万卡×¥6,000-8,000/卡。GPU总投入¥2,600亿 = ¥2,300亿(直采)+¥300亿(租赁)");
  insight(s, "字节GPU¥2,600亿超腾讯+阿里+百度总和，液冷组件最大单体采购商");
  badge(s, "09");
}
module.exports = { createSlide };
