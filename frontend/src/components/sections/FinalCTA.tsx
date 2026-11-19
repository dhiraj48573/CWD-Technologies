'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Calendar, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site.config';

export function FinalCTA() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-accent/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold mb-6 border border-primary/20 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-accent animate-pulse" />
          <span>Ready to Accelerate Your Digital Transformation?</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.15] mb-6">
          Have an Idea? Let's Build Something{' '}
          <span className="gradient-text">Powerful.</span>
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl text-foreground/75 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Whether you need a modern business website, bespoke software, a mobile app, or an AI-powered automation workflow, CWD Technologies engineers solutions that move your business forward.
        </p>

        {/* 3 Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto">
          
          <Link href="/start" className="w-full sm:w-auto">
            <Button size="lg" className="w-full h-13 px-8 text-base font-semibold shadow-lg shadow-primary/25">
              Start Your Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>

          <Link href="/contact" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full h-13 px-7 text-base font-medium bg-background/80 backdrop-blur-md border-border/80"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Get Free Consultation
            </Button>
          </Link>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button
              variant="outline"
              size="lg"
              className="w-full h-13 px-7 text-base font-semibold border-emerald-500/50 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Us
            </Button>
          </a>

        </div>

        {/* Bottom Location & Quick Info */}
        <div className="mt-12 pt-8 border-t border-border/50 text-xs sm:text-sm text-foreground/60 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          <span>📍 Headquartered in {siteConfig.contact.location}</span>
          <span>•</span>
          <span>⚡ Direct Phone / WhatsApp: {siteConfig.contact.phone}</span>
          <span>•</span>
          <span>✉️ Email: {siteConfig.contact.email}</span>
        </div>

      </div>
    </section>
  );
}
