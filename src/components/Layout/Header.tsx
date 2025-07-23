import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Building2, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

// Lazy load the QuoteForm component
const QuoteForm = lazy(() => import('@/components/QuoteForm'));

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Why Us', path: '/why-us' },
    { name: 'Sectors', path: '/sectors' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        'bg-background/95 backdrop-blur-lg shadow-construction border-b border-border/20'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="h-12 w-auto">
              <img 
                src="/Pictures/logo.png" 
                alt="Henil Construction Logo" 
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h2 className="text-2xl font-bold text-foreground">
                Henil Construction
              </h2>
              <p className="text-sm text-muted-foreground -mt-1">Premium Construction Partners</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  'text-sm font-medium transition-colors duration-300 hover:text-primary relative',
                  location.pathname === item.path 
                    ? 'text-primary' 
                    : 'text-foreground'
                )}
              >
                {item.name}
                {location.pathname === item.path && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              asChild
            >
              <a href="tel:+919773391144" className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 97733 91144</span>
              </a>
            </Button>
            <Button 
              className="construction-button"
              onClick={() => setShowQuoteForm(true)}
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted/10 transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/20 shadow-luxury">
            <nav className="container mx-auto px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'block text-lg font-medium transition-colors duration-300 hover:text-primary',
                    location.pathname === item.path ? 'text-primary' : 'text-foreground'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-white"
                  asChild
                >
                  <a href="tel:+919773391144" className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>+91 97733 91144</span>
                  </a>
                </Button>
                <Button 
                  className="w-full construction-button"
                  onClick={() => {
                    setIsOpen(false);
                    setShowQuoteForm(true);
                  }}
                >
                  Get Quote
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
      
      {/* Quote Form Modal */}
      {showQuoteForm && (
        <div className="fixed inset-0 bg-black/50 z-[60] flex items-start justify-center pt-16 p-4">
          <div className="w-full max-w-md mt-4">
            <Suspense fallback={
              <div className="bg-white p-6 rounded-xl">
                <div className="flex justify-center items-center h-32">
                  <Loader2 className="h-6 w-6 animate-spin text-primary" />
                </div>
              </div>
            }>
              <QuoteForm 
                onClose={() => setShowQuoteForm(false)}
                onSuccess={() => setShowQuoteForm(false)}
              />
            </Suspense>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;