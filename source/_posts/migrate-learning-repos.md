---
title: 如何把 learning 仓库迁到本站
date: 2026-08-19
categories:
  - 站点
---

约定很简单：仓库里留可运行的实验，站点里留能检索的结论。

## 1. 一篇笔记对应一个主题

```bash
npx hexo new "React Scheduler 为什么不用微任务"
```

文章头部带上轨道名，分类会生成对应页面：

```yaml
categories:
  - React
```

可用的轨道名：`React`、`JavaScript`、`Vue`、`Lynx`、`Go`、`Linux`、`Git`。

## 2. 从仓库搬什么、不搬什么

迁入：

- 已经稳定的机制解释
- 自己踩过的结论和反例
- 能独立阅读的章节

留在仓库：

- `mini-react` 这类可运行实验
- 半成品草稿
- 依赖本地环境才能看懂的代码树

## 3. 仓库索引

完整列表在 [仓库页](/repos/)，GitHub 主页是 [kyle-build](https://github.com/kyle-build?tab=repositories)。
