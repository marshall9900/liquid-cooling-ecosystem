const { badge, topBar, footer, title, dataTable, source } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s);
  title(s, "财务模型：营收/成本/利润(2026-2030)");
  dataTable(s, ["(¥M)","2026","2027","2028","2030"], [
    ["营收","50","250","400","1,000"],
    ["COGS","40","188","290","700"],
    ["毛利(%,%)","20%","25%","27.5%","30%"],
    ["研发","3","15","28","80"],
    ["销售","2","10","20","50"],
    ["净利","-2","12","32","120"],
    ["利润率","-4%","4.8%","8%","12%"],
  ], { y: 0.65, colW: [1.5,1.5,1.5,1.5,1.5] });
  source(s, "TAM验证: 国信证券 2025-09-29 → 液冷温控2030年全球TAM $50B(¥350B) CAGR 50%+ | 山西证券 2024-05-14 → 国产液冷全链条2030E ¥200B | sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-06-global-liquid-cooling-market-173b-usd.md → 全球液冷市场规模2030E $173B | 海悟财务规划: CAGR 112%→¥1B(2030)对应SOM 0.5%→保守可获取 | 📐铁律⑩索引");
  badge(s, "94");
}
module.exports = { createSlide };
