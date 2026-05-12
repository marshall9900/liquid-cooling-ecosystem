const { sectionSlide } = require('./_h');

function createSlide(p) {
  const s = p.addSlide();
  sectionSlide(s, '三看', '看竞争+产业链', '全球液冷组件供应商全景·竞争差距·供应链');
}

module.exports = { createSlide };
