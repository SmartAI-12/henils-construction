import React from 'react';

export const StatisticsSection = () => {
  return (
    <section className="bg-white py-12 fade-in-up">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-sm text-muted-foreground font-medium">Years Experience</div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold text-primary mb-2">150+</div>
            <div className="text-sm text-muted-foreground font-medium">Projects Delivered</div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground font-medium">Client Satisfaction</div>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold text-primary mb-2">0</div>
            <div className="text-sm text-muted-foreground font-medium">Incidents</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
