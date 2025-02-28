'use client'
import React from 'react';
import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import Services from '@/app/components/Services';
import About from '@/app/components/About';
import Work from '@/app/components/Work';
import Clients from '@/app/components/Clients'
import Contact from '@/app/components/Contact'
import Footer from './components/Footer';

const Page: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Work />
      <Clients />
      <Contact />
      <Footer/>
    </div>
  );
};

export default Page;