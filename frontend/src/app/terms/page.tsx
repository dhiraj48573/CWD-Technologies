import React from 'react';
import { legalConfig } from '@/config/legal.config';

export const metadata = {
  title: 'Terms & Conditions | CWD Technologies',
  description: 'Terms and conditions for CWD Technologies services and products.',
};

export default function TermsPage() {
  const terms = legalConfig.terms;
  
  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
        
        <div className="prose prose-invert max-w-none text-foreground/80 space-y-8">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>Please read these terms and conditions carefully before using our services.</p>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-3">1. Project Scope & Revisions</h2>
              <p><strong>Scope:</strong> {terms.projectScope}</p>
              <p className="mt-2"><strong>Revisions:</strong> {terms.revisions}</p>
              <p className="mt-2"><strong>Change Requests:</strong> {terms.changeRequests}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">2. Payments & Timeline</h2>
              <p><strong>Payment Terms:</strong> {terms.payment}</p>
              <p className="mt-2"><strong>Timeline:</strong> {terms.timeline}</p>
              <p className="mt-2"><strong>Cancellation:</strong> {terms.cancellation}</p>
              <p className="mt-2"><strong>Refund Policy:</strong> {terms.refundPolicy}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">3. Client Responsibilities</h2>
              <p>{terms.clientResponsibilities}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">4. Third-Party Costs & Hosting</h2>
              <p><strong>Third-Party Services:</strong> {terms.thirdPartyServices}</p>
              <p className="mt-2"><strong>Hosting & Domain:</strong> {terms.hosting} {terms.domain}</p>
              <p className="mt-2"><strong>API Charges:</strong> {terms.apiCharges} {terms.aiApiUsage}</p>
              <p className="mt-2"><strong>Advertising:</strong> {terms.advertisingBudget}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">5. Intellectual Property & Code</h2>
              <p><strong>IP Rights:</strong> {terms.intellectualProperty}</p>
              <p className="mt-2"><strong>Source Code:</strong> {terms.sourceCode}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">6. Maintenance & Support</h2>
              <p><strong>Support Period:</strong> {terms.supportPeriod}</p>
              <p className="mt-2"><strong>Ongoing Maintenance:</strong> {terms.maintenance}</p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-3">7. Confidentiality & Data</h2>
              <p><strong>Confidentiality:</strong> {terms.confidentiality}</p>
              <p className="mt-2"><strong>Data Protection:</strong> {terms.dataProtection}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
