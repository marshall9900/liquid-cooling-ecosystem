const t = require('./theme');
const { badge, topBar, footer, title, source, bulletList } = require('./_h');
function createSlide(p) { const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s);
  title(s, "三看总结：竞争格局核心判断");
  bulletList(s, [
    { title: "① 竞争态势", text: "国内:英维克=全能龙头但CDU产能不足+冷板无NV认证=缺口。海外:CoolIT/AVC/Staubli=寡头但国产窗口已到", color: t.primary },
    { title: "② 海悟核心差异", text: "电源冷板=100%空白(全部竞品未做) → Manifold=低壁垒出量 → 双P0组合=唯一策略", color: t.primary },
    { title: "③ 窗口评估", text: "Manifold:0-6月(送样即可) → 电源冷板:6-12月(研发+专利) → CPU冷板:24月(Intel认证)", color: t.primary },
    { title: "④ 风险评估", text: "正面竞争(CoolIT/英维克)=P2远期 → 空白市场(电源冷板)=P0立即 → 搭售市场(快接头)=P1中期", color: t.primary },
    { title: "⑤ 总排序", text: "Manifold(6月) > 电源冷板(12月) > 内存冷板(18月) > 快接头(18月) > CPU冷板(24月) > GPU冷板(18月+)", color: t.primary }
  ]);
  source(s, "P50-P68全部源文件汇总 | 双P0(Manifold+电源冷板)=唯一覆盖空白+低壁垒+高增速组合 | 全产业链能力→准入门槛 2026-2027黄金窗口 刷新2026-05-30 | 📐铁律⑩索引");
  footer(s); badge(s, "69"); }
module.exports = { createSlide };
