"use client";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface ValueCard {
  title: string;
  description: string;
  color: string;
}

const BrandValues: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values: ValueCard[] = [
    {
      title: 'Authenticity',
      description: 'Building brands that are true to their core purpose and values, creating genuine connections with audiences.',
      color: 'from-blue-600 to-blue-400'
    },
    {
      title: 'Innovation',
      description: 'Pushing creative boundaries to develop unique brand experiences that stand out in crowded markets.',
      color: 'from-purple-600 to-purple-400'
    },
    {
      title: 'Clarity',
      description: 'Distilling complex ideas into clear, compelling brand messages that resonate with target audiences.',
      color: 'from-indigo-600 to-indigo-400'
    },
    {
      title: 'Consistency',
      description: 'Ensuring brand coherence across all touchpoints to build recognition, trust, and loyalty over time.',
      color: 'from-cyan-600 to-cyan-400'
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-black text-white relative overflow-hidden">
      {/* Blur Circles */}
      <div className="absolute left-1/4 top-0 w-[500px] h-[500px] rounded-full bg-[#1849C6] opacity-30 blur-[120px]" />
      
      <div className="container mx-auto px-4 md:px-24 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-sm text-[#1849C6] mb-4 tracking-widest font-medium">
              /BRAND FOUNDATIONS
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              The Power of <span className="italic font-light">Values</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Strong brands are built on a foundation of clear values that guide every decision and interaction. We help you define and express these values in ways that resonate with your audience and differentiate your brand.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              In todays market, consumers connect with brands that share their values and demonstrate authentic commitment to those principles. We work with you to identify, articulate, and activate your brand values across all touchpoints.
            </p>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
          </motion.div>
          
          {/* Right Content - Values Cards */}
          <motion.div 
            className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-800 hover:border-[#1849C6] transition-all duration-300"
              >
                <div className={`h-2 w-16 bg-gradient-to-r ${value.color} rounded-full mb-6`} />
                <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${value.color} bg-clip-text text-transparent`}>
                  {value.title}
                </h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandValues; 