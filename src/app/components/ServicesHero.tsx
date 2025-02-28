"use client";
import { motion, useScroll, useTransform } from 'framer-motion';

const ServicesHero: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  return (
    <section className="min-h-[70vh] relative overflow-hidden pt-20 md:pt-32 bg-black">
      {/* Blur Circles */}
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
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center h-full">
        <motion.div 
          className="text-center max-w-4xl"
          style={{ y: textY }}
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-sm text-[#1849C6] mb-4 tracking-widest font-medium"
          >
            /OUR SERVICES
          </motion.h3>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="text-5xl md:text-7xl mb-6 font-bold text-white"
          >
            Creative <span className="italic font-light">Solutions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            className="text-xl md:text-2xl text-gray-300 mb-12"
          >
            Comprehensive creative services tailored to elevate your brand
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="relative rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(24,73,198,0.5)] mx-auto w-full max-w-6xl mt-8"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 z-10" />
          
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Creative Services"
            className="w-full aspect-video object-cover rounded-2xl"
          />

          <motion.div 
            className="absolute inset-0 border-4 border-white/20 rounded-2xl"
            animate={{
              borderColor: ['rgba(255,255,255,0.2)', 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.2)']
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHero; 