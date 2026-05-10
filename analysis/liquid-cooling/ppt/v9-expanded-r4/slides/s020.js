const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, topBar, footer, title, dataTable, source, insight, takeaway } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, 'OTT小结：优先级排序与触达空间');
  dataTable(s, ['OTT', '2026液冷采购(¥B)', '海悟SAM(¥M)', '进入难度', '窗口', 'P'], [
    ['字节', '18-22', '150-360', '低(零既有供应商)', '6-12月', 'P0'],
    ['阿里', '16-20', '100-240', '中(需认证)', '12-18月', 'P1'],
    ['腾讯', '10-15', '50-100', '中(招标竞争)', '6-12月', 'P1'],
    ['合计', '44-57', '300-700', '—', '—', '—']
  ], { colW: [1.2, 1.5, 1.3, 1.3, 0.9, 0.7], y: 0.7 });
  takeaway(s, '字节+阿里+腾讯=OTT液冷80% 海悟P0攻字节+P1阿里/腾讯', 3.6);
  insight(s, '字节+阿里+腾讯=OTT液冷80% 海悟P0攻字节+P1阿里/腾讯');
  source(s, 'P9-P19全部源文件汇总; sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md → 四大OTT AI CAPEX ¥6,500亿+(2026E) 全球九大CSP $8,300亿; sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-bytedance-alibaba-idc-procurement-2026.md → 液冷采购招标制全面铺开; sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-06-ali-ppu-chip-overview.md → 阿里芯片生态; sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-06-super-node-insight.md → 超节点市场空间; SAM=液冷采购×(CDU+Manifold+冷板可参与)~10-20%');
  badge(s, '20');
}
module.exports = { createSlide: createSlide };
