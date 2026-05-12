const h = require('./_h');
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; h.topBar(s); h.footer(s);
  h.title(s, 'CoolIT深度 | NVIDIA一供地位 + 替代可能性分析');
  h.dataTable(s, ['维度','数据'], [['定位','NVIDIA认证一供(冷板) 全球液冷标杆'],['冷板出货','2025 ~50万片→2026E ~80万片'],['认证壁垒','NVIDIA DGX认证(2年周期) 不可替代性高']], { y: 0.65, rowH: 0.25, colW: [2,7] });
  h.dataTable(s, ['替代维度','可行性','海悟策略'], [['NVIDIA冷板','低(认证2年+深度绑定)','不正面竞争→等机会'],['CDU/Manifold','高(CoolIT非强项)','P0:差异化CDU+Manifold'],['国产GPU冷板','中高(无认证壁垒)','P0:寒武纪/昇腾冷板']], { y: 1.81, rowH: 0.25, colW: [1.5,2.5,3.5] });
  h.insight(s, 'CoolIT冷板不可替代(NVIDIA认证) 海悟不正面竞争→CDU/Manifold+国产GPU冷板=蓝海 国产GPU冷板无认证壁垒=最大窗口', Math.min(2.97, 4.4));
  h.source(s, 's059+s060合并: CoolIT公开信息+NVIDIA认证体系 国产GPU冷板认证门槛远低于NVIDIA');
}
module.exports = { createSlide };