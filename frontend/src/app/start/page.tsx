import React from 'react';
import { ProjectIntakeForm } from '@/components/forms/ProjectIntakeForm';

export const metadata = {
  title: 'Start Your Project | CWD Technologies',
  description: 'Submit your project requirements and get a detailed consultation.',
};

export default function StartProjectPage() {
  return (
    <div className="py-20 md:py-32 bg-background/50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-secondary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-4xl px-4 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Amazing</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Fill out the form below with your project details. The more information you provide, the better we can prepare for our initial consultation.
          </p>
        </div>

        <ProjectIntakeForm />
      </div>
    </div>
  );
}
