const t = require('./theme');
const { badge, topBar, footer, title, bulletList, source, insight } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s); badge(s, '43');
  title(s, '二看小结：需求侧核心发现与客户优先级');
  bulletList(s, [
    { title: '一 OTT TOP5', text: '字节 ¥2,600亿(液冷最大客户) > 阿里 ¥1,600亿 > 腾讯 ¥1,300亿 > 快手 ¥700亿 > 百度 ¥900亿。CDU/Manifold = 自主招标 → 海悟P1直接机会', color: t.primary },
    { title: '二 GPU-OEM映射', text: '昇腾180万卡(#1) > 平头哥60万 > 寒武纪50万 = 海光50万。液冷采购 ¥2.5-5.2B。生态开放度: 寒武纪 > 海光 > 平头哥 > 昇腾 — 先攻寒武纪', color: t.primary },
    { title: '三 OEM格局', text: 'H3C(25%) + 浪潮(22%) + 宁畅(12%) = 59% → 均已接触。P0: 三家送样Manifold → 2026 ¥45M合计。华勤/联想/超聚变P1', color: t.primary },
    { title: '四 IDC通道', text: '秦淮(字节) / 数据港(阿里) / 万国(多元) → CDU/Manifold自主决策。海悟IDC基因 = 天然优势 → 2026送样IDC', color: t.primary },
    { title: '五 总排序', text: 'P0: 浪潮/H3C/宁畅Manifold送样 → 字节/寒武纪双线 → P0: 电源冷板研发 → P1: Intel UQD/阿里认证 → P2: 海外', color: t.primary }
  ]);
  insight(s, '需求侧铁律: OTT¥49-65B GPU¥2.5-5.2B OEM三家→Manifold P0 2026送样突破', 4.58);
  source(s, 'P9-P42全部源文件汇总 sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md9篇 + sources/sec/oem/VRT/submissions_2026-05-09.json13家 + sources/reports/industry_液冷/05_液冷市场_行业综述/[2025-08-17] 国信证券 - 通信行业周报2025年第33周：液冷呈现高景气度，运营商2025上半年业绩稳健增长.pdf666篇');
}

module.exports = { createSlide };
