# Cloudflare Pages 部署

## 构建设置

推荐第一次部署使用 npm 命令，避免仓库还没有 `pnpm-lock.yaml` 时 Cloudflare Pages 自动安装依赖的包管理器判断不一致。

- Framework preset: `Astro`
- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`
- Node.js version: `20` 或更高

如果后续提交了 `pnpm-lock.yaml`，也可以把 Build command 改为：

```bash
pnpm build
```

## 环境变量

首次部署不需要配置 Giscus 环境变量；缺少 Giscus ID 时，文章页只会显示“评论未启用”的提示，不会阻塞构建。

Giscus 不需要服务端密钥，但需要公开的仓库和分类 ID。启用 GitHub Discussions 后，到 https://giscus.app/ 生成配置，再在 Cloudflare Pages 的环境变量里填写：

```txt
PUBLIC_GISCUS_REPO=kelei321/blog
PUBLIC_GISCUS_REPO_ID=<repo id>
PUBLIC_GISCUS_CATEGORY=General
PUBLIC_GISCUS_CATEGORY_ID=<category id>
PUBLIC_GISCUS_MAPPING=pathname
```

## 自定义域名

在 Cloudflare Pages 项目中进入 `Custom domains`，绑定你的域名；绑定后把 `astro.config.mjs` 和 `src/config.ts` 中的站点地址改成正式域名。
