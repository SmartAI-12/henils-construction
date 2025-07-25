import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { MapPin, Calendar, Layers, ArrowLeft } from 'lucide-react';
import Layout from '@/components/Layout/Layout';
import { projects } from '@/data/projects';

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === parseInt(id || ''));

  if (!project) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <p className="mb-6">The project you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/projects">Back to Projects</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout 
      pageTitle={`${project.title} | Henil Construction`} 
      pageDescription={project.description}
    >
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/projects" className="flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>
          </Button>

          <div className="bg-card rounded-xl shadow-sm overflow-hidden">
            {/* Project Header */}
            <div className="p-6 border-b">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h1 className="text-3xl font-bold">{project.title}</h1>
                  <div className="flex flex-wrap items-center gap-2 mt-2">
                    <Badge variant="outline" className="flex items-center">
                      <MapPin className="h-3.5 w-3.5 mr-1" />
                      {project.location}
                    </Badge>
                    <Badge variant={project.status === 'Completed' ? 'default' : 'secondary'}>
                      {project.status}
                    </Badge>
                    <Badge variant="outline">{project.category}</Badge>
                  </div>
                </div>
                <Button asChild>
                  <Link to="/contact">Start Your Project</Link>
                </Button>
              </div>
            </div>

            {/* Project Gallery */}
            <div className="bg-muted/20">
              <Carousel className="w-full">
                <CarouselContent>
                  {project.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-video md:aspect-[16/7] bg-black/5">
                        <img
                          src={image}
                          alt={`${project.title} - ${index + 1}`}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-6" />
                <CarouselNext className="right-6" />
              </Carousel>
            </div>

            {/* Project Details */}
            <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-xl font-semibold mb-4">Project Overview</h2>
                  <p className="text-foreground/90">{project.description}</p>
                </div>

                {project.features && project.features.length > 0 && (
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Key Features</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-flex items-center justify-center w-5 h-5 mr-2 mt-0.5 flex-shrink-0 rounded-full bg-primary/10 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="bg-muted/30 p-6 rounded-lg">
                  <h3 className="font-semibold mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Project Area</p>
                      <p className="font-medium">{project.area}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Floors</p>
                      <p className="font-medium">{project.floors}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Project Type</p>
                      <p className="font-medium">{project.type}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Completion Date</p>
                      <p className="font-medium">{project.completionDate}</p>
                    </div>
                    {project.client && (
                      <div>
                        <p className="text-sm text-muted-foreground">Client</p>
                        <p className="font-medium">{project.client}</p>
                      </div>
                    )}
                  </div>
                </div>

                <Button asChild className="w-full">
                  <Link to="/contact">
                    Get a Free Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
