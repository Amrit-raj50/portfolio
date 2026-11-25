import React from 'react';
import SkillsSection from '@/components/SkillsSection';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Skills',
  description:
    'Technical skills of Amrit Raj across React 19, Next.js, TypeScript, React Native, Expo, Node.js, Express, Python, FastAPI, MongoDB, PostgreSQL, and Supabase.',
  path: '/skills',
});

export default function SkillsPage() {
  return (
    <div className="pt-12">
      <SkillsSection headingAs="h1" />
    </div>
  );
}
