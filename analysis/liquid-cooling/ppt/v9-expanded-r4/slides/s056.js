const t = require('./theme');
const { badge, topBar, footer, title, bulletList, source, insight } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s); badge(s, '56');
  title(s, '英维克深度：客户与订单分析');
  bulletList(s, [
    { title: '【1】腾讯关系', text: '英维克最大客户 腾讯ETH液冷主供。2025-2026 ¥800M+框架。海悟策略:CDU/Manifold差异化招标', color: t.primary },
    { title: '【2】阿里关系', text: '阿里液冷第二大客户 磐久3.0 CDU供方。但阿里招标制→可替换(技术分+价格分)→海悟窗口', color: t.primary },
    { title: '【3】字节关系', text: '字节液冷供方(小份额) 自研团队建成→英维克份额受挑战。海悟通过浪潮进入(互补非替代)', color: t.primary },
    { title: '【4】英维克软肋', text: '冷板认证未通过NVIDIA(2027目标)→依赖国产GPU。CDU产能紧张(2025满产)→交付周期9-12月→涨价', color: t.primary }
  ]);
  insight(s, '英维克腾讯¥800M+/年锁死 + 产能缺口1500台CDU = ¥150M市场空白 → 海悟即切入', 3.85);
  source(s, '英维克(002837)2025年报→腾讯¥800M+框架 | sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-google-liquid-cooling-supply-chain.md → 英维克谷歌Deschutes CDU+市值$14B+三地扩产 | 国信证券2025-09-29→英维克重点推荐');
}

module.exports = { createSlide };
