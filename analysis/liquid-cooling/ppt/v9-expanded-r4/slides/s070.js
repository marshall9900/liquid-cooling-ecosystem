const { sectionSlide } = require('./_h');
function createSlide(p) { const s = p.addSlide();
  sectionSlide(s, "四看", "看机会 + 看自己", "7大组件深度拆解·供需缺口·海悟能力匹配"); }
module.exports = { createSlide };
