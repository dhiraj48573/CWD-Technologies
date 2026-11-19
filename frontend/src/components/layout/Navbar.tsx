'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/ThemeToggle';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/industries', label: 'Industries' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 print:hidden ${isScrolled
          ? 'border-b border-border/80 bg-background/90 backdrop-blur-md shadow-sm'
          : 'border-b border-border/30 bg-background/70 backdrop-blur-sm'
        }`}
    >
      <div className="container max-w-7xl mx-auto flex h-20 items-center justify-between px-4 sm:px-6">
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden bg-card border border-border/60 p-1 flex-shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-sm">
            <Image
              src={siteConfig.brand.logo}
              alt={`${siteConfig.companyName} Logo`}
              fill
              sizes="56px"
              className="object-contain p-0.5"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg md:text-xl tracking-tight text-foreground group-hover:text-primary transition-colors">
              {siteConfig.companyName}
            </span>
            <span className="text-[10px] md:text-xs font-medium text-foreground/60 tracking-wider uppercase -mt-0.5">

            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${isActive
                    ? 'text-primary bg-primary/10 font-semibold'
                    : 'text-foreground/80 hover:text-primary hover:bg-secondary/60'
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-3">
          <ThemeToggle />
          <Link href="/start">
            <Button size="sm" className="h-9 px-4 shadow-sm text-xs font-semibold">
              Start Your Project
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex lg:hidden items-center space-x-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-lg border border-border/70 text-foreground hover:bg-secondary/70 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden border-b border-border bg-background/95 backdrop-blur-xl px-4 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium px-3 py-2.5 rounded-lg transition-colors ${isActive
                      ? 'text-primary bg-primary/10 font-semibold'
                      : 'text-foreground/80 hover:text-primary hover:bg-secondary/50'
                    }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-border/60 flex flex-col space-y-3">
              <Link href="/start" onClick={() => setIsOpen(false)}>
                <Button className="w-full h-11 justify-center font-semibold">
                  Start Your Project
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button variant="outline" className="w-full h-11 justify-center">
                  Get a Free Consultation
                </Button>
              </Link>
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center text-sm font-medium text-emerald-600 dark:text-emerald-400 py-2 hover:underline"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat with an engineer on WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
