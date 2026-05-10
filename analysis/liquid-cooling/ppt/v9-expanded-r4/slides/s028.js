const pptxgen = require('pptxgenjs');
const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, '阿里平头哥-真武810E与万卡集群');
  dataTable(s, ['指标','数据'],
    [['真武810E TDP','~400W'],
     ['出货(2026E)','~60万卡(阿里自用)'],
     ['万卡互联','突破1万卡 片间700GB/s'],
     ['超节点','全液冷架构 GPU+交换+存储一体化'],
     ['液冷采购','阿里云招标(认证+价格+交付)'],
     ['海悟','万卡集群=机柜级液冷均可参与招标']],
    { colW: [2.5,6.5] });
  source(s,
    'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-06-ali-ppu-chip-overview.md → 平头哥PPU真武810E架构/出货/制程; ' +
    'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-06-super-node-insight.md → ' +
    '超节点液冷BOM/Scale-up互联/28年国产超节点¥3,414亿(CAGR 194%); ' +
    'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-bytedance-alibaba-idc-procurement-2026.md → ' +
    '阿里三年¥3,800亿/阿里云AI收入>20%/国产GPU采购20-30%; ' +
    '阿里ODCC 2026 → 万卡全液冷超节点标准; 阿里自研≠封闭生态');
  insight(s, '阿里自研芯片≠封闭生态 外部液冷供应商可参与招标 万卡集群=机柜级液冷大机会');
  badge(s, '28');
}
module.exports = { createSlide };
