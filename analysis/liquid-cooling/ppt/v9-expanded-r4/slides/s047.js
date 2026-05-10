const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s); badge(s, '47');
  title(s, '海悟OEM客户矩阵与推进进展');
  dataTable(s,
    ['OEM', '状态', '下一步', '时间', '¥目标(¥M)'],
    [
      ['H3C★', '已接触:Manifold方案提交', '送样测试', '2026H2', '25'],
      ['浪潮★', '已接触:待送样', '送样', '2026H2', '15'],
      ['宁畅★', '已接触:待送样', '送样', '2026Q3', '10'],
      ['联想', '待接触', '初次拜访', '2026Q4', '5'],
      ['华勤', '待接触', '初次拜访', '2026Q4', '5'],
      ['超聚变', '待研究(华为壁垒)', '—', '2028', '—']
    ],
    { colW: [1, 1.6, 1, 0.8, 1] }
  );
  insight(s, '2026 SOM ¥50M = H3C ¥25M + 浪潮 ¥15M + 宁畅 ¥10M 2027→¥250M 2028→¥400M', 3.65);
  source(s, 'sources/液冷客户表.ods 2026SOM=¥50M 2027=¥250M 2028=¥400M');
}

module.exports = { createSlide };
