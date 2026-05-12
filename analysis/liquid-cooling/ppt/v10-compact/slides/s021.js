const pptxgen = require('pptxgenjs');
const { sectionSlide } = require('./_h');
function createSlide(p) { const s = p.addSlide();
  sectionSlide(s, '二看', '看市场：OEM服务器厂商', '超节点OEM格局·液冷采购规模·海悟准入路径');
}
module.exports = { createSlide };
