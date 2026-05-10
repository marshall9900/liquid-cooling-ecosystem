const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s); badge(s, '44');
  title(s, '全球液冷DC标杆案例');
  dataTable(s,
    ['公司', 'DC名称', '液冷方案', '规模', 'PUE'],
    [
      ['Google', 'TPU v7园区', '冷板 100%液冷', '~50MW', '~1.10'],
      ['Microsoft', 'FY26 DC', '冷板+浸没', '150MW+', '~1.12'],
      ['Amazon', 'Trainium DC', '冷板标配', '~100MW', '~1.10'],
      ['Meta', 'AI Research DC', '冷板全液冷', '~80MW', '~1.10']
    ],
    { colW: [1.5, 1.8, 1.8, 1.2, 0.7] }
  );
  insight(s, '海外T1液冷DC = 100%冷板标配 PUE 1.10-1.12 中国液冷渗透率<5% → 巨大空间', 3.0);
  source(s,
    'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-google-liquid-cooling-supply-chain.md → ' +
    '谷歌TPU 600万颗/980W 100%液冷/Deschutes规范/台湾+大陆+欧美三级供应链; ' +
    'sources/sec/oem/VRT/submissions_2026-05-09.json, sources/sec/ott/MSFT/submissions_2026-05-09.json, sources/sec/MSFT/latest_filings.txt → MSFT FY26 CAPEX $1,900亿(+130%); ' +
    'sources/sec/oem/VRT/submissions_2026-05-09.json, sources/sec/ott/MSFT/submissions_2026-05-09.json, sources/sec/AMZN/latest_filings.txt → AWS CAPEX $2,300亿(+50%); ' +
    'sources/sec/oem/VRT/submissions_2026-05-09.json, sources/sec/ott/MSFT/submissions_2026-05-09.json, sources/sec/META/latest_filings.txt → META CAPEX $1,250-1,450亿(+85%); ' +
    'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md → ' +
    '全球九大CSP 2026 CAPEX $8,300亿(+79%) / 北美-中系GPU采购竞争格局');
}

module.exports = { createSlide };
