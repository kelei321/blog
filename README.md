# Kelei Notes

基于 **Astro + MDX + Cloudflare Pages + Pagefind + Giscus** 的个人技术博客。视觉风格参考 Fuwari：左侧个人信息、圆角卡片、浅色/深色模式、文章归档、标签、分类和全文搜索。

## 技术栈

- Astro 5
- MDX 内容写作
- Tailwind CSS
- Pagefind 静态全文搜索
- Giscus 评论
- Cloudflare Pages 部署

## 本地开发

```bash
pnpm install
pnpm dev
```

## 新建文章

```bash
pnpm new-post my-new-post
```

文章会生成到 `src/content/posts/my-new-post.mdx`。

## 构建

```bash
pnpm build
```

构建流程会执行：

1. `astro check`
2. `astro build`
3. `pagefind --site dist`

Pagefind 索引会生成到 `dist/pagefind`。

## Cloudflare Pages 配置

- Framework preset: `Astro`
- Build command: `pnpm build`
- Build output directory: `dist`
- Node.js version: `20` 或更高

详细说明见：`docs/cloudflare-pages.md`。

## Giscus 配置

Giscus 需要先启用 GitHub Discussions，再到 https://giscus.app/ 生成 repo/category ID。

本地可复制环境变量模板：

```bash
cp .env.example .env
```

详细说明见：`docs/giscus.md`。

## 目录结构

```txt
src/
  components/       组件：搜索、评论、文章卡片、主题切换
  content/posts/    Markdown / MDX 文章
  layouts/          基础布局和文章布局
  pages/            首页、文章、标签、分类、搜索、RSS
  styles/           全局样式
```

## 下一步可扩展

- 自定义域名后更新 `astro.config.mjs` 和 `src/config.ts` 的站点地址。
- Giscus 配好后在 Cloudflare Pages 环境变量里填写公开配置。
- 后续如需阅读量/点赞/友链申请，可以加 Workers + D1。
- 后续如需图片上传和附件，可以加 R2。
