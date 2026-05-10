const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, source } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "外企 vs 国产化全面对比 & 产业链结构");
  s.addShape("rect", { x: 0.5, y: 0.85, w: 0.05, h: 0.9, fill: { color: t.primary } });
  s.addText("冷板", { x: 0.8, y: 0.85+0.02, w: 8.5, h: 0.28, fontSize: 12, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
  s.addText("外企(CoolIT/AVC/nVent)→NVIDIA认证一供(¥8-12K/片)。国产→2027-2028认证，双供(-30%价)。海悟→2028认证后进入", { x: 0.8, y: 0.85+0.3, w: 8.5, h: 0.6, fontSize: 10, fontFace: "Microsoft YaHei", color: "555555" });
  s.addShape("rect", { x: 0.5, y: 1.9, w: 0.05, h: 0.9, fill: { color: t.primary } });
  s.addText("CDU", { x: 0.8, y: 1.9+0.02, w: 8.5, h: 0.28, fontSize: 12, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
  s.addText("外企(Vertiv/Schneider)→¥120K-150K。国产→¥80K-100K。技术差距1-2年→海悟2029+加入(标准化+本土化)", { x: 0.8, y: 1.9+0.3, w: 8.5, h: 0.6, fontSize: 10, fontFace: "Microsoft YaHei", color: "555555" });
  s.addShape("rect", { x: 0.5, y: 2.95, w: 0.05, h: 0.9, fill: { color: t.primary } });
  s.addText("快接头", { x: 0.8, y: 2.95+0.02, w: 8.5, h: 0.28, fontSize: 12, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
  s.addText("Staubli(¥30-80,72%)→Parker(10%)→Eaton(8%)→国产<5%。需(1)密封专利绕过(2)耐久≥30K(3)OEM送样→窗口2026-2028", { x: 0.8, y: 2.95+0.3, w: 8.5, h: 0.6, fontSize: 10, fontFace: "Microsoft YaHei", color: "555555" });
  s.addShape("rect", { x: 0.5, y: 4, w: 0.05, h: 0.9, fill: { color: t.primary } });
  s.addText("海悟最优卡位", { x: 0.8, y: 4+0.02, w: 8.5, h: 0.28, fontSize: 12, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
  s.addText("Manifold(壁垒低→出量¥50M)→电源冷板(100%空白→蓝海)→CPU冷板(Intel UQD→主力)→快接头(搭售)→CDU(远期)", { x: 0.8, y: 4+0.3, w: 8.5, h: 0.6, fontSize: 10, fontFace: "Microsoft YaHei", color: "555555" });
  source(s, "数据来源：\\n• NVIDIA官网 认证列表 + OCP冷板规范\\n• SEC EDGAR: CoolIT/AVC/Vertiv/Schneider 年报\\n• Staubli官网 + sources/wechat/2026-05-07-gb300-liquid-cooling-domestic-breakthrough.md GB300国产化\\n• sources/eastmoney/ + sources/rss/2026-05-09/ → 行业数据\\n• 【估算】基于公开数据推算，标记为估算: 价格/份额为行业估测");
  badge(s, "35");
}
module.exports = { createSlide };
