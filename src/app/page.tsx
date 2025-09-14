'use client'
import React, { useState, useEffect } from 'react';
import About from '@/app/components/About';
import Clients from '@/app/components/Clients'
import Contact from '@/app/components/Contact'
import Footer from './components/Footer';
import Mission from './components/Mission2';
import Expertise from './components/Expertise';
import Process from './components/Process';
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("./components/Navbar"), {
  ssr: false, // Disables server-side rendering
});

const Hero = dynamic(() => import("./components/Hero"), {
  ssr: false, // Disables server-side rendering
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="animate-pulse flex flex-col items-center">
        <div className="h-12 w-64 bg-gray-700 rounded mb-4"></div>
        <div className="h-8 w-48 bg-gray-700 rounded mb-8"></div>
        <div className="h-64 w-full max-w-4xl bg-gray-800 rounded-2xl"></div>
      </div>
    </div>
  )
});

const Services = dynamic(() => import("./components/Services"), {
  ssr: false, // Disables server-side rendering
});

const Page: React.FC = () => {
  const [heroLoaded, setHeroLoaded] = useState(false);
  
  useEffect(() => {
    // Preload the Hero component
    const preloadHero = async () => {
      await import("./components/Hero");
      setHeroLoaded(true);
    };
    
    preloadHero();
  }, []);

  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      {heroLoaded && (
        <>
          <About />
          <Services />
          <Mission />
          <Expertise />
          <Process />
          <Clients />
          <Contact />
          <Footer/>
        </>
      )}
    </div>
  );
};

export default Page;