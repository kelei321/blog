# Giscus 评论配置

本项目已经内置 Giscus 客户端组件，但默认不会在缺少 ID 的情况下加载脚本。

## 配置步骤

1. 在 GitHub 仓库 `Settings -> Features` 启用 Discussions。
2. 创建或确认一个 discussion category，例如 `General`。
3. 打开 https://giscus.app/，填写：
   - Repository: `kelei321/blog`
   - Page ↔️ Discussions Mapping: `pathname`
   - Discussion category: `General`
   - Features: `Emit discussion metadata` 可不开启
   - Theme: 建议 `preferred_color_scheme`
4. 把生成结果里的 `data-repo-id` 和 `data-category-id` 填到 Cloudflare Pages 环境变量或本地 `.env`。

## 本地测试

```bash
cp .env.example .env
pnpm install
pnpm dev
```

只有当 `PUBLIC_GISCUS_REPO_ID` 和 `PUBLIC_GISCUS_CATEGORY_ID` 都有值时，文章页底部才会显示评论区。
