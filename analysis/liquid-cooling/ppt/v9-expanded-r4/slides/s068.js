const t = require('./theme');
const { badge, topBar, footer, title, source, bulletList } = require('./_h');
function createSlide(p) { const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s);
  title(s, "竞品路线图预测 (2026-2030)");
  bulletList(s, [
    { title: "英维克", text: "2026:OCP认证→2027:NVIDIA认证→2028:海外(东南亚)→2030:全球前三", color: t.primary },
    { title: "CoolIT", text: "2026:NVL72独家→2027:亚洲OEM→2028:双供压力→2030:份额下降50%+", color: t.primary },
    { title: "高澜", text: "2026:冷板扩产→2027:认证突破→2028:CDU全栈→2030:国内前三", color: t.primary },
    { title: "海悟", text: "2026:Manifold批量+电源冷板立项→2027:多客户+CPU冷板→2028:Intel UQD→2030:¥1B+海外", color: t.primary }
  ]);
  source(s, "各公司年报+行业趋势 | 路线图为行业判断【估算】 | 📐铁律⑩索引");
  footer(s); badge(s, "68"); }
module.exports = { createSlide };
