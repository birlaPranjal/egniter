'use client';
import React from 'react';
import Navbar from '@/app/components/Navbar';
import WorkHero from '@/app/components/WorkHero';
import CaseStudies from '@/app/components/CaseStudies';
import Gallery from '@/app/components/Gallery';
import Footer from '@/app/components/Footer';


const OurWorkPage: React.FC = () => {

  return (
    <div className="bg-black text-white">
      <Navbar />
      <WorkHero />
      <CaseStudies />
      <Gallery /> 
      <Footer />
    </div>
  );
};

export default OurWorkPage; 