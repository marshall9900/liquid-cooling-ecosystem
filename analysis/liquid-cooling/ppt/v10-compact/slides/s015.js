const pptxgen = require('pptxgenjs');
const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, 'GPU→OEM映射总表');
  dataTable(s, ['GPU','出货(万)','TDP','OEM1','OEM2','液冷','采购(¥B)'],
    [['昇腾','180','310-500W','超聚变(40%)','浪潮(25%)','推荐→必须','1.4-2.7'],
     ['寒武纪','50','350-500W','浪潮(35%)','宁畅(25%)','可选→推荐','0.3-0.6'],
     ['海光','50','300-500W','曙光(40%)','浪潮(25%)','可选→推荐','0.3-0.6'],
     ['平头哥','60','~400W','阿里自用','—','推荐','0.5-0.9'],
     ['合计','340','—','—','—','—','2.5-5.2']],
    { colW: [1.2,0.7,0.9,1.3,1.3,0.8,0.9] });
  source(s,
    'sources/GPU对比表格-精确修正.csv → 20specs 12verified; ' +
    'sources/液冷客户表.ods → GPU-OEM-液冷三维映射; ' +
    'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md → ' +
    '字节¥2,300亿GPU采购/昇腾950PR75万颗全订满/FP4=1.56PFlops(H20×2.87); ' +
    'sources/sec/oem/VRT/submissions_2026-05-09.json, sources/sec/gpu/NVDA/submissions_2026-05-09.json, sources/sec/gpu/NVDA/submissions_2026-05-09.json → NVDA B200 TDP 1000W→液冷必选; ' +
    'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-06-super-node-insight.md → ' +
    '26年国产卡出货248万颗/28年520万颗(CAGR 65%-50%-40%); ' +
    '采购=Σ(出货×ASC)=¥3.1B(中枢) / ¥2.5-5.2B(区间)');
  insight(s, '昇腾(55%+)主导 液冷采购¥2.5-5.2B CAGR 60%+ 国产GPU液冷TAM快速增长');
  badge(s, '30');
}
module.exports = { createSlide };
