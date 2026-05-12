const { badge, topBar, footer, title, source } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s);
  title(s, "定策略：三路并行 + 四阶段进攻");
  const items = [
    { label: "直接路径(2026)", text: "Manifold送样->H3C/浪潮/宁畅->小批量->框架协议。渠道最短 验证最快。目标:2026年内一家正式框架" },
    { label: "间接路径(2027)", text: "秦淮(字节通道)->数据港(阿里通道)->华勤/富士康(ODM)->CDU/Manifold招标。借IDC/ODM避开OEM认证门槛" },
    { label: "认证路径(2027-2028)", text: "Intel UQD(2026Q2启动)->阿里液冷->NVIDIA(2028)->OCP。从外围打入核心认证供应商圈" },
    { label: "产品路线图", text: "Manifold出量(2026)->电源冷板爆量(2027Q3)->CPU冷板(2028H1)->快接头量产(2028)->CDU(2029+)->全栈(2030)" },
  ];
  items.forEach((it, i) => {
    const y = 0.65 + i * 0.95;
    s.addShape("rect", { x: 0.5, y, w: 0.05, h: 0.82, fill: { color: '1F497D' } });
    s.addText(it.label, { x: 0.8, y: y + 0.02, w: 8.5, h: 0.26, fontSize: 12, fontFace: "Microsoft YaHei", color: '1F497D', bold: true });
    s.addText(it.text, { x: 0.8, y: y + 0.28, w: 8.5, h: 0.54, fontSize: 9, fontFace: "Microsoft YaHei", color: '555555' });
  });
  source(s, "路径依据: sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-06-super-node-insight.md → AMD CDU竞品分析 | sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-gb300-liquid-cooling-domestic-breakthrough.md → GB300国产冷板突破 | sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-bytedance-alibaba-idc-procurement-2026.md → 字节阿里IDC采购 | 📐三路并行=直接(OEM)+间接(IDC)+认证_铁律⑩");
  badge(s, "85");
}
module.exports = { createSlide };
