const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "全球AI算力CAPEX军备竞赛（2024-2026E）");
  dataTable(s, ["厂商","2024 CapEx","2025 CapEx","2026E CapEx","AI占比","液冷状态"], [["Google","$530亿","$750亿","$900亿",">60%","TPU v7全液冷"],["Microsoft","$450亿","$650亿","$800亿",">50%","液冷渗透>50%"],["Amazon","$480亿","$650亿","$780亿",">40%","Trainium液冷标配"],["Meta","$280亿","$380亿","$450亿",">60%","液冷园区建设"],["字节跳动","¥800亿","¥1,600亿","¥2,600亿",">80%","72卡全液冷"],["阿里巴巴","¥500亿","¥1,200亿","¥1,600亿",">70%","磐久128全液冷"],["腾讯","¥500亿","¥800亿","¥1,300亿",">60%","ETH-64全液冷"]], { colW: [1.4,1.1,1.1,1.2,0.8,2] });
  source(s, "数据来源：\\n• SEC EDGAR 10-K/10-Q: sources/sec/ott/GOOG/ sources/sec/ott/MSFT/ sources/sec/ott/AMZN/ sources/sec/ott/META/\\n• sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md → 字节GPU ¥2,300亿(芯片专家纪要) + ¥300亿(租赁)\\n• 阿里三年¥4,800亿: 阿里CEO吴泳铭公开声明 三年¥4,800亿 AI投入\\n• CAPEX为各公司公开指引/CEO声明，非财务预测 | AI占比为分析师共识推算\n📐 推算过程：全球OTT CAPEX = Σ(各公司公开指引/CEO声明)。字节¥2,600亿 = ¥2,300亿(直采GPU)+¥300亿(租赁)。液冷组件需求 ~ ¥200万/数据来源：\\n• SEC EDGAR 10-K/10-Q: sources/sec/ott/GOOG/ sources/sec/ott/MSFT/ sources/sec/ott/AMZN/ sources/sec/ott/META/\\n• sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md → 字节GPU ¥2,300亿(芯片专家纪要) + ¥300亿(租赁)\\n• 阿里三年¥4,800亿: 阿里CEO吴泳铭公开声明 三年¥4,800亿 AI投入\\n• CAPEX为各公司公开指引/CEO声明，非财务预测 | AI占比为分析师共识推算亿CAPEX = 行业经验系数(冷板/CDU/Manifold/快接头BOM总和÷超节点CAPEX)");
  insight(s, "2026年全球OTT AI CAPEX超$5,000亿，每$1亿AI CAPEX≈¥200万液冷组件需求");
  badge(s, "03");
}
module.exports = { createSlide };
