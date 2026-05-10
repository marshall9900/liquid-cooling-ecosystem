const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "阿里巴巴：磐久AI Infra 3.0 + 玄武128超节点");
  dataTable(s, ["指标","数据"], [["AI CAPEX 2026E","三年¥4,800亿（年化¥1,600亿）"],["超节点标准","玄武128卡 + CIPU 3.0 + CXL 3.1内存池化"],["单柜功率","~200kW，全液冷架构"],["自主DC","张北/乌兰察布/杭州/南通/河源五大超级DC"],["液冷方案","浸没（方升）+冷板（磐久）双路，CDU/Manifold招标"],["OEM合作","阿里自研服务器 + 新华三代工（浪潮突破中）"],["液冷采购","¥16-20亿/年（~2,000柜×¥80-100万BOM/柜）"],["海悟进入","通过平头哥PPU + 新华三代工 → Manifold/CDU参与"],["窗口","2026-2027磐久3.0量产，液冷供应商选型进行中"]], { colW: [2.2,6.8] });
  source(s, "数据来源：\\n• sources/wechat/2026-05-06-ali-ppu-chip-overview.md → 平头哥PPU芯片参数\\n• sources/wechat/2026-05-06-super-node-insight.md → 超节点液冷方案\\n• sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md → 芯片专家纪要(字节部分包含阿里交叉信息)\\n• sources/wechat/2026-05-07-bytedance-alibaba-idc-procurement-2026.md → 字节/阿里IDC采购\\n• 阿里ODCC 2026演讲 (磐久AI Infra 3.0)\\n• 腾讯新闻 2026.01.29「阿里AI基建提速」\\n• 阿里CEO吴泳铭公开声明 三年¥4,800亿 AI投入\\n• 【估算】基于公开数据推算，标记为估算: 液冷采购 = 单柜BOM(¥80-100万)×柜数(~2,000)\n📐 推算过程：液冷采购(¥/年) = 单柜BOM(¥80-100万)×柜数(~2,000)。单柜BOM拆解: GPU冷板72片×¥2,500=¥180K + CPU冷板36片×¥800=¥28.8K + 电源冷板36片×¥600=¥21.6K + 快接头200个×¥300=¥60K + CDU×¥200K + Manifold×¥80K + 管路×¥170K ≈ ¥80-100万");
  insight(s, "阿里磐久3.0→CXL 3.1→全液冷刚需，单柜~200kW，液冷¥16-20亿/年");
  badge(s, "08");
}
module.exports = { createSlide };
