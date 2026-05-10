const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "Manifold：低壁垒出量，海悟P0主战场");
  dataTable(s, ["指标","数据"], [["TAM(2026-2030)","¥3B→¥25B，CAGR 70%+"],["ASP","¥4K-12K/套（8-16套/柜，¥48-120K/柜）"],["出货","2026E 10K-15K套→2030E 80K-100K套"],["竞争","英维克/高澜/同飞/申菱→份额≤15%"],["壁垒","制造(焊接/洁净/氦检)→无强制认证！"],["海悟路线","送样H3C/浪潮/宁畅→2026 ¥50M"],["行动","送样+框架(2026Q1)→小批(2027H1)→独供(2028+)"]], { colW: [2,7] });
  source(s, "表P43：Manifold\\n来源：五看三定v5 Manifold分析 | OEM采购分析\\nManifold=低壁垒+无认证+分散市场=最佳P0");
  insight(s, "Manifold=低壁垒+无认证+分散市场+巨大需求=海悟最佳P0→送样→批量化");
  badge(s, "43");
}
module.exports = { createSlide };
