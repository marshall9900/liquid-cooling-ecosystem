const { badge, topBar, footer, title, source } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s);
  title(s, "定战略：专业热管理零部件供应商");
  const items = [
    { label: "战略定位", text: "海悟定位:专业热管理零部件供应商->非OEM竞争对手(合作供应视角)->非系统集成商(组件为王)->双线独立:国内线+海外线" },
    { label: "P0双轮(2026)", text: "Manifold低壁垒出量(¥50M)->电源冷板蓝海空白(先发)->内存冷板差异化->搭售快接头->建立OEM客户信任" },
    { label: "P1储备(2027-2028)", text: "Intel UQD+CPU冷板->国产GPU冷板->快接头量产->搭售CDU->客户加深绑定" },
    { label: "P2远期(2029-2030)", text: "NVIDIA认证->全栈冷板->CDU差异化->海外ODM->国内第二/全球可选供应商" },
  ];
  items.forEach((it, i) => {
    const y = 0.65 + i * 0.95;
    s.addShape("rect", { x: 0.5, y, w: 0.05, h: 0.82, fill: { color: '1F497D' } });
    s.addText(it.label, { x: 0.8, y: y + 0.02, w: 8.5, h: 0.26, fontSize: 12, fontFace: "Microsoft YaHei", color: '1F497D', bold: true });
    s.addText(it.text, { x: 0.8, y: y + 0.28, w: 8.5, h: 0.54, fontSize: 9, fontFace: "Microsoft YaHei", color: '555555' });
  });
  source(s, "竞品对标: sources/sec/oem/VRT/submissions_2026-05-09.json, sources/sec/oem/VRT/VRT-10-K_2026-02-13.md026-02-13.md (FY2025营收$20.1B 液冷订单+60%yoy) | sources/sec/oem/VRT/submissions_2026-05-09.json, sources/sec/oem/NVENT/submissions_2026-05-09.json (FY2025 Thermal Management营收$3.2B) | sources/sec/oem/VRT/submissions_2026-05-09.json, sources/sec/oem/SMCI/submissions_2026-05-09.json (FY2025营收$23.5B GPU服务器液冷标配) | sources/sec/oem/VRT/submissions_2026-05-09.json, sources/sec/oem/DELL/submissions_2026-05-09.json (FY2026 Q1 ISG营收$11.3B) | 海悟战略路径: P71-P82全部源文件汇总 | 📐五看三定框架_铁律⑩索引");
  badge(s, "83");
}
module.exports = { createSlide };
