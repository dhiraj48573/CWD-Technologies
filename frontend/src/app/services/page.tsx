import { servicesConfig } from '@/config/services.config';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Our Services | CWD Technologies',
  description: 'Explore our complete suite of digital services including Website Development, Custom Software, Mobile Apps, AI Solutions, and Digital Marketing.',
};

export default function ServicesPage() {
  return (
    <div className="py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services Ecosystem</h1>
          <p className="text-lg text-foreground/70">
            A comprehensive suite of digital technology solutions to build, scale, and grow your business.
          </p>
        </div>

        <div className="space-y-24">
          {servicesConfig.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={service.id} id={service.id} className="scroll-mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="h-16 w-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <Icon size={32} />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-foreground/80">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 text-primary">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex gap-4">
                    <Link href={`/quote?service=${service.id}`}>
                      <Button>Get a Quote</Button>
                    </Link>
                    <Link href={`https://wa.me/919259534648?text=Hello, I am interested in your ${service.title} service. I would like to discuss my project requirements.`} target="_blank">
                      <Button variant="outline">Discuss on WhatsApp</Button>
                    </Link>
                  </div>
                </div>
                
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-video lg:aspect-square max-h-[500px] rounded-2xl overflow-hidden glass border-border flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/10 relative">
                    {service.image ? (
                      <Image src={service.image} alt={service.title} fill className="object-cover hover:scale-105 transition-transform duration-700" />
                    ) : (
                      <Icon size={120} className="text-foreground/10" />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
