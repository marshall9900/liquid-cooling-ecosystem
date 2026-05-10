const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "看自己：海悟机柜级液冷组件能力评估");
  dataTable(s, ["维度","现有能力","差距","补全计划","时间"], [["热设计","M+(风冷转液冷)","GPU/CPU冷板仿真","招聘+校企合作","6-9月"],["制造","M++(管路焊接)","洁净+氦检","设备采购","3-6月"],["测试","M(温控测试台)","热性能测试台","自建¥200K","4-8月"],["认证","M--(空白)","Intel UQD/NV/OCP","Intel先(2026Q2)","12-24月"],["供应链","M(铝板/管/泵)","快接头/密封件","供应商开发","6-12月"],["客户","M+(H3C/浪潮/宁畅)","阿里/字节/腾讯=无","通过OEM","3-12月"],["品牌","M-(IDC有)","液冷品牌=无","Manifold批量","6-18月"]], { colW: [1,1.2,1.2,1.5,1] });
  source(s, "表P46：海悟能力评估\\n来源：五看三定v5 海悟内部评估 | Kimi+Mega复核\\n最大短板=认证(12-24月) 最快补=测试台(3-8月)");
  insight(s, "最大短板=认证，最快补=测试台。热设计+制造+客户=已备，认证→12-24月");
  badge(s, "46");
}
module.exports = { createSlide };
