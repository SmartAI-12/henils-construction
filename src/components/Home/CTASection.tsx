import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Phone, MessageCircle, Download, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  const benefits = [
    'Free Project Consultation',
    'Detailed Cost Estimation',
    'Timeline Assessment',
    'Technical Feasibility Study',
  ];

  return (
    <section className="py-20 construction-overlay bg-gradient-to-br from-primary via-primary-dark to-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8 fade-in-left">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 border border-white/30">
                <CheckCircle className="w-5 h-5 text-construction-gold" />
                <span className="text-sm font-medium">Ready to Start Your Project?</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Let's Build Your Next
                <span className="block text-construction-gold">
                  Success Story
                </span>
              </h2>
              
              <p className="text-xl text-white/90 leading-relaxed">
                Partner with Mumbai's leading construction specialists. Get expert consultation, 
                transparent pricing, and guaranteed on-time delivery for your development projects.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-construction-gold flex-shrink-0" />
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-construction-gold" />
                <span className="text-white/90">+91 97733 91144</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-construction-gold" />
                <span className="text-white/90">sanjay@henilconstruction.com</span>
              </div>
            </div>
          </div>

          {/* Right Content - CTA Cards */}
          <div className="space-y-6 fade-in-right">
            {/* Primary CTA Card */}
            <Card className="luxury-card bg-white/95 backdrop-blur-lg border-white/20">
              <CardContent className="p-8 text-center">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Get Project Consultation
                    </h3>
                    <p className="text-muted-foreground">
                      Schedule a free consultation with our construction experts
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <Button 
                      size="lg" 
                      className="w-full construction-button text-lg py-6"
                      asChild
                    >
                      <Link to="/contact" className="flex items-center justify-center space-x-2">
                        <span>Start Your Project</span>
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </Button>
                    
                    <div className="flex space-x-3">
                      <Button 
                        variant="outline" 
                        className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        asChild
                      >
                        <a href="tel:+919773391144" className="flex items-center justify-center space-x-2">
                          <Phone className="w-4 h-4" />
                          <span>Call Now</span>
                        </a>
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        className="flex-1 border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
                        asChild
                      >
                        <a 
                          href="https://wa.me/919773391144?text=Hello! I would like to discuss a construction project."
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center space-x-2"
                        >
                          <MessageCircle className="w-4 h-4" />
                          <span>WhatsApp</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Secondary CTA Card */}
            <Card className="luxury-card bg-secondary/90 backdrop-blur-lg border-secondary/30">
              <CardContent className="p-6 text-center">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">
                      Download Our Company Brochure
                    </h4>
                    <p className="text-white/80 text-sm">
                      Complete project portfolio and company capabilities
                    </p>
                  </div>
                  
                  <a
                    href="/brochures/broucher.pdf.pdf"
                    download="Henils-Construction-Brochure.pdf"
                    className="flex items-center justify-center space-x-2 w-full bg-white text-secondary hover:bg-white/90 rounded-md text-sm font-medium transition-colors h-10 px-4 py-2"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Brochure</span>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { number: '5+', label: 'Years Experience' },
                { number: '150+', label: 'Projects Delivered' },
                { number: '100%', label: 'Client Satisfaction' },
              ].map((item, index) => (
                <Card key={index} className="luxury-card bg-white/10 backdrop-blur-lg border-white/20">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-white mb-1">
                      {item.number}
                    </div>
                    <div className="text-white/80 text-xs">
                      {item.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;