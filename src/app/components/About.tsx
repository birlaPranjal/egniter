"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

const About = () => {
  return (
    <section id="about" className="bg-black py-24 relative overflow-hidden">
      {/* Blur Circles */}
      <div className="absolute -left-1/4 top-1/3 w-[500px] h-[500px] rounded-full bg-[#1849C6] opacity-30 blur-[120px]" />
      <div className="absolute right-1/3 top-[150px] bottom-0 w-[500px] h-[500px] rounded-full bg-[#1849C6] opacity-30 blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <motion.h3
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
            We are a creative powerhouse that blends strategy, design, and technology to craft impactful brand experiences. Our team of passionate professionals is dedicated to pushing boundaries and delivering innovative solutions that drive results.
          </motion.p>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              href="/about-us"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg transition-all duration-300"
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
