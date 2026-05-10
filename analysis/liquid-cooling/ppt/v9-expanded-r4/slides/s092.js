const { badge, topBar, footer, title, dataTable, source } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s);
  title(s, "组织能力建设：液冷团队规划");
  dataTable(s, ["岗位","2026","2027","2028","背景"], [
    ["热设计","3人","5人","8人","热管理/航空/汽车"],
    ["机械设计","2人","3人","5人","精密制造/CNC"],
    ["制造","5人","8人","12人","焊接/氦检/组装"],
    ["测试","2人","3人","5人","热性能/耐久/IP等级"],
    ["认证","1人","2人","3人","Intel/NVIDIA/OCP"],
    ["销售","2人","4人","6人","OEM/DC行业"],
    ["合计","15人","25人","39人","—"],
  ], { y: 0.65, colW: [1.2,0.9,0.9,0.9,2] });
  source(s, "人才对标: sources/sec/oem/VRT/submissions_2026-05-09.json, sources/sec/oem/VRT/VRT-10-K_2026-02-13.md026-02-13.md → Vertiv全球员工~27K人 R&D占总人数~8% | 国金证券 2025-08-21 → 液冷导热散热材料人才需求突显 | 东吴证券 2025-09-02 → 端侧AI微泵液冷关注艾为/南芯(人才竞争) | 海悟人力规划 → 2026=15人→2028=39人(轻资产策略) | 📐铁律⑩");
  badge(s, "92");
}
module.exports = { createSlide };
