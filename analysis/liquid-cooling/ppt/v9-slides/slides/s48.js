let pptxgen, t, badge, bar, ft, title, bulletList, insightBox;
pptxgen = require('pptxgenjs'); t = require('./theme'); ({badge, bar, ft, title, bulletList, insightBox} = require('./_h'));
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; bar(s, t);
  title(s, t, '定节奏 · 三年路线图：破冰→爆量→放量→全栈');

  bulletList(s, t, [
    { title: '2026：破冰之年 —— Manifold送样 + 研发启动', text: 'Q1：H3C/浪潮/宁畅 Manifold送样（3家同时）；Q2：Intel UQD认证启动；Q3：电源冷板研发立项 + 自建热性能测试台；Q4：内存冷板技术评估启动。年度营收 ¥50M（100% Manifold）。关键KPI：送样通过率 > 80%，交期达标率 > 95%。', color: t.accent },
    { title: '2027：爆量之年 —— 电源冷板蓝海 + Manifold放量', text: 'H1：Manifold小批量（月产1000套，¥100M）+ 内存冷板样机测试；H2：电源冷板3家OEM送样通过（¥150M）+ 快接头合作伙伴引入。年度营收 ¥300M（Manifold 33% + 冷板 67%），客户从3家扩至5-6家，含华勤/富士康等ODM渠道。', color: t.secondary },
    { title: '2028：放量之年 —— 认证通过 + 全品类矩阵', text: 'H1：Intel UQD认证通过（18个月周期）+ 取得Intel认证证书；H2：CPU冷板批量（¥80M）+ 快接头上线（¥40M）+ 内存冷板放量（¥60M）。年度营收 ¥400M，产品线从2个扩至5个，客户结构向IDC运营方（秦淮/数据港）和海外ODM延伸。', color: t.primary },
  ], 0.65);

  insightBox(s, t, '💡 节奏逻辑', '一点突破 → 多点开花：Manifold送样 = 建立客户关系 → 冷板差异化交叉销售 → CPU冷板认证后借资格放量 → CDU远期全栈升级。每一步都是前一步的自然延伸，节奏递进而非跳跃。2026核心是"活下去"（¥50M验证商业模式），2027"长起来"（¥300M验证差异化），2028"强起来"（¥400M验证全品类能力）。', 0.5, 3.3, 9, 1.5);

  ft(s, t); badge(s, '48', t);
}
module.exports = { createSlide };
