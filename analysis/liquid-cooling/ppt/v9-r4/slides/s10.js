const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "腾讯：星脉网络 + 256卡超节点");
  dataTable(s, ["指标","数据"], [["AI CAPEX 2026E","¥1,300亿+"],["超节点标准","ETH-64/128 → 星脉256卡"],["自建DC","天津/贵安/清远/仪征/怀来五大集群"],["液冷方案","冷板为主，大规模部署（混元集群）"],["CDU/Manifold","招标制，英维克/CoolIT为主供"],["GPU-OEM","NVIDIA→浪潮，昇腾→超聚变"],["海悟进入","需腾讯液冷认证（OCP衍生），优先Manifold/CDU招标"]], { colW: [2.2,6.8] });
  source(s, "数据来源：\\n• sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md → 腾讯GPU CAPEX ¥1,300亿+\\n• sources/sec/ott/ → 腾讯2025年报\\n• sources/eastmoney/ (666篇研报归档) → 券商研报(腾讯AI基建)\\n• SEC EDGAR: sources/sec/ott/ (腾讯港股公开资料)\\n• 【估算】基于公开数据推算，标记为估算: 腾讯冷板被CoolIT锁定，CDU/Manifold公开招标");
  insight(s, "腾讯冷板被CoolIT锁定，但CDU/Manifold公开招标→海悟Manifold可参与");
  badge(s, "10");
}
module.exports = { createSlide };
