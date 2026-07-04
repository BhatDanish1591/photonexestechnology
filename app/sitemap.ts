import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://photonexes.in';

  // List of all the pages on your website
  const routes = [
    '',
    '/about',
    '/services',
    '/contact',
    '/courses',
    '/portfolio',
    '/industries',
    '/internship',
    '/placement',
    '/blog',
    '/privacy-policy',
    '/terms',
  ];

  const sitemapData = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return sitemapData;
}
