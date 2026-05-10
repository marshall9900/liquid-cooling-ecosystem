const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "定目标：2026→2028→2030 三年营收拆解");
  dataTable(s, ["组件","2026","2027","2028","2030","CAGR"], [["Manifold","¥50M","¥100M","¥100M","¥150M","32%"],["电源冷板","—","¥100M","¥120M","¥250M",">100%"],["内存冷板","—","¥50M","¥60M","¥100M",">100%"],["CPU冷板","—","—","¥80M","¥250M",">100%"],["快接头","—","—","¥40M","¥100M",">100%"],["CDU","—","—","—","¥150M","—"],["海外ODM","—","—","¥50M","¥150M",">100%"],["合计","¥50M","¥250M","¥400M","¥1,000M","CAGR 112%"]], { colW: [1.2,1.2,1.2,1.2,1.2] });
  source(s, "表P49：营收目标\\n来源：五看三定v5 SAM/SOM模型 | Kimi+Mega复核\\n¥50M→¥1B CAGR 112% 5年20倍\n📐 推算过程：¥50M→¥1B CAGR = (1,000/50)^(1/5)-1 ≈ 112%。营收 = Σ(组件SAM×海悟份额×产能利用率×客户导入率×价格折扣)。Manifold 2026: ¥39B×70%×0.5%×80%×60% ≈ ¥50M。电源冷板 2030: ¥39B×2%×50%×70%×90% ≈ ¥250M。海外ODM: 海外TAM×0.1%×80% ≈ ¥150M");
  insight(s, "¥50M→¥1B，CAGR 112%。Manifold做大盘，电源冷板做高增速");
  badge(s, "49");
}
module.exports = { createSlide };
