let pptxgen, t;
pptxgen = require('pptxgenjs'); t = require('./theme');
const { badge, bar, ft, title, bulletList, insightBox } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  bar(s, t);
  title(s, t, '电源冷板：蓝海机会');

  bulletList(s, t, [
    {
      title: '市场空白 — 全球无专业电源冷板厂商',
      text:  'TAM：2026E $0.5-1B → 2030E $2-3B，CAGR >50%。GPU/CPU冷板竞争激烈，但电源冷板(48V Bus Converter/VRM/PSU) = 无人区。',
      color: t.primary
    },
    {
      title: '技术驱动力 — 电源功率密度↑ → 液冷必由之路',
      text:  'GPU单卡功耗500W→1200W，48V电源模块功率密度>3kW/inch³。传统风冷无法满足 → 液冷是唯一方案，电源器件必须配套冷板。',
      color: t.secondary
    },
    {
      title: '海悟机遇 — 热管理基因 × 电源冷板协同',
      text:  '海悟数据中心热管理经验 → 直接迁移至电源液冷。电源冷板+Manifold协同出货 = 单客户ASP 2-3倍提升。竞品无一覆盖 → 首发定义标准。',
      color: t.accent
    },
    {
      title: '时间窗口 — 2026-27需求爆发前完成研发',
      text:  '电源液冷需求随GPU功耗升级同步爆发(2027E)。海悟必须2026完成：① 电源冷板样品研发 ② OEM送样认证 ③ 小批量产线建设。',
      color: '0077b6'
    }
  ], 0.65);

  insightBox(s, t, '💡 战略判断',
    '电源冷板 = 海悟三重蓝海之首(竞品无一覆盖)。2026立项研发 → 2027送样H3C/浪潮/宁畅 → 2028量产爆量。SOM从¥0→¥200M+(5年)。窗口期仅18-24个月，必须立即启动。',
    0.5, 3.9, 9, 0.7
  );

  ft(s, t);
  badge(s, '28', t);
}

module.exports = { createSlide };
