import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, TrendingUp, Key, Briefcase, HardHat } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Buy Property',
    description:
      'Find your dream home from our curated selection of residential and commercial properties across Lucknow. Expert guidance throughout the buying process.',
  },
  {
    icon: TrendingUp,
    title: 'Sell Property',
    description:
      'Get the best value for your property with our proven marketing strategies and extensive buyer network. Fast, transparent, and hassle-free selling.',
  },
  {
    icon: Key,
    title: 'Resell Property',
    description:
      'Maximize returns on your investment properties. We handle resale transactions with market insights and competitive pricing strategies.',
  },
  {
    icon: Briefcase,
    title: 'Property Management',
    description:
      'Comprehensive property management services including tenant screening, rent collection, maintenance, and legal compliance for worry-free ownership.',
  },
  {
    icon: HardHat,
    title: 'Construction Services',
    description:
      'Premium construction services from planning to completion. Quality materials, skilled craftsmen, and timely delivery for residential and commercial projects.',
  },
];

export function ServicesSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-semibold text-primary">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Comprehensive Real Estate Solutions
          </h2>
          <p className="text-lg text-muted-foreground">
            From property transactions to construction, we offer end-to-end services tailored to
            your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="hover:shadow-lg transition-shadow border-2 hover:border-primary/50"
              >
                <CardHeader>
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={() => scrollToSection('#contact')}>
            List Your Property
          </Button>
          <Button size="lg" variant="outline" onClick={() => scrollToSection('#contact')}>
            Book Site Visit
          </Button>
        </div>
      </div>
    </section>
  );
}
