import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  Layers,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { GithubIcon } from '@/components/ui/BrandIcons';
import { portfolioConfig } from '@/config/portfolio.config';
import { siteConfig } from '@/config/site.config';
import { Button } from '@/components/ui/Button';

// Pre-render all dynamic portfolio pages at build time
export function generateStaticParams() {
  return portfolioConfig.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = portfolioConfig.find((p) => p.id === id);
  if (!project) return { title: 'Case Study Not Found | CWD Technologies' };

  const canonicalUrl = `${siteConfig.url}/portfolio/${project.id}`;

  return {
    title: `${project.title} — Case Study | CWD Technologies`,
    description: project.description,
    keywords: [
      project.title,
      project.category,
      project.industry,
      ...project.technologies,
      'CWD Technologies case study',
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${project.title} — Case Study | CWD Technologies`,
      description: project.description,
      url: canonicalUrl,
      siteName: siteConfig.companyName,
      images: [
        {
          url: project.image || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  };
}

export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = portfolioConfig.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  // Schema.org CreativeWork
  const workJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    headline: project.title,
    description: project.description,
    creator: {
      '@type': 'Organization',
      name: siteConfig.companyName,
    },
    genre: project.category,
    keywords: project.technologies.join(', '),
  };

  // Schema.org Breadcrumb
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteConfig.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Portfolio',
        item: `${siteConfig.url}/portfolio`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: project.title,
        item: `${siteConfig.url}/portfolio/${project.id}`,
      },
    ],
  };

  return (
    <div className="pt-8 pb-24 md:pb-32">
      {/* Schema.org Injections */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Top Breadcrumb Navigation */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 mb-6">
        <Link
          href="/portfolio"
          className="inline-flex items-center text-xs sm:text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5" />
          Back to All Case Studies
        </Link>
      </div>

      {/* Hero Header */}
      <section className="py-10 md:py-16 bg-secondary/20 border-y border-border/50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl space-y-4">
            
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/10 text-primary uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-secondary text-foreground/70 border border-border">
                {project.industry}
              </span>
              <span className="text-xs font-mono text-foreground/50">
                • {project.clientType}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground leading-[1.15]">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-foreground/75 leading-relaxed">
              {project.description}
            </p>

            {/* External Links */}
            <div className="flex flex-wrap gap-3 pt-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <Button size="sm" className="font-semibold">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Visit Live Website
                  </Button>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <Button variant="outline" size="sm" className="font-semibold">
                    <GithubIcon className="w-4 h-4 mr-2" />
                    View Source Code
                  </Button>
                </a>
              )}
              <Link href="/start">
                <Button variant="outline" size="sm">
                  Request Similar Project
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content & Architecture Details */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Story & Solution (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Project Cover Image */}
            <div className="relative h-72 sm:h-96 md:h-[450px] w-full rounded-3xl overflow-hidden border border-border/80 shadow-xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* The Challenge */}
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold text-foreground flex items-center">
                <span className="w-8 h-8 rounded-lg bg-rose-500/10 text-rose-500 flex items-center justify-center text-sm font-bold mr-3">
                  01
                </span>
                The Challenge
              </h2>
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed pl-11">
                {project.challenge}
              </p>
            </div>

            {/* Requirements Scope */}
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold text-foreground flex items-center">
                <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm font-bold mr-3">
                  02
                </span>
                Project Requirements
              </h2>
              <div className="pl-11 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.requirements.map((req, rIdx) => (
                  <div key={rIdx} className="p-4 rounded-xl glass border border-border/70 flex items-start text-xs sm:text-sm text-foreground/85">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mr-2.5 mt-0.5" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* The Solution */}
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold text-foreground flex items-center">
                <span className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-sm font-bold mr-3">
                  03
                </span>
                Our Solution & Architecture
              </h2>
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed pl-11">
                {project.solution}
              </p>
            </div>

            {/* Verified Outcomes */}
            <div className="space-y-4">
              <h2 className="text-2xl font-extrabold text-foreground flex items-center">
                <span className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center text-sm font-bold mr-3">
                  04
                </span>
                Verified Technical Outcomes
              </h2>
              <div className="pl-11 space-y-2.5">
                {project.verifiedOutcomes.map((out, oIdx) => (
                  <div key={oIdx} className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 flex items-center text-sm sm:text-base font-medium text-foreground">
                    <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mr-3" />
                    <span>{out}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Spec Sheet (4 cols) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Tech Stack Box */}
            <div className="p-6 rounded-2xl glass border border-border/80 space-y-4">
              <h3 className="font-bold text-base text-foreground pb-3 border-b border-border/60">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono font-medium px-3 py-1.5 rounded-lg bg-secondary text-foreground border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Deliverables Scope Box */}
            <div className="p-6 rounded-2xl glass border border-border/80 space-y-4">
              <h3 className="font-bold text-base text-foreground pb-3 border-b border-border/60">
                Delivered Components
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-foreground/75">
                {project.deliverables.map((del, dIdx) => (
                  <li key={dIdx} className="flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2.5 shrink-0" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Start a project with us */}
            <div className="p-6 sm:p-8 rounded-2xl glass border border-primary/40 text-center space-y-4 shadow-lg">
              <h3 className="font-black text-xl text-foreground">
                Need Something Similar?
              </h3>
              <p className="text-xs sm:text-sm text-foreground/70">
                Let's discuss how our technical architecture can be adapted to your business goals.
              </p>
              <Link href="/start" className="block pt-2">
                <Button className="w-full font-semibold">
                  Start Your Project
                </Button>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
