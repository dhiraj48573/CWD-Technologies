import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ArrowLeft,
  Sparkles,
  Layers,
  MessageCircle,
} from 'lucide-react';

import { servicesConfig } from '@/config/services.config';
import { pricingConfig } from '@/config/pricing.config';
import { portfolioConfig } from '@/config/portfolio.config';
import { siteConfig } from '@/config/site.config';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

// Pre-render all dynamic service pages at build time
export function generateStaticParams() {
  return servicesConfig.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = servicesConfig.find((s) => s.id === id);
  if (!service) return { title: 'Service Not Found | CWD Technologies' };

  const canonicalUrl = `${siteConfig.url}/services/${service.id}`;

  return {
    title: service.seoTitle || `${service.title} | CWD Technologies`,
    description: service.metaDescription || service.description,
    keywords: [
      ...(service.targetKeywords || []),
      service.title,
      `${service.title} in Haridwar`,
      `${service.title} Uttarakhand`,
      ...service.subServices,
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: service.seoTitle || `${service.title} | CWD Technologies`,
      description: service.metaDescription || service.description,
      url: canonicalUrl,
      siteName: siteConfig.companyName,
      type: 'website',
      images: [
        {
          url: service.image || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.seoTitle || `${service.title} | CWD Technologies`,
      description: service.metaDescription || service.description,
      images: [service.image || siteConfig.ogImage],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const service = servicesConfig.find((s) => s.id === id);

  if (!service) {
    notFound();
  }

  type PricingCategory = keyof typeof pricingConfig.services;
  const pricingData = pricingConfig.services[service.pricingKey as PricingCategory];
  const Icon = service.icon;

  // Filter relevant portfolio projects
  const relatedProjects = portfolioConfig.filter((p) => {
    if (service.id === 'website-development') return p.category === 'Business Websites';
    if (service.id === 'software-development') return p.category === 'Custom Software';
    if (service.id === 'mobile-app-development') return p.category === 'Healthcare' || p.category === 'Business Websites';
    if (service.id === 'ai-solutions') return p.category === 'AI & Automation';
    if (service.id === 'e-commerce') return p.category === 'E-Commerce';
    return true;
  }).slice(0, 2);

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    `Hello CWD Technologies, I am interested in your ${service.title} service. I would like to discuss my project requirements.`
  )}`;

  // Schema.org Structured Data
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: siteConfig.companyName,
      telephone: siteConfig.contact.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Haridwar',
        addressRegion: 'Uttarakhand',
        addressCountry: 'IN',
      },
    },
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.title} Offerings`,
      itemListElement: service.subServices.map((sub, i) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: sub,
        },
      })),
    },
  };

  // Schema.org FAQ Schema
  const faqJsonLd = service.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: service.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      }
    : null;

  // Schema.org Breadcrumb
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteConfig.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: `${siteConfig.url}/services`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: `${siteConfig.url}/services/${service.id}`,
      },
    ],
  };

  return (
    <div className="pt-8 pb-20 md:pb-32">
      {/* Schema.org Service & Rich Snippet Injections */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Top Back Nav */}
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 mb-6">
        <Link
          href="/services"
          className="inline-flex items-center text-xs sm:text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5" />
          Back to All Services
        </Link>
      </div>

      {/* 1. Hero Section (Headline & Solution) */}
      <section className="relative overflow-hidden py-12 md:py-20 bg-secondary/20 border-y border-border/50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl space-y-6">
            
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
              <Icon className="w-3.5 h-3.5" />
              <span>{service.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-[1.12]">
              {service.headline}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-foreground/75 leading-relaxed">
              {service.description}
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              <Link href={`/start?service=${service.id}`}>
                <Button size="lg" className="font-semibold shadow-md">
                  Start Your {service.title}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg" className="border-emerald-500/50 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Discuss on WhatsApp
                </Button>
              </a>
              <Link href="/quote">
                <Button variant="outline" size="lg">
                  Instant Quotation
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* 2 & 3. Problem vs Solution Comparison */}
      <section className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* The Problem */}
            <div className="rounded-2xl border border-rose-500/30 bg-rose-500/5 p-6 sm:p-8 space-y-4">
              <div className="inline-flex items-center space-x-2 text-rose-500 font-bold text-xs uppercase tracking-wider">
                <AlertCircle className="w-4 h-4" />
                <span>The Core Business Problem</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                Why Standard Approaches Fail
              </h3>
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                {service.businessProblem}
              </p>
            </div>

            {/* Our Solution */}
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 sm:p-8 space-y-4">
              <div className="inline-flex items-center space-x-2 text-emerald-500 font-bold text-xs uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4" />
                <span>The CWD Technologies Solution</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                How We Engineer Results
              </h3>
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                {service.ourSolution}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4 & 5. Key Features & Sub-Services */}
      <section className="py-16 bg-secondary/30 border-y border-border/50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Features (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold tracking-widest text-primary uppercase block">
                Technical Architecture
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground">
                Key Features Engineered Into Every Build
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.features.map((feature, i) => (
                  <div key={i} className="p-4 rounded-xl glass border border-border/70 flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mr-2.5 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-foreground/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sub-Services Scope (5 cols) */}
            <div className="lg:col-span-5 rounded-2xl glass border border-border/80 p-6 sm:p-8 space-y-4">
              <div className="inline-flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-wider">
                <Layers className="w-4 h-4" />
                <span>Specialized Offerings</span>
              </div>
              <h3 className="text-xl font-bold text-foreground">Deliverables in This Category</h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-foreground/75 divide-y divide-border/40">
                {service.subServices.map((sub, i) => (
                  <li key={i} className="pt-2 flex items-center justify-between">
                    <span>{sub}</span>
                    <span className="text-primary font-mono text-[10px]">Ready</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Benefits (Strategic Value) */}
      <section className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-2">
              Commercial Impact
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground">
              Direct Benefits for Your Enterprise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="p-6 rounded-2xl glass border border-border/70 hover:border-primary/50 transition-all">
                <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-foreground/75 leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Development Process */}
      <section className="py-16 bg-secondary/20 border-y border-border/50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-2">
              Execution Roadmap
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground">
              How We Deliver {service.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.workflow.map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl glass border border-border/70 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-2xl font-black text-primary/40 block mb-3">
                    0{idx + 1}
                  </span>
                  <h3 className="font-bold text-base text-foreground mb-2">{step.step}</h3>
                  <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Pricing Tiers */}
      {pricingData && (
        <section className="py-16 md:py-24">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-2">
                Clear Packages
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground">
                Transparent {pricingData.name} Pricing
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {pricingData.tiers.slice(0, 3).map((tier: any, i: number) => (
                <Card key={i} className="glass flex flex-col justify-between border-border/70 hover:border-primary/50 transition-all">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">{tier.name}</CardTitle>
                    <p className="text-xs text-foreground/60">{tier.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-black text-primary mb-1">
                      ₹{tier.price.toLocaleString()}
                      {tier.isMonthly && <span className="text-sm font-normal text-foreground/60">/mo</span>}
                    </div>
                    <span className="text-[10px] uppercase font-bold text-foreground/50 tracking-wider">
                      {tier.isStartingPrice ? 'Starting Base Cost' : 'Fixed Scope'}
                    </span>
                  </CardContent>
                  <CardFooter className="pt-2">
                    <Link href={`/start?service=${service.id}&package=${encodeURIComponent(tier.name)}`} className="w-full">
                      <Button className="w-full font-semibold" variant={i === 1 ? 'default' : 'outline'}>
                        Select Package
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. Relevant Portfolio Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-secondary/20 border-y border-border/50">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-2">
                Demonstrated Capability
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground">
                Related Case Studies
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {relatedProjects.map((p) => (
                <Link key={p.id} href={`/portfolio/${p.id}`} className="group block">
                  <div className="rounded-2xl glass border border-border/70 overflow-hidden hover:border-primary/50 transition-all">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-mono font-bold text-primary block mb-1">{p.category}</span>
                      <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
                      <p className="text-xs sm:text-sm text-foreground/70 line-clamp-2">{p.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 10. Service Specific FAQs */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest text-primary uppercase block mb-2">
              Common Inquiries
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground">
              Frequently Asked Questions About {service.title}
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, fIdx) => (
              <div key={fIdx} className="p-6 rounded-2xl glass border border-border/70 space-y-2">
                <h3 className="font-bold text-base sm:text-lg text-foreground flex items-center">
                  <HelpCircle className="w-5 h-5 text-primary shrink-0 mr-2.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-sm text-foreground/75 leading-relaxed pl-7.5">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Final CTA */}
      <section className="container max-w-5xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl glass border border-primary/40 p-8 sm:p-12 text-center shadow-xl space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black text-foreground">
            Ready to Engineer Your {service.title}?
          </h2>
          <p className="text-base text-foreground/75 max-w-xl mx-auto">
            Book a free consultation with our engineering team to review your requirements, architecture, and timeline.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link href={`/start?service=${service.id}`}>
              <Button size="lg" className="font-semibold">
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="border-emerald-500/50 text-emerald-600 dark:text-emerald-400">
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
