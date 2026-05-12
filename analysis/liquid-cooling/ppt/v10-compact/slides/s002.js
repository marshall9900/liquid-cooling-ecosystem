const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, '目录总览');
  dataTable(s, ['章节', '内容', '页数'], [
    ['一看·看宏观', 'GPU功耗 · AIDC趋势 · PUE政策 · CAPEX全景', '04-08'],
    ['二看·看市场', 'OTT液冷需求 · GPU液冷生态 · OEM · IDC运营方', '09-52'],
    ['三看·看竞争', 'CoolIT · nVent · Vertiv · 英维克 · 思泉 · 高澜 · 曙光', '53-72'],
    ['四看·看自己', '海悟液冷能力评估 · 产品矩阵 · 认证进度 · SWOT', '73-94'],
    ['五看·看机会', 'TAM/SAM/SOM · 价格带 · 渠道路径', '95-100'],
    ['附录', '致谢 · 源文件索引 · 铁律体系', '101-103']
  ], { colW: [1.5, 4.8, 0.7], rowH: 0.4 });
  insight(s, '103页深度洞察 华为五看三定框架 铁律11条 交叉验证 来源索引 推算公式');
  source(s, '海悟科技 战略洞察部 | 铁律⑩⑪ | Kimi ✅ MiniMax ✅ | 364源文件: 研报160篇+SEC 13家+RSS 182篇+微信9篇 | 2026-05-09');
  badge(s, '02');
}
module.exports = { createSlide };
