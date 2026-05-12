const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s); badge(s, '53');
  title(s, 'CoolIT/AVC：NVIDIA认证一供');
  dataTable(s,
    ['维度', 'CoolIT Systems', 'AVC(奇鋐科技)'],
    [
      ['客户', 'Dell/HPE/SMCI/H3C', 'Dell/HPE/联想/字节'],
      ['液冷营收', '$800M+(估)', '$500M+(估)'],
      ['NVIDIA认证', 'Cooler NVL72(一供)', 'Cooler+Fan模组'],
      ['国产替代', '2027+国产GPU窗口', '2027-2030替代窗口']
    ],
    { colW: [2, 3.5, 3.5] }
  );
  insight(s, 'CoolIT+AVC=双寡头占NV冷板90%+ 2027+国产GPU(昇腾/寒武纪)崛起=海悟窗口', 2.85);
  source(s, 'CoolIT官网→NVL72冷板一供 | sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-gb300-liquid-cooling-domestic-breakthrough.md → 国产冷板热阻0.042-0.048°C/W | NVIDIA COOLER-SPEC-002 | SEC:AVC(3017.TW)');
}

module.exports = { createSlide };
