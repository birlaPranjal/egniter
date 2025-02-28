"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  thumbnail: string;
  slug: string;
}

const CaseStudies: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState<string>('all');

  const caseStudies: CaseStudy[] = [
    {
      id: '1',
      title: 'Brand Transformation',
      client: 'TechVision Inc.',
      category: 'branding',
      thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      slug: 'techvision-brand-transformation'
    },
    {
      id: '2',
      title: 'E-commerce Redesign',
      client: 'Fashion Forward',
      category: 'web',
      thumbnail: 'https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      slug: 'fashion-forward-ecommerce'
    },
    {
      id: '3',
      title: 'Product Launch Campaign',
      client: 'Innovate Solutions',
      category: 'marketing',
      thumbnail: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      slug: 'innovate-product-launch'
    },
    {
      id: '4',
      title: 'Corporate Video Series',
      client: 'Global Finance',
      category: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      slug: 'global-finance-video-series'
    },
    {
      id: '5',
      title: 'Mobile App Design',
      client: 'HealthTrack',
      category: 'app',
      thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      slug: 'healthtrack-app-design'
    },
    {
      id: '6',
      title: 'Social Media Campaign',
      client: 'Eco Friendly',
      category: 'marketing',
      thumbnail: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      slug: 'eco-friendly-social-campaign'
    },
    {
      id: '7',
      title: 'Brand Identity System',
      client: 'Artisan Cafe',
      category: 'branding',
      thumbnail: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      slug: 'artisan-cafe-brand-identity'
    },
    {
      id: '8',
      title: 'Interactive Installation',
      client: 'Modern Museum',
      category: 'interactive',
      thumbnail: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      slug: 'modern-museum-installation'
    }
  ];

  // Generate unique categories
  const categories = ['all', ...Array.from(new Set(caseStudies.map(item => item.category)))];

  // Filter case studies
  const filteredCaseStudies = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(item => item.category === activeFilter);

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
            /CASE STUDIES
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            Our <span className="italic font-light">Success Stories</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-12"
          >
            Explore our portfolio of successful projects and discover how we&apos;ve helped our clients achieve their goals.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredCaseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Link href={`/our-work/${study.slug}`} className="block group">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img 
                    src={study.thumbnail} 
                    alt={study.title} 
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <span className="inline-block px-3 py-1 bg-[#1849C6] text-white text-xs rounded-full mb-2">
                        {study.category.charAt(0).toUpperCase() + study.category.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-1 group-hover:text-[#1849C6] transition-colors">{study.title}</h3>
                <p className="text-gray-400">{study.client}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies; 