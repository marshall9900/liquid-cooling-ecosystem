const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, '字节跳动-液冷策略与自研路径');
  dataTable(s, ['维度', '详情'], [
    ['液冷方案', '自研液冷方案(2025建队)→冷板优先→浸没跟踪'],
    ['冷板策略', '全新冷板=零既有供应商→完全不绑定→招标制→最大窗口'],
    ['OEM合作', '浪潮信息(百亿级液冷大单)+宁畅信息'],
    ['海悟窗口', '字节自研芯片冷板→全新市场零竞争→通过浪潮/宁畅进入']
  ], { colW: [2, 7], y: 0.7 });
  insight(s, '字节自建液冷能力≠全封闭→CDU/Manifold/冷板外采→海悟零既有供应商窗口');
  source(s, 'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md → 字节GPU直采¥2,300亿 专家纪要; sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-bytedance-alibaba-idc-procurement-2026.md → 字节IDC 1.5GW ≥21kW强制液冷; 推算:液冷BOM=单柜¥60-75万×~3,000柜 零既有供应商=海悟最大机遇');
  badge(s, '13');
}
module.exports = { createSlide: createSlide };
