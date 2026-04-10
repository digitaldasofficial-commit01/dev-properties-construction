import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    initials: 'RK',
    role: 'Homeowner',
    content: 'Dev Properties helped us find our dream home in Gomti Nagar. Their professionalism and market knowledge made the entire process smooth and stress-free. Highly recommended!',
  },
  {
    name: 'Priya Sharma',
    initials: 'PS',
    role: 'Property Investor',
    content: "I have worked with Dev Properties on multiple property investments. Their transparent approach and excellent after-sales support make them stand out in Lucknow's real estate market.",
  },
  {
    name: 'Amit Verma',
    initials: 'AV',
    role: 'Construction Client',
    content: 'The construction quality and timely delivery exceeded our expectations. The team was professional, responsive, and delivered exactly what was promised. Worth every rupee!',
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="/assets/generated/testimonials-bg.dim_1600x600.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-semibold text-primary">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground">
            Real experiences from satisfied clients across Lucknow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <Quote className="h-10 w-10 text-primary/20 mb-4" />
                <p className="text-muted-foreground mb-6 italic">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
