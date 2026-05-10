const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, bar, ft, title, twoCol, insightBox, source } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; bar(s, t);
  title(s, t, 'OTT 深度：腾讯');
  twoCol(s, t,
    '腾讯AI基础设施', [
      '• 混元大模型：自研算力集群，快速迭代',
      '• AI Capex 2026E：¥120-150B',
      '• 液冷方案：冷板为主，大规模部署中',
      '• DC集群：天津 / 贵安 / 清远 / 仪征 / 怀来',
      '• 模式：自建DC为主，2026E新增2-3万架',
      '• 技术栈：ETH-64/128 超节点标准',
    ],
    '液冷采购特征', [
      '• CDU/Manifold：供应商招标制',
      '• 冷板供应当前：CoolIT / 英维克主导',
      '• 认证壁垒：中等（OCP衍生标准）',
      '• Manifold送样窗口：2026H2开放',
      '• OEM伙伴：浪潮（腾讯核心OEM）',
      '• 进入路径：通过浪潮间接供货',
    ],
    0.65
  );
  insightBox(s, t, '🎯 海悟机会评估', 'CDU/Manifold招标制（价格+技术竞争，海悟有价格优势）；冷板当前被CoolIT/英维克锁定，需认证突破；进入路径清晰：通过浪潮（腾讯核心OEM伙伴）间接供货；认证：腾讯液冷认证(OCP衍生)。Manifold送样窗口2026H2 → 应优先准备。', 0.5, 3.15, 9, 0.85);
  source(s, t, '🌐 SEC 10-Q: Tencent(HK) | 💬 微信源: ott-csp-gpu-capex', 4.15);
  ft(s, t); badge(s, '08', t);
}
module.exports = { createSlide };
