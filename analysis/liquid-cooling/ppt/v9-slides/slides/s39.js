const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, bar, ft, title, bulletList, takeaway } = require('./_h');

function createSlide(p) {
  const s = p.addSlide();
  s.background = { color: 'FFFFFF' };
  bar(s, t);
  title(s, t, 'Manifold供应格局：中低壁垒 + 快速放量赛道');

  bulletList(s, t, [
    {
      title: '市场规模：¥1.2-2.5B TAM(2026E)',
      text: '单柜1-2个Manifold × ASP ¥2000-5000 × 26.5万柜 = ¥5-26B全球TAM。中国市场¥1.2-2.5B，缺口约15%，基本平衡但持续增长。2030E全球¥3-5B。',
      color: t.accent,
    },
    {
      title: '竞争格局：英维克/高澜领先，国产替代空间大',
      text: '英维克(30%)+高澜(25%)双龙头格局，申菱(10%)+同飞(8%)跟进。海外：nVent/Asetek。技术门槛以制造工艺为主，非强认证壁垒。海悟P0重点发力。',
      color: t.primary,
    },
    {
      title: '海悟竞争优势：流道设计 + 批量制造 + 成本控制',
      text: '海悟现有Manifold产线已具备批量制造能力，流道设计专利积累中。目标客户：H3C/浪潮/超聚变等OEM。策略：送样测试(2026H1)→小批量(2026H2)→规模供货(2027)',
      color: t.secondary,
    },
    {
      title: '2026目标：送样OEM + 实现¥50M首年营收',
      text: '送样H3C/浪潮/超聚变 → 通过OEM验证 → 接单小批量。配合电源冷板+CPU冷板形成"三件套"组合，增强客户粘性。Manifold是海悟液冷出海"量"的发动机。',
      color: t.accent,
    },
  ], 0.65);

  takeaway(s, t, '▶ 核心结论：Manifold是海悟液冷"基本盘"——低门槛快速出量 + 积累OEM关系 → 为电源冷板/CPU冷板导入铺路', 3.8);

  ft(s, t);
  badge(s, '39', t);
}
module.exports = { createSlide };
