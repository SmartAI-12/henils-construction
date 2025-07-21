import React, { useState, useEffect, lazy, Suspense } from 'react';
import Layout from '@/components/Layout/Layout';
import { Zoom } from 'react-awesome-reveal';
import { X, ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

const QuoteForm = lazy(() => import('@/components/QuoteForm'));

const galleryImages = [
  {
    id: 1,
    src: '/gallery/construction1.jpg',
    alt: 'Residential Building Project',
    title: 'Modern Residential Complex',
    description: 'Luxury residential complex with modern architecture'
  },
  {
    id: 2,
    src: '/gallery/construction2.jpg',
    alt: 'Commercial Building',
    title: 'Commercial Space',
    description: 'State-of-the-art commercial building with glass facade'
  },
  {
    id: 3,
    src: '/gallery/construction3.jpg',
    alt: 'Interior Design',
    title: 'Elegant Interior',
    description: 'Sophisticated interior design with premium finishes'
  },
  {
    id: 4,
    src: '/gallery/construction4.jpg',
    alt: 'Construction Site',
    title: 'Ongoing Project',
    description: 'Our team working on a new development'
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft' && selectedImage !== null) {
        setSelectedImage(prev => (prev === 0 ? galleryImages.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight' && selectedImage !== null) {
        setSelectedImage(prev => (prev === galleryImages.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(prev => (prev === 0 ? galleryImages.length - 1 : (prev || 0) - 1));
    } else {
      setSelectedImage(prev => (prev === galleryImages.length - 1 ? 0 : (prev || 0) + 1));
    }
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold">
              Project Gallery
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Visual showcase of our construction projects and capabilities.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div key={image.id} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div 
                  className="cursor-pointer w-full h-full"
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = 'https://placehold.co/600x400/1e40af/ffffff?text=Project+' + image.id;
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white text-lg font-semibold">{image.title}</h3>
                  <p className="text-gray-200 text-sm">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Want to see more of our work? Contact us for a detailed portfolio.
            </p>
            <button 
              onClick={() => setShowQuoteForm(true)}
              className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Request Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </button>

          <button 
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10 p-2 bg-black/50 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(prev => (prev === 0 ? galleryImages.length - 1 : (prev || 0) - 1));
            }}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div className="relative max-w-4xl w-full max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <img
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              className="max-w-full max-h-[80vh] mx-auto object-contain"
              onError={(e) => {
                e.currentTarget.src = 'https://placehold.co/800x600/1e40af/ffffff?text=Image+Not+Found';
              }}
            />
            <div className="text-white text-center mt-4">
              <h3 className="text-xl font-semibold">{galleryImages[selectedImage].title}</h3>
              <p className="text-gray-300">{galleryImages[selectedImage].description}</p>
              <p className="text-sm text-gray-400 mt-2">
                {selectedImage + 1} of {galleryImages.length}
              </p>
            </div>
          </div>

          <button 
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10 p-2 bg-black/50 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(prev => (prev === galleryImages.length - 1 ? 0 : (prev || 0) + 1));
            }}
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}

      {/* Quote Form Modal */}
      {showQuoteForm && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-5 w-full max-w-sm relative">
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-xl font-bold text-gray-800">Request Portfolio</h2>
              <button 
                onClick={() => setShowQuoteForm(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="Close form"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <Suspense fallback={
              <div className="flex justify-center items-center h-32">
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
              </div>
            }>
              <div className="max-h-[80vh] overflow-y-auto pr-1 -mr-1">
                <QuoteForm 
                  defaultMessage="I'm interested in viewing your complete portfolio. Please share more details."
                  onSuccess={() => setShowQuoteForm(false)}
                />
              </div>
            </Suspense>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Gallery;