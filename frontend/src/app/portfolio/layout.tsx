import React from 'react';
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Our Work & Case Studies | CWD Technologies Portfolio',
  description:
    'Explore verified real-world software development, high-performance web applications, and AI integrations built by CWD Technologies in Haridwar, Uttarakhand.',
  keywords: [
    'CWD Technologies portfolio',
    'Web development case studies Haridwar',
    'Custom software projects Uttarakhand',
    'Next.js web projects',
    'E-commerce websites India',
    'Real estate portal development',
    'Healthcare clinic web app',
  ],
  alternates: {
    canonical: `${siteConfig.url}/portfolio`,
  },
  openGraph: {
    title: 'Our Work & Case Studies | CWD Technologies',
    description:
      'Verified real-world software, web applications, and AI solutions built by CWD Technologies.',
    url: `${siteConfig.url}/portfolio`,
    siteName: siteConfig.companyName,
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
