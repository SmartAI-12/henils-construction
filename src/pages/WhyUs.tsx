import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Award, Users, Target, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyUs = () => {
  const competitiveEdge = {
    title: "Our Competitive Edge",
    description: "We combine expertise, innovation, and commitment to deliver exceptional results on every project.",
  };

  const differentiators = [
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We complete 100% of our projects on or before the scheduled deadline.',
      stat: '100%',
      statLabel: 'On-Time Projects',
      details: [
        'Comprehensive project planning',
        'Efficient resource allocation',
        'Proactive risk management',
        'Dedicated project managers',
        'Real-time progress tracking'
      ]
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Our commitment to quality is reflected in our 150+ certifications.',
      stat: '150+',
      statLabel: 'Certifications',
      details: [
        'ISO 9001:2015 Certified',
        'LEED Accredited Professionals',
        'NABH & NABL Compliant',
        'RERA Registered',
        'Green Building Certified'
      ]
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: '50+ skilled professionals dedicated to your project success.',
      stat: '50+',
      statLabel: 'Experts',
      details: [
        'Average 15+ years experience',
        'In-house architects & engineers',
        'Certified project managers',
        'Skilled labor force',
        'Continuous training programs'
      ]
    },
    {
      icon: Target,
      title: 'Budget Precision',
      description: '95% of our projects are completed within the allocated budget.',
      stat: '95%',
      statLabel: 'On Budget',
      details: [
        'Detailed cost estimation',
        'Value engineering',
        'Bulk material procurement',
        'Waste reduction strategies',
        'Financial transparency'
      ]
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Zero lost-time accidents across all our project sites.',
      stat: '0',
      statLabel: 'Incidents',
      details: [
        'OSHA compliant practices',
        'Regular safety audits',
        'PPE enforcement',
        'Emergency response plans',
        'Safety training programs'
      ]
    },
    {
      icon: CheckCircle,
      title: 'Partner Network',
      description: 'Strong relationships with 25+ trusted partners and suppliers.',
      stat: '25+',
      statLabel: 'Partners',
      details: [
        'Material suppliers',
        'Equipment providers',
        'Specialty contractors',
        'Technology partners',
        'Financial institutions'
      ]
    }
  ];

  const testimonials = [
    {
      quote: "Henil Construction delivered our 20-story residential complex 2 weeks ahead of schedule with exceptional quality. Their attention to detail is unmatched.",
      author: "Rajesh Mehta",
      position: "Director, Skyline Developers",
      project: "Mahindra Happinest Project"
    },
    {
      quote: "Working with Henil has been a game-changer for our commercial projects. Their expertise in high-rise construction is evident in every aspect.",
      author: "Priya Sharma",
      position: "Project Head, Metro Constructions",
      project: "Rajhans Vaibhav Tower"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold">
              Why Choose Us
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Discover what makes us the preferred construction partner for leading developers and builders.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed">
              Shree Enterprises not only aims to meet but exceed clients' expectations, fostering trust and long-term relationships. 
              Consistently delivering exceptional quality and service establishes our reputation as a reliable and reputable provider 
              in the construction sector.
            </p>
          </div>
        </div>
      </section>

      {/* Key Strategy Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#E00000]">
            <span className="border-b-2 border-[#E00000] pb-2">KEY STRATEGY</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Strategy Plan */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strategy Plan</h3>
              <p className="text-gray-700">
                Strategic planning ensures logical, coordinated actions to optimize project delivery and enhance the overall standard construction process by aligning resources for optimal outcomes.
              </p>
            </div>

            {/* Management */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Management</h3>
              <p className="text-gray-700">
                Construction management evaluates project proposals, estimating timelines, cash flow, resources, and protocols, collaborating with stakeholders to ensure smooth project execution, and overseeing multiple projects concurrently.
              </p>
            </div>

            {/* Communication */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Communication</h3>
              <p className="text-gray-700">
                Our robust network of subcontractors fosters flexibility, change management, and quality maintenance, enhancing our ability to deliver exceptional results consistently.
              </p>
            </div>

            {/* Development */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Development</h3>
              <p className="text-gray-700">
                Shree Enterprises excels in refurbishment and new build projects, particularly in education, healthcare, and commercial sectors, showcasing expertise tailored to industry-specific requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vision */}
            <div className="bg-white p-8 rounded-xl border-2 border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-[#E00000] flex items-center justify-center text-white text-2xl font-bold mr-4">V</div>
                <h3 className="text-2xl font-bold text-[#E00000]">VISION</h3>
              </div>
              <p className="text-gray-800 italic leading-relaxed">
                "Being the architect of responsive, fast, cost-effective, and creative solutions for clients' benefits, commitment to delivering value in every aspect of our services."
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-xl border-2 border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white text-2xl font-bold mr-4">M</div>
                <h3 className="text-2xl font-bold text-blue-600">MISSION</h3>
              </div>
              <p className="text-gray-800 italic leading-relaxed">
                "To form long-term relationships of value with our clients and partners, using quality construction and engineering solution and employing the best resource and latest techniques."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Quote Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-[#E00000] font-medium italic leading-relaxed">
              "Our approach is sensitive, innovative and bespoke, driven by challenging and constructive working environments. We are committed to achieving the optimum solutions across our service delivery, considering logistical aspects to ensure customer satisfaction."
            </p>
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Competitive Edge</h2>
            <p className="text-lg text-gray-700">We combine expertise, innovation, and commitment to deliver exceptional results on every project.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {differentiators.map((differentiator, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  <differentiator.icon className="h-8 w-8 text-[#E00000] mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">{differentiator.title}</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">{differentiator.description}</p>
                <div className="flex items-center justify-between mt-6">
                  <div className="flex items-center">
                    <h4 className="text-2xl font-bold text-gray-900">{differentiator.stat}</h4>
                    <p className="text-sm text-gray-700 ml-2">{differentiator.statLabel}</p>
                  </div>
                  <Button variant="link" className="text-gray-700 hover:text-gray-900" asChild>
                    <Link to="/about" className="flex items-center gap-2">
                      Learn More
                    </Link>
                  </Button>
                </div>
                <ul className="list-none mt-6">
                  {differentiator.details.map((detail, index) => (
                    <li key={index} className="flex items-start mb-4">
                      <CheckCircle className="h-5 w-5 text-[#E00000] mr-4" />
                      <p className="text-gray-700">{detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <p className="text-foreground italic">"{testimonial.quote}"</p>
                    <div className="pt-4 border-t border-border/20">
                      <h4 className="font-semibold">{testimonial.author}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      <p className="text-sm text-primary">{testimonial.project}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our expertise and commitment to excellence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                Get a Free Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent text-white border-white/30 hover:bg-white/10" asChild>
              <Link to="/projects" className="flex items-center gap-2">
                View Our Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhyUs;