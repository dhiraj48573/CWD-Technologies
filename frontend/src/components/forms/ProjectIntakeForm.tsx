'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { servicesConfig } from '@/config/services.config';
import { siteConfig } from '@/config/site.config';
import { CheckCircle2, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export function ProjectIntakeForm({ preselectedService }: { preselectedService?: string }) {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    serviceRequired: preselectedService || 'website-development',
    budgetRange: '₹50,000 - ₹1,00,000',
    timeline: '1-2 months',
    preferredContact: 'WhatsApp',
    projectDescription: '',
    privacyConsent: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyConsent) {
      setStatus({
        type: 'error',
        message: 'Please accept the privacy policy to submit your project requirement.',
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.fullName,
          company: formData.businessName,
          email: formData.email,
          phone: formData.phone,
          service: formData.serviceRequired,
          budget: formData.budgetRange,
          timeline: formData.timeline,
          preferredContact: formData.preferredContact,
          message: formData.projectDescription,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message:
            result.message ||
            'Thank you! Your project requirement has been submitted. Our team will contact you within 24 hours.',
        });
        setFormData({
          fullName: '',
          businessName: '',
          email: '',
          phone: '',
          serviceRequired: 'website-development',
          budgetRange: '₹50,000 - ₹1,00,000',
          timeline: '1-2 months',
          preferredContact: 'WhatsApp',
          projectDescription: '',
          privacyConsent: true,
        });
      } else {
        setStatus({
          type: 'error',
          message: result.error || 'Unable to submit your requirement. Please try again or WhatsApp us.',
        });
      }
    } catch (err) {
      setStatus({
        type: 'error',
        message: 'Network error. Please check your internet connection or reach out on WhatsApp directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (status.type === 'success') {
    return (
      <div className="p-8 sm:p-12 rounded-3xl glass border border-emerald-500/40 text-center space-y-5 animate-in fade-in duration-300">
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-foreground">
          Requirement Received Successfully!
        </h3>
        <p className="text-sm sm:text-base text-foreground/75 max-w-lg mx-auto">
          Thank you for choosing CWD Technologies. Our engineering team in Haridwar is reviewing your details and will get back to you via your preferred channel within 24 hours.
        </p>
        <div className="pt-4 flex flex-wrap justify-center gap-3">
          <Button onClick={() => setStatus({ type: null, message: '' })}>
            Submit Another Requirement
          </Button>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(
              `Hello CWD Technologies, I just submitted an inquiry for ${formData.serviceRequired}. I would like to follow up.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="border-emerald-500/50 text-emerald-600 dark:text-emerald-400">
              Follow Up on WhatsApp
            </Button>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 sm:p-10 rounded-3xl glass border border-border/80 shadow-xl space-y-6">
      
      {status.type === 'error' && (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-600 dark:text-rose-400 text-sm flex items-start">
          <AlertCircle className="w-5 h-5 mr-2 shrink-0 mt-0.5" />
          <span>{status.message}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        
        {/* Full Name */}
        <div className="space-y-2">
          <label className="text-xs sm:text-sm font-semibold text-foreground">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Ramesh Kumar"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full bg-background border border-border/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
          />
        </div>

        {/* Business Name */}
        <div className="space-y-2">
          <label className="text-xs sm:text-sm font-semibold text-foreground">
            Business / Organization Name
          </label>
          <input
            type="text"
            placeholder="e.g. Skyline Logistics"
            value={formData.businessName}
            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            className="w-full bg-background border border-border/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
          />
        </div>

        {/* Email Address */}
        <div className="space-y-2">
          <label className="text-xs sm:text-sm font-semibold text-foreground">
            Email Address <span className="text-rose-500">*</span>
          </label>
          <input
            type="email"
            required
            placeholder="e.g. ramesh@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-background border border-border/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
          />
        </div>

        {/* Phone Number */}
        <div className="space-y-2">
          <label className="text-xs sm:text-sm font-semibold text-foreground">
            Phone / WhatsApp Number <span className="text-rose-500">*</span>
          </label>
          <input
            type="tel"
            required
            placeholder="e.g. +91 98765 43210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-background border border-border/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
          />
        </div>

        {/* Service Required */}
        <div className="space-y-2">
          <label className="text-xs sm:text-sm font-semibold text-foreground">
            Service Required <span className="text-rose-500">*</span>
          </label>
          <select
            value={formData.serviceRequired}
            onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
            className="w-full bg-background border border-border/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
          >
            {servicesConfig.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
            <option value="other">Other Custom Technical Requirement</option>
          </select>
        </div>

        {/* Project Budget */}
        <div className="space-y-2">
          <label className="text-xs sm:text-sm font-semibold text-foreground">
            Estimated Project Budget
          </label>
          <select
            value={formData.budgetRange}
            onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
            className="w-full bg-background border border-border/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
          >
            <option value="< ₹30,000">Under ₹30,000 (Starter / MVP)</option>
            <option value="₹30,000 - ₹50,000">₹30,000 - ₹50,000</option>
            <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
            <option value="₹1,00,000 - ₹2,50,000">₹1,00,000 - ₹2,50,000</option>
            <option value="> ₹2,50,000">₹2,50,000+ (Enterprise / SaaS)</option>
            <option value="To be discussed">To be discussed</option>
          </select>
        </div>

        {/* Expected Timeline */}
        <div className="space-y-2">
          <label className="text-xs sm:text-sm font-semibold text-foreground">
            Expected Timeline
          </label>
          <select
            value={formData.timeline}
            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
            className="w-full bg-background border border-border/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
          >
            <option value="Urgent (1-2 weeks)">Urgent (1-2 weeks)</option>
            <option value="1-2 months">1-2 months</option>
            <option value="2-3 months">2-3 months</option>
            <option value="Flexible">Flexible</option>
          </select>
        </div>

        {/* Preferred Contact Method */}
        <div className="space-y-2">
          <label className="text-xs sm:text-sm font-semibold text-foreground">
            Preferred Contact Method
          </label>
          <select
            value={formData.preferredContact}
            onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
            className="w-full bg-background border border-border/80 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
          >
            <option value="WhatsApp">WhatsApp Message</option>
            <option value="Phone Call">Direct Phone Call</option>
            <option value="Email">Email Communication</option>
          </select>
        </div>

      </div>

      {/* Project Description */}
      <div className="space-y-2">
        <label className="text-xs sm:text-sm font-semibold text-foreground">
          Project Description & Goals <span className="text-rose-500">*</span>
        </label>
        <textarea
          required
          rows={4}
          placeholder="Briefly describe what you want to build, target users, any reference websites, and key features..."
          value={formData.projectDescription}
          onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
          className="w-full bg-background border border-border/80 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-y"
        />
      </div>

      {/* Privacy Consent Checkbox */}
      <div className="flex items-start space-x-3 pt-2">
        <input
          type="checkbox"
          id="privacyConsent"
          checked={formData.privacyConsent}
          onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
          className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary"
        />
        <label htmlFor="privacyConsent" className="text-xs text-foreground/70 leading-normal">
          I consent to CWD Technologies collecting and processing my submitted details solely for the purpose of communicating regarding this project inquiry in accordance with the{' '}
          <a href="/privacy" target="_blank" className="text-primary underline">
            Privacy Policy
          </a>.
        </label>
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full h-12 text-base font-semibold shadow-md"
        >
          {isSubmitting ? 'Securing & Transmitting Requirements...' : 'Submit Project Requirement'}
          {!isSubmitting && <ArrowRight className="w-4 h-4 ml-2" />}
        </Button>
      </div>

      <div className="flex items-center justify-center space-x-2 text-xs text-foreground/50 pt-1">
        <ShieldCheck className="w-4 h-4 text-emerald-500" />
        <span>Your data is strictly confidential. Zero spam guarantee.</span>
      </div>

    </form>
  );
}
