import React from 'react';
import { siteConfig } from '@/config/site.config';
import { ProjectIntakeForm } from '@/components/forms/ProjectIntakeForm';
import { MapPin, Phone, Mail, Clock, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'Contact Us | CWD Technologies Haridwar, Uttarakhand',
  description:
    'Get in touch with CWD Technologies. Based in Haridwar, Uttarakhand, India. Contact us via phone (+91 9259534648), WhatsApp, or project inquiry form for a free technical consultation.',
  keywords: [
    'Contact CWD Technologies',
    'IT company contact Haridwar',
    'Website developer contact Uttarakhand',
    'Hire software developer Haridwar',
    'CWD Technologies phone number',
  ],
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: 'Contact Us | CWD Technologies Haridwar, Uttarakhand',
    description:
      'Get in touch with CWD Technologies in Haridwar, Uttarakhand. Contact via phone (+91 9259534648), WhatsApp, or form.',
    url: `${siteConfig.url}/contact`,
    siteName: siteConfig.companyName,
  },
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact CWD Technologies',
    url: `${siteConfig.url}/contact`,
    mainEntity: {
      '@type': 'LocalBusiness',
      name: siteConfig.companyName,
      url: siteConfig.url,
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Jurs Country',
        addressLocality: 'Haridwar',
        addressRegion: 'Uttarakhand',
        postalCode: '249401',
        addressCountry: 'IN',
      },
      areaServed: siteConfig.serviceAreas.map((area) => ({
        '@type': 'AdministrativeArea',
        name: area,
      })),
    },
  };

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
        name: 'Contact',
        item: `${siteConfig.url}/contact`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="py-16 md:py-24">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <span>Direct Communication</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground">
            Let's Discuss Your Project
          </h1>
          <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
            Have a question, RFP, or an idea to build? Our technical team is ready to discuss architecture, timeline, and quotations with zero pressure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Location (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="p-6 sm:p-8 rounded-3xl glass border border-border/80 space-y-6 shadow-md">
              <h2 className="text-xl font-bold text-foreground pb-4 border-b border-border/60">
                Official Company Contacts
              </h2>

              <div className="space-y-5">
                
                {/* Office Location */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-foreground">Office Location</h3>
                    <p className="text-sm text-foreground/75 mt-0.5">
                      {siteConfig.contact.location}
                    </p>
                    <span className="text-xs text-foreground/50">Uttarakhand 249401, India</span>
                  </div>
                </div>

                {/* Direct Phone & WhatsApp */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-foreground">Phone & WhatsApp</h3>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-sm font-semibold text-primary hover:underline block mt-0.5"
                    >
                      {siteConfig.contact.phone}
                    </a>
                    <span className="text-xs text-foreground/50">Direct technical desk</span>
                  </div>
                </div>

                {/* Departmental Emails */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="w-full space-y-2">
                    <div>
                      <h3 className="font-bold text-sm text-foreground">Official Department Emails</h3>
                      <p className="text-xs text-foreground/60">Connect directly with the specialized desk:</p>
                    </div>

                    <div className="space-y-2 text-xs pt-1">
                      <div className="p-2.5 rounded-xl bg-background/60 border border-border/70 hover:border-primary/50 transition-colors">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-primary font-bold block mb-0.5">General Inquiries</span>
                        <a
                          href={`mailto:${siteConfig.contact.emails.info}`}
                          className="text-xs font-semibold text-foreground hover:text-primary transition-colors break-all"
                        >
                          {siteConfig.contact.emails.info}
                        </a>
                      </div>

                      <div className="p-2.5 rounded-xl bg-background/60 border border-border/70 hover:border-primary/50 transition-colors">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-500 font-bold block mb-0.5">Sales & Quotations</span>
                        <a
                          href={`mailto:${siteConfig.contact.emails.sales}`}
                          className="text-xs font-semibold text-foreground hover:text-primary transition-colors break-all"
                        >
                          {siteConfig.contact.emails.sales}
                        </a>
                      </div>

                      <div className="p-2.5 rounded-xl bg-background/60 border border-border/70 hover:border-primary/50 transition-colors">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-bold block mb-0.5">Project Proposals & RFPs</span>
                        <a
                          href={`mailto:${siteConfig.contact.emails.project}`}
                          className="text-xs font-semibold text-foreground hover:text-primary transition-colors break-all"
                        >
                          {siteConfig.contact.emails.project}
                        </a>
                      </div>

                      <div className="p-2.5 rounded-xl bg-background/60 border border-border/70 hover:border-primary/50 transition-colors">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-amber-500 font-bold block mb-0.5">Client Support & Desk</span>
                        <a
                          href={`mailto:${siteConfig.contact.emails.support}`}
                          className="text-xs font-semibold text-foreground hover:text-primary transition-colors break-all"
                        >
                          {siteConfig.contact.emails.support}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-foreground">Working Hours</h3>
                    <p className="text-sm text-foreground/75 mt-0.5">
                      Monday – Saturday: 9:00 AM – 7:00 PM IST
                    </p>
                    <span className="text-xs text-foreground/50">Sunday: Closed (Emergency server support active)</span>
                  </div>
                </div>

              </div>

              {/* Instant WhatsApp Action */}
              <div className="pt-4 border-t border-border/60">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-md">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Chat Directly on WhatsApp
                  </Button>
                </a>
              </div>

            </div>

            {/* Geographical Context & Local SEO Box */}
            <div className="p-6 rounded-2xl glass border border-border/70 space-y-3">
              <h3 className="text-sm font-bold text-foreground flex items-center">
                <ShieldCheck className="w-4 h-4 text-primary mr-2" />
                Serving Uttarakhand & Global Clients
              </h3>
              <p className="text-xs text-foreground/70 leading-relaxed">
                Operating from Haridwar, we work with local enterprises across Dehradun, Roorkee, Rishikesh, and nationwide across India, as well as international remote clients.
              </p>
              <div className="pt-2 flex flex-wrap gap-1.5 text-[11px] font-mono text-foreground/60">
                <span>Haridwar</span> • <span>Dehradun</span> • <span>Rishikesh</span> • <span>Delhi NCR</span> • <span>Pan-India</span>
              </div>
            </div>

          </div>

          {/* Right Column: Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <ProjectIntakeForm />
          </div>

        </div>

      </div>
    </div>
    </>
  );
}
