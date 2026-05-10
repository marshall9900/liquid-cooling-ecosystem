const { badge, topBar, footer, title, dataTable, source } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s);
  title(s, "目标拆解：2030愿景与路径");
  dataTable(s, ["指标","2026","2027","2028","2030"], [
    ["营收(¥M)","50","250","400","1,000"],
    ["客户数","3(OEM)","5","8","15+"],
    ["认证","—","—","Intel UQD","Intel UQD+NVIDIA+OCP"],
    ["产品线","1(Manifold)","3(+电源+内存)","5(+CPU+接头)","7(+CDU+GPU)"],
    ["海外","—","—","ODM起步","自有海外渠道"],
    ["估值锚","¥100M","¥1B","¥2B","¥5B(P/S 5x)"],
  ], { y: 0.65, colW: [1.3,1.3,1.3,1.3,1.3] });
  source(s, "估值对标: sources/sec/oem/VRT/submissions_2026-05-09.json, sources/sec/oem/VRT/VRT-10-K_2026-02-13.md026-02-13.md → Vertiv P/S ~2.7x(市值~$55B) | 英维克(002837) 2024年报 → 市值¥40B+ P/S ~8x | 海悟战略规划 → 2030E ¥1B营收×5x P/S=¥5B(保守:参考Vertiv估值倍数) | 📐铁律⑩");
  badge(s, "89");
}
module.exports = { createSlide };
