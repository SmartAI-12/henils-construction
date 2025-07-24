import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Layers, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import sakarImage from '/lovable-uploads/Sakar-Swapana.png';

type ProjectStatus = 'All' | 'Work In Progress' | 'Completed';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectStatus>('All');

  useEffect(() => {
    // This will log the full URL where the image should be found
    console.log('Image URL:', `${window.location.origin}/lovable-uploads/Sakar-Swapana.png`);
    
    // Test if the image exists
    const img = new Image();
    img.onload = () => console.log('Image loaded successfully');
    img.onerror = () => console.error('Failed to load image');
    img.src = '/lovable-uploads/Sakar-Swapana.png';
  }, []);

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
      image: '/lovable-uploads/surpreme infra.png.png',
      description: 'Large-scale commercial and industrial complex.',
      category: 'Commercial',
    },
    {
      id: 5,
      title: 'Sakar Swapna CHSL',
      location: 'Andheri East, Mumbai',
      area: '0.47 Acres',
      size: '511 - 790 sq.ft.',
      floors: '1 Building - 96 units',
      type: 'Residential Apartments',
      status: 'Work In Progress',
      image: '/Sakar-Swapana.png',
      description: 'Premium residential development featuring 2 & 3 BHK apartments with modern amenities.',
      completionDate: 'Ongoing',
      category: 'Residential',
      details: {
        projectArea: '0.47 Acres',
        sizeRange: '511 - 790 sq.ft.',
        configuration: '2, 3 BHK Apartments',
        totalUnits: '96 units',
        buildings: '1 Building'
      }
    },
  ];

  // Filter projects based on active filter
  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'All') return true;
    return project.status === activeFilter;
  });

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
      
      {/* Projects Filter */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {['All', 'Work In Progress', 'Completed'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter as ProjectStatus)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          {/* Test image - temporary */}
          <div className="mb-8 p-4 border rounded-lg bg-gray-50">
            <h3 className="text-lg font-medium mb-2">Image Test</h3>
            <p className="text-sm text-gray-600 mb-2">Testing image at: /lovable-uploads/Sakar-Swapana.png</p>
            <div className="w-32 h-32 border">
              <img 
                src="/lovable-uploads/Sakar-Swapana.png" 
                alt="Test Image"
                className="w-full h-full object-cover"
                onLoad={() => console.log('Test image loaded successfully')}
                onError={(e) => console.error('Test image failed to load:', e)}
              />
            </div>
          </div>
          
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-500">No projects found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {filteredProjects.map((project) => (
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
                      onError={(e) => {
                        console.error('Error loading image:', project.image);
                        const target = e.target as HTMLImageElement;
                        target.src = '/default-project.jpg'; // Fallback image
                      }}
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
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;