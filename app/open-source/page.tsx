import React from 'react';
import OpenSourceSection from '@/components/OpenSourceSection';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Open Source Contributions',
  description:
    'Upstream merged pull requests by Amrit Raj across git/git.github.io, fossasia/scrum_helper, fossasia/eventyay-checkin, and GSSoC open-source repositories.',
  path: '/open-source',
});

export default function OpenSourcePage() {
  return (
    <div className="pt-12">
      <OpenSourceSection headingAs="h1" />
    </div>
  );
}
