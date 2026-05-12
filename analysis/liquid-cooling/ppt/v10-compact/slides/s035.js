const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s); badge(s, '48');
  title(s, '液冷组件标准与认证路径全景');
  dataTable(s,
    ['认证', '颁发方', '涉及组件', '周期', '难度', '海悟'],
    [
      ['NVIDIA COOLER-SPEC', 'NVIDIA', 'GPU冷板', '12-18月', '极高', '2028目标'],
      ['Intel UQD', 'Intel', 'CPU冷板', '12-24月', '高', '2026Q2启动'],
      ['OCP Cold Plate v3', 'OCP', '冷板通用', '6-12月', '中', '2026H2'],
      ['阿里液冷认证', '阿里云', '冷板/CDU/Manifold', '~12月', '高', '2027'],
      ['字节液冷(无认证)', '—', '—', '—', '最低', '即入']
    ],
    { colW: [1.5, 1, 1.5, 0.8, 0.7, 1.2] }
  );
  insight(s, 'Intel UQD=最大壁垒(12-24月) → 2026Q2启动 字节=零认证=最低门槛 → 优先突破', 3.3);
  source(s,
    'NVIDIA COOLER-SPEC 01.51.000 → GPU冷板热阻<0.05℃/W/压降<15kPa/100%氦气泄漏测试; ' +
    'Intel UQD → CPU冷板快接头/OCP UQD 2.0标准/干燥断开/盲插验收; ' +
    'OCP Cold Plate v3 → 通用冷板接口/EPDM软管/PG25冷却液标准; ' +
    'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-gb300-liquid-cooling-domestic-breakthrough.md → ' +
    'GB300国产UQD热阻0.042-0.048℃/W优于OCP 0.05℃标准 / 交付周期10-15周(海外20-30周); ' +
    'sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md, sources/wechat/2026-05-07-bytedance-alibaba-idc-procurement-2026.md → 字节21kW+强制液冷无认证最低门槛'
  );
}

module.exports = { createSlide };
