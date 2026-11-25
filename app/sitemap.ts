import type { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/data/portfolio';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date('2026-11-25');
  const routes: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/projects', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/open-source', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/skills', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/certificates', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/figma', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.8, changeFrequency: 'yearly' },
  ];

  return routes.map((route) => ({
    url: `${SITE_CONFIG.url}${route.path === '/' ? '' : route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
