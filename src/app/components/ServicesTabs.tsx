"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ServiceTab {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
  image: string;
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
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
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
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 'ads-management',
      title: 'Ads Management',
      icon: '📈',
      description: 'Strategic planning and management of your advertising campaigns to reach your target audience and drive conversions.',
      features: [
        'Audience targeting and segmentation',
        'Ad creative development',
        'Budget allocation and optimization',
        'A/B testing and performance analysis',
        'Cross-platform ad management'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80'
    },
    {
      id: 'brand-launch',
      title: 'Brand Launch',
      icon: '🚀',
      description: 'Comprehensive brand launch strategies to introduce your brand to the market and make a lasting impression.',
      features: [
        'Brand positioning and messaging',
        'Launch strategy development',
        'Marketing collateral creation',
        'Media outreach and PR',
        'Launch event planning'
      ],
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 'content-production',
      title: 'Content Production',
      icon: '🎥',
      description: 'High-quality content creation to tell your brand story and engage your audience across all channels.',
      features: [
        'Video production and editing',
        'Photography and graphic design',
        'Animation and motion graphics',
        'Content strategy development',
        'Distribution planning'
      ],
      image: 'https://images.unsplash.com/photo-1574717024453-354056afd6fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 'cgi-videos',
      title: 'CGI Videos',
      icon: '🖼️',
      description: 'Cutting-edge computer-generated imagery to create stunning visual content that brings your ideas to life.',
      features: [
        '3D modeling and animation',
        'Visual effects and compositing',
        'Product visualization',
        'Architectural visualization',
        'Character animation'
      ],
      image: 'https://images.unsplash.com/photo-1626544827763-d516dce335e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 'brand-literature',
      title: 'Brand Literature',
      icon: '📚',
      description: 'Professional brand documentation and marketing collateral to communicate your brand message effectively.',
      features: [
        'Brand guidelines development',
        'Marketing collateral design',
        'Copywriting and content creation',
        'Print production management',
        'Digital publication design'
      ],
      image: 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    },
    {
      id: 'fpv-videos',
      title: 'FPV Videos',
      icon: '✈️',
      description: 'Immersive first-person view drone videos to capture dynamic and engaging aerial footage for your brand.',
      features: [
        'Drone cinematography',
        'Aerial mapping and surveying',
        'Event coverage',
        'Real estate and property showcases',
        'Adventure and sports filming'
      ],
      image: 'https://images.unsplash.com/photo-1506947411487-a56738267384?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
    }
  ];

  const [activeTab, setActiveTab] = useState<string>(services[0].id);

  const activeService = services.find(service => service.id === activeTab) || services[0];

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
            /OUR EXPERTISE
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-8 text-white"
          >
            Comprehensive <span className="italic font-light">Creative Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto mb-12"
          >
            We offer a wide range of creative services to help your brand stand out and connect with your audience.
          </motion.p>
        </div>

        {/* Tabs Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
                activeTab === service.id 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <span className="mr-2">{service.icon}</span>
              {service.title}
            </button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src={activeService.image} 
                alt={activeService.title} 
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="text-4xl mb-6">{activeService.icon}</div>
            <h3 className="text-3xl font-bold mb-4 text-white">{activeService.title}</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">{activeService.description}</p>
            
            <h4 className="text-xl font-semibold mb-4 text-white">What We Offer:</h4>
            <ul className="space-y-3">
              {activeService.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#1849C6] mr-3">•</span>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesTabs; 