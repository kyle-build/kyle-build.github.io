# Kyle

个人技术笔记，发布在 <https://kyle-build.github.io>

首页是卡片墙；顶栏是大类（React、JavaScript、Vue、Lynx、Go、Linux、Git、Interview）；点进某一类后，左侧是该模块的章节目录。

## 怎么补充内容

样式在 `themes/docs/` 里，**加笔记不会覆盖主题**。每次部署都是「源码 + 主题」重新生成静态页，不是在旧 HTML 上打补丁。

1. 新增一篇笔记：

```bash
npx hexo new "文章标题"
```

2. 打开 `source/_posts/文章标题.md`，把分类改成对应大类：

```yaml
title: 文章标题
categories:
  - React
```

可用分类：`React`、`JavaScript`、`Vue`、`Lynx`、`Go`、`Linux`、`Git`、`Interview`。

3. 本地看效果：

```bash
nvm use
pnpm start
```

4. 推到 GitHub，Actions 会自动构建并更新线上站点：

```bash
git add source/_posts
git commit -m "Add a React note"
git push origin source
```

不要手改 `public/` 或 `main` 分支里的生成文件。自定义样式只改 `themes/docs/source/css/style.css`。

## 目录

- `source/_posts/`：笔记正文
- `source/_data/nav.yml`：顶栏大类
- `source/_data/tracks.yml`：学习模块卡片
- `source/_data/interview.yml`：面试侧栏目录
- `themes/docs/`：页面样式，不会被新增 Markdown 覆盖
