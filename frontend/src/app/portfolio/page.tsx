'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { portfolioConfig } from '@/config/portfolio.config';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const categories = ['All', 'Web', 'Software', 'Mobile', 'AI', 'Marketing'];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = portfolioConfig.filter(
    project => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <div className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-40 right-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">Our Work</h1>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              We partner with ambitious brands to create digital products that solve complex problems and drive measurable growth.
            </p>
          </motion.div>

          {/* Filter System */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105'
                    : 'bg-secondary/50 text-foreground/70 hover:bg-secondary hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              // Create an alternating featured layout effect
              const isFeatured = index === 0 && activeCategory === 'All';
              
              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`group cursor-pointer ${isFeatured ? 'md:col-span-2' : ''}`}
                >
                  <Link href={`/portfolio/${project.id}`} className="block h-full">
                    <div className="relative overflow-hidden rounded-2xl glass border border-border/50 hover:border-primary/50 transition-all duration-500 h-full flex flex-col">
                      
                      {/* Image Wrapper */}
                      <div className={`relative w-full overflow-hidden ${isFeatured ? 'h-80 md:h-[500px]' : 'h-64'}`}>
                        <Image 
                          src={project.image} 
                          alt={project.title} 
                          fill 
                          className="object-cover transition-transform duration-700 group-hover:scale-110" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                          <div className="bg-background text-foreground px-6 py-3 rounded-full font-semibold flex items-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                            Read Case Study <ArrowUpRight className="ml-2 w-4 h-4" />
                          </div>
                        </div>

                        {/* Top Tags */}
                        <div className="absolute top-6 left-6 flex gap-2">
                          <span className="text-xs font-semibold px-3 py-1 bg-background/80 backdrop-blur-md rounded-full text-primary shadow-sm border border-border/50">
                            {project.category}
                          </span>
                          <span className="text-xs font-medium px-3 py-1 bg-background/80 backdrop-blur-md rounded-full text-foreground/80 shadow-sm border border-border/50">
                            {project.industry}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`p-8 flex flex-col flex-1 ${isFeatured ? 'md:w-3/4' : ''}`}>
                        <div className="text-sm font-medium text-primary mb-2">{project.clientName}</div>
                        <h3 className={`${isFeatured ? 'text-3xl' : 'text-2xl'} font-bold mb-4 tracking-tight group-hover:text-primary transition-colors duration-300`}>
                          {project.title}
                        </h3>
                        <p className="text-foreground/70 mb-8 line-clamp-3 leading-relaxed flex-1">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.technology.map(tech => (
                            <span key={tech} className="text-xs bg-secondary/80 text-foreground/80 px-2.5 py-1 rounded-md border border-border/50">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-foreground/50">
            No projects found in this category.
          </div>
        )}

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center glass p-12 md:p-16 rounded-3xl max-w-4xl mx-auto border border-border/50 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 opacity-50" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Have a project in mind?</h2>
            <p className="text-lg text-foreground/70 mb-10 max-w-2xl mx-auto">
              We take pride in building scalable, secure, and modern solutions that drive real business results. Let's discuss how we can help you achieve your goals.
            </p>
            <Link href="/start">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full">Start Your Project</Button>
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
