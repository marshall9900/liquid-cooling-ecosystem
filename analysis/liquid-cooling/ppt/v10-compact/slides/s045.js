const { badge, topBar, footer, title, dataTable, source } = require('./_h');
function createSlide(p) { const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s);
  title(s, "液冷供应链地图：上游关键物料");
  dataTable(s, ["物料","用途","主要供应","国产替代","约束"], [
    ["铝板6061","冷板本体","中铝/南山","充足","无"],
    ["密封件","冷板密封","进口(3M/Parker)","国产<30%","关键"],
    ["泵(磁力)","CDU","Grundfos/Iwaki","国产<20%","关键"],
    ["不锈钢接头","快接头","进口(Ti)","国产<15%","专利"]
  ], { colW: [1.2,1,1.3,1,0.9] });
  source(s, '国金证券2025-11-03→3D打印液冷板→微通道+铲齿式占主流 | sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-google-liquid-cooling-supply-chain.md → EPDM软管+陶瓷轴承泵+0.2μm过滤器 | sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-gb300-liquid-cooling-domestic-breakthrough.md → UQD 2.0标准 | 📐铁律⑩索引');
  footer(s); badge(s, "62"); }
module.exports = { createSlide };
