const { badge, topBar, footer, title, dataTable, source } = require('./_h');
function createSlide(p) { const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s);
  title(s, "海外竞品速览：AVC/Delta/nVent/Boyd");
  dataTable(s, ["公司","产品","营收(估)","认证","国产替代窗口"], [
    ["AVC(奇鋐)","GPU/CPU冷板","$500M+","NVIDIA","2027-2030"],
    ["Delta(台达)","CPU冷板温控","$300M+","Intel","2027-2028"],
    ["nVent(盈凡)","GPU冷板","$200M+","NVIDIA","2027-2030"],
    ["Boyd","通用冷板","$400M+","OCP","2026-2028"]
  ], { colW: [1.5,1.3,1,1,1.4] });
  source(s, 'AVC(3017.TW)2026Q1→营收180亿新台币+111% | Delta(台达) | SEC:nVent | Boyd官网 | sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-google-liquid-cooling-supply-chain.md → 谷歌TPU 600万颗+台系供应 | NVIDIA认证体系 | 📐铁律⑩索引');
  footer(s); badge(s, "61"); }
module.exports = { createSlide };
