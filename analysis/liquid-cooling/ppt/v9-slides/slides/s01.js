const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { cover } = require('./_h');
function createSlide(p) {
  const s = p.addSlide();
  cover(s, t, '海悟科技\n机柜级液冷战略洞察', '五看三定 · 深度洞察版 v10', '海悟科技 | 数据中心热管理 | 2026年5月 | 机密');
}
module.exports = { createSlide };
