import React from 'react';
import ProjectsSection from '@/components/ProjectsSection';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Projects',
  description:
    'Featured projects by Amrit Raj across React & Full-Stack (leetCompiler, Tozo, pincode, Rent My Outfit), React Native (fieldOps, Samadhan Setu), Experimental (serverLog_Analyzer), and Hackathons (Sanjeevani, Report_Maro).',
  path: '/projects',
});

export default function ProjectsPage() {
  return (
    <div className="pt-12">
      <ProjectsSection headingAs="h1" />
    </div>
  );
}
