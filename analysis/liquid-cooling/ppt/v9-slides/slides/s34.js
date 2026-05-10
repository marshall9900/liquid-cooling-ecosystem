let pptxgen, t;
pptxgen = require('pptxgenjs'); t = require('./theme');
const { badge, bar, ft, title, bulletList, insightBox } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  bar(s, t);
  title(s, t, '国产替代时间窗口');

  bulletList(s, t, [
    {
      title: 'Manifold — 已实现国产替代 → P0 2026出量',
      text:  '国内厂商(英维克/高澜/同飞/申菱)已完全替代进口，无技术差距。海悟已有基础→2026送样H3C/浪潮→当年出量¥50M+。',
      color: t.primary
    },
    {
      title: '电源冷板 — 蓝海无人 → P0 定义标准',
      text:  '全球无专业供应商，无替代对象。海悟首发优势：2026研发→2027送样→2028量产。窗口期18-24个月，竞品空白期是最大护城河。',
      color: t.secondary
    },
    {
      title: '内存冷板 — 差异化切入 → P0 跟随电源',
      text:  '少数厂商在研(Intel主导内存液冷标准)，赛道初开。海悟可跟随电源冷板同步研发，2027送样。',
      color: t.accent
    },
    {
      title: 'CDU — 国产化率>60% → P2 远期储备',
      text:  '英维克/Vertiv/曙光/高澜等8+厂商充分竞争。同质化严重+价格战 → 海悟不正面参战，但需储备CDU能力(系统级打包)。',
      color: '0077b6'
    },
    {
      title: 'GPU冷板 + 快接头 — 认证壁垒高，2-3年窗口 → P1/P2储备',
      text:  'GPU冷板：NVIDIA认证需12-18月，CoolIT/AVC锁定。CPU冷板：Intel UQD需24-36月。快接头：Staubli密封/耐久专利保护，国产需突破材料科学。P1并行研发、P2择机进入。',
      color: t.primary
    }
  ], 0.65);

  insightBox(s, t, '💡 时间窗口判断',
    '黄金窗口(0-2年)：Manifold出量 + 电源冷板定义标准。白银窗口(2-3年)：CPU冷板Intel UQD认证 + 内存冷板。远期(3年+)：GPU冷板NVIDIA认证 + CDU系统打包 + 快接头国产替代。三阶段节奏必须严格把控，先快后深。',
    0.5, 4.5, 9, 0.7
  );

  ft(s, t);
  badge(s, '34', t);
}

module.exports = { createSlide };
