import type { MetadataRoute } from "next"

const BASE_URL = "https://xend.global"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/waitlist`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/litepaper.pdf`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]
}
