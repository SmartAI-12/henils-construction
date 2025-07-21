import React, { useState } from 'react';
import { Phone, MessageCircle, Download, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contactActions = [
    {
      icon: Phone,
      label: 'Call Us',
      href: 'tel:+919773391144',
      className: 'bg-green-500 hover:bg-green-600 text-white',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/919773391144?text=Hello! I would like to know more about your construction services.',
      className: 'bg-green-600 hover:bg-green-700 text-white',
    },
    {
      icon: Download,
      label: 'Download Brochure',
      href: '/brochure-download',
      className: 'bg-secondary hover:bg-secondary-light text-secondary-foreground',
      isInternal: true,
    },
  ];

  return (
    <div className="floating-contact">
      {/* Contact Actions */}
      <div 
        className={cn(
          'flex flex-col-reverse space-y-reverse space-y-3 mb-4 transition-all duration-300 transform origin-bottom',
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        )}
      >
        {contactActions.map((action, index) => (
          <Button
            key={action.label}
            className={cn(
              'w-14 h-14 rounded-full shadow-luxury transition-all duration-300 transform hover:scale-110',
              action.className,
              'animate-slide-in-right'
            )}
            style={{ animationDelay: `${index * 100}ms` }}
            asChild={action.isInternal}
          >
            {action.isInternal ? (
              <a href={action.href} title={action.label}>
                <action.icon className="w-6 h-6" />
              </a>
            ) : (
              <a href={action.href} target="_blank" rel="noopener noreferrer" title={action.label}>
                <action.icon className="w-6 h-6" />
              </a>
            )}
          </Button>
        ))}
      </div>

      {/* Main Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'w-16 h-16 rounded-full shadow-luxury transition-all duration-300 transform hover:scale-110',
          'bg-gradient-to-r from-primary to-secondary text-primary-foreground',
          'animate-pulse-glow',
          isOpen && 'rotate-45'
        )}
      >
        {isOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <Plus className="w-7 h-7" />
        )}
      </Button>

      {/* Floating Animation */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 animate-float -z-10" />
    </div>
  );
};

export default FloatingContact;