'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Palette, Rocket, Wrench } from 'lucide-react';

const fiveStepProcess = [
  {
    step: '01',
    title: 'Discovery & Requirement Analysis',
    icon: Search,
    description:
      'We conduct a deep dive into your business model, customer pain points, competitors, and technical constraints to define an unambiguous project scope.',
    deliverables: ['Scope of Work (SOW)', 'Technical Architecture Plan', 'Itemized Quotation'],
  },
  {
    step: '02',
    title: 'Strategy & Planning',
    icon: Compass,
    description:
      'We map out database schemas, API contracts, user journey wireframes, and milestone delivery schedules with clear development sprints.',
    deliverables: ['Information Architecture', 'Database ERDs', 'Sprint Timeline Roadmap'],
  },
  {
    step: '03',
    title: 'UI/UX Design & Development',
    icon: Palette,
    description:
      'We design high-fidelity responsive interfaces and build clean, modular, type-safe Next.js code with continuous staging environment previews.',
    deliverables: ['Figma Design System', 'Responsive App/Web Frontend', 'Secure Backend APIs'],
  },
  {
    step: '04',
    title: 'Testing & Deployment',
    icon: Rocket,
    description:
      'Rigorous cross-browser testing, mobile viewport verification, security audits, and DNS/SSL configuration for zero-downtime production rollout.',
    deliverables: ['QA Test Suite Passed', 'SSL & DNS Configured', 'Production Launch on Vercel/Cloud'],
  },
  {
    step: '05',
    title: 'Maintenance & Continuous Improvement',
    icon: Wrench,
    description:
      'Post-launch warranty, automated server backups, security patches, performance monitoring, and ongoing feature updates under structured AMC agreements.',
    deliverables: ['Post-Launch Bug Warranty', 'Automated Daily Backups', 'Quarterly SEO & Speed Audits'],
  },
];

export function DevelopmentProcess() {
  return (
    <section className="py-20 md:py-28 bg-secondary/30 border-y border-border/50 relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-primary uppercase mb-2 block">
            Predictable Execution
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground">
            Our 5-Step Engineering & Delivery Process
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 mt-4 leading-relaxed">
            From initial requirement discovery to post-launch maintenance, we follow a transparent, milestone-driven framework that eliminates guesswork.
          </p>
        </div>

        {/* 5-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {fiveStepProcess.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-2xl glass border border-border/70 p-6 flex flex-col justify-between hover:border-primary/50 transition-all hover:shadow-lg relative group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-3xl font-black text-primary/30 group-hover:text-primary transition-colors">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-bold text-base text-foreground mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-foreground/50 block mb-2">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-1 text-xs text-foreground/80">
                    {item.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-center">
                        <span className="w-1 h-1 rounded-full bg-primary mr-1.5 shrink-0" />
                        <span className="truncate">{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
