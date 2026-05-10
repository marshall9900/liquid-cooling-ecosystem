# 情报获取模块

> 液冷生态链全类型情报采集 — 所有源文件统一存入 sources/

## 调度时间线（每周六）

| 时间 | 子模块 | 来源 | → 存放路径 |
|------|--------|------|-----------|
| 01:00 | RSS实时情报 | RSSHub + FlareSolverr | `rss/YYYY-MM-DD/` |
| 02:00 | 行业研报 | manymore13 report.db | `reports/industry_液冷/` |
| 03:00 | 个股研报(26家) | Eastmoney API | `reports/company/{角色}/{公司}/{代码}/` |
| 04:00 | SEC财报(15家) | SEC EDGAR | `sec/{角色}/{公司}/` |
| 手动 | ChangeDetection | Web UI | `web-snapshots/` |
| 手动 | 微信文章 | 链接分享 | `wechat/` |

## 覆盖矩阵

### A股个股研报 (26家)
| 角色 | 公司 | 篇数 |
|------|------|------|
| GPU | 海光信息/寒武纪/龙芯中科 | 139 |
| OEM | 工业富联/浪潮/曙光/紫光/中兴/华勤/神州数码 | 207 |
| IDC | 移动/电信/光环/奥飞/数据港/宝信/网宿 | 46 |
| 液冷 | 英维克/高澜/申菱/同飞/依米康/三花/汇川/锐捷/冰山 | 114 |

### SEC国外财报 (15家)
| 角色 | 公司 |
|------|------|
| GPU | NVIDIA/AMD/Intel |
| OEM | Vertiv/Dell/HPE/Supermicro/nVent/Asetek |
| OTT | Alphabet/Microsoft/Amazon/Meta/Baidu/JD |

### 行业研报 (160篇, 8子类)
数据中心液冷/GPU散热/液冷组件/AI基建/市场综述/超充储能/冷却液

## 源文件规则
- 所有文件以原始格式保存，不加工
- 文件名含日期+来源+标题
- 增量下载，info_code/CIK去重
