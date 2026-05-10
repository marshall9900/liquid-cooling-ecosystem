const { badge, topBar, footer, title, dataTable, source } = require('./_h');
function createSlide(p) { const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s);
  title(s, "快接头：Staubli 72%垄断突破路径");
  dataTable(s, ["维度","详情"], [
    ["全球份额","72%(快接头市场寡头)"],
    ["核心技术","USP密封结构专利→设计模仿困难; ≥50万次插拔"],
    ["利润结构","单价$20-80/个 毛利率60%+"],
    ["国产替代","国产<5%→技术差距缩小→窗口2026-2028"],
    ["海悟路线","P1搭售Manifold→触发交期>12周=替代信号"]
  ], { colW: [2,7] });
  source(s, "Staubli官网管路快接头产品页 | Google Patents → Staubli USP密封结构专利号搜索 | 开源证券 2025-12-19 → 液冷国产替代超预期(快接头国产化率<5%) | sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-06-super-node-insight.md → 快接头交期>12周+涨价→国产替代窗口2026-2028 | 📐铁律⑩索引");
  footer(s); badge(s, "76"); }
module.exports = { createSlide };
