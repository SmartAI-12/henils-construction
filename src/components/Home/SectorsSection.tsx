import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Heart, Building, Factory, Home, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SectorsSection = () => {
  const sectors = [
    {
      icon: GraduationCap,
      title: 'Educational',
      description: 'Schools, colleges, and educational institutions with specialized learning environments.',
      projects: '25+ Projects',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Hospitals, clinics, and medical facilities meeting stringent healthcare standards.',
      projects: '15+ Projects',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Building,
      title: 'Commercial',
      description: 'Office complexes, retail spaces, and commercial buildings for modern businesses.',
      projects: '40+ Projects',
      color: 'from-primary to-primary-light',
      bgColor: 'bg-primary/5',
    },
    {
      icon: Factory,
      title: 'Industrial',
      description: 'Manufacturing facilities, warehouses, and industrial complexes.',
      projects: '20+ Projects',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      icon: Home,
      title: 'Residential',
      description: 'High-rise apartments, luxury residences, and residential complexes.',
      projects: '60+ Projects',
      color: 'from-secondary to-secondary-light',
      bgColor: 'bg-secondary/5',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-6 py-2">
            <Building className="w-5 h-5 text-secondary" />
            <span className="text-secondary font-medium">Sectors We Serve</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground fade-in-up">
            Specialized Expertise Across
            <span className="block bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Multiple Sectors
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed fade-in-up">
            Our deep understanding of sector-specific requirements enables us to deliver tailored solutions that meet the unique demands of each industry.
          </p>
        </div>

        {/* Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sectors.map((sector, index) => (
            <Card 
              key={index} 
              className={`luxury-card group hover:shadow-luxury transition-all duration-500 transform hover:-translate-y-2 fade-in-up ${sector.bgColor}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center">
                {/* Icon */}
                <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${sector.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <sector.icon className="w-10 h-10 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {sector.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {sector.description}
                  </p>

                  {/* Project Count */}
                  <div className="inline-flex items-center space-x-2 bg-white/80 rounded-full px-4 py-2">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${sector.color}`} />
                    <span className="text-sm font-medium text-foreground">{sector.projects}</span>
                  </div>

                  {/* Learn More Link */}
                  <div className="pt-4">
                    <Link 
                      to={`/sectors#${sector.title.toLowerCase()}`}
                      className="inline-flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors group"
                    >
                      <span className="font-medium">View Projects</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 md:p-12 text-center text-white fade-in-up" style={{ animationDelay: '600ms' }}>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Partner with Sector Specialists?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our sector-specific expertise can add value to your next development project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6"
              asChild
            >
              <Link to="/sectors">Explore All Sectors</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
              asChild
            >
              <Link to="/contact">Discuss Your Project</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;