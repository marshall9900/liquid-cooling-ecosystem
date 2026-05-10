const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, bar, ft, title, kpiRow, twoCol, takeaway } = require('./_h');

function createSlide(p) {
  const s = p.addSlide();
  s.background = { color: 'FFFFFF' };
  bar(s, t);
  title(s, t, '营收预测双轨：国内基本盘 + 海外增长极');

  kpiRow(s, t, [
    { label: '2026E总营收', value: '¥50M', color: t.accent },
    { label: '2027E总营收', value: '¥200-300M', color: t.secondary },
    { label: '2030E总营收', value: '¥1.5-2.5B', color: t.primary },
    { label: '海外占比(2030E)', value: '25-40%', color: t.accent },
    { label: 'CAGR(4年)', value: '135%+', color: t.primary },
  ], 0.65);

  twoCol(s, t,
    '🇨🇳 国内路线（基本盘）',
    [
      'Manifold先行: H3C/浪潮/超聚变送样',
      '2026H2小批量Manifold → ¥50M',
      '2027: 电源冷板量产 → ¥150-200M',
      '2028: CPU冷板Intel UQD认证后放量',
      '2029: 四件套系统方案 → 年营收¥1B+',
      '2030: 国内份额目标8-12%',
    ],
    '🌍 海外路线（增长极）',
    [
      'Manifold出海: 东南亚OEM工厂优先',
      '2027H2: 电源冷板海外专利布局',
      '2028: Intel UQD认证→全球CPU冷板',
      '2029: 进NVIDIA COOLER-SPEC认证体系',
      '中东/东南亚: 数据中心基建浪潮',
      '2030: 海外营收¥0.5-1.0B(占比25-40%)',
    ],
    1.55
  );

  takeaway(s, t, '▶ 双轨战略：国内用Manifold+电源冷板快速起量建立规模基础 → 海外用CPU冷板+认证借船出海 → 2030年目标成为机柜级液冷"四件套"全球TOP5供应商', 4.3);

  ft(s, t);
  badge(s, '42', t);
}
module.exports = { createSlide };
