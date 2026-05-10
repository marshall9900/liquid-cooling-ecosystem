const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, bar, ft, title, dataTable, insightBox } = require('./_h');

function createSlide(p) {
  const s = p.addSlide();
  s.background = { color: 'FFFFFF' };
  bar(s, t);
  title(s, t, 'CDU供应格局：功率段/供应商/产能全景');

  dataTable(s, t,
    ['供应商', '功率段覆盖(kW)', '冷却方式', '2026E产能(台)', '主要客户', '海悟可及性'],
    [
      ['Vertiv', '300-2000', '直膨+冷冻水', '15000-20000', 'NVIDIA,Equinix', '低(认证壁垒)'],
      ['英维克', '200-1500', '冷冻水+间接蒸发', '8000-12000', '阿里,字节,腾讯', '中(不同功率段)'],
      ['曙光数创', '100-800', '冷冻水', '3000-5000', '三大运营商', '中(非竞品重叠)'],
      ['高澜', '50-500', '冷冻水', '2000-3000', '数据中心集成商', '高(功率段不重叠)'],
      ['申菱/同飞', '50-300', '冷冻水', '1000-2000', '中小IDC', '高(可OEM代工)'],
    ],
    [1.3, 1.4, 1.3, 1.3, 1.6, 1.3],
    0.65
  );

  insightBox(s, t, '💡 CDU供应洞察',
    'CDU市场供需基本平衡(缺口≈0%)，同质化竞争激烈。Vertiv+英维克双龙头格局，产品同质化严重。\n海悟定位P2(远期系统打包)：不与Vertiv/英维克正面竞争，通过Manifold+冷板客户基础，远期以"机柜级系统方案"切入CDU市场',
    0.5, 4.2, 9, 0.9);

  ft(s, t);
  badge(s, '38', t);
}
module.exports = { createSlide };
