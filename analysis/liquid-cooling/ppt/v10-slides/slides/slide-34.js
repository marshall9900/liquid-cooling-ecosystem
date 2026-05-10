const pptxgen = require('pptxgenjs'); const theme = require('./theme');
const { addPageBadge, addTopBar, addFooter } = require('./_helpers');
function createSlide(pres) {
  const s = pres.addSlide(); s.background = { color: 'FFFFFF' }; addTopBar(s, theme);
  s.addText('数据溯源 · 铁律治理 · 源文件索引 (v6)', { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 18, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  
  s.addText('六铁律', { x: 0.5, y: 0.9, w: 4, h: 0.3, fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.secondary, bold: true });
  const ironRules = [
    '① sources/刷新 → 洞察联动',
    '② 四维统一(GPU/OTT/OEM/IDC)',
    '③ 五看三定汇总',
    '④ 先分后合(子分析→汇总)',
    '⑤ 市场数据以最新源文件为准',
    '⑥ 🔥新文件导入→所有关联洞察联动刷新+索引留痕',
  ];
  ironRules.forEach((r, i) => s.addText(r, { x: 0.5, y: 1.25+i*0.28, w: 4.3, h: 0.25, fontSize: 8, fontFace: 'Microsoft YaHei', color: theme.primary }));
  
  s.addText('11项分析源 (v6, 2026-05-10)', { x: 5.2, y: 0.9, w: 4.3, h: 0.3, fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.secondary, bold: true });
  const sources = [
    'gpu/2026-05-09-gpu-chip-insight.md',
    'supernode/2026-05-09-supernode-insight.md v6',
    'supernode/2026-05-10-*-insight.md ×2 NEW',
    'ott/2026-05-09-ott-cloud-insight.md',
    'oem/2026-05-09-oem-server-insight.md',
    'idc/2026-05-09-idc-datacenter-insight.md',
    'cooling/2026-05-09-cooling-competition v6',
    'cooling/2026-05-10-guosen-*-space.md NEW',
    'decision/standards/operations/strategy/',
    'docs/2026-05-09-海悟液冷五看三定.md',
    'analysis/liquid-cooling/INDEX.md NEW',
  ];
  sources.forEach((src, i) => s.addText(src, { x: 5.2, y: 1.25+i*0.22, w: 4.3, h: 0.2, fontSize: 6.5, fontFace: 'Arial', color: theme.secondary }));
  
  s.addText('新增源文件 (2026-05-10)', { x: 0.5, y: 3.7, w: 9, h: 0.3, fontSize: 12, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true });
  const newSources = '华源证券《关注26年国产超节点液冷新增量》(2026-04-12) | 东吴证券《海光&曙光系超节点》(2026-04-14) | 国信证券《服务器液冷专题》(2026-04-14) 535亿美元CAGR43.6%';
  s.addText(newSources, { x: 0.5, y: 4.0, w: 9, h: 0.5, fontSize: 8, fontFace: 'Microsoft YaHei', color: theme.primary });
  
  s.addText('数据源: SEC EDGAR ×13 | Eastmoney研报 ×569+ | RSS(Hub+FlareSolverr) | 微信文章 | ChangeDetection网页快照', { x: 0.5, y: 4.5, w: 9, h: 0.3, fontSize: 8, fontFace: 'Microsoft YaHei', color: theme.secondary });
  addPageBadge(s, '34', theme); addFooter(s, theme);
  return s;
}
module.exports = { createSlide };
