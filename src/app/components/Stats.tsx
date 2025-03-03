"use client";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface Stat {
  value: number;
  label: string;
  suffix: string;
}

const Stats: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats: Stat[] = [
    {
      value: 250,
      label: "Projects Completed",
      suffix: "+"
    },
    {
      value: 15,
      label: "Years Experience",
      suffix: "+"
    },
    {
      value: 98,
      label: "Client Satisfaction",
      suffix: "%"
    },
    {
      value: 4,
      label: "Team Members",
      suffix: "+"
    }
  ];


  return (
    <section ref={ref} className="py-24 bg-black text-white relative overflow-hidden">
      {/* Blur Circle */}
      <div className="absolute right-1/4 top-1/2 w-[500px] h-[500px] rounded-full bg-[#1849C6] opacity-30 blur-[120px]" />
      
      <div className="container mx-auto px-4 md:px-24 relative z-10">
        <div className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-sm text-[#1849C6] mb-4 tracking-widest font-medium"
          >
            /BY THE NUMBERS
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            Our <span className="italic font-light">Impact</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-12"
          >
            We&apos;re proud of what we&apos;ve accomplished with our clients. Here&apos;s a snapshot of our journey and achievements
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-800 hover:border-[#1849C6] transition-all duration-300 text-center"
            >
              <div className="relative mb-4 inline-block">
                <div className="absolute -inset-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-lg"></div>
                <h3 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent relative">
                  {stat.value}{stat.suffix}
                </h3>
              </div>
              <p className="text-gray-400 text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Additional Achievement Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-800">
            <h4 className="text-xl font-bold mb-4 text-white">Award-Winning</h4>
            <p className="text-gray-400">Recognized with multiple industry awards for our innovative design and effective strategies.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-800">
            <h4 className="text-xl font-bold mb-4 text-white">Global Reach</h4>
            <p className="text-gray-400">Working with clients across 20+ countries, delivering solutions that transcend cultural boundaries.</p>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-800">
            <h4 className="text-xl font-bold mb-4 text-white">Industry Expertise</h4>
            <p className="text-gray-400">Specialized experience across technology, healthcare, finance, retail, and entertainment sectors.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Stats; 