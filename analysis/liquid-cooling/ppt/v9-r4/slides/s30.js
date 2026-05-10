const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "英维克：国内液冷龙头全栈优势");
  dataTable(s, ["维度","详情"], [["液冷营收","¥1.5-2.0B（2025，液冷占比30%+）"],["主要客户","腾讯(最大) + 中国移动 + 阿里 + H3C"],["认证","OCP 2025已取得 + NVIDIA 2027目标 + Intel UQD进行中"],["产品线","GPU冷板+CPU冷板+CDU+Manifold全栈覆盖"],["vs海悟","冷板早3年; CDU全栈; Manifold主供→海悟破冰期"],["海悟策略","差异化: 电源冷板(英维克未覆盖)+价格+交付+服务"]], { colW: [2,7] });
  source(s, "数据来源：\\n• 英维克(002837)2025年报 → 营收/液冷业务\\n• sources/eastmoney/ → 东方财富研报 (search:英维克 液冷)\\n• sources/wechat/2026-05-07-gb300-liquid-cooling-domestic-breakthrough.md → GB300液冷国产化 (英维克角色)\\n• sources/eastmoney/: 液冷营收为估算值 基于年报液冷占比推算");
  insight(s, "英维克全栈(=最大综合对手)→海悟差异化：电源冷板蓝海+价格+交付+服务");
  badge(s, "30");
}
module.exports = { createSlide };
