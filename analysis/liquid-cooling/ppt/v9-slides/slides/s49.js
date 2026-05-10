let pptxgen, t, badge, bar, ft, title, dataTable;
pptxgen = require('pptxgenjs'); t = require('./theme'); ({badge, bar, ft, title, dataTable} = require('./_h'));
function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' }; bar(s, t);
  title(s, t, '附录：主流 AI GPU 液冷需求对比');

  dataTable(s, t,
    ['GPU厂商', '芯片型号', '工艺节点', 'TDP', '显存', '互联技术', '液冷要求'],
    [
      ['NVIDIA', 'H100 (Hopper)', '4nm 台积', '700W', '80GB HBM3', 'NVLink 4.0', '冷板推荐'],
      ['NVIDIA', 'H200 (Hopper)', '4nm 台积', '700W', '141GB HBM3e', 'NVLink 4.0', '冷板推荐'],
      ['NVIDIA', 'B200 (Blackwell)', '4nm 台积', '1200W', '192GB HBM3e', 'NVLink 5.0', '冷板必需'],
      ['NVIDIA', 'GB300 (Grace-BW)', '3nm 台积', '1400W', '288GB HBM3e', 'NVLink-C2C', '冷板+液液'],
      ['AMD', 'MI300X', '5nm 台积', '750W', '192GB HBM3', 'Infinity Fabric', '冷板推荐'],
      ['AMD', 'MI355X', '3nm 台积', '1000W', '288GB HBM3e', 'Infinity Fabric', '冷板必需'],
      ['Intel', 'Gaudi 3', '5nm 台积', '600W', '128GB HBM2e', '24×200GbE', '风冷可行'],
      ['昇腾', 'Ascend 910B', '7nm SMIC', '310W', '64GB HBM2e', 'HCCS', '风冷可行'],
      ['昆仑芯', 'R300', '7nm 台积', '150W', '32GB GDDR6', 'PCIe 4.0', '风冷'],
      ['寒武纪', 'MLU590', '7nm', '250W', '48GB HBM2e', 'MLU-Link', '风冷可行'],
    ],
    [0.85, 1.6, 0.85, 0.65, 1.1, 1.25, 1.1],
    0.65
  );

  s.addText('趋势：GPU TDP从300W→1400W每代翻倍，2026年后>1000W GPU仅冷板/浸没可解。国产GPU目前TDP较低，但跟随NVIDIA路线 → 冷板需求确定性增长。', { x: 0.5, y: 4.5, w: 9, h: 0.5, fontSize: 9, fontFace: 'Microsoft YaHei', color: t.accent, bold: true });

  ft(s, t); badge(s, '49', t);
}
module.exports = { createSlide };
