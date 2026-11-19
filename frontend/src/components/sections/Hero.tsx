'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  CheckCircle2,
} from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { CwdVideoShowcase } from '@/components/ui/CwdVideoShowcase';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 lg:pt-24 lg:pb-32 tech-grid">
      {/* Background radial gradient halos */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] sm:w-[1000px] h-[500px] bg-gradient-to-b from-primary/15 via-accent/10 to-transparent blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Headlines & CTAs (6 cols) */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs sm:text-sm font-semibold backdrop-blur-md shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-accent animate-pulse" />
              <span>{siteConfig.primaryPositioning}</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-black tracking-tight text-foreground leading-[1.12]"
            >
              Building Digital Experiences.{' '}
              <span className="gradient-text">
                Engineering Business Growth.
              </span>
            </motion.h1>

            {/* Supporting Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-foreground/75 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal"
            >
              {siteConfig.description}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2"
            >
              <Link href="/start" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto h-13 px-8 text-base font-semibold shadow-lg shadow-primary/20">
                  Start Your Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/services" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto h-13 px-7 text-base font-medium bg-background/80 backdrop-blur-md border-border/80 hover:bg-secondary/70">
                  Explore Our Services
                </Button>
              </Link>
            </motion.div>

            {/* Trust Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs sm:text-sm text-foreground/70"
            >
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Next.js 16 & React 19 Stack</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Transparent Itemized Pricing</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                <span>Haridwar, Uttarakhand & Global</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Animated CWD Company Video Showcase Reel (6 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 relative flex items-center justify-center w-full"
          >
            <CwdVideoShowcase />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
