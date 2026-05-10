const { badge, topBar, footer, title, dataTable, source } = require('./_h');
function createSlide(p) { const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s);
  title(s, "电源冷板：TAM ¥0.5B→¥39B 蓝海");
  dataTable(s, ["指标","2026","2027","2028","2030"], [
    ["单柜数量","36片+","50片+","80片+","120片+"],
    ["ASP(¥)","400-800","350-700","300-600","250-500"],
    ["需求(万片)","10-20","50-100","200-500","800-1,500"],
    ["TAM(¥B)","0.5-1","1.5-3","6-15","20-39"],
    ["国内供方","空白","空白","空白","空白"],
    ["海悟(¥M)","立项","100","200","400"]
  ], { colW: [1.3,1.3,1.3,1.3,1.3] });
  source(s, "sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-06-super-node-insight.md → 超节点 | sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-gb300-liquid-cooling-domestic-breakthrough.md GB300 800V PSU | sources/reports/industry_液冷/05_液冷市场_行业综述/[2025-08-17] 国信证券 - 通信行业周报2025年第33周：液冷呈现高景气度，运营商2025上半年业绩稳健增长.pdf | TAM=单柜数×ASP×机柜数。2030:120片×¥350×10万柜=¥39B+【估算】 | 📐铁律⑩索引+⑪推算公式");
  footer(s); badge(s, "72"); }
module.exports = { createSlide };
