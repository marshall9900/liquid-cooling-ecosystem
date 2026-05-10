const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "高澜 / 曙光数创 / 同飞 / 申菱");
  dataTable(s, ["公司","液冷营收","主要产品","客户","vs海悟"], [["高澜股份","¥0.5-1.0B","冷板+CDU","浪潮+腾讯","直接竞争"],["曙光数创","¥0.3-0.5B","冷板+CDU","中科曙光","信创链竞争"],["同飞股份","~¥0.2B","CDU+温控","—","CDU中低端"],["申菱环境","~¥0.15B","Manifold+CDU","—","Manifold竞争"]], { colW: [1.2,1.2,2,1.5,1.8] });
  source(s, "数据来源：\\n• sources/eastmoney/ → 东方财富研报 (search:高澜/曙光数创/同飞/申菱)\\n• 高澜股份2025年报 曙光数创2025年报 同飞股份2025年报 申菱环境2025年报\\n• 【估算】基于公开数据推算，标记为估算: 液冷营收基于年报+行业估测; 高澜最强对手→海悟差异: 电源冷板(它们都未做)");
  insight(s, "高澜(最强)+曙光(信创)→海悟差异：电源冷板(它们都没做=蓝海)");
  badge(s, "33");
}
module.exports = { createSlide };
