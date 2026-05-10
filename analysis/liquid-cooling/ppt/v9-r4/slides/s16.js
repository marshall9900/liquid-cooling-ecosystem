const pptxgen = require('pptxgenjs'); const t = require('./theme'); const { badge, topBar, footer, title, dataTable, source, insight } = require('./_h');
function createSlide(pr) {
  const s = pr.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s); footer(s);
  title(s, "海光DCU：深算2号→3号，信创赛道");
  dataTable(s, ["芯片","TDP","HBM","出货(2026E)","OEM","海悟机会"], [["2号","300W","32GB","~20万","中科曙光/浪潮","Manifold先行"],["3号","~500W","64GB(估)","~30万","中科曙光/浪潮","冷板推荐→蓝海"]], { colW: [1,1,1.2,1.1,1.5,1.8] });
  source(s, "数据来源：\\n• sources/GPU对比表格-精确修正.csv → 深算2号参数(已核实)\\n• sources/wechat/2026-05-07-haiguang-dcu-deep-compute-series.md → 海光DCU深度计算系列\\n• 海光信息2025年报 → 公告信息\\n• sources/eastmoney/ (666篇研报归档) → 东方财富研报 海光DCU\\n• 【估算】基于公开数据推算，标记为估算: 3号TDP/出货量为估算; 信创DCU→国产液冷优先(政策)");
  insight(s, "信创DCU→国产液冷优先(政策)，中科曙光相对开放，Manifold/CDU机会");
  badge(s, "16");
}
module.exports = { createSlide };
