import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Start Your Project?
        </h2>
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
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-transparent text-white border-white/30 hover:bg-white/10" 
            asChild
          >
            <Link to="/projects" className="flex items-center gap-2">
              View Our Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
