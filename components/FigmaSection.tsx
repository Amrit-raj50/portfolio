import React from 'react';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { FIGMA_DESIGNS } from '@/data/portfolio';
import SectionHeader from './SectionHeader';
import { SocialIconSvg } from './SocialIcons';

export default function FigmaSection({ headingAs = 'h2' }: { headingAs?: 'h1' | 'h2' }) {
  return (
    <section
      id="figma"
      className="relative overflow-hidden bg-white/[0.01] py-24"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeader
          as={headingAs}
          title="Figma"
          highlight="Designs"
          subtitle="UI/UX concepts, component systems, and interactive wireframes designed in Figma."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FIGMA_DESIGNS.map((design) => (
            <article
              key={design.id}
              className="glass-card flex flex-col overflow-hidden"
            >
              <div className="group relative aspect-[16/10] w-full overflow-hidden bg-[#111318]">
                <Image
                  src={design.image}
                  alt={design.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 rounded-full border border-white/15 bg-black/75 px-3 py-1 text-[11px] font-semibold text-zinc-200 backdrop-blur-md">
                  {design.tag}
                </span>
                <span className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/75 text-[#F24E1E] backdrop-blur-md">
                  <SocialIconSvg label="Figma" className="h-4 w-4" />
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-white">{design.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
                  {design.description}
                </p>
                <a
                  href={design.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#00f5ff] transition hover:underline"
                >
                  Open in Figma
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
