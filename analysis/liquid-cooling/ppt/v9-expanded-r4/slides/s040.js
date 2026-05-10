const pptxgen = require('pptxgenjs');
const { badge, topBar, footer, title, dataTable, source, insight, takeaway } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, '国内IDC运营方-液冷需求');
  dataTable(s, ['IDC','机柜(万)','液冷需求','典型客户','采购','海悟'],
    [['万国(GDS)','30+','强(AI DC)','阿里/字节/腾讯','CDU/Manifold','P1'],
     ['秦淮数据','20+','强(字节)','字节(最大)','运营商级','P1'],
     ['数据港','15+','中(阿里)','阿里','阿里认证','P1'],
     ['世纪互联','10+','增长中','多元','招标','P2'],
     ['光环新网','8+','中','AWS/多元','招标','P2']],
    { colW: [1.3,1,1.2,1.4,1.3,1.2] });
  source(s, 'IDC行业公开数据(各公司年报); sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-bytedance-alibaba-idc-procurement-2026.md → 字节/阿里IDC→秦淮/数据港通道; 秦淮(字节通道)→液冷CDU/Manifold≈¥5-8B/年');
  insight(s, '秦淮(字节通道)/数据港(阿里通道)/万国(多元通道)=CDU/Manifold P1');
  takeaway(s, 'IDC通道优先级: 秦淮(字节)>数据港(阿里)>万国(多元)  CDU/Manifold通过OEM交付', 4.7);
  badge(s, '40');
}
module.exports = { createSlide };
