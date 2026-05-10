# 洞察联动刷新铁律 & 源文件→洞察索引

> 生效日期: 2026-05-10 | 版本: v1.0
> 原则: **源动则析动，析动则联动**

---

## 🔴 铁律⑫：新文件导入 → 所有关联洞察联动刷新

> 任何时候，有新源文件导入（研报/微信文章/RSS/网页快照/SEC），**所有关联的洞察文档都必须联动刷新**，并更新本索引。

### 执行规则

1. **新文件归档** → 提取关键信息 → 判断影响哪些洞察维度
2. **联动刷新** → 更新所有受影响洞察文档（非仅单个）
3. **索引更新** → 在本索引中添加源文件记录 + 标注已刷新的洞察
4. **Git推送** → 所有变更统一提交推送

### 联动范围（新增一个源文件时）

| 源文件类型 | 必须检查的洞察文档（至少） |
|-----------|----------------------|
| 超节点相关 | `supernode/` + `gpu/` + `oem/` + `ott/` + `cooling/` |
| 液冷市场/价值量 | `cooling/` + `docs/` (五看三定) + `docs/` (市场空间) |
| GPU芯片 | `gpu/` + `supernode/` + `oem/` |
| OEM/代工 | `oem/` + `ott/` + `decision/` |
| OTT/云厂商 | `ott/` + `idc/` + `decision/` |
| 竞品/竞争格局 | `cooling/` + `standards/` + `strategy/` |

---

## 📊 源文件 → 洞察映射索引

### 超节点洞察

| 源文件 | 日期 | 已刷新洞察 | 状态 |
|--------|------|----------|------|
| H3_AP202604121821141903_1.pdf (华源证券) | 2026-04-12 | `supernode/2026-05-09-supernode-insight.md` v5→v6 | ✅ |
| H3_AP202604141821177994_1.pdf (东吴证券) | 2026-04-14 | `supernode/2026-05-09-supernode-insight.md` v5→v6 | ✅ |
| H3_AP202604141821191501_1.pdf (国信证券) | 2026-04-14 | `cooling/2026-05-09-cooling-competition-insight.md` v5→v6 | ✅ |
| 超节点行业分析报告_...pdf | 2026-05-09前 | `supernode/2026-05-09-supernode-insight.md` v5 | ✅ |

### 竞争格局洞察

| 源文件 | 日期 | 已刷新洞察 | 状态 |
|--------|------|----------|------|
| H3_AP202604141821191501_1.pdf (国信证券) | 2026-04-14 | `cooling/2026-05-09-cooling-competition-insight.md` v5→v6 | ✅ |

### GPU洞察

| 源文件 | 日期 | 已刷新洞察 | 状态 |
|--------|------|----------|------|
| 海光DCU/深算系列 | 多个源 | `gpu/2026-05-09-gpu-chip-insight.md` | ✅ |
| H3_AP202604141821177994_1.pdf (海光HSL) | 2026-04-14 | `supernode/` 已联动 | ✅ |

### OEM洞察

| 源文件 | 日期 | 已刷新洞察 | 状态 |
|--------|------|----------|------|
| (待补充) | | `oem/2026-05-09-oem-server-insight.md` | |

### OTT洞察

| 源文件 | 日期 | 已刷新洞察 | 状态 |
|--------|------|----------|------|
| (待补充) | | `ott/2026-05-09-ott-cloud-insight.md` | |

### 市场空间/五看三定

| 源文件 | 日期 | 已刷新洞察 | 状态 |
|--------|------|----------|------|
| H3_AP202604141821191501_1.pdf (535亿美元) | 2026-04-14 | `docs/`待刷新全局市场空间 | ⏳ |

---

## 📁 洞察文档全量清单

