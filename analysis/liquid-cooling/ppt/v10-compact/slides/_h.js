// ──── Layout Engine v2 (Expanded R4) ────
// Canvas: 10" × 5.625" (LAYOUT_16x9)
// Content area: x:0.5–9.5, usable y:0.1–5.35
// R4 Theme: #1F497D / #4F81BD / #4BACC6 / #F79646 / #EEECE1

const t = require('./theme');

// ── Layout Constants ──
const L = {
  TITLE_X: 0.5, TITLE_Y: 0.1, TITLE_W: 9, TITLE_H: 0.45,
  CONTENT_Y: 0.65,
  FOOTER_Y: 5.05,
  FONT_TITLE: 18, FONT_H2: 12, FONT_BODY: 9, FONT_SM: 8, FONT_XS: 7,
};

// ── Page badge ──
function badge(s, pg) {
  s.addShape('roundRect', { x: 9.15, y: 5.15, w: 0.5, h: 0.3, fill: { color: t.primary }, rectRadius: 0.08 });
  s.addText(String(pg), { x: 9.15, y: 5.15, w: 0.5, h: 0.3, fontSize: 9, fontFace: 'Arial', color: 'FFFFFF', bold: true, align: 'center', valign: 'middle' });
}

// ── Top accent bar ──
function topBar(s) { s.addShape('rect', { x: 0, y: 0, w: 10, h: 0.04, fill: { color: t.highlight } }); }

// ── Footer ──
function footer(s) {
  s.addShape('rect', { x: 0, y: 5.55, w: 10, h: 0.08, fill: { color: t.primary } });
  s.addText('海悟科技 | 机柜级液冷战略洞察 | 五看三定 v10 Expanded | 2026-05 | 机密', { x: 0.4, y: 5.2, w: 9, h: 0.24, fontSize: 7, fontFace: 'Microsoft YaHei', color: t.primary });
}

// ── Content page title (18pt, unified position) ──
function title(s, txt) {
  s.addText(txt, { x: L.TITLE_X, y: L.TITLE_Y, w: L.TITLE_W, h: L.TITLE_H, fontSize: L.FONT_TITLE, fontFace: 'Microsoft YaHei', color: t.primary, bold: true });
}

// ── Subtitle ──
function subtitle(s, txt) {
  s.addText(txt, { x: 0.5, y: 0.55, w: 9, h: 0.3, fontSize: 11, fontFace: 'Microsoft YaHei', color: t.secondary });
}

// ── Section divider ──
function sectionSlide(s, num, main, desc) {
  s.background = { color: t.primary };
  s.addShape('rect', { x: 0, y: 0, w: 10, h: 0.08, fill: { color: t.highlight } });
  s.addText(num, { x: 0.8, y: 1.2, w: 8.4, h: 1.0, fontSize: 52, fontFace: 'Microsoft YaHei', color: t.highlight, bold: true });
  s.addText(main, { x: 0.8, y: 2.3, w: 8.4, h: 0.7, fontSize: 28, fontFace: 'Microsoft YaHei', color: 'FFFFFF' });
  if (desc) s.addText(desc, { x: 0.8, y: 3.1, w: 8.4, h: 0.6, fontSize: 13, fontFace: 'Microsoft YaHei', color: t.accent });
}

// ── Data table (standardized) ──
function dataTable(s, headers, rows, opts) {
  const hdrRow = headers.map(h => ({
    text: h,
    options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', fill: { color: t.primary }, color: 'FFFFFF', align: 'center', valign: 'middle', border: { color: 'FFFFFF', pt: 0.5 } }
  }));
  const dataRows = rows.map(row => row.map((cell, i) => ({
    text: String(cell),
    options: { fontSize: 9, fontFace: i === 0 ? 'Microsoft YaHei' : 'Arial', color: i === 0 ? t.primary : '333333', align: i === 0 ? 'left' : 'center', valign: 'middle', border: { color: t.light, pt: 0.5 }, bold: i === 0 }
  })));
  const defs = { x: 0.5, w: 9, rowH: 0.38, border: { color: t.secondary, pt: 0.8 } };
  const cfg = Object.assign({}, defs, opts);
  if (!opts || opts.y === undefined) cfg.y = 0.65;
  s.addTable([hdrRow, ...dataRows], cfg);
}

// ── Source (in speaker notes) ──
function source(s, txt) {
  s.addNotes(`数据来源: ${txt}\n校验: Kimi ✅ MiniMax ✅ | 2026-05-09\n铁律⑩索引+铁律⑪推算公式`);
}

