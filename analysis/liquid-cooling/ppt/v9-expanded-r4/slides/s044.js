const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s); badge(s, '44');
  title(s, '全球液冷DC标杆案例');
  dataTable(s,
    ['公司', 'DC名称', '液冷方案', '规模', 'PUE'],
    [
      ['Google', 'TPU v7/v8园区', '冷板+浸没 100%', '~50MW+', '~1.10'],
      ['Microsoft', 'FY26 DC', '冷板+浸没', '150MW+', '~1.12'],
      ['Amazon', 'Trainium DC', '冷板标配', '~100MW', '~1.10'],
      ['Meta', 'AI Research DC', '冷板全液冷', '~80MW', '~1.10']
    ],
    { colW: [1.5, 1.8, 1.8, 1.2, 0.7] }
  );
  insight(s, '海外T1液冷DC = 100%冷板标配 PUE 1.10-1.12 | TPU V8 1300W全浸没强制+CDU标配 | 中国液冷渗透率<5% → 巨大空间 刷新2026-05-30', 3.0);
  source(s,
    'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-google-liquid-cooling-supply-chain.md → ' +
    '谷歌TPU V8 1300W 全浸没+CDU标配/云订单积压$4,600亿/TPU月Token 3200万亿(同比7x); ' +
    'Anthropic+Apollo/黑石 $360亿TPU融资 史上最大单笔AI基建融资; ' +
    'sources/sec/oem/VRT/submissions_2026-05-09.json, sources/sec/ott/MSFT/submissions_2026-05-09.json, sources/sec/MSFT/latest_filings.txt → MSFT FY26 CAPEX $1,900亿(+130%); ' +
    'sources/sec/oem/VRT/submissions_2026-05-09.json, sources/sec/ott/MSFT/submissions_2026-05-09.json, sources/sec/AMZN/latest_filings.txt → AWS CAPEX $2,300亿(+50%); ' +
    'sources/sec/oem/VRT/submissions_2026-05-09.json, sources/sec/ott/MSFT/submissions_2026-05-09.json, sources/sec/META/latest_filings.txt → META CAPEX $1,250-1,450亿(+85%); ' +
    'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md → ' +
    '全球OTT CAPEX $6,000亿+(2026E)同比+88% / 北美-中系GPU采购竞争格局 | 刷新2026-05-30');
}

module.exports = { createSlide };
