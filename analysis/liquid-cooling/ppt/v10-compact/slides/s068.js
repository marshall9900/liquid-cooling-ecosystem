const { badge, topBar, footer, title, dataTable, source } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s);
  title(s, "策略深化：OEM准入四步法");
  dataTable(s, ["步骤","动作","指标","周期"], [
    ["① 接触","建立关系 提交方案","客户拜访+方案书","1-3月"],
    ["② 送样","样品测试","3轮测试通过","3-6月"],
    ["③ 框架","框架协议","合同+MOU","1-3月"],
    ["④ 批量","正式量产","持续交付+质量","持续"],
  ], { y: 0.65, colW: [1,4,2,1] });
  source(s, "OEM准入对标: Vertiv FY2025 10-K → 液冷客户认证周期12-18个月(参考CoolIT/NV合作流程) | 天风证券 2024-05-07 → Vertiv 2024Q1液冷订单+60%yoy(客户导入加速) | sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-06-super-node-insight.md → OEM送样流程3-6月/框架1-3月/批量持续 | 📐总周期7-12月→2026H1送样→H2框架_铁律⑩");
  badge(s, "90");
}
module.exports = { createSlide };
