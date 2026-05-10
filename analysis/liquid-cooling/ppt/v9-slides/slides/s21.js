const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, bar, ft, title, dataTable, takeaway } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  bar(s, t);
  title(s, t, 'OEM液冷组件采购规模估算');

  dataTable(s, t,
    ['组件', '单柜数量', 'ASP(¥)', '2026E采购\n(¥B)', '2028E采购\n(¥B)', '增速', '备注'],
    [
      ['GPU冷板', '72', '2000-3000', '2.5-4.5', '8-15', '3x', 'NVIDIA认证加成'],
      ['CPU冷板', '18-36', '600-1200', '0.3-0.8', '1.5-3', '4x', 'Intel UQD认证'],
      ['电源冷板', '36+', '400-800', '0.3-0.6', '1.5-3', '5x', '蓝海，空白'],
      ['内存冷板', '72', '250-400', '0.3-0.6', '1.5-3', '5x', 'Gen6 SSD趋势'],
      ['快接头', '200+', '150-600', '1.0-2.5', '4-10', '4x', 'Staubli垄断'],
      ['CDU', '1-2', '100-200K', '1.0-2.0', '4-8', '4x', 'OEM集成'],
      ['Manifold', '8-16', '4-12K', '0.5-1.0', '2-5', '5x', '低壁垒出量'],
      ['合计', '—', '—', '6-12', '22-47', '~4x', '—'],
    ],
    [1.2, 0.8, 1.0, 1.2, 1.2, 0.7, 2.9],
    0.55
  );

  takeaway(s, t, '单NVL72柜液冷BOM ~$50-100K → 折算¥35-70万/柜 → 2026E中国液冷组件¥6-12B。Manifold：低壁垒/高增速（5x）→ 海悟P0出量品类。', 4.45);

  ft(s, t);
  badge(s, '21', t);
}
module.exports = { createSlide };
