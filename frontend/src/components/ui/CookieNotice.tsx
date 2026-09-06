'use client';

import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import Link from 'next/link';

export function CookieNotice() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted/declined cookies
    const cookiePreference = localStorage.getItem('cwd-cookie-consent');
    if (!cookiePreference) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cwd-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cwd-cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-10 fade-in duration-500">
      <div className="container mx-auto max-w-4xl">
        <div className="glass bg-background/90 border border-border rounded-xl p-4 md:p-6 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-foreground/80 flex-1">
            <p className="mb-1 font-semibold text-foreground">We use cookies to improve your experience.</p>
            <p>
              By continuing to browse this site, you agree to our use of cookies for analytics and personalized content. 
              Read our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link> for more information.
            </p>
          </div>
          <div className="flex gap-2 shrink-0 w-full md:w-auto">
            <Button variant="outline" size="sm" onClick={handleDecline} className="flex-1 md:flex-none">
              Decline Optional
            </Button>
            <Button size="sm" onClick={handleAccept} className="flex-1 md:flex-none">
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
