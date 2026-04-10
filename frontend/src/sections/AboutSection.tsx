import { Award, Users, Building, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Award, label: 'Years of Experience', value: '15+' },
  { icon: Users, label: 'Happy Clients', value: '500+' },
  { icon: Building, label: 'Properties Sold', value: '300+' },
  { icon: TrendingUp, label: 'Projects Completed', value: '50+' },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-semibold text-primary">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Building Trust for Over 15 Years
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Dev Properties & Construction has been a cornerstone of Lucknow's real estate and
              construction industry for over 15 years. We pride ourselves on delivering exceptional
              service, transparent dealings, and unmatched local market expertise.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our deep understanding of Lucknow's property landscape, combined with our commitment
              to quality construction and customer satisfaction, makes us the preferred choice for
              homebuyers, sellers, and investors across Uttar Pradesh.
            </p>
            <p className="text-lg text-muted-foreground">
              Whether you're looking to buy your dream home, sell a property, or build from the
              ground up, our experienced team is here to guide you every step of the way with
              professionalism and integrity.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
