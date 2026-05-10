const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, bar, ft, title, bulletList, takeaway } = require('./_h');

function createSlide(p) {
  const s = p.addSlide();
  s.background = { color: 'FFFFFF' };
  bar(s, t);
  title(s, t, '供应链风险评估：各组件风险等级与海悟应对策略');

  bulletList(s, t, [
    {
      title: '🔴 GPU冷板 → 高风险：NVIDIA认证垄断 + 产能瓶颈',
      text: 'NVIDIA认证仅3家(CoolIT/AVC/nVent)，认证周期12-18月，国产GPU液冷需求在新增量。海悟策略：P2中远期通过国产GPU(昇腾/寒武纪)绑定冷板，非NVIDIA认证路径先行切入。',
      color: t.primary,
    },
    {
      title: '🟡 CPU冷板 → 中风险：Intel UQD认证周期长 + 产能不足',
      text: '缺口33%，国内仅英维克/高澜在研。认证门槛高但可预期(2028H1)。海悟策略：P1 2026Q2启动Intel UQD认证，同步OCP Cold Plate v3兼容方案，双轨并进。',
      color: t.secondary,
    },
    {
      title: '🟢 Manifold → 低风险：制造壁垒低 + 国产替代顺畅',
      text: '缺口15%但持续增长，非产能瓶颈而是需求驱动增量。海悟策略：P0快速送样H3C/浪潮/超聚变，2026H2小批量，积累OEM关系为其他组件导入铺路。',
      color: t.accent,
    },
    {
      title: '🟢 快接头 → 中低风险：Staubli单点依赖，国产替代刚需',
      text: '国产化率<5%，缺口20-30%。海悟策略：P1 2026Q3启动研发+配套(1-2年研发周期)，与Manifold/冷板形成组件组合拳，远期自有快接头量利双收。',
      color: t.secondary,
    },
    {
      title: '🔵 CDU → 低风险：同质化竞争，海悟可远期进入',
      text: '缺口≈0%，产能充裕，Vertiv+英维克双龙头格局。海悟策略：P2远期以"机柜级系统方案"打包方式切入(Manifold+冷板+CDU)，不与龙头正面竞争。',
      color: t.accent,
    },
  ], 0.65);

  takeaway(s, t, '▶ 总体评估：供应链风险可控。最大风险是GPU冷板(NVIDIA认证)但可通过国产GPU绕行；Manifold/快接头是中短期核心出量赛道，电源冷板是0风险蓝海机遇', 4.7);

  ft(s, t);
  badge(s, '41', t);
}
module.exports = { createSlide };
