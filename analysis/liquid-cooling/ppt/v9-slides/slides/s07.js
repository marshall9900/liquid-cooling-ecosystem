const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, bar, ft, title, twoCol, insightBox, source } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; bar(s, t);
  title(s, t, 'OTT 深度：字节跳动 + 阿里巴巴');
  twoCol(s, t,
    '字节跳动', [
      '• 火山引擎：AI算力平台，全球建设中',
      '• AI Capex 2026E：¥200-250B',
      '• 液冷方案：冷板为主，自研团队组建中',
      '• DC集群：张家口 / 乌兰察布 / 芜湖 / 贵安',
      '• 技术栈：Kubernetes自研调度 + 含光/真武',
      '• 特征：自研液冷，外采CPU冷板/CDU',
    ],
    '阿里巴巴', [
      '• 通义千问3.0：中国第一大模型家族',
      '• AI Capex 2026E：¥180-220B',
      '• 液冷方案：浸没+冷板双路（方升架构）',
      '• DC集群：张北 / 河源 / 乌兰察布 / 南通',
      '• 技术栈：阿里云液冷 + 磐久超节点128',
      '• 特征：自研+外采并行，CDU/Manifold招标',
    ],
    0.65
  );
  insightBox(s, t, '🎯 海悟机会评估', '字节：冷板/CDU外采需求明确，通过火山引擎DC供应商（秦淮/数据港）进入，⚠️自研团队抬高直接合作门槛。阿里：CDU/Manifold招标制（技术+价格），需通过H3C间接进入，认证要求阿里云液冷认证(2027目标)。策略：先攻阿里（H3C路径成熟），再拓字节（供应商渠道）。', 0.5, 3.15, 9, 0.85);
  source(s, t, '💬 微信源: 2026-05-07-ott-csp-gpu-capex + supernode-insight | 🌐 SEC 10-Q', 4.15);
  ft(s, t); badge(s, '07', t);
}
module.exports = { createSlide };
