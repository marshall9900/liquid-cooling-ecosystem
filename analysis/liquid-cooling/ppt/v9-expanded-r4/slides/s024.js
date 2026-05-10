const pptxgen = require('pptxgenjs');
const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, '寒武纪-芯片规格与液冷需求');
  dataTable(s, ['芯片','TDP','HBM','制程','出货(2026E)','OEM'],
    [['590','350W','64GB HBM2e','7nm','~30万','浪潮/宁畅/联想'],
     ['690','~500W','128GB HBM3(估)','5nm(估)','~20万','浪潮/宁畅']],
    { colW: [1,0.9,1.1,0.8,1,1.8] });
  source(s, 'sources/GPU对比表格-精确修正.csv → 思元590/690参数(verified); 寒武纪2025年报 → 营收/出货; sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-bytedance-alibaba-idc-procurement-2026.md → 阿里寒武纪采购5-6万颗; sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-06-super-node-insight.md → 国产超节点2028E ¥3,414亿; 690 TDP估算:590(350W)×制程升级(7nm→5nm)+晶体管增40-50%');
  insight(s, '寒武纪生态最开放 OEM自主选液冷 590→690功耗跳升=冷板刚需');
  badge(s, '24');
}
module.exports = { createSlide };
