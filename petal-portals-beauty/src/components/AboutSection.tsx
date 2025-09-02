import { useEffect, useRef, useState } from 'react';
import { Heart, Award, Users } from 'lucide-react';
import salonInterior from '@/assets/salon-interior.jpg';

const AboutSection = () => {
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

  const stats = [
    { icon: Heart, label: 'Happy Clients', value: '500+' },
    { icon: Award, label: 'Years Experience', value: '10+' },
    { icon: Users, label: 'Expert Stylists', value: '8' },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-8 ${isVisible ? 'slide-up' : ''}`}>
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                About <span className="gradient-text">Bella Salon</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                For over a decade, Bella Salon has been the premier destination for beauty and wellness 
                in our community. Our team of expert stylists and beauty professionals are dedicated 
                to helping you look and feel your absolute best.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe that beauty is an art form, and every client is our canvas. Using only 
                the finest products and latest techniques, we create personalized experiences that 
                enhance your natural beauty and boost your confidence.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`text-center ${isVisible ? 'fade-in' : ''}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-rose-gold rounded-full mb-3">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className={`relative ${isVisible ? 'slide-up' : ''}`} style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={salonInterior} 
                alt="Bella Salon Interior" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/30 rounded-full blur-sm"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;