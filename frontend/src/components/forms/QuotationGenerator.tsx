'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { pricingConfig } from '@/config/pricing.config';
import { siteConfig } from '@/config/site.config';

type ServiceCategoryKey = keyof typeof pricingConfig.services;

interface SelectedService {
  category: ServiceCategoryKey;
  tierIndex: number;
}

export function QuotationGenerator() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Client Info
    name: '',
    company: '',
    phone: '',
    email: '',
    location: '',
    
    // Project Requirements
    businessType: '',
    projectDescription: '',
    requiredFeatures: '',
    numberOfPages: '',
    numberOfUsers: '',
    platforms: '',
    integrations: '',
    timeline: '',
    budgetRange: '',

    // Services
    selectedServices: [] as SelectedService[],
    selectedAddons: [] as number[],
  });

  const handleCategoryToggle = (categoryKey: ServiceCategoryKey) => {
    const isSelected = formData.selectedServices.some(s => s.category === categoryKey);
    if (isSelected) {
      setFormData(prev => ({
        ...prev,
        selectedServices: prev.selectedServices.filter(s => s.category !== categoryKey)
      }));
    } else {
      // Add default tier (index 0)
      setFormData(prev => ({
        ...prev,
        selectedServices: [...prev.selectedServices, { category: categoryKey, tierIndex: 0 }]
      }));
    }
  };

  const handleTierChange = (categoryKey: ServiceCategoryKey, tierIndex: number) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.map(s => 
        s.category === categoryKey ? { ...s, tierIndex } : s
      )
    }));
  };

  const handleAddonToggle = (addonIndex: number) => {
    setFormData(prev => ({
      ...prev,
      selectedAddons: prev.selectedAddons.includes(addonIndex)
        ? prev.selectedAddons.filter(i => i !== addonIndex)
        : [...prev.selectedAddons, addonIndex]
    }));
  };

  const calculateEstimate = () => {
    let basePrice = 0;
    let addonsPrice = 0;

    formData.selectedServices.forEach(s => {
      const tier = pricingConfig.services[s.category].tiers[s.tierIndex];
      basePrice += tier.price;
    });

    formData.selectedAddons.forEach(index => {
      addonsPrice += pricingConfig.addons[index].price;
    });

    return {
      basePrice,
      addonsPrice,
      total: basePrice + addonsPrice
    };
  };

  const handlePrint = () => {
    window.print();
  };

  const nextStep = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStep(s => Math.min(s + 1, 4));
  };
  const prevStep = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setStep(s => Math.max(s - 1, 1));
  };

  const estimate = calculateEstimate();
  const gst = estimate.total * 0.18;
  const grandTotal = estimate.total + gst;

  const handleWhatsApp = () => {
    const servicesText = formData.selectedServices.map(s => {
      const categoryName = pricingConfig.services[s.category].name;
      const tierName = pricingConfig.services[s.category].tiers[s.tierIndex].name;
      return `- ${categoryName}: ${tierName}`;
    }).join('%0A');

    const addonsText = formData.selectedAddons.length > 0 
      ? '%0A*Add-ons:*%0A' + formData.selectedAddons.map(idx => `- ${pricingConfig.addons[idx].name}`).join('%0A')
      : '';

    const text = `*New Quotation Request* 🚀%0A%0A*Name:* ${formData.name}%0A*Company:* ${formData.company || 'N/A'}%0A*Phone:* ${formData.phone}%0A*Email:* ${formData.email}%0A%0A*Selected Services:*%0A${servicesText}${addonsText}%0A%0A*Estimated Total:* ₹${grandTotal.toLocaleString()}%0A%0AI would like to discuss this quotation further!`;
    
    // Clean phone number (remove spaces, +, -, etc)
    let phone = siteConfig.contact.whatsapp.replace(/\D/g, '');
    if (phone.length === 10) phone = '91' + phone;

    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <Card className="max-w-5xl mx-auto glass p-6 md:p-8 mt-8 print:shadow-none print:bg-transparent print:border-none print:p-0 print:m-0 print:rounded-none">
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between border-b border-border pb-4 print:hidden">
        <h2 className="text-2xl font-bold">Build Your Quote</h2>
        <div className="flex gap-2 mt-4 md:mt-0">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className={`h-2 w-12 rounded-full ${step >= i ? 'bg-primary' : 'bg-primary/20'}`} />
          ))}
        </div>
      </div>

      {/* Step 1: Project Type & Services */}
      {step === 1 && (
        <div className="space-y-8 animate-in fade-in">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Select Required Services</h3>
            <p className="text-sm text-foreground/70 mb-6">Choose the main categories you need help with.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {(Object.entries(pricingConfig.services) as [ServiceCategoryKey, typeof pricingConfig.services[ServiceCategoryKey]][]).map(([key, service]) => {
                const isSelected = formData.selectedServices.some(s => s.category === key);
                return (
                  <div key={key} className={`border rounded-lg p-4 transition-all ${isSelected ? 'border-primary ring-1 ring-primary/50 bg-primary/5' : 'border-border hover:border-primary/50'}`}>
                    <label className="flex items-center cursor-pointer mb-3">
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={isSelected}
                        onChange={() => handleCategoryToggle(key)}
                      />
                      <div className={`w-5 h-5 rounded flex items-center justify-center mr-3 border transition-colors ${isSelected ? 'bg-primary border-primary' : 'border-input'}`}>
                        {isSelected && (
                          <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className="font-semibold">{service.name}</span>
                    </label>
                    
                    {isSelected && (
                      <div className="mt-3 pl-8 space-y-2 animate-in slide-in-from-top-2">
                        <label className="text-xs text-foreground/60 block mb-1">Select Tier / Package</label>
                        <select 
                          className="w-full text-sm bg-background border border-border rounded p-2 focus:ring-1 focus:ring-primary outline-none"
                          value={formData.selectedServices.find(s => s.category === key)?.tierIndex || 0}
                          onChange={(e) => handleTierChange(key, parseInt(e.target.value))}
                        >
                          {service.tiers.map((tier, idx) => (
                            <option key={idx} value={idx}>
                              {tier.name} {(tier as any).isStartingPrice ? '(Starts from)' : ''} - ₹{tier.price.toLocaleString()}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">2. Add-ons (Optional)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {pricingConfig.addons.map((addon, idx) => (
                <label key={idx} className="flex items-center space-x-3 text-sm cursor-pointer p-2 rounded hover:bg-foreground/5">
                  <input 
                    type="checkbox" 
                    checked={formData.selectedAddons.includes(idx)}
                    onChange={() => handleAddonToggle(idx)}
                    className="rounded border-input text-primary focus:ring-primary"
                  />
                  <span className="flex-1">{addon.name}</span>
                  <span className="text-primary font-medium">₹{addon.price.toLocaleString()}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t border-border">
            <Button onClick={nextStep} disabled={formData.selectedServices.length === 0}>
              Continue to Details
            </Button>
          </div>
        </div>
      )}

      {/* Step 2: Client Information */}
      {step === 2 && (
        <div className="space-y-6 animate-in fade-in">
          <h3 className="text-xl font-semibold mb-4">Client Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Name *</label>
              <input type="text" className="w-full bg-background border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Company Name</label>
              <input type="text" className="w-full bg-background border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Phone Number *</label>
              <input type="tel" className="w-full bg-background border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email Address *</label>
              <input type="email" className="w-full bg-background border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium">Location (City/Country)</label>
              <input type="text" className="w-full bg-background border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
                value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} />
            </div>
          </div>
          
          <div className="flex justify-between pt-6 border-t border-border mt-8">
            <Button variant="outline" onClick={prevStep}>Back</Button>
            <Button onClick={nextStep} disabled={!formData.name || !formData.email || !formData.phone}>
              Continue to Project Requirements
            </Button>
          </div>
        </div>
      )}

      {/* Step 3: Project Requirements */}
      {step === 3 && (
        <div className="space-y-6 animate-in fade-in">
          <h3 className="text-xl font-semibold mb-4">Project Requirements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Business Type / Industry</label>
              <input type="text" placeholder="e.g. Healthcare, Retail, SaaS" className="w-full bg-background border border-border rounded-md px-4 py-2" 
                value={formData.businessType} onChange={e => setFormData({...formData, businessType: e.target.value})} />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Timeline Expectation</label>
              <select className="w-full bg-background border border-border rounded-md px-4 py-2" 
                value={formData.timeline} onChange={e => setFormData({...formData, timeline: e.target.value})}>
                <option value="">Select Timeline</option>
                <option value="ASAP">ASAP (Urgent)</option>
                <option value="1-2 months">1-2 months</option>
                <option value="3-6 months">3-6 months</option>
                <option value="Flexible">Flexible</option>
              </select>
            </div>
            
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium">Project Description</label>
              <textarea rows={3} placeholder="Briefly describe your project goals..." className="w-full bg-background border border-border rounded-md px-4 py-2" 
                value={formData.projectDescription} onChange={e => setFormData({...formData, projectDescription: e.target.value})}></textarea>
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-medium">Key Required Features</label>
              <input type="text" placeholder="e.g. Payment Gateway, User Auth, Admin Dashboard" className="w-full bg-background border border-border rounded-md px-4 py-2" 
                value={formData.requiredFeatures} onChange={e => setFormData({...formData, requiredFeatures: e.target.value})} />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Expected Number of Users</label>
              <input type="text" placeholder="e.g. 1000+, internal only" className="w-full bg-background border border-border rounded-md px-4 py-2" 
                value={formData.numberOfUsers} onChange={e => setFormData({...formData, numberOfUsers: e.target.value})} />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Target Platforms</label>
              <input type="text" placeholder="e.g. Web, iOS, Android" className="w-full bg-background border border-border rounded-md px-4 py-2" 
                value={formData.platforms} onChange={e => setFormData({...formData, platforms: e.target.value})} />
            </div>
          </div>
          
          <div className="flex justify-between pt-6 border-t border-border mt-8">
            <Button variant="outline" onClick={prevStep}>Back</Button>
            <Button onClick={nextStep}>
              Generate Quotation
            </Button>
          </div>
        </div>
      )}

      {/* Step 4: Quotation Preview */}
      {step === 4 && (
        <div className="space-y-8 animate-in fade-in">
          {/* Action Buttons - Hidden during print */}
          <div className="flex justify-between items-center mb-6 print:hidden">
            <Button variant="outline" onClick={prevStep}>Edit Details</Button>
            <div className="flex gap-2">
              <Button variant="outline" onClick={handlePrint}>Print / PDF</Button>
              <Button onClick={handleWhatsApp}>WhatsApp Us</Button>
            </div>
          </div>

          {/* Printable Document Area */}
          <div className="bg-background border border-border rounded-xl p-8 md:p-12 print:border-none print:p-0">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start border-b border-border pb-8 mb-8">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-primary">{siteConfig.companyName}</h1>
                <p className="text-sm text-foreground/70 mt-1">{siteConfig.primaryPositioning}</p>
                <div className="mt-4 text-sm text-foreground/80 space-y-0.5">
                  <p>{siteConfig.contact.location}</p>
                  <p>{siteConfig.contact.email}</p>
                  <p>{siteConfig.contact.phone}</p>
                </div>
              </div>
              <div className="mt-6 md:mt-0 text-left md:text-right">
                <h2 className="text-2xl font-semibold mb-2">QUOTATION</h2>
                <div className="text-sm grid grid-cols-2 md:grid-cols-1 gap-1">
                  <span className="text-foreground/70 md:hidden">Date:</span>
                  <span>{new Date().toLocaleDateString()}</span>
                  <span className="text-foreground/70 md:hidden">Quote No:</span>
                  <span>CWD-EST-{Math.floor(Math.random() * 10000)}</span>
                  <span className="text-foreground/70 md:hidden">Valid Until:</span>
                  <span>30 days from issue</span>
                </div>
              </div>
            </div>

            {/* Client Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-2">Quotation For</h3>
                <p className="font-medium text-lg">{formData.name}</p>
                {formData.company && <p>{formData.company}</p>}
                <p className="text-sm mt-1">{formData.email}</p>
                <p className="text-sm">{formData.phone}</p>
                {formData.location && <p className="text-sm">{formData.location}</p>}
              </div>
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-2">Project Overview</h3>
                <p className="text-sm"><strong>Industry:</strong> {formData.businessType || 'Not specified'}</p>
                <p className="text-sm"><strong>Timeline:</strong> {formData.timeline || 'Not specified'}</p>
                <p className="text-sm mt-2">{formData.projectDescription}</p>
              </div>
            </div>

            {/* Line Items */}
            <div className="mb-8">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground/50 mb-4">Deliverables & Scope</h3>
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="pb-2 font-medium">Description</th>
                    <th className="pb-2 font-medium text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {formData.selectedServices.map((s, i) => {
                    const service = pricingConfig.services[s.category];
                    const tier = service.tiers[s.tierIndex];
                    return (
                      <tr key={`svc-${i}`}>
                        <td className="py-4">
                          <p className="font-medium">{service.name}</p>
                          <p className="text-foreground/70 text-xs mt-1">{tier.name}</p>
                          <p className="text-foreground/60 text-xs">{tier.description}</p>
                        </td>
                        <td className="py-4 text-right">
                          ₹{tier.price.toLocaleString()}
                          {(tier as any).isStartingPrice && <span className="text-xs block text-foreground/50 mt-1">(Base Price)</span>}
                        </td>
                      </tr>
                    );
                  })}
                  
                  {formData.selectedAddons.map((addonIdx, i) => {
                    const addon = pricingConfig.addons[addonIdx];
                    return (
                      <tr key={`addon-${i}`}>
                        <td className="py-4">
                          <p className="font-medium">{addon.name}</p>
                          <p className="text-foreground/70 text-xs mt-1">Optional Add-on</p>
                        </td>
                        <td className="py-4 text-right">
                          ₹{addon.price.toLocaleString()}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Totals */}
            <div className="flex justify-end mb-12">
              <div className="w-full md:w-1/2 lg:w-1/3">
                <div className="flex justify-between py-2 text-sm">
                  <span className="text-foreground/70">Subtotal</span>
                  <span>₹{estimate.total.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-2 text-sm border-b border-border">
                  <span className="text-foreground/70">GST (18%)</span>
                  <span>₹{gst.toLocaleString()}</span>
                </div>
                <div className="flex justify-between py-4 font-bold text-lg">
                  <span>Estimated Total</span>
                  <span className="text-primary">₹{grandTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Terms and Disclaimer */}
            <div className="space-y-6 text-sm text-foreground/70 border-t border-border pt-8">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Important Notice</h4>
                <p className="bg-primary/10 text-primary px-4 py-3 rounded-md border border-primary/20">
                  This is an <strong>Estimated Project Cost</strong> generated automatically based on your selections. 
                  Final quotation will be provided after detailed requirement analysis and may vary based on specific complexities.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Standard Payment Terms</h4>
                  <ul className="list-disc pl-4 space-y-1 text-xs">
                    <li>40% Advance payment to commence work</li>
                    <li>30% Upon completion of major development milestone</li>
                    <li>20% Upon User Acceptance Testing (UAT)</li>
                    <li>10% Prior to final deployment/handover</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Ongoing Costs (Not Included above)</h4>
                  <ul className="list-disc pl-4 space-y-1 text-xs">
                    <li>Monthly/Annual Server & Cloud Hosting</li>
                    <li>Third-party API usage charges (e.g., AI models, payment gateways)</li>
                    <li>Monthly Maintenance (AMC) post-launch</li>
                    <li>Advertising budget (paid directly to platforms)</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center text-xs text-foreground/50 print:block">
              Generated by CWD Technologies Quotation System
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
