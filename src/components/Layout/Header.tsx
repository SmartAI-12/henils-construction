import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Building2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Why Us', path: '/why-us' },
    { name: 'Process', path: '/process' },
    { name: 'Sectors', path: '/sectors' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-background/95 backdrop-blur-lg shadow-construction border-b border-border/20' 
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center shadow-construction group-hover:scale-105 transition-transform duration-300">
              <Building2 className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
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
                    : isScrolled ? 'text-foreground' : 'text-white'
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
              className={cn(
                'border-2 transition-all duration-300',
                isScrolled 
                  ? 'border-primary text-primary hover:bg-primary hover:text-primary-foreground' 
                  : 'border-white text-white hover:bg-white hover:text-primary'
              )}
              asChild
            >
              <a href="tel:+919773391144" className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 97733 91144</span>
              </a>
            </Button>
            <Button 
              className="construction-button"
              asChild
            >
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted/10 transition-colors"
          >
            {isOpen ? (
              <X className={cn('w-6 h-6', isScrolled ? 'text-foreground' : 'text-white')} />
            ) : (
              <Menu className={cn('w-6 h-6', isScrolled ? 'text-foreground' : 'text-white')} />
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
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a href="tel:+919773391144" className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>+91 97733 91144</span>
                  </a>
                </Button>
                <Button 
                  className="w-full construction-button"
                  asChild
                >
                  <Link to="/contact" onClick={() => setIsOpen(false)}>Get Quote</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;