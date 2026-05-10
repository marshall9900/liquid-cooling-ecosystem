let pptxgen, t;
pptxgen = require('pptxgenjs'); t = require('./theme');
const { badge, bar, ft, title, bulletList } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  bar(s, t);
  title(s, t, 'IDC运营方机柜级液冷采购特征');

  bulletList(s, t, [
    {
      title: 'CDU — IDC运营方拥有完整自主决策权',
      text:  '规格：100-150kW/台(中压10kV→低压400V→CDU)。招标关键：变频效率/冗余/售后/价格。海悟优势：数据中心热管理基因+系统集成经验。P1：远期参与。',
      color: t.primary
    },
    {
      title: 'Manifold — IDC运营方自主决策',
      text:  '规格：流量/压降/材质匹配。招标关键：制造质量/兼容性/交期/价格。海悟已有基础→P0送样H3C/浪潮/宁畅。',
      color: t.secondary
    },
    {
      title: '冷板(Cold Plate) — 由GPU厂家推荐+OEM选定',
      text:  'IDC运营方一般不直接选冷板。海悟：需过NVIDIA/Intel认证才能进入OEM供应链。P1→P2。优先从CPU冷板(Intel UQD)突破，再攻GPU冷板。',
      color: t.accent
    },
    {
      title: '快接头(Quick Connect) — 关注兼容性',
      text:  'Staubli为主流(72%份额)，IDC关注密封/耐久/压降/价格。海悟P1：国产替代储备，监控Staubli产能/交期/涨价→替代窗口打开。',
      color: '0077b6'
    },
    {
      title: '关键差异 — 三类IDC采购逻辑不同',
      text:  'OTT自建DC：自主决策CDU/Manifold(招标)←海悟可直接参与。运营商DC：国资采购+国产化偏好←移动云/天翼云优先。第三方IDC：客户(OEM/OTT)影响大←先打入OEM再用IDC扩量。',
      color: t.primary
    }
  ], 0.65);

  ft(s, t);
  badge(s, '25', t);
}

module.exports = { createSlide };
