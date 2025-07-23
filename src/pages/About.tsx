import { motion } from 'framer-motion';
import { Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useState, useEffect } from 'react';
import Layout from '@/components/Layout/Layout';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
                <span className="font-medium">ABOUT OUR COMPANY</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold">
                Shree Enterprises
              </h1>
              <p className="text-xl text-white/90 leading-relaxed">
                Founded in 2019, we are one of the most ambitious and inspiring construction companies, focused on client satisfaction, innovation, professionalism, and quality.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Card className="group overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl">
                <div className="grid md:grid-cols-2">
                  <div className="p-8 md:p-12 flex items-center">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                        Our <span className="text-primary">Team</span>
                      </h2>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                        Our Team combines technical excellence with superior understanding of client needs and the environment in which our clients operate. We are committed to working partnerships that add value and consistently exceed expectations.
                      </p>
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                        Meet Our Team <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center min-h-[400px] group-hover:scale-105 transition-transform duration-500">
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto p-8 md:p-12 relative overflow-visible group hover:shadow-xl transition-shadow">
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white">
                <Quote className="h-8 w-8" />
              </div>
              <blockquote className="relative z-10">
                <p className="text-xl md:text-2xl italic text-foreground leading-relaxed mb-6">
                  "Construction transcends mere shelter; it's about manifesting dreams, crafting statements, and shaping environments where life thrives and memories are made."
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mb-4"></div>
                <footer className="text-right text-muted-foreground font-medium">
                  — Shree Enterprises
                </footer>
              </blockquote>
            </Card>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Explore More</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: 'Our Projects', description: 'View our portfolio of successful projects', link: '/projects' },
                  { title: 'Our Services', description: 'Discover our comprehensive services', link: '/services' },
                  { title: 'Contact Us', description: 'Get in touch with our team', link: '/contact' }
                ].map((item, index) => (
                  <Link to={item.link} key={index} className="group">
                    <Card className="h-full p-6 hover:shadow-md transition-all duration-300 border-muted hover:border-primary/30 group-hover:-translate-y-1">
                      <h4 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      <div className="flex items-center text-primary font-medium">
                        Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
