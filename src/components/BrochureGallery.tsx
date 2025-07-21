import { useState } from 'react';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { Download } from 'lucide-react';

const BrochureGallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 12; // As per BROCHURE_INSTRUCTIONS.md

  // Generate array of brochure image paths
  const brochureImages = Array.from(
    { length: totalPages },
    (_, i) => `/brochures/brochure-${i + 1}.jpg`
  );

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const downloadPdf = (pageNumber: number) => {
    const link = document.createElement('a');
    link.href = `/brochures/brochure-${pageNumber}.jpg`;
    link.download = `brochure-page-${pageNumber}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <div className="relative w-full max-w-4xl">
        {/* Main Image */}
        <div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
          <img
            src={brochureImages[currentPage - 1]}
            alt={`Brochure Page ${currentPage}`}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevPage}
          disabled={currentPage === 1}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          ←
        </button>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          →
        </button>

        {/* Page Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 px-4 py-1 rounded-full text-sm">
          Page {currentPage} of {totalPages}
        </div>

        {/* Download Button */}
        <Button
          onClick={() => downloadPdf(currentPage)}
          variant="outline"
          className="absolute bottom-4 right-4 bg-white/80 hover:bg-white"
        >
          <Download className="w-4 h-4 mr-2" />
          Download
        </Button>
      </div>

      {/* Thumbnails */}
      <div className="mt-4 flex gap-2 overflow-x-auto w-full max-w-4xl pb-2">
        {brochureImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-16 h-16 flex-shrink-0 rounded overflow-hidden border-2 ${
              currentPage === index + 1 ? 'border-blue-500' : 'border-transparent'
            }`}
          >
            <img
              src={`/brochures/brochure-${index + 1}.jpg`}
              alt={`Page ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default BrochureGallery;
