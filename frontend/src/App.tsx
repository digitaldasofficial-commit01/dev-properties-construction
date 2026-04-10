import { SiteHeader } from './components/SiteHeader';
import { SiteFooter } from './components/SiteFooter';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { PropertiesSection } from './sections/PropertiesSection';
import { ConstructionSection } from './sections/ConstructionSection';
import { WhyChooseUsSection } from './sections/WhyChooseUsSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { ContactSection } from './sections/ContactSection';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PropertiesSection />
        <ConstructionSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <WhatsAppFloatingButton />
    </div>
  );
}

export default App;
