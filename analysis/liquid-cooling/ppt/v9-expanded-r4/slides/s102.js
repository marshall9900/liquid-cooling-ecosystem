const { badge, topBar, footer, title, source } = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  topBar(s); footer(s);
  title(s, "附录：关键源文件清单");
  const items = [
    { label: "SEC EDGAR (12家)", text: "GPU: NVDA/AMD/INTC | OTT: GOOG/MSFT/AMZN/META/BIDU | OEM: VRT(10-K/Q)/NVENT(10-K)/SMCI(10-K)/DELL(10-K) → sources/sec/oem/VRT/submissions_2026-05-09.json" },
    { label: "微信纪要 (10篇)", text: "ali-ppu-chip | super-node | ott-capex-830b | haiguang-dcu | byte-ali-idc | google-liquid-cooling | gb300-domestic | liq-mkt-173b | data-compare | supernode-2 → sources/wechat/2026-05-07-ott-csp-gpu-capex-830b-usd.md" },
    { label: "核心研报 (72篇)", text: "国信/开源/天风/民生/东吴/国金/华鑫/中邮/国海/头豹/山西/信达/中原等 → sources/reports/industry_液冷/01_数据中心液冷_核心/[2024-11-20] 开源证券 - 通信行业点评报告：维谛预测AI单机柜功耗有望超1MW，液冷或将成为必选项.pdf" },
    { label: "RSS情报 (48篇)", text: "供应链风险(Arista/Gartner) | 芯片短缺(Intel CPU) | 内存涨价 | OTT资本开支 | 数据中心趋势 | GPU/CPU竞争 → sources/rss/2026-05-07/180228_RSS_AIWillSoonDriveAThirdOfTSMCsBusiness_meta.json" },
    { label: "竞品关键文件", text: "Vertiv 10-K 2026-02-13 → FY2025营收$20.1B液冷+60% | nVent 10-K → Thermal Mgmt营收$3.2B | SMCI 10-K → GPU服务器$23.5B | DELL 10-K → ISG营收$11.3B" },
    { label: "数据文件 (2份)", text: "GPU对比表格-精确修正.csv(20 GPU spec) | 液冷客户表.ods(IDC/OEM客户清单) → sources/" },
    { label: "政策与标准", text: "信通院/工信部/发改委数据中心政策 | OCP液冷标准 | NVIDIA/Intel认证规范 | 各公司官网/年报" },
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
