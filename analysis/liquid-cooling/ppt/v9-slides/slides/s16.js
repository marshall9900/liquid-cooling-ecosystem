const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, bar, ft, title, kpiRow, twoCol, insightBox, source } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  bar(s, t);
  title(s, t, 'GPU深度：海光信息');

  kpiRow(s, t, [
    { label: 'DCU深算2号 TDP', value: '300W', color: t.secondary },
    { label: 'DCU深算3号 TDP', value: '~500W', color: t.accent },
    { label: '2026E出货', value: '~50万卡', color: t.primary },
    { label: '液冷需求', value: '风冷→冷板', color: 'e76f51' },
  ], 0.65);

  twoCol(s, t,
    '对应OEM厂商',
    ['中科曙光（海光嫡系）— DCU整机主力', '浪潮信息 — DCU适配', '联想 — DCU小批量', 'xGMI互联 → 整柜8卡方案'],
    '液冷特征',
    ['深算2号 300W → 风冷即可', '深算3号 500W → 冷板推荐', '运营商/信创 → 主要客户', '信创政策 = 国产液冷供应商优先'],
    1.5
  );

  insightBox(s, t, '🔶 海悟机会', '信创DCU → 国产液冷供应商优先（政策利好），中科曙光供应链相对开放\n深算3号 500W → 2026年冷板需求启动 → Manifold/CDU直接机会\n进入路径：中科曙光/浪潮 → Manifold + 冷板送样', 0.5, 3.8, 9, 0.85);

  source(s, t, '🌐 东方财富: sources/reports/company/gpu/海光信息/ | 💬 微信: 2026-05-07-haiguang-dcu', 4.9);
  ft(s, t);
  badge(s, '16', t);
}
module.exports = { createSlide };
