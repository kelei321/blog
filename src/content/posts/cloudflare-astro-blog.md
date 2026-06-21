---
title: 使用 Astro 和 Cloudflare Pages 搭建博客
published: 2026-06-21
description: 记录这个博客的初始化方案，以及后续可以扩展的方向。
tags: [Astro, Cloudflare, Blog]
category: 工程实践
draft: false
---

这个博客使用 Fuwari 原版主题作为基础，部署目标是 Cloudflare Pages。

## 当前技术栈

- Astro 负责静态站点构建。
- Fuwari 提供博客主题、布局、暗色模式、归档和搜索体验。
- Pagefind 提供纯静态全文搜索。
- Cloudflare Pages 负责自动部署和 CDN 分发。

## 写作方式

文章放在 `src/content/posts/` 目录下，可以直接写 Markdown。

新建文章可以使用：

```bash
pnpm new-post my-new-post
```

## 部署配置

Cloudflare Pages 使用下面的配置即可：

```txt
Framework preset: Astro
Build command: pnpm build
Build output directory: dist
Node.js version: 20 或更高
```

## 后续计划

后续可以逐步补充评论、阅读量、友链和项目文档。如果需要动态能力，可以继续接入 Cloudflare Workers、D1 和 R2。
