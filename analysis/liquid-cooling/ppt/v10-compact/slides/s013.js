const h = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; h.topBar(s); h.footer(s);
  h.title(s, 'OTT总结 | 决策权分布 + 规格汇总 + 优先级排序');
  h.dataTable(s, ['OTT','冷板','CDU','Manifold','快接头','认证','P'], [['阿里','GPU+CPU+MEM','100-200kW','招标','招标','阿里认证','P1'],['字节','GPU+CPU+电源','100-150kW','招标','自研+招标','不需要','P0'],['腾讯','GPU为主','100-150kW','招标','招标','OCP衍生','P1'],['快手','GPU+CPU','100kW','招标','招标','不需要','P1']], { y: 0.65, rowH: 0.25, colW: [0.9,1.2,1.1,1,1,1,0.6] });
  h.dataTable(s, ['OTT','2026液冷采购(¥B)','海悟SAM(¥M)','进入难度','窗口','P'], [['字节','18-22','150-360','低(零既有供应商)','6-12月','P0'],['阿里','16-20','100-240','中(需认证)','12-18月','P1'],['腾讯','10-15','50-100','中(招标竞争)','6-12月','P1'],['合计','44-57','300-700','—','—','—']], { y: 2.08, rowH: 0.25, colW: [0.9,1.5,1.3,1.3,0.9,0.7] });
  h.insight(s, '字节+阿里+腾讯=OTT液冷80% | P0攻字节(零供应商)+P1阿里/腾讯 | Google TPU V8 1300W全浸没+Anthropic $36B TPU融资=史上最大AI基建 刷新2026-05-30', Math.min(3.5100000000000002, 4.4));
  h.source(s, 's018+s019+s020合并: 四大OTT AI CAPEX ¥6,500亿+(2026E) SAM=液冷采购×(CDU+Manifold+冷板可参与)~10-20% | Google云订单积压$4,600亿 TPU月Token 3200万亿 | Anthropic+Apollo/黑石 $360亿TPU融资 刷新2026-05-30');
}
module.exports = { createSlide };