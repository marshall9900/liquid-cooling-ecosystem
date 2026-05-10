const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, topBar, footer, title, source, insight, bulletList, kpiRow } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, '腾讯-海悟进入路径');
  kpiRow(s, [
    { label: '液冷年采购', value: '¥10-15亿', color: 'F5F7FA' },
    { label: 'CDU/Manifold', value: '¥3-5亿', color: t.light },
    { label: '海悟目标', value: '¥15-25M', color: 'FFF8F0' },
    { label: '优先级', value: 'P1', color: 'F5F7FA' }
  ], 0.65);
  bulletList(s, [
    { title: '① 当前状态', text: '腾讯液冷: CoolIT(冷板一供)+英维克(CDU/Manifold)→成熟供链。', color: t.primary },
    { title: '② 进入窗口', text: 'CDU/Manifold→招标制(≠GPU绑定)→海悟P1:参与招标差异化CDU(节能+价格)。', color: t.primary },
    { title: '③ 推荐路线', text: 'Manifold先投招标→中标=进入腾讯供链→CDU/冷板交叉销售。', color: t.primary }
  ], 1.55);
  insight(s, 'P1(CDU/Manifold)→阶段2026下→2027批量¥30M目标');
  source(s, 'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md → 腾讯昇腾950PR预购>5万颗; sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-bytedance-alibaba-idc-procurement-2026.md → 液冷采购格局; 腾讯云公开采购; sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-google-liquid-cooling-supply-chain.md → 英维克谷歌Deschutes CDU; 推算:腾讯液冷≈¥10-15亿/年 CDU/Manifold≈30%=¥3-5亿 海悟目标5%=¥15-25M');
  badge(s, '16');
}
module.exports = { createSlide: createSlide };
