import React from 'react';
import Navbar from '@/app/components/Navbar';
import AboutHero from '@/app/components/AboutHero';
import Mission from '@/app/components/Mission';
import Team from '@/app/components/Team';
import Gallery from '@/app/components/Gallery';
import Footer from '@/app/components/Footer';

const AboutUsPage: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <AboutHero />
      <Mission />
      <Team />
      <Gallery />
      <Footer />
    </div>
  );
};

export default AboutUsPage; 