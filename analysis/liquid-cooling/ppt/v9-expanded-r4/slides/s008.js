const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { sectionSlide, source } = require('./_h');

function createSlide(pr) {
  const s = pr.addSlide();
  sectionSlide(s, '一看', '看市场：需求侧全景 (深度洞察)', 'OTT × GPU × OEM × IDC运营方 四维拆解 不限页数');
  source(s, 'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md → 全球九大CSP $8,300亿(2026E)同比+79%; sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-06-global-liquid-cooling-market-173b-usd.md → $33.3B(2026E)→$173.1B(2032E) CAGR 26.5%; sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-06-super-node-insight.md → 国产超节点2028E ¥3,414亿');
}
module.exports = { createSlide };
