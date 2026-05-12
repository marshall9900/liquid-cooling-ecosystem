const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s); badge(s, '46');
  title(s, '液冷客户画像：按GPU选择细分');
  dataTable(s,
    ['客户', 'GPU', '液冷方案', 'OEM', '海悟P'],
    [
      ['阿里', '昇腾+平头哥', '浸没+冷板', 'H3C', 'P1'],
      ['字节', '昇腾+寒武纪+自研', '冷板', '浪潮/宁畅', 'P0'],
      ['腾讯', 'NVIDIA+昇腾', '冷板', '浪潮/超聚变', 'P1'],
      ['快手', 'NVIDIA+昇腾', '冷板', '浪潮', 'P1'],
      ['三大运营商', '昇腾+海光', '冷板', '浪潮/H3C', 'P1']
    ],
    { colW: [1.3, 1.8, 1, 1.3, 0.8] }
  );
  insight(s, '字节=需求最明确+认证最低+GPU(昇腾+寒武纪)=最优P0 海悟双线同时突破', 3.3);
  source(s,
    'sources/液冷客户表.ods → 字节=需求最明确+认证最低=最优P0; ' +
    'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md → ' +
    '字节2026 GPU采购¥2,300亿(同比近3x) / 阿里三年¥3,800亿 / 全球九大CSP CAPEX $8,300亿(+79%); ' +
    'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-bytedance-alibaba-idc-procurement-2026.md → ' +
    '字节IDC 1.5GW(21kW+强制液冷) / 阿里2GW / 国产GPU占比15-30%; ' +
    'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-google-liquid-cooling-supply-chain.md → ' +
    '谷歌600万颗TPU(980W 100%液冷) / 英维克CDU获谷歌直采 / 液冷渗透率14%→40%');
}

module.exports = { createSlide };
