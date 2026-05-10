const pptxgen = require('pptxgenjs');
const t = require('./theme');
const { badge, bar, ft, title, bulletList, takeaway } = require('./_h');

function createSlide(p) {
  const s = p.addSlide(); s.background = { color: 'FFFFFF' };
  bar(s, t);
  title(s, t, 'OEM机柜级液冷具体要求');

  bulletList(s, t, [
    { title: 'GPU冷板（NVIDIA）', text: 'NVIDIA认证必须（COOLER-SPEC-002），CoolIT/AVC/nVent三家通过。新进入者需：①热设计仿真→②原型样品→③NVIDIA测试→④认证（12-18月）。国产GPU（昇腾）类似流程但可行度高。海悟→P2', color: t.primary },
    { title: 'CPU冷板（Intel）', text: 'Intel UQD认证为核心门槛。OCP Cold Plate Spec v3.0兼容。应用场景：超节点CPU水冷 + AI推理节点。海悟=CPU冷板P1（Intel UQD 2028H1自研）', color: t.secondary },
    { title: 'CDU（OEM集成）', text: 'OEM不做CDU自主研发（非核心）→ 外购集成。100-150kW CDU需求最大。变频泵+液-液换热优先。国内英维克/维谛主导，性价比竞争。海悟→P1（搭售）', color: t.accent },
    { title: 'Manifold（管路分配）', text: 'OEM不做Manifold自制 → 外购。规格：管径/流量/压降/材质（不锈钢/铜）匹配OEM整柜。无强制认证（比冷板低很多），直接送样。海悟→P0切入点！', color: '0077b6' },
  ], 0.65);

  takeaway(s, t, '🎯 海悟切入层级：Manifold（P0·无认证→直接送样） > 电源冷板（P0·蓝海无人） > CPU冷板（P1·Intel UQD 2028H1） > CDU（P1·搭售） > GPU冷板（P2·NVIDIA Certified）', 3.9);

  ft(s, t);
  badge(s, '22', t);
}
module.exports = { createSlide };
