let pptxgen, t, badge, bar, ft, title, kpiRow, bulletList;
pptxgen = require('pptxgenjs'); t = require('./theme'); ({badge, bar, ft, title, kpiRow, bulletList} = require('./_h'));
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; bar(s, t);
  title(s, t, '定目标：2026→2030三年战略目标体系');
  kpiRow(s, t, [
    { label: '2026 破冰期', value: '¥50M', color: t.accent },
    { label: '2027 爆量期', value: '¥300M', color: t.secondary },
    { label: '2028 放量期', value: '¥400M', color: t.secondary },
    { label: '2030 百亿期', value: '¥1,000M', color: t.primary },
    { label: 'CAGR', value: '~112%', color: t.primary },
  ], 0.65);
  bulletList(s, t, [
    { title: '短期目标（2026）', text: 'Manifold三客户送样（H3C+浪潮+宁畅）→ 小批量→ 建立供应商代码。启动电源冷板研发立项 + Intel UQD认证。年度营收目标 ¥50M（纯Manifold）。', color: t.accent },
    { title: '中期目标（2027-2028）', text: '2027：Manifold批量（¥100M）+ 电源冷板爆量（¥150M）+ 内存冷板差异化（¥50M）→ 合计 ¥300M。2028：CPU冷板认证后加入（¥80M）+ 快接头配套（¥40M）→ ¥400M。', color: t.secondary },
    { title: '长期目标（2030）', text: '全栈液冷组件供应商：Manifold（¥150M）+ 电源冷板（¥250M）+ 内存冷板（¥100M）+ CPU冷板（¥250M）+ 快接头（¥100M）+ CDU（¥150M）→ ¥1.0B。定位国内第二、全球可选的机柜级液冷组件供应商。', color: t.primary },
    { title: '核心策略', text: '定目标 = 定方向。¥50M → ¥1.0B（5年20倍）。以Manifold为破冰船，冷板为核心增长极，CDU为远期全栈收官。', color: t.accent },
  ], 1.45);
  ft(s, t); badge(s, '44', t);
}
module.exports = { createSlide };
