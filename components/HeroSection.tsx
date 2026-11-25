import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, FileText, GitPullRequest } from 'lucide-react';
import { HERO_STATS, SITE_CONFIG } from '@/data/portfolio';
import { SocialLinksRow } from './SocialIcons';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16"
    >
      {/* Ambient background glow orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-[460px] w-[460px] rounded-full bg-[#00f5ff] opacity-[0.09] blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -bottom-24 h-[420px] w-[420px] rounded-full bg-[#7c3aed] opacity-[0.11] blur-[110px]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left column: Intro & CTA */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#00f5ff]/25 bg-[#00f5ff]/10 px-4 py-1.5 text-xs font-semibold text-[#00f5ff]">
            <GitPullRequest className="h-3.5 w-3.5" aria-hidden="true" />
            <span>B.E. Computer Engineering · Open Source & Full-Stack</span>
          </div>

          <h1 className="bg-gradient-to-br from-white via-white to-zinc-400 bg-clip-text text-5xl font-black tracking-tight text-transparent sm:text-6xl lg:text-7xl">
            {SITE_CONFIG.name}
          </h1>

          <p className="mt-3 text-xl font-semibold text-[#00f5ff] drop-shadow-[0_0_24px_rgba(0,245,255,0.45)] sm:text-2xl">
            {SITE_CONFIG.role}
          </p>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-zinc-400 sm:text-base sm:leading-loose">
            {SITE_CONFIG.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href={SITE_CONFIG.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <FileText className="h-4 w-4" aria-hidden="true" />
              View Resume
            </a>
            <Link href="/projects" className="btn-secondary">
              Explore Projects
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-7">
            <SocialLinksRow size="md" />
          </div>

          {/* Verified GitHub & Hackathon Stats */}
          <div className="mt-10 grid w-full grid-cols-2 gap-4 border-t border-white/[0.08] pt-6 sm:grid-cols-4">
            {HERO_STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center lg:items-start"
              >
                <span className="title-gradient text-2xl font-extrabold sm:text-3xl">
                  {stat.num}
                </span>
                <span className="mt-0.5 text-[11px] font-medium tracking-wider text-zinc-500 uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: Profile Photo */}
        <div className="relative mx-auto flex items-center justify-center">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(0,245,255,0.16)_0%,transparent_70%)]"
          />

          <div className="relative h-72 w-72 rounded-[30px] bg-gradient-to-br from-[#00f5ff] to-[#7c3aed] p-[3px] shadow-[0_0_60px_rgba(0,245,255,0.16),0_0_90px_rgba(124,58,237,0.12)] sm:h-96 sm:w-96">
            <div className="relative h-full w-full overflow-hidden rounded-[27px] bg-[#0d1016]">
              <Image
                src={SITE_CONFIG.profileImage}
                alt="Portrait of Amrit Raj, Full Stack and React Native Engineer"
                fill
                priority
                sizes="(max-width: 640px) 288px, 384px"
                className="object-cover object-top"
              />
            </div>
          </div>

          <div className="absolute -top-3 right-0 rounded-full border border-white/15 bg-black/70 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md sm:-right-6">
            ⚛️ React &amp; Next.js
          </div>
          <div className="absolute -bottom-3 left-0 rounded-full border border-white/15 bg-black/70 px-4 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-md sm:-left-6">
            📱 React Native · Expo
          </div>
        </div>
      </div>
    </section>
  );
}
