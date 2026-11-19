import React, { Suspense } from 'react';
import { ProjectIntakeForm } from '@/components/forms/ProjectIntakeForm';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Start Your Project | CWD Technologies',
  description:
    'Submit your project requirements and receive a comprehensive technical proposal and itemized quotation from CWD Technologies.',
};

export default function StartProjectPage() {
  return (
    <div className="py-16 md:py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="container max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kickstart Your Project</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-foreground">
            Let's Build Something <span className="gradient-text">Exceptional</span>
          </h1>
          <p className="text-sm sm:text-base text-foreground/75 max-w-xl mx-auto leading-relaxed">
            Fill out the form below with your project details. The more information you provide, the faster our engineering team can prepare an accurate architecture proposal and quote.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-foreground/70">
            <span className="flex items-center">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary mr-1.5" />
              Response within 24 hours
            </span>
            <span className="flex items-center">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary mr-1.5" />
              Itemized milestone quotation
            </span>
            <span className="flex items-center">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary mr-1.5" />
              Confidentiality guaranteed
            </span>
          </div>
        </div>

        {/* Multi-field Intake Form */}
        <Suspense fallback={<div className="p-8 text-center text-foreground/50">Loading intake form...</div>}>
          <ProjectIntakeForm />
        </Suspense>

      </div>
    </div>
  );
}
