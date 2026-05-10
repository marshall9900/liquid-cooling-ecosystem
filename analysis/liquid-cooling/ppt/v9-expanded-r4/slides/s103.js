const { cover } = require('./_h');
function createSlide(p) {
  const s = p.addSlide();
  cover(s, "谢谢", "Thank You", "海悟科技 | 机柜级液冷战略洞察 | 五看三定 | 2026-05 | 机密");
}
module.exports = { createSlide };
