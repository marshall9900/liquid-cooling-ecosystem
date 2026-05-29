const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { cover, source } = require('./_h');

function createSlide(pr) {
  const s = pr.addSlide();
  cover(s, '机柜级液冷战略洞察', '五看三定 · v10 Expanded · 深度拆解', '海悟科技 战略洞察部 | 2026年5月 | 数据刷新2026-05-30 | 机密');
  source(s, '364源文件: 研报160篇 + SEC 13家 + RSS 182篇 + 微信9篇; sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md; sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-06-global-liquid-cooling-market-173b-usd.md; sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-06-super-node-insight.md; sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-gb300-liquid-cooling-domestic-breakthrough.md; 中国信通院 智算中心液冷产业全景研究报告(2025年) 等');
}

module.exports = { createSlide };
