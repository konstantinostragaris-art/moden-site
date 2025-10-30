import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://moden.gr'
  return [
    { url: base, changeFrequency: 'monthly', priority: 1 },
    { url: base + '/en', changeFrequency: 'monthly', priority: 0.9 },
  ]
}
