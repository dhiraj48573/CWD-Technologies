'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { servicesConfig } from '@/config/services.config';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function ServicesOverview() {
  return (
    <section className="py-20 bg-background/50 relative overflow-hidden">


      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Core Ecosystem</h2>
          <p className="text-lg text-foreground/70">
            A complete suite of digital services designed to build, market, and grow your business under one roof.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000">
          {servicesConfig.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30, rotateX: 20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, rotateX: 5, rotateY: -5, scale: 1.02 }}
                className="h-full transform-gpu"
              >
                <Card className="h-full glass relative overflow-hidden border-border/50 hover:border-primary/50 hover:shadow-[0_0_40px_-15px_rgba(59,130,246,0.3)] transition-all duration-500 group flex flex-col cursor-pointer" onClick={() => window.location.href = `/services/${service.id}`}>
                  {/* Subtle top gradient line */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  
                  {/* Background Ambient Glow on Hover */}
                  <div className="absolute -inset-24 bg-primary/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                  <CardHeader className="relative z-10 pb-4">
                    <div className="h-14 w-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all duration-300">
                      <Icon size={28} />
                    </div>
                    <CardTitle className="text-2xl font-bold tracking-tight">{service.title}</CardTitle>
                    <CardDescription className="text-base mt-3 leading-relaxed text-foreground/70">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 flex-1 flex flex-col justify-between pt-0">
                    <ul className="space-y-3 mb-8">
                      {service.features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="flex items-center text-sm font-medium text-foreground/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mr-3 group-hover:bg-primary transition-colors duration-300" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link href={`/services/${service.id}`} className="inline-flex items-center text-sm font-bold text-primary group-hover:text-primary/80 transition-colors">
                      Learn More 
                      <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
