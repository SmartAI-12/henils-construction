import React, { useEffect, useRef } from 'react';
import Layout from '@/components/Layout/Layout';
import HeroSection from '@/components/Home/HeroSection';
import ServicesSection from '@/components/Home/ServicesSection';
import SectorsSection from '@/components/Home/SectorsSection';
import WhyUsSection from '@/components/Home/WhyUsSection';
import RecentProjectsSection from '@/components/Home/RecentProjectsSection';
import CTASection from '@/components/Home/CTASection';

const Home = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Initialize intersection observer for animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right, .scale-in');
    animatedElements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <SectorsSection />
      <WhyUsSection />
      <RecentProjectsSection />
      <CTASection />
    </Layout>
  );
};

export default Home;