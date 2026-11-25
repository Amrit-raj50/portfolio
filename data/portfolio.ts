export type ProjectCategory =
  | 'react'
  | 'react-native'
  | 'experimental'
  | 'hackathon';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  badge: string;
  accentColor: string;
  description: string;
  highlights: string[];
  tech: string[];
  github: string;
  live?: string;
  secondaryRepo?: { label: string; url: string };
}

export interface MergedPR {
  number: string;
  title: string;
  url: string;
  mergedAt: string;
  summary: string;
}

export interface OpenSourceRepo {
  repo: string;
  org: string;
  repoUrl: string;
  stack: string[];
  accentColor: string;
  prs: MergedPR[];
}

export interface SkillGroup {
  category: string;
  subtitle: string;
  accentColor: string;
  items: string[];
}

export interface SkillCertificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  color: string;
  badge: string;
  image: string;
  skills: string[];
  description?: string;
}

export interface HackathonCertificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  position: string;
  repoUrl?: string;
  repoLabel?: string;
  color: string;
  badge: string;
  image: string;
  problem: string;
  solution: string;
  outcome: string;
}

export interface FigmaDesign {
  id: string;
  title: string;
  description: string;
  link: string;
  image: string;
  tag: string;
}

export const SITE_CONFIG = {
  name: 'Amrit Raj',
  brand: 'AR.',
  role: 'Full Stack & React Native Engineer',
  headline: 'Software Engineer · B.E. Computer Engineering Student',
  tagline:
    'Building full-stack React & FastAPI platforms, React Native mobile apps, AI-driven hackathon systems, and upstream open-source contributions.',
  url: 'https://amrit-raj-50.vercel.app',
  email: 'amrit.raj.cg@gmail.com',
  location: 'India',
  education: {
    degree: 'B.E. in Computer Engineering',
    institution: 'Swaminarayan University, Kalol, Gandhinagar, Gujarat',
    focus: 'Full Stack Web, React Native Mobile & Open-Source Systems',
    period: '2025 – Present',
  },
  resumeUrl: '/Amrit_Raj_Resume.pdf',
  profileImage: '/images/amrit.png',
  socials: [
    {
      label: 'GitHub',
      href: 'https://github.com/Amrit-raj50',
      handle: '@Amrit-raj50',
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/amrit-raj-5b2993343',
      handle: 'Amrit Raj',
    },
    {
      label: 'Twitter',
      href: 'https://x.com/AmritRaj0017',
      handle: '@AmritRaj0017',
    },
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/@Amrit-q7p',
      handle: '@Amrit-q7p',
    },
    {
      label: 'LeetCode',
      href: 'https://leetcode.com/u/amritrajjh17/',
      handle: 'amritrajjh17',
    },
  ],
};

export const HERO_STATS = [
  { num: '1,500+', label: 'GitHub Contributions', icon: '⚡' },
  { num: '08', label: 'Upstream Merged PRs', icon: '🔀' },
  { num: '09+', label: 'Featured Builds', icon: '💻' },
  { num: "WCE '26", label: 'Hackathon Finalist', icon: '🏆' },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'React & Frontend',
    subtitle: 'Web interfaces, state, and modern SSR',
    accentColor: '#00f5ff',
    items: [
      'React 19',
      'Next.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'Tailwind CSS',
      'Vite',
      'Zustand',
      'React Router',
      'shadcn/ui',
      'HTML5 & CSS3',
    ],
  },
  {
    category: 'React Native & Mobile',
    subtitle: 'Cross-platform mobile apps & device APIs',
    accentColor: '#a855f7',
    items: [
      'React Native',
      'Expo (SDK 54–57)',
      'Expo Router',
      'NativeWind',
      'React Navigation',
      'Expo Location & Maps',
      'Camera & Image Picker',
      'Audio / Speech & i18next',
      'Capacitor (Android)',
    ],
  },
  {
    category: 'Backend, AI & Databases',
    subtitle: 'APIs, queues, realtime & LLM pipelines',
    accentColor: '#22c55e',
    items: [
      'Node.js',
      'Express 5',
      'Python',
      'FastAPI',
      'MongoDB & Mongoose',
      'PostgreSQL & Prisma',
      'Supabase',
      'Socket.io',
      'Redis & BullMQ',
      'JWT & OAuth',
      'Gemini & OpenAI APIs',
    ],
  },
  {
    category: 'Systems & Developer Tools',
    subtitle: 'Open source, DSA & deployment',
    accentColor: '#f59e0b',
    items: [
      'Git & GitHub',
      'C++ & C',
      'Docker',
      'Vitest & Cypress',
      'Vercel & Netlify',
      'Postman',
      'Figma',
      'VS Code',
    ],
  },
];

