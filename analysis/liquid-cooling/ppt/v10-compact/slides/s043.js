const h = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; h.topBar(s); h.footer(s);
  h.title(s, '英维克深度 | 客户订单 + 财务对标 + 海悟竞争策略');
  h.dataTable(s, ['维度','英维克数据'], [['液冷营收(2025)','¥18亿(其中CDU/Manifold~¥12亿)'],['主要客户','阿里/腾讯/字节/谷歌/H3C/浪潮'],['核心产品','CDU(100-500kW)+Manifold+冷板'],['毛利率','液冷~35% 产能CDU 5,000台/年→2026E 12,000台']], { y: 0.65, rowH: 0.25, colW: [2.5,6.5] });
  h.dataTable(s, ['竞争维度','英维克','海悟对标'], [['CDU技术','100-500kW全系列','差异化:节能15%+'],['Manifold','标准化+定制','性价比(低20%)+快交付'],['客户关系','阿里/腾讯/字节深度','零基础→P0字节突破']], { y: 2.08, rowH: 0.25, colW: [1.5,2.5,3.5] });
  h.bulletList(s, [{ title: '海悟策略', text: '不正面拼全栈→聚焦Manifold差异化(性价比+快交付)→CDU节能切入→冷板认证后跟进 | 目标:2027液冷¥100M+', color: '1F497D' }], 3.24);
  h.insight(s, '英维克=国内液冷龙头(液冷¥18亿) 海悟差异化:Manifold性价比+CDU节能+字节零供应商突破', Math.min(3.8200000000000003, 4.4));
  h.source(s, 's056+s057+s058合并: 英维克2025年报 客户公开信息 海悟竞争对标推算');
}
module.exports = { createSlide };