import React from 'react';
import CertificatesSection from '@/components/CertificatesSection';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Certificates & Hackathons',
  description:
    'Hackathon finals and verified skill certifications of Amrit Raj, including WCE National Level Hackathon 2026 Finalist, SU_HACKATHON 2026, and HackerRank Frontend Developer (React).',
  path: '/certificates',
});

export default function CertificatesPage() {
  return (
    <div className="pt-12">
      <CertificatesSection headingAs="h1" />
    </div>
  );
}
