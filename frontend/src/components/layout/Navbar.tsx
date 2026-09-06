'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/config/site.config';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ThemeToggle';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/pricing', label: 'Pricing' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 print:hidden">
      <div className="container flex h-16 max-w-7xl mx-auto items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-14 h-14 md:w-16 md:h-16 flex-shrink-0 transition-transform group-hover:scale-105">
            <Image
              src={siteConfig.brand.logo}
              alt={`${siteConfig.companyName} Logo`}
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-bold text-xl tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hidden sm:inline-block">
            {siteConfig.companyName}
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          
          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/quote">
              <Button size="sm">Start a Project</Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-4">
          <nav className="flex flex-col space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-foreground/80 hover:text-primary"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/quote" onClick={() => setIsOpen(false)}>
              <Button className="w-full">Start a Project</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
