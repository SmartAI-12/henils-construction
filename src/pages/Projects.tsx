import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Layers, Phone, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import sakarImage from '/lovable-uploads/Sakar-Swapana.png';

type ProjectStatus = 'All' | 'Work In Progress' | 'Completed';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectStatus>('All');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'Mahindra Happinest',
      location: 'Nandore, Palghar Rd, Devkhope, Maharashtra',
      area: '1,16,323 sq ft',
      floors: 'G+4 Floor',
      type: 'Civil Work',
      status: 'Completed',
      images: [
        '/lovable-uploads/mahindra-happinest.png.png',
        // Add more images here
      ],
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
      images: [
        '/lovable-uploads/rajhans-vaibhav.png.png',
        // Add more images here
      ],
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
      images: [
        '/lovable-uploads/rajhans-solitaire.png.png',
        // Add more images here
      ],
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
      images: [
        '/lovable-uploads/surpreme infra.png.png',
        // Add more images here
      ],
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
      images: [
        '/lovable-uploads/Sakar-swapna.png.png',
        // Add more images here
      ],
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

  const openGallery = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    setTimeout(() => setSelectedProject(null), 300); // Wait for animation
  };

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
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Completed: {project.completionDate}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Image Gallery Modal */}
      <Dialog open={isGalleryOpen} onOpenChange={setIsGalleryOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedProject?.title} Gallery</DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4"
              onClick={closeGallery}
            >
              <X className="h-5 w-5" />
            </Button>
          </DialogHeader>
          
          <Carousel className="w-full">
            <CarouselContent>
              {selectedProject?.images.map((img, index) => (
                <CarouselItem key={index}>
                  <div className="flex justify-center">
                    <img 
                      src={img} 
                      alt={`${selectedProject.title} - ${index + 1}`}
                      className="max-h-[70vh] object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Add navigation arrows if needed */}
          </Carousel>
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Projects;