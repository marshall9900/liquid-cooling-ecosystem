const { badge, topBar, footer, title, dataTable, source } = require('./_h');
function createSlide(p) { const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s);
  title(s, "看自己：海悟机柜级液冷组件能力评估");
  dataTable(s, ["维度","现有","差距","补全","时间"], [
    ["热设计","M+(风冷转液冷)","GPU/CPU仿真","招聘+校企","6-9月"],
    ["制造","M++(焊接/组装)","洁净+氦检","设备采购","3-6月"],
    ["测试","M(温控测试台)","热性能台","自建¥200K","4-8月"],
    ["认证","M--(空白)","Intel/NV/OCP","Intel先(2026Q2)","12-24月"],
    ["供应链","M(铝板/管/泵)","快接头/密封件","开发+国产","6-12月"],
    ["客户","M+(H3C/浪潮/宁畅)","OTT=无","通过OEM","3-12月"],
    ["品牌","M-(IDC有)","液冷=无","Manifold批量","6-18月"]
  ], { colW: [1,1.2,1.2,1.5,1] });
  source(s, "能力对标: sources/sec/oem/VRT/submissions_2026-05-09.json, sources/sec/oem/VRT/VRT-10-K_2026-02-13.md026-02-13.md → Vertiv全球23个制造基地+9个研发中心 | sources/sec/oem/VRT/submissions_2026-05-09.json, sources/sec/oem/NVENT/submissions_2026-05-09.json → nVent热管理全球产能 | 海悟内部评估 → 最大短板=认证(与CoolIT差距12-24月) 最快补=测试台(¥200K) | 📐铁律⑩索引");
  footer(s); badge(s, "79"); }
module.exports = { createSlide };
