const { badge, topBar, footer, title, dataTable, source } = require('./_h');
function createSlide(p) { const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s);
  title(s, "CDU：全球$4.5B→$20.6B 竞争激烈");
  dataTable(s, ["维度","详情"], [
    ["TAM(全球)","2026 $4.5B→2030 $20.6B CAGR 46.4% (国信证券)"],
    ["TAM(中国)","$1.1B→$5.2B (全球×~25%)"],
    ["规格","50-150kW主需求→200kW+(NVL72) | 集中式/分布式×风液/液液"],
    ["竞争","Vertiv/Schneider/Delta/nVent/CoolIT/台达 | 国内:英维克/曙光/高澜/申菱"],
    ["CDU泵","格兰富/赛莱默主导 | 🔥飞龙HP22K已量产(国产突破)"],
    ["海悟","P2远期→搭售→差异化 先做Manifold出量"]
  ], { colW: [2,7] });
  source(s, "sources/reports/supernode/H3_AP202604141821191501_1.pdf 国信证券→CDU $4.5B→$20.6B; sources/sec/oem/VRT/ → Vertiv 10-K; 📐铁律⑫联动刷新");
  footer(s); badge(s, "74"); }
module.exports = { createSlide };
