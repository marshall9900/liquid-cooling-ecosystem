const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s); badge(s, '42');
  title(s, '四维需求汇总：TAM/SAM/SOM模型');
  dataTable(s,
    ['维度', '2026E(¥B)', '2028E(¥B)', '2030E(¥B)', 'CAGR', '驱动'],
    [
      ['TAM(中国液冷组件)', '39', '120', '250', '59%', 'DC+GPU+PUE'],
      ['SAM(海悟可服务)', '~15', '~45', '~100', '60%', '冷板/Manifold/CDU/接头'],
      ['SOM(国内线)', '0.05', '0.4', '1.0', '112%', 'Manifold→冷板→CDU'],
      ['SOM(海外线)', '0', '0.1', '0.2', '—', 'ODM→OEM→自有']
    ],
    { colW: [2, 1.5, 1.5, 1.5, 0.8, 1.7] }
  );
  insight(s, 'TAM CAGR 59% 市场急速膨胀 SAM/TAM~50% SOM ¥50M→¥1B 5年20倍', 3.65);
  source(s,
    'P9-P41全部源文件汇总 → TAM=Σ(机柜数×单柜BOM) SAM=TAM×可服务占比50% SOM=SAM×竞争力; ' +
    'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-google-liquid-cooling-supply-chain.md → ' +
    'TrendForce 2026中国液冷服务器>¥300亿 / 液冷渗透率14%→40%; ' +
    '东吴证券千亿液冷元年 → 2028年液冷市场突破千亿/国产供应链加速入局; ' +
    '东莞证券液冷深度 → 液冷需求加速释放/上游高价值环节(冷板+CDU+快接头); ' +
    '国信证券液冷专题 → 服务器算力提升催化液冷/国产替代新机遇; ' +
    'source_index.json → 研报667篇/SEC 13家/RSS 446篇/微信9篇/364源文件验证'
  );
}

module.exports = { createSlide };
