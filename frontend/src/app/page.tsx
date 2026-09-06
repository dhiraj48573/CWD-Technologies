import { Hero } from '@/components/sections/Hero';
import { ServicesOverview } from '@/components/sections/ServicesOverview';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { FAQ } from '@/components/sections/FAQ';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Trust / Expertise */}
      <section className="border-y border-border/50 bg-secondary/30 py-10 overflow-hidden relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
        <div className="container mx-auto px-4 mb-8">
          <p className="text-center text-sm font-semibold text-foreground/50 tracking-widest uppercase">
            Trusted by businesses across industries
          </p>
        </div>
        <div className="flex w-[200%] animate-marquee">
          <div className="flex w-1/2 justify-around items-center">
            {['Startups', 'Enterprises', 'Healthcare', 'E-Commerce', 'Education', 'Real Estate', 'Finance'].map((industry, i) => (
              <span key={`first-${i}`} className="text-xl md:text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-foreground/40 to-foreground/20 px-8">
                {industry}
              </span>
            ))}
          </div>
          <div className="flex w-1/2 justify-around items-center">
            {['Startups', 'Enterprises', 'Healthcare', 'E-Commerce', 'Education', 'Real Estate', 'Finance'].map((industry, i) => (
              <span key={`second-${i}`} className="text-xl md:text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-foreground/40 to-foreground/20 px-8">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About Overview */}
      <section className="py-24 relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl -z-10 rounded-full"></div>
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Your Technology & Digital Growth Partner</h2>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                We help businesses transform their ideas into powerful digital realities. From complex web applications and business software to AI-powered automation and data-driven marketing campaigns.
              </p>
              <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                Our approach is professional, technical, and entirely business-oriented. We build solutions that are scalable, secure, and designed to generate tangible growth.
              </p>
              <Link href="/about">
                <Button variant="outline" size="lg">Learn About Our Process</Button>
              </Link>
            </div>
            <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden glass border-border group">
               <Image 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" 
                  alt="Our Team Engineering Growth" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" 
                />
               <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
               <div className="absolute bottom-6 left-6 right-6">
                 <div className="glass p-4 rounded-xl border border-white/10 backdrop-blur-md">
                   <p className="font-bold text-lg text-primary">100%</p>
                   <p className="text-sm text-foreground/80">Business-Oriented Solutions</p>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      <ServicesOverview />
      
      <WhyChooseUs />

      <FAQ />

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container relative z-10 mx-auto max-w-4xl px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Have an Idea? Let's Build It.</h2>
          <p className="text-xl text-foreground/80 mb-10 leading-relaxed max-w-2xl mx-auto">
            Whether you need a website, mobile application, custom software, AI solution or digital marketing strategy, our team can help turn your idea into a scalable digital solution.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/quote" className="w-full sm:w-auto">
              <Button size="lg" className="w-full text-lg px-8">Start Your Project</Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full text-lg px-8 bg-background/50 backdrop-blur-sm">Get Free Consultation</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
