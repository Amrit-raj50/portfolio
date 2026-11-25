import React from 'react';
import FigmaSection from '@/components/FigmaSection';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Figma Designs',
  description:
    'UI/UX concepts and interactive component designs created by Amrit Raj in Figma.',
  path: '/figma',
});

export default function FigmaPage() {
  return (
    <div className="pt-12">
      <FigmaSection headingAs="h1" />
    </div>
  );
}
