"use client";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface ExpertiseArea {
  title: string;
  description: string;
  icon: string;
  color: string;
}

const Expertise: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const expertiseAreas: ExpertiseArea[] = [
    {
      title: "Brand Strategy",
      description: "We develop comprehensive brand strategies that build meaningful connections with your audience and drive long-term business growth.",
      icon: "/icons/strategy.svg",
      color: "from-blue-600 to-blue-400"
    },
    {
      title: "Digital Design",
      description: "Our digital design solutions create intuitive, engaging user experiences that captivate audiences and drive conversions.",
      icon: "/icons/design.svg",
      color: "from-purple-600 to-purple-400"
    },
    {
      title: "Web Development",
      description: "We build responsive, high-performance websites and applications that deliver exceptional user experiences across all devices.",
      icon: "/icons/development.svg",
      color: "from-indigo-600 to-indigo-400"
    },
    {
      title: "Content Creation",
      description: "Our content strategies and production capabilities help brands tell compelling stories that resonate with their target audiences.",
      icon: "/icons/content.svg",
      color: "from-cyan-600 to-cyan-400"
    },
    {
      title: "Social Media",
      description: "We create and execute social media strategies that build community, drive engagement, and increase brand visibility.",
      icon: "/icons/social.svg",
      color: "from-teal-600 to-teal-400"
    },
    {
      title: "Analytics & Optimization",
      description: "Our data-driven approach ensures continuous improvement and maximum ROI for all digital marketing initiatives.",
      icon: "/icons/analytics.svg",
      color: "from-green-600 to-green-400"
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
            /OUR EXPERTISE
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            What We <span className="italic font-light">Excel At</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-12"
          >
            Our multidisciplinary team brings together expertise across various domains to deliver comprehensive solutions for your business challenges.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-800 hover:border-[#1849C6] transition-all duration-300 group"
            >
              <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${area.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <img src={area.icon} alt={area.title} className="w-8 h-8" />
              </div>
              <h3 className={`text-xl font-bold mb-4 text-white group-hover:bg-gradient-to-r ${area.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>{area.title}</h3>
              <p className="text-gray-400">{area.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise; 