let pptxgen, t, badge, bar, ft, title, kpiRow, dataTable;
pptxgen = require('pptxgenjs'); t = require('./theme'); ({badge, bar, ft, title, kpiRow, dataTable} = require('./_h'));
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; bar(s, t);
  title(s, t, '海悟液冷营收预测：2026→2030 组件级拆解');

  dataTable(s, t,
    ['年份', 'Manifold', '电源冷板', '内存冷板', 'CPU冷板', '快接头', 'CDU', '合计'],
    [
      ['2026', '¥50M', '—', '—', '—', '—', '—', '¥50M'],
      ['2027', '¥100M', '¥150M', '¥50M', '—', '—', '—', '¥300M'],
      ['2028', '¥100M', '¥120M', '¥60M', '¥80M', '¥40M', '—', '¥400M'],
      ['2030', '¥150M', '¥250M', '¥100M', '¥250M', '¥100M', '¥150M', '¥1,000M'],
    ],
    [0.65, 1.05, 1.05, 1.05, 1.05, 1.05, 1.05, 1.05],
    0.65
  );

  kpiRow(s, t, [
    { label: '2026-2030 CAGR', value: '~112%', color: t.primary },
    { label: 'Manifold 增长率', value: '3.0×', color: t.accent },
    { label: '冷板合计占比(2030)', value: '60%', color: t.secondary },
    { label: 'CDU 远期占比', value: '15%', color: t.secondary },
    { label: '2030 总营收', value: '¥1.0B', color: t.primary },
  ], 3.15);

  s.addText('营收公式：Σ (组件SAM × 份额 × 产能利用率 × 客户导入率 × 价格折扣) | 客户结构：H3C(50→20%)+浪潮(30→20%)+宁畅(20→10%)+秦淮/IDC(0→20%)+海外ODM(0→15%)', { x: 0.5, y: 4.0, w: 9, h: 0.4, fontSize: 8, fontFace: 'Microsoft YaHei', color: t.secondary });
  s.addText('核心驱动：2026 Manifold破冰 → 2027冷板差异化爆量 → 2028认证后多品类放量 → 2030全栈布局完成，营收5年20倍。', { x: 0.5, y: 4.5, w: 9, h: 0.4, fontSize: 9, fontFace: 'Microsoft YaHei', color: t.accent, bold: true });

  ft(s, t); badge(s, '47', t);
}
module.exports = { createSlide };
