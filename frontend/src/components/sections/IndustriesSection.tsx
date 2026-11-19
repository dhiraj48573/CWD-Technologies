'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { industriesConfig } from '@/config/industries.config';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function IndustriesSection() {
  const [selectedIndustry, setSelectedIndustry] = useState(industriesConfig[0]);

  return (
    <section id="industries" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-primary uppercase mb-2 block">
            Domain Specialization
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-foreground">
            Industries We Serve With Purpose-Built Solutions
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 mt-4 leading-relaxed">
            Different sectors face unique digital hurdles. We tailor our software architectures, booking workflows, and conversion funnels to match your specific industry dynamics.
          </p>
        </div>

        {/* 10 Industry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-12">
          {industriesConfig.map((industry) => {
            const Icon = industry.icon;
            const isSelected = selectedIndustry.id === industry.id;
            return (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry)}
                className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20 scale-[1.02]'
                    : 'glass border-border/70 text-foreground hover:border-primary/40 hover:bg-secondary/40'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                    isSelected ? 'bg-white/10 text-white' : 'bg-secondary text-foreground/60'
                  }`}>
                    {industry.featuredTech[0]}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-tight mb-1">{industry.name}</h3>
                  <p className={`text-xs line-clamp-2 ${isSelected ? 'text-white/80' : 'text-foreground/70'}`}>
                    {industry.shortDesc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Industry Detail Showcase Box */}
        <div className="rounded-3xl glass border border-primary/30 p-6 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                <span>Selected Industry Overview</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-foreground">
                Digital Solutions for {selectedIndustry.name}
              </h3>
              <p className="text-sm sm:text-base text-foreground/75 leading-relaxed">
                {selectedIndustry.shortDesc}
              </p>
              
              <div className="pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-foreground/60 mb-3">
                  Tailored Deliverables:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedIndustry.solutions.map((sol, idx) => (
                    <div key={idx} className="flex items-start text-xs sm:text-sm text-foreground/80">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mr-2 mt-0.5" />
                      <span>{sol}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-center items-start lg:items-end space-y-4 lg:border-l lg:border-border/60 lg:pl-8">
              <div className="space-y-1 text-left lg:text-right">
                <span className="text-xs text-foreground/60 block">Recommended Tech Architecture</span>
                <div className="flex flex-wrap gap-1.5 justify-start lg:justify-end">
                  {selectedIndustry.featuredTech.map((tech) => (
                    <span key={tech} className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-secondary text-foreground border border-border">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 w-full sm:w-auto">
                <Link href={`/start?industry=${selectedIndustry.id}`} className="w-full sm:w-auto inline-block">
                  <Button className="w-full sm:w-auto font-semibold">
                    Discuss {selectedIndustry.name} Project
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
