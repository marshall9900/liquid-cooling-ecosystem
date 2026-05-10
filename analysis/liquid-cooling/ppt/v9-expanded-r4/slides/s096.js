const { badge, topBar, footer, title, dataTable, source } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s);
  title(s, "敏感性分析：Variables驱动SOM");
  dataTable(s, ["Variable","悲观","基准","乐观","驱动因子"], [
    ["液冷机柜渗透率(2028)","50%","65%","80%","PUE政策强度"],
    ["Manifold单价(¥K)","6","10","14","竞争格局"],
    ["海悟OEM份额","2%","5%","10%","送样成功率"],
    ["电源冷板TAM(¥B,2030)","12","25","45","800V PSU渗透速度"],
    ["认证速度","2029+","2028 H1","2027 H2","团队能力"],
    ["SOM(2028,¥M)","150","400","900","所有变量综合"],
  ], { y: 0.65, colW: [1.5,1,1,1,1.5] });
  source(s, "敏感性依据: 国信证券 2025-09-29 → 液冷渗透率基准65%(2030E) | 国海证券 2024-10-20 → GB200重塑液冷价值 渗透率加速 | sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-06-global-liquid-cooling-market-173b-usd.md → 全球TAM弹性 | 📐悲观/乐观=基准×0.4/2.25 核心杠杆=渗透率×份额×认证_铁律⑩");
  badge(s, "96");
}
module.exports = { createSlide };
