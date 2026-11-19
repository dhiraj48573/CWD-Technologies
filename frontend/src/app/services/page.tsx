import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { servicesConfig } from '@/config/services.config';
import { siteConfig } from '@/config/site.config';
import { Button } from '@/components/ui/Button';
import { ArrowRight, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'IT Services, Web & Software Development Services | CWD Technologies',
  description:
    'Explore our complete suite of 9 technology services: Website Development, Custom Software, Mobile Apps, AI Solutions & Automation, Digital Marketing, SEO, Social Media, E-Commerce, Cloud Deployment, and UI/UX Design.',
  keywords: [
    'IT services Haridwar',
    'Software development services Uttarakhand',
    'Website development services Haridwar',
    'AI automation services India',
    'Mobile app development services',
    'SEO and digital marketing services Haridwar',
    'Cloud deployment services India',
    'UI UX design services',
    'CWD Technologies services',
  ],
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
  openGraph: {
    title: 'Technology Services & Digital Solutions | CWD Technologies',
    description:
      'Explore our full suite of 9 technology services engineered for modern businesses in Haridwar, Uttarakhand & globally.',
    url: `${siteConfig.url}/services`,
    siteName: siteConfig.companyName,
  },
};

export default function ServicesPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Full Capabilities Directory</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground">
            Engineering Every Layer of Your Digital Growth
          </h1>
          <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
            From high-speed corporate web platforms to bespoke ERPs and grounded AI automation, explore our specialized agency services designed for businesses across India and worldwide.
          </p>
        </div>

        {/* 9 Services Detailed List */}
        <div className="space-y-16">
          {servicesConfig.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 1;
            const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
              `Hello CWD Technologies, I am interested in your ${service.title} service. I would like to discuss my project requirements.`
            )}`;

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-24 rounded-3xl glass border border-border/80 p-6 sm:p-10 lg:p-12 hover:border-primary/50 transition-all duration-300"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Left Column: Content (7 cols) */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-2' : ''}`}>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold uppercase text-primary">
                          {service.badge}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-base sm:text-lg font-medium text-foreground/90">
                      {service.headline}
                    </p>

                    <p className="text-sm text-foreground/75 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {service.features.slice(0, 4).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start text-xs sm:text-sm text-foreground/80">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mr-2 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <Link href={`/services/${service.id}`}>
                        <Button className="font-semibold">
                          View Dedicated Page
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                      <Link href={`/start?service=${service.id}`}>
                        <Button variant="outline">
                          Get a Quote
                        </Button>
                      </Link>
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="border-emerald-500/50 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          WhatsApp
                        </Button>
                      </a>
                    </div>

                  </div>

                  {/* Right Column: Visual / Deliverables (5 cols) */}
                  <div className={`lg:col-span-5 relative ${isEven ? 'lg:order-1' : ''}`}>
                    <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden border border-border/80 shadow-md">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="glass p-3 rounded-xl border border-white/10 text-xs space-y-1">
                          <span className="font-bold text-primary block">Ready Sub-Services:</span>
                          <p className="text-foreground/80 truncate">
                            {service.subServices.slice(0, 3).join(' • ')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
