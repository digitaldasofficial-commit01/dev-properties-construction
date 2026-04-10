import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Bed, Bath, Square, Phone } from 'lucide-react';

const properties = {
  buy: [
    {
      title: '3 BHK Luxury Apartment',
      location: 'Gomti Nagar, Lucknow',
      price: '₹85 Lakhs',
      beds: 3,
      baths: 2,
      area: '1,450 sq ft',
      type: 'Apartment',
    },
    {
      title: '4 BHK Independent Villa',
      location: 'Vrindavan Colony, Lucknow',
      price: '₹1.2 Crores',
      beds: 4,
      baths: 3,
      area: '2,200 sq ft',
      type: 'Villa',
    },
    {
      title: '2 BHK Modern Flat',
      location: 'Indira Nagar, Lucknow',
      price: '₹55 Lakhs',
      beds: 2,
      baths: 2,
      area: '1,100 sq ft',
      type: 'Apartment',
    },
  ],
  sell: [
    {
      title: 'Commercial Space',
      location: 'Hazratganj, Lucknow',
      price: '₹2.5 Crores',
      beds: 0,
      baths: 2,
      area: '3,500 sq ft',
      type: 'Commercial',
    },
    {
      title: 'Residential Plot',
      location: 'Aliganj, Lucknow',
      price: '₹45 Lakhs',
      beds: 0,
      baths: 0,
      area: '1,800 sq ft',
      type: 'Plot',
    },
    {
      title: '3 BHK Builder Floor',
      location: 'Mahanagar, Lucknow',
      price: '₹75 Lakhs',
      beds: 3,
      baths: 2,
      area: '1,600 sq ft',
      type: 'Builder Floor',
    },
  ],
  rent: [
    {
      title: '2 BHK Furnished Apartment',
      location: 'Gomti Nagar Extension',
      price: '₹18,000/month',
      beds: 2,
      baths: 2,
      area: '1,200 sq ft',
      type: 'Apartment',
    },
    {
      title: '3 BHK Semi-Furnished',
      location: 'Alambagh, Lucknow',
      price: '₹22,000/month',
      beds: 3,
      baths: 2,
      area: '1,400 sq ft',
      type: 'Apartment',
    },
    {
      title: 'Office Space',
      location: 'Hazratganj, Lucknow',
      price: '₹35,000/month',
      beds: 0,
      baths: 1,
      area: '1,000 sq ft',
      type: 'Commercial',
    },
  ],
};

export function PropertiesSection() {
  const [activeTab, setActiveTab] = useState('buy');

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="properties" className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-semibold text-primary">Properties</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Find Your Perfect Property
          </h2>
          <p className="text-lg text-muted-foreground">
            Browse our curated selection of properties for buying, selling, or renting
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
            <TabsTrigger value="buy">Buy</TabsTrigger>
            <TabsTrigger value="sell">Sell</TabsTrigger>
            <TabsTrigger value="rent">Rent</TabsTrigger>
          </TabsList>

          {Object.entries(properties).map(([key, items]) => (
            <TabsContent key={key} value={key}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((property, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-2">
                        <Badge variant="secondary">{property.type}</Badge>
                        <div className="text-xl font-bold text-primary">{property.price}</div>
                      </div>
                      <CardTitle className="text-xl">{property.title}</CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {property.location}
                      </div>
                    </CardHeader>
                    <CardContent className="pb-4">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        {property.beds > 0 && (
                          <div className="flex items-center gap-1">
                            <Bed className="h-4 w-4" />
                            <span>{property.beds} Beds</span>
                          </div>
                        )}
                        {property.baths > 0 && (
                          <div className="flex items-center gap-1">
                            <Bath className="h-4 w-4" />
                            <span>{property.baths} Baths</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <Square className="h-4 w-4" />
                          <span>{property.area}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button onClick={scrollToContact} className="w-full">
                        <Phone className="mr-2 h-4 w-4" />
                        Contact Us
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
