const { badge, topBar, footer, title, source } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s);
  title(s, "关键成功因素(CSF)");
  const items = [
    { label: "① Manifold先发", text: "送样H3C/浪潮/宁畅(2026H1)=第一关键。失败=全盘推迟。成功=打开3个最大客户=¥50M基线" },
    { label: "② 电源冷板蓝海", text: "100%空白窗口仅12月。竞品跟进前锁定:专利(2026Q3)+OEM框架+3家POC。窗口关闭=失去最大差异化" },
    { label: "③ Intel UQD认证", text: "决定CPU冷板能否在2028进入。不进=丢失CPU冷板¥8B TAM。2026Q2启动=最大提前量" },
    { label: "④ 人才团队", text: "液冷热管理人才=核心资产。竞争激烈(同行高薪)->海悟承诺:股权+增长+影响力=长期吸引力" },
    { label: "⑤ 客户背书", text: "H3C/浪潮任一成功=行业标杆->复用到全行业。无标杆=无法规模化" },
  ];
  items.forEach((it, i) => {
    const y = 0.65 + i * 0.82;
    s.addShape("rect", { x: 0.5, y, w: 0.05, h: 0.68, fill: { color: '1F497D' } });
    s.addText(it.label, { x: 0.8, y: y + 0.02, w: 8.5, h: 0.22, fontSize: 12, fontFace: "Microsoft YaHei", color: '1F497D', bold: true });
    s.addText(it.text, { x: 0.8, y: y + 0.24, w: 8.5, h: 0.44, fontSize: 9, fontFace: "Microsoft YaHei", color: '555555' });
  });
  source(s, "CSF依据: 开源证券 2025-07-31 → Vertiv+Celestica上调指引→液冷市场窗口期确认 | 国信证券 2026-01-21 → 26年算力景气度持续上行 液冷板块关注度提升 | sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-gb300-liquid-cooling-domestic-breakthrough.md → 国产替代时间窗口 | 📐CSF #1送样 #2电源冷板窗口 #3认证 #4人才 #5标杆_铁律⑩");
  badge(s, "98");
}
module.exports = { createSlide };
