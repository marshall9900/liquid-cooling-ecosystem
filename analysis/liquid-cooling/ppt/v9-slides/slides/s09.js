const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, bar, ft, title, bulletList, insightBox, source } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; bar(s, t);
  title(s, t, 'OTT 深度：华为昇腾');
  bulletList(s, t, [
    { title: 'AI战略：昇腾全栈自主', text: '昇腾910C国产最强AI芯片，AI Capex 2026E ¥80-120B；Atlas 900超节点（64p/128p）对标NVIDIA DGX；DC集群：东莞 / 深圳 / 乌兰察布三大算力中心。', color: t.primary },
    { title: '液冷方案：全栈自研封闭生态', text: '全栈液冷：从芯片→节点→机柜→DC完全自研；机柜功率密度60kW+/柜，行业领先；自研CDU/Manifold/冷板全栈方案，非标接口&私有协议。', color: t.secondary },
    { title: '采购特征：极其封闭', text: '华为液冷组件100%自研，不对外采购CDU/Manifold/冷板；超节点整机柜出货，组件级供应商准入极难；国内华鲲/超聚变/宝德等OEM受华为强管控。', color: t.accent },
    { title: '海悟策略：间接渗透 + 长期跟踪', text: '华为液冷供应链自闭环 → 短期无直接切入窗口；间接路径：通过华鲲/超聚变等华为OEM商供应通用组件(管路/接头)；长期：跟踪华为开放生态节奏(信创政策催化)。', color: 'e76f51' },
  ], 0.65);
  insightBox(s, t, '🎯 海悟机会评估', '华为液冷生态极其封闭，短期无直接供货机会。机会点：① 华为OEM商（华鲲/超聚变）可能在通用组件存在外采需求；② GPU禁令下信创加速可能倒逼华为开放生态；③ 非核心管路/接头仍有渗透空间。评级：P2（长期跟踪，暂不优先投入）。', 0.5, 3.82, 9, 0.65);
  source(s, t, '💬 微信源: huawei-ascend | 🌐 Huawei Annual Report 2025', 4.6);
  ft(s, t); badge(s, '09', t);
}
module.exports = { createSlide };
