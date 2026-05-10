const { badge, topBar, footer, title, dataTable, source } = require('./_h');
function createSlide(p) { const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s);
  title(s, "Manifold：低壁垒出量 P0主战场");
  dataTable(s, ["指标","数据"], [
    ["TAM","¥3B→¥25B，CAGR 70%+"],
    ["ASP","¥4K-12K/套(8-16套/柜)"],
    ["出货","10K-15K→80K-100K套"],
    ["竞争","英维克/高澜/同飞/申菱→≤15%"],
    ["壁垒","制造(焊接/洁净/氦检)→无认证！"],
    ["海悟","送样H3C/浪潮/宁畅→2026 ¥50M"],
    ["行动","送样+框架(2026Q1)→小批(2027H1)→独供(2028+)"]
  ], { colW: [2,7] });
  source(s, "sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-06-super-node-insight.md | sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-gb300-liquid-cooling-domestic-breakthrough.md | sources/液冷客户表.ods | sources/reports/industry_液冷/05_液冷市场_行业综述/[2025-08-17] 国信证券 - 通信行业周报2025年第33周：液冷呈现高景气度，运营商2025上半年业绩稳健增长.pdf | 最佳P0→送样→批量化 | 📐铁律⑩索引");
  footer(s); badge(s, "75"); }
module.exports = { createSlide };
