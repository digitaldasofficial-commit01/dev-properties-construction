import { CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    title: '15 Years of Proven Experience',
    description: "Over a decade and a half of excellence in Lucknow's real estate and construction industry.",
  },
  {
    title: 'Deep Local Market Expertise',
    description: 'Unmatched knowledge of Lucknow and Uttar Pradesh property markets, trends, and opportunities.',
  },
  {
    title: 'Transparent & Honest Dealings',
    description: 'No hidden costs, clear communication, and complete transparency in every transaction.',
  },
  {
    title: 'End-to-End Support',
    description: 'From property search to legal documentation and possession, we handle everything for you.',
  },
  {
    title: 'Quality Construction Standards',
    description: 'Premium materials, skilled craftsmen, and rigorous quality checks ensure lasting value.',
  },
  {
    title: 'Customer-Centric Approach',
    description: 'Your satisfaction is our priority. Personalized service tailored to your unique needs.',
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-choose-us" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-semibold text-primary">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Trusted Real Estate Partner
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover what sets Dev Properties & Construction apart in Lucknow's competitive market
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg border hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-2 rounded-full shrink-0">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{reason.title}</h3>
                  <p className="text-muted-foreground">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
