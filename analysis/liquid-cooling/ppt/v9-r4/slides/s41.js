const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "CPU冷板 + 内存冷板：TAM合并¥6-8B");
  dataTable(s, ["类型","TAM 2026E","ASP","渗透率","缺口","认证","海悟(2030)"], [["CPU冷板","¥3-5B","¥600-1,200/片","0→30%(2030)","60%","Intel UQD","~¥250M"],["内存冷板","¥0.3-0.5B","¥200-400/条","5→40%(2030)","~70%","无","~¥100M"],["光模块冷板","新兴","—","—","—","无","远期跟踪"],["存储冷板","新兴","—","—","—","无","远期跟踪"]], { colW: [1.3,1.2,1.2,1,0.8,1,1.3] });
  source(s, "表P41：CPU+内存冷板\\n来源：OCP Cold Plate v3 Spec | Intel UQD Standard | Kimi+Mega复核");
  insight(s, "CPU冷板Intel UQD 2028→海悟P1。内存冷板无认证=先上量");
  badge(s, "41");
}
module.exports = { createSlide };
