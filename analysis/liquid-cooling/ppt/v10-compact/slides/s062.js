const { badge, topBar, footer, title, source } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s);
  title(s, "四看小结：海悟机会地图与进攻路线");
  const items = [
    { label: "第一步(2026)", text: "Manifold送样H3C+浪潮+宁畅(P0)->电源冷板研发立项(100%缺口)->内存冷板差异化->Intel UQD启动" },
    { label: "第二步(2027)", text: "Manifold小批¥50M->电源冷板POC->OEM送样->框架协议->客户信任->冷板交叉销售" },
    { label: "第三步(2028-2029)", text: "Intel UQD通过->CPU冷板¥80M->电源冷板¥120M->快接头搭售->¥400M" },
    { label: "第四步(2030)", text: "全线:冷板+Manifold+快接头+CDU->¥1.0B->国内液冷第二->海外ODM" },
  ];
  items.forEach((it, i) => {
    const y = 0.65 + i * 0.95;
    s.addShape("rect", { x: 0.5, y, w: 0.05, h: 0.82, fill: { color: '1F497D' } });
    s.addText(it.label, { x: 0.8, y: y + 0.02, w: 8.5, h: 0.26, fontSize: 12, fontFace: "Microsoft YaHei", color: '1F497D', bold: true });
    s.addText(it.text, { x: 0.8, y: y + 0.28, w: 8.5, h: 0.54, fontSize: 9, fontFace: "Microsoft YaHei", color: '555555' });
  });
  source(s, "数据: P71-P80全部源文件汇总; 📐 路线图为海悟内部战略规划");
  badge(s, "81");
}
module.exports = { createSlide };
