import { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
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

  const testimonials = [
    {
      name: 'Sarah Johnson',
      service: 'Hair Styling & Color',
      rating: 5,
      text: 'Absolutely incredible experience! The team at Bella Salon transformed my hair beyond my expectations. The attention to detail and personalized service made me feel like royalty.',
      avatar: '👩🏼‍💼',
    },
    {
      name: 'Emily Chen',
      service: 'Bridal Makeup',
      rating: 5,
      text: 'My wedding makeup was flawless! They listened to exactly what I wanted and created the perfect look that lasted all day. I felt so beautiful and confident.',
      avatar: '👰🏻‍♀️',
    },
    {
      name: 'Maria Rodriguez',
      service: 'Spa Package',
      rating: 5,
      text: 'The most relaxing spa experience I\'ve ever had. From the facial to the massage, every moment was pure bliss. The ambiance and service quality are unmatched.',
      avatar: '🧘🏽‍♀️',
    },
    {
      name: 'Jessica Taylor',
      service: 'Manicure & Pedicure',
      rating: 5,
      text: 'Their nail art is incredible! Such attention to detail and creativity. My nails have never looked better, and the relaxing atmosphere made it the perfect treat.',
      avatar: '💅🏻',
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-accent fill-accent' : 'text-muted'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our valued clients have to say 
            about their experiences at Bella Salon.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className={`group relative overflow-hidden border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                isVisible ? 'slide-up' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-12 h-12 bg-gradient-rose-gold rounded-full flex items-center justify-center">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-center text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>

                {/* Client Info */}
                <div className="text-center">
                  <div className="text-2xl mb-2">{testimonial.avatar}</div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.service}</div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-6 h-6 bg-accent/20 rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-4 h-4 bg-primary/20 rounded-full"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex justify-center items-center space-x-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-accent fill-accent" />
              <span className="font-semibold">4.9/5 Rating</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border"></div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold">500+ Happy Clients</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-border"></div>
            <div className="flex items-center space-x-2">
              <span className="font-semibold">10+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;