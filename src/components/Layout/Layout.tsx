import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FloatingContact from './FloatingContact';

interface LayoutProps {
  children: React.ReactNode;
  showFloatingContact?: boolean;
}

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout: React.FC<LayoutProps> = ({ children, showFloatingContact = true }) => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Header />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
      {showFloatingContact && <FloatingContact />}
    </div>
  );
};

export default Layout;