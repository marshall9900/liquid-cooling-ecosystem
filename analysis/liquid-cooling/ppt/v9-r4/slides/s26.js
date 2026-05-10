const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "四维需求汇总：TAM / SAM / SOM");
  dataTable(s, ["维度","2026E(¥B)","2028E(¥B)","2030E(¥B)","CAGR","驱动因素"], [["TAM(中国液冷)","39","120","250","59%","DC+GPU+PUE"],["SAM(海悟可服务)","~15","~45","~100","60%","冷板/Manifold/CDU/快接头"],["SOM(国内线)","0.05","0.4","1.0","112%","Manifold→冷板→CDU"],["SOM(海外线)","0","0.1","0.2","—","ODM→OEM认证→自有"]], { colW: [2,1.5,1.5,1.5,0.8,1.7] });
  source(s, "数据来源：\\n• P3-P25全部源文件汇总\\n• sources/sec/ott/GOOG/ | sources/sec/ott/MSFT/ | sources/sec/ott/META/ | sources/sec/ott/AMZN/ / sources/sec/gpu/NVDA/ | sources/sec/gpu/AMD/ | sources/sec/gpu/INTC/ / sources/sec/oem/DELL/ | sources/sec/oem/SMCI/ | sources/sec/oem/VRT/ | sources/sec/oem/NVENT/ → SEC EDGAR 13家公司\\n• sources/wechat/2026-05-06-global-liquid-cooling-market-173b-usd.md → 全球液冷市场173B USD\\n• sources/wechat/2026-05-07-gb300-liquid-cooling-domestic-breakthrough.md → GB300液冷市场数据\\n• 【估算】基于公开数据推算，标记为估算: TAM = Σ(机柜数×单柜BOM) 按GPU/CPU/IDC分解; SAM = TAM×(海悟可服务产品占比 ~50%); SOM = SAM×海悟竞争力\n📐 推算过程：TAM = Σ(液冷机柜数×单柜BOM)。中国2026E液冷机柜~630万柜(45%×1,400万)，单柜BOM ¥6-12万 → TAM ¥39B。SAM = TAM × 海悟可服务产品占比(~50%，冷板/Manifold/CDU/快接头)。SOM(国内) = SAM × 海悟竞争力(2026 0.3%→2030 1.0%)。SOM(海外) = 海外TAM × 0.1%(ODM)");
  insight(s, "TAM CAGR 59%→市场急速膨胀。SAM/TAM比~50%。SOM从¥50M→¥1B 5年20倍");
  badge(s, "26");
}
module.exports = { createSlide };
