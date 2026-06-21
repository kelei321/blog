# Cloudflare Pages 部署

## 构建设置

- Framework preset: `Astro`
- Build command: `pnpm build`
- Build output directory: `dist`
- Root directory: `/`
- Node.js version: `20` 或更高

## 环境变量

Giscus 不需要服务端密钥，但需要公开的仓库和分类 ID。启用 GitHub Discussions 后，到 https://giscus.app/ 生成配置，再在 Cloudflare Pages 的环境变量里填写：

```txt
PUBLIC_GISCUS_REPO=kelei321/blog
PUBLIC_GISCUS_REPO_ID=<repo id>
PUBLIC_GISCUS_CATEGORY=General
PUBLIC_GISCUS_CATEGORY_ID=<category id>
PUBLIC_GISCUS_MAPPING=pathname
```

## 自定义域名

在 Cloudflare Pages 项目中进入 `Custom domains`，绑定你的域名；绑定后把 `astro.config.mjs` 中的 `site` 改成正式域名。
