const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, bar, ft, title, dataTable, takeaway } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  bar(s, t);
  title(s, t, 'OTT 液冷对比矩阵');

  dataTable(s, t,
    ['OTT', '冷板规格', 'CDU要求', 'Manifold', '快接头', '认证门槛', '采购模式'],
    [
      ['阿里', '磐久128定制', '100-150kW', '自研+外采', 'UQD/Staubli', '阿里云液冷认证', '招标+POC'],
      ['字节', '自研超节点', '80-120kW', '外采为主', '通用快接头', '字节自研标准(在编)', '招标'],
      ['腾讯', 'ETH-64/128', '100-150kW', '外采', 'OCP兼容', '腾讯液冷认证', '招标'],
      ['快手', '可灵架构', '60-100kW', '外采', '通用', '无(供应商审核)', '招标'],
      ['百度', '昆仑芯R300', '60-100kW', '外采', '通用', '百度认证', '招标'],
    ],
    [0.8, 1.4, 1.3, 1.2, 1.2, 1.7, 1.4],
    0.6
  );

  takeaway(s, t, '💡 CDU/Manifold由OTT自主招标（非GPU绑定）→ 海悟可直接参与  |  冷板强绑定GPU → 需先过OEM认证  |  阿里/腾讯各有认证体系  |  OCP兼容认证可降低多客户进入成本', 4.55);

  ft(s, t);
  badge(s, '12', t);
}
module.exports = { createSlide };
