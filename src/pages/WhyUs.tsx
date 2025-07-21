import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Award, Users, Target, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyUs = () => {
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

      {/* Differentiators Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Competitive Edge
            </h2>
            <p className="text-muted-foreground">
              We combine expertise, innovation, and commitment to deliver exceptional results on every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center mb-6">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-primary mb-1">{item.stat}</div>
                    <div className="text-muted-foreground text-sm font-medium">{item.statLabel}</div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {item.description}
                  </p>

                  <ul className="space-y-2">
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="luxury-card bg-white">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="relative">
                      <div className="text-6xl text-primary/20 absolute -top-4 -left-2">"</div>
                      <p className="text-foreground leading-relaxed text-lg relative z-10 pl-8">
                        {testimonial.quote}
                      </p>
                    </div>

                    <div className="flex items-start space-x-4 pt-6 border-t border-border/20">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-bold text-foreground">{testimonial.author}</div>
                        <div className="text-muted-foreground text-sm">{testimonial.position}</div>
                        <div className="text-primary text-sm font-medium">{testimonial.project}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can bring your vision to life with our expertise and commitment to excellence.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
                asChild
              >
                <Link to="/contact" className="flex items-center space-x-2">
                  <span>Get a Free Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/30"
                asChild
              >
                <Link to="/projects">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhyUs;