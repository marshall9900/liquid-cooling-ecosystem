const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, topBar, footer, title, source, insight, bulletList } = require('./_h');

function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, '一看小结：液冷市场空间基调确认');
  bulletList(s, [
    { title: 'GPU功耗不可逆', text: 'H100 700W→Rubin 2000W+仅3年。风冷极限600W被突破。液冷刚需已锁定。', color: t.primary },
    { title: 'AI CAPEX暴涨', text: '全球OTT $5,000亿+(2026E)+中国¥6,500亿+。每$1亿CAPEX≈$28万液冷BOM。', color: t.primary },
    { title: 'PUE政策铁拳', text: '新建DC PUE≤1.15(2026)。风冷无法达标。液冷=合规唯一路径。', color: t.primary },
    { title: '中国AIDC加速', text: '液冷机柜占比15%→70%+(2024-2030)。TAM ¥39B→¥250B。', color: t.primary },
    { title: '结论', text: '液冷不是趋势问题 是执行速度问题。窗口期1-2年。率先通过OEM认证+头部客户PoC者胜出。', color: t.highlight }
  ], 0.7);
  insight(s, '全球服务器液冷 TAM $12.6B(2026E)→$53.5B(2030E) CAGR 43.6% (国信证券2026-04-14)');
  source(s, 's004-s006全部源文件汇总; sources/reports/supernode/H3_AP202604141821191501_1.pdf 国信证券→2026E $12.6B/2030E $53.5B CAGR 43.6%; sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md → 全球九大CSP $8,300亿(2026E) 同比+79%');
  badge(s, '07');
}
module.exports = { createSlide };
