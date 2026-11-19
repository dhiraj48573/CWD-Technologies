import React from 'react';
import { Hero } from '@/components/sections/Hero';
import { TrustSection } from '@/components/sections/TrustSection';
import { ServicesOverview } from '@/components/sections/ServicesOverview';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { IndustriesSection } from '@/components/sections/IndustriesSection';
import { DevelopmentProcess } from '@/components/sections/DevelopmentProcess';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { faqConfig } from '@/config/faq.config';

export default function HomePage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqConfig.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <>
      {/* Schema.org FAQPage Rich Snippet */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust & Verifiable Tech Stack Section */}
      <TrustSection />

      {/* 3. Core Services Ecosystem */}
      <ServicesOverview />

      {/* 4. Why Choose CWD Technologies */}
      <WhyChooseUs />

      {/* 5. Industries We Serve (10 Categories) */}
      <IndustriesSection />

      {/* 6. 5-Step Development Process */}
      <DevelopmentProcess />

      {/* 7. Featured Case Studies & Work */}
      <FeaturedProjects />

      {/* 8. Practical FAQs */}
      <FAQ />

      {/* 9. Final Conversion CTA */}
      <FinalCTA />
    </>
  );
}
