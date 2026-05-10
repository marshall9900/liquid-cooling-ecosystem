const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "GPU冷板：NVIDIA认证壁垒 + 国产GPU窗口");
  dataTable(s, ["指标","数据"], [["TAM 2026E","全球$5-8B，中国¥5-8B"],["出货","全球~400万片，中国~50-80万片"],["ASP","NV冷板¥2K-3K vs 国产¥600-1.2K"],["NV认证","COOLER-SPEC-002→12-18月→仅3家"],["国产窗口","寒武纪/海光/平头哥→认证宽松(+30%)"],["海悟","P2(2027-2028)→先Manifold再推冷板"]], { colW: [2.5,6.5] });
  source(s, "数据来源：\\n• NVIDIA官网 COOLER-SPEC-002 认证规范\\n• sources/GPU对比表格-精确修正.csv → GPU对比表格v2 (20specs)\\n• SEC EDGAR: sources/sec/gpu/NVDA/ + sources/sec/gpu/AMD/\\n• sources/wechat/2026-05-07-gb300-liquid-cooling-domestic-breakthrough.md → GB300冷板国产化参考\\n• 【估算】ASP/出货为行业估测");
  insight(s, "NVIDIA冷板=三家寡头，国产GPU冷板(2027)=海悟差异→通过Manifold带入");
  badge(s, "39");
}
module.exports = { createSlide };
