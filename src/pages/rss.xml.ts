import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { SITE } from "../config";
import { getPosts } from "../lib/posts";

export const GET: APIRoute = async (context) => {
  const posts = await getPosts();

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.published,
      link: `/posts/${post.slug}/`,
    })),
  });
};
