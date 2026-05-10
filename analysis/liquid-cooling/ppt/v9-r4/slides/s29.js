const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "液冷组件竞争全景：冷板/CDU/Manifold/快接头");
  dataTable(s, ["组件","国际龙头","国内龙头","TAM(¥B)","国产化率","认证壁垒","海悟"], [["GPU冷板","CoolIT/AVC/nVent","英维克/高澜/曙光","5-8","<10%","NVIDIA","P2"],["CPU冷板","CoolIT/AVC/Delta","英维克/同飞","3-5","<15%","Intel UQD","P1"],["CDU","Vertiv/Schneider","英维克/曙光/高澜","8-12","~60%","无","P2"],["Manifold","—","英维克/高澜/同飞","3-5","~70%","无","P0"],["快接头","Staubli 72%","国产<5%","2-4","<5%","专利","P1"]], { colW: [1.1,1.3,1.5,1,0.8,0.9,1.2] });
  source(s, "数据来源：\\n• NVIDIA官网 → 认证合作伙伴列表 (CoolIT/AVC/nVent)\\n• SEC EDGAR: sources/sec/oem/VRT/ (Vertiv) | CoolIT官网 coolitsystems.com\\n• Staubli官网 staubli.com\\n• sources/wechat/2026-05-06-global-liquid-cooling-market-173b-usd.md → 全球液冷市场173B USD\\n• sources/wechat/2026-05-07-gb300-liquid-cooling-domestic-breakthrough.md → GB300液冷竞争格局\\n• sources/eastmoney/ → 国内液冷市场数据\\n• 【估算】基于公开数据推算，标记为估算: 国产化率基于市场份额估算; TAM基于行业推算\n📐 推算过程：国产化率 = 国产供应商出货 ÷ 中国总出货。GPU冷板<10% = CoolIT/AVC/nVent占90%+。CPU冷板<15% = CoolIT/AVC/Delta占85%+。快接头<5% = Staubli+Parker+Eaton占95%+。CDU~60% = 英维克+曙光+高澜合计。Manifold~70% = 国内制造优势");
  insight(s, "海悟战场：Manifold(国产化70%=出量空间)+电源冷板(空白=蓝海)=P0核心");
  badge(s, "29");
}
module.exports = { createSlide };
