import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ServiceButton } from '@/components/ui/service-button';
import { Building2, Palette, Wrench, ClipboardCheck, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';

const Services = () => {
  const services = [
    {
      icon: Building2,
      title: 'General Contracting',
      description: 'Comprehensive construction services leveraging extensive resources and skilled labor to surpass client expectations. We ensure quality and efficiency without compromise.',
      features: [
        'End-to-end project management',
        'Skilled workforce deployment',
        'Quality assurance protocols',
        'Timely project delivery'
      ],
      benefits: [
        'Cost-effective',
        'Efficient',
        'Reliable'
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
    <Layout
      pageTitle="Our Services | Henil Construction"
      pageDescription="Discover our comprehensive range of construction services tailored to meet your project needs."
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Comprehensive construction solutions tailored for builders and developers. From concept to completion, we deliver excellence at every stage.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-2">
                    <h4 className="font-medium">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <ServiceButton asChild className="w-full">
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </ServiceButton>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default Services;