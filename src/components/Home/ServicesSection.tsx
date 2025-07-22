import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building2, Wrench, ClipboardCheck, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      icon: Building2,
      title: 'General Contracting',
      description: 'Full-service construction with expert project management and quality assurance.',
      features: ['Planning', 'Execution', 'Quality', 'Safety'],
      color: 'bg-gradient-to-br from-blue-600 to-blue-400',
    },
    {
      icon: Palette,
      title: 'Design & Consultancy',
      description: 'Innovative and sustainable building designs tailored to your needs.',
      features: ['Architecture', 'Engineering', 'MEP', 'Sustainability'],
      color: 'bg-gradient-to-br from-emerald-600 to-emerald-400',
    },
    {
      icon: Wrench,
      title: 'Design & Build',
      description: 'Seamless integration of design and construction for efficiency.',
      features: ['Single Contact', 'Fast Track', 'Cost Control', 'Quality'],
      color: 'bg-gradient-to-br from-amber-600 to-amber-400',
    },
    {
      icon: ClipboardCheck,
      title: 'Project Management',
      description: 'Comprehensive oversight for on-time, on-budget project delivery.',
      features: ['Scheduling', 'Budgeting', 'Monitoring', 'Coordination'],
      color: 'bg-gradient-to-br from-violet-600 to-violet-400',
    },
  ];

  return (
    <section className="relative py-20 bg-white">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-amber-500"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white shadow-sm rounded-full px-6 py-2 border border-gray-100 mb-4 mx-auto">
            <Building2 className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Comprehensive Construction
            <span className="block bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
        </div>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`service-card service-card-${index + 1} bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative">
                <div className={`h-2 ${service.color}`}></div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center text-white mb-4 transform transition-transform duration-500 group-hover:rotate-12`}>
                        <service.icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 group">
                        <div className={`w-2 h-2 rounded-full ${service.color.split(' ')[0]} transition-all duration-300 group-hover:w-3 group-hover:h-3`}></div>
                        <span className="text-sm font-medium text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <Link 
                      to="/services" 
                      className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-all duration-300 group"
                    >
                      <span className="relative">
                        Learn more
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            variant="outline"
            size="lg" 
            className="bg-white border-gray-200 hover:bg-gray-50 text-gray-800 hover:text-gray-900 text-lg px-8 py-6 shadow-sm hover:shadow transition-all duration-300"
            asChild
          >
            <Link to="/services" className="flex items-center justify-center space-x-2">
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