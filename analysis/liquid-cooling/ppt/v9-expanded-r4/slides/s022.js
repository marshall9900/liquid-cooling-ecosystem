const pptxgen = require('pptxgenjs');
const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, '华为昇腾-芯片规格矩阵');
  dataTable(s, ['芯片','TDP','HBM','制程','出货(2026E)','OEM伙伴'],
    [['910B','310W','64GB HBM2e','7nm','~60万','超聚变/浪潮/宁畅'],
     ['950PR','~400W','96GB(估)','5nm(估)','~80万','超聚变/浪潮/宁畅'],
     ['950DT','~500W','128GB(估)','5nm(估)','~40万','超聚变/浪潮']],
    { colW: [1.2,0.9,1.1,0.8,1.2,2] });
  source(s, 'sources/GPU对比表格-精确修正.csv → 昇腾910B/950PR/950DT(12verified); 华为官网 → Atlas系列; sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md → 昇腾950PR全年产能75万颗已订满, 字节25万颗+阿里15万颗+腾讯/百度>5万颗; 出货量=华为公开指引×产能利用率×良率; TDP=制程/晶体管数/频率外推(950PR/950DT标记估算)');
  insight(s, '昇腾2026E 180万卡出货 占国产GPU 55%+ 绝对主导');
  badge(s, '22');
}
module.exports = { createSlide };
