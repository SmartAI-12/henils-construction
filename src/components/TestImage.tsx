import React from 'react';

const TestImage = () => {
  return (
    <div className="fixed top-4 right-4 bg-white p-4 rounded-lg shadow-lg z-50">
      <h3 className="text-lg font-bold mb-2">Test Image</h3>
      <img 
        src="/test-image.png" 
        alt="Test" 
        className="w-16 h-16"
        onLoad={() => console.log('Test image loaded successfully')}
        onError={(e) => console.error('Error loading test image:', e)}
      />
      <p className="text-xs mt-2 text-gray-600">Check console for load status</p>
    </div>
  );
};

export default TestImage;
