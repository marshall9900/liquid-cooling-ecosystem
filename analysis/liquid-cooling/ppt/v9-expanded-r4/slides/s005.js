const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, topBar, footer, title, source, insight } = require('./_h');

function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, '中国AIDC建设趋势（至2030年）');

  // ── 双折线图：AIDC机柜 + 液冷机柜 ──
  const chartData = [
    {
      name: 'AIDC机柜（万架·推算）',
      labels: ['2024A', '2025E', '2026E', '2028E', '2030E'],
      values: [20, 26, 90, 170, 310]
    },
    {
      name: '液冷机柜（万架）',
      labels: ['2024A', '2025E', '2026E', '2028E', '2030E'],
      values: [7, 10, 53, 120, 250]
    }
  ];

  s.addChart(pr.charts.LINE, chartData, {
    x: 0.5, y: 0.6, w: 5.5, h: 3.4,
    showLegend: true,
    legendPos: 'b',
    legendFontSize: 8,
    legendColor: t.primary,
    showValue: true,
    dataLabelPosition: 't',
    dataLabelFontSize: 7,
    dataLabelColor: t.primary,
    catAxisLabelFontSize: 8,
    catAxisLabelColor: t.secondary,
    catAxisTitle: '年份',
    catAxisTitleFontSize: 8,
    catAxisTitleColor: t.secondary,
    valAxisLabelFontSize: 7,
    valAxisLabelColor: t.secondary,
    valAxisTitle: '万架',
    valAxisTitleFontSize: 8,
    valAxisTitleColor: t.secondary,
    valGridLine: { color: 'E0E0E0', size: 0.5 },
    lineSize: 2,
    lineSmooth: false,
    catAxisOrientation: 'minMax',
    // Line colors
    chartColors: [t.highlight, t.primary]
  });

  // ── 右侧补充指标卡 ──
  s.addShape('roundRect', { x: 6.3, y: 0.6, w: 3.2, h: 3.4, fill: { color: 'F5F7FA' }, rectRadius: 0.08 });

  const metrics = [
    { label: '智算中心负载', value: '25 GW', unit: '2030E' },
    { label: '液冷渗透率', value: '81%', unit: '2030E (AIDC内)' },
    { label: '单柜功率峰值', value: '400 kW', unit: '2030E' },
    { label: '新建DC PUE', value: '≤1.15', unit: '2030E要求' },
    { label: 'AIDC机柜', value: '310万', unit: '2030E 推算' },
    { label: '液冷机柜', value: '250万', unit: '2030E' }
  ];

  metrics.forEach((m, i) => {
    const y = 0.7 + i * 0.52;
    s.addShape('rect', { x: 6.5, y, w: 0.04, h: 0.4, fill: { color: t.highlight } });
    s.addText(m.label, { x: 6.7, y: y - 0.02, w: 1.6, h: 0.2, fontSize: 7, fontFace: 'Microsoft YaHei', color: t.secondary });
    s.addText(m.value, { x: 6.7, y: y + 0.16, w: 2.6, h: 0.22, fontSize: 10, fontFace: 'Arial', color: t.primary, bold: true });
  });

  insight(s, '📐口径：液冷机柜2026E=~53万架，基于IDC洞察六大集群自下而上加总(京津冀16-20+长三角10-12+珠三角8-10+西南8-10+西北5-8+东北3-5)。取代原公式推算(20万)。可靠性：信通院+IDC圈+券商交叉验证。');
  source(s, 'idc/2026-05-09-idc-datacenter-insight.md 六大集群汇总 → 液冷机柜53万（2026E）; s039 CSP运营商AIDC机柜~10万架（占AIDC~11%）锚定下限; 推算:AIDC机柜=智算负载÷单柜功率(50kW→80kW) 液冷机柜=AIDC×渗透率 | 📐口径三重锁定：全量(~1400万) ⊃ AIDC(~90万) ⊃ 液冷(~53万) | 铁律⑩索引+⑪推算公式');
  badge(s, '05');
}
module.exports = { createSlide };
