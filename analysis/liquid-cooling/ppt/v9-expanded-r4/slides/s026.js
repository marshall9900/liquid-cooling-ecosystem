const pptxgen = require('pptxgenjs');
const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, '海光DCU-芯片规格与信创机会');
  dataTable(s, ['芯片','TDP','HBM','制程','出货(2026E)','OEM'],
    [['深算2号','300W','32GB HBM2','7nm','~20万','中科曙光/浪潮'],
     ['深算3号','~500W','64GB HBM3(估)','5nm(估)','~30万','中科曙光/浪潮']],
    { colW: [1,0.9,1.1,0.8,1,1.8] });
  source(s,
    'sources/GPU对比表格-精确修正.csv → 深算2号TDP=300W/HBM2 32GB(verified); ' +
    'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-haiguang-dcu-deep-compute-series.md → 海光DCU深算系列规格与出货预估; ' +
    '海光信息2025年报 → DCU出货~17-22万卡(Hygon HY-D01); ' +
    'sources/sec/oem/VRT/submissions_2026-05-09.json, sources/sec/gpu/NVDA/submissions_2026-05-09.json, sources/sec/gpu/AMD/submissions_2026-05-09.json → AMD EPYC/Instinct TDP演进350→700W; ' +
    'sources/sec/oem/VRT/submissions_2026-05-09.json, sources/sec/gpu/NVDA/submissions_2026-05-09.json, sources/sec/gpu/NVDA/submissions_2026-05-09.json → NVDA Blackwell B200 TDP=1000W; ' +
    'sources/sec/oem/VRT/submissions_2026-05-09.json, sources/sec/gpu/NVDA/submissions_2026-05-09.json, sources/sec/gpu/INTC/submissions_2026-05-09.json → INTC Gaudi3 TDP=600W(Falcon Shores延期); ' +
    '信创DCU→国产液冷优先; 3号TDP~500W触发冷板液冷需求');
  insight(s, '信创DCU→国产液冷优先(政策利好) 中科曙光生态相对开放 深算3号500W=液冷刚需 2027起量');
  badge(s, '26');
}
module.exports = { createSlide };
