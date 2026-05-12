const h = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; h.topBar(s); h.footer(s);
  h.title(s, '阿里巴巴 | AI Infra投入三年¥4,800亿 磐久3.0全液冷战略');
  h.dataTable(s, ['维度','数据'], [['AI CAPEX 2026E','三年¥4,800亿(年化¥1,600亿)'],['超节点标准','玄武128卡+CIPU 3.0+CXL 3.1 磐久128 AL128'],['GPU持有','昇腾10-15万+平头哥50-60万(自研)'],['自建DC','张北/乌兰察布/杭州/南通/河源 全球200+节点']], { y: 0.65, rowH: 0.25, colW: [2,7] });
  h.dataTable(s, ['液冷维度','详情'], [['液冷方案','冷板式(覆盖GPU/CPU/NPO) / 6U CDU / 快插+浮动盲插+Manifold'],['液冷供应商','CoolIT(冷板)+英维克(CDU)+思泉(浸没)'],['海悟机会','CDU/Manifold招标→通过H3C间接→阿里自有测试认证']], { y: 2.08, rowH: 0.25, colW: [1.8,7.2] });
  h.bulletList(s, [{ title: '① 认证路径', text: '需阿里云液冷认证(2027目标)→通过H3C代工→Manifold/CDU进入 | 年采购¥16-20亿', color: '1F497D' },{ title: '② 时间窗口', text: '2026-2027磐久3.0量产期=供应商选型 认证~12月→2026启动→2027入池 | SAM:¥5-24M', color: '1F497D' }], 3.24);
  h.insight(s, '磐久128 单GPU 2kW液冷→350kW供电→Manifold+CDU招标→P1:通过H3C+认证进入 | 窗口:12-18月', Math.min(4.300000000000001, 4.4));
  h.source(s, 's009+s010+s011合并: 阿里三年¥4,800亿(CEO吴泳铭) 磐久3.0全液冷 推算:液冷采购≈¥16-20亿/年 单柜Manifold ¥48K-120K×2,000柜');
}
module.exports = { createSlide };