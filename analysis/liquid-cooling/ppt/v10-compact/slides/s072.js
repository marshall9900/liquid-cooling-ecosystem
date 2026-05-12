const { badge, topBar, footer, title, source } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s);
  title(s, "风险评估与缓解矩阵");
  const items = [
    { label: "技术风险", text: "电源冷板热设计复杂度->缓解:A/B双方案并行研发(6个月)+外聘1名专家+校企合作(华工/上交)" },
    { label: "认证风险", text: "Intel UQD未通过->缓解:同步申请OCP+国产GPU认证 不依赖单一认证。2027Q2前完成3个认证申请" },
    { label: "竞争风险", text: "英维克/高澜跟进电源冷板->缓解:先发6-12月+专利(2026Q3申请)+绑定3个OEM(框架锁定)" },
    { label: "人才风险", text: "液冷人才稀缺->缓解:2026校园招聘5人+社会招聘5人+顾问(退休专家)。薪酬对标英维克+20%" },
  ];
  items.forEach((it, i) => {
    const y = 0.65 + i * 1.0;
    s.addShape("rect", { x: 0.5, y, w: 0.05, h: 0.85, fill: { color: '1F497D' } });
    s.addText(it.label, { x: 0.8, y: y + 0.02, w: 8.5, h: 0.26, fontSize: 12, fontFace: "Microsoft YaHei", color: '1F497D', bold: true });
    s.addText(it.text, { x: 0.8, y: y + 0.28, w: 8.5, h: 0.57, fontSize: 9, fontFace: "Microsoft YaHei", color: '555555' });
  });
  source(s, "供应链风险情报: sources/rss/2026-05-07/180228_RSS_AIWillSoonDriveAThirdOfTSMCsBusiness_meta.jsonupplyconstraintsopticaladvancesdominateAristasQ1.md → Arista CEO:全行业芯片/晶圆/内存短缺 持续1-2年 | sources/rss/2026-05-07/180228_RSS_AIWillSoonDriveAThirdOfTSMCsBusiness_meta.jsonwitchstormcomingGartnerforecastspricehikeslongleadtimesforenterprisedatacenters.md → Gartner:交换机涨价15-40% 交期3-9月 | sources/rss/2026-05-07/180228_RSS_AIWillSoonDriveAThirdOfTSMCsBusiness_meta.json174728_RSS_AI-DrivenCPUShortageSavesIntelsFinancialCookies.md → AI驱动CPU短缺 Intel受益 | sources/rss/2026-05-07/180228_RSS_AIWillSoonDriveAThirdOfTSMCsBusiness_meta.json174727_RSS_Memoryshortageandcostsurgepushenterprisestowardthecloud.md → 内存短缺推高成本 | 海悟风险规划 → 4类核心风险均设缓解策略 | 📐铁律⑩索引");
  badge(s, "95");
}
module.exports = { createSlide };
