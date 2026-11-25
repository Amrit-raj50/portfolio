'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Award, Trophy, Expand, ExternalLink, X, BadgeCheck } from 'lucide-react';
import {
  SKILL_CERTIFICATES,
  HACKATHON_CERTIFICATES,
  type SkillCertificate,
  type HackathonCertificate,
} from '@/data/portfolio';
import SectionHeader from './SectionHeader';

type ModalItem =
  | { kind: 'skill'; data: SkillCertificate }
  | { kind: 'hackathon'; data: HackathonCertificate };

export default function CertificatesSection({ headingAs = 'h2' }: { headingAs?: 'h1' | 'h2' }) {
  const [activeTab, setActiveTab] = useState<'hackathons' | 'skills'>('hackathons');
  const [selected, setSelected] = useState<ModalItem | null>(null);

  return (
    <section id="certificates" className="relative overflow-hidden py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 -left-24 h-[420px] w-[420px] rounded-full bg-[#00f5ff] opacity-[0.05] blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeader
          as={headingAs}
          title="Certificates &"
          highlight="Hackathons"
          subtitle="Verified competition finals, hackathon builds, and technical skill credentials."
        />

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Certificate categories"
          className="mb-10 flex flex-wrap justify-center gap-3"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'hackathons'}
            onClick={() => setActiveTab('hackathons')}
            className={`inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-semibold transition ${
              activeTab === 'hackathons'
                ? 'border-amber-400/70 bg-amber-400/15 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.2)]'
                : 'border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/25 hover:text-white'
            }`}
          >
            <Trophy className="h-4 w-4" aria-hidden="true" />
            Hackathon Certificates ({HACKATHON_CERTIFICATES.length})
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'skills'}
            onClick={() => setActiveTab('skills')}
            className={`inline-flex items-center gap-2 rounded-full border px-6 py-2.5 text-sm font-semibold transition ${
              activeTab === 'skills'
                ? 'border-[#00f5ff]/70 bg-[#00f5ff]/15 text-[#00f5ff] shadow-[0_0_20px_rgba(0,245,255,0.2)]'
                : 'border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/25 hover:text-white'
            }`}
          >
            <Award className="h-4 w-4" aria-hidden="true" />
            Skill Certifications ({SKILL_CERTIFICATES.length})
          </button>
        </div>

        {/* Hackathons Grid */}
        {activeTab === 'hackathons' && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {HACKATHON_CERTIFICATES.map((cert) => (
              <article
                key={cert.id}
                className="glass-card flex flex-col overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setSelected({ kind: 'hackathon', data: cert })}
                  className="group relative aspect-[16/10] w-full overflow-hidden bg-[#111318] text-left"
                  aria-label={`View ${cert.title} certificate`}
                >
                  <Image
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-black/55 opacity-0 backdrop-blur-[2px] transition group-hover:opacity-100">
                    <Expand className="h-5 w-5 text-white" aria-hidden="true" />
                    <span className="text-xs font-semibold text-white">
                      View Certificate
                    </span>
                  </div>
                </button>

                <div className="flex flex-1 flex-col gap-2.5 p-6">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xl" aria-hidden="true">
                      {cert.badge}
                    </span>
                    <span
                      className="rounded px-2.5 py-0.5 text-[11px] font-bold tracking-wider uppercase"
                      style={{
                        color: cert.color,
                        backgroundColor: `${cert.color}20`,
                      }}
                    >
                      {cert.position}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-zinc-300">{cert.issuer}</p>
                  <p className="font-mono text-xs text-zinc-500">{cert.date}</p>

                  <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                    <strong className="text-zinc-200">Impact:</strong> {cert.solution}
                  </p>

                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/[0.07] pt-4">
                    {cert.repoUrl ? (
                      <a
                        href={cert.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-semibold transition hover:underline"
                        style={{ color: cert.color }}
                      >
                        {cert.repoLabel ?? 'View Repo'}
                        <ExternalLink className="h-3 w-3" aria-hidden="true" />
                      </a>
                    ) : (
                      <span className="text-xs text-zinc-500">IEEE Event</span>
                    )}

                    <button
                      type="button"
                      onClick={() => setSelected({ kind: 'hackathon', data: cert })}
                      className="inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-semibold transition hover:bg-white/[0.06]"
                      style={{ borderColor: `${cert.color}66`, color: cert.color }}
                    >
                      <Expand className="h-3 w-3" aria-hidden="true" />
                      View Image
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Skill Certificates Grid */}
        {activeTab === 'skills' && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SKILL_CERTIFICATES.map((cert) => (
              <article
                key={cert.id}
                className="glass-card flex flex-col overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setSelected({ kind: 'skill', data: cert })}
                  className="group relative aspect-[16/10] w-full overflow-hidden bg-[#111318] text-left"
                  aria-label={`View ${cert.title} certificate`}
                >
                  <Image
                    src={cert.image}
                    alt={`${cert.title} certificate by Amrit Raj`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-black/55 opacity-0 backdrop-blur-[2px] transition group-hover:opacity-100">
                    <Expand className="h-5 w-5 text-white" aria-hidden="true" />
                    <span className="text-xs font-semibold text-white">
                      View Certificate
                    </span>
                  </div>
                </button>

                <div className="flex flex-1 flex-col gap-2 p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xl" aria-hidden="true">
                      {cert.badge}
                    </span>
                    <BadgeCheck
                      className="h-5 w-5"
                      style={{ color: cert.color }}
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="text-base font-bold text-white">{cert.title}</h3>
                  <p className="text-xs font-semibold text-zinc-300">{cert.issuer}</p>
                  <p className="font-mono text-xs text-zinc-500">{cert.date}</p>
                  {cert.credentialId && (
                    <p className="font-mono text-[11px] text-zinc-500">
                      {cert.credentialId}
                    </p>
                  )}
                  {cert.description && (
                    <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                      {cert.description}
                    </p>
                  )}

                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {cert.skills.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border px-2.5 py-0.5 text-[11px] font-semibold"
                        style={{
                          borderColor: `${cert.color}50`,
                          color: cert.color,
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelected({ kind: 'skill', data: cert })}
                    className="mt-auto inline-flex items-center gap-1.5 self-start rounded-full border px-4 py-1.5 text-xs font-semibold transition hover:bg-white/[0.06]"
                    style={{ borderColor: `${cert.color}66`, color: cert.color }}
                  >
                    <Expand className="h-3 w-3" aria-hidden="true" />
                    View Certificate
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selected.data.title}
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/15 bg-[#0f1117] p-5 shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close certificate preview"
              className="absolute top-4 right-4 z-10 rounded-full border border-white/15 bg-black/70 p-2 text-white transition hover:border-[#00f5ff] hover:text-[#00f5ff]"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-black">
              <Image
                src={selected.data.image}
                alt={selected.data.title}
                fill
                sizes="(max-width: 768px) 95vw, 720px"
                className="object-contain"
              />
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-white">
                  {selected.data.title}
                </h3>
                <span className="font-mono text-xs text-zinc-400">
                  {selected.data.date}
                </span>
              </div>
              <p className="text-sm text-zinc-300">{selected.data.issuer}</p>

              {selected.kind === 'hackathon' ? (
                <div className="space-y-1.5 pt-2 text-xs leading-relaxed text-zinc-400">
                  <p>
                    <strong className="text-zinc-200">Problem:</strong>{' '}
                    {selected.data.problem}
                  </p>
                  <p>
                    <strong className="text-zinc-200">Solution:</strong>{' '}
                    {selected.data.solution}
                  </p>
                  <p>
                    <strong className="text-zinc-200">Outcome:</strong>{' '}
                    {selected.data.outcome}
                  </p>
                </div>
              ) : (
                selected.data.credentialId && (
                  <p className="font-mono text-xs text-[#00f5ff]">
                    {selected.data.credentialId}
                  </p>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
