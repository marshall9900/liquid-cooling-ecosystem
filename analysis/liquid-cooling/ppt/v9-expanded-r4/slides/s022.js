const pptxgen = require('pptxgenjs');
const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, '华为昇腾-芯片路线图(→2028) 一年一代翻倍');
  dataTable(s, ['芯片','时间','定位','FP8','FP4','HBM','互联','制程','伙伴'],
    [['910B','2024','训练','—','—','64GB H2e','HCCS','7nm','超聚变/浪潮'],
     ['950PR','2026Q1✅','Prefill+推荐','1P','2P','HiBL1.0(自研)','2TB/s','5nm(估)','7家整机伙伴'],
     ['950DT','2026Q4','Decode+训练','1P','2P','HiZQ2.0 144GB','2TB/s','5nm(估)','超聚变/浪潮/昆仑'],
     ['960','2027Q4','训练推理','2P','4P','翻倍','↑','—','—'],
     ['970','2028Q4','旗舰','4P','8P','1.5×+','4TB/s','—','—']],
    { colW: [0.8,0.9,1.1,0.7,0.7,1.3,0.9,0.7,1.5] });
  source(s, 'sources/reports/supernode/H3_AP202604131821150647_1.pdf 华金证券→昇腾路线图(引自华为全联接大会/徐直军); HiBL/HiZQ=华为自研HBM双轨 | 灵衢(UnifiedBus)=华为超节点互联协议');
  insight(s, '昇腾确立一年一代算力翻倍节奏 | 自研HBM双轨(HiBL低成本/HiZQ高性能) | 灵衢协议8192卡全互联');
  try { s.addImage({ path: __dirname + '/../../imgs/hj_-03.png', x: 0.3, y: 3.6, w: 4.5, h: 2.2 }); } catch(e) {}
  badge(s, '22');
}
module.exports = { createSlide };
