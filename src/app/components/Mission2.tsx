"use client";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const Mission: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-24 bg-black text-white relative overflow-hidden">
      {/* Blur Circle */}
      <div className="absolute left-0 top-1/4 w-[500px] h-[500px] rounded-full bg-[#1849C6] opacity-30 blur-[120px]" />
      
      <div className="container mx-auto px-4 md:px-24 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          {/* Left Content - Image */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-30 blur-lg"></div>
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80" 
                  alt="Our Team Collaborating" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20"></div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Content - Text */}
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-sm text-[#1849C6] mb-4 tracking-widest font-medium">
              /OUR MISSION
            </h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Igniting <span className="italic font-light">Creativity</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              At Egniter, we believe in the transformative power of creativity to solve complex problems and drive meaningful change. Our mission is to ignite creative potential in every project we undertake, pushing boundaries and challenging conventions.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Were dedicated to crafting experiences that not only captivate audiences but also deliver tangible results for our clients. Through strategic thinking, innovative design, and meticulous execution, we turn visions into reality.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-12">
              <div>
                <h4 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">100+</h4>
                <p className="text-gray-400 mt-2">Projects Completed</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">95%</h4>
                <p className="text-gray-400 mt-2">Client Satisfaction</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">12+</h4>
                <p className="text-gray-400 mt-2">Years Experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission; 