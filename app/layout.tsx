import type { Metadata, Viewport } from 'next';
import { Poppins, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SITE_CONFIG } from '@/data/portfolio';
import { getPersonJsonLd } from '@/lib/seo';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | ${SITE_CONFIG.role}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    'Portfolio of Amrit Raj — Full Stack & React Native Engineer and B.E. Computer Engineering student. Explore React, Next.js, FastAPI, React Native apps, WCE Hackathon 2026 Finalist Sanjeevani, SIH 2026 Report_Maro, and merged open-source PRs to git & FOSSASIA.',
  keywords: [
    'Amrit Raj',
    'Amrit-raj50',
    'Full Stack Developer',
    'React Developer',
    'React Native Developer',
    'Next.js Portfolio',
    'TypeScript',
    'FastAPI',
    'Open Source Contributor',
    'FOSSASIA',
    'Git Developer Pages',
    'WCE Hackathon 2026 Finalist',
    'Sanjeevani AI',
    'Report_Maro',
    'leetCompiler',
    'Tozo',
    'fieldOps',
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    siteName: `${SITE_CONFIG.name} Portfolio`,
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.role}`,
    description:
      'Full Stack & React Native Engineer building React, Next.js, FastAPI, Expo mobile apps, and upstream open-source contributions.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.role}`,
    description:
      'React, React Native, FastAPI, Hackathon Finalist & Open-Source Contributor (git, FOSSASIA, GSSoC).',
    creator: '@AmritRaj0017',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = getPersonJsonLd();

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${jetbrainsMono.variable} h-full dark`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white antialiased selection:bg-[#00f5ff]/25 selection:text-[#00f5ff]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
