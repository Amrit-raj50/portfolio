import React from 'react';

interface SectionHeaderProps {
  title: string;
  highlight: string;
  subtitle?: string;
  as?: 'h1' | 'h2';
}

export default function SectionHeader({
  title,
  highlight,
  subtitle,
  as = 'h2',
}: SectionHeaderProps) {
  const Heading = as;

  return (
    <div className="mb-12 text-center">
      <Heading className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title} <span className="title-gradient">{highlight}</span>
      </Heading>
      <div className="glow-line" />
      {subtitle && (
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
