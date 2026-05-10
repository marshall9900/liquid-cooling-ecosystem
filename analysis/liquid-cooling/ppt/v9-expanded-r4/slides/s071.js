const { badge, topBar, footer, title, dataTable, source } = require('./_h');
function createSlide(p) { const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s);
  title(s, "GPU冷板：NVIDIA认证壁垒 + 国产GPU窗口");
  dataTable(s, ["指标","数据"], [
    ["TAM 2026E","全球$5-8B，中国¥5-8B"],
    ["出货","全球~400万片，中国~50-80万片"],
    ["ASP","NV冷板¥2K-3K vs 国产¥600-1.2K"],
    ["NV认证","COOLER-SPEC-002→12-18月→仅3家"],
    ["国产窗口","寒武纪/海光/平头哥→认证宽松(+30%)"],
    ["海悟","P2(2027-2028)→先Manifold再推冷板"]
  ], { colW: [2.5,6.5] });
  source(s, "NVIDIA官网COOLER-SPEC-002 | sources/GPU对比表格-精确修正.csv | sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-gb300-liquid-cooling-domestic-breakthrough.md | ASP/出货为【估算】 | 📐铁律⑩索引");
  footer(s); badge(s, "71"); }
module.exports = { createSlide };
