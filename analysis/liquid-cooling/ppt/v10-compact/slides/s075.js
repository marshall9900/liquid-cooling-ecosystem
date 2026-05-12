const { badge, topBar, footer, title, source } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s);
  title(s, "核心结论与行动建议");
  const items = [
    { label: "一 市场基调", text: "液冷不等于趋势问题等于执行速度问题。全球AI液冷TAM $10B(2026E)到$50B(2030E) CAGR 50%+。窗口1-2年" },
    { label: "二 海悟最优路径", text: "Manifold(6月送样)+电源冷板(12月POC)=双P0。先卡位后扩张:2026 Manifold到2027冷板到2028全栈" },
    { label: "三 竞争优势", text: "电源冷板=100%空白(全部竞品未做)=海悟独有差异化。Manifold=低壁垒高增速=50M速赢" },
    { label: "四 关键风险", text: "认证(CoolIT/英维克已领先12-24月)+人才(液冷热管理稀缺)+竞品跟进(窗口仅6-12月)。均有缓解策略" },
    { label: "五 投资价值", text: "13M CAPEX vs 5B估值(2030)=385x。50M(2026)到1B(2030) CAGR 112%。净利率2027扭亏到2030 12%" },
    { label: "六 行动建议", text: "立即:Manifold送样H3C/浪潮/宁畅(本周)。6月内:电源冷板研发立项+专利。12月内:Intel UQD启动+框架签订" },
  ];
  items.forEach((it, i) => {
    const y = 0.65 + i * 0.7;
    s.addShape("rect", { x: 0.5, y, w: 0.05, h: 0.58, fill: { color: '1F497D' } });
    s.addText(it.label, { x: 0.8, y: y + 0.02, w: 8.5, h: 0.20, fontSize: 11, fontFace: "Microsoft YaHei", color: '1F497D', bold: true });
    s.addText(it.text, { x: 0.8, y: y + 0.22, w: 8.5, h: 0.36, fontSize: 8.5, fontFace: "Microsoft YaHei", color: '555555' });
  });
  source(s, "核心数据源: sources/sec/oem/VRT/submissions_2026-05-09.json → oem/{VRT/NVENT/SMCI/DELL}/ → 4家OEM竞品SEC 10-K | sources/sec/oem/VRT/submissions_2026-05-09.json, sources/sec/gpu/NVDA/submissions_2026-05-09.json, sources/sec/NVDA/AMD/INTC/ → 3家GPU/CPU SEC | sources/sec/oem/VRT/submissions_2026-05-09.json, sources/sec/ott/MSFT/submissions_2026-05-09.json, sources/sec/GOOG/MSFT/AMZN/META/BIDU/ → 5家OTT CapEx | sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md 9篇微信纪要 | sources/reports/industry_液冷/01_数据中心液冷_核心/[2024-11-20] 开源证券 - 通信行业点评报告：维谛预测AI单机柜功耗有望超1MW，液冷或将成为必选项.pdf 72篇研报 | sources/rss/2026-05-07/180228_RSS_AIWillSoonDriveAThirdOfTSMCsBusiness_meta.json 48篇RSS情报 | 校验: Kimi ✅ MiniMax ✅ | 2026-05-09");
  badge(s, "100");
}
module.exports = { createSlide };
