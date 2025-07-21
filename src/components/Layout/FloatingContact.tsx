import React, { useRef } from 'react';
import { Phone, MessageCircle, Download, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import BrochureGallery from '../BrochureGallery';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';

const FloatingContact = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = React.useState(false);
  const dialogTriggerRef = useRef<HTMLButtonElement>(null);
  
  const handleBrochureClick = () => {
    setIsOpen(false);
    // Use a small timeout to ensure the dialog trigger is clicked after the state updates
    setTimeout(() => {
      dialogTriggerRef.current?.click();
    }, 0);
  };

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
      onClick: handleBrochureClick,
      className: 'bg-secondary hover:bg-secondary-light text-secondary-foreground',
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
            onClick={action.onClick}
            asChild={!action.onClick}
          >
            {action.onClick ? (
              <button className="flex items-center justify-center w-full h-full">
                <action.icon className="h-6 w-6" />
              </button>
            ) : action.href?.startsWith('http') ? (
              <a href={action.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full h-full">
                <action.icon className="h-6 w-6" />
              </a>
            ) : (
              <a href={action.href} className="flex items-center justify-center w-full h-full">
                <action.icon className="h-6 w-6" />
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
      
      {/* Brochure Gallery */}
      <Dialog>
        <DialogTrigger asChild>
          <button ref={dialogTriggerRef} className="hidden" />
        </DialogTrigger>
        <BrochureGallery />
      </Dialog>
    </div>
  );
};

export default FloatingContact;