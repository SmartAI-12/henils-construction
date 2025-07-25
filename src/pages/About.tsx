import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Users, Award, Clock } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import CTASection from '../components/CTASection';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Layout
      pageTitle="About Us | Henil Construction"
      pageDescription="Learn about Henil Construction's history, mission, and the team behind our success."
    >
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Building excellence through innovation, quality, and trust since our inception.
            </p>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-muted-foreground">
                  To deliver exceptional construction services with uncompromising quality and integrity.
                </p>
              </Card>
              <Card className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Team</h3>
                <p className="text-muted-foreground">
                  A team of experienced professionals dedicated to excellence in every project.
                </p>
              </Card>
              <Card className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Our Values</h3>
                <p className="text-muted-foreground">
                  Integrity, quality, and customer satisfaction at the core of everything we do.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Company History */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Journey</h2>
              <div className="space-y-8">
                {[
                  { year: '2010', title: 'Company Founded', description: 'Established with a vision to redefine construction excellence.' },
                  { year: '2015', title: 'First Major Project', description: 'Successfully completed our first large-scale commercial project.' },
                  { year: '2020', title: 'Expansion', description: 'Expanded our services to include design and project management.' },
                  { year: '2023', title: 'Milestone', description: 'Reached 100+ successful projects with satisfied clients.' },
                ].map((item, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                        {item.year}
                      </div>
                      {index < 3 && (
                        <div className="w-0.5 h-full bg-border my-2"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </div>
    </Layout>
  );
};

export default About;
