const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, bar, ft, title, dataTable, insightBox } = require('./_h');

function createSlide(p) {
  const s = p.addSlide();
  s.background = { color: 'FFFFFF' };
  bar(s, t);
  title(s, t, '冷板供应格局：GPU/CPU/电源/内存冷板供应商盘点');

  dataTable(s, t,
    ['冷板类型', '一级供应商', '国产供应商', '2026E产能(万片)', 'TDP覆盖(W)', '海悟定位'],
    [
      ['GPU冷板', 'CoolIT,AVC,nVent', '英维克,高澜', '200-280', '700-1200', 'P2(认证后)'],
      ['CPU冷板', 'CoolIT,AVC', '英维克,高澜,申菱', '300-500', '300-500', 'P1(Intel UQD)'],
      ['电源冷板', '无(空白)', '无(空白)', '~0', '800V/10kW+', 'P0(蓝海首发)'],
      ['内存冷板', 'nVent,Boyd', '极少量', '<50', '50-100', 'P0(Gen6差异化)'],
    ],
    [1.2, 1.6, 1.6, 1.4, 1.4, 1.5],
    0.65
  );

  insightBox(s, t, '📊 供应格局要点',
    'GPU冷板：CoolIT+AVC+nVent三强垄断NVIDIA认证，国产替代窗口在非NVIDIA认证领域(昇腾/寒武纪)\nCPU冷板：Intel UQD认证门槛高，国内仅英维克/高澜在研，2028H1海悟认证目标\n电源冷板：全球供应空白——海悟最大蓝海机会，先发优势6-12月',
    0.5, 4.05, 9, 1.05);

  ft(s, t);
  badge(s, '37', t);
}
module.exports = { createSlide };
