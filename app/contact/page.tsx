import React from 'react';
import ContactSection from '@/components/ContactSection';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Contact',
  description:
    'Get in touch with Amrit Raj for software engineering roles, full-stack & React Native projects, or open-source collaborations.',
  path: '/contact',
});

export default function ContactPage() {
  return (
    <div className="pt-12">
      <ContactSection headingAs="h1" />
    </div>
  );
}
