import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2, TrendingUp } from 'lucide-react';
import { portfolioConfig } from '@/config/portfolio.config';
import { Button } from '@/components/ui/Button';

// Pre-render all dynamic portfolio pages at build time
export function generateStaticParams() {
  return portfolioConfig.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = portfolioConfig.find((p) => p.id === id);
  if (!project) return { title: 'Case Study Not Found' };

  return {
    title: `${project.title} Case Study | CWD Technologies`,
    description: project.description,
  };
}

export default async function PortfolioDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = portfolioConfig.find((p) => p.id === id);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="pt-20">
      
      {/* Navigation Bar */}
      <div className="border-b border-border bg-background/50 backdrop-blur-md sticky top-16 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/portfolio" className="inline-flex items-center text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Portfolio
          </Link>
          <div className="flex gap-2">
            <span className="text-xs font-semibold px-2 py-1 bg-primary/10 text-primary rounded">{project.category}</span>
            <span className="text-xs text-foreground/50 px-2 py-1">{project.industry}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 relative z-20 text-center max-w-4xl">
          <div className="text-sm font-bold text-primary tracking-widest uppercase mb-4">{project.clientName}</div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">{project.title}</h1>
          <p className="text-xl text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            {project.description}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Left Column: Tech Stack & Overview */}
            <div className="lg:col-span-4 space-y-10">
              <div className="glass p-8 rounded-2xl border border-border/50">
                <h3 className="text-lg font-bold mb-6 border-b border-border pb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technology.map((tech) => (
                    <span key={tech} className="text-sm font-medium bg-secondary text-foreground px-3 py-1.5 rounded-md border border-border">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass p-8 rounded-2xl border border-border/50">
                <h3 className="text-lg font-bold mb-6 border-b border-border pb-4">Project Overview</h3>
                <ul className="space-y-4">
                  <li>
                    <span className="text-xs text-foreground/50 block uppercase tracking-wider mb-1">Client</span>
                    <span className="font-medium">{project.clientName}</span>
                  </li>
                  <li>
                    <span className="text-xs text-foreground/50 block uppercase tracking-wider mb-1">Industry</span>
                    <span className="font-medium">{project.industry}</span>
                  </li>
                  <li>
                    <span className="text-xs text-foreground/50 block uppercase tracking-wider mb-1">Service category</span>
                    <span className="font-medium">{project.category}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column: Details */}
            <div className="lg:col-span-8 space-y-16">
              
              <div className="prose prose-invert max-w-none">
                <h2 className="text-3xl font-bold mb-6 flex items-center text-foreground">
                  <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm mr-4 shrink-0">1</span>
                  The Challenge
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="prose prose-invert max-w-none">
                <h2 className="text-3xl font-bold mb-6 flex items-center text-foreground">
                  <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm mr-4 shrink-0">2</span>
                  Our Solution
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              <div className="prose prose-invert max-w-none">
                <h2 className="text-3xl font-bold mb-8 flex items-center text-foreground">
                  <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm mr-4 shrink-0">3</span>
                  The Results
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
                  {project.results.map((result, idx) => (
                    <div key={idx} className="bg-primary/5 border border-primary/20 rounded-2xl p-6 text-center hover:bg-primary/10 transition-colors">
                      <TrendingUp className="w-6 h-6 text-primary mx-auto mb-4 opacity-50" />
                      <div className="text-4xl font-bold text-primary mb-2">{result.metric}</div>
                      <div className="text-sm text-foreground/80 font-medium">{result.description}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Hero Image Showcase */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="relative aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border border-border/50">
            <Image 
              src={project.image}
              alt={`${project.title} Interface`}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-4xl font-bold mb-6">Inspired by this project?</h2>
          <p className="text-lg text-foreground/70 mb-10">
            Let's discuss how we can build a scalable, high-performance solution for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/start">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full">Start Your Project</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full">Contact Sales</Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
