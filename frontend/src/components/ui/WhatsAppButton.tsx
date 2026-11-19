'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/site.config';

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
    siteConfig.contact.whatsappDefaultMessage
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with CWD Technologies on WhatsApp"
      className="fixed bottom-6 left-6 z-40 flex items-center justify-center w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/25 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-emerald-500/30 print:hidden group"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      
      {/* Tooltip on hover */}
      <span className="absolute left-16 px-3 py-1.5 rounded-lg bg-background/95 border border-border text-foreground text-xs font-semibold whitespace-nowrap shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none hidden sm:inline-block">
        Chat on WhatsApp
      </span>
    </a>
  );
}
