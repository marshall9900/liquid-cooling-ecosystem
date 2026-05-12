const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, '快手/百度/拼多多 — 其他OTT机会');
  dataTable(s, ['公司', 'AI CAPEX 2026E', '液冷方案', '采购', '海悟优先级'], [
    ['快手', '¥600-800亿', '冷板起步', '招标制', 'P1(CDU/Manifold)'],
    ['百度', '¥800-1,000亿', '昆仑芯+冷板', '百度认证', 'P2(需认证)'],
    ['拼多多', '¥300-500亿', '风冷为主', '需求小', 'P3(非优先)']
  ], { colW: [1.2, 1.3, 1.5, 1.5, 1.5], y: 0.7 });
  insight(s, '快手冷板起步→CDU/Manifold招标→海悟P1。百度/拼多多P2/P3');
  source(s, 'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md → 百度昇腾预购>5万颗,AI CAPEX¥800-1,000亿; sources/sec/oem/VRT/submissions_2026-05-09.json, sources/sec/ott/MSFT/submissions_2026-05-09.json, sources/sec/ott/BIDU/submissions_2026-05-09.json → SEC百度10-K CAPEX核实; sources/sec/oem/VRT/submissions_2026-05-09.json, sources/sec/ott/MSFT/submissions_2026-05-09.json → JD/submissions_2026-05-09.json → 京东生态CAPEX; 【估算】:快手/拼多多CAPEX为券商推算 基于公开AI服务器采购公告');
  badge(s, '17');
}
module.exports = { createSlide: createSlide };
