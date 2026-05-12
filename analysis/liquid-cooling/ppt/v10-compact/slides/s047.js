const h = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; h.topBar(s); h.footer(s);
  h.title(s, '三看总结 | 竞争格局核心判断 + 海悟差异化窗口');
  h.dataTable(s, ['竞争维度','现状','海悟窗口'], [['冷板(NVIDIA)','CoolIT锁定 英维克/AVC跟随','国产GPU冷板→无认证壁垒'],['冷板(国产)','英维克先发 分散格局','P0:寒武纪/昇腾冷板'],['CDU','英维克/高澜/Vertiv竞争','差异化:节能+性价比'],['Manifold','英维克/Staubli为主','P0:性价比+快交付'],['快接头','Staubli 72%垄断','国产替代窗口→海悟P1']], { y: 0.65, rowH: 0.25, colW: [1.5,2.5,3.5] });
  h.bulletList(s, [{ title: '核心判断', text: '液冷竞争≠已定局→国产GPU路线开辟新赛道→海悟Manifold/国产冷板双线突破 | 不正面竞争→差异化突破', color: '1F497D' }], 2.35);
  h.insight(s, '竞争窗口明确:Manifold(P0)+国产GPU冷板(P0)+CDU差异化(P1) | 2026-2027窗口期', Math.min(2.93, 4.4));
  h.source(s, 's066+s069合并: 液冷竞争格局全会审 国产冷板热阻0.042-0.048℃/W 海悟差异化窗口2026-2027');
}
module.exports = { createSlide };