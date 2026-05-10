const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, '腾讯-业务概览与液冷策略');
  dataTable(s, ['维度', '数据'], [
    ['AI CAPEX 2026E', '¥1,300亿+'],
    ['超节点', 'ETH-64/128→星脉256卡'],
    ['自建DC', '天津/贵安/清远/仪征/怀来'],
    ['液冷方案', '冷板为主 混元集群大规模部署'],
    ['CDU/Manifold', '招标制 英维克/CoolIT为主供']
  ], { colW: [2, 7], y: 0.7 });
  insight(s, '腾讯冷板被CoolIT锁定 但CDU/Manifold公开招标→海悟Manifold可参与');
  source(s, 'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md → 腾讯昇腾950PR预购>5万颗, AI CAPEX¥1,300亿+; sources/sec/oem/VRT/submissions_2026-05-09.json, sources/sec/ott/MSFT/submissions_2026-05-09.json → SEC EDGAR 10-K核实; 推算:冷板被CoolIT锁定但CDU/Manifold公开招标 → 海悟Manifold可参与');
  badge(s, '15');
}
module.exports = { createSlide: createSlide };
