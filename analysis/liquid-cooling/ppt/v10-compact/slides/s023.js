const h = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; h.topBar(s); h.footer(s);
  h.title(s, 'H3C新华三 | 业务概览 + 液冷采购与海悟机会');
  h.dataTable(s, ['维度','数据'], [['服务器出货(2025)','~80万台(国内TOP3)'],['液冷出货','2025 3,000柜→2026E 8,000柜'],['GPU合作','英伟达(主)+昇腾(副)'],['液冷供链','英维克(CDU/冷板)+CoolIT(冷板)']], { y: 0.65, rowH: 0.25, colW: [2.2,6.8] });
  h.bulletList(s, [{ title: '海悟窗口', text: 'H3C液冷出货8,000柜(2026E)→Manifold/CDU招标增量→海悟Manifold送样 | SAM: ¥20-40M', color: '1F497D' },{ title: '进入路径', text: 'P1(Manifold)→P2(CDU)→P2(冷板) | 目标:2027 Manifold批量 H3C液冷份额5-10%', color: '1F497D' }], 2.08);
  h.insight(s, 'H3C液冷出货3,000→8,000柜(2026E) Manifold招标制→海悟P1送样', Math.min(3.14, 4.4));
  h.source(s, 's033+s034合并: 新华三年报2025 H3C液冷采购信息 海悟Manifold送样H3C(2026Q3)');
}
module.exports = { createSlide };