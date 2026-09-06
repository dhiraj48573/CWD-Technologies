'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/config/site.config';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: 'success', message: data.message });
        setFormData({ name: '', company: '', email: '', phone: '', service: '', budget: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please try again or contact us via WhatsApp.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Discuss Your Project</h1>
          <p className="text-lg text-foreground/70">
            Whether you need a full digital transformation or a specific technical solution, our team is ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold border-b border-border pb-4">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Phone & WhatsApp</h4>
                  <p className="text-foreground/70 mt-1">{siteConfig.contact.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-foreground/70 mt-1">{siteConfig.contact.email}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p className="text-foreground/70 mt-1">{siteConfig.contact.location}</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, '').length === 10 ? '91' + siteConfig.contact.whatsapp.replace(/\D/g, '') : siteConfig.contact.whatsapp.replace(/\D/g, '')}?text=Hello!`} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full sm:w-auto border-green-500 text-green-500 hover:bg-green-500/10">
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="glass">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              
              {status.type === 'success' && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 text-green-600 rounded-lg">
                  {status.message}
                </div>
              )}
              {status.type === 'error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg">
                  {status.message}
                </div>
              )}

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name *</label>
                    <input type="text" className="w-full bg-background border border-border rounded-md px-4 py-2 focus:ring-2 focus:ring-primary outline-none" required
                      value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Company</label>
                    <input type="text" className="w-full bg-background border border-border rounded-md px-4 py-2 focus:ring-2 focus:ring-primary outline-none"
                      value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email *</label>
                    <input type="email" className="w-full bg-background border border-border rounded-md px-4 py-2 focus:ring-2 focus:ring-primary outline-none" required
                      value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone *</label>
                    <input type="tel" className="w-full bg-background border border-border rounded-md px-4 py-2 focus:ring-2 focus:ring-primary outline-none" required
                      value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Service Interested In</label>
                    <select className="w-full bg-background border border-border rounded-md px-4 py-2 focus:ring-2 focus:ring-primary outline-none text-foreground"
                      value={formData.service} onChange={e => setFormData({...formData, service: e.target.value})}>
                      <option value="">Select a service</option>
                      <option value="website">Website Development</option>
                      <option value="software">Custom Software</option>
                      <option value="mobile">Mobile App</option>
                      <option value="ai">AI Integration</option>
                      <option value="marketing">Digital Marketing</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Estimated Budget</label>
                    <select className="w-full bg-background border border-border rounded-md px-4 py-2 focus:ring-2 focus:ring-primary outline-none text-foreground"
                      value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})}>
                      <option value="">Select a budget</option>
                      <option value="<50k">Under ₹50,000</option>
                      <option value="50k-1L">₹50,000 - ₹1,00,000</option>
                      <option value="1L-5L">₹1,00,000 - ₹5,00,000</option>
                      <option value="5L+">Above ₹5,00,000</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea rows={4} className="w-full bg-background border border-border rounded-md px-4 py-2 focus:ring-2 focus:ring-primary outline-none" required
                    value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}></textarea>
                </div>

                <Button className="w-full pt-2" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Submit Project Requirement'}
                </Button>
                <p className="text-xs text-foreground/50 text-center mt-4">
                  By submitting this form, you agree to our privacy policy.
                </p>
              </form>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
}
