import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingContact from './FloatingContact';

interface LayoutProps {
  children: React.ReactNode;
  showFloatingContact?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, showFloatingContact = true }) => {
  return (
    <div className="min-h-screen bg-background">
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