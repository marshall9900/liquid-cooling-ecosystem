const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, topBar, footer, title, bulletList, insight, source } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, '海光DCU-液冷机会与信创优势');
  bulletList(s, [
    { title: '① 信创优势', text: 'DCU国产化=政策优先→央企/政府/运营商采用→国产液冷组件优先采购', color: t.primary },
    { title: '② 曙光绑定', text: '中科曙光为嫡系OEM(40%+)→曙光液冷=曙光数创为主→海悟需外部OEM突破', color: t.primary },
    { title: '③ 浪潮渠道', text: '浪潮为第二OEM(25%)→海悟已建立浪潮关系→Manifold/CDU通过浪潮进入', color: t.primary },
    { title: '④ 液冷需求', text: '深算2号300W=风冷即可→3号500W=冷板推荐。需求随3号增长2027-2028', color: t.primary },
    { title: '⑤ 优先级', text: 'P1→海光=信创赛道(长期利好)→Manifold/CDU先行→冷板P2', color: t.primary }
  ]);
  insight(s, '海光=信创赛道P1长期利好 通过浪潮渠道突破曙光壁垒 液冷需求2027起量');
  source(s, 'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-haiguang-dcu-deep-compute-series.md+sources/reports/industry_液冷/05_液冷市场_行业综述/[2025-08-17] 国信证券 - 通信行业周报2025年第33周：液冷呈现高景气度，运营商2025上半年业绩稳健增长.pdf[2025-08-17] 国信证券 - 通信行业周报2025年第33周：液冷呈现高景气度，运营商2025上半年业绩稳健增长.pdf 海光线TAM=30万卡×70%×¥2,000/卡=¥42M(2028E)');
  badge(s, '27');
}
module.exports = { createSlide };
