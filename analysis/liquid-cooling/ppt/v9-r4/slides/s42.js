const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "CDU：TAM ¥8B→¥150B 竞争激烈");
  dataTable(s, ["维度","详情"], [["TAM(2026-2030)","¥8B→¥80-150B，CAGR 60%+"],["规格","50-150kW主需求→200kW+(NVL72)"],["竞争","英维克(¥500M)/Vertiv/曙光/高澜"],["海悟路线","P2远期(不做价格战)→搭售→差异化"],["优势","温控基因+IDC客户=最优跳板"]], { colW: [2,7] });
  source(s, "表P42：CDU\\n来源：cooling/2026-05-09-cooling-market-analysis.md | Kimi+Mega复核");
  insight(s, "CDU竞争烈度高→海悟做远期差异化→搭售Manifold+冷板→系统打包");
  badge(s, "42");
}
module.exports = { createSlide };
