const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, bar, ft, title, dataTable, takeaway, source } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  bar(s, t);
  title(s, t, 'GPU → OEM 映射总表 & 液冷采购规模');

  dataTable(s, t,
    ['GPU', '2026E出货\n(万卡)', '主力OEM', 'TDP范围', '液冷等级', '单卡液冷\nASP(¥)', '液冷采购\n规模(¥B)', '海悟\n优先级'],
    [
      ['昇腾910B/950', '180', '超聚变/浪潮/宁畅', '310-500W', '推荐→必须', '800-1500', '1.4-2.7', 'P1(Manifold)'],
      ['寒武纪590/690', '50', '浪潮/宁畅/联想', '350-500W', '可选→推荐', '600-1200', '0.3-0.6', 'P1(Manifold)'],
      ['海光DCU2/3', '50', '中科曙光/浪潮', '300-500W', '可选→推荐', '600-1200', '0.3-0.6', 'P1(Manifold)'],
      ['平头哥真武', '60', '阿里(自用)', '~400W', '推荐', '800-1500', '0.5-0.9', 'P1(通过H3C)'],
      ['昆仑芯R300', '20', '百度(自用)', '~350W', '可选', '500-1000', '0.1-0.2', 'P2'],
      ['合计', '360', '—', '—', '—', '—', '2.6-5.0', '—'],
    ],
    [1.2, 0.9, 1.5, 0.8, 0.85, 1.0, 1.0, 1.0],
    0.55
  );

  takeaway(s, t, '计算说明：液冷采购规模 = 出货量 × 液冷渗透率 × 单卡ASP。2026年国产GPU液冷采购规模 ¥2.6-5.0B，其中昇腾占主导（55%+）。', 4.45);

  source(s, t, '源: GPU对比表格-精确修正.csv + GPU/OEM分析文件', 4.95);
  ft(s, t);
  badge(s, '19', t);
}
module.exports = { createSlide };
