'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Layers,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { servicesConfig } from '@/config/services.config';

// 6 Core featured services for the hero reel
const reelServices = servicesConfig.slice(0, 6);

export function CwdVideoShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const currentService = reelServices[activeIndex];
  const Icon = currentService.icon;

  // Auto-cycle through service slides like a video reel
  useEffect(() => {
    if (!isPlaying) return;

    const intervalTime = 50; // update progress every 50ms
    const totalDuration = 4800; // 4.8 seconds per service
    const increment = (intervalTime / totalDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((idx) => (idx + 1) % reelServices.length);
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPlaying, activeIndex]);

  const handleNext = () => {
    setActiveIndex((idx) => (idx + 1) % reelServices.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setActiveIndex((idx) => (idx - 1 + reelServices.length) % reelServices.length);
    setProgress(0);
  };

  return (
    <div className="relative w-full aspect-[4/3] sm:aspect-[16/10.5] max-w-[640px] mx-auto rounded-3xl glass border border-border/80 shadow-2xl overflow-hidden flex flex-col justify-between bg-card/90 backdrop-blur-xl group select-none min-h-[420px] sm:min-h-[470px]">
      
      {/* Ambient Outer Halo */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-primary/30 via-accent/20 to-transparent rounded-3xl blur-2xl opacity-60 pointer-events-none -z-10" />

      {/* 1. Video Player Top Bar */}
      <div className="px-4 py-3 bg-background/85 backdrop-blur-md border-b border-border/70 flex items-center justify-between z-20">
        <div className="flex items-center space-x-2.5">
          <span className="flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-[10px] font-mono font-bold tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
            <span>SERVICES REEL</span>
          </span>
          <span className="text-xs font-mono text-foreground/70 hidden sm:inline">
            CWD Agency Capabilities
          </span>
        </div>

        <div className="flex items-center space-x-3 text-xs font-mono">
          <span className="text-primary font-bold">
            {String(activeIndex + 1).padStart(2, '0')} / {String(reelServices.length).padStart(2, '0')}
          </span>
          <Link
            href="/services"
            className="text-[11px] text-foreground/60 hover:text-primary transition-colors flex items-center space-x-0.5"
          >
            <span>All (9)</span>
            <ExternalLink className="w-3 h-3 ml-0.5" />
          </Link>
        </div>
      </div>

      {/* 2. Main Animated Service Screen with Mock Image */}
      <div className="relative flex-1 overflow-hidden">
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentService.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6"
          >
            {/* Background Service Mock Image with subtle Ken Burns effect */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <motion.div
                initial={{ scale: 1 }}
                animate={{ scale: 1.06 }}
                transition={{ duration: 5, ease: 'easeOut' }}
                className="relative w-full h-full"
              >
                <Image
                  src={currentService.image}
                  alt={`${currentService.title} mock preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 560px"
                  className="object-cover"
                  priority
                />
              </motion.div>
              {/* Dark Gradient Overlay for optimal readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/65 to-background/30" />
            </div>

            {/* Top Badge: Category & Status */}
            <div className="flex items-center justify-between z-10">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-card/90 backdrop-blur-md border border-border/80 text-primary text-xs font-semibold shadow-md">
                <Icon className="w-3.5 h-3.5 text-accent" />
                <span>{currentService.badge}</span>
              </div>

              <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold backdrop-blur-md">
                Verified Delivery
              </div>
            </div>

            {/* Bottom Content: Title, Description & CTA */}
            <div className="space-y-3 z-10 pt-8">
              <div className="space-y-1">
                <h3 className="text-2xl sm:text-3xl font-black text-foreground tracking-tight leading-snug drop-shadow-sm">
                  {currentService.title}
                </h3>
                <p className="text-xs sm:text-sm text-foreground/85 line-clamp-2 leading-relaxed drop-shadow-sm max-w-lg">
                  {currentService.headline}
                </p>
              </div>

              {/* Sub-features pills */}
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {currentService.subServices.slice(0, 4).map((sub, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-card/90 backdrop-blur-md border border-border/70 text-[10.5px] font-medium text-foreground/80 shadow-sm"
                  >
                    {sub}
                  </span>
                ))}
              </div>

              {/* Action Link */}
              <div className="pt-1">
                <Link
                  href={`/services/${currentService.id}`}
                  className="inline-flex items-center space-x-1.5 text-xs font-bold text-primary hover:text-accent transition-colors group/link"
                >
                  <span>Explore {currentService.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* Prev / Next Floating Arrows */}
        <button
          onClick={handlePrev}
          aria-label="Previous Service"
          className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-card/80 hover:bg-card border border-border/80 backdrop-blur-md text-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all z-20 shadow-md hover:scale-105"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next Service"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-card/80 hover:bg-card border border-border/80 backdrop-blur-md text-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all z-20 shadow-md hover:scale-105"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

      </div>

      {/* 3. Video Player Bottom Scrubbing Bar & Service Navigation */}
      <div className="p-3 sm:p-4 bg-background/85 backdrop-blur-md border-t border-border/70 space-y-2.5 z-20">
        
        {/* Progress Bar (Smooth cycle) */}
        <div className="w-full bg-secondary/80 h-1.5 rounded-full overflow-hidden relative">
          <motion.div
            style={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full transition-all duration-75"
          />
        </div>

        {/* Interactive Controls & Service Tabs */}
        <div className="flex items-center justify-between pt-1">
          
          {/* Play/Pause Toggle */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Pause Reel' : 'Play Reel'}
            className="w-7 h-7 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary flex items-center justify-center transition-colors shrink-0 mr-2"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
          </button>

          {/* Service Tabs */}
          <div className="flex items-center space-x-1 sm:space-x-1.5 overflow-x-auto no-scrollbar">
            {reelServices.map((service, idx) => (
              <button
                key={service.id}
                onClick={() => {
                  setActiveIndex(idx);
                  setProgress(0);
                }}
                className={`px-2 sm:px-2.5 py-1 rounded-md text-[10px] font-mono whitespace-nowrap transition-all ${
                  activeIndex === idx
                    ? 'bg-primary text-primary-foreground font-bold shadow-sm'
                    : 'text-foreground/60 hover:text-foreground hover:bg-secondary/80'
                }`}
              >
                {service.title.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* Equalizer Indicator */}
          <div className="flex items-end space-x-0.5 h-3.5 shrink-0 ml-2">
            <span className={`w-0.5 bg-primary rounded-full ${isPlaying ? 'animate-pulse' : 'h-1.5'}`} style={{ height: '60%' }} />
            <span className={`w-0.5 bg-accent rounded-full ${isPlaying ? 'animate-pulse' : 'h-2'}`} style={{ height: '100%', animationDelay: '0.2s' }} />
            <span className={`w-0.5 bg-primary rounded-full ${isPlaying ? 'animate-pulse' : 'h-1'}`} style={{ height: '40%', animationDelay: '0.4s' }} />
            <span className={`w-0.5 bg-accent rounded-full ${isPlaying ? 'animate-pulse' : 'h-2.5'}`} style={{ height: '80%', animationDelay: '0.1s' }} />
          </div>

        </div>

      </div>

    </div>
  );
}
