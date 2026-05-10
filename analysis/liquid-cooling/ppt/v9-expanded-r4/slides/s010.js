const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, '阿里巴巴-液冷策略与供应链决策');
  dataTable(s, ['维度', '详情'], [
    ['液冷方案', '浸没(方升架构)+冷板(磐久)双路并行'],
    ['液冷采购', 'CDU/Manifold→招标 冷板→OEM推荐→需认证'],
    ['液冷供应商', '思泉(浸没主供)+CoolIT(冷板)+英维克(CDU)'],
    ['海悟机会', 'CDU/Manifold招标→通过H3C间接进入']
  ], { colW: [2, 7], y: 0.7 });
  insight(s, '磐久3.0全液冷→CDU/Manifold招标→海悟通过H3C+思泉渠道进入');
  source(s, 'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-06-ali-ppu-chip-overview.md → 平头哥真武810E参数 7nm EUV 300W; sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-bytedance-alibaba-idc-procurement-2026.md → 阿里2026 IDC需求~2GW 液冷≥21kW强制; sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-06-super-node-insight.md → 超节点2028E ¥3,414亿; 推算:液冷采购≈¥16-20亿/年(~2,000柜×¥80-100万BOM) BOM:GPU冷板40%+CDU25%+Manifold10%+快接头8%+管路17%');
  badge(s, '10');
}
module.exports = { createSlide: createSlide };
