const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, source } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "OTT液冷决策链：谁决定买什么？");
  s.addShape("rect", { x: 0.5, y: 0.85, w: 0.05, h: 0.9, fill: { color: t.primary } });
  s.addText("GPU选择（定冷板）", { x: 0.8, y: 0.85+0.02, w: 8.5, h: 0.28, fontSize: 12, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
  s.addText("NVIDIA GPU→CoolIT/AVC冷板被锁；昇腾→超聚变/浪潮冷板；自研GPU→开放招标。海悟定位：通过OEM认证→争取NVIDIA/Intel认证。", { x: 0.8, y: 0.85+0.3, w: 8.5, h: 0.6, fontSize: 10, fontFace: "Microsoft YaHei", color: "555555" });
  s.addShape("rect", { x: 0.5, y: 1.9, w: 0.05, h: 0.9, fill: { color: t.primary } });
  s.addText("OEM采购（选组件）", { x: 0.8, y: 1.9+0.02, w: 8.5, h: 0.28, fontSize: 12, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
  s.addText("阿里/字节/腾讯通过H3C/浪潮/宁畅采购服务器→OEM决定液冷品牌。海悟←打入H3C/浪潮→间接进入OTT。", { x: 0.8, y: 1.9+0.3, w: 8.5, h: 0.6, fontSize: 10, fontFace: "Microsoft YaHei", color: "555555" });
  s.addShape("rect", { x: 0.5, y: 2.95, w: 0.05, h: 0.9, fill: { color: t.primary } });
  s.addText("OTT自主（定CDU/Manifold）", { x: 0.8, y: 2.95+0.02, w: 8.5, h: 0.28, fontSize: 12, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
  s.addText("CDU/Manifold→OTT自主招标(非GPU绑定)；冷板→GPU+OEM推荐。海悟→Manifold先行→CDU远期搭售。", { x: 0.8, y: 2.95+0.3, w: 8.5, h: 0.6, fontSize: 10, fontFace: "Microsoft YaHei", color: "555555" });
  s.addShape("rect", { x: 0.5, y: 4, w: 0.05, h: 0.9, fill: { color: t.primary } });
  s.addText("核心发现", { x: 0.8, y: 4+0.02, w: 8.5, h: 0.28, fontSize: 12, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
  s.addText("CDU/Manifold赛道不绑定GPU→海悟可直接参与投标；冷板必须通过OEM认证→先Manifold破冰建立关系再推冷板。", { x: 0.8, y: 4+0.3, w: 8.5, h: 0.6, fontSize: 10, fontFace: "Microsoft YaHei", color: "555555" });
  source(s, "数据来源：\\n• sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md → OTT/GPU/OEM决策链分析\\n• sources/wechat/2026-05-06-ali-ppu-chip-overview.md → 阿里自研芯片+液冷策略\\n• sources/wechat/2026-05-07-bytedance-alibaba-idc-procurement-2026.md → 字节IDC采购\\n• sources/wechat/2026-05-07-google-liquid-cooling-supply-chain.md → Google液冷供应链\\n• sources/eastmoney/ (666篇研报归档) + sources/rss/2026-05-09/ → 决策链补充信息");
  badge(s, "12");
}
module.exports = { createSlide };
