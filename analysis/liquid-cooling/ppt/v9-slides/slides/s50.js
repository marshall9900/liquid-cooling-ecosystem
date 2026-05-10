let pptxgen, t, badge, bar, ft, title, bulletList, takeaway;
pptxgen = require('pptxgenjs'); t = require('./theme'); ({badge, bar, ft, title, bulletList, takeaway} = require('./_h'));
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; bar(s, t);
  title(s, t, '分析框架：五看三定方法论');

  bulletList(s, t, [
    { title: '一看 · 看宏观', text: 'AI算力军备竞赛驱动数据中心电力密度 → 单机柜功率从10kW→40kW→100kW → 风冷天花板（~30kW）被突破 → 液冷不可逆。政策端：东数西算PUE<1.2 + 运营商2030液冷全覆盖 → 确定性需求。', color: t.accent },
    { title: '二看 · 看行业/客户', text: 'OTT（字节/阿里/腾讯）万亿Capex → 50万+液冷机柜→ ¥3.9B组件TAM。GPU OEM（NVIDIA/AMD/Intel）参考设计认证驱动冷板需求。IDC运营方自主采购CDU，中国移动/电信/联通集采窗口。渠道三层：GPU OEM认证 → IDC招标 → ODM供应。', color: t.secondary },
    { title: '三看 · 看竞争', text: 'CoolIT/英维克已锁定NVIDIA认证壁垒 → 海悟避开正面竞争。电源冷板100%空白（蓝海）→ 先发独家定价权。Manifold壁垒低但可快速出量 → 以量换客户关系。快接头国产替代窗口（Staubli产能瓶颈）→ P1储备。CDU成熟市场远期进入。', color: t.primary },
    { title: '四看 · 看自身', text: '海悟基因：数据中心温控20年 → 泵/换热器/控制元器件经验 → 自然延伸至液冷。运营商/IDC客户基础可直接复用。需补：热设计仿真（电源冷板）、变频控制（CDU）、密封/流体（快接头）、认证体系（Intel UQD/NVIDIA/OCP）。', color: t.accent },
    { title: '五看 · 看机会', text: '可选战场 × 壁垒 × 空白率 × 差异化空间 → P0：电源冷板（空白100%/唯一性）+ Manifold（低壁垒/出量）+ 内存冷板（差异化）；P1：CPU冷板（认证后33%缺口）+ 快接头（国产替代95%空白）；P2：CDU（远期0%缺口）+ GPU冷板（NVIDIA极高壁垒）。', color: t.secondary },
  ], 0.65);

  takeaway(s, t, '三定落地：定目标（¥50M→¥1.0B / 5年20倍 / CAGR 112%）→ 定策略（专业热管理零件商 / Manifold破冰→冷板爆量→CDU全栈）→ 定节奏（2026破冰→2027爆量→2028放量→2030全栈）', 4.75);

  ft(s, t); badge(s, '50', t);
}
module.exports = { createSlide };
