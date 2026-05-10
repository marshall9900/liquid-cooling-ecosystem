const pptxgen = require('pptxgenjs');

function addPageBadge(slide, pageNum, theme) {
  slide.addShape('oval', { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fill: { color: theme.accent } });
  slide.addText(String(pageNum), { x: 9.3, y: 5.1, w: 0.4, h: 0.4, fontSize: 10, fontFace: 'Arial', color: 'FFFFFF', bold: true, align: 'center', valign: 'middle' });
}

function addTopBar(slide, theme) {
  slide.addShape('rect', { x: 0, y: 0, w: 10, h: 0.06, fill: { color: theme.accent } });
}

function addSectionTitle(slide, title, subtitle, theme) {
  slide.addShape('rect', { x: 0, y: 0, w: 10, h: 0.06, fill: { color: theme.accent } });
  slide.addText(title, { x: 0.5, y: 0.3, w: 9, h: 0.6, fontSize: 22, fontFace: 'Microsoft YaHei', color: theme.primary, bold: true });
  if (subtitle) {
    slide.addText(subtitle, { x: 0.5, y: 0.85, w: 9, h: 0.4, fontSize: 11, fontFace: 'Microsoft YaHei', color: theme.secondary });
  }
}

function addFooter(slide, theme) {
  slide.addText('海悟科技 | 机柜级液冷战略 | 2026-05', { x: 0.5, y: 5.2, w: 5, h: 0.3, fontSize: 7, fontFace: 'Microsoft YaHei', color: theme.secondary });
}

function addTable(slide, headers, rows, x, y, w, rowH, theme) {
  const headerRow = headers.map(h => ({ text: h, options: { bold: true, fontSize: 9, fontFace: 'Microsoft YaHei', color: 'FFFFFF', fill: { color: theme.primary }, align: 'center', valign: 'middle' }}));
  const dataRows = rows.map(row => row.map(cell => ({ text: String(cell), options: { fontSize: 8, fontFace: 'Microsoft YaHei', color: theme.primary, align: 'center', valign: 'middle', border: { color: theme.light, pt: 0.5 } }})));
  slide.addTable([headerRow, ...dataRows], {
    x: x, y: y, w: w,
    rowH: rowH || 0.3,
    colW: headers.map(() => w / headers.length),
    border: { color: theme.secondary, pt: 0.5 },
    autoPage: false
  });
}

module.exports = { addPageBadge, addTopBar, addSectionTitle, addFooter, addTable };
