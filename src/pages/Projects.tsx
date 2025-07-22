import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Layers, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Mahindra Happinest',
      location: 'Nandore, Palghar Rd, Devkhope, Maharashtra',
      area: '1,16,323 sq ft',
      floors: 'G+4 Floor',
      type: 'Civil Work',
      status: 'Completed',
      image: '/lovable-uploads/mahindra-happinest.png.png',
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
      image: '/lovable-uploads/rajhans-vaibhav.png.png',
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
      image: '/lovable-uploads/rajhans-solitaire.png.png',
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
      image: '/lovable-uploads/supreme-infra.png.png',
      description: 'Large-scale commercial and industrial complex.',
      completionDate: '2024',
      category: 'Commercial',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
              <Layers className="w-5 h-5" />
              <span className="font-medium">Our Portfolio</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold">
              Our Projects
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Explore our portfolio of successfully completed and ongoing construction projects.
            </p>
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card 
                key={project.id} 
                className="luxury-card group hover:shadow-luxury transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="space-y-2">
                      <Badge variant="secondary" className="text-sm font-medium">
                        {project.category}
                      </Badge>
                      <p className="text-white text-sm font-light">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Project Details */}
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    
                    <div className="space-y-3 text-sm text-muted-foreground">
                      <div className="flex items-start space-x-2">
                        <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-secondary" />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-secondary" />
                        <span>Completed: {project.completionDate}</span>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-border">
                        <span className="font-medium">{project.area}</span>
                        <span className="text-foreground font-medium">{project.floors}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="px-6 pb-6 pt-4">
                  <div className="w-full flex flex-col space-y-3">
                    <div className="w-full flex justify-center">
                      <Badge 
                        variant={project.status === 'Completed' ? 'default' : 'outline'}
                        className={`text-sm ${project.status === 'Work In Progress' ? 'border-amber-500 text-amber-500' : ''}`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <a 
                      href="tel:+919773391144" 
                      className="w-full flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors text-sm"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;