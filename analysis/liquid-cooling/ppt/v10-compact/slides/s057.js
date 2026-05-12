const { badge, topBar, footer, title, dataTable, source } = require('./_h');
function createSlide(p) { const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s);
  title(s, "供需平衡全景：7大组件产能vs需求缺口");
  dataTable(s, ["组件","2026E需求","国内产能","缺口(%)","原因","海悟"], [
    ["GPU冷板","50-80万片","20-30万","~60%","NV认证","P2"],
    ["CPU冷板","80-120万","30-50万","~60%","Intel UQD","P1"],
    ["电源冷板★","10-20万","几乎为0","~100%","全新需求","P0"],
    ["CDU","2K-4K台","1.2K-2.5K","~35%","扩产周期","P2"],
    ["Manifold","10K-15K套","5K-8K","~40%","加工产能","P0"],
    ["快接头","300-600万","30-60万","~85%","Staubli垄断","P1"]
  ], { colW: [1.2,1.3,1.2,0.9,1.3,1.2] });
  source(s, "sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-06-super-node-insight.md | 2026-05-07-gb300-liquid-cooling-domestic-breakthrough.md | 2026-05-06-global-liquid-cooling-market-173b-usd.md | sources/reports/industry_液冷/05_液冷市场_行业综述/[2025-08-17] 国信证券 - 通信行业周报2025年第33周：液冷呈现高景气度，运营商2025上半年业绩稳健增长.pdf | 供需为【估算】 | 电源冷板100%缺口+快接头85%+Manifold40%=海悟3大零赛道 | 📐铁律⑩索引");
  footer(s); badge(s, "77"); }
module.exports = { createSlide };
