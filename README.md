# 液冷生态链情报体系

> Liquid Cooling Ecosystem Intelligence — 统一源文件管理
> 最后更新: 2026-05-09

## 目录结构

```
liquid-cooling-ecosystem/
├── sources/                       # 所有源文件(只存不改, 原样保留)
│   ├── rss/                       # RSS实时情报 (按日期)
│   │   └── YYYY-MM-DD/            # 36kr/财新/财联社/金色财经 + DCD等页面快照
│   ├── reports/                   # 研报PDF
│   │   ├── industry_液冷/         # 行业研报 160篇 (8子目录)
│   │   └── company/               # 个股研报 433篇 (22家,按生态位)
│   │       ├── gpu/               # 海光信息/寒武纪/龙芯中科
│   │       ├── oem/               # 工业富联/浪潮/中科曙光/紫光/中兴/华勤/神州数码
│   │       ├── cloud/             # 中国移动/电信/光环新网/奥飞/数据港/网宿/宝信
│   │       └── cooling/           # 英维克/高澜股份/申菱环境/同飞股份/依米康
│   ├── sec/                       # SEC原始文件
│   │   ├── gpu/                   # NVIDIA/AMD/Intel (10-K/10-Q/8-K)
│   │   ├── oem/                   # Vertiv/Dell/HPE/Supermicro
│   │   └── cloud/                 # Alphabet/Microsoft/Amazon/Meta
│   ├── web-snapshots/             # ChangeDetection网页快照
│   └── wechat/                    # 微信文章存档
├── analysis/                      # 分析产物 (AI生成,非源文件)
│   └── liquid-cooling/            # PPT/文档/分析稿
└── config/                        # 调度配置
```

## 产业链覆盖

```
液冷冷板/Manifold/CDU/快接头/冷却液
    ├── GPU芯片 (海光/寒武纪/龙芯 + NVIDIA/AMD/Intel)
    ├── OEM服务器 (工业富联/浪潮/曙光 + Vertiv/Dell/HPE/Supermicro)
    ├── OTT云厂商 (移动/电信/光环新网 + Google/MSFT/Amazon/Meta)
    └── 液冷核心 (英维克/高澜/申菱/同飞/依米康)
```

## 自动调度

| 时间(周六) | 任务 | 来源 |
|-----------|------|------|
| 01:00 | RSS实时情报 | RSSHub + FlareSolverr |
| 02:00 | 行业研报 | manymore13 report.db |
| 03:00 | 个股研报(A股22家) | Eastmoney API |
| 04:00 | SEC EDGAR(国外11家) | SEC Filings |
