import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-real-estate-construction.dim_1600x800.png"
          alt="Premium real estate and construction"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 py-32">
        <div className="max-w-3xl">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-semibold text-primary">15 Years of Excellence</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Dev Properties
            <br />
            <span className="text-primary">& Construction</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Your Trusted Partner in Real Estate
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Based in Lucknow, Uttar Pradesh, India • Specializing in buying, selling, reselling
            properties, property management, and premium construction services
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={() => scrollToSection('#contact')} className="text-base">
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('#properties')}
              className="text-base"
            >
              View Properties
            </Button>
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="text-base"
            >
              <a href="tel:+918565964384">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
