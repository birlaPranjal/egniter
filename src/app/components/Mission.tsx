"use client";
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion'

const Mission: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const missions = [
    {
      title: "Our Mission",
      description: "To empower brands with creative solutions that drive meaningful connections and business growth. We blend strategy, design, and technology to craft experiences that resonate with audiences and deliver measurable results.",
      icon: "🚀"
    },
    {
      title: "Our Vision",
      description: "To be the leading creative force that transforms how brands connect with their audiences. We envision a world where creativity and strategy work in harmony to solve complex business challenges and create lasting impact.",
      icon: "👁️"
    },
    {
      title: "Our Values",
      description: "We believe in creativity, collaboration, innovation, integrity, and excellence. These core values guide our approach to every project and relationship, ensuring we deliver work that exceeds expectations and builds trust.",
      icon: "💎"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-black text-white relative overflow-hidden md:px-28">
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
            /MISSION & VALUES
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-8 text-white"
          >
            What <span className="italic font-light">Drives Us Forward</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {missions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-800"
            >
              <div className="text-4xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-white">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 p-8 bg-gray-900/30 backdrop-blur-sm rounded-3xl border border-gray-800"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Our Approach</h3>
            <p className="text-gray-300 leading-relaxed">
              At Egniter, we believe that creativity can solve almost any problem. Our approach combines strategic thinking, 
              creative excellence, and technical expertise to deliver solutions that not only look great but also drive 
              real business results. We work collaboratively with our clients, becoming an extension of their team to 
              ensure we understand their challenges and deliver solutions that exceed expectations.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission; 