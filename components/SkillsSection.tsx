import React from 'react';
import { Code2, Smartphone, Server, Wrench } from 'lucide-react';
import { SKILL_GROUPS } from '@/data/portfolio';
import SectionHeader from './SectionHeader';

const CATEGORY_ICONS = [Code2, Smartphone, Server, Wrench];

export default function SkillsSection({ headingAs = 'h2' }: { headingAs?: 'h1' | 'h2' }) {
  return (
    <section id="skills" className="relative overflow-hidden bg-white/[0.01] py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -right-24 h-[440px] w-[440px] -translate-y-1/2 rounded-full bg-[#00f5ff] opacity-[0.05] blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeader
          as={headingAs}
          title="Technical"
          highlight="Skills"
          subtitle="Core technologies drawn directly from shipped React, React Native, FastAPI, Node.js, and hackathon repositories."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {SKILL_GROUPS.map((group, idx) => {
            const Icon = CATEGORY_ICONS[idx % CATEGORY_ICONS.length];
            return (
              <div key={group.category} className="glass-card p-7">
                <div className="mb-5 flex items-center gap-3.5 border-b border-white/[0.07] pb-4">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border"
                    style={{
                      borderColor: `${group.accentColor}45`,
                      backgroundColor: `${group.accentColor}15`,
                      color: group.accentColor,
                    }}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{group.category}</h3>
                    <p className="text-xs text-zinc-400">{group.subtitle}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-zinc-300 transition hover:border-[#00f5ff]/50 hover:text-[#00f5ff]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
