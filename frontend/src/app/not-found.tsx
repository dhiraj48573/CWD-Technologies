import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Home, Search, MessageSquare } from 'lucide-react';

export const metadata = {
  title: 'Page Not Found (404) | CWD Technologies',
  description: 'The page you are looking for does not exist or has been moved.',
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-lg mx-auto text-center space-y-6">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono font-bold">
          <span>ERROR 404</span>
        </div>

        <h1 className="text-5xl sm:text-7xl font-black text-foreground tracking-tight">
          Page Not <span className="gradient-text">Found</span>
        </h1>

        <p className="text-base text-foreground/75 leading-relaxed">
          The page or resource you requested may have been relocated, renamed, or is temporarily unavailable.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link href="/">
            <Button size="lg" className="font-semibold">
              <Home className="w-4 h-4 mr-2" />
              Return to Homepage
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" size="lg">
              Explore Our Services
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Contact Support
            </Button>
          </Link>
        </div>

        <div className="pt-8 border-t border-border/50 text-xs text-foreground/50">
          Looking for custom software or web development in Haridwar, Uttarakhand? Visit our{' '}
          <Link href="/services" className="text-primary underline">
            services directory
          </Link>.
        </div>
      </div>
    </div>
  );
}
