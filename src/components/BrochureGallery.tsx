import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';

interface BrochureGalleryProps {}

const BrochureGallery: React.FC<BrochureGalleryProps> = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of brochure image paths with absolute URLs
  const brochureImages = Array.from(
    { length: 12 },
    (_, i) => {
      // Use absolute path for better reliability
      const path = `${window.location.origin}/brochures/brochure-${i + 1}.png.png`;
      console.log(`Image ${i + 1} path:`, path);
      return path;
    }
  );

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === brochureImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? brochureImages.length - 1 : prevIndex - 1
    );
  };

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = brochureImages[currentImageIndex];
    link.download = `henil-construction-brochure-${currentImageIndex + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog>
      <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
        <div className="relative bg-white rounded-lg overflow-hidden">
          {/* Close Button */}
          <button
            className="absolute right-4 top-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              const closeButton = document.querySelector('button[data-close]');
              if (closeButton) (closeButton as HTMLButtonElement).click();
            }}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Main Image */}
          <div className="relative aspect-[3/4] w-full bg-gray-100">
            <img
              src={brochureImages[currentImageIndex]}
              alt={`Brochure Page ${currentImageIndex + 1}`}
              className="w-full h-full object-contain"
              onLoad={() => console.log(`Image ${currentImageIndex + 1} loaded successfully`)}
              onError={(e) => {
                console.error(`Error loading image ${currentImageIndex + 1}:`, e);
                console.error('Image path:', brochureImages[currentImageIndex]);
              }}
            />

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              aria-label="Previous page"
            >
              &larr;
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
              aria-label="Next page"
            >
              &rarr;
            </button>
          </div>

          {/* Thumbnails */}
          <div className="p-4 bg-white border-t">
            <div className="flex overflow-x-auto space-x-2 pb-2">
              {brochureImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-16 h-20 border-2 rounded overflow-hidden ${
                    currentImageIndex === index
                      ? 'border-primary ring-2 ring-primary'
                      : 'border-gray-200'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Download Button */}
            <div className="mt-4 flex justify-center">
              <Button onClick={downloadImage} className="bg-primary hover:bg-primary/90">
                Download Page {currentImageIndex + 1}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BrochureGallery;
