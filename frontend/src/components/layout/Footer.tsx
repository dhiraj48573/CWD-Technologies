import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site.config';
import { servicesConfig } from '@/config/services.config';
import { MapPin, Phone, Mail, MessageSquare, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon, FacebookIcon } from '@/components/ui/BrandIcons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-card/60 backdrop-blur-md text-foreground print:hidden relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Brand & Mission (Col 1 & 2) */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-flex items-center space-x-3 group">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-background border border-border/80 p-1 flex-shrink-0 transition-transform group-hover:scale-105 shadow-sm">
                <Image
                  src={siteConfig.brand.logo}
                  alt={`${siteConfig.companyName} Logo`}
                  fill
                  sizes="48px"
                  className="object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-foreground group-hover:text-primary transition-colors">
                  {siteConfig.companyName}
                </span>
                <span className="text-xs text-foreground/60 font-medium">
                  {siteConfig.primaryPositioning}
                </span>
              </div>
            </Link>

            <p className="text-sm text-foreground/75 leading-relaxed max-w-sm">
              CWD Technologies engineers modern websites, custom enterprise software, mobile apps, AI-powered automation, and digital growth campaigns that drive tangible business revenue.
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-secondary/80 border border-border flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-secondary transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-secondary/80 border border-border flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-secondary/80 border border-border flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-secondary transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-secondary/80 border border-border flex items-center justify-center text-foreground/70 hover:text-primary hover:bg-secondary transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services (Col 3) */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm tracking-wider uppercase text-foreground">Core Services</h4>
            <ul className="space-y-2.5 text-sm text-foreground/70">
              {servicesConfig.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.id}`}
                    className="hover:text-primary transition-colors inline-flex items-center"
                  >
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-primary font-medium hover:underline inline-flex items-center text-xs pt-1">
                  View all services <ArrowUpRight className="w-3 h-3 ml-1" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Knowledge (Col 4) */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm tracking-wider uppercase text-foreground">Company</h4>
            <ul className="space-y-2.5 text-sm text-foreground/70">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Us & Founder
                </Link>
              </li>
              <li>
                <Link href="/industries" className="hover:text-primary transition-colors">
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-primary transition-colors">
                  Case Studies & Work
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-primary transition-colors">
                  Pricing & Quotations
                </Link>
              </li>
              <li>
                <Link href="/quote" className="hover:text-primary transition-colors">
                  Quotation Calculator
                </Link>
              </li>
              <li>
                <Link href="/start" className="hover:text-primary transition-colors">
                  Start Your Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Location (Col 5) */}
          <div className="space-y-4">
            <h4 className="font-bold text-sm tracking-wider uppercase text-foreground">Contact & Office</h4>
            <div className="space-y-3 text-sm text-foreground/75">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  {siteConfig.contact.location}
                  <br />
                  <span className="text-xs text-foreground/50">Uttarakhand, India</span>
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a href={`tel:${siteConfig.contact.phone}`} className="hover:text-primary transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2.5">
                  <Mail className="w-4 h-4 text-primary shrink-0" />
                  <a href={`mailto:${siteConfig.contact.emails.info}`} className="hover:text-primary transition-colors break-all text-xs sm:text-sm font-medium">
                    {siteConfig.contact.emails.info}
                  </a>
                </div>
                <div className="pl-6.5 text-xs text-foreground/60 space-y-1">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-foreground/45 block">Sales:</span>
                    <a href={`mailto:${siteConfig.contact.emails.sales}`} className="hover:text-primary transition-colors">
                      {siteConfig.contact.emails.sales}
                    </a>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-foreground/45 block">Support:</span>
                    <a href={`mailto:${siteConfig.contact.emails.support}`} className="hover:text-primary transition-colors">
                      {siteConfig.contact.emails.support}
                    </a>
                  </div>
                </div>
              </div>
              <div className="pt-2">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappDefaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-14 pt-8 border-t border-border/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-foreground/60">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-3 text-center sm:text-left">
            <p>© {currentYear} {siteConfig.companyName}. All rights reserved.</p>
            <span className="hidden sm:inline text-foreground/30">•</span>
            <p className="text-foreground/50">
              Founded & Architected by <span className="text-foreground/80 font-medium">{siteConfig.founder.name}</span>
            </p>
          </div>

          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/sitemap.xml" className="hover:text-primary transition-colors">
              Sitemap
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
