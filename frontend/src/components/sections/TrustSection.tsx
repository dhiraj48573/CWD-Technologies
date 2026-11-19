'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Code2, Database, Globe, Lock, Terminal, Zap } from 'lucide-react';

const verifiableCapabilities = [
  {
    icon: Code2,
    title: 'Type-Safe Architecture',
    desc: 'TypeScript across frontend and backend, eliminating entire classes of runtime errors.',
  },
  {
    icon: Zap,
    title: 'Sub-Second Edge Rendering',
    desc: 'Static generation & edge caching on Vercel delivering near-instant page loads.',
  },
  {
    icon: Database,
    title: 'Data Sovereignty',
    desc: 'Isolated PostgreSQL and MongoDB databases owned 100% by your business.',
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    desc: 'Strict HTTPS, role-based access control (RBAC), and protected environment secrets.',
  },
];

const techStack = [
  'Next.js 16',
  'React 19',
  'TypeScript',
  'Tailwind CSS v4',
  'Node.js',
  'Express',
  'Python',
  'PostgreSQL',
  'Vercel',
  'Hostinger',
  'Docker',
  'REST APIs',
];

export function TrustSection() {
  return (
    <section className="py-16 md:py-20 border-y border-border/60 bg-secondary/30 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-bold tracking-widest text-primary uppercase mb-2">
            Verifiable Engineering Standards
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            Built on Real Technology. Driven by Engineering Integrity.
          </h2>
          <p className="text-sm sm:text-base text-foreground/70 mt-3">
            We don't inflate credentials, invent fake client logos, or publish fabricated statistics. We build high-performance software with proven, battle-tested modern tools.
          </p>
        </div>

        {/* 4 Technical Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {verifiableCapabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-5 rounded-2xl glass border border-border/70 hover:border-primary/50 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-foreground mb-1.5">{item.title}</h3>
                <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Continuous Tech Stack Marquee */}
        <div className="pt-4 border-t border-border/50">
          <p className="text-center text-xs font-semibold text-foreground/50 uppercase tracking-widest mb-6">
            Core Production Technologies We Build With
          </p>
          <div className="flex overflow-hidden relative select-none [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8">
              {techStack.concat(techStack).map((tech, i) => (
                <span
                  key={i}
                  className="font-mono text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg bg-card/80 border border-border/80 text-foreground/80 hover:text-primary transition-colors whitespace-nowrap shadow-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
