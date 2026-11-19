'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Layers,
  Code2,
  FileCheck2,
  Gauge,
  MessageSquareCheck,
  HeartHandshake,
} from 'lucide-react';

const reasons = [
  {
    icon: Briefcase,
    title: 'Business-First Approach',
    description:
      'We never build technology for the sake of buzzwords. Every architecture, feature, and campaign is designed to solve operational pain or drive verifiable revenue.',
  },
  {
    icon: Layers,
    title: 'Customized Digital Solutions',
    description:
      'No one-size-fits-all templates. Your software and website are custom-engineered around your exact organizational workflow, industry standards, and target customers.',
  },
  {
    icon: Code2,
    title: 'Modern Technology Stack',
    description:
      'We leverage modern production tools—Next.js 16, React 19, TypeScript, Tailwind CSS v4, and Cloudflare/Vercel edge networks—ensuring lightning-fast speed and durability.',
  },
  {
    icon: FileCheck2,
    title: 'Transparent Project Quotations',
    description:
      'Zero surprise invoices or hidden charges. We provide comprehensive, itemized project deliverables with clear milestone payment stages before any code is written.',
  },
  {
    icon: Gauge,
    title: 'Performance-Focused Development',
    description:
      'Engineered for sub-second page loads, 95+ Core Web Vitals, semantic markup for Google indexing, and flawless mobile responsiveness across all devices.',
  },
  {
    icon: MessageSquareCheck,
    title: 'Responsive Communication',
    description:
      'Direct, continuous updates through dedicated WhatsApp and email channels. You work directly with lead engineers, not layers of disconnected account managers.',
  },
  {
    icon: HeartHandshake,
    title: 'Long-Term Technical Support',
    description:
      'Our partnership extends far beyond launch day. We provide post-deployment bug warranties, cloud monitoring, security updates, and flexible maintenance plans.',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 md:py-28 bg-secondary/20 border-y border-border/50 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-primary uppercase mb-2 block">
            Why CWD Technologies
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground">
            A Technology Partner You Can Actually Rely On
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 mt-4 leading-relaxed">
            We bridge the gap between complex engineering, beautiful user experiences, and real business outcomes.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-6 sm:p-8 rounded-2xl glass border border-border/70 hover:border-primary/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2.5">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-foreground/75 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
