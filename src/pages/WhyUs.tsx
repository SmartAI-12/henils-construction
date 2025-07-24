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
      <section className="py-16 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold">
              Why Choose Us
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Henil constructions not only aims to meet but exceed clients' expectations, fostering trust and long-term relationships. Consistently delivering exceptional quality and service establishes our reputation as a reliable and reputable provider in the construction sector.
            </p>
          </div>
        </div>
      </section>

      {/* Key Strategy Section */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white/80">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#E00000] relative inline-block">
              <span className="relative z-10 px-4">KEY STRATEGY</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E00000]/70 to-transparent"></span>
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-[#E00000]/30 to-transparent mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Strategy Plan",
                description: "Strategic planning ensures logical, coordinated actions to optimize project delivery and enhance the overall standard construction process by aligning resources for optimal outcomes."
              },
              {
                title: "Management",
                description: "Construction management evaluates project proposals, estimating timelines, cash flow, resources, and protocols, collaborating with stakeholders to ensure smooth project execution, and overseeing multiple projects concurrently."
              },
              {
                title: "Communication",
                description: "Our robust network of subcontractors fosters flexibility, change management, and quality maintenance, enhancing our ability to deliver exceptional results consistently."
              },
              {
                title: "Development",
                description: "Shree Enterprises excels in refurbishment and new build projects, particularly in education, healthcare, and commercial sectors, showcasing expertise tailored to industry-specific requirements."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="relative"
              >
                {/* Frosted glass effect */}
                <div className="absolute inset-0 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg"></div>
                
                {/* Accent border */}
                <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-br from-[#E00000]/20 via-[#E00000]/10 to-[#E00000]/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-gray-50/90 rounded-2xl"></div>
                </div>
                
                <div className="relative p-8 h-full">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 relative inline-block">
                    <span className="relative z-10">{item.title}</span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E00000]"></span>
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-12 bg-gradient-to-b from-white/80 to-gray-50/80">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Vision */}
            <div className="group relative overflow-hidden">
              {/* Frosted glass effect with red accent */}
              <div className="absolute inset-0 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg"></div>
              <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-br from-[#E00000]/20 via-[#E00000]/10 to-[#E00000]/20">
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-gray-50/90 rounded-2xl"></div>
              </div>
              
              <div className="relative p-10 text-center h-full">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#E00000] to-[#8B0000] flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6">
                  V
                </div>
                <h3 className="text-2xl font-bold text-[#E00000] mb-6 tracking-wide">VISION</h3>
                <div className="w-16 h-0.5 bg-gradient-to-r from-[#E00000] to-transparent mx-auto mb-8 opacity-80"></div>
                <p className="text-gray-700 italic leading-relaxed">
                  "Being the architect of responsive, fast, cost-effective, and creative solutions for clients' benefits, commitment to delivering value in every aspect of our services."
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="group relative overflow-hidden">
              {/* Frosted glass effect with blue accent */}
              <div className="absolute inset-0 bg-white/70 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg"></div>
              <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-br from-blue-600/20 via-blue-600/10 to-blue-600/20">
                <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-gray-50/90 rounded-2xl"></div>
              </div>
              
              <div className="relative p-10 text-center h-full">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6">
                  M
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-6 tracking-wide">MISSION</h3>
                <div className="w-16 h-0.5 bg-gradient-to-r from-blue-600 to-transparent mx-auto mb-8 opacity-80"></div>
                <p className="text-gray-700 italic leading-relaxed">
                  "To form long-term relationships of value with our clients and partners, using quality construction and engineering solution and employing the best resource and latest techniques."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Quote Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-[#E00000] font-medium italic leading-relaxed">
              "Our approach is sensitive, innovative and bespoke, driven by challenging and constructive working environments. We are committed to achieving the optimum solutions across our service delivery, considering logistical aspects to ensure customer satisfaction."
            </p>
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{competitiveEdge.title}</h2>
            <p className="text-xl text-gray-600">{competitiveEdge.description}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {differentiators.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="group relative overflow-hidden transition-all duration-500"
                >
                  {/* Frosted glass effect */}
                  <div className="absolute inset-0 bg-white/80 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg transition-all duration-500"></div>
                  
                  {/* Accent border */}
                  <div className="absolute inset-0 rounded-2xl p-px bg-gradient-to-br from-[#E00000]/30 via-[#E00000]/10 to-[#E00000]/30 opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E00000]/10 to-[#0F172A]/5 rounded-2xl"></div>
                  </div>
                  
                  <div className="relative p-8 h-full flex flex-col">
                    {/* Icon with gradient circular background */}
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#E00000] to-[#8B0000] flex items-center justify-center text-white text-2xl font-bold mx-auto mb-8">
                      <Icon className="h-10 w-10 text-white" />
                    </div>
                    
                    {/* Title with tracking for luxury feel */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center tracking-wide">
                      {item.title}
                      <div className="w-12 h-0.5 bg-gradient-to-r from-[#E00000] to-transparent mx-auto mt-3 mb-4 opacity-80"></div>
                    </h3>
                    
                    {/* Description with improved typography */}
                    <p className="text-gray-600 mb-6 flex-grow text-center font-light leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Stat with elegant styling */}
                    <div className="mt-auto pt-6 border-t border-gray-100/50">
                      <div className="flex items-baseline justify-center space-x-2">
                        <span className="text-3xl font-bold bg-gradient-to-br from-[#E00000] to-[#8B0000] bg-clip-text text-transparent">
                          {item.stat}
                        </span>
                        <span className="text-gray-500 font-medium">{item.statLabel}</span>
                      </div>
                    </div>
                    
                    {/* Details section - always visible */}
                    <div className="mt-6 pt-6 border-t border-gray-100/50 opacity-100 transition-opacity duration-500">
                      <ul className="space-y-3">
                        {item.details.map((detail, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-[#E00000] mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-700 text-sm font-light">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto mb-6"></div>
            <p className="text-gray-300 text-lg">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group">
                <div className="h-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 rounded-xl p-8 shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-primary/10 hover:border-primary/30">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="text-5xl text-gray-600 font-serif">"</div>
                    <div>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {testimonial.quote}
                      </p>
                    </div>
                  </div>
                  <div className="pt-6 mt-6 border-t border-gray-700/50">
                    <h4 className="text-xl font-semibold text-white">{testimonial.author}</h4>
                    <p className="text-gray-400">{testimonial.position}</p>
                    <p className="text-primary font-medium mt-1">{testimonial.project}</p>
                    <div className="flex mt-4 space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-primary to-secondary">
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