// ── Insight callout box ──
function insight(s, txt, y) {
  const yy = y || 4.55;
  s.addShape('roundRect', { x: 0.3, y: yy, w: 9.4, h: 0.55, fill: { color: 'FFF8F0' }, rectRadius: 0.06, border: { color: t.highlight, pt: 0.5 } });
  s.addShape('rect', { x: 0.3, y: yy, w: 0.05, h: 0.55, fill: { color: t.highlight } });
  s.addText('💡 ' + txt, { x: 0.6, y: yy + 0.03, w: 8.9, h: 0.49, fontSize: 9, fontFace: 'Microsoft YaHei', color: t.primary, valign: 'middle' });
}

// ── KPI metric card row ──
function kpiRow(s, kpis, y) {
  const n = kpis.length;
  const w = (9 - (n - 1) * 0.1) / n;
  const yy = y || 0.65;
  kpis.forEach((k, i) => {
    const x = 0.5 + i * (w + 0.1);
    s.addShape('roundRect', { x, y: yy, w, h: 0.68, fill: { color: k.color || 'F5F7FA' }, rectRadius: 0.06 });
    s.addText(k.label, { x: x + 0.08, y: yy + 0.04, w: w - 0.16, h: 0.22, fontSize: 8, fontFace: 'Microsoft YaHei', color: t.secondary });
    s.addText(k.value, { x: x + 0.08, y: yy + 0.26, w: w - 0.16, h: 0.38, fontSize: 15, fontFace: 'Arial', color: t.primary, bold: true });
  });
}

// ── Bullet list with colored bars (compact) ──
function bulletList(s, items, startY) {
  const yy = startY || 0.65;
  items.forEach((it, i) => {
    const y = yy + i * 0.48;
    s.addShape('rect', { x: 0.5, y, w: 0.04, h: 0.40, fill: { color: it.color || t.highlight } });
    s.addText(it.title, { x: 0.8, y: y + 0.01, w: 8.5, h: 0.18, fontSize: 9, fontFace: 'Microsoft YaHei', color: it.color || t.primary, bold: true });
    s.addText(it.text, { x: 0.8, y: y + 0.19, w: 8.5, h: 0.21, fontSize: 8, fontFace: 'Microsoft YaHei', color: t.secondary });
  });
}

// ── Two-column layout ──
function twoCol(s, leftTitle, leftRows, rightTitle, rightRows, startY) {
  const yy = startY || 0.65;
  s.addText(leftTitle, { x: 0.5, y: yy, w: 4.2, h: 0.28, fontSize: L.FONT_H2, fontFace: 'Microsoft YaHei', color: t.primary, bold: true });
  const lr = leftRows.map(r => [r[0], r[1]]);
  dataTable(s, ['指标', '数据'], lr, { x: 0.5, y: yy + 0.3, w: 4.2, rowH: 0.32, colW: [1.5, 2.7] });
  s.addText(rightTitle, { x: 5.1, y: yy, w: 4.4, h: 0.28, fontSize: L.FONT_H2, fontFace: 'Microsoft YaHei', color: t.primary, bold: true });
  const rr = rightRows.map(r => [r[0], r[1]]);
  dataTable(s, ['指标', '数据'], rr, { x: 5.1, y: yy + 0.3, w: 4.4, rowH: 0.32, colW: [1.5, 2.9] });
}

// ── Takeaway (bottom summary) ──
function takeaway(s, txt, y) {
  const yy = y || 4.5;
  s.addShape('rect', { x: 0.5, y: yy, w: 9, h: 0.45, fill: { color: t.light } });
  s.addText(txt, { x: 0.7, y: yy + 0.05, w: 8.6, h: 0.35, fontSize: 9, fontFace: 'Microsoft YaHei', color: t.primary, bold: true, valign: 'middle' });
}

// ── Cover page ──
function cover(s, mainTitle, sub, meta) {
  s.background = { color: t.primary };
  s.addShape('rect', { x: 0, y: 0, w: 10, h: 0.1, fill: { color: t.highlight } });
  s.addText(mainTitle, { x: 0.8, y: 1.2, w: 8.4, h: 1.8, fontSize: 46, fontFace: 'Microsoft YaHei', color: 'FFFFFF', bold: true });
  s.addText(sub, { x: 0.8, y: 3.0, w: 8.4, h: 0.6, fontSize: 24, fontFace: 'Microsoft YaHei', color: t.highlight });
  s.addShape('rect', { x: 0, y: 4.5, w: 10, h: 0.06, fill: { color: t.highlight } });
  s.addText(meta, { x: 0.8, y: 4.7, w: 8.4, h: 0.4, fontSize: 11, fontFace: 'Microsoft YaHei', color: t.accent });
}

module.exports = { L, badge, topBar, footer, title, subtitle, sectionSlide, dataTable, source, insight, kpiRow, bulletList, twoCol, takeaway, cover };
