const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, topBar, footer, title, source, bulletList, takeaway } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, 'OTT总结：液冷决策权分布');
  bulletList(s, [
    { title: '① 阿里', text: 'CDU/Manifold=自主招标 冷板=思泉/OEM推荐→海悟通道:H3C+思泉→P1', color: t.primary },
    { title: '② 字节', text: 'CDU/Manifold=自主招标(自研队) 冷板=自主定制→海悟通道:浪潮/宁畅→P0', color: t.highlight },
    { title: '③ 腾讯', text: 'CDU/Manifold=公开招标 冷板=CoolIT锁定→海悟通道:直接招标→P1', color: t.primary },
    { title: '④ 快手', text: 'CDU/Manifold=招标 冷板=OEM推荐→海悟通道:OEM+直接→P1', color: t.primary },
    { title: '⑤ 结论', text: 'CDU/Manifold赛道≠GPU绑定→海悟所有OTT均可直接参与 最大窗口=字节', color: t.highlight }
  ], 0.7);
  takeaway(s, 'CDU/Manifold赛道≠GPU绑定 海悟可直投招标 字节=最大窗口', 4.78);
  source(s, 'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md → 四大OTT GPU采购汇总(AI CAPEX ¥6,500亿+ 2026E); sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-bytedance-alibaba-idc-procurement-2026.md → 字节/阿里IDC招标规模及液冷要求; sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-06-ali-ppu-chip-overview.md → 阿里芯片生态; 【估算】:优先级=字节(P0:零既有供应商)>阿里(P1:间接认证)>腾讯(P1:招标)>快手(P1)');
  badge(s, '18');
}
module.exports = { createSlide: createSlide };
