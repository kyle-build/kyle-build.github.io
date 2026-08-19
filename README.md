# Kyle

Hexo 站点，发布在 GitHub Pages 用户站：<https://kyle-build.github.io>

源码在 `source` 分支，生成结果在 `main`（Pages 读取这个分支）。

## 本地预览

需要 Node 20+。

```bash
nvm use
pnpm install
pnpm start
```

打开 `http://localhost:4000`。

## 发布

推到 `source` 后，GitHub Actions 会构建并更新 `https://kyle-build.github.io`。

```bash
git push origin source
```

## 模块

- Learning：对应 `*-learning` 仓库
- Interview：对应 `interview-code-base`，后续迁入正文
