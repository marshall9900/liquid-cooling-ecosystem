const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, bar, ft, title, kpiRow, twoCol, insightBox, source } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  bar(s, t);
  title(s, t, 'GPU深度：阿里平头哥');

  kpiRow(s, t, [
    { label: '真武810E TDP', value: '~400W', color: t.secondary },
    { label: '含光系列', value: '推理芯片', color: t.accent },
    { label: '2026E出货', value: '~60万卡', color: t.primary },
    { label: '液冷需求', value: '冷板推荐', color: 'e76f51' },
  ], 0.65);

  twoCol(s, t,
    '生态特点',
    ['阿里自研PPU → 阿里云自用为主', '万卡集群（突破1万卡互联）', '未对外开放 → 不对外授权OEM', '片间互联700GB/s → 超节点设计'],
    '液冷要求',
    ['阿里自研液冷方案 → 磐久服务器', '外部供应商：浸没/冷板均可参与', '万卡集群 → 整柜液冷刚需', '认证：阿里云液冷认证'],
    1.5
  );

  insightBox(s, t, '🔶 海悟机会', '阿里自研芯片 ≠ 封闭生态 → 外部液冷供应商可参与阿里招标\n平头哥万卡集群 → 需机柜级液冷 → Manifold/CDU/冷板齐全需求\n认证+价格+交付三轮考核 → 进入路径：阿里云液冷招标 → H3C（阿里OEM）→ 海悟Manifold', 0.5, 3.8, 9, 0.85);

  source(s, t, '💬 微信源: 2026-05-06-ali-ppu-chip-overview | supernode-insight', 4.9);
  ft(s, t);
  badge(s, '17', t);
}
module.exports = { createSlide };
