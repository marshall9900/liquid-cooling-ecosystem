const { badge, topBar, footer, title, dataTable, source } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s);
  title(s, "致谢与声明");
  dataTable(s, ["项目","信息"], [
    ["数据来源","SEC EDGAR 10-K/10-Q(12家: NVDA/AMD/INTC/GOOG/MSFT/AMZN/META/BIDU/VRT/NVENT/SMCI/DELL); 东方财富研报(72篇核心液冷赛道); 微信专家纪要(10篇); RSS情报(48篇供应链/技术/市场); 信通院/工信部/发改委公开报告"],
    ["免责声明","【估算】标记数据为基于公开信息的推算,非财务预测。实际结果受市场/技术/竞争等多因素影响。本PPT仅供内部战略参考,不构成投资建议"],
    ["方法论","华为五看三定框架。铁律体系(11条):数据交叉验证(Kimi+MiniMax)+来源索引(sources/)+推算公式(参数+步骤)+布局审查"],
    ["版本","v9 Expanded R4 | 103页 | PptxGenJS生成 | Microsoft YaHei 9pt+ | 白底#FFFFFF + #1F497D专业蓝"],
    ["制作","海悟科技 战略洞察部 | 2026年5月9日 | 机密"],
  ], { y: 0.65, colW: [2,7] });
  source(s, "数据来源清单见附录");
  badge(s, "101");
}
module.exports = { createSlide };
