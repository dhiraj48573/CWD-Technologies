import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/config/site.config";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Chatbot } from "@/components/ui/Chatbot";
import { CookieNotice } from "@/components/ui/CookieNotice";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
};

export default function RootLayout({ children }: any) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <head>
        <Script src="/theme-script.js" strategy="beforeInteractive" />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <Chatbot />
          <CookieNotice />
        </ThemeProvider>
      </body>
    </html>
  );
}
