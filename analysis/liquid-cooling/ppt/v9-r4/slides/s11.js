const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "其他OTT：快手 / 百度 / 拼多多");
  dataTable(s, ["公司","AI CAPEX 2026E","液冷方案","采购特征","优先级"], [["快手","¥600-800亿","冷板起步(可灵)","招标制/价格敏感","P1"],["百度","¥800-1,000亿","昆仑芯R300+冷板","CDU外购→认证制","P2"],["拼多多","¥300-500亿","风冷为主","液冷需求小","P3"]], { colW: [1.2,1.3,1.5,1.5,1.5] });
  source(s, "数据来源：\\n• sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md → OTT GPU CAPEX汇总\\n• sources/wechat/2026-05-07-bytedance-alibaba-idc-procurement-2026.md → 快手/阿里IDC采购交叉信息\\n• sources/eastmoney/ (666篇研报归档) → 各公司相关研报\\n• SEC EDGAR: sources/sec/ott/BIDU/ (百度10-K)\\n• 【估算】基于公开数据推算，标记为估算: 快手/拼多多AI CAPEX为券商推算");
  insight(s, "核心策略：先攻阿里/字节/腾讯头三，再拓快手/百度");
  badge(s, "11");
}
module.exports = { createSlide };
