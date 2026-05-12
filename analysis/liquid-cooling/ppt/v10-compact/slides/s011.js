const h = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; h.topBar(s); h.footer(s);
  h.title(s, '腾讯 | AI CAPEX ¥1,300亿+ 星脉256卡超节点');
  h.dataTable(s, ['维度','数据'], [['AI CAPEX 2026E','¥1,300亿+ 昇腾950PR预购>5万颗'],['超节点','ETH-64/128→星脉256卡'],['液冷方案','冷板为主 混元集群大规模部署'],['CDU/Manifold','招标制 英维克/CoolIT为主供']], { y: 0.65, rowH: 0.25, colW: [2.2,6.8] });
  h.bulletList(s, [{ title: '① 进入窗口', text: 'CDU/Manifold→招标制(≠GPU绑定)→海悟P1:差异化CDU(节能+价格) | 液冷¥10-15亿/年', color: '1F497D' },{ title: '② 推荐路线', text: 'Manifold先投招标→中标=进入腾讯供链→CDU/冷板交叉销售 | SAM: ¥15-25M', color: '1F497D' }], 2.08);
  h.insight(s, 'P1(CDU/Manifold)→阶段2026下→2027批量¥30M目标 | 冷板被CoolIT锁定但CDU/Manifold公开招标', Math.min(3.14, 4.4));
  h.source(s, 's015+s016合并: 腾讯液冷¥10-15亿/年 CDU/Manifold≈30%=¥3-5亿 海悟目标5%=¥15-25M');
}
module.exports = { createSlide };