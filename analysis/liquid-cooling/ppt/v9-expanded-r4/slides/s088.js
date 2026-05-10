const { badge, topBar, footer, title, dataTable, source } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s);
  title(s, "目标拆解：2026关键KPI");
  dataTable(s, ["KPI","目标","衡量标准","责任人"], [
    ["Manifold送样","3家OEM(H3C/浪潮/宁畅)","送样测试报告通过","技术"],
    ["框架协议","1家正式框架协议","合同签署","销售"],
    ["营收","¥50M(Manifold为主)","订单确认收入","财务"],
    ["电源冷板","研发立项完成","方案设计+专利+原型","研发"],
    ["Intel UQD","认证启动","申请提交+首次测试","认证"],
    ["液冷测试台","自建完成(¥200K)","热性能+耐久测试台","设备"],
  ], { y: 0.65, colW: [1.5,2,3,1.5] });
  source(s, "KPI对标: 天风证券 2024-05-07 → Vertiv 2024Q1液冷订单+60%yoy(客户导入KPI) | 海悟战略规划 → 2026 6KPI=3送样(OEM)+1框架+¥50M+2启动(电源冷板/Intel UQD) | 📐铁律⑩");
  badge(s, "88");
}
module.exports = { createSlide };
