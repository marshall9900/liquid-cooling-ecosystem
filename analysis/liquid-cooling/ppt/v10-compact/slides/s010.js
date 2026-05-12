const h = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; h.topBar(s); h.footer(s);
  h.title(s, '字节跳动 | GPU投入¥2,600亿 液冷最大单体客户 P0');
  h.dataTable(s, ['维度','数据'], [['GPU投入(2026E)','直采¥2,300亿+租赁¥300亿 | 超节点~150kW'],['现有GPU','昇腾25万+寒武纪+自研 合计~200万卡'],['自研芯片','三星6nm流片 2026E 20-30万张 ¥170-180亿'],['DC集群','张家口/芜湖/贵安/中卫 海外:马来西亚柔佛']], { y: 0.65, rowH: 0.25, colW: [2.2,6.8] });
  h.dataTable(s, ['液冷维度','详情'], [['液冷方案','自研液冷方案(2025建队)→冷板优先→浸没跟踪 | 零既有供应商=最大窗口'],['OEM合作','浪潮信息(百亿级液冷大单)+宁畅信息'],['海悟窗口','字节自研芯片冷板→全新市场零竞争→通过浪潮/宁畅进入']], { y: 2.08, rowH: 0.25, colW: [1.8,7.2] });
  h.bulletList(s, [{ title: '① 直接路径', text: 'Manifold送样→浪潮(核心OEM)→字节 渠道最短验证最快 | 采购¥18-22B', color: '1F497D' },{ title: '② 竞争态势', text: '英维克/CoolIT已进浪潮供链→海悟差异化:电源冷板(它们没做)+性价比', color: '1F497D' }], 3.24);
  h.insight(s, 'P0(最高)→Manifold+电源冷板同步送样→2027批量¥100M目标 | SAM: ¥30-60M | 窗口: 6-12月', Math.min(4.300000000000001, 4.4));
  h.source(s, 's012+s013+s014合并: 字节GPU直采¥2,300亿 零既有供应商=海悟最大机遇 单柜液冷BOM ¥60-75万×~3,000柜');
}
module.exports = { createSlide };