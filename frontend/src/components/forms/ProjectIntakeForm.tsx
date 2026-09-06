'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';

export function ProjectIntakeForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    projectType: '',
    budget: '',
    deadline: '',
    requirements: '',
    referenceWebsite: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="glass p-8 rounded-xl text-center animate-in fade-in zoom-in duration-300">
        <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-2">Requirement Submitted!</h3>
        <p className="text-foreground/70 mb-6">
          Thank you for reaching out. Our team will review your project requirements and get back to you within 24 hours.
        </p>
        <Button onClick={() => setIsSubmitted(false)}>Submit Another Project</Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass p-6 md:p-8 rounded-xl space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Full Name *</label>
          <input 
            required type="text" className="w-full bg-background border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Company Name</label>
          <input 
            type="text" className="w-full bg-background border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Email Address *</label>
          <input 
            required type="email" className="w-full bg-background border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Phone Number *</label>
          <input 
            required type="tel" className="w-full bg-background border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Project Type *</label>
          <select 
            required className="w-full bg-background border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            value={formData.projectType} onChange={e => setFormData({...formData, projectType: e.target.value})}
          >
            <option value="">Select a service</option>
            <option value="Website">Website Development</option>
            <option value="Web App">Web Application</option>
            <option value="Mobile App">Mobile App</option>
            <option value="Custom Software">Custom Software / ERP</option>
            <option value="AI Solution">AI & Automation Solution</option>
            <option value="E-Commerce">E-Commerce System</option>
            <option value="Digital Marketing">Digital Marketing</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Other">Other Custom Requirement</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Estimated Budget</label>
          <select 
            className="w-full bg-background border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})}
          >
            <option value="">Select a budget range</option>
            <option value="< ₹50,000">Less than ₹50,000</option>
            <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
            <option value="₹1,00,000 - ₹3,00,000">₹1,00,000 - ₹3,00,000</option>
            <option value="₹3,00,000 - ₹10,00,000">₹3,00,000 - ₹10,00,000</option>
            <option value="> ₹10,00,000">More than ₹10,00,000</option>
            <option value="Not Sure">Not sure yet</option>
          </select>
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium">Deadline / Timeline Expected</label>
          <input 
            type="text" placeholder="e.g. Need it in 2 months, Q3 Launch, ASAP" className="w-full bg-background border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            value={formData.deadline} onChange={e => setFormData({...formData, deadline: e.target.value})}
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium">Reference Website/App (Optional)</label>
          <input 
            type="url" placeholder="https://example.com" className="w-full bg-background border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            value={formData.referenceWebsite} onChange={e => setFormData({...formData, referenceWebsite: e.target.value})}
          />
        </div>
        
        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium">Core Requirements / Features *</label>
          <textarea 
            required rows={3} placeholder="List down the main features you want in your project..." className="w-full bg-background border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            value={formData.requirements} onChange={e => setFormData({...formData, requirements: e.target.value})}
          ></textarea>
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-sm font-medium">Any other message?</label>
          <textarea 
            rows={2} placeholder="Any specific challenges or goals?" className="w-full bg-background border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
          ></textarea>
        </div>
      </div>
      
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit Project Requirement'}
      </Button>
    </form>
  );
}
