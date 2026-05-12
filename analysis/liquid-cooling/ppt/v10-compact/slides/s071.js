const { badge, topBar, footer, title, dataTable, source } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s);
  title(s, "CAPEX与投资计划");
  dataTable(s, ["投资项","2026(¥M)","2027","2028","说明"], [
    ["液冷测试台","0.2","0.3","0.5","热性能+耐久+IP等级"],
    ["洁净车间","0.5","1.0","2.0","焊接+氦检+组装"],
    ["CNC/加工","—","2.0","3.0","冷板/Manifold自产"],
    ["研发(专利)","0.3","0.5","1.0","快接头/密封件/工艺"],
    ["认证","0.2","0.5","1.0","Intel/NVIDIA/OCP"],
    ["合计","1.2","4.3","7.5","累计¥13M(2026-2028)"],
  ], { y: 0.65, colW: [1.5,1.3,1.3,1.3,2] });
  source(s, "竞品CAPEX对标: sources/sec/oem/VRT/submissions_2026-05-09.json, sources/sec/oem/VRT/VRT-10-K_2026-02-13.md026-02-13.md → Vertiv FY2025 CapEx $350M(含液冷扩产) | sources/sec/oem/VRT/submissions_2026-05-09.json, sources/sec/oem/NVENT/submissions_2026-05-09.json → nVent FY2025 CapEx ~$120M | 英维克 2024年报 → 单年研发投入¥50M+ | 海悟投资规划 → 3年CAPEX ¥13M(轻资产策略:外包CNC/聚焦组装检测) | 📐铁律⑩索引");
  badge(s, "93");
}
module.exports = { createSlide };
