const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, bar, ft, title, dataTable, takeaway } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  bar(s, t);
  title(s, t, 'GPU对比矩阵：昆仑芯 / 沐曦 / 其他');

  dataTable(s, t,
    ['GPU', 'TDP', '出货(万卡)', '对应OEM', '液冷需求', '海悟机会'],
    [
      ['昆仑芯R300', '~350W', '20', '百度DC(自用)', '风冷+冷板', 'P2(需百度认证)'],
      ['沐曦MXC500', '~300W', '10', '联想/浪潮', '风冷', 'P3(出货小)'],
      ['景嘉微JM9', '~200W', '5', '—', '风冷', 'P3(非AI)'],
      ['摩尔线程MT S4000', '~250W', '5', '—', '风冷', 'P3(非AI)'],
      ['璧仞BR100', '~400W', '5(受限)', '—', '冷板', 'P3(制裁受限)'],
    ],
    [1.6, 0.9, 1.0, 1.6, 1.2, 2.7],
    0.6
  );

  takeaway(s, t, '💡 核心判断：聚焦昇腾+寒武纪+海光（主力国产GPU）→ P1优先  |  昆仑芯P2：百度生态闭环，需百度认证，2028后跟踪  |  沐曦/景嘉微/摩尔/璧仞P3：出货小或制裁受限，暂不投入资源', 4.55);

  ft(s, t);
  badge(s, '18', t);
}
module.exports = { createSlide };
