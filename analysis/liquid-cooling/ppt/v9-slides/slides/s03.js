const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { toc } = require('./_h');
function createSlide(p) {
  const s = p.addSlide();
  toc(s, t, [
    { num: '一', title: '看宏观', desc: 'GPU功耗翻倍 · AI Capex暴涨 · PUE≤1.15 · 中国AIDC 320万架' },
    { num: '二', title: '看市场', desc: '字节/阿里/腾讯/华为 · 快手/拼多多/百度 · GPU OEM · IDC运营方' },
    { num: '三', title: '看竞争', desc: 'CoolIT / Boyd / 英维克 / 曙光数创 / 高澜 / 海悟定位' },
    { num: '四', title: '看机会', desc: 'CDU · Manifold · 冷板 · 快接头 · 认证路径 · 客户切入' },
    { num: '五', title: '三定', desc: '产品战略 · OEM认证目标 · 市场策略 · 窗口期1-2年' },
    { num: '六', title: '附录', desc: '桌面研究 + 专家深访 + 公开财报 / SEC Filing / 微信情报源' },
  ]);
}
module.exports = { createSlide };
