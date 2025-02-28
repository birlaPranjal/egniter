import React from 'react';
import Navbar from '@/app/components/Navbar';
import BrandsHero from '@/app/components/BrandsHero';
import BrandsShowcase from '@/app/components/BrandsShowcase';
import Footer from '@/app/components/Footer';

const BrandsPage: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <BrandsHero />
      <BrandsShowcase />
      <Footer />
    </div>
  );
};

export default BrandsPage; 