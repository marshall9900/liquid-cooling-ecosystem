const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, source } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "定策略：三路并行 + 四个阶段");
  s.addShape("rect", { x: 0.5, y: 0.85, w: 0.05, h: 0.9, fill: { color: t.primary } });
  s.addText("直接路径(2026)", { x: 0.8, y: 0.85+0.02, w: 8.5, h: 0.28, fontSize: 12, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
  s.addText("Manifold送样→H3C/浪潮/宁畅→小批量→框架协议。渠道最短，验证最快。目标：2026年内一家正式框架协议", { x: 0.8, y: 0.85+0.3, w: 8.5, h: 0.6, fontSize: 10, fontFace: "Microsoft YaHei", color: "555555" });
  s.addShape("rect", { x: 0.5, y: 1.9, w: 0.05, h: 0.9, fill: { color: t.primary } });
  s.addText("间接路径(2027)", { x: 0.8, y: 1.9+0.02, w: 8.5, h: 0.28, fontSize: 12, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
  s.addText("秦淮(字节通道)→数据港(阿里通道)→华勤/富士康(ODM)→CDU/Manifold招标。借IDC/ODM避开OEM认证", { x: 0.8, y: 1.9+0.3, w: 8.5, h: 0.6, fontSize: 10, fontFace: "Microsoft YaHei", color: "555555" });
  s.addShape("rect", { x: 0.5, y: 2.95, w: 0.05, h: 0.9, fill: { color: t.primary } });
  s.addText("认证路径(2027-2028)", { x: 0.8, y: 2.95+0.02, w: 8.5, h: 0.28, fontSize: 12, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
  s.addText("Intel UQD(2026Q2启动)→阿里液冷→NVIDIA(2028)→OCP。从外围打入核心认证供应商圈", { x: 0.8, y: 2.95+0.3, w: 8.5, h: 0.6, fontSize: 10, fontFace: "Microsoft YaHei", color: "555555" });
  s.addShape("rect", { x: 0.5, y: 4, w: 0.05, h: 0.9, fill: { color: t.primary } });
  s.addText("产品路线图", { x: 0.8, y: 4+0.02, w: 8.5, h: 0.28, fontSize: 12, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
  s.addText("Manifold出量(2026)→电源冷板爆量(2027Q3)→CPU冷板(2028H1)→快接头量产(2028)→CDU(2029+)→全栈(2030)", { x: 0.8, y: 4+0.3, w: 8.5, h: 0.6, fontSize: 10, fontFace: "Microsoft YaHei", color: "555555" });
  source(s, "P50 定策略\\n来源：五看三定v5 + 全部分析\\n三路并行：直接(OEM)→间接(IDC)→认证(Intel/NVIDIA)");
  badge(s, "50");
}
module.exports = { createSlide };
