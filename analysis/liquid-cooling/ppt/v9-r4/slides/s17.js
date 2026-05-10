const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "阿里平头哥：真武810E + 万卡集群");
  dataTable(s, ["指标","数据"], [["TDP","~400W"],["出货(2026E)","~60万卡(阿里自用为主)"],["万卡互联","突破1万卡互联 片间700GB/s"],["超节点","全液冷架构 GPU+交换+存储全覆盖"],["液冷采购","阿里云招标(认证+价格+交付)"],["海悟","万卡集群=机柜级液冷 均可参与"]], { colW: [2.5,6.5] });
  source(s, "数据来源：\\n• sources/wechat/2026-05-06-ali-ppu-chip-overview.md → 平头哥PPU芯片详细概述\\n• sources/wechat/2026-05-06-super-node-insight.md → 超节点液冷方案\\n• sources/wechat/2026-05-07-bytedance-alibaba-idc-procurement-2026.md → 阿里IDC采购\\n• 阿里ODCC 2026 公开演讲\\n• 【估算】基于公开数据推算，标记为估算: 出货量/液冷采购为推算\\n• 阿里自研芯片≠封闭生态→外部液冷可参与招标");
  insight(s, "阿里自研芯片≠封闭生态，外部液冷供应商可参与招标");
  badge(s, "17");
}
module.exports = { createSlide };
