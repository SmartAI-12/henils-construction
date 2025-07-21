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
      description: 'Comprehensive construction services leveraging extensive resources and skilled labor to surpass expectations.',
      features: ['Project Planning', 'Resource Management', 'Quality Control', 'Safety Compliance'],
      color: 'from-primary to-primary-light',
    },
    {
      icon: Palette,
      title: 'Design & Consultancy',
      description: 'Innovative, sustainable designs maximizing natural energy and minimizing waste for visionary buildings.',
      features: ['Architectural Design', 'Structural Engineering', 'MEP Planning', 'Sustainability Solutions'],
      color: 'from-secondary to-secondary-light',
    },
    {
      icon: Wrench,
      title: 'Design & Build',
      description: 'Integrated approach fostering collaboration and efficiency for faster delivery and enhanced involvement.',
      features: ['Single Point Contact', 'Faster Delivery', 'Cost Optimization', 'Quality Assurance'],
      color: 'from-construction-gold to-construction-steel',
    },
    {
      icon: ClipboardCheck,
      title: 'Project Management',
      description: 'End-to-end project oversight ensuring timelines, budgets, and quality standards are consistently met.',
      features: ['Timeline Management', 'Budget Control', 'Progress Monitoring', 'Stakeholder Coordination'],
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
            From concept to completion, we provide end-to-end construction services tailored to meet the unique needs of builders and developers across various sectors.
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