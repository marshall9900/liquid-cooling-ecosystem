const pptxgen = require('pptxgenjs'); const theme = require('./theme');
const { addPageBadge, addTopBar, addFooter } = require('./_helpers');
function createSlide(pres) {
  const s = pres.addSlide(); s.background = { color: 'FFFFFF' }; addTopBar(s, theme);
  s.addText('Manifold + 电源冷板 | 海悟2026-27核心战场', { x: 0.5, y: 0.3, w: 9, h: 0.5, fontSize: 18, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  
  // Manifold box
  s.addShape('roundRect', { x: 0.5, y: 1.0, w: 4.2, h: 3.5, fill: { color: 'e0efff' }, rectRadius: 0.1 });
  s.addText('🟢 Manifold (先行出量)', { x: 0.7, y: 1.1, w: 3.8, h: 0.4, fontSize: 14, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  const mData = ['TAM: 全球 $1.2-2.5B | 中国 ¥3-5B',
    'ASP: $500-1500/个 | 单柜 8-16个',
    '壁垒: 低 (管路分配=制造)',
    '竞争: 英维克/高澜/申菱/同飞',
    '海悟: ✅ 已有基础 → 送样H3C/浪潮',
    '2026目标: ¥50M (送样→小批量)'];
  mData.forEach((d, i) => s.addText(d, { x: 0.7, y: 1.6+i*0.45, w: 3.8, h: 0.4, fontSize: 9, fontFace: 'Microsoft YaHei', color: theme.primary }));
  
  // Power cold plate box
  s.addShape('roundRect', { x: 5.2, y: 1.0, w: 4.3, h: 3.5, fill: { color: 'fff3e0' }, rectRadius: 0.1 });
  s.addText('🔵 电源冷板 (蓝海爆量)', { x: 5.4, y: 1.1, w: 3.9, h: 0.4, fontSize: 14, fontFace: 'Microsoft YaHei', color: 'e65100', bold: true });
  const pData = ['TAM: 全球 $0.5-1B | 中国 ¥1-3B',
    'ASP: $50-100/片 | 单柜 36+片',
    '壁垒: 中等 (功率密度+热设计)',
    '竞争: ❗供应商空白→蓝海',
    '差异化: 竞品均未覆盖此赛道',
    '2027目标: ¥300M (蓝海爆量)'];
  pData.forEach((d, i) => s.addText(d, { x: 5.4, y: 1.6+i*0.45, w: 3.9, h: 0.4, fontSize: 9, fontFace: 'Microsoft YaHei', color: theme.primary }));
  
  s.addText('核心逻辑: Manifold低门槛建立信任(H3C/浪潮) → 电源冷板差异化爆量(竞品空白) → CPU冷板认证跟进(2028)', { x: 0.5, y: 4.8, w: 9, h: 0.4, fontSize: 10, fontFace: 'Microsoft YaHei', color: theme.accent, bold: true });
  addPageBadge(s, '31', theme); addFooter(s, theme);
  return s;
}
module.exports = { createSlide };
