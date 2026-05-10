let pptxgen, t;
pptxgen = require('pptxgenjs'); t = require('./theme');
const { badge, bar, ft, title, hdrCell, dataCell, dataTable, takeaway } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  bar(s, t);
  title(s, t, '冷板竞争详细分析');

  dataTable(s, t,
    ['厂商', '国家', 'NVIDIA认证', 'GPU冷板ASP', 'CPU冷板ASP', '份额', '竞争定位'],
    [
      ['CoolIT', '加拿大', '✅ 认证龙头', '$300-350', '$120-150', '~35%', '一供(H3C/浪潮/Dell/SMCI)'],
      ['AVC(奇鋐)', '台湾', '✅ Certified', '$250-300', '$100-130', '~30%', '一供(H3C/浪潮/联想)'],
      ['nVent(Schroff)', '英国', '✅ CFD Certified', '$450-500', '$180-220', '~10%', '高端二供'],
      ['英维克', '中国', '❌ 在研', '¥1200-1800', '¥600-800', '~10%', '国产GPU一供'],
      ['高澜股份', '中国', '❌ 在研', '¥800-1200', '¥400-600', '~8%', '国产GPU二供'],
      ['Boyd(宝德)', '美国', '✅', '$350-400', '$150-180', '~5%', '二供'],
      ['双鸿/超众', '台湾', '—', '$200-280', '$100-130', '~2%', '代工补充']
    ],
    [1.1, 0.6, 1.0, 1.1, 1.1, 0.6, 1.7],
    0.65
  );

  takeaway(s, t,
    '一供(CoolIT/AVC)锁定NVIDIA认证 + H3C/浪潮主力 → 壁垒极高(12-18月认证周期)。国产替代窗口：国产GPU(寒武纪/海光)液冷认证赛道 → 新玩家机会。海悟策略：不正面攻GPU冷板 → P1并行Intel UQD(CPU冷板) → P0电源冷板(蓝海) → P2跟进NVIDIA认证。',
    3.45
  );

  ft(s, t);
  badge(s, '30', t);
}

module.exports = { createSlide };
