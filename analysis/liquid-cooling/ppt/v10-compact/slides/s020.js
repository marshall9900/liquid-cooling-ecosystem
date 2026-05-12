const h = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; h.topBar(s); h.footer(s);
  h.title(s, '阿里平头哥+昆仑芯 | GPU/液冷机会对比');
  h.dataTable(s, ['指标','平头哥(阿里)','昆仑芯(百度)','其他GPU'], [['芯片','真武810E ~400W','昆仑芯R300 350W','沐曦/景嘉微/摩尔/壁仞'],['出货(2026E)','~60万卡(阿里自用)','~20万卡','<10万/家'],['液冷','全液冷架构','风冷为主→冷板','风冷为主'],['海悟P','P1:CDU/Manifold/冷板','P2(需认证)','P3(远期跟踪)']], { y: 0.65, rowH: 0.25, colW: [1.3,2.8,2.5,2.2] });
  h.bulletList(s, [{ title: '聚焦策略', text: 'T1 GPU: 昇腾(P1)+寒武纪(P0)+海光(P1)+平头哥(P1)=4家 合计340万卡/年 | 其余P3远期跟踪', color: '1F497D' }], 2.08);
  h.insight(s, '4家T1 GPU合计340万卡/年 液冷采购¥2.5-5.2B | 阿里自研≠封闭生态→外部供应商可参与招标', Math.min(2.66, 4.4));
  h.source(s, 's028+s029合并: 平头哥真武810E架构(阿里ODCC 2026) GPU对比表格 国产超节点2028E ¥3,414亿(CAGR 194%)');
}
module.exports = { createSlide };