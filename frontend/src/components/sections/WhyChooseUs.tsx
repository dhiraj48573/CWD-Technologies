'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, ShieldCheck, HeartHandshake, Code2, LineChart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';

const reasons = [
  {
    title: "Business-Focused Solutions",
    description: "We don't just write code. We build digital products engineered to increase your revenue and automate operations.",
    icon: LineChart
  },
  {
    title: "Modern Technology Stack",
    description: "We use the latest frameworks like Next.js, React, and robust Cloud infrastructure for maximum performance.",
    icon: Code2
  },
  {
    title: "AI-Ready Architecture",
    description: "Future-proof your business with software that is pre-configured for AI automation and integrations.",
    icon: Zap
  },
  {
    title: "Transparent Pricing",
    description: "No hidden costs. We provide clear, itemized quotations and realistic timelines before starting any work.",
    icon: ShieldCheck
  },
  {
    title: "Long-Term Partnership",
    description: "From discovery to deployment and post-launch support, we act as your dedicated technical partner.",
    icon: HeartHandshake
  },
  {
    title: "Guaranteed Quality",
    description: "Rigorous testing protocols ensure your application is secure, responsive, and bugs-free upon launch.",
    icon: CheckCircle2
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose Us</h2>
          <p className="text-lg text-foreground/70">
            We bridge the gap between complex technology and your business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full glass border-border/50 hover:border-primary/40 transition-colors group">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-lg bg-background border border-border flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{reason.title}</h3>
                    <p className="text-foreground/70">{reason.description}</p>
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
