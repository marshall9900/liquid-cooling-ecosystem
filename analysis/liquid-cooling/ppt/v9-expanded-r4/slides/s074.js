const { badge, topBar, footer, title, dataTable, source } = require('./_h');
function createSlide(p) { const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s);
  title(s, "CDU：TAM ¥8B→¥150B 竞争激烈");
  dataTable(s, ["维度","详情"], [
    ["TAM","¥8B→¥80-150B，CAGR 60%+"],
    ["规格","50-150kW主需求→200kW+(NVL72)"],
    ["竞争","英维克/Vertiv/曙光/高澜"],
    ["海悟","P2远期→搭售→差异化"],
    ["优势","温控基因+IDC客户=最优跳板"]
  ], { colW: [2,7] });
  source(s, "SEC: sources/sec/oem/VRT/submissions_2026-05-09.json, sources/sec/oem/VRT/submissions_2026-05-09.json | sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-06-global-liquid-cooling-market-173b-usd.md | sources/reports/industry_液冷/05_液冷市场_行业综述/[2025-08-17] 国信证券 - 通信行业周报2025年第33周：液冷呈现高景气度，运营商2025上半年业绩稳健增长.pdf | CAGR/TAM为【估算】 | 📐铁律⑩索引");
  footer(s); badge(s, "74"); }
module.exports = { createSlide };
