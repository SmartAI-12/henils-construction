import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, Wrench, ClipboardCheck, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: 'General Contracting',
      description: 'Full-service construction with expert project management and quality assurance.',
      features: ['Planning', 'Execution', 'Quality', 'Safety'],
      color: 'from-primary to-primary-light',
    },
    {
      icon: Palette,
      title: 'Design & Consultancy',
      description: 'Innovative and sustainable building designs tailored to your needs.',
      features: ['Architecture', 'Engineering', 'MEP', 'Sustainability'],
      color: 'from-secondary to-secondary-light',
    },
    {
      icon: Wrench,
      title: 'Design & Build',
      description: 'Seamless integration of design and construction for efficiency.',
      features: ['Single Contact', 'Fast Track', 'Cost Control', 'Quality'],
      color: 'from-construction-gold to-construction-steel',
    },
    {
      icon: ClipboardCheck,
      title: 'Project Management',
      description: 'Comprehensive oversight for on-time, on-budget project delivery.',
      features: ['Scheduling', 'Budgeting', 'Monitoring', 'Coordination'],
      color: 'from-primary-light to-secondary',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2">
            <Building2 className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Our Services</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground fade-in-up">
            Comprehensive Construction
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed fade-in-up">
            Comprehensive construction solutions for all your building needs. <Link to="/services" className="text-primary hover:underline">Learn more →</Link>
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`luxury-card group hover:shadow-luxury transition-all duration-500 transform hover:-translate-y-2 fade-in-up`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div className="pt-4">
                    <Link 
                      to="/services" 
                      className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors group"
                    >
                      <span className="font-medium">Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center fade-in-up" style={{ animationDelay: '800ms' }}>
          <Button 
            size="lg" 
            className="construction-button text-lg px-8 py-6"
            asChild
          >
            <Link to="/services" className="flex items-center space-x-2">
              <span>Explore All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;