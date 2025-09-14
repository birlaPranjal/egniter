import React from 'react';
import Navbar from '@/app/components/Navbar';
import BrandsHero from '@/app/components/BrandsHero';
import BrandsShowcase from '@/app/components/BrandsShowcase';
import BrandStrategy from '@/app/components/BrandStrategy';
import BrandProcess from '@/app/components/BrandProcess';
import BrandValues from '@/app/components/BrandValues';
import BrandTestimonials from '@/app/components/BrandTestimonials';
import Footer from '@/app/components/Footer';

const BrandsPage: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <BrandsHero />
      <BrandsShowcase />
      <BrandValues />
      <BrandStrategy />
      <BrandProcess />
      <BrandTestimonials />
      <Footer />
    </div>
  );
};

export default BrandsPage; 