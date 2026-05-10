const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "三看小结：竞争窗口与海悟差异化空间");
  dataTable(s, ["维度","竞争态势","海悟差异化","窗口","倒计时"], [["GPU冷板","CoolIT/AVC双寡头","国产GPU新冷板","2027-2028","~18月"],["CPU冷板","Intel UQD+规模","Intel认证(2028H1)","2028-2030","~24月"],["CDU","Vertiv/Schneider+英维克","本土交付+服务","2029+","远期"],["Manifold","无龙头→分散","送样P0→批量","2026","0-6月！"],["电源冷板","100%外资空白","先发专利+绑OEM","2026Q3","6-12月！"],["快接头","Staubli 72%","搭售+国产","2027-2028","~18月"]], { colW: [1.2,1.8,1.5,0.8,0.8] });
  source(s, "数据来源：P29-P35全部源文件汇总\\n• sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md / sources/wechat/2026-05-07-bytedance-alibaba-idc-procurement-2026.md / sources/wechat/2026-05-07-google-liquid-cooling-supply-chain.md / sources/wechat/2026-05-07-gb300-liquid-cooling-domestic-breakthrough.md / sources/wechat/2026-05-06-global-liquid-cooling-market-173b-usd.md → 微信源\\n• sources/sec/ → SEC EDGAR 13家公司\\n• sources/eastmoney/ → 东方财富研报\\n• 【估算】基于公开数据推算，标记为估算: 倒计时为行业判断");
  insight(s, "P0：Manifold(6月)+电源冷板(12月)→双轮驱动→先卡位后扩张→2027-2028爆发");
  badge(s, "36");
}
module.exports = { createSlide };
