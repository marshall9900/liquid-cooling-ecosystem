const pptxgen = require('pptxgenjs');
const { badge, topBar, footer, title, dataTable, source, insight, takeaway } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, 'OEM液冷组件采购规模BOM拆解');
  dataTable(s, ['组件','数量/柜','ASC(¥)','2026E(¥B)','2028E(¥B)','增长'],
    [['GPU冷板','72片','2,000-3,000','2.5-4.5','8-15','3x'],
     ['CPU冷板','18-36片','600-1,200','0.3-0.8','1.5-3','4x'],
     ['电源冷板★','36+片','400-800','0.3-0.6','1.5-3','5x'],
     ['快接头','200+个','150-600','1.0-2.5','4-10','4x'],
     ['CDU','1-2台','100K-200K','1.0-2.0','4-8','4x'],
     ['Manifold','8-16套','4K-12K','0.5-1.0','2-5','5x'],
     ['合计','—','—','6-12','22-47','~4x']],
    { colW: [1.1,0.9,1.1,1.1,1,0.7], y: 0.62, rowH: 0.36 });
  insight(s, '电源冷板(5x增长)+Manifold(5x)=海悟双P0 GPU冷板(3x)远期目标', 3.35);
  takeaway(s, '海悟核心赛道: 电源冷板+Manifold(双P0高增长)→CDU+快接头(P1拓展)→GPU冷板(P2远期)', 4.0);
  source(s, 'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-06-super-node-insight.md → 超节点液冷BOM; sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-gb300-liquid-cooling-domestic-breakthrough.md → GB300液冷BOM; NVIDIA认证冷板价格; 电源冷板ASC=800V PSU÷制造成本');
  badge(s, '37');
}
module.exports = { createSlide };
