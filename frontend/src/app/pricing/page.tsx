import React from 'react';
import Link from 'next/link';
import { pricingConfig } from '@/config/pricing.config';
import { siteConfig } from '@/config/site.config';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CheckCircle2, Star, Sparkles, AlertCircle, ArrowRight, HelpCircle } from 'lucide-react';

export const metadata = {
  title: 'Transparent Pricing & Packages | CWD Technologies Haridwar',
  description:
    'Transparent starting prices for Website Development, Custom Software, AI Automation, Mobile Apps, and Digital Marketing in Haridwar, Uttarakhand & globally. Zero hidden fees, clear milestone payments.',
  keywords: [
    'Website development price Haridwar',
    'Website design cost India',
    'Custom software development rates',
    'E-commerce website cost Uttarakhand',
    'Digital marketing package pricing',
    'CWD Technologies pricing',
  ],
  alternates: {
    canonical: `${siteConfig.url}/pricing`,
  },
  openGraph: {
    title: 'Transparent Pricing & Packages | CWD Technologies',
    description:
      'Clear, honest starting estimates for web development, software, AI solutions, and digital marketing.',
    url: `${siteConfig.url}/pricing`,
    siteName: siteConfig.companyName,
  },
};

export default function PricingPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 space-y-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Honest & Transparent Engagements</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground">
            Clear Pricing. <span className="gradient-text">Zero Surprises.</span>
          </h1>
          <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
            We provide upfront, transparent starting estimates for common project packages, followed by detailed milestone agreements before work begins.
          </p>
          <div className="pt-2">
            <Link href="/quote">
              <Button size="lg" className="font-semibold shadow-md">
                Build a Custom Itemized Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Featured Starter & Business Website Tiers */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Website Packages & Deliverables
            </h2>
            <p className="text-xs sm:text-sm text-foreground/70 mt-1">
              Estimated timelines, scope of pages, and technical deliverables for web development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto pt-4">
            
            {/* Starter Website */}
            <div className="rounded-3xl glass border border-border/80 p-8 flex flex-col justify-between hover:border-primary/50 transition-all">
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold uppercase text-foreground/60 block">
                  Starter Website
                </span>
                <div className="text-3xl sm:text-4xl font-black text-foreground">
                  ₹12,999
                </div>
                <p className="text-xs text-foreground/70">
                  Ideal for small local businesses establishing their first professional web presence.
                </p>

                <div className="pt-4 border-t border-border/60 space-y-2 text-xs sm:text-sm text-foreground/80">
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-primary mr-2 shrink-0" />
                    <span>Up to 3–4 Responsive Pages</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-primary mr-2 shrink-0" />
                    <span>Mobile-First Responsive Layout</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-primary mr-2 shrink-0" />
                    <span>WhatsApp Direct Contact Link</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-primary mr-2 shrink-0" />
                    <span>Basic On-Page Technical SEO</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-primary mr-2 shrink-0" />
                    <span>Est. Delivery: 7–10 Business Days</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <Link href="/start?package=Starter+Website" className="block">
                  <Button variant="outline" className="w-full font-semibold">
                    Select Starter Plan
                  </Button>
                </Link>
              </div>
            </div>

            {/* Business Website (Popular) */}
            <div className="rounded-3xl glass border-2 border-primary p-8 flex flex-col justify-between shadow-xl relative scale-[1.02]">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md flex items-center">
                <Star className="w-3 h-3 mr-1 fill-current" /> Most Popular for Local Business
              </div>

              <div className="space-y-4">
                <span className="text-xs font-mono font-bold uppercase text-primary block">
                  Business Website
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-foreground/40 line-through text-lg font-medium">₹29,999</span>
                  <div className="text-3xl sm:text-4xl font-black text-primary">₹19,999</div>
                </div>
                <p className="text-xs text-foreground/75">
                  High-converting corporate web platform designed to capture inquiries and rank locally.
                </p>

                <div className="pt-4 border-t border-border/60 space-y-2 text-xs sm:text-sm text-foreground/80">
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-primary mr-2 shrink-0" />
                    <span>5–7 Pages + Dynamic Service Cards</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-primary mr-2 shrink-0" />
                    <span>Next.js 16 Fast Edge Performance</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-primary mr-2 shrink-0" />
                    <span>Google Business Profile SEO Sync</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-primary mr-2 shrink-0" />
                    <span>Multi-Field Validated Inquiry Form</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-primary mr-2 shrink-0" />
                    <span>Est. Delivery: 2–3 Weeks</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <Link href="/start?package=Business+Website" className="block">
                  <Button className="w-full font-semibold shadow-md">
                    Claim Launch Offer
                  </Button>
                </Link>
              </div>
            </div>

            {/* E-Commerce Website */}
            <div className="rounded-3xl glass border border-border/80 p-8 flex flex-col justify-between hover:border-primary/50 transition-all">
              <div className="space-y-4">
                <span className="text-xs font-mono font-bold uppercase text-foreground/60 block">
                  E-Commerce Storefront
                </span>
                <div className="text-3xl sm:text-4xl font-black text-foreground">
                  ₹24,999 <span className="text-xs font-normal text-foreground/50">starts from</span>
                </div>
                <p className="text-xs text-foreground/70">
                  Complete online store with seamless UPI & card checkout for D2C brands.
                </p>

                <div className="pt-4 border-t border-border/60 space-y-2 text-xs sm:text-sm text-foreground/80">
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-primary mr-2 shrink-0" />
                    <span>Product Catalog (Up to 50 items)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-primary mr-2 shrink-0" />
                    <span>Razorpay / UPI Payment Gateway</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-primary mr-2 shrink-0" />
                    <span>Automated Admin Order Management</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-primary mr-2 shrink-0" />
                    <span>Shiprocket Courier Sync Setup</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 text-primary mr-2 shrink-0" />
                    <span>Est. Delivery: 3–4 Weeks</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <Link href="/start?package=E-Commerce+Store" className="block">
                  <Button variant="outline" className="w-full font-semibold">
                    Select E-Commerce
                  </Button>
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* All Service Categories Pricing Breakdown */}
        <div className="space-y-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              Comprehensive Service Tiers
            </h2>
            <p className="text-xs sm:text-sm text-foreground/70 mt-1">
              Indicative base pricing for software, mobile, AI, and marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(pricingConfig.services).map((category, idx) => (
              <div key={idx} className="rounded-2xl glass border border-border/70 p-6 space-y-4">
                <h3 className="font-bold text-lg text-foreground pb-2 border-b border-border/60">
                  {category.name}
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm">
                  {category.tiers.slice(0, 4).map((tier: any, tIdx: number) => (
                    <li key={tIdx} className="flex items-center justify-between text-foreground/80">
                      <span className="truncate pr-2">{tier.name}</span>
                      <span className="font-mono font-bold text-primary shrink-0">
                        {tier.isStartingPrice ? 'From ' : ''}₹{tier.price.toLocaleString()}
                        {tier.isMonthly ? '/mo' : ''}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <Link href={`/start?service=${category.name.toLowerCase().replace(/\s+/g, '-')}`} className="block">
                    <Button variant="outline" size="sm" className="w-full text-xs">
                      Inquire About {category.name}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transparent Disclaimers & Payment Policies */}
        <div className="p-8 rounded-3xl glass border border-border/80 space-y-6 max-w-4xl mx-auto">
          <div className="flex items-center space-x-2.5 text-primary font-bold text-sm uppercase tracking-wider">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>Honest Commercial Disclaimers & Policies</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-foreground/75 leading-relaxed">
            <div className="space-y-2">
              <h4 className="font-bold text-foreground">Third-Party & Advertising Costs</h4>
              <p>
                Third-party hosting (Hostinger, AWS, Vercel Pro), domain registration, and advertising budgets (Google Ads, Meta Ads) are paid directly to the respective service providers. We never charge hidden markups on external ad spend.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-foreground">Milestone Payment Structure</h4>
              <p>
                Standard software projects follow a 40% advance, 30% development milestone, 20% UAT testing, and 10% final deployment release structure. This protects both client and agency throughout the engineering lifecycle.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-foreground">Revisions & Scope Changes</h4>
              <p>
                Every project includes defined revision rounds during the design phase. Extra feature additions outside the agreed Scope of Work are estimated as separate change requests to keep timelines realistic.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-bold text-foreground">Realistic Outcomes Only</h4>
              <p>
                We do not promise "guaranteed #1 Google rankings in 3 days" or "unlimited revisions forever". We deliver proven, clean code, sound technical SEO, and reliable architectures built for authentic growth.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
