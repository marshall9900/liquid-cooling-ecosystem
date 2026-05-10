const t = require('./theme');
const { badge, topBar, footer, title, source, bulletList } = require('./_h');
function createSlide(p) { const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s);
  title(s, "外企vs国产化全面对比与产业链结构");
  bulletList(s, [
    { title: "冷板", text: "外企(CoolIT/AVC/nVent)→NVIDIA认证一供(¥8-12K/片)。国产→2027-2028认证双供(-30%价)。海悟→2028认证后进入", color: t.primary },
    { title: "CDU", text: "外企(Vertiv/Schneider)→¥120K-150K。国产→¥80K-100K。技术差距1-2年→海悟2029+加入(标准化+本土化)", color: t.primary },
    { title: "快接头", text: "Staubli(72%)→Parker(10%)→Eaton(8%)→国产<5%。密封专利绕过+耐久≥30K+OEM送样→窗口2026-2028", color: t.primary },
    { title: "海悟最优卡位", text: "Manifold(壁垒低→出量¥50M)→电源冷板(100%空白→蓝海)→CPU冷板(Intel UQD→主力)→快接头(搭售)→CDU(远期)", color: t.primary }
  ]);
  source(s, "NVIDIA认证 | SEC: sources/sec/oem/VRT/submissions_2026-05-09.json, sources/sec/oem/VRT/submissions_2026-05-09.json | sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-gb300-liquid-cooling-domestic-breakthrough.md | sources/reports/industry_液冷/05_液冷市场_行业综述/[2025-08-17] 国信证券 - 通信行业周报2025年第33周：液冷呈现高景气度，运营商2025上半年业绩稳健增长.pdf | 📐铁律⑩索引");
  footer(s); badge(s, "65"); }
module.exports = { createSlide };
