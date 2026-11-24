import type { MetadataRoute } from "next";

// Live: allow all crawlers.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://webautomate.net/sitemap.xml",
  };
}
