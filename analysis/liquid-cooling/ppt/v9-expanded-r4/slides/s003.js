const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, '方法论与铁律体系');
  dataTable(s, ['维度', '说明'], [
    ['框架', '华为五看三定: 看宏观→看市场→看竞争→看自己→看机会→定战略→定目标→定路径'],
    ['铁律①', '数据二次验证 Kimi+MiniMax 双模型交叉校验'],
    ['铁律②', '来源标注 sources/具体文件名 可追溯定位'],
    ['铁律③', '白底R4设计 #1F497D专业蓝 YaHei≥9pt'],
    ['铁律④', '每页一结论 💡洞察框 驱动行动'],
    ['铁律⑤-⑦', '数据口径统一 · 推算透明化 · 假设显性化'],
    ['铁律⑧-⑪', 'Kimi+MiniMax复核 · 布局审查 · 来源索引 · 推算公式']
  ], { colW: [1.5, 7.5], rowH: 0.35 });
  insight(s, '11条铁律贯穿全PPT 确保数据可信、推算透明、决策有据');
  source(s, '华为五看三定方法论(华为大学); 铁律体系完整清单; Kimi ✅ MiniMax ✅; 源索引: source_index.json (364源文件 自动生成于2026-05-09)');
  badge(s, '03');
}
module.exports = { createSlide };
