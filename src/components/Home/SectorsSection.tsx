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
      description: 'Specialized learning environments for schools and colleges.',
      projects: '25+ Projects',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Modern medical facilities meeting healthcare standards.',
      projects: '15+ Projects',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: Building,
      title: 'Commercial',
      description: 'Office and retail spaces for modern businesses.',
      projects: '40+ Projects',
      color: 'from-primary to-primary-light',
      bgColor: 'bg-primary/5',
    },
    {
      icon: Factory,
      title: 'Industrial',
      description: 'Manufacturing and warehouse facilities.',
      projects: '20+ Projects',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
    },
    {
      icon: Home,
      title: 'Residential',
      description: 'Luxury homes and apartment complexes.',
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
            Tailored solutions for every industry. <Link to="/sectors" className="text-secondary hover:underline">Explore sectors →</Link>
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
      </div>
    </section>
  );
};

export default SectorsSection;