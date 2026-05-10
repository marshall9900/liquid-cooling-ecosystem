const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, bar, ft, title, kpiRow, twoCol, insightBox, source } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  bar(s, t);
  title(s, t, 'GPU深度：寒武纪');

  kpiRow(s, t, [
    { label: '思元590 TDP', value: '350W', color: t.secondary },
    { label: '思元690 TDP', value: '~500W', color: t.accent },
    { label: '2026E出货', value: '~50万卡', color: t.primary },
    { label: '液冷需求', value: '风冷→冷板', color: 'e76f51' },
  ], 0.65);

  twoCol(s, t,
    '对应OEM厂商',
    ['浪潮信息 — 思元590适配主力', '宁畅信息 — 思元适配中', '联想 — 思元590小批量', '宝德 — 思元适配'],
    '液冷要求',
    ['590 350W → 风冷/冷板可选', '690 500W → 冷板推荐', 'MLU-Link互联 → 整柜设计', '较NVIDIA/昇腾生态开放 → OEM自主选液冷'],
    1.5
  );

  insightBox(s, t, '🔶 海悟机会', '寒武纪生态比NVIDIA/昇腾开放 → OEM自主选液冷供应商 → 海悟Manifold/冷板直接机会\n思元590→690功耗升级 = 液冷从"可选"变"推荐" → 2026-27窗口\n进入路径：浪潮/宁畅（寒武纪OEM）→ Manifold送样', 0.5, 3.8, 9, 0.85);

  source(s, t, '🌐 东方财富: sources/reports/company/gpu/寒武纪/ + GPU对比表格', 4.9);
  ft(s, t);
  badge(s, '15', t);
}
module.exports = { createSlide };
