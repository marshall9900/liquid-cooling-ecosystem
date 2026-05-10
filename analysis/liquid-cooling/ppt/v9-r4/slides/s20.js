const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "超节点OEM格局：份额/GPU/液冷/海悟状态");
  dataTable(s, ["OEM","份额","对应GPU","液冷(¥B)","供应商","海悟","P"], [["H3C","~25%","NV+昇腾+寒武纪","2.5-4.0","CoolIT/英维克","已接触→待送样","P0"],["浪潮","~22%","NV+昇腾+寒武纪+海光","2.2-3.5","英维克/高澜","已接触→待送样","P0"],["宁畅","~12%","NV+昇腾+寒武纪","1.2-2.0","—","已接触→待送样","P0"],["超聚变","~18%","华为昇腾","1.8-3.0","华为指定","待接触","P1"],["联想","~10%","NV+海光","1.0-1.6","—","待接触","P1"],["华勤","~8%","ODM多品牌","0.8-1.2","—","待接触","P1"]], { colW: [1,0.8,1.5,1.1,1.2,1.2,0.7] });
  source(s, "数据来源：\\n• sources/液冷客户表.ods → 液冷客户表 OEM sheet (10家)\\n• sources/eastmoney/ (666篇研报归档) → 东方财富研报 OEM+服务器\\n• sources/sec/oem/DELL/ | sources/sec/oem/SMCI/ | sources/sec/oem/VRT/ | sources/sec/oem/NVENT/ → SEC EDGAR OEM厂商\\n• sources/wechat/2026-05-07-bytedance-alibaba-idc-procurement-2026.md → 字节/阿里IDC OEM采购\\n• 【估算】基于公开数据推算，标记为估算: 份额为行业估测(非审计); 液冷采购基于超节点出货×BOM推算\n📐 推算过程：份额推算: 基于超节点出货量×GPU绑定OEM。H3C(25%)=NV+昇腾+寒武纪三线。超聚变(18%)≈昇腾出货×华为指定率×~70%。液冷采购(¥B)=超节点出货×单柜液冷BOM×OEM份额");
  insight(s, "H3C+浪潮+宁畅=57%OEM份额+均已接触→P0集中攻坚Manifold");
  badge(s, "20");
}
module.exports = { createSlide };
