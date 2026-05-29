const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');

function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, 'GPU功耗密度跃升与液冷阈值');
  dataTable(s, ['GPU', 'TDP(W)', '制程', 'HBM', '冷却', '年份'], [
    ['H100 SXM', '700', '4nm', '80GB', '风冷(极限)', '2023'],
    ['H200 SXM', '700', '4nm', '141GB', '风冷', '2024'],
    ['B200', '1000', '4nm', '192GB', '冷板推荐', '2024'],
    ['GB200 NVL72', '1200', '4nm', '384GB', '冷板必须', '2025'],
    ['Rubin Ultra', '1500+', '3nm', '512GB(估)', '液冷整柜', '2026E'],
    ['Rubin Next', '2000+', '2nm', '768GB(估)', '仅液冷', '2027E'],
    ['NVL576', '~720KW', '4nm', '—', '纯液冷', '2027E'],
    ['Google TPU V8', '1300W/颗', '—', '—', '全浸没+CDU', '2026E']
  ], { colW: [1.3, 0.9, 0.7, 1, 1.2, 0.8], y: 0.75 });
  insight(s, 'GPU从700W→2000W+ 仅3年 风冷物理极限600W已被全面突破 | NVL576 600KW/柜纯液冷 | TPU V8 1300W全浸没强制 刷新2026-05-30');
  source(s, 'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-06-super-node-insight.md → NVIDIA GPU路线图 H100→Rubin; NVIDIA官网 → GPU规格; NVL576 600KW/柜纯液冷; Google TPU V8 1300W全浸没+CDU标配; sources/sec/oem/VRT/submissions_2026-05-09.json, sources/sec/gpu/NVDA/submissions_2026-05-09.json → SEC 10-K核实GPU出货; 推算:风冷极限≈600W(风量×温差×比热) Rubin 1500W+=2.5倍风冷极限→液冷唯一解 刷新2026-05-30');
  badge(s, '04');
}
module.exports = { createSlide };
