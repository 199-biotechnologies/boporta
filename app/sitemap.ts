import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bolivarporta.com';

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date('2025-03-01') },
    { url: `${baseUrl}/about`, lastModified: new Date('2025-03-01') },
    { url: `${baseUrl}/family-law`, lastModified: new Date('2025-03-01') },
    { url: `${baseUrl}/criminal-defense`, lastModified: new Date('2025-03-01') },
    { url: `${baseUrl}/faq`, lastModified: new Date('2025-03-01') },
    { url: `${baseUrl}/blog`, lastModified: new Date('2025-10-03') },
  ];

  const blogPosts: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/blog/protecting-your-rights-criminal-defense-lawyer`,
      lastModified: new Date('2024-05-09'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog/navigating-divorce-right-lawyer-miami`,
      lastModified: new Date('2025-10-03'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ];

  return [...staticPages, ...blogPosts];
}

