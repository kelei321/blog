import fs from "node:fs";
import path from "node:path";

const slug = process.argv[2];

if (!slug) {
  console.error("Usage: pnpm new-post <slug>");
  process.exit(1);
}

const safeSlug = slug
  .toLowerCase()
  .trim()
  .replace(/[^a-z0-9\u4e00-\u9fa5-]+/g, "-")
  .replace(/^-+|-+$/g, "");

if (!safeSlug) {
  console.error("Invalid slug.");
  process.exit(1);
}

const postsDir = path.join(process.cwd(), "src", "content", "posts");
const filePath = path.join(postsDir, `${safeSlug}.mdx`);

if (fs.existsSync(filePath)) {
  console.error(`Post already exists: ${filePath}`);
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);
const title = safeSlug
  .split("-")
  .filter(Boolean)
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

const content = `---
title: ${title}
description: 这里填写文章摘要。
published: ${today}
tags: [Notes]
category: 随笔
draft: true
---

## ${title}

开始写作。
`;

fs.mkdirSync(postsDir, { recursive: true });
fs.writeFileSync(filePath, content, "utf8");
console.log(`Created ${path.relative(process.cwd(), filePath)}`);
