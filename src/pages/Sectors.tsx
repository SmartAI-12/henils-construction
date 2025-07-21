import React from 'react';
import Layout from '@/components/Layout/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { GraduationCap, Heart, Building, Factory, Home, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sectors = () => {
  const sectors = [
    {
      icon: Home,
      title: 'Residential',
      description: 'From luxury apartments to affordable housing, we create living spaces that combine comfort, style, and functionality.',
      projects: '60+ Projects',
      stats: [
        { label: 'High-Rise', value: '25+' },
        { label: 'Mid-Rise', value: '20+' },
        { label: 'Villas', value: '15+' }
      ],
      features: [
        'Custom home construction',
        'Apartment complexes',
        'Gated communities',
        'Affordable housing',
        'Luxury residences',
        'Townhouse developments'
      ]
    },
    {
      icon: Building,
      title: 'Commercial',
      description: 'Modern workspaces and retail environments designed to enhance productivity and customer experience.',
      projects: '40+ Projects',
      stats: [
        { label: 'Office Spaces', value: '18' },
        { label: 'Retail', value: '15' },
        { label: 'Mixed-Use', value: '7+' }
      ],
      features: [
        'Corporate offices',
        'Shopping malls',
        'Hotels & hospitality',
        'Co-working spaces',
        'Retail outlets',
        'Business parks'
      ]
    },
    {
      icon: Factory,
      title: 'Industrial',
      description: 'Robust and efficient facilities built to meet the demands of modern manufacturing and logistics.',
      projects: '20+ Projects',
      stats: [
        { label: 'Warehouses', value: '12' },
        { label: 'Factories', value: '6' },
        { label: 'Logistics', value: '4' }
      ],
      features: [
        'Manufacturing plants',
        'Warehousing',
        'Distribution centers',
        'Industrial parks',
        'Cold storage',
        'Processing units'
      ]
    },
    {
      icon: GraduationCap,
      title: 'Educational',
      description: 'Inspiring learning environments that foster education and innovation for future generations.',
      projects: '25+ Projects',
      stats: [
        { label: 'Schools', value: '15' },
        { label: 'Colleges', value: '7' },
        { label: 'Universities', value: '3' }
      ],
      features: [
        'School buildings',
        'University campuses',
        'Research facilities',
        'Libraries',
        'Sports complexes',
        'Student housing'
      ]
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'State-of-the-art medical facilities designed for optimal patient care and operational efficiency.',
      projects: '15+ Projects',
      stats: [
        { label: 'Hospitals', value: '8' },
        { label: 'Clinics', value: '5' },
        { label: 'Labs', value: '4' }
      ],
      features: [
        'Multi-specialty hospitals',
        'Diagnostic centers',
        'Medical colleges',
        'Rehabilitation centers',
        'Pharma units',
        'Research facilities'
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold">
              Sectors We Serve
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Specialized construction solutions across multiple industry sectors, 
              delivering excellence through tailored approaches and deep expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {sectors.map((sector, index) => (
              <div key={index} className="group">
                <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl">
                  <div className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center flex-shrink-0">
                        <sector.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-foreground mb-2">
                          {sector.title}
                        </h2>
                        <p className="text-muted-foreground">
                          {sector.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-3 gap-4 mb-6">
                      {sector.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold text-primary">{stat.value}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">Our Expertise:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {sector.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-border/20">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          {sector.projects} Completed
                        </span>
                        <Button variant="ghost" size="sm" asChild>
                          <Link to={`/projects?sector=${sector.title.toLowerCase()}`} className="group">
                            View Projects
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-foreground">
              Need a Specialized Solution?
            </h2>
            <p className="text-lg text-muted-foreground">
              Our team has the expertise to handle projects of any scale and complexity across various sectors.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button size="lg" className="construction-button" asChild>
                <Link to="/contact" className="flex items-center space-x-2">
                  <span>Get in Touch</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sectors;