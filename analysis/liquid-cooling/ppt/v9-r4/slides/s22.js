const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, source } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "OEM机柜级液冷具体要求与海悟产品准入");
  s.addShape("rect", { x: 0.5, y: 0.85, w: 0.05, h: 0.9, fill: { color: t.primary } });
  s.addText("GPU冷板", { x: 0.8, y: 0.85+0.02, w: 8.5, h: 0.28, fontSize: 12, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
  s.addText("NVIDIA COOLER-SPEC-002认证必须，仅CoolIT/AVC/nVent三家。新进入者: 热设计仿真→原型→NVIDIA测试→认证(12-18月)。国产GPU(寒武纪/海光)流程类似但可行度高(+30%难度)", { x: 0.8, y: 0.85+0.3, w: 8.5, h: 0.6, fontSize: 10, fontFace: "Microsoft YaHei", color: "555555" });
  s.addShape("rect", { x: 0.5, y: 1.9, w: 0.05, h: 0.9, fill: { color: t.primary } });
  s.addText("CPU冷板", { x: 0.8, y: 1.9+0.02, w: 8.5, h: 0.28, fontSize: 12, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
  s.addText("Intel UQD认证为核心门槛。OCP Cold Plate v3兼容。超节点CPU水冷需求大。海悟P1: 2026Q2启动认证→2028H1预计通过", { x: 0.8, y: 1.9+0.3, w: 8.5, h: 0.6, fontSize: 10, fontFace: "Microsoft YaHei", color: "555555" });
  s.addShape("rect", { x: 0.5, y: 2.95, w: 0.05, h: 0.9, fill: { color: t.primary } });
  s.addText("CDU", { x: 0.8, y: 2.95+0.02, w: 8.5, h: 0.28, fontSize: 12, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
  s.addText("OEM不做CDU自制→外购集成。100-150kW需求最大。变频泵+液-液换热优先。国内英维克/维谛主导→海悟P2远期差异化", { x: 0.8, y: 2.95+0.3, w: 8.5, h: 0.6, fontSize: 10, fontFace: "Microsoft YaHei", color: "555555" });
  s.addShape("rect", { x: 0.5, y: 4, w: 0.05, h: 0.9, fill: { color: t.primary } });
  s.addText("Manifold", { x: 0.8, y: 4+0.02, w: 8.5, h: 0.28, fontSize: 12, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
  s.addText("OEM不做Manifold自制→外购。无强制认证(比冷板低很多)。制造+品质+交期+服务。海悟已M基础→送样H3C/浪潮/宁畅→2026 ¥50M", { x: 0.8, y: 4+0.3, w: 8.5, h: 0.6, fontSize: 10, fontFace: "Microsoft YaHei", color: "555555" });
  source(s, "数据来源：\\n• NVIDIA官网 COOLER-SPEC-002+NVL72认证列表\\n• Intel官网 UQD Certification Requirements\\n• OCP Cold Plate v3 Specification\\n• sources/wechat/2026-05-06-super-node-insight.md → 超节点方案\\n• sources/wechat/2026-05-07-gb300-liquid-cooling-domestic-breakthrough.md → GB300液冷国产化\\n• sources/eastmoney/ (666篇研报归档) → 东方财富研报 OEM采购");
  badge(s, "22");
}
module.exports = { createSlide };
