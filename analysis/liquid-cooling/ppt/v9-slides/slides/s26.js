let pptxgen, t;
pptxgen = require('pptxgenjs'); t = require('./theme');
const { badge, bar, ft, title, twoCol } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  bar(s, t);
  title(s, t, 'Manifold竞品分析');

  twoCol(s, t,
    '国内主要厂商',
    [
      '英维克 — 国内龙头，ASP ¥8-15K/个，管路集成经验丰富，运营商+腾讯渠道',
      '高澜股份 — ASP ¥6-12K/个，性价比路线，电力电子冷却技术延伸',
      '同飞股份 — ASP ¥5-10K/个，中小OEM客户为主，价格导向',
      '申菱环境 — ASP ¥5-10K/个，区域性厂商，特种冷却背景',
      '→ 竞争格局：壁垒低(制造+管路集成)、同质化、出量快'
    ],
    '海悟差异化策略',
    [
      '✅ 已有Manifold基础 → 可对标英维克/高澜',
      '① 电源冷板协同(竞品无人做) = 差异化杀手锏',
      '② 交期/服务/性价比 = 制造基因优势',
      '③ 从Manifold→冷板升级销售 = 客户LTV最大化',
      '④ 送样H3C/浪潮/宁畅(2026) → 进入OEM供应链',
      '→ P0优先级：2026出量¥50M+，先占位再升级'
    ],
    0.65
  );

  ft(s, t);
  badge(s, '26', t);
}

module.exports = { createSlide };
