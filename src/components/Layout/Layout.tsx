import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import FloatingContact from './FloatingContact';
import { Helmet } from 'react-helmet-async';

interface LayoutProps {
  children: React.ReactNode;
  showFloatingContact?: boolean;
  pageTitle?: string;
  pageDescription?: string;
}

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  out: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  showFloatingContact = true,
  pageTitle = 'Henil Construction | Building Your Dreams',
  pageDescription = 'Henil Construction - Premium construction services with excellence and innovation.'
}) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      
      <ScrollToTop />
      <Header />
      
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          className="flex-1 pt-20"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      
      <Footer />
      {showFloatingContact && <FloatingContact />}
    </div>
  );
};

export default Layout;