"use client";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const BrandProcess: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const processSteps: ProcessStep[] = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We dive deep into understanding your business, audience, market, and competitors to uncover insights that inform our strategy.'
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Based on our research, we develop a comprehensive brand strategy that defines your positioning, messaging, and visual direction.'
    },
    {
      number: '03',
      title: 'Identity',
      description: 'We create a distinctive visual identity system including logo, color palette, typography, and design elements that express your brand.'
    },
    {
      number: '04',
      title: 'Expression',
      description: 'We extend your brand across all touchpoints, from digital platforms to physical spaces, ensuring consistency and impact.'
    },
    {
      number: '05',
      title: 'Activation',
      description: 'We launch your brand with strategic campaigns designed to generate awareness, engagement, and connection with your audience.'
    },
    {
      number: '06',
      title: 'Evolution',
      description: 'We continuously monitor, measure, and refine your brand strategy to ensure it remains relevant and effective as your business grows.'
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-black text-white relative overflow-hidden">
      {/* Blur Circle */}
      <div className="absolute left-0 bottom-1/4 w-[500px] h-[500px] rounded-full bg-[#1849C6] opacity-30 blur-[120px]" />
      
      <div className="container mx-auto px-4 md:px-24 relative z-10">
        <div className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-sm text-[#1849C6] mb-4 tracking-widest font-medium"
          >
            /OUR METHODOLOGY
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            Brand Building <span className="italic font-light">Process</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-12"
          >
            Our systematic approach to brand building ensures we create brands that are authentic, distinctive, and strategically aligned with business objectives.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block" />
          
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center mb-16 last:mb-0 relative`}
            >
              {/* Step Number */}
              <motion.div 
                className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold mb-6 md:mb-0 z-20"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {step.number}
              </motion.div>
              
              {/* Content */}
              <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:ml-12' : 'md:mr-12'} bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-800`}>
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandProcess; 