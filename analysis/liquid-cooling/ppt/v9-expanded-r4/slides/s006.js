const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');

function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, 'PUE政策演变与液冷刚性');
  dataTable(s, ['时间', '政策/文件', 'PUE要求', '影响'], [
    ['2021', '新型DC三年行动计划', '≤1.3', '鼓励能效优化'],
    ['2023', '绿色DC政府采购标准', '≤1.4/≤1.3', '半强制阶段'],
    ['2024', 'DC绿色低碳专项行动', '≤1.25', '液冷首选'],
    ['2025', '工信部最新指示', '液冷渗透≥60%(2026底)', '量化强制'],
    ['2026', '东数西算2.0', '≤1.15', '风冷物理不可行'],
    ['2027+', '事实强制', '≤1.15', '液冷唯一路径']
  ], { colW: [0.8, 2.5, 1.2, 1.2], y: 0.75 });
  insight(s, 'PUE从1.4→1.15：风冷理论下限~1.2，液冷唯一技术路径');
  source(s, '工信部 通信[2021]76号 → 新型DC三年行动计划(PUE≤1.3); 财政部 绿色DC采购标准(2023) → PUE≤1.4/≤1.3; 工信部 绿色低碳专项行动计划(2024) → PUE≤1.25; 发改委 东数西算2.0 → PUE≤1.15; sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-06-global-liquid-cooling-market-173b-usd.md → AI推理机柜85-130kW 风冷彻底不可行; 推算:风冷PUE理论下限≈1.2(压缩机COP3-4+风机0.1+管路0.05)→PUE≤1.15=液冷+自然冷却');
  badge(s, '06');
}
module.exports = { createSlide };
