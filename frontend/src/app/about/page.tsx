'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Code2, Rocket, Shield, Target, Users } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { developmentProcess, marketingProcess, aiProcess } from '@/config/timeline.config';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const coreValues = [
  { icon: Shield, title: "Uncompromising Quality", desc: "We build robust, scalable architectures that stand the test of time, refusing to cut corners on code quality or security." },
  { icon: Target, title: "Results-Driven", desc: "Our success is measured by your business growth. Every line of code and marketing campaign is optimized for ROI." },
  { icon: Users, title: "True Partnership", desc: "We don't just act as vendors; we integrate as an extension of your team, providing transparent communication and strategic guidance." },
  { icon: Rocket, title: "Relentless Innovation", desc: "We stay at the bleeding edge of AI, web, and mobile technologies to ensure you maintain a competitive advantage." },
];

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] right-0 w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span>ABOUT {siteConfig.companyName.toUpperCase()}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 leading-[1.1]">
              We engineer <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">digital growth.</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-6">
              We are a premier technology and digital agency that partners with ambitious brands to transform complex ideas into elegant, scalable digital products.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed mb-10">
              From enterprise software and AI integration to high-converting marketing campaigns, our approach is deeply technical, relentlessly professional, and built purely for business scale.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/portfolio">
                <Button size="lg" className="h-14 px-8 rounded-full">View Our Work</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="h-14 px-8 rounded-full">Contact Us</Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square md:aspect-[4/5] lg:aspect-square rounded-[2rem] overflow-hidden shadow-2xl border border-border/50">
              <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" 
                alt="Our Team at Work" 
                fill 
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent" />
            </div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-8 -left-8 glass p-6 rounded-2xl border border-border/50 shadow-2xl max-w-[200px] hidden md:block">
              <div className="text-4xl font-black text-primary mb-1">100%</div>
              <div className="text-sm font-medium text-foreground/80">Client Satisfaction & Delivery Rate</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 md:py-32 container mx-auto px-4 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Core Values</h2>
          <p className="text-lg text-foreground/70">The principles that guide every line of code we write and every strategy we deploy.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreValues.map((value, idx) => {
            const Icon = value.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-8 rounded-3xl border border-border/50 hover:border-primary/50 transition-colors group"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{value.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Development Process Timeline */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">How We Build</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Our battle-tested, 8-step engineering process ensures predictable, high-quality delivery from concept to deployment.
            </p>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/30 before:to-transparent">
            {developmentProcess.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
                >
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-colors duration-300 z-10">
                    {idx + 1}
                  </div>
                  
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass p-6 md:p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-xl">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors">{step.title}</h3>
                      <span className="text-4xl font-black text-foreground/5">{step.step}</span>
                    </div>
                    <p className="text-foreground/70 leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology Ecosystem */}
      <section className="py-32 container mx-auto px-4 max-w-7xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Technology Ecosystem</h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-16">
          We utilize modern, scalable, and secure technologies to build solutions that perform exceptionally well under high loads.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass p-8 rounded-3xl border border-border/50 hover:border-primary/50 transition-all">
            <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-6">
              <Code2 size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">Frontend & Mobile</h3>
            <ul className="space-y-3">
              {['React.js', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'React Native'].map(t => (
                <li key={t} className="flex items-center text-foreground/70"><CheckCircle2 className="w-4 h-4 mr-3 text-primary" /> {t}</li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass p-8 rounded-3xl border border-border/50 hover:border-primary/50 transition-all">
            <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-xl flex items-center justify-center mb-6">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">Backend & API</h3>
            <ul className="space-y-3">
              {['Node.js', 'Express', 'Python / FastAPI', 'GraphQL', 'RESTful APIs'].map(t => (
                <li key={t} className="flex items-center text-foreground/70"><CheckCircle2 className="w-4 h-4 mr-3 text-primary" /> {t}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="glass p-8 rounded-3xl border border-border/50 hover:border-primary/50 transition-all">
            <div className="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center mb-6">
              <Rocket size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">Cloud & Database</h3>
            <ul className="space-y-3">
              {['AWS & Vercel', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker'].map(t => (
                <li key={t} className="flex items-center text-foreground/70"><CheckCircle2 className="w-4 h-4 mr-3 text-primary" /> {t}</li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="glass p-8 rounded-3xl border border-border/50 hover:border-primary/50 transition-all">
            <div className="w-12 h-12 bg-purple-500/10 text-purple-500 rounded-xl flex items-center justify-center mb-6">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold mb-4">AI & Marketing</h3>
            <ul className="space-y-3">
              {['OpenAI / LLMs', 'Pinecone (Vector DB)', 'Meta Ads API', 'Google Ads', 'SEO Architectures'].map(t => (
                <li key={t} className="flex items-center text-foreground/70"><CheckCircle2 className="w-4 h-4 mr-3 text-primary" /> {t}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 mb-20">
        <div className="container mx-auto px-4 text-center max-w-4xl relative">
          <div className="absolute inset-0 bg-primary/5 rounded-[3rem] -z-10 transform -rotate-1" />
          <div className="glass p-12 md:p-20 rounded-[3rem] border border-border/50">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to scale your business?</h2>
            <p className="text-lg text-foreground/70 mb-10 max-w-2xl mx-auto">
              Whether you need a complex web application, a mobile app, or a complete digital transformation, we have the technical expertise to deliver.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/quote">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full">Get a Quote</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full">Talk to Sales</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
