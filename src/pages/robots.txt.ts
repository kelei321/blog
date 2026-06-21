import type { APIRoute } from "astro";
import { SITE } from "../config";

export const GET: APIRoute = (context) => {
  const site = context.site?.toString() ?? SITE.url;
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${new URL("sitemap-index.xml", site).toString()}\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
