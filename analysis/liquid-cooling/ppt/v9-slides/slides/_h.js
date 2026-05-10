// ──── Layout Engine v2 ────
// Canvas: 10" × 5.625" (LAYOUT_16x9)
// Content area: x:0.5–9.5, usable y:0.1–5.35

// ── Layout Constants ──
const L = {
  TITLE_X: 0.5, TITLE_Y: 0.1, TITLE_W: 9, TITLE_H: 0.45,
  CONTENT_Y: 0.65,                           // first content row
  FOOTER_Y: 5.22,
  BADGE_X: 9.3, BADGE_Y: 5.1,
  FONT_TITLE: 18, FONT_H2: 12, FONT_BODY: 9, FONT_SM: 8,
  ROW_H: 0.75,                                // standard content row height
  GAP: 0.08,                                  // standard gap between elements
};

// ── Page badge (bottom-right circle) ──
function badge(s, pg, t) {
  s.addShape('oval', { x: L.BADGE_X, y: L.BADGE_Y, w: 0.4, h: 0.4, fill: { color: t.accent } });
  s.addText(String(pg), { x: L.BADGE_X, y: L.BADGE_Y, w: 0.4, h: 0.4, fontSize: 10, fontFace: 'Arial', color: 'FFFFFF', bold: true, align: 'center', valign: 'middle' });
}

// ── Top accent bar ──
function bar(s, t) { s.addShape('rect', { x: 0, y: 0, w: 10, h: 0.06, fill: { color: t.accent } }); }

// ── Footer line ──
function ft(s, t) {
  s.addShape('rect', { x: 0, y: 5.62, w: 10, h: 0.01, fill: { color: t.accent } });
  s.addText('海悟科技  |  机柜级液冷战略  |  2026-05  |  机密', { x: 0.5, y: L.FOOTER_Y, w: 5, h: 0.3, fontSize: 7, fontFace: 'Microsoft YaHei', color: t.secondary });
}

// ── Standard content page title ──
function title(s, t, text) {
  s.addText(text, { x: L.TITLE_X, y: L.TITLE_Y, w: L.TITLE_W, h: L.TITLE_H, fontSize: L.FONT_TITLE, fontFace: 'Microsoft YaHei', color: t.primary, bold: true });
}

// ── Section divider (dark bg) ──
function section(s, t, num, text, sub) {
  s.background = { color: t.primary };
  s.addShape('rect', { x: 0, y: 0, w: 10, h: 0.08, fill: { color: t.accent } });
  s.addText(num, { x: 0.8, y: 0.6, w: 8.4, h: 1.0, fontSize: 72, fontFace: 'Arial', color: t.accent, bold: true });
  s.addText(text, { x: 0.8, y: 1.6, w: 8.4, h: 1.0, fontSize: 36, fontFace: 'Microsoft YaHei', color: 'FFFFFF', bold: true });
  if (sub) s.addText(sub, { x: 0.8, y: 2.6, w: 8.4, h: 0.8, fontSize: 16, fontFace: 'Microsoft YaHei', color: t.light });
  s.addShape('rect', { x: 0, y: 5.5, w: 10, h: 0.08, fill: { color: t.accent } });
  s.addText('海悟科技 | 机柜级液冷战略 | 2026-05', { x: 0.8, y: 4.8, w: 5, h: 0.3, fontSize: 9, fontFace: 'Microsoft YaHei', color: t.light });
}

// ── KPI card row (4-5 metrics in a row) ──
function kpiRow(s, t, kpis, y) {
  const n = kpis.length;
  const w = (9 - (n-1) * 0.12) / n;
  kpis.forEach((k, i) => {
    const x = 0.5 + i * (w + 0.12);
    s.addShape('roundRect', { x, y, w, h: 0.7, fill: { color: k.color || t.accent }, rectRadius: 0.06 });
    s.addText(k.label, { x: x+0.08, y: y+0.03, w: w-0.16, h: 0.22, fontSize: 7, fontFace: 'Microsoft YaHei', color: 'FFFFFF' });
    s.addText(k.value, { x: x+0.08, y: y+0.25, w: w-0.16, h: 0.42, fontSize: 14, fontFace: 'Arial', color: 'FFFFFF', bold: true, valign: 'middle' });
  });
}

// ── Insight callout box ──
function insightBox(s, t, label, text, x, y, w, h) {
  s.addShape('roundRect', { x, y, w, h, fill: { color: t.bg }, rectRadius: 0.06, border: { color: t.light, pt: 0.5 } });
  s.addText(label, { x: x+0.1, y: y+0.05, w: w-0.2, h: 0.22, fontSize: 10, fontFace: 'Microsoft YaHei', color: t.primary, bold: true });
  s.addText(text, { x: x+0.1, y: y+0.28, w: w-0.2, h: h-0.35, fontSize: 8, fontFace: 'Microsoft YaHei', color: t.secondary });
}

// ── Bullet list with colored left border ──
function bulletList(s, t, items, startY) {
  items.forEach((it, i) => {
    const y = startY + i * 0.78;
    s.addShape('rect', { x: 0.5, y, w: 0.06, h: 0.65, fill: { color: it.color || t.accent } });
    s.addText(it.title, { x: 0.8, y, w: 8.5, h: 0.28, fontSize: 11, fontFace: 'Microsoft YaHei', color: it.color || t.primary, bold: true });
    s.addText(it.text, { x: 0.8, y: y+0.28, w: 8.5, h: 0.37, fontSize: L.FONT_BODY, fontFace: 'Microsoft YaHei', color: t.secondary });
  });
}

