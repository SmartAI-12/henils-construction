import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    '/lovable-uploads/a795cb59-6f22-4ff0-b489-16bed4b5b073.png',
    '/lovable-uploads/4db61cf1-9210-4d03-a922-dcceeb908789.png',
    '/lovable-uploads/cda145a3-4c32-4c46-b67e-9a5939e63d64.png',
    '/lovable-uploads/ce440644-9cf1-4337-95d7-dfce5c00fd17.png',
  ];

  const heroStats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '25+', label: 'Partner Developers' },
    { number: '5+', label: 'Years Excellence' },
    { number: '100%', label: 'On-Time Delivery' },
  ];

  const keyPoints = [
    'Premium Construction Partners for Leading Developers',
    'Specialized in High-Rise Residential & Commercial Projects',
    'End-to-End Project Management & Execution',
    'Proven Track Record in Mumbai Real Estate',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={image} 
              alt={`Henil Construction Project ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-secondary/20 backdrop-blur-sm rounded-full px-6 py-2 border border-secondary/30">
                <CheckCircle className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium">Premier B2B Construction Partner</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up">
                Building Tomorrow's
                <span className="block bg-gradient-to-r from-secondary to-construction-gold bg-clip-text text-transparent">
                  Landmarks
                </span>
                <span className="block text-3xl lg:text-4xl font-medium text-white/90 mt-2">
                  For Leading Developers
                </span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-xl animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                Partner with Mumbai's trusted construction specialists. We deliver premium residential and commercial projects on time, every time.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-white/90">{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              <Button 
                size="lg" 
                className="construction-button text-lg px-8 py-6"
                asChild
              >
                <Link to="/contact" className="flex items-center space-x-2">
                  <span>Partner With Us</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6"
                asChild
              >
                <Link to="/projects" className="flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>View Projects</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-6 animate-scale-in" style={{ animationDelay: '800ms' }}>
            {heroStats.map((stat, index) => (
              <div 
                key={index} 
                className="luxury-card p-8 text-center bg-white/10 backdrop-blur-lg border-white/20"
              >
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-secondary scale-125' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 text-white/80 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;