import type { APIRoute } from "astro";
import SiteConfig, { SITE_URL_WITH_BASE } from "~/site.config";

const ALLOW_ROBOTS = SiteConfig.allowRobots ?? false;
const SITEMAP_URL = `${SITE_URL_WITH_BASE}/sitemap-index.xml`;

/** Generates robots.txt with sitemap reference or disallow rule based on configuration */
export const GET: APIRoute = async () => {
  if (!ALLOW_ROBOTS) {
    return new Response(`User-agent: *\nDisallow: /\n`, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }

  const content = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /*/search",
    "",
    "User-agent: Googlebot",
    "Allow: /",
    "",
    "User-agent: bingbot",
    "Allow: /",
    "",
    "User-agent: Baiduspider",
    "Allow: /",
    "",
    "User-agent: yisouspider",
    "Allow: /",
    "",
    `Sitemap: ${SITE_URL_WITH_BASE}/sitemap.xml`,
    `Sitemap: ${SITEMAP_URL}`,
    "",
  ].join("\n");

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
