import React from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import OpenSourceSection from '@/components/OpenSourceSection';
import CertificatesSection from '@/components/CertificatesSection';
import FigmaSection from '@/components/FigmaSection';
import ContactSection from '@/components/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <OpenSourceSection />
      <CertificatesSection />
      <FigmaSection />
      <ContactSection />
    </>
  );
}
