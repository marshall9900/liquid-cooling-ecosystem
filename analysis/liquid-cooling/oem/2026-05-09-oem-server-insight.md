# OEM服务器洞察(v5) — 机柜BOM×优先级×决策链

> 更新：2026-05-09 | 频率：双周 | 定位：液冷进入市场的渠道

## 一、OEM优先级(v5修正)

| 优先级 | OEM | 定位 | 关键客户 | 海悟切入点 | 开放性 |
|--------|-----|------|---------|-----------|--------|
| 🔴 P0 | **H3C(新华三)** | 🔥白牌OEM | 阿里+字节核心伙伴 | Manifold→冷板 | 较高 |
| 🔴 P0 | **浪潮** | AI服务器国内第一 | 阿里/腾讯/字节/运营商 | Manifold→冷板 | 中 |
| 🟠 P1 | 超聚变 | 华为生态 | 华为系/运营商 | 需华为认证 | 低(华为认证) |
| 🟠 P1 | 宁畅 | 独立品牌 | OTT/IDC | Manifold | 高 |
| 🟠 P1 | 华勤 | ODM | OTT | ODM渠道 | 中 |
| 🟡 P2 | Dell(海外) | 全球第一 | Meta/MSFT/AWS | 远期(双认证) | 低(认证) |
| 🟡 P2 | Supermicro(海外) | 液冷领先 | 中小OTT | 远期 | 中 |

## 二、机柜级液冷BOM (NVL72)

| 组件 | 型号/规格 | 数量 | 单价(USD) | 小计 | 供应商推测 |
|------|---------|------|-----------|------|-----------|
| GPU冷板 | GB200定制 | 72 | 500-800 | 36,000-57,600 | CoolIT/AVC/Auras/英维克 |
| CPU冷板 | Grace定制 | 36 | 150-250 | 5,400-9,000 | Boyd/Wieland |
| 快接头 | 每GPU~10对 | ~720对 | 50-120 | 36,000-86,400 | 🔥Staubli垄断→国产空白 |
| Rack Manifold | 72路大型 | 2-4套 | 3,000-5,000 | 6,000-20,000 | nVent/Parker |
| CDU | 30-40kW×4-5台 | 1柜配4-5台 | 50,000-100,000 | 200,000-500,000 | Vertiv/Motivair/英维克 |
| 管路+传感器 | 成套 | 1 | 20,000-50,000 | 20,000-50,000 | 通用 |
| **合计(USD)** | | | | **$303,400-723,000** | |
| **折合 ¥** | | | | **¥2.2-5.3M/柜** | |

## 三、8GPU服务器BOM（HGX B200级）

| 组件 | 数量 | 单价(USD) | 小计 |
|------|------|-----------|------|
| GPU冷板 | 8 | 300-500 | 2,400-4,000 |
| CPU冷板 | 2 | 100-200 | 200-400 |
| 快接头 | ~20对 | 40-100 | 800-2,000 |
| 柜内Manifold | 1 | 1,000-2,000 | 1,000-2,000 |
| CDU分摊(1/10柜) | 0.1 | 50,000-100,000 | 5,000-10,000 |
| **合计(USD)** | | | **$9,400-18,400** |

## 四、OEM × 超节点代工关系

| OEM | NVIDIA NVL72/36 | 华为Atlas | 阿里PPU | 字节自研 |
|-----|----------------|----------|---------|---------|
| H3C | ❌ | ❌ | ✅主力 | ✅主力 |
| 浪潮 | ✅有配额 | ❌ | ✅ | ✅ |
| 超聚变 | ❌ | ✅唯一 | ❌ | ❌ |
| 华勤 | ✅ODM | ❌ | ✅ODM | ✅ODM |
| Dell | ✅全球 | ❌ | ❌ | ❌ |
| Supermicro | ✅全球 | ❌ | ❌ | ❌ |

> 🔥 H3C: 不供NVIDIA NVL，但供阿里+字节超节点 = 液冷需求同样巨大

## 五、海悟OEM切入路线（国内）

```
Phase 1 (2026): H3C + 浪潮
  └─ Manifold送样→测试→小批量
  └─ 通过H3C项目接触阿里/字节液冷团队
  └─ 目标: ¥50M

Phase 2 (2027): 扩大OEM覆盖
  └─ H3C/浪潮量产 + 宁畅/华勤送样
  └─ 电源冷板+内存冷板送样
  └─ 目标: ¥300M(国内)
```

---

---

## 数据溯源（铁律⑤：每条必须有文件名或URL）

| 数据类别 | 源文件/URL | 日期 | 可信度 |
|---------|-----------|------|--------|
| NVL72 BOM结构与单价 | ⚠️ Morgan Stanley GB300 NVL72 Teardown(付费)，当前为行业交叉验证值 | 2026Q1 | ⭐⭐⭐⭐ |
| CDU BOM $50-100K | https://www.vertiv.com/ + https://www.motivair.com/ + sources/sec/oem/VRT/latest_filings.txt (Vertiv 10-K 2026-02-13) | 2026-02-13 | ⭐⭐⭐⭐⭐ |
| 快接头$50-120/对 | https://www.staubli.com/ + OCP UQD规范 https://www.opencompute.org/ | 持续验证 | ⭐⭐⭐ |
| GPU冷板BOM | sources/wechat/2026-05-07-gb300-liquid-cooling-domestic-breakthrough.md | 2026-05-07 | ⭐⭐⭐ |
| OEM优先级(H3C/浪潮等) | decision/2026-05-09-decision-chain.md + ott/2026-05-09-ott-cloud-insight.md(决策链分析) | 2026-05-09 | ⭐⭐⭐ |
| DELL/SMCI FY2025年报 | sources/sec/oem/DELL/latest_filings.txt + sources/sec/oem/SMCI/latest_filings.txt | 2026-03-16 | ⭐⭐⭐⭐⭐ |
| Supermicro NVL72 Manifold | sources/wechat/2026-05-07-google-liquid-cooling-supply-chain.md | 2026-05-07 | ⭐⭐⭐ |
| GB300液冷国产突破 | sources/wechat/2026-05-07-gb300-liquid-cooling-domestic-breakthrough.md | 2026-05-07 | ⭐⭐⭐ |

> 📌 铁律⑤：SEC 10-K已拉取至sources/sec/oem/，BOM价格注意全球基准(USD) vs 国产化(¥)区分。
