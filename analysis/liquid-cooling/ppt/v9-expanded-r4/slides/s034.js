const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, topBar, footer, title, bulletList, insight, source } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, 'H3C新华三-液冷采购与海悟机会');
  bulletList(s, [
    { title: '① 供链结构', text: 'CoolIT(冷板一供)+英维克(CDU/Manifold)→海悟切入Manifold(外购≠自制)', color: t.primary },
    { title: '② 采购流程', text: 'Manifold→招标(品质+交期+价格)→CDU→招标→冷板→GPU推荐', color: t.primary },
    { title: '③ 海悟进展', text: '已建立H3C关系→Manifold方案提交→待送样测试→预计2026H1送样→H2框架', color: t.primary },
    { title: '④ ¥25M目标', text: 'Manifold→H3C独家供应(2027)→2,000柜×¥12.5K/套=¥25M→冷板+CDU搭售→¥50M+', color: t.highlight }
  ]);
  insight(s, 'H3C Manifold送样2026H1→框架协议H2→¥25M目标2027 冷板+CDU搭售=¥50M+');
  source(s, 'sources/液冷客户表.ods+OEM行业分析; ¥25M=H3C出货10,000柜×Manifold8套/柜×¥10K×海悟份额25%=¥20M+搭售¥5M');
  badge(s, '34');
}
module.exports = { createSlide };
