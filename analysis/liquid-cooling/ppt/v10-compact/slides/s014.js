const pptxgen = require('pptxgenjs');
const { sectionSlide, source } = require('./_h');
function createSlide(p) { const s = p.addSlide();
  sectionSlide(s, '二看★', '看市场：GPU芯片深度洞察', '每GPU 2页：芯片规格·OEM生态·液冷机会');
  source(s, 'sources/GPU对比表格-精确修正.csv → NVIDIA/昇腾/寒武纪/海光/平头哥全系TDP/出货; sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md → 昇腾950PR 75万颗已订满; sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-06-super-node-insight.md → Scale-up超节点技术路线');
}
module.exports = { createSlide };
