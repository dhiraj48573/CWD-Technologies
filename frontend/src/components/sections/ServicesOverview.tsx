'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { servicesConfig } from '@/config/services.config';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function ServicesOverview() {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Comprehensive Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground">
            Our Core Technology & Growth Services
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 mt-4 leading-relaxed">
            From modern web applications and bespoke software to practical AI automation and performance marketing, we cover your complete digital lifecycle.
          </p>
        </div>

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesConfig.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group h-full flex flex-col"
              >
                <div className="h-full rounded-2xl glass border border-border/70 group-hover:border-primary/50 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between hover:shadow-xl hover:shadow-primary/5 relative overflow-hidden">
                  
                  {/* Subtle top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    {/* Top Row: Icon & Badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-semibold tracking-wider uppercase text-foreground/60 px-2.5 py-1 rounded-md bg-secondary/80 border border-border/50">
                        {service.badge}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Key Features List */}
                    <ul className="space-y-2 mb-8 pt-2 border-t border-border/50">
                      {service.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-start text-xs sm:text-sm text-foreground/80">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mr-2 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Bottom CTA Link */}
                  <div className="pt-4 border-t border-border/40 flex items-center justify-between">
                    <Link
                      href={`/services/${service.id}`}
                      className="text-xs sm:text-sm font-bold text-primary group-hover:text-primary/80 inline-flex items-center"
                    >
                      <span>Explore {service.title}</span>
                      <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center">
          <p className="text-sm text-foreground/70 mb-4">
            Need a tailored package combining multiple services?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/quote">
              <Button size="lg" variant="outline" className="h-11">
                Use Interactive Quote Builder
              </Button>
            </Link>
            <Link href="/start">
              <Button size="lg" className="h-11">
                Book a Free Consultation
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
