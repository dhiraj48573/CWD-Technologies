import { pricingConfig } from '@/config/pricing.config';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { CheckCircle2, Star, Rocket } from 'lucide-react';

export const metadata = {
  title: 'Startup Pricing & Packages | CWD Technologies',
  description: 'Aggressive, transparent startup pricing for Website Development, Custom Software, AI, and Digital Marketing.',
};

export default function PricingPage() {
  return (
    <div className="py-20 md:py-32 bg-background relative overflow-hidden">
      
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold tracking-wide mb-6">
            <Rocket size={16} />
            <span>2026 STARTUP PRICING</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Transparent Pricing. <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Zero Surprises.</span></h1>
          <p className="text-lg md:text-xl text-foreground/70 mb-4">
            We believe in aggressive, transparent pricing to help startups and businesses scale faster.
          </p>
        </div>

        {/* 🚀 LAUNCH OFFER BANNER */}
        <div className="mb-24 relative max-w-5xl mx-auto group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-gradient-xy" />
          <div className="relative glass p-1 md:p-2 rounded-3xl">
            <div className="bg-background rounded-[1.25rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-border/50">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center text-accent font-bold tracking-wider uppercase text-sm mb-4">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse mr-2" />
                  Limited Launch Offer — First 10 Clients
                </div>
                <h2 className="text-3xl md:text-4xl font-black mb-4">Professional Business Website</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-foreground/80 mb-6">
                  {['Responsive Design', '5–7 Pages', 'Contact/WhatsApp Integration', 'Basic SEO', 'Google Analytics', '1 Month Support'].map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center md:justify-start">
                      <CheckCircle2 className="w-4 h-4 text-primary mr-2 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-col items-center md:items-end shrink-0 bg-primary/5 p-8 rounded-2xl border border-primary/20 w-full md:w-auto">
                <div className="text-foreground/40 line-through text-2xl font-semibold mb-1">₹29,999</div>
                <div className="text-5xl font-black text-primary mb-6">₹19,999</div>
                <Link href="/quote" className="w-full">
                  <Button size="lg" className="w-full h-14 rounded-full text-lg shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all">Claim Offer Now</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Pricing Sections */}
        <div className="space-y-32">
          {Object.values(pricingConfig.services).map((service, sectionIdx) => (
            <div key={sectionIdx} className="scroll-m-20" id={service.name.toLowerCase().replace(/\s+/g, '-')}>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.name}</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto rounded-full" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                {service.tiers.map((pkg: any, i: number) => {
                  const isPopular = pkg.isPopular;
                  return (
                    <Card 
                      key={i} 
                      className={`relative flex flex-col transition-all duration-300 ${
                        isPopular 
                          ? 'border-primary shadow-xl shadow-primary/10 md:-translate-y-2' 
                          : 'border-border/50 hover:border-primary/30 glass'
                      }`}
                    >
                      {isPopular && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full flex items-center shadow-lg">
                          <Star className="w-3 h-3 mr-1 fill-current" /> Most Popular
                        </div>
                      )}
                      
                      <CardHeader className="pt-8">
                        <CardTitle className="text-xl md:text-2xl">{pkg.name}</CardTitle>
                      </CardHeader>
                      
                      <CardContent className="flex-1 flex flex-col justify-center">
                        <div className="mb-6">
                          <span className="text-xs font-semibold text-foreground/50 uppercase tracking-wider">
                            {pkg.isStartingPrice ? 'Starting From' : pkg.isMonthly ? 'Management Fee' : 'Fixed Price'}
                          </span>
                          
                          <div className="flex items-baseline gap-3 mt-2">
                            {pkg.originalPrice && (
                              <span className="text-foreground/40 line-through text-lg font-medium">
                                ₹{pkg.originalPrice.toLocaleString()}
                              </span>
                            )}
                            <div className={`text-4xl font-black ${isPopular ? 'text-primary' : 'text-foreground'}`}>
                              ₹{pkg.price.toLocaleString()}
                              {pkg.isMonthly && <span className="text-base font-normal text-foreground/50">/mo</span>}
                            </div>
                          </div>
                        </div>
                        
                        <ul className="space-y-3 mt-auto border-t border-border/50 pt-6">
                          <li className="flex items-start text-sm text-foreground/80 leading-relaxed">
                            <CheckCircle2 className={`w-5 h-5 mr-3 shrink-0 ${isPopular ? 'text-primary' : 'text-foreground/40'}`} />
                            {pkg.description}
                          </li>
                        </ul>
                      </CardContent>
                      
                      <CardFooter className="pb-8">
                        <Link href="/quote" className="w-full">
                          <Button 
                            className="w-full h-12 rounded-xl" 
                            variant={isPopular ? 'default' : 'outline'}
                          >
                            Get Started
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Important Note */}
        <div className="mt-32 max-w-3xl mx-auto text-center border-t border-border/50 pt-16">
          <p className="text-sm text-foreground/50 leading-relaxed">
            * All prices shown are indicative starting prices meant for MVP and startup packages. Custom enterprise software, comprehensive mobile apps, and complex AI integrations require a detailed discovery phase and will be quoted based on exact feature requirements, integrations, and timelines. Advertising budgets are paid directly to platforms and are not included in digital marketing management fees.
          </p>
        </div>

      </div>
    </div>
  );
}
