const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s); badge(s, '49');
  title(s, '五看三定方法论：论证框架回顾');
  dataTable(s,
    ['五看', '核心问题', '海悟回答'],
    [
      ['一看宏观', '液冷是否为刚需？', 'GPU功耗不可逆+PUE政策=是'],
      ['二看市场', '需求在哪？多大？', 'OTT ¥49-65B + GPU ¥2.5-5B + IDC'],
      ['三看竞争', '对手是谁？差距？', '英维克/CoolIT/高澜/Staubli'],
      ['四看机会&自己', '海悟能做什么？', 'Manifold + 电源冷板 = 双P0'],
      ['五看三定', '战略/目标/策略', '¥50M → ¥1B (5年)']
    ],
    { colW: [1.3, 2.5, 3.2] }
  );
  insight(s, '103页=五看逐项深挖 每GPU/每OTT/每竞品/每组件独立展开 完整论证链', 3.3);
  source(s,
    '一看宏观 → ' +
    'sources/reports/industry_液冷/01_数据中心液冷_核心/[2024-11-20] 开源证券 - 通信行业点评报告：维谛预测AI单机柜功耗有望超1MW，液冷或将成为必选项.pdf[2024-11-20] 开源证券 → 维谛预测AI单机柜>1MW液冷必选项; ' +
    'sources/reports/industry_液冷/01_数据中心液冷_核心/[2024-11-20] 开源证券 - 通信行业点评报告：维谛预测AI单机柜功耗有望超1MW，液冷或将成为必选项.pdf[2024-07-04] 国信证券 → 液冷渗透率快速提升; ' +
    'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-google-liquid-cooling-supply-chain.md → 谷歌TPU 980W 100%液冷/TrendForce渗透率14%→40%; ' +
    '二看市场 → ' +
    'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md → 九大CSP CAPEX $8,300亿(+79%)/字节¥2,300亿; ' +
    'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-bytedance-alibaba-idc-procurement-2026.md → 字节1.5GW/阿里2GW; ' +
    'source_index.json → 研报667篇/SEC 13家/RSS 446篇/微信9篇/364源文件; ' +
    '三看竞争 → ' +
    'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-06-super-node-insight.md → 超节点国产替代全链条; ' +
    'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-gb300-liquid-cooling-domestic-breakthrough.md → GB300液冷国产化交卷 降本25-32%; ' +
    '四看机会&五看三定 → 国金AIDC液冷系列/东吴千亿液冷元年/东莞证券液冷深度 → 海悟Manifold+电源冷板双P0赛道选择'
  );
}

module.exports = { createSlide };
