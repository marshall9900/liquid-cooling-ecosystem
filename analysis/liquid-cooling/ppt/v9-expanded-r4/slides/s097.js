const { badge, topBar, footer, title, dataTable, source } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s);
  title(s, "投资回报：¥13M CAPEX vs ¥1B SOM");
  dataTable(s, ["指标","数值"], [
    ["3年CAPEX(2026-2028)","¥13M"],
    ["5年营收(2026-2030累计)","¥1,750M"],
    ["5年净利(累计)","¥162M"],
    ["ROI","12.5x (净利/CAPEX)"],
    ["累计现金流(2030)","¥85M(运营现金流)"],
    ["估值(2030, P/S 5x)","¥5B"],
    ["估值/CAPEX","385x"],
  ], { y: 0.65, colW: [3,6] });
  source(s, "ROI对标: sources/sec/oem/VRT/submissions_2026-05-09.json, sources/sec/oem/VRT/VRT-10-K_2026-02-13.md026-02-13.md → Vertiv FY2025营收$20.1B P/B 15x市值~$55B | sources/sec/oem/VRT/submissions_2026-05-09.json, sources/sec/oem/NVENT/submissions_2026-05-09.json → nVent FY2025营收$3.2B P/B 3x | 海悟P93-P94汇总 → CAPEX¥13M→¥5B估值(2030)=385x (高回报来自空白市场先发+轻资产模式) | 📐铁律⑩索引");
  badge(s, "97");
}
module.exports = { createSlide };
