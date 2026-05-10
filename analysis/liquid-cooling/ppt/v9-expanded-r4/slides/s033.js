const pptxgen = require('pptxgenjs');
const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, 'H3C新华三-业务概览');
  dataTable(s, ['维度','数据'],
    [['OEM份额','~25%(国内最大AI服务器OEM)'],
     ['GPU绑定','NVIDIA+昇腾+寒武纪(最广谱)'],
     ['超节点出货','2026E ~8,000-12,000台'],
     ['液冷采购','¥2.5-4.0B/年'],
     ['液冷供方','CoolIT(冷板)+英维克(CDU/Manifold)+AVC'],
     ['海悟状态','已接触→待送样Manifold→¥25M目标']],
    { colW: [2,7] });
  source(s, 'sources/液冷客户表.ods液冷客户表; sources/reports/industry_液冷/01_数据中心液冷_核心/[2024-11-20] 开源证券 - 通信行业点评报告：维谛预测AI单机柜功耗有望超1MW，液冷或将成为必选项.pdf[2024-11-20] 开源证券 - 通信行业点评报告：维谛预测AI单机柜功耗有望超1MW，液冷或将成为必选项.pdf NVIDIA认证列表; 液冷采购=8K-12K台×BOM(¥35-70万)×H3C份额25%=¥2.5-4.0B');
  insight(s, 'H3C=最大AI服务器OEM(25%) 海悟已接触→2026 Manifold送样');
  badge(s, '33');
}
module.exports = { createSlide };
