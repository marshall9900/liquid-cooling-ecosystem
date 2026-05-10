const { badge, topBar, footer, title, dataTable, source } = require('./_h');
function createSlide(p) { const s = p.addSlide(); s.background = { color: 'FFFFFF' }; topBar(s);
  title(s, "三看小结：竞争窗口与海悟差异化");
  dataTable(s, ["维度","竞争态势","海悟差异化","窗口","倒计时"], [
    ["GPU冷板","CoolIT/AVC双寡头","国产GPU新冷板","2027-2028","~18月"],
    ["CPU冷板","Intel UQD+规模","Intel认证(2028)","2028-2030","~24月"],
    ["Manifold","无龙头→分散","送样P0→批量","2026","0-6月！"],
    ["电源冷板★","100%外资空白","先发专利+绑OEM","2026Q3","6-12月！"],
    ["快接头","Staubli 72%","搭售+国产","2027-2028","~18月"]
  ], { colW: [1.2,1.6,1.5,0.8,0.8] });
  source(s, "P51-P65全部源文件汇总 | P0:Manifold(6月)+电源冷板(12月)=双轮驱动 | 📐铁律⑩索引");
  footer(s); badge(s, "66"); }
module.exports = { createSlide };
