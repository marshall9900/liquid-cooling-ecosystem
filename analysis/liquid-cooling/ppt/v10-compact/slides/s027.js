const pptxgen = require('pptxgenjs');
const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, '国内CSP运营商-液冷部署');
  dataTable(s, ['CSP','AIDC机柜(万架)','液冷','方案','采购','海悟'],
    [['移动云','3-4','>40%','冷板','招标CDU/Manifold','P1'],
     ['天翼云','2-3','>45%','冷板','招标(国资)','P1'],
     ['联通云','1-2','>40%','冷板','招标','P2'],
     ['华为云','2-3','>30%','冷板','华为闭环','P2']],
    { colW: [1.2,1,1,1,1.8,1.5] });
  source(s, '三大运营商2025年报; 信通院DC报告(2026); sources/rss/2026-05-07/180228_RSS_MicrosoftCommittedToDoublingAIInfrastructureInTwoYears.md CSP CDU/Manifold自主采购');
  insight(s, '⚠️口径：AIDC机柜=智算中心专用机柜，非全量DC。四家CSP合计~10万架≈P5 AIDC~26万架的38%，其余为OTT自建+区域智算中心。CSP CDU/Manifold自主采购 移动云/天翼云最大→P1国资通道优先');
  badge(s, '39');
}
module.exports = { createSlide };
