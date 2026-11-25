import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/data/portfolio';

export function buildPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const canonicalPath = path === '/' ? '' : path;
  const url = `${SITE_CONFIG.url}${canonicalPath}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      url,
      title,
      description,
      siteName: `${SITE_CONFIG.name} Portfolio`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@AmritRaj0017',
    },
  };
}

export function getPersonJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    image: `${SITE_CONFIG.url}${SITE_CONFIG.profileImage}`,
    email: `mailto:${SITE_CONFIG.email}`,
    jobTitle: SITE_CONFIG.role,
    description: SITE_CONFIG.tagline,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'B.E. Computer Engineering',
    },
    sameAs: SITE_CONFIG.socials.map((s) => s.href),
    knowsAbout: [
      'React',
      'Next.js',
      'React Native',
      'Expo',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Express',
      'Python',
      'FastAPI',
      'MongoDB',
      'PostgreSQL',
      'Supabase',
      'Open Source Software',
    ],
  };
}
