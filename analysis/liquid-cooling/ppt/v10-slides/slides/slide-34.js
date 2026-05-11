const pptxgen = require('pptxgenjs'); const theme = require('./theme');
const { addPageBadge, addTopBar, addFooter } = require('./_helpers');
function createSlide(pres) {
  const s = pres.addSlide(); s.background = { color: 'FFFFFF' }; addTopBar(s, theme);
  s.addText('数据溯源 · 铁律治理 · 源文件索引 (v7)', { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 18, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  
  s.addText('六铁律', { x: 0.5, y: 0.9, w: 4, h: 0.3, fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.secondary, bold: true });
  const ironRules = [
    '① sources/刷新 → 洞察联动',
    '② 四维统一(GPU/OTT/OEM/IDC)',
    '③ 五看三定汇总',
    '④ 先分后合(子分析→汇总)',
    '⑤ 市场数据以最新源文件为准',
    '⑥ 新文件导入→所有关联洞察联动刷新+索引',
  ];
  ironRules.forEach((r, i) => s.addText(r, { x: 0.5, y: 1.25+i*0.28, w: 4.3, h: 0.25, fontSize: 8, fontFace: 'Microsoft YaHei', color: theme.primary }));
  
  s.addText('11项分析源 (v7, 2026-05-11)', { x: 5.2, y: 0.9, w: 4.3, h: 0.3, fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.secondary, bold: true });
  const sources = [
    'gpu/2026-05-09-gpu-chip-insight.md v6 🔥',
    'supernode/2026-05-09-supernode-insight.md v6',
    'supernode/2026-05-10-*-insight.md ×2',
    'ott/2026-05-09-ott-cloud-insight.md v6 🔥',
    'oem/2026-05-09-oem-server-insight.md v6 🔥',
    'idc/2026-05-09-idc-datacenter-insight.md v6 🔥',
    'cooling/2026-05-09-cooling-competition v7 🔥',
    'cooling/2026-05-10-guosen-*-space.md',
    'decision/standards/operations/strategy/',
    'docs/2026-05-09-海悟液冷五看三定.md',
    'analysis/liquid-cooling/INDEX.md v1.1 🔥',
  ];
  sources.forEach((src, i) => s.addText(src, { x: 5.2, y: 1.25+i*0.2, w: 4.3, h: 0.18, fontSize: 6.5, fontFace: 'Arial', color: theme.secondary }));
  
  s.addText('2026-05-11 新增情报 (14条RSS+3篇研报→5维洞察刷新)', { x: 0.5, y: 3.5, w: 9, h: 0.3, fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true });
  const newSources = 'AWS热事件冷却宕机 | Arista XPO冷板400W | AI DC水/电/噪音 | AMD MI350P | Anthropic SpaceX Colossus | Google TPU8 | MS基础设施翻倍 | Gartner交换机风暴 | 康宁NV光入柜内 | 国产AI算力液冷推荐';
  s.addText(newSources, { x: 0.5, y: 3.8, w: 9, h: 0.5, fontSize: 7.5, fontFace: 'Microsoft YaHei', color: theme.primary });
  
  s.addText('数据源: SEC EDGAR ×13 | Eastmoney研报 ×572+ | RSS 186篇(2026-05-11) | 微信文章 | ChangeDetection网页快照 | Bloomberg/Gartner/Dell\'Oro Group快照', { x: 0.5, y: 4.5, w: 9, h: 0.3, fontSize: 7, fontFace: 'Microsoft YaHei', color: theme.secondary });
  addPageBadge(s, '34', theme); addFooter(s, theme);
  return s;
}
module.exports = { createSlide };
