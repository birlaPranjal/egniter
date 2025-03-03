"use client";
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ServiceTab {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
  image: string;
  color: string;
  detailedDescription: string;
}

const ServicesTabs: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services: ServiceTab[] = [
    {
      id: 'social-media',
      title: 'Social Media Marketing',
      icon: '📱',
      description: 'Strategic social media management to build your brand presence and engage with your audience effectively across all platforms.',
      features: [
        'Platform-specific strategy development',
        'Content creation and curation',
        'Community management',
        'Performance analytics and reporting',
        'Paid social campaign management'
      ],
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
      color: 'from-blue-500 to-indigo-600',
      detailedDescription: 'Our Social Media Marketing service is designed to elevate your brands presence across all major platforms. We create tailored strategies that align with your business goals, whether thats increasing brand awareness, driving engagement, or generating leads. Our team of social media experts crafts compelling content, manages community interactions, and continuously optimizes your campaigns based on performance data. We stay ahead of platform algorithm changes and trending content formats to ensure your brand remains relevant and visible to your target audience.'
    },
    {
      id: 'campaign-management',
      title: 'Campaign Management',
      icon: '🎯',
      description: 'End-to-end campaign planning, execution, and optimization to achieve your marketing objectives and maximize ROI.',
      features: [
        'Campaign strategy and planning',
        'Creative concept development',
        'Cross-channel integration',
        'Performance tracking and optimization',
        'Post-campaign analysis'
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      color: 'from-emerald-500 to-teal-600',
      detailedDescription: 'Our Campaign Management service provides comprehensive support from initial concept to final analysis. We begin by understanding your business objectives and target audience, then develop creative campaigns that resonate with your customers. Our integrated approach ensures consistent messaging across all channels, while real-time tracking allows for agile optimization. After campaign completion, we deliver detailed performance analysis with actionable insights for future improvements. Our goal is to maximize your marketing ROI while building lasting connections with your audience.'
    },
    {
      id: 'ads-management',
      title: 'Ads Management',
      icon: '📈',
      description: 'Strategic planning, execution, and optimization of paid advertising campaigns across search, social, and display networks.',
      features: [
        'Audience targeting and segmentation',
        'Ad creative development',
        'Budget allocation and management',
        'A/B testing and optimization',
        'Performance reporting'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80',
      color: 'from-orange-500 to-red-600',
      detailedDescription: 'Our Ads Management service delivers high-performing paid campaigns across multiple platforms. We begin with in-depth audience analysis to identify your ideal customers, then create compelling ad creatives that drive action. Our experts optimize your ad spend through strategic budget allocation, continuous A/B testing, and real-time adjustments based on performance data. We provide transparent reporting with clear metrics on campaign performance, conversion rates, and return on ad spend. Our approach focuses on maximizing your advertising budget while achieving measurable business results.'
    },
    {
      id: 'brand-strategy',
      title: 'Brand Strategy',
      icon: '✨',
      description: 'Comprehensive brand development and positioning to differentiate your business and connect with your target audience.',
      features: [
        'Brand identity development',
        'Positioning and messaging',
        'Competitive analysis',
        'Brand guidelines creation',
        'Brand experience design'
      ],
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2036&q=80',
      color: 'from-purple-500 to-pink-600',
      detailedDescription: 'Our Brand Strategy service helps businesses establish a distinctive and memorable presence in the market. We conduct thorough research to understand your industry, competitors, and target audience, then develop a unique brand identity that resonates with your customers. Our comprehensive approach includes defining your brand&apos;s purpose, values, personality, and voice, as well as creating visual elements that communicate your brand essence. We deliver detailed brand guidelines to ensure consistency across all touchpoints, helping you build brand recognition and customer loyalty over time.'
    },
    {
      id: 'content-production',
      title: 'Content Production',
      icon: '🎥',
      description: 'High-quality content creation including video, photography, graphic design, and written content for all marketing channels.',
      features: [
        'Video production and editing',
        'Professional photography',
        'Graphic design and illustration',
        'Copywriting and content writing',
        'Animation and motion graphics'
      ],
      image: 'https://images.unsplash.com/photo-1574717024453-354056afd6fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      color: 'from-pink-500 to-rose-600',
      detailedDescription: 'Our Content Production service delivers premium creative assets that elevate your brand communication. Our team of specialists includes videographers, photographers, graphic designers, and content writers who collaborate to create cohesive, engaging content. We handle every aspect of production from concept development to final delivery, ensuring all content aligns with your brand guidelines and marketing objectives. Whether you need promotional videos, product photography, social media graphics, or blog content, we produce high-quality materials that capture attention and drive engagement across all your marketing channels.'
    },
    {
      id: 'web-development',
      title: 'Web Development',
      icon: '💻',
      description: 'Custom website design and development that combines stunning visuals with optimal functionality and user experience.',
      features: [
        'Responsive website design',
        'E-commerce development',
        'CMS implementation',
        'UI/UX optimization',
        'Website maintenance and support'
      ],
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80',
      color: 'from-blue-500 to-cyan-600',
      detailedDescription: 'Our Web Development service creates custom digital experiences that represent your brand and drive business results. We follow a user-centered design approach, focusing on intuitive navigation, fast loading times, and responsive layouts that work seamlessly across all devices. Our development team builds websites with clean, efficient code and integrates content management systems that make updates easy. For e-commerce clients, we implement secure payment gateways and optimize the checkout process to maximize conversions. All our websites are built with SEO best practices and include analytics setup to track performance.'
    }
  ];

  const [activeService, setActiveService] = useState<string | null>(services[0].id);
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  
  // Motion values for parallax effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [5, -5]);
  const rotateY = useTransform(mouseX, [-300, 300], [-5, 5]);
  const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 100, damping: 30 });

  // Handle mouse move for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  // Reset mouse position when mouse leaves
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const expandVariants = {
    collapsed: { height: 0, opacity: 0 },
    expanded: { 
      height: "auto", 
      opacity: 1,
      transition: {
        height: {
          duration: 0.4
        },
        opacity: {
          duration: 0.3,
          delay: 0.1
        }
      }
    }
  };

  // Add this new useEffect to handle initial scroll position
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty dependency array runs only on mount

  return (
    <section 
      ref={ref} 
      className="py-20 md:py-32 bg-black relative overflow-hidden md:px-24"
    >
      {/* Background elements - updated to match Hero style */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
        className="absolute -left-[20%] top-[10%] w-[300px] h-[300px] md:-left-1/4 md:w-[900px] md:h-[900px] rounded-full bg-[#1849C6] opacity-20 md:opacity-50 blur-[40px] md:blur-[120px]"
      />
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 3, ease: "easeInOut" }}
        className="absolute -right-[20%] bottom-[10%] w-[300px] h-[300px] md:-right-1/4 md:w-[900px] md:h-[900px] rounded-full bg-[#1849C6] opacity-20 md:opacity-50 blur-[40px] md:blur-[120px]"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-sm text-[#1849C6] mb-4 tracking-widest font-medium">/OUR EXPERTISE</h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            Comprehensive <span className="italic font-light">Creative Solutions</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
            We offer a wide range of creative services to help your brand stand out and connect with your audience.
          </p>
        </motion.div>

        {/* Services Cards Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer"
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 40px rgba(24,73,198,0.2)",
                transition: { duration: 0.3 }
              }}
              onClick={() => setActiveService(service.id)}
            >
              {/* Service image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1849C6]/20 to-[#1849C6]/10 mix-blend-overlay z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent h-1/3"></div>
                
                {/* Service icon overlay */}
                <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-2xl">
                  {service.icon}
                </div>
              </div>
              
              {/* Card content */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#1849C6] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2 group-hover:text-white transition-colors duration-300">
                  {service.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">{service.features.length} key features</span>
                  <div className="flex items-center gap-1 text-sm font-medium text-[#1849C6]">
                    View Details
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Add tab navigation */}
        <div className="container mx-auto px-4 relative z-10 mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`px-6 py-2 rounded-full backdrop-blur-sm border transition-all ${
                  activeService === service.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 border-transparent text-white'
                    : 'border-white/10 hover:border-white/20 text-gray-300'
                }`}
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Service Section */}
        <div ref={detailsRef} className="mt-16">
          <AnimatePresence mode="wait">
            {activeService && (
              <motion.div
                key={activeService}
                id={activeService}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10"
              >
                {services.filter(service => service.id === activeService).map(service => (
                  <div key={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image side */}
                    <div className="order-2 lg:order-1">
                      <div 
                        ref={containerRef}
                        className="relative rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(24,73,198,0.3)]"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      >
                        <motion.div
                          className="perspective-1000 transform-gpu"
                          style={{
                            rotateX: springRotateX,
                            rotateY: springRotateY,
                          }}
                        >
                          <img 
                            src={service.image} 
                            alt={service.title} 
                            className="w-full aspect-video object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-tr from-[#1849C6]/20 to-[#1849C6]/10" />
                        </motion.div>
                        
                        {/* Service icon overlay */}
                        <div className="absolute top-6 left-6 w-16 h-16 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-3xl">
                          {service.icon}
                        </div>
                      </div>
                    </div>
                    
                    {/* Content side */}
                    <div className="p-5 order-1 lg:order-2">
                      <div className="text-4xl mb-6">{service.icon} {service.title}</div>
                      <p className="text-gray-300 mb-8 leading-relaxed">{service.description}</p>
                      
                      <h4 className="text-xl font-semibold mb-4 text-white">What We Offer:</h4>
                      <ul className="space-y-3 mb-8">
                        {service.features.map((feature, index) => (
                          <motion.li 
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            className="flex items-start"
                          >
                            <span className="text-[#1849C6] mr-3">•</span>
                            <span className="text-gray-300">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                      
                      <motion.button 
                        onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                        className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {expandedService === service.id ? 'Show Less' : 'Learn More'}
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                          className={`transition-transform duration-300 ${expandedService === service.id ? 'rotate-180' : ''}`}
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                ))}
                
                {/* Expanded content */}
                <AnimatePresence>
                  {expandedService && (
                    <motion.div 
                      initial="collapsed"
                      animate="expanded"
                      exit="collapsed"
                      variants={expandVariants}
                      className="overflow-hidden"
                    >
                      {services.filter(service => service.id === expandedService).map(service => (
                        <div key={service.id} className="p-8 md:p-10 border-t border-white/10">
                          <h4 className="text-xl font-bold mb-4 text-[#1849C6]">
                            Detailed Overview
                          </h4>
                          <p className="text-gray-300 mb-6 leading-relaxed">
                            {service.detailedDescription}
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                              <h5 className="text-white font-semibold mb-3">Our Approach</h5>
                              <p className="text-gray-400 text-sm">
                                We take a data-driven, client-focused approach to every project, ensuring measurable results that align with your business goals.
                              </p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                              <h5 className="text-white font-semibold mb-3">Timeline</h5>
                              <p className="text-gray-400 text-sm">
                                Most projects begin showing results within 4-6 weeks, with comprehensive strategies typically implemented over 3-6 months.
                              </p>
                            </div>
                            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                              <h5 className="text-white font-semibold mb-3">Ideal For</h5>
                              <p className="text-gray-400 text-sm">
                                Businesses looking to establish a stronger market presence, increase brand awareness, and drive measurable growth.
                              </p>
                            </div>
                          </div>
                          
                          <div className="mt-8 text-center">
                            <motion.a
                              href="/contact"
                              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg transition-all duration-300"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              Request a Consultation
                            </motion.a>
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white">
            Ready to elevate your brand?
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Let&apos;s discuss how our services can help you achieve your business goals and create meaningful connections with your audience.
          </p>
          <motion.a
            href="/contact"
            className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesTabs; 