| 维度 | 文件 | 版本 | 最近更新 |
|------|------|------|---------|
| 超节点 | `supernode/2026-05-09-supernode-insight.md` | v6 | 2026-05-10 |
| 华源超节点 | `supernode/2026-05-10-huayuan-supernode-liquid-cooling-insight.md` | v1 | 2026-05-10 |
| 东吴曙光×海光 | `supernode/2026-05-10-dongwu-sugon-haiguang-supernode-insight.md` | v1 | 2026-05-10 |
| 竞争格局 | `cooling/2026-05-09-cooling-competition-insight.md` | v6 | 2026-05-10 |
| 市场空间 | `cooling/2026-05-10-guosen-liquid-cooling-market-space.md` | v1 | 2026-05-10 |
| GPU | `gpu/2026-05-09-gpu-chip-insight.md` | ? | 2026-05-09 |
| GPU(国内) | `gpu/2026-04-27-domestic-gpu-landscape-analysis.md` | ? | 2026-04-27 |
| GPU(份额) | `gpu/2026-04-27-domestic-gpu-share-validation.md` | ? | 2026-04-27 |
| OEM | `oem/2026-05-09-oem-server-insight.md` | ? | 2026-05-09 |
| OTT | `ott/2026-05-09-ott-cloud-insight.md` | ? | 2026-05-09 |
| OTT(IDC租赁) | `ott/2026-05-04-OTT-IDC-leasing-analysis.md` | ? | 2026-05-04 |
| IDC | `idc/2026-05-09-idc-datacenter-insight.md` | ? | 2026-05-09 |
| 决策链 | `decision/2026-05-09-decision-chain.md` | ? | 2026-05-09 |
| 标准测试 | `standards/2026-05-09-standards-testing.md` | ? | 2026-05-09 |
| 运维市场 | `operations/2026-05-09-operations-market.md` | ? | 2026-05-09 |
| TCO/窗口 | `strategy/2026-05-09-tco-window-risk.md` | ? | 2026-05-09 |
| 四维洞察 | `docs/2026-04-27-four-dimension-liquid-cooling-industry-insight.md` | ? | 2026-04-27 |
| 五看三定 | `docs/2026-05-09-海悟液冷五看三定.md` | ? | 2026-05-09 |
| 市场空间(旧) | `docs/2026-04-28-liquid-cooling-components-market-space.md` | ? | 2026-04-28 |
| 冷板决策链 | `docs/2026-04-28-liquid-cooling-cold-plate-decision-chain-integrated.md` | ? | 2026-04-28 |
| 冷板五看 | `docs/2026-04-28-liquid-cooling-cold-plate-five-view-analysis.md` | ? | 2026-04-28 |
| 竞品深度 | `docs/2026-04-28-liquid-cooling-competitor-deep-analysis.md` | ? | 2026-04-28 |
| 结构审查 | `docs/2026-04-28-liquid-cooling-structural-review.md` | ? | 2026-04-28 |
| 供需数据 | `docs/liquid-cooling-v9-supply-demand-data.md` | ? | 2026-05-09前 |
| 英文研报 | `docs/liquid-cooling-english-research-report.md` | ? | 旧版 |
| 中国市场 | `docs/china-liquid-cooling-market-analysis-2025.md` | ? | 旧版 |
| 完整报告 | `docs/液冷行业深度分析-竞争对手客户五看三定-完整报告.md` | ? | 旧版 |

---

## 🔄 联动刷新检查清单（每次新文件导入后执行）

- [ ] 提取关键信息
- [ ] 判断维度归属（超节点/GPU/OEM/OTT/IDC/冷却/决策/标准/运维/策略）
- [ ] 更新对应维度洞察文档
- [ ] 更新上游/下游关联维度（如超节点→GPU+OEM+OTT+冷却）
- [ ] 更新市场空间/价值量数据（如有新数字）
- [ ] 更新竞争格局数据（如有新参与者/财务/动态）
- [ ] 更新本索引：源文件记录 + 刷新状态
- [ ] Git commit + push

> 📌 铁律⑫ = 源文件层（sources/）变更 → 洞察层（analysis/）联动 → 索引层（本文件）留痕
