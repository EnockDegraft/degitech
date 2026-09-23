import type { MetadataRoute } from "next"
import { site } from "@/lib/site"
import { projects } from "@/lib/projects"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const pages = ["", "/services", "/work", "/about", "/pricing", "/contact", "/consultation", "/privacy"]
  return [
    ...pages.map((p) => ({
      url: `${site.url}${p}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : p === "/privacy" ? 0.3 : 0.8,
    })),
    ...projects.map((p) => ({
      url: `${site.url}/work/${p.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
  ]
}
