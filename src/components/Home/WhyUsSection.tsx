import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Clock, Award, Users, Target, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const WhyUsSection = () => {
  const differentiators = [
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: '100% on-schedule project completion.',
      stat: '100%',
      statLabel: 'On-Time Projects',
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Rigorous quality control at every phase.',
      stat: '150+',
      statLabel: 'Certifications',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: '50+ skilled professionals.',
      stat: '50+',
      statLabel: 'Experts',
    },
    {
      icon: Target,
      title: 'Budget Precision',
      description: '95% budget accuracy.',
      stat: '95%',
      statLabel: 'On Budget',
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Zero accident sites.',
      stat: '0',
      statLabel: 'Incidents',
    },
    {
      icon: CheckCircle,
      title: 'Partner Network',
      description: 'Trusted subcontractors network.',
      stat: '25+',
      statLabel: 'Partners',
    },
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
    },
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-primary font-medium">Why Choose Us</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
            Your Trusted Construction
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Partner
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Building trust through excellence. <Link to="/about" className="text-primary hover:underline">Our story →</Link>
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {differentiators.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#FEEAEA] p-8 rounded-lg text-center"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-red-600" />
              </div>

              {/* Stat */}
              <div className="mb-4">
                <div className="text-4xl font-bold text-red-600 mb-1">
                  {item.stat}
                </div>
                <div className="text-sm text-red-800/80 font-medium">
                  {item.statLabel}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground">
                  {item.title}
                </h3>
                
                <p className="text-foreground/80 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            What Our Partners Say
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#FEEAEA] p-8 rounded-lg">
                <div className="space-y-6">
                  {/* Quote */}
                  <div className="relative">
                    <div className="text-6xl text-red-200 absolute -top-4 -left-2">"</div>
                    <p className="text-foreground leading-relaxed text-lg relative z-10 pl-8">
                      {testimonial.quote}
                    </p>
                  </div>

                  {/* Author */}
                  <div className="flex items-start space-x-4 pt-4 border-t border-red-200">
                    <div className="w-12 h-12 rounded-full bg-red-300 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-foreground">{testimonial.author}</div>
                      <div className="text-foreground/70 text-sm">{testimonial.position}</div>
                      <div className="text-red-600 text-sm font-medium">{testimonial.project}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
          {/* Vision */}
          <div className="p-8 bg-[#FEEAEA] rounded-lg">
            <h4 className="text-2xl font-bold text-foreground mb-6 flex items-center space-x-3">
              <Target className="w-8 h-8 text-red-600" />
              <span>Our Vision</span>
            </h4>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Being the architect of responsive, fast, cost-effective, and creative solutions for clients' benefits, 
              with commitment to delivering value in every aspect of our services.
            </p>
          </div>

          {/* Mission */}
          <div className="p-8 bg-[#FEEAEA] rounded-lg">
            <h4 className="text-2xl font-bold text-foreground mb-6 flex items-center space-x-3">
              <Target className="w-8 h-8 text-red-600" />
              <span>Our Mission</span>
            </h4>
            <p className="text-foreground/80 leading-relaxed text-lg">
              To deliver exceptional construction services through innovative solutions, 
              quality craftsmanship, and unwavering commitment to client satisfaction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;