import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

import { servicesConfig } from '@/config/services.config';
import { pricingConfig } from '@/config/pricing.config';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/config/site.config';

// Pre-render all dynamic service pages at build time
export function generateStaticParams() {
  return servicesConfig.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = servicesConfig.find((s) => s.id === id);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: `${service.title} | CWD Technologies`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const service = servicesConfig.find((s) => s.id === id);
  
  if (!service) {
    notFound();
  }

  // Type assertion to ensure we can index into pricingConfig.services safely
  type PricingCategory = keyof typeof pricingConfig.services;
  const pricingData = pricingConfig.services[service.pricingKey as PricingCategory];
  const Icon = service.icon;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/90 z-10" />
          <Image 
            src={service.image}
            alt={service.title}
            fill
            className="object-cover object-center opacity-30"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium mb-6">
              <Icon size={16} />
              <span>Core Service</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">{service.title}</h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed">
              {service.longDescription || service.description}
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/quote">
                <Button size="lg" className="h-12 px-8">Get a Quote</Button>
              </Link>
              <Link 
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, '').length === 10 ? '91' + siteConfig.contact.whatsapp.replace(/\D/g, '') : siteConfig.contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(`Hello, I am interested in your ${service.title} service. I would like to discuss my project requirements.`)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="h-12 px-8 border-green-500/50 text-green-600 hover:bg-green-500/10 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  Discuss on WhatsApp
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      {service.workflow && (
        <section className="py-20 bg-background/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Process</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">How we deliver exceptional results for your business, step by step.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {service.workflow.map((step, index) => (
                <div key={index} className="relative group">
                  <div className="hidden lg:block absolute top-8 left-[60%] w-full h-[2px] bg-border z-0">
                    <div className="h-full bg-primary w-0 group-hover:w-full transition-all duration-700" />
                  </div>
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-background border-2 border-primary/30 flex items-center justify-center text-2xl font-bold text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 shadow-lg">
                      {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{step.step}</h3>
                    <p className="text-sm text-foreground/70">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Features Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-12">Key Features Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 text-left">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-center p-4 glass rounded-xl border border-border/50">
                <CheckCircle2 className="w-6 h-6 text-green-500 mr-4 shrink-0" />
                <span className="font-medium text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {pricingData && (
        <section className="py-24 bg-primary/5">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Transparent Pricing</h2>
              <p className="text-foreground/70 max-w-2xl mx-auto">Select a package that fits your goals, or build a custom quote.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pricingData.tiers.slice(0, 3).map((pkg: any, i: number) => {
                const isPopular = pkg.isPopular || i === 1; // Default to middle card if none specified
                return (
                <Card key={i} className={`relative overflow-hidden flex flex-col transition-all duration-500 ${isPopular ? 'border-primary shadow-xl shadow-primary/10' : 'hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10'}`}>
                  {isPopular && (
                    <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                  )}
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 pb-8">
                    <div className="mb-6">
                      <span className="text-xs font-bold text-foreground/50 uppercase tracking-wider">
                        {pkg.isStartingPrice ? 'Starting From' : pkg.isMonthly ? 'Management Fee' : 'Fixed Price'}
                      </span>
                      <div className="flex items-baseline gap-2 mt-2">
                        {pkg.originalPrice && (
                          <span className="text-foreground/40 line-through text-lg font-medium">
                            ₹{pkg.originalPrice.toLocaleString()}
                          </span>
                        )}
                        <div className={`text-4xl font-bold ${isPopular ? 'text-primary' : 'text-foreground'}`}>
                          ₹{pkg.price.toLocaleString()}
                          {pkg.isMonthly && <span className="text-lg font-normal text-foreground/50">/mo</span>}
                        </div>
                      </div>
                    </div>
                    <p className="text-foreground/80 font-medium mb-6">
                      {pkg.description}
                    </p>
                  </CardContent>
                  <CardFooter className="pt-0">
                    <Link href="/quote" className="w-full">
                      <Button className="w-full" variant={isPopular ? 'default' : 'outline'}>Select Package</Button>
                    </Link>
                  </CardFooter>
                </Card>
                );
              })}
            </div>
            
            {pricingData.tiers.length > 3 && (
              <div className="mt-12 text-center">
                <p className="text-foreground/70 mb-4">Looking for Enterprise or Custom scale?</p>
                <Link href="/pricing">
                  <Button variant="outline">View All {pricingData.name} Packages</Button>
                </Link>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
