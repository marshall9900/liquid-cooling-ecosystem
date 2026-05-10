const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, 'OTT机柜级液冷规格汇总');
  dataTable(s, ['OTT', '冷板', 'CDU', 'Manifold', '快接头', '认证', '海悟P'], [
    ['阿里', 'GPU+CPU+MEM', '100-200kW', '招标', '招标', '阿里认证', 'P1'],
    ['字节', 'GPU+CPU+电源', '100-150kW', '招标', '自研+招标', '不需要', 'P0'],
    ['腾讯', 'GPU为主', '100-150kW', '招标', '招标', 'OCP衍生', 'P1'],
    ['快手', 'GPU+CPU', '100kW', '招标', '招标', '不需要', 'P1']
  ], { colW: [0.9, 1.2, 1.1, 1, 1, 1, 0.6], y: 0.7 });
  insight(s, '字节认证要求最低=最大窗口 阿里/腾讯有认证门槛 但CDU/Manifold均不受限');
  source(s, 'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-06-super-node-insight.md → 超节点技术规格 AI推理机架85-130kW; sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-gb300-liquid-cooling-domestic-breakthrough.md → GB300 NVL72=135-155kW 液冷从Compute Tray扩至Switch Tray; sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-google-liquid-cooling-supply-chain.md → 谷歌TPUv7=980W 100%强制液冷; 推算:CDU=单柜功率×冗余1.2×CLF');
  badge(s, '19');
}
module.exports = { createSlide: createSlide };
