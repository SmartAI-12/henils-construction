import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Phone, Mail, MapPin, Clock, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BrochureGallery from '../BrochureGallery';

const Footer = () => {
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Why Choose Us', path: '/why-us' },
    { name: 'Process & Expertise', path: '/process' },
  ];

  const sectors = [
    { name: 'Educational', path: '/sectors#education' },
    { name: 'Healthcare', path: '/sectors#healthcare' },
    { name: 'Commercial', path: '/sectors#commercial' },
    { name: 'Residential', path: '/sectors#residential' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="h-16 w-auto">
                <img 
                  src="/Pictures/logo.png" 
                  alt="Henil Construction Logo" 
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <h3 className="text-2xl font-bold">Henil Construction</h3>
                <p className="text-primary-foreground/80 text-sm">Premium Construction Partners</p>
              </div>
            </div>
            <p className="text-primary-foreground/90 leading-relaxed">
              Leading B2B construction contractor specializing in premium projects for builders and developers. 
              Delivering excellence, on time, every time.
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="secondary" 
                size="sm"
                className="bg-secondary hover:bg-secondary-light"
                onClick={() => setIsBrochureOpen(true)}
              >
                <Download className="w-4 h-4 mr-2" />
                <span>View Brochure</span>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-primary-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 bg-secondary rounded-full group-hover:w-2 transition-all duration-300" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectors */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-primary-foreground">Sectors Served</h4>
            <ul className="space-y-3">
              {sectors.map((sector) => (
                <li key={sector.path}>
                  <Link 
                    to={sector.path}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 bg-secondary rounded-full group-hover:w-2 transition-all duration-300" />
                    <span>{sector.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-primary-foreground">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/90 font-medium">Head Office</p>
                  <p className="text-primary-foreground/80 text-sm">
                    B-22 Star Trade Center SV Road<br />
                    Borivali West Mumbai - 400092
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/90 font-medium">Phone</p>
                  <a 
                    href="tel:+919773391144" 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    +91 97733 91144
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/90 font-medium">Email</p>
                  <a 
                    href="mailto:sanjay@henilconstruction.com" 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    sanjay@henilconstruction.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/90 font-medium">Business Hours</p>
                  <p className="text-primary-foreground/80 text-sm">
                    Mon - Sat: 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/80 text-sm">
              © {currentYear} Henil Construction. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link 
                to="/privacy-policy" 
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-service" 
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
      <BrochureGallery 
        isOpen={isBrochureOpen} 
        onClose={() => setIsBrochureOpen(false)} 
      />
    </footer>
  );
};

export default Footer;