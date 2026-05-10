const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "CoolIT / AVC：NVIDIA认证一供，国际双寡头");
  dataTable(s, ["维度","CoolIT Systems","AVC(奇鋐科技)"], [["客户","Dell/HPE/SMCI/H3C","Dell/HPE/联想/字节"],["液冷营收","$800M+(估)","$500M+(估)"],["NVIDIA认证","Cooler NVL72(一供)","Cooler+Fan模组"],["产品","GPU/CPU冷板+CDU","GPU/CPU冷板+风扇"],["产能","交期4-6周(最快)","产能+价格优势"],["国产替代","2027+国产GPU窗口","2027-2030替代窗口"]], { colW: [2,3.5,3.5] });
  source(s, "数据来源：\\n• CoolIT官网 coolitsystems.com → 产品/NVL72认证\\n• NVIDIA官网 → 认证合作伙伴列表\\n• SEC EDGAR: AVC为台湾上市公司 (奇鋐科技 3017.TW)\\n• sources/wechat/2026-05-07-gb300-liquid-cooling-domestic-breakthrough.md → GB300国产替代参考\\n• sources/wechat/2026-05-06-global-liquid-cooling-market-173b-usd.md → 全球液冷市场数据\\n• 【估算】基于公开数据推算，标记为估算: 营收为行业估测");
  insight(s, "CoolIT+AVC=NVIDIA双寡头，国产GPU液冷窗口(2027+)=海悟替代机会");
  badge(s, "31");
}
module.exports = { createSlide };
