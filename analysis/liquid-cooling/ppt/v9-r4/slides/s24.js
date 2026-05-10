const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "国内IDC运营方：万国/秦淮/数据港");
  dataTable(s, ["IDC","机柜(万)","液冷需求","典型客户","采购","海悟"], [["万国(GDS)","30+","强(AI DC)","阿里/字节/腾讯","CDU/Manifold","P1"],["秦淮数据","20+","强(字节)","字节(最大客户)","运营商级","P1"],["数据港","15+","中(阿里DC)","阿里","阿里认证","P1"],["世纪互联","10+","增长中","多元化","招标","P2"],["光环新网","8+","中","AWS/多元","招标","P2"]], { colW: [1.3,1,1.2,1.2,1.3,1.3] });
  source(s, "数据来源：\\n• sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md → OTT GPU CAPEX (含IDC运营方)\\n• sources/wechat/2026-05-07-bytedance-alibaba-idc-procurement-2026.md → 字节/阿里IDC采购 → 秦淮(字节)/数据港(阿里)通道\\n• sources/eastmoney/ (666篇研报归档) → 东方财富研报 IDC板块\\n• IDC行业公开数据 (万国/秦淮/数据港年报)\\n• 【估算】基于公开数据推算，标记为估算: 机柜总量为行业估测; 采购特征为行业判断");
  insight(s, "秦淮(字节通道)/数据港(阿里通道)/万国(多元通道)=CDU/Manifold P1");
  badge(s, "24");
}
module.exports = { createSlide };
