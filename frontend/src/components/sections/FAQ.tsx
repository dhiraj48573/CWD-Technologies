'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqConfig } from '@/config/faq.config';
import { Plus, Minus } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-card/50 border-t border-border">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-foreground/70">Everything you need to know about our services, pricing, and process.</p>
        </div>

        <div className="space-y-4">
          {faqConfig.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border border-border rounded-xl bg-background overflow-hidden"
            >
              <button
                className="flex justify-between items-center w-full p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-lg">{faq.question}</span>
                <span className="ml-6 shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-foreground/70 border-t border-border/50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
