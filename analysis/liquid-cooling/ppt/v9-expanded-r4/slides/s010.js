const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, '阿里巴巴-磐久128 AL128超节点与液冷策略');
  dataTable(s, ['维度', '详情'], [
    ['超节点', '磐久128 AL128 (2025云栖)/ 128-144 GPU / 350kW供电+500kW散热'],
    ['液冷方案', '冷板式(覆盖GPU/CPU/NPO) / 6U CDU / 快插接头+浮动盲插+Manifold'],
    ['液冷采购', 'CDU/Manifold→招标 冷板→OEM推荐→需阿里自有认证'],
    ['液冷供应商', 'CoolIT(冷板)+英维克(CDU)+思泉(浸没)'],
    ['海悟机会', 'CDU/Manifold招标→通过H3C间接→阿里自有测试认证']
  ], { colW: [2, 7], y: 0.7 });
  insight(s, '磐久128 单GPU 2kW液冷→350kW供电→Manifold+CDU招标→海悟通过H3C+认证进入');
  source(s, 'sources/reports/supernode/H3_AP202604121821141903_1.pdf 华源证券→磐久128; sources/reports/supernode/H3_AP202604141821191501_1.pdf 国信证券→535亿美元; 推算:液冷采购≈¥16-20亿/年(~2,000柜×¥80-100万BOM)');
  badge(s, '10');
}
module.exports = { createSlide: createSlide };
