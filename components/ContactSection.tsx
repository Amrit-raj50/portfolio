'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/data/portfolio';
import SectionHeader from './SectionHeader';
import { SocialLinksRow } from './SocialIcons';

const EMAILJS_SERVICE_ID = 'service_bh5kqdl';
const EMAILJS_TEMPLATE_ID = 'template_0o5uchr';
const EMAILJS_PUBLIC_KEY = '3U_W97CjXesU3OgAL';

export default function ContactSection({ headingAs = 'h2' }: { headingAs?: 'h1' | 'h2' }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('sending');
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus('success');
      formRef.current.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-[440px] w-[440px] rounded-full bg-[#7c3aed] opacity-[0.07] blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeader
          as={headingAs}
          title="Get In"
          highlight="Touch"
          subtitle="Open to software engineering internships, full-stack / React Native roles, and open-source collaborations."
        />

        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-extrabold text-white">
                Let&apos;s build something{' '}
                <span className="title-gradient">impactful</span>
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
                Whether you have an engineering opportunity, want to collaborate on a hackathon or open-source project, or just want to connect, feel free to send a message.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-3.5 text-sm text-zinc-300 transition hover:text-[#00f5ff]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00f5ff]/10 text-[#00f5ff]">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>{SITE_CONFIG.email}</span>
              </a>

              <div className="flex items-center gap-3.5 text-sm text-zinc-300">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00f5ff]/10 text-[#00f5ff]">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                </span>
                <span>{SITE_CONFIG.location}</span>
              </div>
            </div>

            <SocialLinksRow size="md" />

            <div className="glass-card flex items-center gap-4 p-5">
              <Mail className="h-5 w-5 shrink-0 text-[#00f5ff]" aria-hidden="true" />
              <div>
                <div className="text-[11px] font-semibold tracking-wider text-zinc-500 uppercase">
                  Direct Email
                </div>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-sm font-medium text-white hover:text-[#00f5ff]"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="glass-card space-y-5 p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="from_name"
                  className="text-xs font-semibold tracking-wider text-zinc-400 uppercase"
                >
                  Your Name
                </label>
                <input
                  id="from_name"
                  name="from_name"
                  type="text"
                  required
                  placeholder="Jane Doe"
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-[#00f5ff] focus:bg-[#00f5ff]/[0.04] focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="from_email"
                  className="text-xs font-semibold tracking-wider text-zinc-400 uppercase"
                >
                  Email Address
                </label>
                <input
                  id="from_email"
                  name="from_email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-[#00f5ff] focus:bg-[#00f5ff]/[0.04] focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="subject"
                className="text-xs font-semibold tracking-wider text-zinc-400 uppercase"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Internship / Collaboration Inquiry"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-[#00f5ff] focus:bg-[#00f5ff]/[0.04] focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-xs font-semibold tracking-wider text-zinc-400 uppercase"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell me about your project or opportunity..."
                className="resize-y rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-[#00f5ff] focus:bg-[#00f5ff]/[0.04] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary w-full rounded-xl py-3.5 text-sm disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="flex items-center justify-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs font-medium text-emerald-300">
                <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                Message sent! I&apos;ll get back to you soon.
              </p>
            )}

            {status === 'error' && (
              <p className="flex items-center justify-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-xs font-medium text-red-300">
                <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                Could not send via form right now — feel free to email {SITE_CONFIG.email} directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
