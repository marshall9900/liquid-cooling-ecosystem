const t = require('./theme');
const { badge, topBar, footer, title, bulletList, source, insight } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s); badge(s, '57');
  title(s, '英维克深度：财务横截面与海悟对标');
  bulletList(s, [
    { title: '【1】液冷营收', text: '¥1.5-2.0B(2025)占比30%+ 毛利率~35% vs 海悟目标¥50M(2026)→¥1B(2030)', color: t.primary },
    { title: '【2】CDU产能', text: '年产能2,500台(2025满产) vs 2026需求4,000台=缺口1,500台=¥150M市场空白', color: t.primary },
    { title: '【3】冷板认证', text: 'OCP 2025已取得 NVIDIA 2027目标(未取得) Intel UQD(进行中)。海悟基线:Intel UQD 2026Q2启动', color: t.primary },
    { title: '【4】估值参考', text: '英维克市值¥40B+(液冷龙头估值) → 海悟液冷业务5年估值锚:¥1B营收×3-5x P/S=¥3-5B', color: t.primary }
  ]);
  insight(s, '英维克CDU缺口1500台=¥150M空白 海悟5年估值锚¥3-5B 电源冷板+Manifold双轮驱动', 3.85);
  source(s, '英维克(002837)2025年报→液冷营收¥1.5-2.0B+毛利率~35% | 国信证券2025-09-29→英维克系统集成龙头 | 产能数据为行业估算');
}

module.exports = { createSlide };
