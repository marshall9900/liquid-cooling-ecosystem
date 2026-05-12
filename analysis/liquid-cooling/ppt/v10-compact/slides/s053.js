const { badge, topBar, footer, title, dataTable, source } = require('./_h');
function createSlide(p) { const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s);
  title(s, "CPU冷板 + 内存冷板：TAM合并¥6-8B");
  dataTable(s, ["类型","TAM 2026E","ASP","渗透率","缺口","海悟(2030)"], [
    ["CPU冷板","¥3-5B","¥600-1,200","0→30%","60%","~¥250M"],
    ["内存冷板","¥0.3-0.5B","¥200-400","5→40%","~70%","~¥100M"],
    ["光模块","新兴","—","—","—","远期"],
    ["存储","新兴","—","—","—","远期"]
  ], { colW: [1.3,1.2,1.2,1,0.8,1.3] });
  source(s, "OCP Cold Plate v3 | Intel UQD | sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-06-super-node-insight.md | sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-gb300-liquid-cooling-domestic-breakthrough.md | sources/reports/industry_液冷/05_液冷市场_行业综述/[2025-08-17] 国信证券 - 通信行业周报2025年第33周：液冷呈现高景气度，运营商2025上半年业绩稳健增长.pdf | TAM/渗透率为【估算】 | 📐铁律⑩索引");
  footer(s); badge(s, "73"); }
module.exports = { createSlide };
