const pptxgen = require('pptxgenjs');
const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, '宁畅/超聚变/联想/华勤 — 中型OEM');
  dataTable(s, ['OEM','份额','GPU','液冷(¥B)','海悟状态','P','2026目标(¥M)'],
    [['宁畅','~12%','NV+昇腾+寒武纪','1.2-2.0','已接触→待送样','P0','10M'],
     ['超聚变','~18%','昇腾(嫡系)','1.8-3.0','待接触(华为壁垒)','P1','—'],
     ['联想','~10%','NV+海光','1.0-1.6','待接触','P1','5M'],
     ['华勤','~8%','ODM多品牌','0.8-1.2','待接触','P1','5M']],
    { colW: [1,0.8,1.3,1.2,1.4,0.7,1] });
  source(s, 'sources/液冷客户表.ods+sources/reports/industry_液冷/01_数据中心液冷_核心/[2024-11-20] 开源证券 - 通信行业点评报告：维谛预测AI单机柜功耗有望超1MW，液冷或将成为必选项.pdf[2024-11-20] 开源证券 - 通信行业点评报告：维谛预测AI单机柜功耗有望超1MW，液冷或将成为必选项.pdf 宁畅Manifold=12%×¥0.5B×15%=¥9M+搭售=¥10M; 超聚变华为壁垒不可突破');
  insight(s, 'H3C+浪潮+宁畅=59%OEM P0集中攻坚 超聚变/联想/华勤P1');
  badge(s, '36');
}
module.exports = { createSlide };