export const PROJECTS: ProjectItem[] = [
  // ── React & Full-Stack ───────────────────────────────────────────────────
  {
    id: 'leetcompiler',
    title: 'leetCompiler',
    subtitle: 'Dual-Mode Online Code Editor & Compiler',
    category: 'react',
    categoryLabel: 'React & Full-Stack',
    badge: 'Full-Stack React',
    accentColor: '#00f5ff',
    description:
      'Browser-based code execution studio supporting JavaScript, Python, C++, and Java with custom stdin, a Monaco Editor workspace, PWA support, and optional JWT + MongoDB Atlas persistence for solved problems, streaks, and revision queues.',
    highlights: [
      'Monaco Editor + multi-language execution with stdin',
      'Standalone runner + Integrated JWT/MongoDB Atlas streak mode',
    ],
    tech: ['React 19', 'Vite', 'Monaco Editor', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/Amrit-raj50/leetCompiler',
    live: 'https://leet-compiler.vercel.app/',
  },
  {
    id: 'tozo',
    title: 'Tozo',
    subtitle: "AI GitHub Repository Analyzer & Contributor's Companion",
    category: 'react',
    categoryLabel: 'React & Full-Stack',
    badge: 'AI + FastAPI',
    accentColor: '#7c3aed',
    description:
      'Full-stack repository intelligence platform powered by a 12-stage FastAPI MVC pipeline combining AST parsing, Ruff, Radon complexity scoring, Codespell, and concurrent LLM reasoning to onboard open-source contributors faster.',
    highlights: [
      '12-stage AST, static analysis (Ruff/Radon) & AI reasoning pipeline',
      'GitHub OAuth via Vercel serverless + interactive health dashboard',
    ],
    tech: ['React', 'Tailwind CSS', 'Python', 'FastAPI', 'GitPython', 'OpenAI/Groq', 'SQLite'],
    github: 'https://github.com/Amrit-raj50/Tozo',
    live: 'https://tozo.vercel.app/',
  },
  {
    id: 'pincode',
    title: 'India Post PIN Explorer',
    subtitle: '155,000+ Pincode Search & Export Platform',
    category: 'react',
    categoryLabel: 'React & Full-Stack',
    badge: 'MERN Stack',
    accentColor: '#38bdf8',
    description:
      'High-speed full-stack directory for searching, filtering, and exporting 155,000+ India Post PIN codes with cascading State → District → Taluk selectors, instant 6-digit lookup, debounced global search, and CSV downloads.',
    highlights: [
      'Cascading State/District/Taluk APIs & debounced global search',
      'One-click CSV export backed by Express 5 + MongoDB indexing',
    ],
    tech: ['React 19', 'Vite', 'Node.js', 'Express 5', 'MongoDB', 'Mongoose'],
    github: 'https://github.com/Amrit-raj50/pincode',
    live: 'https://pincode-india7.netlify.app/',
  },
  {
    id: 'rent-my-outfit',
    title: 'Rent My Outfit',
    subtitle: 'Collaborative Outfit Rental Marketplace UI',
    category: 'react',
    categoryLabel: 'React & Full-Stack',
    badge: 'React SPA',
    accentColor: '#ec4899',
    description:
      'Collaborative React 19 + React Router web storefront for browsing and renting curated outfits, featuring responsive category views, multi-page navigation, and clean component architecture.',
    highlights: [
      'Authored initial prototype & collaborative iteration on React 19',
      'Responsive routing and catalog flows with React Router v7',
    ],
    tech: ['React 19', 'React Router', 'Vite', 'Lucide Icons', 'CSS3'],
    github: 'https://github.com/Amrit-raj50/rent-my-outfit',
    live: 'https://rent-my-outfit.netlify.app/',
  },

  // ── React Native & Mobile ────────────────────────────────────────────────
  {
    id: 'fieldops',
    title: 'fieldOps',
    subtitle: 'Real-Time Field Operations & GPS Tracking App',
    category: 'react-native',
    categoryLabel: 'React Native',
    badge: 'React Native · Expo',
    accentColor: '#a855f7',
    description:
      'Role-based mobile platform for Admins, Field Employees, and Clients built with Expo & TypeScript. Supports live GPS location broadcasting on interactive maps, task claiming, photo evidence uploads, and client complaint tracking.',
    highlights: [
      'Three distinct mobile roles with Expo Router & Bottom Tabs',
      'Live GPS coordinates + React Native Maps & image evidence',
    ],
    tech: ['React Native', 'Expo 54', 'TypeScript', 'Expo Router', 'Maps & Location', 'Express 5', 'MongoDB'],
    github: 'https://github.com/Amrit-raj50/fieldOps',
  },
  {
    id: 'samadhan-setu-app',
    title: 'Samadhan Setu Mobile',
    subtitle: 'Voice-First Multilingual Civic Reporting App',
    category: 'react-native',
    categoryLabel: 'React Native',
    badge: 'Internal-SIH Winner',
    accentColor: '#10b981',
    description:
      'Accessible React Native + Expo citizen app designed for low-friction civic reporting with Bhashini regional voice guidance, audio capture, multilingual i18next localization, offline-aware checks, and geotagged multipart photo uploads.',
    highlights: [
      'Bhashini voice guide + screen-level audio & i18next localization',
      'Expo 57, NativeWind, SecureStore & geotagged media capture',
    ],
    tech: ['React Native', 'Expo 57', 'TypeScript', 'NativeWind', 'i18next', 'Expo Audio/Speech', 'Location'],
    github: 'https://github.com/Amrit-raj50/Samadhan_Setu_App',
  },

  // ── Experimental ─────────────────────────────────────────────────────────
  {
    id: 'serverlog-analyzer',
    title: 'serverLog_Analyzer',
    subtitle: 'Fault-Tolerant Log Parser & Analytics Dashboard',
    category: 'experimental',
    categoryLabel: 'Experimental',
    badge: 'Systems Experiment',
    accentColor: '#f59e0b',
    description:
      'Experimental log-intelligence dashboard built to handle real-world messy server logs—parsing mixed JSON lines, malformed records, missing fields, and inconsistent timestamp/latency units, paired with a Python synthetic log generator.',
    highlights: [
      'Resilient parser for malformed lines & heterogeneous latency units',
      'Python synthetic log generator + glassmorphic React analytics UI',
    ],
    tech: ['React 19', 'Vite', 'Python', 'Log Parsing', 'Data Visualization'],
    github: 'https://github.com/Amrit-raj50/serverLog_Analyzer',
    live: 'https://server-log-analyzer.vercel.app',
  },

  // ── Hackathons ───────────────────────────────────────────────────────────
  {
    id: 'sanjeevani',
    title: 'Sanjeevani',
    subtitle: 'AI-Powered Emergency Healthcare Ecosystem',
    category: 'hackathon',
    categoryLabel: 'Hackathon',
    badge: 'WCE Hackathon 2026 Finalist',
    accentColor: '#3b82f6',
    description:
      'Emergency response ecosystem built by Team 4-Bits across SU Hackathon 2026 and WCE National Level Hackathon 2026 (Finalist). Combines ER facial biometrics, live SOS GPS tracking, Gemini 2.5 Flash predictive triage, geo-fenced blood donor alerts, and Android Capacitor packaging.',
    highlights: [
      'WCE National Hackathon 2026 Finalist (Mar 20–21, 2026)',
      'face-api.js biometrics + Gemini triage + Supabase Realtime + Android APK',
    ],
    tech: ['React', 'TypeScript', 'Tailwind', 'shadcn/ui', 'Supabase', 'Gemini AI', 'face-api.js', 'Capacitor'],
    github: 'https://github.com/Amrit-raj50/WCEHackathon2026_4-Bits',
    live: 'https://sanjeevani-ochre.vercel.app/',
    secondaryRepo: {
      label: 'SU Hackathon Base',
      url: 'https://github.com/Amrit-raj50/Sanjeevani_Su_Startup',
    },
  },
  {
    id: 'report-maro',
    title: 'Report_Maro (Samadhan Setu)',
    subtitle: 'SIH 2026 Societal Innovation Civic Portal',
    category: 'hackathon',
    categoryLabel: 'Hackathon',
    badge: 'SIH 2026 Monorepo',
    accentColor: '#ef4444',
    description:
      'End-to-end civic-issue resolution monorepo (web portal + React Native app + Node/BullMQ backend) for Jharkhand: citizens submit issues via web or regional voice, AI triages severity, admins route via 3-level LGD university hierarchy, and industries sponsor fixes.',
    highlights: [
      'pnpm monorepo uniting React web, Expo mobile & Express/Prisma/Redis API',
      'NVIDIA NIM/OpenAI triage worker, Socket.io live updates & Bhashini ASR/TTS',
    ],
    tech: ['React', 'TypeScript', 'Zustand', 'Express 5', 'Prisma', 'MongoDB', 'BullMQ', 'Socket.io'],
    github: 'https://github.com/Amrit-raj50/Report_Maro',
    live: 'https://amrit-raj-50.github.io/PS/',
  },
];

export const OPEN_SOURCE_PRS: OpenSourceRepo[] = [
  {
    repo: 'git/git.github.io',
    org: 'Git',
    repoUrl: 'https://github.com/git/git.github.io',
    stack: ['Jekyll', 'JavaScript', 'CSS', 'Markdown'],
    accentColor: '#f97316',
    prs: [
      {
        number: '#873',
        title: 'Add CONTRIBUTING.md with community contribution guidelines',
        url: 'https://github.com/git/git.github.io/pull/873',
        mergedAt: 'Oct 5, 2026',
        summary: 'Documented PR/email-patch workflows, local Jekyll setup, and Git Rev News guidelines.',
      },
      {
        number: '#861',
        title: 'Integrate Prism.js syntax highlighting for fenced code blocks',
        url: 'https://github.com/git/git.github.io/pull/861',
        mergedAt: 'Sep 14, 2026',
        summary: 'Added language-aware Prism.js highlighting across site code blocks (fixes #490).',
      },
    ],
  },
  {
    repo: 'fossasia/scrum_helper',
    org: 'FOSSASIA',
    repoUrl: 'https://github.com/fossasia/scrum_helper',
    stack: ['JavaScript', 'WebExtension', 'Tauri', 'Biome'],
    accentColor: '#00f5ff',
    prs: [
      {
        number: '#867',
        title: 'Updated CONTRIBUTING.md with Vitest, Biome & Tauri workflows',
        url: 'https://github.com/fossasia/scrum_helper/pull/867',
        mergedAt: 'Sep 23, 2026',
        summary: 'Added testing, formatting, Opera build, and Rust/Tauri desktop instructions (fixes #863).',
      },
    ],
  },
  {
    repo: 'fossasia/eventyay-checkin',
    org: 'FOSSASIA',
    repoUrl: 'https://github.com/fossasia/eventyay-checkin',
    stack: ['Vite', 'Tailwind CSS', 'Docker', 'Vitest'],
    accentColor: '#38bdf8',
    prs: [
      {
        number: '#155',
        title: 'Update README with setup guides, prerequisites & station workflows',
        url: 'https://github.com/fossasia/eventyay-checkin/pull/155',
        mergedAt: 'Sep 13, 2026',
        summary: 'Documented kiosk badge printing, attendee check-in, and exhibitor lead scanning setup.',
      },
    ],
  },
  {
    repo: 'Abhishek-Verma0/Employee-Leave-Management-System',
    org: "GSSoC '26",
    repoUrl: 'https://github.com/Abhishek-Verma0/Employee-Leave-Management-System',
    stack: ['React', 'Tailwind CSS', 'MERN'],
    accentColor: '#22c55e',
    prs: [
      {
        number: '#41',
        title: 'Fix mobile role-breakdown table overflow in UserTable',
        url: 'https://github.com/Abhishek-Verma0/Employee-Leave-Management-System/pull/41',
        mergedAt: 'May 29, 2026',
        summary: 'Resolved responsive table wrapping and horizontal overflow on mobile viewports.',
      },
      {
        number: '#22',
        title: 'Resolve Admin Dashboard summary card text overflow on mobile',
        url: 'https://github.com/Abhishek-Verma0/Employee-Leave-Management-System/pull/22',
        mergedAt: 'May 20, 2026',
        summary: 'Fixed mobile card wrapping and layout spacing for small screens (fixes #21).',
      },
    ],
  },
  {
    repo: 'omkarhole/Alumni-Management-System',
    org: 'Community OSS',
    repoUrl: 'https://github.com/omkarhole/Alumni-Management-System',
    stack: ['React', 'CSS', 'MERN'],
    accentColor: '#a855f7',
    prs: [
      {
        number: '#217',
        title: 'Fix 4 frontend build & compilation errors',
        url: 'https://github.com/omkarhole/Alumni-Management-System/pull/217',
        mergedAt: 'May 23, 2026',
        summary: 'Resolved missing icon imports, duplicate declarations, JSX syntax, and CSS brace errors (fixes #215).',
      },
    ],
  },
  {
    repo: 'Raushankumar0720/UI-Intelligence-Engine',
    org: 'Community OSS',
    repoUrl: 'https://github.com/Raushankumar0720/UI-Intelligence-Engine',
    stack: ['React 19', 'Vite', 'CSS3'],
    accentColor: '#f59e0b',
    prs: [
      {
        number: '#2',
        title: 'Mobile UI responsiveness fixes & auth copy standardization',
        url: 'https://github.com/Raushankumar0720/UI-Intelligence-Engine/pull/2',
        mergedAt: 'May 7, 2026',
        summary: 'Improved mobile layout in auth showcase pages and unified Sign In / Sign Up copy.',
      },
    ],
  },
];

export const SKILL_CERTIFICATES: SkillCertificate[] = [
  {
    id: 'sc-react',
    title: 'Frontend Developer (React)',
    issuer: 'HackerRank',
    date: 'April 2026',
    color: '#00f5ff',
    badge: '⚛️',
    image: '/images/fron.png',
    skills: ['React.js', 'JavaScript', 'CSS', 'Frontend Architecture'],
    description:
      'Earned the HackerRank Frontend Developer (React) certification validating component design, hooks, and modern frontend engineering.',
  },
  {
    id: 'sc-ai',
    title: 'AI Foundations',
    issuer: 'Simplilearn SkillUP',
    date: '28th July 2025',
    credentialId: 'Code: 8696924',
    color: '#f59e0b',
    badge: '🤖',
    image: '/images/cert_simplilearn.png',
    skills: ['Artificial Intelligence', 'Machine Learning', 'AI Concepts'],
  },
  {
    id: 'sc-python',
    title: 'Python Programming',
    issuer: 'Reliance Foundation Skilling Academy',
    date: '20th June 2025',
    credentialId: 'ID: RFSA000228747',
    color: '#10b981',
    badge: '🐍',
    image: '/images/cert_reliance.png',
    skills: ['Python', 'Programming', 'Problem Solving'],
  },
];

export const HACKATHON_CERTIFICATES: HackathonCertificate[] = [
  {
    id: 'hc-wce',
    title: 'WCE National Level Hackathon 2026 (Vision 2026)',
    issuer: 'Walchand College of Engineering, Sangli',
    date: '20th–21st March 2026',
    position: 'Finalist',
    repoUrl: 'https://github.com/Amrit-raj50/WCEHackathon2026_4-Bits',
    repoLabel: 'View Repo',
    color: '#3b82f6',
    badge: '🏆',
    image: '/images/walchand.jpeg',
    problem:
      'Critical delay in accessing patient medical history and coordinating emergency response during road accidents.',
    solution:
      'Built Sanjeevani, an AI-powered emergency healthcare ecosystem combining facial biometrics, live SOS GPS tracking, Gemini predictive triage, and geo-fenced blood donor alerts.',
    outcome:
      'Selected as a Finalist with a working Supabase + Gemini AI + Android Capacitor prototype.',
  },
  {
    id: 'hc-su',
    title: 'SU_HACKATHON — 2026',
    issuer: 'Sangam University, Bhilwara',
    date: '14th–15th March 2026',
    position: 'Participation',
    repoUrl: 'https://github.com/Amrit-raj50/Sanjeevani_Su_Startup',
    repoLabel: 'View Repo',
    color: '#10b981',
    badge: '🏥',
    image: '/images/su_hackathon.jpeg',
    problem:
      'Fragmented emergency coordination between bystanders, ambulances, hospitals, and pharmacies during trauma events.',
    solution:
      'Designed the Sanjeevani healthcare platform for QR emergency health profiles, live hospital bed status, and coordinated emergency contact alerts.',
    outcome:
      'Delivered a working TypeScript + React + Supabase platform that evolved into our WCE Finalist build.',
  },
  {
    id: 'hc-ieee',
    title: 'Electrosphere 2024',
    issuer: 'IEEE Student Branch',
    date: 'November 2024',
    position: 'Participation',
    color: '#a855f7',
    badge: '⚙️',
    image: '/images/electrosphere.jpeg',
    problem:
      'Manual inspection delays when detecting structural micro-cracks in industrial manufacturing components.',
    solution:
      'Prototyped a computer vision inspection workflow for automated defect logging and industrial monitoring.',
    outcome:
      'Strengthened practical experience in computer vision pipelines for industrial diagnostics.',
  },
];

export const FIGMA_DESIGNS: FigmaDesign[] = [
  {
    id: 'fig-chat',
    title: 'Modern Chat App UI',
    tag: 'Mobile UI',
    description:
      'Dark-themed mobile messaging interface crafted with glassmorphic surfaces, live presence indicators, and clean conversation flows.',
    link: 'https://www.figma.com/design/V4dFQRdvATMqSQMHiPK6qd/Untitled?node-id=305-8&t=n7pxC58FEA7ikjtW-1',
    image: '/images/chat_app.png',
  },
  {
    id: 'fig-edskills',
    title: 'Ed-Skills Learning Platform',
    tag: 'Web UX',
    description:
      'Student learning dashboard design featuring course progress tracking, modular skill paths, and structured UX wireframes.',
    link: 'https://www.figma.com/design/V4dFQRdvATMqSQMHiPK6qd/Untitled?node-id=0-1&t=n7pxC58FEA7ikjtW-1',
    image: '/images/edskills_app.png',
  },
  {
    id: 'fig-ecommerce',
    title: 'Premium E-Commerce Concept',
    tag: 'Product Design',
    description:
      'Clean storefront interface focusing on visual hierarchy, intuitive product discovery, and streamlined checkout flows.',
    link: 'https://www.figma.com/design/V4dFQRdvATMqSQMHiPK6qd/Untitled?node-id=0-1&t=n7pxC58FEA7ikjtW-1',
    image: '/images/e-commerce.png',
  },
];

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Open Source', href: '/open-source' },
  { name: 'Certificates', href: '/certificates' },
  { name: 'Figma', href: '/figma' },
  { name: 'Contact', href: '/contact' },
];
