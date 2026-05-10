const pptxgen = require('pptxgenjs'); const theme = require('./theme');
const { addPageBadge, addTopBar, addFooter } = require('./_helpers');
function createSlide(pres) {
  const s = pres.addSlide(); s.background = { color: 'FFFFFF' }; addTopBar(s, theme);
  s.addText('数据溯源 · 铁律治理 · 源文件索引', { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 18, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  
  s.addText('五铁律', { x: 0.5, y: 1.0, w: 4, h: 0.3, fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.secondary, bold: true });
  const ironRules = [
    '① sources/刷新 → 洞察联动',
    '② 四维统一(GPU/OTT/OEM/IDC)',
    '③ 五看三定汇总',
    '④ 先分后合(子分析→汇总)',
    '⑤ 市场数据以最新源文件为准',
  ];
  ironRules.forEach((r, i) => s.addText(r, { x: 0.5, y: 1.4+i*0.3, w: 4, h: 0.25, fontSize: 8, fontFace: 'Microsoft YaHei', color: theme.primary }));
  
  s.addText('11项分析源 (v5, 2026-05-09)', { x: 5.2, y: 1.0, w: 4.3, h: 0.3, fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.secondary, bold: true });
  const sources = [
    'gpu/2026-05-09-gpu-chip-insight.md',
    'supernode/2026-05-09-supernode-insight.md',
    'ott/2026-05-09-ott-cloud-insight.md',
    'oem/2026-05-09-oem-server-insight.md',
    'idc/2026-05-09-idc-datacenter-insight.md',
    'cooling/2026-05-09-cooling-competition-insight.md',
    'decision/2026-05-09-decision-chain.md',
    'operations/...·-operations-ops-insight.md',
    'standards/...-standards-policy-insight.md',
    'strategy/...-strategy-insight.md',
    'docs/2026-05-09-海悟液冷五看三定.md',
  ];
  sources.forEach((src, i) => s.addText(src, { x: 5.2, y: 1.4+i*0.22, w: 4.3, h: 0.2, fontSize: 6.5, fontFace: 'Arial', color: theme.secondary }));
  
  s.addText('原始数据源', { x: 0.5, y: 3.8, w: 9, h: 0.3, fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.secondary, bold: true });
  const rawSources = 'sources/sec/{gpu,ott,oem}/{NVDA,AMD,INTC,MSFT,GOOG,AMZN,META,BIDU,JD,DELL,SMCI,VRT,NVENT}/ ×13 SEC EDGAR (cron每周六自动) | sources/wechat/ ×9(5/6-5/7) | sources/reports/company/ ×666东方财富研报 | sources/rss/ ×2(5/7-5/9)';
  s.addText(rawSources, { x: 0.5, y: 4.1, w: 9, h: 0.6, fontSize: 8, fontFace: 'Microsoft YaHei', color: theme.secondary });
  
  s.addText('完整索引: docs/数据溯源-源文件总索引.md | 架构门禁: docs/PPT架构审核门禁-v10设计.md', { x: 0.5, y: 4.8, w: 9, h: 0.3, fontSize: 8, fontFace: 'Microsoft YaHei', color: theme.accent });
  addPageBadge(s, '34', theme); addFooter(s, theme);
  return s;
}
module.exports = { createSlide };
