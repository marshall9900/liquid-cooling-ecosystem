const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { toc } = require('./_h');
function createSlide(p) {
  const s = p.addSlide();
  toc(s, t, [
    { num: '一', title: '看宏观', desc: '全球AI算力趋势 / 中国AIDC建设 / 政策与PUE铁拳' },
    { num: '二', title: '看市场', desc: 'OTT需求全景 × GPU生态 × OEM竞争 × IDC运营方' },
    { num: '三', title: '看竞争', desc: '液冷厂商全景扫描 / 产业链图谱 / 竞争格局矩阵' },
    { num: '四', title: '看机会', desc: '机柜级液冷组件深度拆解 / 市场切入窗口评估' },
    { num: '五', title: '三定', desc: '定战略 → 定目标 → 定策略 / 海悟路径规划' },
    { num: '六', title: '附录', desc: '研究方法论 / 核心数据来源 / 术语表' },
  ]);
}
module.exports = { createSlide };
