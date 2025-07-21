import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Clock, Award, Users, Target, Shield } from 'lucide-react';

const WhyUsSection = () => {
  const differentiators = [
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: 'Consistent track record of delivering projects on schedule with zero delays.',
      stat: '100%',
      statLabel: 'On-Time Projects',
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Premium quality standards with rigorous quality control at every phase.',
      stat: '150+',
      statLabel: 'Quality Certifications',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Highly skilled professionals with decades of construction experience.',
      stat: '50+',
      statLabel: 'Expert Professionals',
    },
    {
      icon: Target,
      title: 'Budget Precision',
      description: 'Transparent pricing and cost control ensuring projects stay within budget.',
      stat: '95%',
      statLabel: 'Budget Accuracy',
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Comprehensive safety protocols ensuring zero accidents on our sites.',
      stat: '0',
      statLabel: 'Safety Incidents',
    },
    {
      icon: CheckCircle,
      title: 'Partner Network',
      description: 'Strong relationships with trusted subcontractors and suppliers.',
      stat: '25+',
      statLabel: 'Trusted Partners',
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
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground fade-in-up">
            Your Trusted Construction
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Partner
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed fade-in-up">
            We don't just build structures; we build lasting partnerships. Here's what sets us apart in the competitive construction landscape.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {differentiators.map((item, index) => (
            <Card 
              key={index} 
              className={`luxury-card group hover:shadow-luxury transition-all duration-500 transform hover:-translate-y-2 fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-primary-light flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>

                {/* Stat */}
                <div className="mb-4">
                  <div className="text-4xl font-bold text-primary mb-1">{item.stat}</div>
                  <div className="text-sm text-muted-foreground font-medium">{item.statLabel}</div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="space-y-8 fade-in-up" style={{ animationDelay: '800ms' }}>
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            What Our Partners Say
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="luxury-card bg-gradient-to-br from-white to-muted/30">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Quote */}
                    <div className="relative">
                      <div className="text-6xl text-primary/20 absolute -top-4 -left-2">"</div>
                      <p className="text-foreground leading-relaxed text-lg relative z-10 pl-8">
                        {testimonial.quote}
                      </p>
                    </div>

                    {/* Author */}
                    <div className="flex items-start space-x-4 pt-4 border-t border-border/20">
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

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20 fade-in-up" style={{ animationDelay: '1000ms' }}>
          {/* Vision */}
          <div className="luxury-card p-8 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
            <h4 className="text-2xl font-bold text-foreground mb-6 flex items-center space-x-3">
              <Target className="w-8 h-8 text-primary" />
              <span>Our Vision</span>
            </h4>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Being the architect of responsive, fast, cost-effective, and creative solutions for clients' benefits, 
              with commitment to delivering value in every aspect of our services.
            </p>
          </div>

          {/* Mission */}
          <div className="luxury-card p-8 bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20">
            <h4 className="text-2xl font-bold text-foreground mb-6 flex items-center space-x-3">
              <Shield className="w-8 h-8 text-secondary" />
              <span>Our Mission</span>
            </h4>
            <p className="text-muted-foreground leading-relaxed text-lg">
              To form long-term relationships of value with our clients and partners, using quality construction 
              and engineering solutions while employing the best resources and latest techniques.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;