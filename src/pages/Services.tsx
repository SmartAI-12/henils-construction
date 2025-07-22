import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, Palette, Wrench, ClipboardCheck, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: 'General Contracting',
      description: 'Comprehensive construction services leveraging extensive resources and skilled labor to surpass client expectations. We ensure quality and efficiency without compromise.',
      features: [
        'Project Planning & Coordination',
        'Resource & Material Management',
        'Quality Control & Assurance',
        'Safety Compliance & Training',
        'Subcontractor Management',
        'Timeline & Budget Control'
      ],
      benefits: [
        'Single point of responsibility',
        'Streamlined communication',
        'Cost-effective solutions',
        'Risk management'
      ]
    },
    {
      icon: Palette,
      title: 'Design & Consultancy',
      description: 'Our team combines local and global perspectives to create innovative, sustainable designs that maximize natural energy and minimize waste.',
      features: [
        'Architectural Design & Planning',
        'Structural Engineering',
        'MEP System Design',
        'Sustainability Solutions',
        'Building Information Modeling (BIM)',
        'Regulatory Compliance'
      ],
      benefits: [
        'Innovative design solutions',
        'Sustainable construction',
        'Regulatory expertise',
        'Cost optimization'
      ]
    },
    {
      icon: Wrench,
      title: 'Design & Build',
      description: 'Integrated approach that seamlessly combines design and construction phases, fostering collaboration and efficiency for enhanced project delivery.',
      features: [
        'Integrated Project Delivery',
        'Value Engineering',
        'Fast-Track Construction',
        'Single Contract Responsibility',
        'Collaborative Planning',
        'Quality Assurance'
      ],
      benefits: [
        'Faster project delivery',
        'Reduced costs',
        'Enhanced collaboration',
        'Better quality control'
      ]
    },
    {
      icon: ClipboardCheck,
      title: 'Project Management',
      description: 'End-to-end project oversight ensuring timelines, budgets, and quality standards are consistently met throughout the construction process.',
      features: [
        'Schedule Management',
        'Budget Control & Monitoring',
        'Progress Tracking & Reporting',
        'Stakeholder Coordination',
        'Risk Assessment & Mitigation',
        'Quality Management'
      ],
      benefits: [
        'On-time delivery',
        'Budget adherence',
        'Risk mitigation',
        'Clear communication'
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold">
              Our Services
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Comprehensive construction solutions tailored for builders and developers. 
              From concept to completion, we deliver excellence at every stage.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow space-y-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-2">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit, idx) => (
                        <span 
                          key={idx}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="pt-2">
                  <Button variant="outline" className="w-full group" asChild>
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Our team of experts is ready to bring your vision to life. Contact us today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Get a Free Quote
            </Button>
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;