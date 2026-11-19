import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site.config';
import { Button } from '@/components/ui/Button';
import {
  Code2,
  ShieldCheck,
  Compass,
  Cpu,
  Layers,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Sparkles,
} from 'lucide-react';

export const metadata = {
  title: 'About Us | CWD Technologies Haridwar, Uttarakhand',
  description:
    'Learn about CWD Technologies—a premier technology agency founded by Dhiraj Kumar Singh in Haridwar, Uttarakhand. Discover our engineering philosophy, modern tech stack, and values.',
  keywords: [
    'About CWD Technologies',
    'Dhiraj Kumar Singh CWD',
    'IT agency Haridwar Uttarakhand',
    'Tech agency founders Haridwar',
    'Software engineering company Uttarakhand',
    'Next.js development partner India',
  ],
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: 'About Us | CWD Technologies Haridwar, Uttarakhand',
    description:
      'Learn about CWD Technologies—founded by Dhiraj Kumar Singh. Modern technology and digital growth partner.',
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.companyName,
  },
};

const pillars = [
  {
    icon: Code2,
    title: 'Code Quality Over Shortcuts',
    desc: 'We write modular, type-safe TypeScript code with structured components and strict linting. We build platforms that engineers are proud to maintain.',
  },
  {
    icon: Compass,
    title: 'Business-First Architecture',
    desc: 'Technology is an enabler, not an end in itself. Every database query, component, and ad campaign is evaluated against its return on investment for your enterprise.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparent Collaboration',
    desc: 'Direct communication with real engineers. No vague promises, no fabricated awards, and zero surprise billing. You always know what is being built and why.',
  },
  {
    icon: Cpu,
    title: 'Modern Tooling',
    desc: 'We utilize Next.js 16, React 19, Tailwind CSS v4, Node.js, and Vercel/Cloudflare global edge networks to ensure sub-second page performance.',
  },
];

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 space-y-24">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About CWD Technologies</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-[1.12]">
              Your Technology & <br />
              <span className="gradient-text">Digital Growth Partner</span>
            </h1>

            <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
              CWD Technologies is an independent software development and digital solutions agency headquartered in Haridwar, Uttarakhand, India.
            </p>

            <p className="text-sm sm:text-base text-foreground/75 leading-relaxed">
              We help local businesses, startups, and growing enterprises translate ideas into reliable, high-performance web applications, custom business software, mobile apps, and data-driven marketing campaigns.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link href="/portfolio">
                <Button size="lg" className="font-semibold">
                  Explore Case Studies
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Contact Our Team
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="p-8 rounded-3xl glass border border-border/80 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-background border border-border p-2 shadow-sm">
                <Image
                  src={siteConfig.brand.logo}
                  alt={`${siteConfig.companyName} Brand`}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>

              <div>
                <h3 className="font-black text-2xl text-foreground">{siteConfig.companyName}</h3>
                <span className="text-xs font-medium text-primary block mt-0.5">
                  {siteConfig.primaryPositioning}
                </span>
              </div>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-foreground/80 border-t border-border/60">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span>{siteConfig.contact.location}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Serving Clients Across India & Globally</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Next.js, React, Node.js, Python & Cloud Stack</span>
                </div>
              </div>

              <div className="pt-4 border-t border-border/60 text-xs text-foreground/60">
                Founder & Lead Architect: <span className="font-bold text-foreground">{siteConfig.founder.name}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Engineering Philosophy & Pillars */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold tracking-widest text-primary uppercase block">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-foreground">
              How We Approach Engineering
            </h2>
            <p className="text-sm sm:text-base text-foreground/70">
              The foundational standards that guide every line of code we write and every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl glass border border-border/70 hover:border-primary/50 transition-all space-y-3"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-base text-foreground">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Geographic Context: Uttarakhand & Global */}
        <div className="rounded-3xl glass border border-border/80 p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold tracking-widest text-primary uppercase block">
              Location & Presence
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-foreground">
              Deep Roots in Haridwar. High-Standard Digital Delivery Everywhere.
            </h2>
            <p className="text-sm sm:text-base text-foreground/75 leading-relaxed">
              Operating from the historic and burgeoning industrial hub of Haridwar, Uttarakhand, we take pride in bringing enterprise-grade digital architecture to regional businesses—clinics, educational academies, manufacturing units, hotels, and retail shops—while simultaneously delivering modern cloud platforms for remote startups across India and abroad.
            </p>
            <div className="pt-4">
              <Link href="/contact">
                <Button className="font-semibold">
                  Get in Touch With Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
