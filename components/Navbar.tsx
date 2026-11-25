'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, SITE_CONFIG } from '@/data/portfolio';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a0a]/85 backdrop-blur-xl border-b border-white/[0.08] py-3.5 shadow-[0_8px_30px_rgba(0,0,0,0.45)]'
          : 'bg-transparent py-5'
      }`}
    >
      <nav
        aria-label="Primary navigation"
        className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-6"
      >
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="title-gradient text-2xl font-black tracking-wide shrink-0"
        >
          {SITE_CONFIG.brand}
        </Link>

        {/* Desktop navigation — collapses cleanly below lg (1024px) to prevent tablet clipping */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-7">
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === '/'
                ? pathname === '/'
                : pathname.startsWith(link.href);

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative pb-1 text-sm font-medium whitespace-nowrap transition-colors ${
                    isActive
                      ? 'text-[#00f5ff]'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 h-0.5 w-full rounded-full bg-gradient-to-r from-[#00f5ff] to-[#7c3aed] shadow-[0_0_12px_rgba(0,245,255,0.5)]" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href={SITE_CONFIG.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#00f5ff]/40 bg-[#00f5ff]/10 px-4 py-1.5 text-xs font-semibold text-[#00f5ff] transition hover:bg-[#00f5ff]/20"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          className="lg:hidden inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] p-2 text-white hover:border-[#00f5ff]/50"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile & Tablet Drawer */}
      {menuOpen && (
        <div className="lg:hidden border-t border-white/[0.08] bg-[#0a0a0a]/95 backdrop-blur-xl px-6 py-5">
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block rounded-lg px-3 py-2 text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-[#00f5ff]/10 text-[#00f5ff]'
                        : 'text-zinc-300 hover:bg-white/[0.04] hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <a
                href={SITE_CONFIG.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center text-sm"
              >
                View Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
