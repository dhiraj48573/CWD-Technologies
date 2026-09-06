'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/Button';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-background min-h-[90vh] flex items-center pt-20 pb-16 md:pt-32 md:pb-24 perspective-1000">
      {/* 3D Animated Background Grid */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-20"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-accent/20 blur-[120px]" />
      </motion.div>

      {/* Floating 3D Elements */}
      <motion.div
        animate={{ y: [-10, 10, -10], rotateX: [0, 10, 0], rotateY: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[10%] w-32 h-32 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-xl z-0 hidden lg:block"
      />
      <motion.div
        animate={{ y: [10, -10, 10], rotateX: [10, 0, 10], rotateY: [-15, 0, -15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 left-[10%] w-24 h-24 bg-gradient-to-tr from-accent/30 to-primary/30 rounded-full blur-xl z-0 hidden lg:block"
      />

      <motion.div 
        style={{ opacity: opacityText }}
        className="container relative z-10 mx-auto max-w-7xl px-4 flex flex-col items-center text-center transform-gpu"
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.3)]"
        >
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
          Web • Mobile • Software • AI • Automation • Digital Growth
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.8, delay: 0.1, type: "spring" }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground max-w-4xl mb-6 drop-shadow-2xl"
        >
          We Build Digital Products That{' '}
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            Move Businesses Forward.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-10 leading-relaxed drop-shadow-md"
        >
          From websites and software to mobile apps, AI solutions and digital marketing — we design, build, automate and grow modern businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link href="/quote" className="w-full sm:w-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
            <Button size="lg" className="relative w-full shadow-2xl overflow-hidden">
              <span className="relative z-10">Start Your Project</span>
            </Button>
          </Link>
          <Link href="/services" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full bg-background/50 backdrop-blur-md">
              Explore Services
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
