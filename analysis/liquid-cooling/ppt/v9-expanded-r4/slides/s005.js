const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');

function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, '中国AIDC建设趋势（至2030年）');
  dataTable(s, ['指标', '2024A', '2025E', '2026E', '2028E', '2030E'], [
    ['在架机柜(万架)', '900', '1,085', '~1,400', '~2,200', '~3,000'],
    ['IT负载(GW)', '~2.25', '~2.72', '~3.5', '~5.5', '~7.5'],
    ['智算中心负载(GW)', '~0.8', '~1.3', '~2.0', '~3.8', '~5.5'],
    ['液冷机柜占比', '~15%', '~30%', '~45%', '~65%', '>70%'],
    ['单柜功率峰值', '30kW', '80kW', '200kW', '300kW', '400kW'],
    ['新建DC PUE要求', '≤1.25', '≤1.25', '≤1.20', '≤1.15', '≤1.15']
  ], { colW: [3, 1.2, 1.2, 1.2, 1.2, 1.2], y: 0.65 });
  insight(s, '全球DC容量2025年103GW→2030年200GW(CAGR 12%) 液冷占比从15%升至70%+');
  source(s, '中国信通院 数据中心发展报告(2026) → AIDC规模; 中国信通院 智算中心液冷产业全景研究报告(2025年) → 液冷产业数据; sources/rss/2026-05-09/TrendForce液冷市场报告 → 液冷预测; sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-06-global-liquid-cooling-market-173b-usd.md → MarketsandMarkets全球芯片级液冷$33.3B(2026E)→$173.1B(2032E) CAGR 26.5%; 推算:IT负载=机柜数×2.5kW 智算负载=总负载×智算占比 液冷占比=智算÷总 2028-2030线性外推 【估算】基于公开数据推算');
  badge(s, '05');
}
module.exports = { createSlide };
