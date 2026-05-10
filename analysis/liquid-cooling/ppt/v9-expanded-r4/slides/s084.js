const { badge, topBar, footer, title, dataTable, source } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s);
  title(s, "定目标：2026→2028→2030三年营收拆解");
  dataTable(s, ["组件","2026","2027","2028","2030","CAGR"], [
    ["Manifold","¥50M","¥100M","¥100M","¥150M","32%"],
    ["电源冷板","—","¥100M","¥120M","¥250M",">100%"],
    ["内存冷板","—","¥50M","¥60M","¥100M",">100%"],
    ["CPU冷板","—","—","¥80M","¥250M",">100%"],
    ["快接头","—","—","¥40M","¥100M",">100%"],
    ["CDU","—","—","—","¥150M","—"],
    ["海外ODM","—","—","¥50M","¥150M",">100%"],
    ["合计","¥50M","¥250M","¥400M","¥1,000M","112%"],
  ], { y: 0.65, colW: [1.2,1.2,1.2,1.2,1.2,1.2] });
  source(s, "营收测算依据: P71 TAM/SAM表 | P72 GPU冷板SAM | P73 CPU冷板 | P74 电源冷板 | P75 Manifold/CDU | P76 快接头 | P77 供需缺口 | sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-06-global-liquid-cooling-market-173b-usd.md → 全球TAM验证 | 📐 CAGR=(1000/50)^(1/5)-1≈112% 营收=Σ(SAM×份额×导入率×折扣)");
  badge(s, "84");
}
module.exports = { createSlide };
