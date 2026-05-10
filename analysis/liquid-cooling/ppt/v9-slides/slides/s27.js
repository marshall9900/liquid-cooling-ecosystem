let pptxgen, t;
pptxgen = require('pptxgenjs'); t = require('./theme');
const { badge, bar, ft, title, hdrCell, dataCell, dataTable } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  bar(s, t);
  title(s, t, '冷板竞争：一供/二供格局');

  dataTable(s, t,
    ['厂商', '国家', 'NVIDIA认证', 'GPU冷板ASP(USD)', 'CPU冷板ASP(USD)', '份额(估)', '主要OEM客户'],
    [
      ['CoolIT', '加拿大', '✅ Certified', '$300-350', '$120-150', '~35%', 'H3C/浪潮/Dell/SMCI'],
      ['AVC(奇鋐)', '台湾', '✅ Certified', '$250-300', '$100-130', '~30%', 'H3C/浪潮/联想'],
      ['nVent(Schroff)', '英国', '✅ CFD Certified', '$450-500', '$180-220', '~10%', '—'],
      ['英维克', '中国', '❌ 在研', '¥1200-1800', '¥600-800', '~10%', '浪潮/曙光(国产GPU)'],
      ['高澜股份', '中国', '❌ 在研', '¥800-1200', '¥400-600', '~8%', '—'],
      ['Boyd(宝德)', '美国', '✅', '$350-400', '$150-180', '~5%', '—'],
      ['双鸿/超众', '台湾', '—', '$200-280', '$100-130', '~2%', '—']
    ],
    [1.1, 0.6, 0.9, 1.2, 1.2, 0.7, 1.4],
    0.65
  );

  ft(s, t);
  badge(s, '27', t);
}

module.exports = { createSlide };
