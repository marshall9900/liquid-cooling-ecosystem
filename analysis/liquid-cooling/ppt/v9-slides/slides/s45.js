let pptxgen, t, badge, bar, ft, title, bulletList, insightBox;
pptxgen = require('pptxgenjs'); t = require('./theme'); ({badge, bar, ft, title, bulletList, insightBox} = require('./_h'));
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; bar(s, t);
  title(s, t, '定策略 · CDU：IDC运营方自主决策 → 海悟远期增长极');

  bulletList(s, t, [
    { title: '市场空间', text: 'TAM ¥80-120亿（2026E）→ ¥300-500亿（2030E），CAGR ~35%。ASP ¥20-30万/台（100-150kW），单柜1-2台，与机柜数1:1线性增长。当前Vertiv/曙光/英维克为主，国产替代 + 运营商集采驱动格局重塑。', color: t.accent },
    { title: '采购特征与竞争', text: 'IDC运营方自主决策（非GPU绑定），投标参数：变频效率 > 冗余设计 > 售后服务 > 价格。运营商/信创项目推国产化需求。竞争壁垒较低（系统集成为主），差异化空间在整体可靠性和运维成本。', color: t.secondary },
    { title: '海悟优势匹配', text: '数据中心温控基因是核心壁垒——泵、换热器、控制三大核心元器件均有自研/集成经验。运营商（移动/联通/电信）和IDC（秦淮/数据港/万国）客户基础可直接复用。需补：变频控制算法、液-液换热器设计、系统级集成测试。', color: t.primary },
  ], 0.65);

  insightBox(s, t, '💡 CDU策略', 'P2远期（2028后）启动：① Manifold/冷板建立客户关系和供应资质后 → CDU打包销售（全栈便利性）  ② 秦淮/数据港/万国招标参与 → 先送样积累用例  ③ 差异化定位：冷板+Manifold+CDU全栈一体 = 客户一次采购全搞定  ④ 定价低于Vertiv 20-30% → 性价比竞争  ⑤ 不做正面价格战 → 以全栈组件为差异化护城河。', 0.5, 3.3, 9, 1.6);

  ft(s, t); badge(s, '45', t);
}
module.exports = { createSlide };
