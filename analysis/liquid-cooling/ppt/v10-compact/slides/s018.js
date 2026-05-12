const h = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; h.topBar(s); h.footer(s);
  h.title(s, '寒武纪 | 芯片规格 + 液冷策略 最开放的国产GPU生态');
  h.dataTable(s, ['芯片','TDP','HBM','制程','出货(2026E)','OEM'], [['590','350W','64GB HBM2e','7nm','~30万','浪潮/宁畅/联想'],['690','~500W','128GB HBM3','5nm','~20万','浪潮/宁畅']], { y: 0.65, rowH: 0.25, colW: [1,0.9,1.1,0.8,1,1.8] });
  h.bulletList(s, [{ title: '生态特点', text: '不指定液冷供应商→OEM自主选择→最开放的国产GPU液冷生态 | 590→690功耗跳升=冷板刚需', color: '1F497D' },{ title: '海悟机会', text: 'Manifold直接(无认证)→冷板P1(低门槛)→CPU冷板搭售 | 出货:2026E 50万卡→2028E 150万卡+(3倍增长)', color: '1F497D' }], 1.54);
  h.insight(s, '寒武纪=海悟P0首选: Manifold免认证+冷板低门槛+CPU冷板搭售=最快变现路径 | TAM=50万卡×60%×¥1,500/卡=¥45M(2026E)', Math.min(2.6, 4.4));
  h.source(s, 's024+s025合并: GPU对比表格-精确修正.csv 寒武纪2025年报 阿里寒武纪采购5-6万颗(2026)');
}
module.exports = { createSlide };