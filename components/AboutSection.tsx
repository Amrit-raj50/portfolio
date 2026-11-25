import React from 'react';
import Link from 'next/link';
import { GraduationCap, GitBranch, Smartphone, Cpu } from 'lucide-react';
import { SITE_CONFIG } from '@/data/portfolio';
import SectionHeader from './SectionHeader';

const focusPillars = [
  {
    icon: Cpu,
    title: 'Full-Stack Web & AI',
    desc: 'Building React 19, Next.js, Node.js/Express, and Python FastAPI systems like leetCompiler, Tozo, and India Post PIN Explorer.',
    color: '#00f5ff',
  },
  {
    icon: Smartphone,
    title: 'React Native Mobile',
    desc: 'Shipping cross-platform Expo apps with GPS tracking, camera/audio capture, and regional voice support in fieldOps and Samadhan Setu.',
    color: '#a855f7',
  },
  {
    icon: GitBranch,
    title: 'Upstream Open Source',
    desc: '8 merged PRs across git, FOSSASIA, and GSSoC repositories plus active collaboration on community full-stack builds.',
    color: '#22c55e',
  },
];

export default function AboutSection({ headingAs = 'h2' }: { headingAs?: 'h1' | 'h2' }) {
  return (
    <section id="about" className="relative overflow-hidden py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed] opacity-[0.06] blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeader
          as={headingAs}
          title="About"
          highlight="Me"
          subtitle="B.E. Computer Engineering student building production-minded web, mobile, and AI applications while contributing upstream to open source."
        />

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Story & Background */}
          <div className="glass-card p-7 sm:p-9">
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Engineering across <span className="text-[#00f5ff]">Web, Mobile &amp; Open Source</span>
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base sm:leading-loose">
              I started by recreating interfaces in HTML, CSS, and JavaScript, and quickly grew into building end-to-end TypeScript, React, Next.js, Express, FastAPI, and React Native applications. From an online multi-language code compiler to a 12-stage AI repository analyzer and civic-tech monorepos, I focus on shipping systems that solve concrete problems.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base sm:leading-loose">
              Outside personal and hackathon builds—including reaching the <strong className="text-white">WCE National Level Hackathon 2026 Finals</strong> with <strong className="text-[#00f5ff]">Sanjeevani</strong>—I actively contribute documentation, UI fixes, and developer-workflow improvements upstream to organizations like <strong className="text-white">Git</strong> and <strong className="text-white">FOSSASIA</strong>.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                'React 19',
                'Next.js',
                'React Native',
                'TypeScript',
                'FastAPI',
                'Node.js',
                'MongoDB',
                'Supabase',
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#00f5ff]/25 bg-[#00f5ff]/10 px-3.5 py-1 text-xs font-medium text-[#00f5ff]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Education & Quick Snapshot */}
          <div className="flex flex-col gap-6">
            <div className="glass-card p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#00f5ff]/30 bg-[#00f5ff]/10 text-[#00f5ff]">
                  <GraduationCap className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-semibold tracking-wider text-[#00f5ff] uppercase">
                    Education
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    {SITE_CONFIG.education.degree}
                  </h3>
                </div>
              </div>
              <p className="mt-3 text-sm font-medium text-zinc-200">
                {SITE_CONFIG.education.institution}
              </p>
              <p className="mt-1.5 text-sm text-zinc-400">
                {SITE_CONFIG.education.focus}
              </p>
              <p className="mt-2 font-mono text-xs text-zinc-500">
                {SITE_CONFIG.education.period} · {SITE_CONFIG.location}
              </p>
            </div>

            <div className="glass-card flex flex-1 flex-col justify-between p-7">
              <div>
                <span className="text-xs font-semibold tracking-wider text-[#a855f7] uppercase">
                  Open Source &amp; DSA
                </span>
                <h3 className="mt-1 text-lg font-bold text-white">
                  1,500+ GitHub Contributions
                </h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Active across <span className="text-zinc-200">@git</span>,{' '}
                  <span className="text-zinc-200">@fossasia</span>,{' '}
                  <span className="text-zinc-200">@codinggita</span>, and regular C++/JS problem solving on LeetCode &amp; NeetCode.
                </p>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  href="/open-source"
                  className="text-xs font-semibold text-[#00f5ff] hover:underline"
                >
                  View Merged PRs →
                </Link>
                <a
                  href="https://github.com/Amrit-raj50"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-zinc-300 hover:text-white"
                >
                  GitHub Profile ↗
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Focus Pillars */}
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {focusPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title} className="glass-card p-6">
                <div
                  className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border"
                  style={{
                    borderColor: `${pillar.color}44`,
                    backgroundColor: `${pillar.color}15`,
                    color: pillar.color,
                  }}
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-white">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
