import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site.config';

export function Footer() {
  return (
    <footer className="border-t border-border bg-card print:hidden">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1 space-y-4">
            <Link href="/" className="inline-flex items-center space-x-3 group">
              <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 transition-transform group-hover:scale-105">
                <Image
                  src={siteConfig.brand.logo}
                  alt={`${siteConfig.companyName} Logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-2xl tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {siteConfig.companyName}
              </span>
            </Link>
            <p className="text-sm text-foreground/70 max-w-xs">
              {siteConfig.brand.tagline}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><Link href="/services#website-development" className="hover:text-primary">Website Development</Link></li>
              <li><Link href="/services#software-development" className="hover:text-primary">Software Development</Link></li>
              <li><Link href="/services#mobile-app-development" className="hover:text-primary">Mobile Apps</Link></li>
              <li><Link href="/services#ai-solutions" className="hover:text-primary">AI Solutions</Link></li>
              <li><Link href="/services#digital-marketing" className="hover:text-primary">Digital Marketing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link href="/portfolio" className="hover:text-primary">Portfolio</Link></li>
              <li><Link href="/pricing" className="hover:text-primary">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li>{siteConfig.contact.phone}</li>
              <li>{siteConfig.contact.email}</li>
              <li className="pt-2">{siteConfig.contact.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <div className="flex flex-col items-center md:items-start space-y-1 text-center md:text-left">
            <p>© {new Date().getFullYear()} {siteConfig.companyName}. All Rights Reserved.</p>
            <p className="text-xs font-semibold tracking-wider text-foreground/40 mt-1 uppercase">
              Designed and Developed by <span className="text-foreground/70">Dhiraj Kumar Singh</span>
            </p>
          </div>
          <div className="flex space-x-4">
            <Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
