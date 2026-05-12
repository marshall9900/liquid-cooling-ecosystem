const h = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; h.topBar(s); h.footer(s);
  h.title(s, '财务模型 | 营收/成本/利润 + 敏感性分析 + 投资回报');
  h.dataTable(s, ['指标','2026','2027','2028','2030'], [['液冷营收(¥M)','5-10','50-100','200-500','1,000-2,000'],['毛利率','25-30%','30-35%','35-40%','40-45%'],['净利率','-10~-5%','5-10%','15-20%','20-25%'],['CAPEX(¥M)','13','20','50','100'],['ROI','负','2-3x','5-8x','10-20x']], { y: 0.65, rowH: 0.25, colW: [1.3,1,1,1,1.2] });
  h.dataTable(s, ['变量','悲观','基准','乐观','SOM影响'], [['液冷渗透率(2028)','45%','57%','70%','SOM ¥100-800M'],['Manifold份额','2%','5%','10%','SOM ¥50-250M'],['冷板份额','0%','1%','3%','SOM ¥0-150M']], { y: 2.35, rowH: 0.25, colW: [1.5,1,1,1,1.5] });
  h.bulletList(s, [{ title: '投资回报', text: '¥13M CAPEX → 2027 SOM ¥50-100M → ROI 3-8x | 盈亏平衡:2027H2 | 5年累计营收¥2.6-7.5B | Manifold份额最关键→P0优先', color: '1F497D' }], 3.5100000000000002);
  h.insight(s, '¥13M CAPEX撬动¥1B SOM→ROI 10-20x(2030) 盈亏平衡2027H2 敏感性:Manifold份额最关键', Math.min(4.09, 4.4));
  h.source(s, 's094+s096+s097合并: 海悟财务模型推算 SOM=液冷TAM×海悟份额×ASP ¥13M CAPEX=产线+认证+送样+团队');
}
module.exports = { createSlide };