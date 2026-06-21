# Cloudflare Pages 部署

## 构建设置

Framework preset: Astro
Build command: pnpm build
Build output directory: dist
Root directory: /
Node.js version: 20 或更高

Fuwari 原版构建脚本会生成 Astro 静态站点，并使用 Pagefind 生成搜索索引。

## 自定义域名

绑定自定义域名后，把 astro.config.mjs 里的 site 改成正式域名。
