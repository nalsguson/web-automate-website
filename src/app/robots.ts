import type { MetadataRoute } from "next";

// STAGING: Disallow all crawlers until go-live.
// At launch, change this to allow crawling (see README go-live checklist).
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", disallow: "/" }],
    sitemap: "https://webautomate.net/sitemap.xml",
  };
}
