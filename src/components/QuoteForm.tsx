import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { X, Send } from 'lucide-react';

interface QuoteFormProps {
  onClose?: () => void;
  defaultMessage?: string;
  onSuccess?: () => void;
}

const QuoteForm: React.FC<QuoteFormProps> = ({ onClose, defaultMessage = '', onSuccess }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'residential',
    message: defaultMessage
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const whatsappMessage = `*New Quote Request*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Project Type:* ${formData.projectType}%0A` +
      `*Message:* ${formData.message}`;

    // Format the WhatsApp URL with the message
    const whatsappUrl = `https://wa.me/919773391144?text=${encodeURIComponent(
      `*New Portfolio Request*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Phone:* ${formData.phone || 'Not provided'}\n` +
      `*Project Type:* ${formData.projectType}\n\n` +
      `*Message:*\n${formData.message}`
    )}`;

    // Open WhatsApp with the message
    window.open(whatsappUrl, '_blank');
    
    // Call onSuccess if provided
    onSuccess?.();
    
    // Close the form if onClose is provided
    onClose?.();
  };

  return (
    <div className="w-full">
      <div className="bg-card p-6 rounded-xl">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-bold text-foreground">Send Us a Message</h2>
          {onClose && (
            <button 
              type="button"
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close form"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium leading-none">
                Full Name <span className="text-destructive">*</span>
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium leading-none">
                Email <span className="text-destructive">*</span>
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium leading-none">
              Phone Number <span className="text-destructive">*</span>
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="w-full"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium leading-none">
              Your Message <span className="text-destructive">*</span>
            </label>
            <Textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Hi, I want to know more about your projects."
              rows={5}
              className="w-full"
            />
          </div>
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </Button>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            We'll get back to you as soon as possible
          </p>
        </form>
      </div>
    </div>
  );
};

export default QuoteForm;
