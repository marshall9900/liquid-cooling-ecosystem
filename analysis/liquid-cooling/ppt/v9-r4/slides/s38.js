const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "供需平衡全景：7大组件产能 vs 需求缺口");
  dataTable(s, ["组件","2026E需求","国内产能","缺口(%)","原因","海悟"], [["GPU冷板","50-80万片","20-30万","~60%","NV认证","P2"],["CPU冷板","80-120万","30-50万","~60%","Intel UQD","P1"],["电源冷板★","10-20万","几乎为0","~100%","全新需求","P0"],["CDU","2K-4K台","1.2K-2.5K","~35%","扩产周期","P2"],["Manifold","10K-15K套","5K-8K","~40%","加工产能","P0"],["快接头","300-600万","30-60万","~85%","Staubli垄断","P1"]], { colW: [1.2,1.3,1.2,0.9,1.3,1.2] });
  source(s, "数据来源：\\n• sources/wechat/2026-05-06-super-node-insight.md + sources/wechat/2026-05-07-gb300-liquid-cooling-domestic-breakthrough.md → 超节点/GB300 组件BOM\\n• sources/wechat/2026-05-06-global-liquid-cooling-market-173b-usd.md → 全球液冷市场数据\\n• sources/eastmoney/ → 东方财富研报 组件供需\\n• NVIDIA/Intel官网 → 认证供应商产能\\n• 【估算】基于公开数据推算，标记为估算: 供需数据为行业推算 标记为工业估测\n📐 推算过程：国内产能 = Σ(各厂商产能公告+行业推算)。缺口(%) = (需求-产能)÷需求×100%。电源冷板100%缺口 = 需求10-20万片 vs 产能0(全新品类=无人生产)。快接头85%缺口 = 需求300-600万 vs 国产30-60万。Manifold40%缺口 = 需求10K-15K vs 产能5K-8K");
  insight(s, "电源冷板(100%缺口)+快接头(85%)+Manifold(40%)=海悟3大零赛道→立即启动");
  badge(s, "38");
}
module.exports = { createSlide };
