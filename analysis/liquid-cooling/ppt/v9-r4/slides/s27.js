const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, source } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "二看小结：需求侧核心结论 & 优先级客户排序");
  s.addShape("rect", { x: 0.5, y: 0.85, w: 0.05, h: 0.9, fill: { color: t.primary } });
  s.addText("① 5家核心OTT", { x: 0.8, y: 0.85+0.02, w: 8.5, h: 0.28, fontSize: 12, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
  s.addText("阿里/字节/腾讯 > 快手 > 百度。前三占AI CAPEX 75%。CDU/Manifold自主招标≠GPU绑定。海悟P0: Manifold送样H3C/浪潮(间接进入OTT)", { x: 0.8, y: 0.85+0.3, w: 8.5, h: 0.6, fontSize: 10, fontFace: "Microsoft YaHei", color: "555555" });
  s.addShape("rect", { x: 0.5, y: 1.9, w: 0.05, h: 0.9, fill: { color: t.primary } });
  s.addText("② GPU-OEM映射清晰", { x: 0.8, y: 1.9+0.02, w: 8.5, h: 0.28, fontSize: 12, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
  s.addText("昇腾(超聚变/浪潮)→寒武纪/海光(曙光)→平头哥(阿里)。国产GPU 340万卡。液冷采购¥2.5-5.2B。生态开放度: 寒武纪/海光>昇腾", { x: 0.8, y: 1.9+0.3, w: 8.5, h: 0.6, fontSize: 10, fontFace: "Microsoft YaHei", color: "555555" });
  s.addShape("rect", { x: 0.5, y: 2.95, w: 0.05, h: 0.9, fill: { color: t.primary } });
  s.addText("③ OEM掌握组件选择权", { x: 0.8, y: 2.95+0.02, w: 8.5, h: 0.28, fontSize: 12, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
  s.addText("H3C+浪潮+宁畅=57%OEM份额+均已接触。Manifold/CDU外购≠OEM自制。P0: 三家送样Manifold(¥50M/2026)", { x: 0.8, y: 2.95+0.3, w: 8.5, h: 0.6, fontSize: 10, fontFace: "Microsoft YaHei", color: "555555" });
  s.addShape("rect", { x: 0.5, y: 4, w: 0.05, h: 0.9, fill: { color: t.primary } });
  s.addText("④ IDC运营方→CDU通道", { x: 0.8, y: 4+0.02, w: 8.5, h: 0.28, fontSize: 12, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
  s.addText("秦淮(字节)/数据港(阿里)/万国(多元)→液冷招标。CDU/Manifold完整自主决策权。海悟IDC基因=天然优势", { x: 0.8, y: 4+0.3, w: 8.5, h: 0.6, fontSize: 10, fontFace: "Microsoft YaHei", color: "555555" });
  s.addShape("rect", { x: 0.5, y: 5.05, w: 0.05, h: 0.9, fill: { color: t.primary } });
  s.addText("⑤ 总优先级排序", { x: 0.8, y: 5.05+0.02, w: 8.5, h: 0.28, fontSize: 12, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
  s.addText("P0: H3C/浪潮/宁畅Manifold送样 → P0: 电源冷板研发立项 → P1: Intel UQD认证 → P1: 秦淮/数据港CDU → P2: 海外ODM", { x: 0.8, y: 5.05+0.3, w: 8.5, h: 0.6, fontSize: 10, fontFace: "Microsoft YaHei", color: "555555" });
  source(s, "数据来源：P8-P26全部源文件汇总\\n• sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md / sources/wechat/2026-05-07-bytedance-alibaba-idc-procurement-2026.md / sources/wechat/2026-05-06-ali-ppu-chip-overview.md / sources/wechat/2026-05-06-super-node-insight.md / sources/wechat/2026-05-07-haiguang-dcu-deep-compute-series.md → 全部微信源(9篇)\\n• sources/sec/ott/GOOG/ | sources/sec/ott/MSFT/ | sources/sec/ott/META/ | sources/sec/ott/AMZN/ / sources/sec/gpu/NVDA/ | sources/sec/gpu/AMD/ | sources/sec/gpu/INTC/ / sources/sec/oem/DELL/ | sources/sec/oem/SMCI/ | sources/sec/oem/VRT/ | sources/sec/oem/NVENT/ → SEC EDGAR 13家公司\\n• sources/GPU对比表格-精确修正.csv / sources/液冷客户表.ods → 对比表格+客户表\\n• sources/eastmoney/ (666篇研报归档) → 东方财富研报");
  badge(s, "27");
}
module.exports = { createSlide };
