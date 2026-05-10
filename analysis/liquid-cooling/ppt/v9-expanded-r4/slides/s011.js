const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, topBar, footer, title, source, insight, bulletList, kpiRow } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, '阿里巴巴-海悟进入路径与关键人');
  kpiRow(s, [
    { label: '年采购规模', value: '¥16-20亿', color: 'F5F7FA' },
    { label: '海悟SAM目标', value: '¥5-24M', color: t.light },
    { label: '窗口期', value: '12-18月', color: 'FFF8F0' },
    { label: '优先级', value: 'P1', color: 'F5F7FA' }
  ], 0.65);
  bulletList(s, [
    { title: '① 认证路径', text: '需阿里云液冷认证(2027目标)→通过H3C(核心OEM)代工服务器→Manifold/CDU进入', color: t.primary },
    { title: '② 思泉关系', text: '思泉为阿里浸没液冷主供→不涉及机柜级冷板组件→海悟CDU/Manifold=补充非冲突', color: t.primary },
    { title: '③ 时间窗口', text: '2026-2027磐久3.0量产期=液冷供应商选型。认证约12月→2026启动认证→2027入池', color: t.primary }
  ], 1.55);
  insight(s, 'P1(间接进入 需时间)→Manifold送样+CDU方案提交→2027批量 单柜Manifold ¥48K-120K×2,000柜=¥100M-240M/年');
  source(s, 'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-06-ali-ppu-chip-overview.md → 平头哥PPU全系; sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-bytedance-alibaba-idc-procurement-2026.md → 阿里2026 IDC~2GW 国产卡20-30% 液冷≥21kW强制; 阿里公开采购信息 推算:单柜Manifold ¥48K-120K×2,000柜≈¥100M-240M/年 海悟目标份额5-10%=¥5M-24M');
  badge(s, '11');
}
module.exports = { createSlide: createSlide };
