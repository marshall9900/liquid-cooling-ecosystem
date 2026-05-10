const { badge, topBar, footer, title, source } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s);
  title(s, "附录：关键源文件清单 (v6 2026-05-10更新)");
  const items = [
    { label: "🔥新增研报 (3篇 2026-05-10)", text: "华源证券→国产超节点液冷新增量(2026-04-12) | 东吴证券→曙光海光超节点HSL(2026-04-14) | 国信证券→服务器液冷专题535亿美元(2026-04-14) → sources/reports/supernode/" },
    { label: "SEC EDGAR (12家)", text: "GPU: NVDA/AMD/INTC | OTT: GOOG/MSFT/AMZN/META/BIDU | OEM: VRT(10-K/Q)/NVENT(10-K)/SMCI(10-K)/DELL(10-K)" },
    { label: "核心研报 (593+篇)", text: "国信/开源/天风/民生/东吴/国金/华鑫/中邮/国海/头豹等 → sources/reports/industry_液冷/ + sources/reports/company/" },
    { label: "RSS情报 (48篇)", text: "供应链风险 | 芯片短缺 | 内存涨价 | OTT资本开支 | 数据中心趋势 → sources/rss/" },
    { label: "竞品关键文件", text: "Vertiv 10-K FY2025营收$20.1B | nVent 10-K Thermal $3.2B | SMCI 10-K GPU服务器$23.5B | DELL 10-K ISG $11.3B" },
    { label: "数据文件", text: "GPU对比表格-精确修正.csv | 液冷客户表_GPU/OEM/OTT.csv | INDEX.md(源文件→洞察映射)" },
    { label: "政策与标准", text: "信通院/工信部/发改委 | OCP液冷标准 | NVIDIA/Intel认证 | 铁律⑫联动刷新" },
  ];
  items.forEach((it, i) => {
    const y = 0.5 + i * 0.7;
    s.addShape("rect", { x: 0.3, y, w: 0.04, h: 0.55, fill: { color: '1F497D' } });
    s.addText(it.label, { x: 0.6, y: y + 0.02, w: 9, h: 0.20, fontSize: 10, fontFace: "Microsoft YaHei", color: '1F497D', bold: true });
    s.addText(it.text, { x: 0.6, y: y + 0.22, w: 9, h: 0.33, fontSize: 7.5, fontFace: "Microsoft YaHei", color: '555555' });
  });
  source(s, "源文件绝对路径: /root/data/disk/liquid-cooling-ecosystem/sources/ | 所有SEC文件为EDGAR自动拉取(2026-05-09) | 研报为东方财富批量下载(2026-05-07) | RSS为多源自动采集(2026-05-07/09)");
  badge(s, "102");
}
module.exports = { createSlide };