// ── Two-column comparison layout ──
function twoCol(s, t, leftTitle, leftItems, rightTitle, rightItems, startY) {
  s.addText(leftTitle, { x: 0.5, y: startY, w: 4.3, h: 0.25, fontSize: L.FONT_H2, fontFace: 'Microsoft YaHei', color: t.primary, bold: true });
  leftItems.forEach((item, i) => {
    s.addShape('rect', { x: 0.5, y: startY+0.35 + i*0.42, w: 0.05, h: 0.35, fill: { color: t.accent } });
    s.addText(item, { x: 0.7, y: startY+0.35 + i*0.42, w: 4.1, h: 0.35, fontSize: L.FONT_BODY, fontFace: 'Microsoft YaHei', color: t.secondary });
  });
  s.addText(rightTitle, { x: 5.2, y: startY, w: 4.3, h: 0.25, fontSize: L.FONT_H2, fontFace: 'Microsoft YaHei', color: t.primary, bold: true });
  rightItems.forEach((item, i) => {
    s.addShape('rect', { x: 5.2, y: startY+0.35 + i*0.42, w: 0.05, h: 0.35, fill: { color: t.accent } });
    s.addText(item, { x: 5.4, y: startY+0.35 + i*0.42, w: 4.1, h: 0.35, fontSize: L.FONT_BODY, fontFace: 'Microsoft YaHei', color: t.secondary });
  });
}

// ── Source reference line ──
function source(s, t, text, y) {
  s.addText(text, { x: 0.5, y: y || 4.7, w: 9, h: 0.25, fontSize: 7, fontFace: 'Microsoft YaHei', color: t.light });
}

// ── Table helpers ──
function hdrCell(t, text, w) {
  return { text: String(text), options: { bold: true, fontSize: 8, fontFace: 'Microsoft YaHei', fill: { color: t.primary }, color: 'FFFFFF', align: 'center', valign: 'middle' } };
}
function dataCell(t, text, b) {
  return { text: String(text), options: { fontSize: 8, fontFace: 'Microsoft YaHei', color: '03045e', align: 'center', valign: 'middle', border: { color: '90e0ef', pt: 0.5 }, bold: b || false } };
}
function tblOpts(t) { return { border: { color: t.secondary, pt: 0.5 } }; }

// ── Data table with title ──
function dataTable(s, t, headers, rows, colW, y) {
  const th = headers.map(h => hdrCell(t, h));
  const tr = rows.map(r => r.map(c => dataCell(t, c)));
  const allRows = [th, ...tr];
  const rowH = Math.min(0.65, (4.8 - y) / allRows.length);
  s.addTable(allRows, { x: 0.5, y, w: 9, colW, rowH, ...tblOpts(t) });
}

// ── Summary row (bottom-aligned takeaway) ──
function takeaway(s, t, text, y) {
  const h = text.length > 200 ? 0.7 : 0.4;
  s.addShape('rect', { x: 0.5, y, w: 9, h, fill: { color: t.bg } });
  s.addText(text, { x: 0.7, y: y+0.05, w: 8.6, h: h-0.1, fontSize: L.FONT_BODY, fontFace: 'Microsoft YaHei', color: t.primary, bold: true });
}

// ── Cover page ──
function cover(s, t, mainTitle, subTitle, meta) {
  s.background = { color: t.primary };
  s.addShape('rect', { x: 0, y: 0, w: 10, h: 0.1, fill: { color: t.accent } });
  s.addText(mainTitle, { x: 0.8, y: 1.2, w: 8.4, h: 1.8, fontSize: 48, fontFace: 'Microsoft YaHei', color: 'FFFFFF', bold: true });
  s.addText(subTitle, { x: 0.8, y: 3.0, w: 8.4, h: 0.6, fontSize: 24, fontFace: 'Microsoft YaHei', color: t.accent });
  s.addShape('rect', { x: 0, y: 4.5, w: 10, h: 0.06, fill: { color: t.accent } });
  s.addText(meta, { x: 0.8, y: 4.7, w: 8.4, h: 0.4, fontSize: 11, fontFace: 'Microsoft YaHei', color: t.light });
}

// ── TOC page ──
function toc(s, t, sections) {
  s.background = { color: t.primary };
  s.addShape('rect', { x: 0, y: 0, w: 10, h: 0.06, fill: { color: t.accent } });
  s.addText('目录', { x: 0.8, y: 0.3, w: 8.4, h: 0.6, fontSize: 32, fontFace: 'Microsoft YaHei', color: 'FFFFFF', bold: true });
  sections.forEach((sec, i) => {
    const y = 1.1 + i * 0.85;
    s.addText(sec.num, { x: 0.8, y, w: 0.6, h: 0.5, fontSize: 22, fontFace: 'Arial', color: t.accent, bold: true });
    s.addText(sec.title, { x: 1.5, y, w: 5, h: 0.3, fontSize: 16, fontFace: 'Microsoft YaHei', color: 'FFFFFF', bold: true });
    if (sec.desc) s.addText(sec.desc, { x: 1.5, y: y+0.3, w: 7.5, h: 0.28, fontSize: 9, fontFace: 'Microsoft YaHei', color: t.light });
  });
}

module.exports = { L, badge, bar, ft, title, section, kpiRow, insightBox, bulletList, twoCol, source, hdrCell, dataCell, tblOpts, dataTable, takeaway, cover, toc };
