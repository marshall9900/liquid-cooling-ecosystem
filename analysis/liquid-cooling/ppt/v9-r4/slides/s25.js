const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, source } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "IDC运营方采购特征与海悟进入路径");
  s.addShape("rect", { x: 0.5, y: 0.85, w: 0.05, h: 0.9, fill: { color: t.primary } });
  s.addText("CDU", { x: 0.8, y: 0.85+0.02, w: 8.5, h: 0.28, fontSize: 12, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
  s.addText("IDC运营方拥有CDU完整自主决策权。规格100-150kW/台。招标关键: 变频效率/冗余/售后/价格。海悟温控基因+IDC客户基础→P1远期参与。不做价格战→标准化+服务差异化", { x: 0.8, y: 0.85+0.3, w: 8.5, h: 0.6, fontSize: 10, fontFace: "Microsoft YaHei", color: "555555" });
  s.addShape("rect", { x: 0.5, y: 1.9, w: 0.05, h: 0.9, fill: { color: t.primary } });
  s.addText("Manifold", { x: 0.8, y: 1.9+0.02, w: 8.5, h: 0.28, fontSize: 12, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
  s.addText("IDC运营方同样拥有Manifold自主决策权。招标关键: 制造品质/兼容性/交期/价格。无强制认证→海悟P0送样→通过IDC间接覆盖其客户(OEM/OTT)", { x: 0.8, y: 1.9+0.3, w: 8.5, h: 0.6, fontSize: 10, fontFace: "Microsoft YaHei", color: "555555" });
  s.addShape("rect", { x: 0.5, y: 2.95, w: 0.05, h: 0.9, fill: { color: t.primary } });
  s.addText("冷板", { x: 0.8, y: 2.95+0.02, w: 8.5, h: 0.28, fontSize: 12, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
  s.addText("由GPU厂家推荐+OEM选定。IDC运营方一般不直接选冷板。海悟→需过OEM认证才能进入→P1", { x: 0.8, y: 2.95+0.3, w: 8.5, h: 0.6, fontSize: 10, fontFace: "Microsoft YaHei", color: "555555" });
  s.addShape("rect", { x: 0.5, y: 4, w: 0.05, h: 0.9, fill: { color: t.primary } });
  s.addText("关键差异", { x: 0.8, y: 4+0.02, w: 8.5, h: 0.28, fontSize: 12, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
  s.addText("OTT自建DC: 自主决策CDU/Manifold(直接招标)。运营商DC: 国资采购+国产化偏好。第三方IDC: 客户(OEM/OTT)影响大→先打入OEM(H3C/浪潮)再通过IDC拓量", { x: 0.8, y: 4+0.3, w: 8.5, h: 0.6, fontSize: 10, fontFace: "Microsoft YaHei", color: "555555" });
  source(s, "数据来源：\\n• sources/wechat/2026-05-07-bytedance-alibaba-idc-procurement-2026.md → 字节/阿里IDC采购 (秦淮/数据港)\\n• sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md → OTT GPU CAPEX\\n• sources/wechat/2026-05-07-google-liquid-cooling-supply-chain.md → Google液冷供应链 (IDC运营参考)\\n• sources/eastmoney/ (666篇研报归档) → 东方财富研报 IDC板块\\n• 【估算】基于公开数据推算，标记为估算: IDC运营方CDU/Manifold自主决策权≠GPU绑定");
  badge(s, "25");
}
module.exports = { createSlide };
