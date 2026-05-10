let pptxgen, t, badge, bar, ft, title, twoCol, insightBox;
pptxgen = require('pptxgenjs'); t = require('./theme'); ({badge, bar, ft, title, twoCol, insightBox} = require('./_h'));
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; bar(s, t);
  title(s, t, '定策略 · Manifold & 快接头：双线卡位，快速上量');

  twoCol(s, t,
    'Manifold：P0 快速上量',
    [
      'TAM ¥30-50亿(2026E) → ¥250亿(2030E)，CAGR ~60%',
      '单柜ASP ¥0.4-1.2万，数量8-16个/柜',
      '竞争：英维克/高澜/同飞/申菱 10+厂商，壁垒低',
      '海悟已有制造基础 → 技术门槛低 → 快速量产',
      '2026目标 ¥50M：H3C ¥25M + 浪潮 ¥15M + 宁畅 ¥10M',
      '差异化：可靠性+服务+协同冷板销售',
    ],
    '快接头：P1 国产替代窗口',
    [
      'TAM ¥200-400亿(2030E)，Staubli占70%+（瑞士制造）',
      '2026-27：Staubli产能瓶颈 → 国产替代窗口打开',
      '2028E：国产快接头通过OCP认证 → 进入主流供应链',
      '核心竞争要素：寿命>1000次插拔 / 压降<5kPa',
      '海悟策略：搭售（Manifold+快接头一站式）非主攻',
      '触发信号：Staubli涨价或交期>12周 = 替代加速',
    ],
    0.65
  );

  insightBox(s, t, '💡 双线协同', 'Manifold（低壁垒出量建关系）→ 快接头（搭售配套提粘性）→ 冷板（差异化扩品类）→ CDU（全栈升单价）。Manifold就是海悟的"敲门砖"——低成本获客，然后交叉销售冷板、快接头，实现单客户价值最大化。', 0.5, 3.7, 9, 1.2);

  ft(s, t); badge(s, '46', t);
}
module.exports = { createSlide };
