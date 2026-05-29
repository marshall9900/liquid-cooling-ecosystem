const { badge, topBar, footer, title, source } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s);
  title(s, "核心结论与行动建议");
  const items = [
    { label: "一 市场基调", text: "液冷不等于趋势问题等于执行速度问题。全球服务器液冷TAM $12.6B(2026E)→$53.5B(2030E) CAGR 43.6%。中国液冷服务器 ¥23.7亿(2024)→¥162亿(2029E) CAGR 46.8%。韬(τ)定律:「时间缩微」替代「几何缩微」→国产芯片摆脱先进制程依赖 刷新2026-05-30" },
    { label: "二 海悟最优路径", text: "Manifold(6月送样)+电源冷板(12月POC)=双P0。先卡位后扩张:2026 Manifold到2027冷板到2028全栈" },
    { label: "三 竞争优势", text: "电源冷板=100%空白(全部竞品未做)=海悟独有差异化。Manifold=低壁垒高增速=50M速赢 | 全产业链能力从加分项→准入门槛" },
    { label: "四 关键风险", text: "认证(CoolIT/英维克已领先12-24月)+人才(液冷热管理稀缺)+竞品跟进(窗口仅6-12月)。均有缓解策略" },
    { label: "五 投资价值", text: "13M CAPEX vs 5B估值(2030)=385x。50M(2026)到1B(2030) CAGR 112%。净利率2027扭亏到2030 12%" },
    { label: "六 行动建议", text: "立即:Manifold送样H3C/浪潮/宁畅(本周)。6月内:电源冷板研发立项+专利。12月内:Intel UQD启动+框架签订 | 三大催化赛道:光通信+液冷+国产AI算力 2026-2027黄金窗口" },
  ];
  items.forEach((it, i) => {
    const y = 0.65 + i * 0.7;
    s.addShape("rect", { x: 0.5, y, w: 0.05, h: 0.58, fill: { color: '1F497D' } });
    s.addText(it.label, { x: 0.8, y: y + 0.02, w: 8.5, h: 0.20, fontSize: 11, fontFace: "Microsoft YaHei", color: '1F497D', bold: true });
    s.addText(it.text, { x: 0.8, y: y + 0.22, w: 8.5, h: 0.36, fontSize: 8.5, fontFace: "Microsoft YaHei", color: '555555' });
  });
  source(s, "核心数据源: sources/sec/oem/VRT/submissions_2026-05-09.json → oem/{VRT/NVENT/SMCI/DELL}/ → 4家OEM竞品SEC 10-K | sources/sec/gpu/NVDA/submissions_2026-05-09.json, sources/sec/NVDA/AMD/INTC/ → 3家GPU/CPU SEC | sources/sec/ott/MSFT/submissions_2026-05-09.json, sources/sec/GOOG/MSFT/AMZN/META/BIDU/ → 5家OTT CapEx | sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md 9篇微信纪要 | sources/reports/industry_液冷/ 72篇研报 | sources/rss/ 48篇RSS情报 | 韬(τ)定律:时间缩微替代几何缩微 | 三大催化赛道:光通信+液冷+国产AI算力 | 校验: Kimi ✅ MiniMax ✅ | 刷新2026-05-30");
  badge(s, "100");
}
module.exports = { createSlide };
