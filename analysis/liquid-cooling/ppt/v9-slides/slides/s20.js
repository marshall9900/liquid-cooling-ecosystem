const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, bar, ft, title, dataTable, takeaway, source } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  bar(s, t);
  title(s, t, 'OEM维度：超节点OEM格局');

  dataTable(s, t,
    ['OEM', '超节点\n份额', '对应GPU', '液冷组件\n年采购(¥B)', '液冷供应商', '海悟\n接触状态', '优先级'],
    [
      ['H3C(新华三)', '~25%', 'NVIDIA+昇腾+寒武纪', '2.5-4.0', 'CoolIT/英维克/AVC', '已接触→待送样', 'P0'],
      ['浪潮信息', '~22%', 'NVIDIA+昇腾+寒武纪', '2.2-3.5', '英维克/高澜', '已接触→待送样', 'P0'],
      ['宁畅信息', '~12%', 'NVIDIA+昇腾+寒武纪', '1.2-2.0', '—', '已接触→待送样', 'P0'],
      ['超聚变', '~18%', '华为昇腾(主)', '1.8-3.0', '华为指定', '待接触(华为壁垒)', 'P1'],
      ['联想', '~10%', 'NVIDIA+海光', '1.0-1.6', '—', '待接触', 'P1'],
      ['华勤技术', '~8%', 'ODM多品牌', '0.8-1.2', '—', '待接触', 'P1'],
    ],
    [1.2, 0.85, 1.6, 1.2, 1.4, 1.3, 0.8],
    0.55
  );

  takeaway(s, t, '💡 核心策略：H3C + 浪潮 + 宁畅 = 57% OEM份额 + 均已接触 → 先集中这三家送样Manifold（目标¥50M/2026）', 4.45);

  source(s, t, '源: oem/2026-05-09-oem-server-insight.md + 液冷客户表_OEM.csv', 4.95);
  ft(s, t);
  badge(s, '20', t);
}
module.exports = { createSlide };
