const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s); badge(s, '52');
  title(s, '英维克：国内液冷龙头全栈优势');
  dataTable(s,
    ['维度', '英维克', '海悟差异化'],
    [
      ['液冷营收', '¥1.5-2.0B(2025)', '¥50M(2026)→¥1B(2030)'],
      ['客户', '腾讯/移动/阿里/H3C', 'H3C/浪潮/宁畅(已在接触)'],
      ['认证', 'OCP2025+NVIDIA2027E+Intel UQD进行中', 'Intel UQD 2026Q2启动'],
      ['产品线', 'GPU/CPU冷板+CDU+Manifold全栈', 'Manifold P0+电源冷板 P0'],
      ['海悟策略', '避开正面竞争', '差异化:电源冷板(英维克未做)+Manifold价格-15%']
    ],
    { colW: [1.6, 3.5, 3.5] }
  );
  insight(s, '英维克=最大综合对手 海悟差异: 电源冷板(蓝海)+价格-15%+交付缩短33%', 3.3);
  source(s, '英维克(002837)2025年报 sources/reports/industry_液冷/05_液冷市场_行业综述/[2025-08-17] 国信证券 - 通信行业周报2025年第33周：液冷呈现高景气度，运营商2025上半年业绩稳健增长.pdf sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-gb300-liquid-cooling-domestic-breakthrough.md');
}

module.exports = { createSlide };
