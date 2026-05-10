const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, topBar, footer, title, source, insight, bulletList, kpiRow } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, '字节跳动-海悟进入路径与关键动作');
  kpiRow(s, [
    { label: '液冷采购规模', value: '¥18-22B', color: 'F5F7FA' },
    { label: '海悟SAM目标', value: '¥30-60M', color: t.light },
    { label: '窗口期', value: '6-12月', color: 'FFF8F0' },
    { label: '优先级', value: 'P0', color: t.light }
  ], 0.65);
  bulletList(s, [
    { title: '① 直接路径', text: 'Manifold送样→浪潮(核心OEM)→字节。渠道最短验证最快。', color: t.primary },
    { title: '② 自研芯片机会', text: '字节自研芯片冷板=全新需求→无既有供应商→海悟P0:电源冷板+CPU冷板。', color: t.primary },
    { title: '③ 时间窗口', text: '2026Q2-4浪潮液冷大单执行→Manifold+冷板送样→2027H1批量。窗口仅6-12月。', color: t.primary },
    { title: '④ 竞争态势', text: '英维克/CoolIT已进入浪潮供链=既有关系→海悟需差异化:电源冷板(它们没做)+性价比。', color: t.primary }
  ], 1.55);
  insight(s, 'P0(最高)→Manifold+电源冷板同步送样→2027批量¥100M目标');
  source(s, 'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md → 字节GPU直采¥2,300亿 昇腾950PR 25万颗; sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-bytedance-alibaba-idc-procurement-2026.md → 字节IDC 1.5GW ≥21kW强制液冷; sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-gb300-liquid-cooling-domestic-breakthrough.md → GB300 NVL72=135-155kW 国产冷板降价25-32%; 推算:字节单柜Manifold¥48K-120K×3,000柜≈¥150M-360M/年 海悟目标15-20%=¥30M-60M');
  badge(s, '14');
}
module.exports = { createSlide: createSlide };
