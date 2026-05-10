const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  s.addText('目录：华为五看三定框架', { x: 0.5, y: 0.2, w: 9, h: 0.6, fontSize: 24, fontFace: 'Microsoft YaHei', color: t.primary, bold: true });
  const items = [
    ['一看','看宏观','AIDC产业趋势与政策驱动','P3-P6'],
    ['二看★','看市场','OTT×GPU×OEM×IDC 需求侧全景','P7-P27'],
    ['三看','看竞争+产业链','液冷厂商全景 · 外企vs国产 · 供应链','P28-P36'],
    ['四看','看机会/看自己','供需缺口 · 海悟能力匹配','P37-P46'],
    ['三定','定战略/目标/策略','进攻路径与里程碑','P47-P51'],
  ];
  items.forEach(([n,tt,d,pg], i) => {
    const y = 1.0 + i * 0.85;
    s.addShape('roundRect', { x: 0.5, y, w: 9, h: 0.7, fill: { color: i%2===0?'F5F7FA':'FFFFFF' }, rectRadius: 0.06 });
    s.addText(n, { x: 0.7, y: y+0.1, w: 0.8, h: 0.5, fontSize: 18, fontFace: 'Microsoft YaHei', color: t.highlight, bold: true, valign: 'middle' });
    s.addText(tt, { x: 1.6, y: y+0.05, w: 5, h: 0.35, fontSize: 14, fontFace: 'Microsoft YaHei', color: t.primary, bold: true });
    s.addText(d, { x: 1.6, y: y+0.35, w: 5, h: 0.3, fontSize: 9, fontFace: 'Microsoft YaHei', color: t.secondary });
    s.addText(pg, { x: 8.2, y: y+0.1, w: 1, h: 0.5, fontSize: 11, fontFace: 'Arial', color: t.accent, valign: 'middle' });
  });
  s.addNotes('目录页\n五看三定框架由华为引入，海悟适应性改造\n数据来源：本PPT各页备注——原始信源见 sources/ 目录');
  badge(s, '02');
}
module.exports = { createSlide };
