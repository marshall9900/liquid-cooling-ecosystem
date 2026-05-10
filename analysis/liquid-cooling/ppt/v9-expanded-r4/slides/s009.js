const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, '阿里巴巴-业务概览');
  dataTable(s, ['维度', '数据'], [
    ['AI CAPEX 2026E', '三年¥4,800亿(年化¥1,600亿)'],
    ['超节点标准', '玄武128卡+CIPU 3.0+CXL 3.1'],
    ['自建DC', '张北/乌兰察布/杭州/南通/河源 全球200+节点'],
    ['GPU持有', '昇腾10-15万+平头哥50-60万(自研)'],
    ['战略定位', '自主可控AI Infra 磐久3.0全液冷']
  ], { colW: [2, 7], y: 0.7 });
  insight(s, '阿里AI Infra投入三年¥4,800亿 磐久3.0为全液冷架构的自主可控超节点');
  source(s, 'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md → 阿里三年¥3,800亿 AI收入占比>20% 昇腾950PR预购15万颗; sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-06-ali-ppu-chip-overview.md → 平头哥真武810E 300W/96GB HBM2e 万卡集群已部署; sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-bytedance-alibaba-idc-procurement-2026.md → 阿里2026 IDC需求~2GW 国产卡比例20-30%; sources/sec/oem/VRT/submissions_2026-05-09.json, sources/sec/ott/MSFT/submissions_2026-05-09.json → SEC EDGAR 阿里财报; 阿里CEO吴泳铭公开声明三年¥4,800亿(后调至¥3,800亿) 磐久3.0全液冷架构');
  badge(s, '09');
}
module.exports = { createSlide: createSlide };
