const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, bar, ft, title, kpiRow, twoCol, insightBox, source } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  bar(s, t);
  title(s, t, 'GPU深度：华为昇腾');

  kpiRow(s, t, [
    { label: '910B TDP', value: '310W', color: t.secondary },
    { label: '950PR TDP', value: '~400W', color: t.accent },
    { label: '950DT TDP', value: '~500W', color: t.primary },
    { label: '2026E出货', value: '~180万卡', color: 'e76f51' },
  ], 0.65);

  twoCol(s, t,
    '对应OEM厂商',
    ['超聚变（华为嫡系）— 主要OEM，昇腾整机', '浪潮信息 — 昇腾服务器前二', '宁畅信息 — 昇腾适配中', '宝德 / 长江计算 — 昇腾整机'],
    '液冷要求',
    ['910B 310W → 风冷/冷板均可', '950PR 400W → 推荐冷板', '950DT 500W → 冷板为主', 'Atlas 900超节点 → 液冷整柜', 'HCCS互联 + Atlas机柜规格'],
    1.5
  );

  insightBox(s, t, '🔶 海悟机会', '昇腾体系由超聚变主导 → 需先打入超聚变/浪潮\n冷板由华为指定供应商（NVIDIA模式）→ 冷板P2\n⚠️ 可通过Manifold/CDU（非GPU绑定）切入华为生态\n窗口：910B→950PR/DT功耗升级 → 液冷从"可选"变"必须"', 0.5, 4.0, 9, 0.85);

  source(s, t, '💬 微信源: 2026-05-06-super-node-insight + GPU对比表格', 5.0);
  ft(s, t);
  badge(s, '14', t);
}
module.exports = { createSlide };
