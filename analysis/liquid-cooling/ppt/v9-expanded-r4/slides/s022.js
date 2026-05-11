const pptxgen = require('pptxgenjs');
const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, '华为昇腾-芯片规格与演进(→2028) 一年一代翻倍');

  dataTable(s,
    ['芯片','时间','TDP','FP16','FP8','FP4','显存','互联','架构','冷却','定位','出货(万)'],
    [
     ['910B','已量产','~400W','~400T','—','—','64GB H2e','HCCS','SIMD','风冷/冷板','训推','—'],
     ['910C','2025Q1','~500-600W','800T','—','—','128GB H2e','784GB/s','SIMD','冷板','通用训推','—'],
     ['950PR','2026Q1 ✅','~800-1000W','—','1P','2P','128GB HiBL1.0','2TB/s 灵渠','SIMD+SIMT','Must冷板','Prefill推理','~80'],
     ['950DT','2026Q4','~1000-1200W','—','1P','2P','144GB HiZQ2.0','2TB/s 灵渠','SIMD+SIMT','Must冷板','Decode+训','~40'],
     ['960','2027Q4','~1500W+','—','翻倍950','4P','288GB+','翻倍950','SIMD+SIMT','Must冷板微通道','千亿参数','—'],
     ['970','2028Q4','~2000W+','—','—','8P','288GB+','4TB/s','SIMD+SIMT','MLCP微通道','MoE/AGI','—'],
    ],
    { colW: [0.7,0.7,0.75,0.6,0.6,0.6,0.95,0.8,0.75,0.85,0.75,0.65] }
  );

  source(s, '华为全联接大会2025(已核实) | 华金证券 昇腾950研报(2026-04-12) | 证券时报2025-09-18 | HiBL/HiZQ=自研HBM双轨 | 灵衢(UnifiedBus)=超节点互联协议');
  insight(s, '昇腾一年一代算力翻倍 | 自研HBM打破三星/SK垄断 | 灵衢2.0开放生态8192卡全互联 | DeepSeek V4适配950PR→大厂抢购潮');
  badge(s, '22');
}
module.exports = { createSlide };
