const h = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; h.topBar(s); h.footer(s);
  h.title(s, '海光DCU | 芯片规格 + 信创液冷机会');
  h.dataTable(s, ['芯片','TDP','HBM','制程','出货(2026E)','OEM'], [['深算2号','300W','32GB HBM2','7nm','~20万','中科曙光/浪潮'],['深算3号','~500W','64GB HBM3','5nm','~30万','中科曙光/浪潮']], { y: 0.65, rowH: 0.25, colW: [1,0.9,1.1,0.8,1,1.8] });
  h.bulletList(s, [{ title: '信创优势', text: 'DCU国产化=政策优先→央企/政府/运营商→国产液冷组件优先采购 | 深算3号500W=液冷刚需', color: '1F497D' },{ title: '海悟路径', text: 'P1:通过浪潮渠道突破曙光壁垒→Manifold/CDU先行→冷板P2 | TAM=30万卡×70%×¥2,000/卡=¥42M(2028E)', color: '1F497D' }], 1.54);
  h.insight(s, '海光=信创赛道P1长期利好 通过浪潮渠道突破曙光壁垒 液冷需求2027起量', Math.min(2.6, 4.4));
  h.source(s, 's026+s027合并: GPU对比表格-精确修正.csv 海光信息2025年报 信创DCU→国产液冷优先');
}
module.exports = { createSlide };