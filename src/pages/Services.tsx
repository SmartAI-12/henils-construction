import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
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

      {/* Services Detail */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Benefits */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-foreground">Key Benefits:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Features Card */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <Card className="luxury-card">
                    <CardContent className="p-8">
                      <h4 className="text-xl font-semibold text-foreground mb-6">What's Included:</h4>
                      <div className="space-y-4">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-foreground">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss how our comprehensive services can bring your development vision to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="construction-button" asChild>
                <Link to="/contact" className="flex items-center space-x-2">
                  <span>Get Project Quote</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/projects">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;