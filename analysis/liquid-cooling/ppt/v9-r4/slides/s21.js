const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "OEM液冷组件采购规模估算（按超节点×单柜BOM）");
  dataTable(s, ["组件","单柜量","ASC(¥)","2026E(¥B)","2028E(¥B)","增长","备注"], [["GPU冷板","72片","2K-3K","2.5-4.5","8-15","3x","NVIDIA认证加成"],["CPU冷板","18-36片","600-1,200","0.3-0.8","1.5-3","4x","Intel UQD认证"],["电源冷板","36+片","400-800","0.3-0.6","1.5-3","5x","蓝海空白→海悟P0"],["快接头","200+个","150-600","1.0-2.5","4-10","4x","Staubli垄断"],["CDU","1-2台","100K-200K","1.0-2.0","4-8","4x","OEM集成外购"],["Manifold","8-16套","4K-12K","0.5-1.0","2-5","5x","低壁垒出量"],["合计","—","—","6-12","22-47","~4x","—"]], { colW: [1.1,0.9,1.1,1.1,1,0.7,1.7] });
  source(s, "数据来源：\\n• sources/wechat/2026-05-06-super-node-insight.md → 超节点液冷BOM\\n• sources/wechat/2026-05-07-gb300-liquid-cooling-domestic-breakthrough.md → GB300液冷方案 BOM参考\\n• sources/eastmoney/ (666篇研报归档) → 东方财富研报 液冷组件\\n• sources/wechat/2026-05-06-global-liquid-cooling-market-173b-usd.md → 全球液冷市场173B USD\\n• NVIDIA官网 → COOLER-SPEC-002认证信息\\n• 【估算】基于公开数据推算，标记为估算: 单柜ASC为超节点典型配置(行业调研)\n📐 推算过程：ASC(¥) = 行业报价(2026Q1)。采购规模(¥B) = Σ(单柜数量×ASC×柜数) 按行业增长率外推。电源冷板 ASC=400-800 = 800V PSU液冷方案(参考NVL72) ÷ 热设计 ÷ 制造成本 ÷ 利润。2028E = 2026E×(1+70%)×(1+70%) 大致3-5x");
  insight(s, "单NVL72柜液冷BOM~$50-100K→¥35-70万/柜→2026E中国OEM液冷采购¥6-12B");
  badge(s, "21");
}
module.exports = { createSlide };
