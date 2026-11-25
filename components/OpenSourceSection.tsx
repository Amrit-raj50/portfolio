import React from 'react';
import { ExternalLink, GitMerge, CheckCircle2 } from 'lucide-react';
import { OPEN_SOURCE_PRS } from '@/data/portfolio';
import SectionHeader from './SectionHeader';

export default function OpenSourceSection({ headingAs = 'h2' }: { headingAs?: 'h1' | 'h2' }) {
  const totalMergedPRs = OPEN_SOURCE_PRS.reduce(
    (sum, item) => sum + item.prs.length,
    0
  );

  return (
    <section
      id="open-source"
      className="relative overflow-hidden bg-white/[0.01] py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-0 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#7c3aed] opacity-[0.06] blur-[120px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeader
          as={headingAs}
          title="Open Source"
          highlight="Contributions"
          subtitle={`${totalMergedPRs} upstream pull requests genuinely merged across ${OPEN_SOURCE_PRS.length} external open-source repositories including Git, FOSSASIA, and GSSoC '26.`}
        />

        <div className="grid gap-6 md:grid-cols-2">
          {OPEN_SOURCE_PRS.map((repo) => (
            <article key={repo.repo} className="glass-card flex flex-col p-6">
              <div className="flex flex-wrap items-start justify-between gap-3 border-b border-white/[0.07] pb-4">
                <div>
                  <span
                    className="inline-block rounded-full border px-2.5 py-0.5 text-[11px] font-semibold"
                    style={{
                      borderColor: `${repo.accentColor}45`,
                      backgroundColor: `${repo.accentColor}15`,
                      color: repo.accentColor,
                    }}
                  >
                    {repo.org}
                  </span>
                  <h3 className="mt-2 font-mono text-base font-bold text-white sm:text-lg">
                    <a
                      href={repo.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 transition hover:text-[#00f5ff]"
                    >
                      {repo.repo}
                      <ExternalLink className="h-3.5 w-3.5 text-zinc-500" aria-hidden="true" />
                    </a>
                  </h3>
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/15 px-3 py-1 text-xs font-semibold text-purple-300">
                  <GitMerge className="h-3.5 w-3.5" aria-hidden="true" />
                  {repo.prs.length} Merged
                </span>
              </div>

              <div className="mt-4 flex flex-1 flex-col gap-3">
                {repo.prs.map((pr) => (
                  <a
                    key={pr.url}
                    href={pr.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-xl border border-white/[0.07] bg-white/[0.02] p-3.5 transition hover:border-[#00f5ff]/40 hover:bg-white/[0.04]"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#00f5ff]">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" aria-hidden="true" />
                        PR {pr.number}
                      </span>
                      <span className="text-[11px] text-zinc-500">{pr.mergedAt}</span>
                    </div>
                    <p className="mt-1.5 text-sm font-semibold text-zinc-100 group-hover:text-[#00f5ff]">
                      {pr.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-400">
                      {pr.summary}
                    </p>
                  </a>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5 pt-2">
                {repo.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[11px] font-medium text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
