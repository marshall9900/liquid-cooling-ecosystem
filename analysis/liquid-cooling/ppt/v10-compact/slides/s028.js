const h = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; h.topBar(s); h.footer(s);
  h.title(s, '国内IDC运营方 | 液冷需求 + 采购特征深度分析');
  h.dataTable(s, ['IDC运营方','机柜规模','液冷需求','采购模式','海悟机会'], [['万国数据','25万+柜','高(阿里/腾讯租户)','自主采购','Manifold/CDU直供'],['数据港','15万+柜','高(阿里主力DC)','阿里指定招标','通过H3C/思泉'],['秦淮数据','10万+柜','中(字节主力)','字节指定招标','通过浪潮/宁畅'],['世纪互联','8万+柜','中(多租户)','自主+客户指定','Manifold直供']], { y: 0.65, rowH: 0.25, colW: [1.2,0.9,1.3,1.3,1.5] });
  h.bulletList(s, [{ title: '采购特征+策略', text: 'IDC液冷跟随租户需求→核心租户(阿里/字节/腾讯)决定标准→海悟双路径:直供+OEM渠道 | TAM: ¥3-5B(2028E)', color: '1F497D' }], 2.08);
  h.insight(s, 'IDC液冷需求由OTT租户驱动 万国/数据港/秦淮=TOP3液冷IDC 海悟双路径:直供+OEM渠道', Math.min(2.66, 4.4));
  h.source(s, 's040+s041合并: 万国数据/数据港/秦淮数据年报 IDC液冷采购2026年预计翻倍 TAM=TOP5 IDC×液冷渗透率');
}
module.exports = { createSlide };