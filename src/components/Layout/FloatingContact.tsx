import React, { useRef } from 'react';
import { Phone, MessageSquare, Download, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const downloadRef = useRef<HTMLAnchorElement>(null);
  
  const handleBrochureClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Close the menu first
    setIsOpen(false);
    
    // Small delay to ensure menu is closed before download starts
    setTimeout(() => {
      if (downloadRef.current) {
        downloadRef.current.click();
      }
    }, 100);
  };

  const contactActions = [
    {
      icon: Phone,
      label: 'Call Us',
      href: 'tel:+919773391144',
      className: 'bg-green-500 hover:bg-green-600 text-white',
    },
    {
      icon: MessageSquare,
      label: 'WhatsApp',
      href: 'https://wa.me/919773391144?text=Hello! I would like to know more about your construction services.',
      className: 'bg-green-600 hover:bg-green-700 text-white',
    },
    {
      icon: Download,
      label: 'Download Brochure',
      onClick: handleBrochureClick,
      className: 'bg-secondary hover:bg-secondary-light text-secondary-foreground',
    },
  ];

  // Hidden download link
  const hiddenDownloadLink = (
    <a
      ref={downloadRef}
      href="/brochures/broucher.pdf.pdf"
      download="Henils-Construction-Brochure.pdf"
      className="hidden"
      aria-hidden="true"
    >
      Download Brochure
    </a>
  );

  return (
    <div className="floating-contact">
      {hiddenDownloadLink}
      
      {/* Contact Actions */}
      <div 
        className={cn(
          'flex flex-col-reverse space-y-reverse space-y-3 mb-4 transition-all duration-300 transform origin-bottom',
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        )}
      >
        {contactActions.map((action, index) => (
          <div 
            key={action.label}
            className={cn(
              'w-14 h-14 rounded-full transition-all duration-300 transform hover:scale-110 overflow-hidden',
              action.className,
              'animate-slide-in-right'
            )}
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {action.onClick ? (
              <button 
                onClick={action.onClick}
                className="flex items-center justify-center w-full h-full"
              >
                <action.icon className="h-6 w-6" />
              </button>
            ) : action.href?.startsWith('http') ? (
              <a 
                href={action.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-full h-full"
              >
                <action.icon className="h-6 w-6" />
              </a>
            ) : (
              <a 
                href={action.href} 
                className="flex items-center justify-center w-full h-full"
              >
                <action.icon className="h-6 w-6" />
              </a>
            )}
          </div>
        ))}
      </div>

      {/* Main Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'w-16 h-16 rounded-full transition-all duration-300 transform hover:scale-110',
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

    </div>
  );
};

export default FloatingContact;