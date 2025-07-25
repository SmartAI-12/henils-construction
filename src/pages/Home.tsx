import React, { useEffect, useRef } from 'react';
import Layout from '@/components/Layout/Layout';
import HeroSection from '@/components/Home/HeroSection';
import ServicesSection from '@/components/Home/ServicesSection';
import WhyUsSection from '@/components/Home/WhyUsSection';
import RecentProjectsSection from '@/components/Home/RecentProjectsSection';
import SectorsSection from '@/components/Home/SectorsSection';
import CTASection from '../components/CTASection';
import { StatisticsSection } from '@/components/Home/StatisticsSection';

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
      <WhyUsSection />
      <RecentProjectsSection />
      <SectorsSection />
      <CTASection />
      <StatisticsSection />
    </Layout>
  );
};

export default Home;