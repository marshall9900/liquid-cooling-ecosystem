const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "电源冷板：TAM $0.5B→$39B 蓝海赛道");
  dataTable(s, ["指标","2026","2027","2028","2030"], [["单柜电源冷板数","36片+","50片+","80片+","120片+"],["ASP(¥/片)","400-800","350-700","300-600","250-500"],["中国需求(万片)","10-20","50-100","200-500","800-1,500"],["TAM(¥B)","0.5-1","1.5-3","6-15","20-39"],["国内供应商","空白","空白","空白","空白"],["海悟目标(¥M)","立项","100","200","400"]], { colW: [1.3,1.3,1.3,1.3,1.3] });
  source(s, "表P40：电源冷板\\n来源：NVL72电源液冷分析 | supply-demand-gap分析\\n电源冷板=100%空白+2030E ¥20-39B=蓝海\\n海悟P0→2026Q3立项→先发+专利+绑OEM\n📐 推算过程：TAM = 单柜电源冷板数 × ASP × 液冷机柜数。2026: 36片×¥600×~2万柜(超节点)=¥0.5B。2030: 120片×¥350×~10万柜=¥39B。ASP下降因规模效应。单柜数增加因800V PSU全面液冷+多GPU架构。海悟目标 = TAM×先发份额(以NVL72 PSU方案为基础)");
  insight(s, "电源冷板=100%空白+2030E ¥20-39B=蓝海。海悟P0→2026Q3立项→先发+专利+绑OEM");
  badge(s, "40");
}
module.exports = { createSlide };
