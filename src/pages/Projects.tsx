import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Search, Filter, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { projects } from '@/data/projects';
import { Project } from '@/data/projects';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Layout from '@/components/Layout/Layout';
import CTASection from '../components/CTASection';

type ProjectStatus = 'All' | 'Work In Progress' | 'Completed';
type ProjectCategory = 'Residential' | 'Commercial' | 'Industrial' | 'Institutional';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectStatus>('All');
  const [categoryFilter, setCategoryFilter] = useState<ProjectCategory>('Residential');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Sample projects data
  const projects: Project[] = [
    {
      id: 1,
      title: 'Mahindra Happinest',
      location: 'Nandore, Palghar Rd, Devkhope, Maharashtra',
      area: '1,16,323 sq ft',
      floors: 'G+4 Floor',
      type: 'Civil Work',
      status: 'Completed',
      images: ['/lovable-uploads/mahindra-happinest.png.png'],
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
      images: ['/lovable-uploads/rajhans-vaibhav.png.png'],
      description: 'Luxury high-rise residential tower with premium finishes.',
      completionDate: '2024',
      category: 'Residential',
    },
    {
      id: 3,
      title: 'Sakar Swapna',
      location: 'Bhayandar West, Mumbai',
      area: '15,000 sq ft',
      floors: 'G+7 Floor',
      type: 'Civil & Finishing Work',
      status: 'Work In Progress',
      images: ['/lovable-uploads/Sakar-swapna.png.png'],
      description: 'Modern residential building with contemporary design.',
      completionDate: '2022',
      category: 'Residential',
    },
    {
      id: 4,
      title: 'Rajhans Solitaire',
      location: 'Manchubhai road, Malad east, Mumbai-400097',
      area: '29,652 sq ft',
      floors: 'G+5 Floor',
      type: 'Civil & Finishing Work',
      status: 'Work In Progress',
      images: ['/lovable-uploads/rajhans-solitaire.png.png'],
      description: 'Commercial complex with retail spaces and offices.',
      completionDate: '2021',
      category: 'Commercial',
    },
    {
      id: 5,
      title: 'Supreme Infra',
      location: 'Supreme Powai RMC Plant, Hiranandani Gardens',
      area: '2,02,242 sq ft',
      floors: 'G+22 Floor',
      type: 'Civil Work',
      status: 'Work In Progress',
      images: ['/lovable-uploads/surpreme infra.png.png'],
      description: 'Modern residential complex with premium amenities and green spaces.',
      completionDate: '2025',
      category: 'Residential',
    }
  ];

  // Filter projects based on active filters and search query
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesStatus = activeFilter === 'All' || project.status === activeFilter;
      const matchesCategory = project.category === categoryFilter;
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesStatus && matchesCategory && matchesSearch;
    });
  }, [activeFilter, categoryFilter, searchQuery]);

  // Animation variants for project cards
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  };

  return (
    <Layout 
      pageTitle="Our Projects | Henil Construction"
      pageDescription="Explore our portfolio of completed and ongoing construction projects."
    >
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Projects
          </motion.h1>
          <motion.p 
            className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Discover our portfolio of exceptional construction projects that showcase our commitment to quality and innovation.
          </motion.p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-background sticky top-20 z-10 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-1/3">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search projects..."
                className="pl-10 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Status:</span>
                <div className="flex bg-muted rounded-lg p-1">
                  {['All', 'Completed', 'Work In Progress'].map((status) => (
                    <Button
                      key={status}
                      variant={activeFilter === status ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setActiveFilter(status as ProjectStatus)}
                      className="rounded-md px-3 py-1 text-sm"
                    >
                      {status}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Category:</span>
                <Select 
                  value={categoryFilter} 
                  onValueChange={(value) => setCategoryFilter(value as ProjectCategory)}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {['Residential', 'Commercial', 'Industrial', 'Institutional'].map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <Button 
              variant="outline" 
              size="sm" 
              className="md:hidden"
              onClick={() => setIsFilterOpen(true)}
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    custom={index % 6}
                    initial="hidden"
                    animate="visible"
                    variants={itemVariants}
                    layout
                  >
                    <Card 
                      key={project.id} 
                      className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col"
                    >
                      <Link to={`/projects/${project.id}`} className="block flex-1">
                        <div className="relative aspect-video overflow-hidden">
                          <img
                            src={project.images[0]}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <Button variant="secondary" size="sm" className="opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                              View Project
                            </Button>
                          </div>
                        </div>
                        <CardContent className="p-4 flex-1 flex flex-col">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-lg line-clamp-1">{project.title}</h3>
                            <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'} className="shrink-0">
                              {project.status}
                            </Badge>
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground mb-2">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span className="line-clamp-1">{project.location}</span>
                          </div>
                          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{project.description}</p>
                          <div className="mt-auto">
                            <Badge variant="outline" className="text-xs">
                              {project.category}
                            </Badge>
                          </div>
                        </CardContent>
                      </Link>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-muted-foreground">No projects found matching your criteria</h3>
              <Button 
                variant="ghost" 
                className="mt-4"
                onClick={() => {
                  setActiveFilter('All');
                  setCategoryFilter('Residential');
                  setSearchQuery('');
                }}
              >
                <X className="h-4 w-4 mr-2" />
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Mobile Filter Drawer */}
      <Dialog open={isFilterOpen} onOpenChange={setIsFilterOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Filter Projects</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <Select 
                value={activeFilter}
                onValueChange={(value: ProjectStatus) => setActiveFilter(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All">All Projects</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                  <SelectItem value="Work In Progress">In Progress</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Category</label>
              <Select
                value={categoryFilter}
                onValueChange={(value: ProjectCategory) => setCategoryFilter(value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Residential">Residential</SelectItem>
                  <SelectItem value="Commercial">Commercial</SelectItem>
                  <SelectItem value="Industrial">Industrial</SelectItem>
                  <SelectItem value="Institutional">Institutional</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button 
              variant="outline" 
              className="w-full mt-4"
              onClick={() => {
                setActiveFilter('All');
                setCategoryFilter('Residential');
                setSearchQuery('');
              }}
            >
              Clear Filters
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <CTASection />
    </Layout>
  );
};

export default Projects;