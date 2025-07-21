import React from 'react';
import Layout from '@/components/Layout/Layout';

const BrochureDownload = () => {
  return (
    <Layout>
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold">
              Download Brochure
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Get our comprehensive company brochure with project portfolio and capabilities.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Brochure Download Coming Soon
            </h2>
            <p className="text-muted-foreground">
              Brochure download form is under development.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BrochureDownload;