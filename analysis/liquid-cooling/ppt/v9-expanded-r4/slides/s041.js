const t = require('./theme');
const { badge, topBar, footer, title, bulletList, source, insight } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s); badge(s, '41');
  title(s, 'IDC运营方采购特征深度分析');
  bulletList(s, [
    { title: '① CDU自主决策权', text: 'IDC运营方拥有CDU完整决策权(≠OEM决定)。规格100-150kW。招标:变频效率+冗余+售后+价格。海悟温控基因+IDC客户=最优跳板', color: t.primary },
    { title: '② Manifold自主决策权', text: '同样拥有Manifold自主决策权→招标(品质/交期/兼容性)。无强制认证=最低壁垒。海悟P0→2026送样秦淮/万国/数据港', color: t.primary },
    { title: '③ 冷板间接进入', text: '冷板由GPU厂家+OEM决定→IDC不直接选冷板→海悟先通过OEM认证再经由IDC扩大批量', color: t.primary },
    { title: '④ 三类通道', text: 'OTT自建DC→直接招标(CDU/Manifold)。运营商→国资采购+国产化。第三方IDC→受客户影响但仍有自主权', color: t.primary }
  ]);
  insight(s, 'CDU/Manifold自主决策=海悟IDC基因天然优势 Manifold 10K-15K套×30%(IDC占比)=3K-4.5K套 海悟目标300-900套', 3.85);
  source(s, 'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-bytedance-alibaba-idc-procurement-2026.md + sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-google-liquid-cooling-supply-chain.md + IDC行业调研');
}

module.exports = { createSlide };
