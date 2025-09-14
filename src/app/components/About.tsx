"use client";
import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import ImageSlider from './ImageSlider';

const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      // Only run GSAP animations on the client side
      const ctx = gsap.context(() => {
        gsap.from(headingRef.current, {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
          }
        });

        gsap.from(contentRef.current, {
          y: 100,
          opacity: 0,
          duration: 1,
          delay: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
          }
        });
      }, sectionRef);

      return () => ctx.revert(); // Cleanup
    }
  }, []);

  if (!isClient) {
    // Return a minimal version for SSR
    return (
      <section 
        id="about" 
        className="min-h-screen bg-black py-24 relative overflow-hidden flex items-center justify-center"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-sm text-[#1849C6] mb-4 tracking-widest font-medium">
              /ABOUT US
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              What <span className="italic font-light">Defines Us?</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed">
              At Egniter, we&apos;re more than just a creative company—we are a force of innovation, sparking transformation across industries through the power of creativity. We believe that creativity can solve almost any problem, and we bring this philosophy to everything we do. With an unwavering passion for storytelling, visual artistry, and cutting-edge technology, we help brands redefine their identities, connect with audiences, and break through the noise.
            </p>
            <div className="flex justify-center">
              <ImageSlider />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="min-h-screen bg-black py-24 relative overflow-hidden flex items-center justify-center"
    >
      {/* Blur Circles */}
      <motion.div 
        className="absolute -left-1/4 top-1/3 w-[500px] h-[500px] rounded-full bg-[#1849C6] opacity-30 blur-[120px]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.div 
        className="absolute right-1/3 top-[150px] bottom-0 w-[500px] h-[500px] rounded-full bg-[#1849C6] opacity-30 blur-[120px]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center" ref={contentRef}>
          {/* Heading */}
          <motion.h3
            ref={headingRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-sm text-[#1849C6] mb-4 tracking-widest font-medium"
          >
            /ABOUT US
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-8 text-white"
          >
            What <span className="italic font-light">Defines Us?</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed"
          >
            At Egniter, we&apos;re more than just a creative company—we are a force of innovation, sparking transformation across industries through the power of creativity. We believe that creativity can solve almost any problem, and we bring this philosophy to everything we do. With an unwavering passion for storytelling, visual artistry, and cutting-edge technology, we help brands redefine their identities, connect with audiences, and break through the noise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center"
          >
            <ImageSlider />
          </motion.div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link
              href="/about-us"
              className="mt-8 inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
