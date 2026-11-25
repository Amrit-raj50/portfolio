import React from 'react';
import AboutSection from '@/components/AboutSection';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'About',
  description:
    'Learn about Amrit Raj — B.E. Computer Engineering student building React, Next.js, FastAPI, React Native apps, and upstream open-source contributions.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <div className="pt-12">
      <AboutSection headingAs="h1" />
    </div>
  );
}
