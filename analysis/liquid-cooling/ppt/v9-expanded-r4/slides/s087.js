const { badge, topBar, footer, title, dataTable, source } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s);
  title(s, "战略定位深度：海悟在产业链中的角色");
  dataTable(s, ["维度","海悟定位","说明"], [
    ["行业角色","专业热管理零部件供应商","非OEM(不做服务器)非集成(不做DC) 专注组件"],
    ["价值主张","低成本高可靠国产液冷组件","价格-15% vs CoolIT/英维克 品质对标国际"],
    ["目标客户","国内外AI服务器OEM+DC运营方","H3C/浪潮/宁畅/华勤 -> 秦淮/万国/数据港"],
    ["竞争策略","Manifold+电源冷板双轮差异化","避开正面对抗CoolIT/英维克冷板 攻空白+低壁垒"],
    ["收入结构","2026:100%Manifold->2030:25%Manifold+25%电源+25%CPU+15%接头+10%CDU","—"],
  ], { y: 0.65, colW: [1.5,3,3.5] });
  source(s, "竞争定位对标: sources/sec/oem/VRT/submissions_2026-05-09.json, sources/sec/oem/VRT/VRT-10-K_2026-02-13.md026-02-13.md → Vertiv全栈方案(电源+热管理+IT基础设施) | 国信证券 2026-04-14 → 服务器液冷供应商国产替代新机遇 | 海悟战略规划 → 专业组件供应商差异化定位:不做服务器/不做DC 专注组件供应 | 三大催化赛道:光通信+液冷+国产AI算力 | 2026-2027黄金窗口 | 刷新2026-05-30 | 📐铁律⑩");
  badge(s, "87");
}
module.exports = { createSlide };
