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
      description: 'Comprehensive construction services leveraging extensive resources and skilled labor to surpass client expectations. We ensure quality and efficiency without compromise.',
      features: [
        'Single point of responsibility',
        'Streamlined communication',
        'Cost-effective solutions',
        'Risk management',
        'Project Planning & Coordination',
        'Resource & Material Management',
        'Quality Control & Assurance',
        'Safety Compliance & Training',
        'Subcontractor Management',
        'Timeline & Budget Control'
      ],
      color: 'bg-gradient-to-br from-blue-600 to-blue-400',
    },
    {
      icon: Palette,
      title: 'Design & Build',
      description: 'End-to-end construction solutions combining innovative design with expert construction for seamless project delivery. We transform visions into reality with precision and creativity.',
      features: [
        'Integrated design & construction',
        'Faster project delivery',
        'Cost certainty',
        'Innovative solutions',
        'Concept Development',
        'Architectural Design',
        'Engineering Solutions',
        'Value Engineering',
        'Construction Management',
        'Turnkey Delivery'
      ],
      color: 'bg-gradient-to-br from-emerald-600 to-emerald-400',
    },
    {
      icon: Wrench,
      title: 'Renovation & Remodeling',
      description: 'Breathing new life into existing spaces with expert renovation and remodeling services. We enhance functionality and aesthetics while maintaining structural integrity.',
      features: [
        'Space optimization',
        'Modern upgrades',
        'Quality craftsmanship',
        'Minimal disruption',
        'Interior Renovations',
        'Exterior Upgrades',
        'Kitchen & Bath Remodels',
        'Structural Modifications',
        'Finish Work',
        'Code Compliance'
      ],
      color: 'bg-gradient-to-br from-amber-600 to-amber-400',
    },
    {
      icon: ClipboardCheck,
      title: 'Project Management',
      description: 'Professional project management services ensuring your construction project stays on time, within budget, and to the highest quality standards.',
      features: [
        'Expert oversight',
        'Cost control',
        'Schedule management',
        'Quality assurance',
        'Project Planning',
        'Contract Administration',
        'Risk Assessment',
        'Stakeholder Coordination',
        'Progress Monitoring',
        'Closeout & Handover'
      ],
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
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Construction
            <span className="block bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Professional construction services tailored to meet your project's unique requirements
          </p>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className={`h-2 ${service.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-lg ${service.color} bg-opacity-10 mr-4`}>
                      <service.icon className={`w-5 h-5 ${service.color.split(' ')[0].replace('bg-', 'text-')}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>

                  <Link 
                    to="/services" 
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium inline-flex items-center"
                  >
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

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
      </div>
    </section>
  );
};

export default ServicesSection;