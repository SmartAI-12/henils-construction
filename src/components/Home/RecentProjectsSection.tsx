import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, MapPin, Calendar, Layers, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const RecentProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Mahindra Happinest',
      location: 'Nandore, Palghar Rd, Devkhope, Maharashtra',
      area: '1,16,323 sq ft',
      floors: 'G+4 Floor',
      type: 'Civil Work',
      status: 'Completed',
      image: '/lovable-uploads/4db61cf1-9210-4d03-a922-dcceeb908789.png',
      description: 'Premium residential complex with modern amenities and sustainable design.',
      completionDate: '2023',
      category: 'Residential',
    },
    {
      id: 2,
      title: 'Rajhans Vaibhav',
      location: 'Parbat Nagar, Dahisar East, Mumbai',
      area: '21,152 sq ft',
      floors: 'G+8 Floor',
      type: 'Civil & Finishing Work',
      status: 'Completed',
      image: '/lovable-uploads/cda145a3-4c32-4c46-b67e-9a5939e63d64.png',
      description: 'Luxury high-rise residential tower with premium finishes.',
      completionDate: '2023',
      category: 'Residential',
    },
    {
      id: 3,
      title: 'Rajhans Solitaire',
      location: 'Manchubhai road, Malad east, Mumbai',
      area: '29,652 sq ft',
      floors: 'G+9 Floor',
      type: 'Civil Work',
      status: 'Work In Progress',
      image: '/lovable-uploads/ce440644-9cf1-4337-95d7-dfce5c00fd17.png',
      description: 'Contemporary residential development with state-of-the-art facilities.',
      completionDate: '2024',
      category: 'Residential',
    },
    {
      id: 4,
      title: 'Supreme Infra',
      location: 'Supreme Powai RMC Plant, Hiranandani Gardens, Powai',
      area: '2,02,242 sq ft',
      floors: 'G+22 Floor',
      type: 'Civil Work',
      status: 'Work In Progress',
      image: '/lovable-uploads/c5d928b7-7eb0-414b-9f68-eb866f5c9c3f.png',
      description: 'Large-scale commercial and industrial complex.',
      completionDate: '2024',
      category: 'Commercial',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 rounded-full px-6 py-2">
            <Layers className="w-5 h-5 text-secondary" />
            <span className="text-secondary font-medium">Recent Projects</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground fade-in-up">
            Showcasing Our Latest
            <span className="block bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed fade-in-up">
            Explore our recently completed and ongoing projects that demonstrate our commitment to excellence and innovation in construction.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`luxury-card group hover:shadow-luxury transition-all duration-500 transform hover:-translate-y-2 overflow-hidden fade-in-up`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <Badge 
                    className={`${
                      project.status === 'Completed' 
                        ? 'bg-green-500 hover:bg-green-600' 
                        : 'bg-orange-500 hover:bg-orange-600'
                    } text-white`}
                  >
                    {project.status}
                  </Badge>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/20 text-white backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Title and Description */}
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Layers className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{project.area} • {project.floors}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-muted-foreground">
                      <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{project.type} • {project.completionDate}</span>
                    </div>
                  </div>
                  
                  {/* Call Button */}
                  <div className="pt-4 mt-4 border-t border-border">
                    <a 
                      href="tel:+919773391144" 
                      className="w-full flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Projects Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 fade-in-up" style={{ animationDelay: '800ms' }}>
          {[
            { number: '150+', label: 'Total Projects' },
            { number: '60+', label: 'Residential' },
            { number: '40+', label: 'Commercial' },
            { number: '25+', label: 'Active Partners' },
          ].map((stat, index) => (
            <div key={index} className="luxury-card p-6 text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center fade-in-up" style={{ animationDelay: '1000ms' }}>
          <Button 
            size="lg" 
            className="construction-button text-lg px-8 py-6"
            asChild
          >
            <Link to="/projects" className="flex items-center space-x-2">
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentProjectsSection;