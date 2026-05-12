const pptxgen = require('pptxgenjs');
const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, 'GPU生态开放度与海悟策略矩阵');
  dataTable(s, ['GPU','出货(万)','液冷绑定','认证','海悟进入','P'],
    [['昇腾','180','华为指定(半封闭)','华为认证','Manifold/CDU','P1'],
     ['寒武纪','50','OEM自主(最开放)','较宽松','全组件','P0'],
     ['海光','50','曙光绑定(半开放)','曙光认证','Manifold/CDU','P1'],
     ['平头哥','60','阿里招标(半开放)','阿里认证','Manifold/CDU/冷板','P1']],
    { colW: [1,0.8,1.5,1.2,1.5,0.6] });
  source(s, 'sources/GPU对比表格-精确修正.csv+sources/液冷客户表.ods; 开放度评估: 先攻寒武纪=最快路径');
  insight(s, '生态开放度: 寒武纪>海光>平头哥>昇腾。先攻寒武纪=最快变现路径');
  badge(s, '31');
}
module.exports = { createSlide };
