const { sectionSlide } = require('./_h');
function createSlide(p) {
  const s = p.addSlide();
  sectionSlide(s, "三定", "定战略·定目标·定策略", "进攻路径·里程碑·风险管控");
}
module.exports = { createSlide };
