import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://moden.gr/sitemap.xml',
    host: 'https://moden.gr',
  }
}
