# Kyle

Hexo 个人站点，用来展示技术总结，并把 [kyle-build](https://github.com/kyle-build?tab=repositories) 下的 `*-learning` 仓库收敛到同一处。

## 本地预览

需要 Node 20+。

```bash
nvm use
npm start
```

打开 `http://localhost:4000`。

## 写笔记

```bash
npx hexo new "文章标题"
```

在 front matter 里加上轨道分类，例如 `React`、`JavaScript`、`Linux`。

## 目录

- `source/_posts/`：技术总结
- `source/_data/tracks.yml`：学习轨道
- `source/_data/repos.yml`：仓库索引
- `themes/docs/`：简约文档风主题

线上域名按 GitHub Pages 用户站准备：`https://kyle-build.github.io`。需要的话可以再把这个仓库接到已有的 `kyle-build.github.io`。
