import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex min-h-[75vh] flex-col items-center justify-center px-6 pt-24 text-center">
      <span className="title-gradient text-6xl font-black sm:text-7xl">404</span>
      <h1 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-sm text-zinc-400">
        The page you&apos;re looking for doesn&apos;t exist. Head back home or explore the projects and open-source sections.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-4">
        <Link href="/" className="btn-primary">
          Back Home
        </Link>
        <Link href="/projects" className="btn-secondary">
          View Projects
        </Link>
      </div>
    </section>
  );
}
