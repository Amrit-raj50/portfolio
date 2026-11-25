'use client';

import React, { useState } from 'react';
import {
  ExternalLink,
  Globe,
  Smartphone,
  FlaskConical,
  Trophy,
  GitFork,
} from 'lucide-react';
import { PROJECTS, type ProjectCategory } from '@/data/portfolio';
import SectionHeader from './SectionHeader';
import { SocialIconSvg } from './SocialIcons';

type FilterTab = 'all' | ProjectCategory;

const FILTER_TABS: Array<{ id: FilterTab; label: string }> = [
  { id: 'all', label: 'All Projects' },
  { id: 'react', label: 'React & Full-Stack' },
  { id: 'react-native', label: 'React Native' },
  { id: 'experimental', label: 'Experimental' },
  { id: 'hackathon', label: 'Hackathons' },
];

function getCategoryIcon(category: ProjectCategory) {
  switch (category) {
    case 'react':
      return Globe;
    case 'react-native':
      return Smartphone;
    case 'experimental':
      return FlaskConical;
    case 'hackathon':
      return Trophy;
  }
}

export default function ProjectsSection({ headingAs = 'h2' }: { headingAs?: 'h1' | 'h2' }) {
  const [activeTab, setActiveTab] = useState<FilterTab>('all');

  const filtered =
    activeTab === 'all'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeTab);

  return (
    <section id="projects" className="relative overflow-hidden py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -left-24 h-[460px] w-[460px] rounded-full bg-[#00f5ff] opacity-[0.05] blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeader
          as={headingAs}
          title="Featured"
          highlight="Projects"
          subtitle="Categorized across React & Full-Stack web platforms, React Native mobile apps, systems experiments, and national hackathon builds."
        />

        {/* Category Tabs */}
        <div
          role="tablist"
          aria-label="Filter projects by category"
          className="mb-10 flex flex-wrap justify-center gap-2.5"
        >
          {FILTER_TABS.map((tab) => {
            const count =
              tab.id === 'all'
                ? PROJECTS.length
                : PROJECTS.filter((p) => p.category === tab.id).length;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition sm:text-sm ${
                  isActive
                    ? 'border-[#00f5ff]/70 bg-[#00f5ff]/15 text-[#00f5ff] shadow-[0_0_20px_rgba(0,245,255,0.2)]'
                    : 'border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/25 hover:text-white'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[11px] ${
                    isActive
                      ? 'bg-[#00f5ff]/20 text-[#00f5ff]'
                      : 'bg-white/[0.06] text-zinc-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((project) => {
            const Icon = getCategoryIcon(project.category);

            return (
              <article
                key={project.id}
                className="glass-card flex flex-col overflow-hidden"
              >
                {/* Stylized visual header */}
                <div
                  className="relative flex items-center justify-between border-b border-white/[0.07] px-6 py-5"
                  style={{
                    background: `linear-gradient(135deg, ${project.accentColor}18 0%, rgba(15,17,23,0.9) 65%)`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl border"
                      style={{
                        borderColor: `${project.accentColor}45`,
                        backgroundColor: `${project.accentColor}15`,
                        color: project.accentColor,
                      }}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-semibold tracking-wider text-zinc-400 uppercase">
                        {project.categoryLabel}
                      </span>
                      <h3 className="text-lg font-bold text-white">{project.title}</h3>
                    </div>
                  </div>

                  <span
                    className="rounded-full border px-3 py-1 text-[11px] font-semibold"
                    style={{
                      borderColor: `${project.accentColor}50`,
                      backgroundColor: `${project.accentColor}18`,
                      color: project.accentColor,
                    }}
                  >
                    {project.badge}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div>
                    <p className="text-xs font-semibold text-zinc-300">
                      {project.subtitle}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      {project.description}
                    </p>
                  </div>

                  <ul className="space-y-1.5 text-xs text-zinc-300">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: project.accentColor }}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[11px] font-medium text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 border-t border-white/[0.07] pt-4 text-xs font-semibold">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-zinc-300 transition hover:text-[#00f5ff]"
                    >
                      <SocialIconSvg label="GitHub" className="h-3.5 w-3.5" />
                      Source Code
                    </a>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#00f5ff] transition hover:underline"
                      >
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        Live Demo
                      </a>
                    )}

                    {project.secondaryRepo && (
                      <a
                        href={project.secondaryRepo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-zinc-400 transition hover:text-white"
                      >
                        <GitFork className="h-3.5 w-3.5" aria-hidden="true" />
                        {project.secondaryRepo.label}
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
