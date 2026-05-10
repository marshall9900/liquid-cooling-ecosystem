const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "GPU → OEM 映射总表 & 液冷采购规模估算");
  dataTable(s, ["GPU","出货(万)","主力OEM","TDP","ASC(¥)","采购(¥B)","生态"], [["昇腾910B/950","180","超聚变/浪潮/宁畅","310-500W","800-1,500","1.4-2.7","半封闭"],["寒武纪590/690","50","浪潮/宁畅/联想","350-500W","600-1,200","0.3-0.6","开放"],["海光DCU2/3","50","曙光/浪潮","300-500W","600-1,200","0.3-0.6","开放"],["平头哥真武","60","阿里自用","~400W","800-1,500","0.5-0.9","半开放"],["合计","340","—","—","—","2.5-5.2","—"]], { colW: [1.2,0.8,1.5,1,1,0.9,0.7] });
  source(s, "数据来源：\\n• sources/GPU对比表格-精确修正.csv → 20specs 12verified + 8speculative\\n• sources/液冷客户表.ods → 液冷客户表 (GPU sheet)\\n• sources/eastmoney/ (666篇研报归档) → 东方财富研报 GPU产业链\\n• sources/sec/gpu/NVDA/ | sources/sec/gpu/AMD/ | sources/sec/gpu/INTC/ → SEC EDGAR GPU厂商\\n• sources/wechat/2026-05-06-ali-ppu-chip-overview.md → 平头哥PPU参数\\n• 【估算】基于公开数据推算，标记为估算: ASC单价基于行业调研; 采购规模=Σ(出货万×ASP); 生态开放度基于行业分析\n📐 推算过程：ASC单价: NVIDIA冷板¥2,000-3,000(CoolIT报价)/国产冷板¥600-1,200(英维克报价线)。采购规模 = Σ(各GPU出货万×液冷机柜占比×单柜ASC)。昇腾55%+ = 180÷340 = 53% → 55%(考虑ASC溢价)");
  insight(s, "国产GPU液冷采购2026E ¥2.5-5.2B，昇腾占55%+主导");
  badge(s, "19");
}
module.exports = { createSlide };
