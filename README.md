# Kelei Notes

基于 Fuwari 原版主题的 Astro 技术博客。

## 本地开发

使用 pnpm install 安装依赖，使用 pnpm dev 启动开发服务。

## 构建

使用 pnpm build 构建站点，输出目录为 dist。

## Cloudflare Pages

Framework preset 使用 Astro，Build command 使用 pnpm build，Build output directory 使用 dist，Node.js version 使用 20 或更高。

## 配置

主要配置文件是 src/config.ts。绑定自定义域名后，把 astro.config.mjs 里的 site 改成正式域名。
