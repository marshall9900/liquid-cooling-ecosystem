const t = require('./theme');
const { badge, topBar, footer, title, bulletList, source, insight } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s); badge(s, '60');
  title(s, 'CoolIT深度：替代可能性分析');
  bulletList(s, [
    { title: '【1】短期(2026-2027)', text: 'NVIDIA体系不可替代 CoolIT一供锁定。海悟→不做正面替代→做国产GPU冷板+Manifold', color: t.primary },
    { title: '【2】中期(2028-2029)', text: 'NVIDIA冷板双供可能(OCP推动)→海悟可认证后参入。国产GPU冷板→海悟直接竞争', color: t.primary },
    { title: '【3】长期(2030+)', text: 'NVIDIA开放冷板标准→多供应商。CoolIT份额下降→海悟可全面进入', color: t.primary },
    { title: '【4】海悟路径', text: '短期:Manifold+电源冷板→中期:国产GPU冷板+CPU冷板→长期:全栈(含NV冷板)', color: t.primary }
  ]);
  insight(s, '三步走: 短期二线突围→中期国产冷板→长期NV全栈 路径清晰 时间节奏可控', 3.85);
  source(s, 'CoolIT官网→NVL72冷板一供 | sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-gb300-liquid-cooling-domestic-breakthrough.md → 国产冷板降25-32%+交期10-15周 | NVIDIA认证体系分析');
}

module.exports = { createSlide };
