const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "Staubli：快接头72%垄断与国产替代窗口");
  dataTable(s, ["维度","详情"], [["全球份额","72%（快接头市场寡头）"],["核心技术","USP密封结构专利→设计模仿困难; ≥50万次插拔"],["利润结构","单价$20-80/个，毛利率60%+"],["产能瓶颈","瑞士工场+华东(交期9-12月)→涨价"],["国产替代","国产<5%→技术差距缩小→窗口2026-2028"],["海悟路线","P1搭售Manifold→触发交期>12周=替代信号"]], { colW: [2,7] });
  source(s, "数据来源：\\n• Staubli官网 staubli.com → 液冷快接头产品线\\n• Google Patents → USP密封结构专利(待搜索)\\n• sources/eastmoney/ → 东方财富研报 快接头/液冷配件\\n• 行业专家访谈 → 交期/产能瓶颈\\n• 【估算】基于公开数据推算，标记为估算: 国产<5%为行业估测");
  insight(s, "Staubli垄断72%→产能瓶颈+涨价→国产替代窗口已到，海悟P1搭售");
  badge(s, "34");
}
module.exports = { createSlide };
