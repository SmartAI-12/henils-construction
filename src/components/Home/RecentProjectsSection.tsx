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
      location: 'Supreme Powai RMC Plant, Hiranandani Gardeens',
      area: '2,02,242 sq ft',
      floors: 'G+22 Floor',
      type: 'Civil Work',
      status: 'Work In Progress',
      image: '/lovable-uploads/surpreme infra.png.png',
      description: 'Modern residential complex with premium amenities and green spaces.',
      completionDate: '2024',
      category: 'Residential',
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
              className={`luxury-card group relative overflow-hidden transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 border border-gray-100`}
              style={{ 
                animationDelay: `${index * 150}ms`,
                boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.1)'
              }}
            >
              {/* Animated Background Elements */}
              <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/5 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-secondary/5 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
              </div>

              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-white/30 rounded-full blur"></div>
                    <Badge 
                      className={`relative z-10 ${
                        project.status === 'Completed' 
                          ? 'bg-green-600 hover:bg-green-700' 
                          : 'bg-amber-600 hover:bg-amber-700'
                      } text-white border-0`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-white/30 rounded-full blur"></div>
                    <Badge 
                      variant="secondary" 
                      className="relative z-10 bg-white/20 text-white backdrop-blur-sm border-0"
                    >
                      {project.category}
                    </Badge>
                  </div>
                </div>
              </div>

              <CardContent className="p-6 relative">
                <div className="space-y-5">
                  {/* Title and Description */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start space-x-3 text-gray-700">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <MapPin className="w-3.5 h-3.5 text-primary" />
                        </div>
                      </div>
                      <span className="leading-tight">{project.location}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3 text-gray-700">
                      <div className="flex-shrink-0">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <Layers className="w-3.5 h-3.5 text-primary" />
                        </div>
                      </div>
                      <span>{project.area} • {project.floors}</span>
                    </div>
                    
                    <div className="flex items-center space-x-3 text-gray-700">
                      <div className="flex-shrink-0">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                          <Calendar className="w-3.5 h-3.5 text-primary" />
                        </div>
                      </div>
                      <span>{project.type} • {project.completionDate}</span>
                    </div>
                  </div>
                </div>

                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-lg pointer-events-none overflow-hidden">
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/10 rounded-lg transition-all duration-700"></div>
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