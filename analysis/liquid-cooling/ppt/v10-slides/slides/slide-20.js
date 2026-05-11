const pptxgen = require('pptxgenjs'); const theme = require('./theme');
const { addPageBadge, addTopBar, addFooter } = require('./_helpers');
function createSlide(pres) {
  const s = pres.addSlide(); s.background = { color: 'FFFFFF' }; addTopBar(s, theme);
  s.addText('五看小结: 差距即机会', { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 20, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  
  const items = [
    '✅ 产品机会: Manifold有基础 → 电源冷板+内存冷板+光模块冷板 = 蓝海爆量（竞品均未覆盖）',
    '⚠️ 认证补课: Intel UQD(2028H1前) > NVIDIA认证 > 阿里认证 = 三证缺一不可',
    '🔴 客户深耕: H3C/浪潮 2026年送样测试 → 借H3C渠道接触阿里/字节液冷团队',
    '⏳ 测试能力: 2026Q3自建热性能测试台 → 研发+客户演示双重价值',
    '🔥 冷却可靠性: AWS宕机事件 → 冗余CDU(N+1/热插拔) = IDC采购新增评估维度',
  ];
  items.forEach((item, i) => s.addText(item, { x: 0.5, y: 1.2+i*0.8, w: 9, h: 0.6, fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.primary } ));
  
  addPageBadge(s, '20', theme); addFooter(s, theme);
  return s;
}
module.exports = { createSlide };
