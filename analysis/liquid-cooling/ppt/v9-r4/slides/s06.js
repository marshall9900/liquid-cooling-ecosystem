const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, source } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "一看小结：液冷不可逆 + 市场空间基调");
  s.addShape("rect", { x: 0.5, y: 0.85, w: 0.05, h: 0.9, fill: { color: t.primary } });
  s.addText("GPU功耗翻倍不可逆", { x: 0.8, y: 0.85+0.02, w: 8.5, h: 0.28, fontSize: 12, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
  s.addText("H100 700W → B200 1000W → GB200 1200W → Rubin 1500W+，风冷物理极限600W已全面突破，液冷为唯一解。", { x: 0.8, y: 0.85+0.3, w: 8.5, h: 0.6, fontSize: 10, fontFace: "Microsoft YaHei", color: "555555" });
  s.addShape("rect", { x: 0.5, y: 1.9, w: 0.05, h: 0.9, fill: { color: t.primary } });
  s.addText("AI CAPEX持续暴涨", { x: 0.8, y: 1.9+0.02, w: 8.5, h: 0.28, fontSize: 12, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
  s.addText("全球OTT 2026E超$5,000亿，AI占比>50%。中国¥6,500亿+。每$1亿CAPEX≈¥200万液冷BOM需求。", { x: 0.8, y: 1.9+0.3, w: 8.5, h: 0.6, fontSize: 10, fontFace: "Microsoft YaHei", color: "555555" });
  s.addShape("rect", { x: 0.5, y: 2.95, w: 0.05, h: 0.9, fill: { color: t.primary } });
  s.addText("PUE政策铁拳", { x: 0.8, y: 2.95+0.02, w: 8.5, h: 0.28, fontSize: 12, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
  s.addText("新建DC PUE从≤1.25→≤1.20→≤1.15，风冷理论下限~1.2无法达标，液冷刚性不可逆。", { x: 0.8, y: 2.95+0.3, w: 8.5, h: 0.6, fontSize: 10, fontFace: "Microsoft YaHei", color: "555555" });
  s.addShape("rect", { x: 0.5, y: 4, w: 0.05, h: 0.9, fill: { color: t.primary } });
  s.addText("中国AIDC加速建设", { x: 0.8, y: 4+0.02, w: 8.5, h: 0.28, fontSize: 12, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
  s.addText("2026E液冷机柜~630万柜(45%渗透率)，2030E>2,100万柜(>70%)。TAM ¥39B→¥250B。", { x: 0.8, y: 4+0.3, w: 8.5, h: 0.6, fontSize: 10, fontFace: "Microsoft YaHei", color: "555555" });
  s.addShape("rect", { x: 0.5, y: 5.05, w: 0.05, h: 0.9, fill: { color: t.primary } });
  s.addText("结论：液冷=速度竞赛", { x: 0.8, y: 5.05+0.02, w: 8.5, h: 0.28, fontSize: 12, fontFace: "Microsoft YaHei", color: t.primary, bold: true });
  s.addText("谁能率先完成OEM认证+头部客户PoC+规模量产，谁就能卡住赛道位。窗口期仅1-2年。", { x: 0.8, y: 5.05+0.3, w: 8.5, h: 0.6, fontSize: 10, fontFace: "Microsoft YaHei", color: "555555" });
  source(s, "数据来源：P3-P5汇总\\n• SEC EDGAR: GOOG/MSFT/AMZN/META 10-K/10-Q\\n• sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md\\n• 中国信通院 数据中心发展报告(2026) / 仲量联行 中国数据中心市场报告(2026) / TrendForce 全球数据中心液冷市场报告(2026)\\n• 工信部 数据中心发展三年行动计划(2021-2023) 通信[2021]76号 / 发改委 东数西算2.0");
  badge(s, "06");
}
module.exports = { createSlide };
