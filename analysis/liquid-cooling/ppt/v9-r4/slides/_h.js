const t = require('./theme');

// Page badge (circle) - cleaner style
function badge(s, pg) {
  s.addShape('roundRect', { x: 9.15, y: 5.15, w: 0.5, h: 0.3, fill: { color: t.primary }, rectRadius: 0.08 });
  s.addText(String(pg), { x: 9.15, y: 5.15, w: 0.5, h: 0.3, fontSize: 9, fontFace: 'Arial', color: 'FFFFFF', bold: true, align: 'center', valign: 'middle' });
}

// Top accent line
function topBar(s) {
  s.addShape('rect', { x: 0, y: 0, w: 10, h: 0.04, fill: { color: t.highlight } });
}

// Footer
function footer(s) {
  s.addShape('rect', { x: 0, y: 5.5, w: 10, h: 0.3, fill: { color: t.primary } });
  s.addText('海悟科技 | 机柜级液冷战略洞察 | 五看三定 v9 | 2026-05 | 机密', { x: 0.4, y: 5.53, w: 9, h: 0.24, fontSize: 7, fontFace: 'Microsoft YaHei', color: 'FFFFFF' });
}

// Content title
function title(s, txt) {
  s.addText(txt, { x: 0.5, y: 0.2, w: 9, h: 0.45, fontSize: 20, fontFace: 'Microsoft YaHei', color: t.primary, bold: true });
}

// Subtitle
function subtitle(s, txt) {
  s.addText(txt, { x: 0.5, y: 0.6, w: 9, h: 0.35, fontSize: 12, fontFace: 'Microsoft YaHei', color: t.secondary });
}

// Section divider
function sectionSlide(s, num, main, desc) {
  s.background = { color: t.primary };
  s.addShape('rect', { x: 0, y: 0, w: 10, h: 0.08, fill: { color: t.highlight } });
  s.addText(num, { x: 0.8, y: 1.2, w: 8.4, h: 1.0, fontSize: 52, fontFace: 'Microsoft YaHei', color: t.highlight, bold: true });
  s.addText(main, { x: 0.8, y: 2.3, w: 8.4, h: 0.7, fontSize: 28, fontFace: 'Microsoft YaHei', color: 'FFFFFF' });
  if(desc) s.addText(desc, { x: 0.8, y: 3.1, w: 8.4, h: 0.6, fontSize: 13, fontFace: 'Microsoft YaHei', color: t.accent });
  s.addShape('rect', { x: 0, y: 5.5, w: 10, h: 0.3, fill: { color: t.primary } });
}

// Table with source note + derivation
function dataTable(s, headers, rows, opts) {
  const hdrRow = headers.map((h,i) => ({
    text: h,
    options: {
      bold: true, fontSize: 9, fontFace: 'Microsoft YaHei',
      fill: { color: t.primary }, color: 'FFFFFF',
      align: 'center', valign: 'middle',
      border: { color: 'FFFFFF', pt: 0.5 }
    }
  }));
  const dataRows = rows.map(row => row.map((cell,i) => ({
    text: String(cell),
    options: {
      fontSize: 9, fontFace: i===0?'Microsoft YaHei':'Arial',
      color: i===0?t.primary:'333333',
      align: i===0?'left':'center', valign: 'middle',
      border: { color: t.light, pt: 0.5 },
      bold: i===0
    }
  })));
  
  const defs = { x: 0.5, w: 9, rowH: 0.38, border: { color: t.secondary, pt: 0.8 } };
  const cfg = Object.assign({}, defs, opts);
  if (!opts || opts.y === undefined) cfg.y = 0.85;
  s.addTable([hdrRow, ...dataRows], cfg);
}

// Source → speaker notes (academic citation style)
function source(s, txt) {
  const note = `数据来源：${txt}\n校验状态：Kimi ✅ MiniMax ✅\n时间戳：2026-05-09`;
  s.addNotes(note);
}

// On-slide short source tag
function sourceLabel(s, brief) {
  s.addText('◎ ' + brief, { x: 0.5, y: 5.05, w: 9, h: 0.18, fontSize: 6.5, fontFace: 'Microsoft YaHei', color: t.secondary, italic: true });
}

// Insight box at bottom
function insight(s, txt) {
  s.addShape('roundRect', { x: 0.3, y: 4.55, w: 9.4, h: 0.5, fill: { color: 'FFF8F0' }, rectRadius: 0.06 });
  s.addShape('rect', { x: 0.3, y: 4.55, w: 0.05, h: 0.5, fill: { color: t.highlight } });
  s.addText('💡 ' + txt, { x: 0.6, y: 4.56, w: 8.9, h: 0.48, fontSize: 9, fontFace: 'Microsoft YaHei', color: t.primary, valign: 'middle' });
}

// Key metric card
function metricCard(s, label, value, x, y, w, color) {
  s.addShape('roundRect', { x, y, w, h: 0.7, fill: { color: color||'F5F7FA' }, rectRadius: 0.06, shadow: { type: 'outer', blur: 3, offset: 2, color: 'D0D0D0', opacity: 0.3 } });
  s.addText(label, { x: x+0.1, y: y+0.05, w: w-0.2, h: 0.25, fontSize: 8, fontFace: 'Microsoft YaHei', color: t.secondary });
  s.addText(value, { x: x+0.1, y: y+0.28, w: w-0.2, h: 0.38, fontSize: 16, fontFace: 'Arial', color: t.primary, bold: true });
}

module.exports = { badge, topBar, footer, title, subtitle, sectionSlide, dataTable, source, sourceLabel, insight, metricCard };
