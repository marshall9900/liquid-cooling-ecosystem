const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s); badge(s, '59');
  title(s, 'CoolIT深度：NVIDIA一供不可替代性');
  dataTable(s,
    ['维度', '详情'],
    [
      ['定位', 'NVIDIA NVL72冷板一供 全球液冷冷板#1'],
      ['客户', 'Dell/HPE/SMCI/H3C/联想'],
      ['产能', '加拿大HQ+亚洲OEM(待建) 交期4-6周(最快)但受限于加拿大产能'],
      ['壁垒', 'NVIDIA认证唯一(冷板)3年窗口无人可替代'],
      ['海悟', '2027+国产GPU冷板→非NV体系→可开辟第二赛道']
    ],
    { colW: [2, 7] }
  );
  insight(s, '2027+国产GPU=非NV体系→CoolIT不覆盖=海悟窗口 昇腾/寒武纪冷板=第二赛道', 3.3);
  source(s, 'CoolIT官网 sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-gb300-liquid-cooling-domestic-breakthrough.md');
}

module.exports = { createSlide };
