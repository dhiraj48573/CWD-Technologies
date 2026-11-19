import React from 'react';
import Link from 'next/link';
import { industriesConfig } from '@/config/industries.config';
import { siteConfig } from '@/config/site.config';
import { Button } from '@/components/ui/Button';
import { ArrowRight, CheckCircle2, MessageCircle, Sparkles, Building2 } from 'lucide-react';

export const metadata = {
  title: 'Industry Digital Solutions & Custom Software | CWD Technologies Haridwar',
  description:
    'Custom digital solutions engineered for 10 key industries: Healthcare, Education, Salons, Gyms, Hospitality, Retail, Real Estate, Startups, Professional Services, and Local SMBs in Haridwar, Uttarakhand, and across India.',
  keywords: [
    'Healthcare clinic software Haridwar',
    'Coaching institute website Uttarakhand',
    'Salon appointment booking software',
    'Gym management software Haridwar',
    'Hotel resort website design Uttarakhand',
    'Retail ecommerce store developer India',
    'Real estate property portal development',
    'Startup MVP development India',
    'Local business website Haridwar',
    'CWD Technologies industries',
  ],
  alternates: {
    canonical: `${siteConfig.url}/industries`,
  },
  openGraph: {
    title: 'Industry Digital Solutions & Custom Software | CWD Technologies',
    description:
      'Custom digital solutions engineered for 10 key industries in Haridwar, Uttarakhand & across India.',
    url: `${siteConfig.url}/industries`,
    siteName: siteConfig.companyName,
  },
};

export default function IndustriesPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Domain Specialization</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground">
            Industries We Serve
          </h1>
          <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
            Every sector has unique customer expectations, operational workflows, and technical demands. We engineer tailored software architectures, booking workflows, and conversion funnels to fit your exact domain.
          </p>
        </div>

        {/* 10 Industries Detailed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industriesConfig.map((industry, index) => {
            const Icon = industry.icon;
            const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
              `Hello CWD Technologies, I am interested in your digital solutions for ${industry.name}. I would like to discuss my project.`
            )}`;

            return (
              <div
                key={industry.id}
                id={industry.id}
                className="scroll-mt-24 rounded-3xl glass border border-border/80 p-6 sm:p-8 hover:border-primary/50 transition-all flex flex-col justify-between hover:shadow-xl group"
              >
                <div>
                  {/* Top Bar: Icon & Category Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs text-foreground/50 font-bold">
                      {String(index + 1).padStart(2, '0')} / 10
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {industry.name}
                  </h2>

                  <p className="text-sm text-foreground/75 leading-relaxed mb-6">
                    {industry.shortDesc}
                  </p>

                  {/* Solutions List */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-border/50">
                    <span className="text-xs font-bold uppercase tracking-wider text-foreground/60 block mb-2">
                      Engineered Capabilities:
                    </span>
                    {industry.solutions.map((sol, sIdx) => (
                      <div key={sIdx} className="flex items-start text-xs sm:text-sm text-foreground/80">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mr-2.5 mt-0.5" />
                        <span>{sol}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {industry.featuredTech.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-secondary text-foreground/80 border border-border/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Bottom CTA Actions */}
                <div className="pt-4 border-t border-border/50 flex flex-wrap items-center gap-3">
                  <Link href={`/start?industry=${industry.id}`}>
                    <Button size="sm" className="font-semibold text-xs">
                      Start {industry.name} Project
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Button>
                  </Link>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs border-emerald-500/50 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10"
                    >
                      <MessageCircle className="w-3.5 h-3.5 mr-1.5" />
                      Discuss on WhatsApp
                    </Button>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Consultation CTA */}
        <div className="p-8 sm:p-12 rounded-3xl glass border border-primary/30 text-center max-w-4xl mx-auto space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto">
            <Building2 className="w-6 h-6" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-foreground">
            Don't See Your Specific Industry Listed?
          </h2>
          <p className="text-sm sm:text-base text-foreground/75 max-w-xl mx-auto">
            We build custom, bespoke business software and web architectures from first principles. Tell us about your operational workflow and we will engineer a custom solution.
          </p>
          <div className="pt-2">
            <Link href="/start">
              <Button size="lg" className="font-semibold shadow-md">
                Schedule a Requirement Call
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
