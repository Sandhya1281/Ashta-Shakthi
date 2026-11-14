import { MetadataRoute } from 'next';
import { STORIES } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://asthashakti.org';
  const now = new Date();

  const staticRoutes = [
    '',
    '/about',
    '/our-work',
    '/nutri-ed',
    '/impact',
    '/stories',
    '/gallery',
    '/events',
    '/volunteer',
    '/donate',
    '/contact',
    '/transparency',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const storyRoutes = STORIES.map((story) => ({
    url: `${baseUrl}/stories/${story.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...storyRoutes];
}
