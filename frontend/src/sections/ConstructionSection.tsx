import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ClipboardCheck, Ruler, Hammer, Shield, Clock } from 'lucide-react';

const processSteps = [
  {
    icon: ClipboardCheck,
    title: 'Planning & Design',
    description:
      'Comprehensive project planning with detailed architectural designs tailored to your vision and budget.',
  },
  {
    icon: Ruler,
    title: 'Quality Materials',
    description:
      'We use only premium, certified materials ensuring durability and longevity of your construction.',
  },
  {
    icon: Hammer,
    title: 'Expert Execution',
    description:
      'Skilled craftsmen and modern construction techniques deliver superior results on every project.',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description:
      'Rigorous quality checks at every stage ensure your project meets the highest standards.',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description:
      'We respect your time with realistic schedules and consistent progress updates throughout construction.',
  },
];

export function ConstructionSection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="construction" className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="/assets/generated/section-bg-architecture.dim_1600x900.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-semibold text-primary">Construction</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Premium Construction Services
          </h2>
          <p className="text-lg text-muted-foreground">
            From residential homes to commercial complexes, we deliver construction excellence with
            transparency, quality, and precision at every step
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <Card
                key={step.title}
                className="text-center hover:shadow-lg transition-shadow border-2 hover:border-primary/50"
              >
                <CardHeader>
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg" onClick={scrollToContact}>
            Book Site Visit
          </Button>
        </div>
      </div>
    </section>
  );
}
