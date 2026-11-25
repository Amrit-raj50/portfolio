import React from 'react';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { NAV_LINKS, SITE_CONFIG } from '@/data/portfolio';
import { SocialLinksRow } from './SocialIcons';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.08] bg-[#07080c]/90">
      <div
        aria-hidden="true"
        className="h-px w-full bg-gradient-to-r from-transparent via-[#00f5ff]/50 to-transparent"
      />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row">
        <div className="flex flex-col items-center gap-1 md:items-start">
          <Link href="/" className="title-gradient text-xl font-black tracking-wide">
            {SITE_CONFIG.brand}
          </Link>
          <p className="text-xs text-zinc-500">
            {SITE_CONFIG.headline}
          </p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium text-zinc-400 transition-colors hover:text-[#00f5ff]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col items-center gap-3 md:items-end">
          <SocialLinksRow size="sm" />
          <p className="flex items-center gap-1.5 text-xs text-zinc-500">
            <span>Built with</span>
            <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500" aria-hidden="true" />
            <span>by {SITE_CONFIG.name} · © 2026</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
