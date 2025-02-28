"use client";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Brand {
  id: string;
  name: string;
  logo: string;
  description: string;
  website: string;
  color: string;
}

const BrandsShowcase: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const brands: Brand[] = [
    {
      id: 'egniter',
      name: 'Egniter',
      logo: '/logo.svg',
      description: 'A full-service creative agency specializing in brand strategy, design, and digital experiences. We ignite brands with purpose-driven creativity and innovative solutions that drive meaningful connections and business growth.',
      website: 'https://egniter.com',
      color: 'from-blue-600 to-purple-600'
    },
    {
      id: 'meta-visuals',
      name: 'Meta Visuals',
      logo: '/meta-visuals-logo.svg',
      description: 'Specializing in immersive visual experiences, Meta Visuals creates cutting-edge AR/VR solutions, 3D visualizations, and interactive media that push the boundaries of digital storytelling and engagement.',
      website: 'https://metavisuals.com',
      color: 'from-green-500 to-blue-500'
    },
    {
      id: 'potato-pixels',
      name: 'Potato Pixels',
      logo: '/potato-pixels-logo.svg',
      description: 'A quirky digital production studio focused on creating playful, engaging content for social media, web, and mobile platforms. We combine creativity with technical expertise to deliver content that stands out in the digital landscape.',
      website: 'https://potatopixels.com',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-black text-white relative overflow-hidden">
      {/* Blur Circles */}
      <div className="absolute -left-1/4 top-1/3 w-[500px] h-[500px] rounded-full bg-[#1849C6] opacity-30 blur-[120px]" />
      <div className="absolute right-1/3 top-[150px] bottom-0 w-[500px] h-[500px] rounded-full bg-[#1849C6] opacity-30 blur-[120px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-sm text-[#1849C6] mb-4 tracking-widest font-medium"
          >
            /OUR FAMILY OF BRANDS
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            Meet Our <span className="italic font-light">Brands</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-12"
          >
            Each of our brands has a unique focus and expertise, allowing us to provide specialized solutions across different creative domains.
          </motion.p>
        </div>

        <div className="space-y-24">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
            >
              {/* Brand Logo */}
              <div className="w-full md:w-2/5">
                <div className={`bg-gradient-to-br ${brand.color} p-12 rounded-2xl shadow-lg flex items-center justify-center h-[300px]`}>
                  <div className="w-48 h-48 relative">
                    <img
                      src={brand.logo}
                      alt={`${brand.name} Logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Brand Description */}
              <div className="w-full md:w-3/5">
                <h3 className={`text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r ${brand.color} bg-clip-text text-transparent`}>
                  {brand.name}
                </h3>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  {brand.description}
                </p>
                <Link 
                  href={brand.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`inline-block px-8 py-3 rounded-full bg-gradient-to-r ${brand.color} text-white font-medium hover:shadow-lg transition-all duration-300`}
                >
                  Visit Website
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsShowcase; 