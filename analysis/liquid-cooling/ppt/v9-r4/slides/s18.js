const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "昆仑芯 / 沐曦 / 景嘉微 / 其他GPU");
  dataTable(s, ["GPU","TDP","出货(万)","OEM","液冷","海悟"], [["昆仑芯R300","~350W","20","百度自用","风冷+冷板","P2"],["沐曦MXC500","~300W","10","联想/浪潮","风冷","P3"],["景嘉微JM9","~200W","5","—","风冷","P3"],["摩尔线程S4000","~250W","5","—","风冷","P3"],["壁仞BR100","~400W","5(受限)","—","冷板","P3"]], { colW: [1.3,1,0.8,1.2,1,1.2] });
  source(s, "数据来源：\\n• sources/GPU对比表格-精确修正.csv → 20规格GPU对比表\\n• sources/eastmoney/ (666篇研报归档) → 东方财富研报 GPU厂商\\n• 【估算】基于公开数据推算，标记为估算: 多数GPU出货<5万 液冷需求有限; 壁仞出货受制裁限制");
  insight(s, "策略：聚焦昇腾+寒武纪+海光(主力国产GPU)，其余P3");
  badge(s, "18");
}
module.exports = { createSlide };
