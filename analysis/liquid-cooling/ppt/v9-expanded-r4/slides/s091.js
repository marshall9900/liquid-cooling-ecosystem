const { badge, topBar, footer, title, dataTable, source } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s);
  title(s, "市场营销策略与品牌建设");
  dataTable(s, ["维度","策略"], [
    ["品牌定位","海悟=国产液冷组件专家(冷板/Manifold/CDU/快接头)"],
    ["展会","ODCC 2026(北京)/OCP Summit 2026/Computex 2026"],
    ["白皮书","海悟液冷组件白皮书(2026)->技术博客->开源设计(Manifold)"],
    ["客户推荐","H3C/浪潮POC成功=标杆案例->复用到更广OEM/IDC"],
    ["数字营销","LinkedIn+CNKI+行业媒体 目标:2026 10篇技术文章"],
  ], { y: 0.65, colW: [1.5,7.5] });
  source(s, "竞品对标: sources/sec/oem/VRT/submissions_2026-05-09.json, sources/sec/oem/VRT/VRT-10-K_2026-02-13.md026-02-13.md → Vertiv FY2025 SG&A $2.8B(品牌投入) | 国信证券 2026-01-21 → 液冷板块关注度提升 行业展会密集 | 海悟营销规划 → 品牌定位国产液冷组件专家 3年品牌建设计划 | 📐铁律⑩索引");
  badge(s, "91");
}
module.exports = { createSlide };
