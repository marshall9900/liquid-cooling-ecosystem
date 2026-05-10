const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, bar, ft, title, dataTable, insightBox } = require('./_h');

function createSlide(p) {
  const s = p.addSlide();
  s.background = { color: 'FFFFFF' };
  bar(s, t);
  title(s, t, '产业链结构：一供/二供/代工厂 → 海悟定位空间');

  dataTable(s, t,
    ['层级', 'GPU冷板', 'CPU冷板', 'CDU', 'Manifold', '快接头', '海悟目标'],
    [
      ['一供(认证)', 'CoolIT,AVC', 'CoolIT,AVC', 'Vertiv,英维克', '英维克,高澜', 'Staubli(72%)', 'P2/P1/P2'],
      ['二供(国产替代)', '英维克,高澜', '高澜', '曙光数创,高澜', '申菱,同飞', '国产(在研)', 'P1/P1/P2'],
      ['代工厂(白牌)', '—', '—', '中小厂商', '—', '—', 'P0(Manifold)'],
      ['海悟定位', 'P2(认证后)', 'P1(Intel UQD)', 'P2(远期)', 'P0(重点)', 'P1(国产替代)', 'P0 Manifold'],
    ],
    [1.2, 1.2, 1.2, 1.2, 1.2, 1.2, 1.4],
    0.65
  );

  insightBox(s, t, '🔍 海悟最佳卡位',
    'Manifold(P0出量) → 电源冷板(P0蓝海) → CPU冷板(P1国产替代) → CDU(P2远期系统)\n抓住"国产GPU+国产液冷"政策窗口 + "电源冷板空白"技术窗口 + "OEM多供应商"采购窗口',
    0.5, 4.05, 9, 1.05);

  ft(s, t);
  badge(s, '35', t);
}
module.exports = { createSlide };
