const t = require('./theme');
const { badge, topBar, footer, title, bulletList, source, insight } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s); badge(s, '45');
  title(s, 'IDC液冷采购经济模型：TCO对比');
  bulletList(s, [
    { title: '【1】风冷TCO', text: '单柜¥200K-300K/年(电费+运维+扩容)。PUE 1.4。单柜运营成本¥120K(电费¥100K+维保¥20K)', color: t.primary },
    { title: '【2】液冷TCO', text: '单柜¥150K-220K/年。PUE 1.12。电费¥80K+液冷维保¥30K+折旧¥40K。年省¥50K-80K/柜', color: t.primary },
    { title: '【3】盈亏平衡', text: '液冷增量投资¥200K/柜(冷板+CDU+Manifold) ÷ 年省¥60K = 3.3年回本', color: t.primary },
    { title: '【4】规模效应', text: '1万柜:年省¥600M; 10万柜:年省¥6B。电力成本=DC运营最大成本 液冷直接减30%', color: t.primary },
    { title: '【5】结论', text: 'TCO优势不可逆+PUE政策刚性=液冷经济确定性。冷板组件ASP溢价空间=省电的20-30%', color: t.primary }
  ]);
  insight(s, '液冷省电=2×(1.4-1.12)×30kW×¥0.5/kWh×8760h=¥37K/柜/年 3.3年回本 经济逻辑不可逆', 4.58);
  source(s, '信通院DC成本模型 sources/reports/industry_液冷/05_液冷市场_行业综述/[2025-08-17] 国信证券 - 通信行业周报2025年第33周：液冷呈现高景气度，运营商2025上半年业绩稳健增长.pdf 液冷省电=2×(PUE风冷-PUE液冷)×IT功率×电价×8760h');
}

module.exports = { createSlide };
