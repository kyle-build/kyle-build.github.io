# Kyle

个人技术笔记，发布在 <https://kyle-build.github.io>

首页是卡片墙。顶栏是大类（React、JavaScript、Vue、Lynx、Go、Linux、Git、Interview）。点进某一类后，左侧是该模块的章节目录。

`source` 分支是稿，`main` 是构建产物。日常只改 `source` 分支，不要手改 `public/` 或 `main`。

## 使用流程

### 1. 本地预览

```bash
cd ~/Desktop/workspace/demos/kyle
nvm use          # Node 20+
pnpm install
pnpm start
```

打开 `http://localhost:4000`。`pnpm start` 开着时，保存 Markdown 后刷新即可。

### 2. 给已有模块加笔记

用编辑器打开项目，在 `source/_posts/` 新建一个 `.md`（不必跑 `hexo new`）：

```yaml
---
title: Fiber 为什么要把工作切成小单元
date: 2026-08-19
order: 1
categories:
  - React
---

正文写这里。
```

`categories` 必须和模块名完全一致，笔记才会出现在该模块左侧章节里。

`order` 决定章节顺序，数字越小越靠前。不写则排到最后，再按 `date` 排。

可用分类：`React`、`JavaScript`、`Vue`、`Lynx`、`Go`、`Linux`、`Git`。

本地确认没问题后推上去：

```bash
git add source/_posts
git commit -m "Add a React note"
git push origin source
```

GitHub Actions 会构建并更新线上站点，通常一两分钟。进度看 [Actions](https://github.com/kyle-build/kyle-build.github.io/actions)。

### 3. 拓展新模块

以新增 TypeScript 为例，改三处配置，再建一个总览页。

**首页卡片** — `source/_data/tracks.yml`：

```yaml
- slug: typescript
  title: TypeScript
  repo: typescript-core-learning
  summary: 类型系统与工程实践。
  status: pending
```

`repo` 是该模块顶栏右上角 GitHub 要跳的仓库名。

**顶栏** — `source/_data/nav.yml`：

```yaml
- title: TypeScript
  path: /learning/typescript/
  slug: typescript
```

**总览页** — 新建 `source/learning/typescript/index.md`：

```yaml
---
title: TypeScript
layout: track
slug: typescript
---

这个模块放 TypeScript 相关结论。
```

`title`、`slug` 要和上面两处对上。笔记的 `categories` 使用这个 `title`。

建议同时在 `_config.yml` 的 `category_map` 里加上：

```yaml
  TypeScript: typescript
```

然后按第 2 步往这个模块里加笔记，再 `git push origin source`。

### 5. 目录顺序怎么定

- **顶栏大类**：`source/_data/nav.yml` 里谁在前，谁就靠左。
- **首页卡片**：`source/_data/tracks.yml` 里谁在前，谁就靠上。
- **面试侧栏**：`source/_data/interview.yml` 里 `groups` / `items` 的先后。
- **学习模块章节**：每篇笔记 front matter 里的 `order`，从小到大。

YAML 文件都是「写在上面的先显示」，拖动列表即可改顺序。

### 4. Interview 模块

Interview 不是 `tracks.yml` 里的学习轨道。

- 侧栏目录：`source/_data/interview.yml`
- 栏目正文：`source/interview/` 下对应的 `index.md`

往面试里加栏目，改这两处，而不是新建 `source/_posts/`。

## 发布是怎么工作的

推送到 `source` 后，`.github/workflows/pages.yml` 会在 GitHub 上执行 `hexo generate`，把 `public/` 写到 `main`。Pages 读取 `main`，所以 https://kyle-build.github.io 会更新。

样式在 `themes/docs/`，每次都是「源码 + 主题」重新生成，**加 Markdown 不会覆盖主题**。改外观只动 `themes/docs/source/css/style.css`。

## 目录

- `source/_posts/`：学习模块的笔记正文
- `source/learning/<slug>/`：每个学习模块的总览页
- `source/interview/`：面试栏目页
- `source/_data/nav.yml`：顶栏大类
- `source/_data/tracks.yml`：学习模块卡片和对应仓库
- `source/_data/interview.yml`：面试侧栏目录
- `themes/docs/`：页面样式
- `.github/workflows/pages.yml`：推 `source` 后自动构建
