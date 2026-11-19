'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { portfolioConfig } from '@/config/portfolio.config';
import { ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '@/components/ui/BrandIcons';
import { Button } from '@/components/ui/Button';

export function FeaturedProjects() {
  // Show top 3 featured projects
  const featured = portfolioConfig.slice(0, 3);

  return (
    <section className="py-20 md:py-28 relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-primary uppercase mb-2 block">
              Proven Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground">
              Featured Case Studies & Work
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 mt-3 leading-relaxed">
              Explore how we solve complex real-world operational problems with robust, scalable digital architectures.
            </p>
          </div>
          <Link href="/portfolio" className="shrink-0">
            <Button variant="outline" className="font-semibold">
              View All Projects ({portfolioConfig.length})
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {featured.map((project, index) => {
            const isReversed = index % 2 === 1;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-3xl glass border border-border/80 overflow-hidden shadow-lg hover:border-primary/50 transition-all duration-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Left Column: Image Preview (7 cols) */}
                  <div className={`lg:col-span-7 relative h-64 sm:h-80 md:h-96 w-full overflow-hidden ${isReversed ? 'lg:order-2' : ''}`}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent lg:hidden" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-background/90 backdrop-blur-md text-primary border border-border shadow-xs">
                        {project.category}
                      </span>
                      <span className="text-xs font-medium px-3 py-1 rounded-full bg-background/80 backdrop-blur-md text-foreground/80 border border-border shadow-xs hidden sm:inline-block">
                        {project.industry}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Project Information (5 cols) */}
                  <div className={`lg:col-span-5 p-6 sm:p-8 lg:p-10 space-y-4 ${isReversed ? 'lg:order-1' : ''}`}>
                    <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold">
                      {project.clientType}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-foreground leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-sm text-foreground/75 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Verified Outcomes */}
                    <div className="space-y-1.5 pt-2">
                      {project.verifiedOutcomes.slice(0, 2).map((outcome, oIdx) => (
                        <div key={oIdx} className="flex items-start text-xs sm:text-sm text-foreground/80">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mr-2 mt-0.5" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-3">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-secondary text-foreground/80 border border-border/70"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="pt-4 flex items-center space-x-3">
                      <Link href={`/portfolio/${project.id}`}>
                        <Button size="sm" className="font-semibold">
                          View Case Study
                          <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                        </Button>
                      </Link>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-xs font-medium text-foreground/70 hover:text-primary transition-colors px-3 py-2"
                        >
                          <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-xs font-medium text-foreground/70 hover:text-primary transition-colors px-3 py-2"
                        >
                          <GithubIcon className="w-3.5 h-3.5 mr-1.5" />
                          Code
                        </a>
                      )}
                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
