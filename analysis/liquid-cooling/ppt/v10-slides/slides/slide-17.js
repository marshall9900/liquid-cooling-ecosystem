const pptxgen = require('pptxgenjs'); const theme = require('./theme');
const { addPageBadge, addTopBar, addFooter } = require('./_helpers');
function createSlide(pres) {
  const s = pres.addSlide(); s.background = { color: 'FFFFFF' }; addTopBar(s, theme);

  // Title
  s.addText('华为昇腾芯片规格与演进 | GPU 定标准 > OEM 做适配', { x: 0.5, y: 0.25, w: 9, h: 0.45, fontSize: 17, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });

  // === Ascend Spec Table ===
  const headers = ['', '910B', '910C', '950PR', '950DT', '960', '970'];
  const colWidths = [1.1, 1.2, 1.2, 1.2, 1.2, 1.2, 1.2];
  const startX = 0.3;
  let curX = startX;
  const tableY = 0.8;
  const headerH = 0.35;

  // Header row
  const hdrColors = ['FFFFFF', 'e8f5e9', 'e8f5e9', 'fff3e0', 'fff3e0', 'fce4ec', 'fce4ec'];
  headers.forEach((h, i) => {
    s.addShape('rect', { x: curX, y: tableY, w: colWidths[i], h: headerH,
      fill: { color: i === 0 ? theme.primary : hdrColors[i] } });
    s.addText(h, { x: curX, y: tableY, w: colWidths[i], h: headerH,
      fontSize: 8, fontFace: 'Microsoft YaHei', color: i === 0 ? 'FFFFFF' : theme.primary,
      bold: true, align: 'center', valign: 'middle' });
    curX += colWidths[i];
  });

  // Header sub-label
  curX = startX + colWidths[0];
  const subLabels = ['已量产', '2025Q1', '2026Q1 ✅', '2026Q4', '2027Q4', '2028Q4'];
  subLabels.forEach((l, i) => {
    s.addText(l, { x: curX, y: tableY + headerH, w: colWidths[i+1], h: 0.22,
      fontSize: 6.5, fontFace: 'Microsoft YaHei', color: theme.secondary, align: 'center', valign: 'middle' });
    curX += colWidths[i+1];
  });

  // Data rows
  const rows = [
    { label: '制程', vals: ['SMIC 7nm N+2', 'SMIC 7nm\n双Die合封', '先进制程', '先进制程', '~5nm', '~3nm'] },
    { label: 'TDP', vals: ['~400W', '~500-600W', '~800-1000W', '~1000-1200W', '~1500W+', '~2000W+'] },
    { label: 'FP16 算力', vals: ['~400 TFLOPS', '800 TFLOPS', '—', '—', '—', '—'] },
    { label: 'FP8 算力', vals: ['—', '—', '1 PFLOPS', '1 PFLOPS', '翻倍950', '—'] },
    { label: 'FP4 算力', vals: ['—', '—', '2 PFLOPS', '2 PFLOPS', '4 PFLOPS', '8 PFLOPS'] },
    { label: '显存', vals: ['64GB HBM2e', '128GB HBM2e', '128GB\nHiBL 1.0 自研', '144GB\nHiZQ 2.0 自研', '288GB+', '288GB+'] },
    { label: '互联带宽', vals: ['HCCS', '784 GB/s', '2 TB/s (灵渠)', '2 TB/s (灵渠)', '翻倍950', '4 TB/s'] },
    { label: '架构', vals: ['SIMD', 'SIMD', 'SIMD+SIMT', 'SIMD+SIMT', 'SIMD+SIMT', 'SIMD+SIMT'] },
    { label: '冷却', vals: ['风冷/冷板', '冷板', 'Must 冷板', 'Must 冷板', 'Must 冷板\n微通道', 'MLCP\n微通道必选'] },
    { label: '定位', vals: ['训练+推理', '通用训推\n金融/政务', 'Prefill推理\n推荐/交互', 'Decode推理\n+ 训练', '千亿参数\n大模型', 'MoE/AGI'] },
    { label: '2026出货', vals: ['—', '—', '~80万片', '~40万片', '—', '—'] },
    { label: '超节点', vals: ['Atlas 900\n384卡', 'Atlas 900\n384卡', 'Atlas 950\n8192卡', 'Atlas 950\n8192卡', 'Atlas 960\n15488卡', '—'] },
  ];

  const rowH = 0.28;
  rows.forEach((row, ri) => {
    const y = tableY + headerH + 0.22 + ri * rowH;
    const bgColor = ri % 2 === 0 ? 'FFFFFF' : 'f5f5f5';
    curX = startX;
    // Row label
    s.addShape('rect', { x: curX, y, w: colWidths[0], h: rowH, fill: { color: theme.primary } });
    s.addText(row.label, { x: curX, y, w: colWidths[0], h: rowH, fontSize: 7, fontFace: 'Microsoft YaHei',
      color: 'FFFFFF', bold: true, align: 'center', valign: 'middle' });
    curX += colWidths[0];
    // Values
    row.vals.forEach((v, vi) => {
      s.addShape('rect', { x: curX, y, w: colWidths[vi+1], h: rowH, fill: { color: bgColor } });
      s.addText(v, { x: curX, y, w: colWidths[vi+1], h: rowH, fontSize: 6.5, fontFace: 'Microsoft YaHei',
        color: theme.text, align: 'center', valign: 'middle' });
      curX += colWidths[vi+1];
    });
  });

  // === Bottom: Key Innovations & Decision Chain ===
  const botY = tableY + headerH + 0.22 + rows.length * rowH + 0.15;

  // Left: Key innovations
  s.addText('关键技术突破', { x: 0.4, y: botY, w: 4, h: 0.25, fontSize: 10, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  const innovations = [
    '算力翻倍: 400 TFLOPS(910B) → 8 PFLOPS(970 FP4) 每代×2',
    '互联进化: HCCS → 灵衢2.0 开放生态 → 4TB/s (5×提升)',
    '存储自主: 外购HBM2e → 自研HiBL/HiZQ, 打破三星/SK垄断',
    '架构升级: SIMD → SIMD+SIMT双模型, 内存访问效率×4',
  ];
  innovations.forEach((t, i) => {
    s.addText('▸ ' + t, { x: 0.5, y: botY + 0.3 + i*0.2, w: 4.3, h: 0.2, fontSize: 6.5, fontFace: 'Microsoft YaHei', color: theme.text });
  });

  // Right: Decision chain simplified
  s.addText('采购决策链', { x: 5.2, y: botY, w: 4, h: 0.25, fontSize: 10, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  const dcItems = [
    { t: 'GPU 定标准', c: theme.primary, sub: '冷板规格/认证/生态' },
    { t: 'OEM 做适配', c: theme.secondary, sub: '浪潮/超聚变/宁畅/H3C' },
    { t: 'DC 自主决策', c: theme.accent, sub: 'CDU/Manifold 招标' },
  ];
  dcItems.forEach((d, i) => {
    const dy = botY + 0.3 + i*0.4;
    s.addShape('roundRect', { x: 5.3, y: dy, w: 4, h: 0.35, fill: { color: d.c }, rectRadius: 0.05 });
    s.addText(d.t, { x: 5.4, y: dy, w: 1.5, h: 0.35, fontSize: 8, fontFace: 'Microsoft YaHei', color: 'FFFFFF', bold: true, valign: 'middle' });
    s.addText(d.sub, { x: 7.0, y: dy, w: 2.2, h: 0.35, fontSize: 7, fontFace: 'Microsoft YaHei', color: 'FFFFFF', valign: 'middle' });
    if (i < 2) {
      s.addText('▼', { x: 5.8, y: dy+0.35, w: 3, h: 0.15, fontSize: 8, fontFace: 'Arial', color: theme.secondary, align: 'center' });
    }
  });

  // Bottom insight
  s.addText('源: 华为全联接大会2025(已核实) | 华金证券 昇腾950研报(2026-04-12) | SupChina/证券时报 2025-09-18 | DeepSeek V4适配950PR → 大厂抢购潮', { x: 0.5, y: 4.7, w: 9, h: 0.3, fontSize: 7, fontFace: 'Microsoft YaHei', color: theme.secondary });

  addPageBadge(s, '17', theme); addFooter(s, theme);
  return s;
}
module.exports = { createSlide };
