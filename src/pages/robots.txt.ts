import { SITE } from "../config";

export function GET(context: { site?: URL }) {
  const site = context.site?.toString() ?? SITE.url;
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${new URL("sitemap-index.xml", site).toString()}\n`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
