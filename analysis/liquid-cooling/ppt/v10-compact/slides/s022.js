const pptxgen = require('pptxgenjs');
const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, '浪潮信息-业务概览与液冷采购');
  dataTable(s, ['维度','数据'],
    [['OEM份额','~22%(第二)'],
     ['GPU绑定','NVIDIA+昇腾+寒武纪+海光(最广谱)'],
     ['液冷采购','¥2.2-3.5B/年'],
     ['关键客户','字节(百亿级液冷大单)+腾讯+百度'],
     ['液冷供方','英维克(CDU/Manifold)+高澜(冷板)'],
     ['海悟状态','已接触→待送样→¥15M目标']],
    { colW: [2,7] });
  source(s, 'sources/液冷客户表.ods+sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-bytedance-alibaba-idc-procurement-2026.md → 浪潮字节液冷大单; sources/reports/industry_液冷/01_数据中心液冷_核心/[2024-11-20] 开源证券 - 通信行业点评报告：维谛预测AI单机柜功耗有望超1MW，液冷或将成为必选项.pdf[2024-11-20] 开源证券 - 通信行业点评报告：维谛预测AI单机柜功耗有望超1MW，液冷或将成为必选项.pdf 液冷采购=OEM出货×22%×单柜BOM');
  insight(s, '浪潮=字节最大OEM→海悟通过浪潮进入字节=最大战略窗口');
  badge(s, '35');
}
module.exports = { createSlide };
