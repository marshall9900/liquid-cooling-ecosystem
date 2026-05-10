const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, topBar, footer, title, bulletList, insight, source } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, '寒武纪-液冷机会与海悟策略');
  bulletList(s, [
    { title: '① 生态特点', text: '寒武纪不指定液冷供应商→OEM(浪潮/宁畅)自主选择→最开放的国产GPU液冷生态', color: t.primary },
    { title: '② 功耗轨迹', text: '590(350W)→690(500W)→冷板从可选变推荐→液冷需求确定性高', color: t.primary },
    { title: '③ 出货增长', text: '2026E 50万卡→2028E 150万卡+(估)→液冷组件需求3倍增长', color: t.primary },
    { title: '④ 海悟机会', text: 'Manifold直接(无认证)→冷板P1(需寒武纪认证但门槛<NVIDIA)→CPU冷板搭售', color: t.primary },
    { title: '⑤ 优先级', text: 'P0(Manifold)+P1(冷板)→寒武纪线=海悟最易进入的国产GPU生态', color: t.highlight }
  ]);
  insight(s, '寒武纪=海悟P0首选: Manifold免认证+冷板低门槛+CPU冷板搭售=最快变现路径');
  source(s, 'sources/GPU对比表格-精确修正.csv → 寒武纪全系; sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-bytedance-alibaba-idc-procurement-2026.md → 阿里寒武纪采购5-6万颗(2026); sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-06-super-node-insight.md → 国产超节点CAGR 194%(2026-2028); sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-gb300-liquid-cooling-domestic-breakthrough.md → 国产冷板热阻0.042-0.048℃/W; 推算:寒武纪线液冷TAM=50万卡×60%(液冷率)×¥1,500/卡=¥45M(2026E)');
  badge(s, '25');
}
module.exports = { createSlide };
