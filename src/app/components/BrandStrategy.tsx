"use client";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface StrategyCard {
  icon: string;
  title: string;
  description: string;
}

const BrandStrategy: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const strategies: StrategyCard[] = [
    {
      icon: '/icons/research.svg',
      title: 'Brand Research',
      description: 'Comprehensive market analysis, competitor research, and audience insights to position your brand effectively in the marketplace.'
    },
    {
      icon: '/icons/identity.svg',
      title: 'Brand Identity',
      description: 'Development of distinctive visual and verbal elements that communicate your brands essence, values, and personality.'
    },
    {
      icon: '/icons/positioning.svg',
      title: 'Brand Positioning',
      description: 'Strategic positioning that differentiates your brand and creates a unique space in the minds of your target audience.'
    },
    {
      icon: '/icons/messaging.svg',
      title: 'Brand Messaging',
      description: 'Crafting compelling narratives and communication frameworks that resonate with your audience and drive engagement.'
    },
    {
      icon: '/icons/experience.svg',
      title: 'Brand Experience',
      description: 'Creating cohesive and memorable interactions across all touchpoints to build strong emotional connections with customers.'
    },
    {
      icon: '/icons/growth.svg',
      title: 'Brand Growth',
      description: 'Scalable strategies to expand your brands reach, increase market share, and drive sustainable business growth.'
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-black text-white relative overflow-hidden">
      {/* Blur Circle */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full bg-[#1849C6] opacity-30 blur-[120px]" />
      
      <div className="container mx-auto px-4 md:px-24 relative z-10">
        <div className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-sm text-[#1849C6] mb-4 tracking-widest font-medium"
          >
            /STRATEGIC APPROACH
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            Brand <span className="italic font-light">Strategy</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-12"
          >
            We develop comprehensive brand strategies that build meaningful connections with your audience and drive long-term business growth.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {strategies.map((strategy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-800 hover:border-[#1849C6] transition-all duration-300 group"
            >
              <div className="w-16 h-16 mb-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img src={strategy.icon} alt={strategy.title} className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{strategy.title}</h3>
              <p className="text-gray-400">{strategy.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandStrategy; 