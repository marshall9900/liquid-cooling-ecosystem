const { badge, topBar, footer, title, dataTable, source } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s);
  title(s, "战略执行路线图 (2026-2030全景)");
  dataTable(s, ["年度","Manifold","电源冷板","CPU冷板","快接头","CDU","海外"], [
    ["2026","送样¥50M","立项+专利","—","—","—","—"],
    ["2027","批量¥100M","POC+OEM送样","Intel UQD","搭售研发","—","—"],
    ["2028","成熟¥100M","规模¥120M","认证¥80M","量产¥40M","F/S","ODM¥50M"],
    ["2029","扩展¥120M","增长¥180M","增长¥150M","增长¥70M","POC","增长¥100M"],
    ["2030","现金牛¥150M","爆炸¥250M","主力¥250M","¥100M","¥150M","¥150M"],
  ], { y: 0.65, colW: [0.9,1.1,1.1,1.1,1.1,1.1,1.1] });
  source(s, "路线图依据: P84三年营收拆解 | P88 2026KPI | P89 2030愿景 | P90 OEM准入 | P85三路并行 | 华源证券 2025-11-28 → 26H1液冷订单确定性较高 | 📐2026 Manifold单线→2030全线6品类¥1B 阶段:送样(2026)→批量(2027)→全栈(2028-2030)");
  badge(s, "99");
}
module.exports = { createSlide };
