import { useEffect, useRef, useState } from 'react';
import { Scissors, Palette, Sparkles, Hand, Waves } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Scissors,
      title: 'Hair Styling',
      description: 'Professional cuts, coloring, and styling for all hair types. From classic cuts to trendy transformations.',
      price: 'Starting at $85',
    },
    {
      icon: Palette,
      title: 'Makeup',
      description: 'Professional makeup application for special events, weddings, or everyday glamour.',
      price: 'Starting at $65',
    },
    {
      icon: Sparkles,
      title: 'Facials',
      description: 'Rejuvenating facial treatments using premium skincare products for glowing, healthy skin.',
      price: 'Starting at $95',
    },
    {
      icon: Hand,
      title: 'Manicure & Pedicure',
      description: 'Luxury nail care services with gel polish, nail art, and relaxing hand and foot treatments.',
      price: 'Starting at $45',
    },
    {
      icon: Waves,
      title: 'Spa Treatments',
      description: 'Relaxing massage therapy, body treatments, and wellness services for ultimate rejuvenation.',
      price: 'Starting at $120',
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of beauty and wellness services, 
            designed to enhance your natural beauty and provide the ultimate relaxation experience.
          </p>
        </div>

        {/* Services Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border/50 ${
                isVisible ? 'slide-up' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-rose-gold rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="text-lg font-semibold text-primary">
                  {service.price}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            Ready to experience our premium services?
          </p>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-rose-gold text-white font-semibold rounded-md hover:opacity-90 transition-opacity"
          >
            Book Your Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;