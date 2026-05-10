const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "国内主要CSP：液冷部署与采购特征");
  dataTable(s, ["CSP","新增DC(万架)","液冷渗透","液冷方案","采购方式","海悟"], [["移动云","3-4",">40%","冷板为主","招标CDU/Manifold","P1(国资)"],["天翼云","2-3",">45%","冷板为主","招标(国资)","P1(国资)"],["联通云","1-2",">40%","冷板","招标","P2(规模小)"],["京东云","0.3-0.5","~30%","冷板","招标","P3"],["UCloud","0.1-0.2","~50%","—","—","P3"]], { colW: [1.2,1.4,1,1,1.5,1.5] });
  source(s, "数据来源：\\n• 三大运营商2025年报 (中国移动/中国电信/中国联通)\\n• 中国信通院 数据中心发展报告(2026)\\n• IDC行业数据中心数据\\n• sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md → OTT GPU CAPEX (含运营商信息)\\n• sources/rss/2026-05-09/ → RSS snapshot 运营商IDC\\n• 【估算】基于公开数据推算，标记为估算: CSP CDU/Manifold自主采购(非GPU绑定)");
  insight(s, "CSP CDU/Manifold自主采购(非GPU绑定)，移动云/天翼云规模最大→P1");
  badge(s, "23");
}
module.exports = { createSlide };
