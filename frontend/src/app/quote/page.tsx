import { QuotationGenerator } from '@/components/forms/QuotationGenerator';

export const metadata = {
  title: 'Generate Quotation | CWD Technologies',
  description: 'Build your custom project quote for Website, Software, AI, and Marketing services.',
};

export default function QuotePage() {
  return (
    <div className="py-20 md:py-32 print:py-0 print:bg-white print:text-black">
      <div className="container mx-auto max-w-7xl px-4 print:px-0 print:max-w-none">
        <div className="text-center max-w-3xl mx-auto mb-12 print:hidden">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Build Your Quote</h1>
          <p className="text-lg text-foreground/70">
            Select the services you need, provide your details, and get an instant estimated quotation for your project.
          </p>
        </div>
        
        <QuotationGenerator />
      </div>
    </div>
  );
}
