import React from 'react';
import Navbar from '@/app/components/Navbar';
import ServicesHero from '@/app/components/ServicesHero';
import ServicesTabs from '@/app/components/ServicesTabs';
import Testimonials from '@/app/components/Testimonials';
import Footer from '@/app/components/Footer';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <ServicesHero />
      <ServicesTabs />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default ServicesPage; 