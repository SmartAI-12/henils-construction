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
        <section className="relative overflow-hidden bg-gradient-to-b from-primary to-primary-dark text-primary-foreground">
          <div className="absolute inset-0 bg-[url('/images/construction-pattern.png')] opacity-5"></div>
          
          <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-3xl md:text-5xl font-bold mb-6">
                  <span className="block text-lg md:text-xl font-light tracking-widest mb-2">ABOUT OUR</span>
                  <span className="text-4xl md:text-6xl block mt-2">COMPANY</span>
                </h1>
                <div className="w-24 h-1 bg-primary-foreground/30 mx-auto my-8"></div>
                <p className="text-lg md:text-xl leading-relaxed mb-8">
                  Shree Enterprises founded in 2019, is one of the ambitious and inspiring construction company. Becoming a premier solution provider in engineering and technical solutions for the construction and engineering society requires dedication and a clear <span className="font-medium">focus on client satisfaction, innovation, professionalism,</span> and <span className="font-medium">quality.</span>
                </p>
                <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Curved Divider */}
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
            <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
              <path d="M0,96L80,90.7C160,85,320,75,480,80C640,85,800,107,960,106.7C1120,107,1280,85,1360,74.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Card className="border-0 shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="bg-primary/5 p-8 md:p-12 flex items-center">
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                        Our <span className="text-primary">Team</span>
                      </h2>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                        Our Team combines technical excellence with superior understanding of client need and the environment in which our client operates. We are committed to working partnerships with our clients that add value and consistently exceed expectations.
                      </p>
                      <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                        Meet Our Team
                      </Button>
                    </div>
                  </div>
                  <div className="bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center min-h-[400px]">
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="bg-background border-0 shadow-lg p-8 md:p-12 relative overflow-visible">
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
            </motion.div>
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
                  <Link to={item.link} key={index}>
                    <Card className="h-full p-6 hover:shadow-md transition-shadow border-muted hover:border-primary/30">
                      <h4 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      <div className="flex items-center text-primary font-medium">
                        Learn more <ArrowRight className="ml-2 h-4 w-4" />
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
