'use client'
import React from 'react';
import About from '@/app/components/About';
import Work from '@/app/components/Work';
import Clients from '@/app/components/Clients'
import Contact from '@/app/components/Contact'
import Footer from './components/Footer';
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./components/Navbar"), {
  ssr: false, // Disables server-side rendering
});

const Hero = dynamic(() => import("./components/Hero"), {
  ssr: false, // Disables server-side rendering
});

const Services = dynamic(() => import("./components/Services"), {
  ssr: false, // Disables server-side rendering
});

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