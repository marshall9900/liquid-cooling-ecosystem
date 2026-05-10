const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, bar, ft, title, bulletList, insightBox } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; bar(s, t);
  title(s, t, '一看小结：液冷不可逆 + 市场空间基调');
  bulletList(s, t, [
    { title: 'GPU功耗翻倍不可逆', text: 'H100 700W → B200 1000W → GB200 1200W → Rubin 1500W+，风冷物理极限600W已全面突破，液冷为唯一解。', color: t.primary },
    { title: 'AI Capex持续暴涨', text: '全球OTT AI Capex 2026E $362B（+23% YoY），中国合计¥650B+，液冷采购$29-36B/年。', color: t.secondary },
    { title: 'PUE政策铁拳收紧', text: '新建DC PUE要求 ≤1.25(2024) → ≤1.20(2028) → ≤1.15(2030)，风冷无力达标，液冷刚性不可逆。', color: t.accent },
    { title: '中国AIDC加速建设', text: '2026E液冷机柜26.5万架（>50%渗透率），2030E 320万+架，TAM ¥39B→¥250B确定性极强。', color: '0077b6' },
    { title: '结论：液冷不是趋势问题，是速度问题', text: '谁能率先完成OEM认证+头部客户PoC+规模量产，谁就能卡住赛道位。窗口期仅1-2年，错过即错失一代理财。', color: 'e76f51' },
  ], 0.65);
  insightBox(s, t, '⭐ 一看核心意义', 'GPU功耗代际跃升 + AI Capex全球井喷 + PUE铁拳三力叠加，液冷从"选配"变为"标配"。中国市场确定性极高：2030E液冷机柜320万+架，TAM ¥250B。海悟需在窗口期内锁定OEM认证与头部客户。', 0.5, 4.55, 9, 0.65);
  ft(s, t); badge(s, '05', t);
}
module.exports = { createSlide };
