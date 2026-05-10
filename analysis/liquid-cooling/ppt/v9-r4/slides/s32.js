const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "Vertiv / Schneider：国际巨头CDU领域压迫");
  dataTable(s, ["维度","Vertiv","Schneider Electric"], [["液冷营收","CDU $500M+(液冷~5%)","$800M+(冷却集成)"],["产品","CDU/PDU/一体化机柜","冷却+配电一体化"],["优势","全球渠道200+国家","电气+冷却一体化粘性"],["CDU ASP","$120K-150K(100kW)","$130K-180K(含集成)"],["海悟机会","价格低30%+本土化","2029+远期差异化"]], { colW: [2,3.5,3.5] });
  source(s, "数据来源：\\n• SEC EDGAR: sources/sec/oem/VRT/ → Vertiv 10-K 2025\\n• SEC EDGAR: Schneider Electric (SBGSY) 10-K 2025\\n• sources/eastmoney/ → 东方财富研报 Vertiv/数据中心基建\\n• 【估算】基于公开数据推算，标记为估算: CDU ASP基于行业报价; 液冷营收为估算");
  insight(s, "Vertiv/Schneider CDU价格差30%+→国产替代空间大，海悟本土优势");
  badge(s, "32");
}
module.exports = { createSlide };
