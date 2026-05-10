const t = require('./theme');
const { badge, topBar, footer, title, source, bulletList } = require('./_h');
function createSlide(p) { const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s);
  title(s, "海悟SWOT分析");
  bulletList(s, [
    { title: "S 优势", text: "温控基因(20年+数据中心经验)→热管理技术复用。IDC客户群(已有关系)。制造能力M++(焊接/组装)。本土化服务(响应速度)", color: t.primary },
    { title: "W 劣势", text: "液冷品牌=空白(从零建)。认证=空白(Intel/NV/OCP均未取得)。海外渠道=无。液冷人才=缺乏(需招聘)", color: t.primary },
    { title: "O 机会", text: "电源冷板=100%空白(no competitor)。国产GPU=认证半开放。Manifold=低壁垒出量。IDC采购决策自主。CAGR 60%+市场", color: t.primary },
    { title: "T 威胁", text: "英维克全栈压制(冷板+CDU+Manifold)。CoolIT/AVC NV认证牢不可破。Staubli专利壁垒。认证周期长(12-24月)。竞品跟进", color: t.primary }
  ]);
  source(s, "海悟内部SWOT | SWOT→战略:SO策略(机会×优势=Manifold+电源冷板→通过温控基因+IDC客户) | 📐铁律⑩索引");
  footer(s); badge(s, "80"); }
module.exports = { createSlide };
