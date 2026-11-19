'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { portfolioConfig } from '@/config/portfolio.config';
import { Button } from '@/components/ui/Button';
import { ArrowRight, ExternalLink, CheckCircle2, Sparkles } from 'lucide-react';
import { GithubIcon } from '@/components/ui/BrandIcons';

const categories = [
  'All',
  'Business Websites',
  'E-Commerce',
  'Healthcare',
  'Education',
  'AI & Automation',
  'Custom Software',
];

export default function PortfolioListingPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = portfolioConfig.filter((p) => {
    if (selectedCategory === 'All') return true;
    return p.category === selectedCategory;
  });

  return (
    <div className="py-16 md:py-24">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Engineering Case Studies</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground">
            Our Work & Real-World Projects
          </h1>
          <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
            Real software, scalable architectures, and verified technical outcomes. We engineer solutions that eliminate operational friction and accelerate growth.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'glass text-foreground/70 hover:text-foreground border border-border/70 hover:bg-secondary/70'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl glass border border-border/80 overflow-hidden flex flex-col justify-between hover:border-primary/50 transition-all hover:shadow-xl group"
            >
              <div>
                {/* Project Image */}
                <div className="relative h-56 w-full overflow-hidden bg-card">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-background/90 backdrop-blur-md text-primary border border-border">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <span className="text-xs font-mono text-primary font-bold uppercase block">
                    {project.clientType}
                  </span>
                  <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors leading-snug line-clamp-2">
                    <Link href={`/portfolio/${project.id}`}>
                      {project.title}
                    </Link>
                  </h2>
                  <p className="text-xs sm:text-sm text-foreground/70 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Outcome Highlight */}
                  <div className="pt-2 text-xs text-foreground/80 flex items-start">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mr-1.5 mt-0.5" />
                    <span className="font-medium line-clamp-1">{project.verifiedOutcomes[0]}</span>
                  </div>
                </div>
              </div>

              {/* Technologies & CTA */}
              <div className="p-6 pt-0 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-secondary text-foreground/80 border border-border/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                  <Link
                    href={`/portfolio/${project.id}`}
                    className="text-xs font-bold text-primary inline-flex items-center hover:underline"
                  >
                    <span>Read Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <div className="flex items-center space-x-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/60 hover:text-primary transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground/60 hover:text-primary transition-colors"
                        aria-label="GitHub Code"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Conversion Section */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl glass border border-primary/30 text-center max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black text-foreground">
            Have a Specific Project You Want Engineered?
          </h2>
          <p className="text-sm sm:text-base text-foreground/75 max-w-xl mx-auto">
            Our team will review your business requirements, define the optimal technical stack, and provide an itemized quote.
          </p>
          <div className="pt-2">
            <Link href="/start">
              <Button size="lg" className="font-semibold">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
