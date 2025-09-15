"use client";
import { motion, useScroll, useTransform, useTime } from 'framer-motion';

const Hero: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const time = useTime();
  const scale = useTransform(scrollYProgress, [0, 1], [1, window.innerWidth >= 768 ? 1.5 : 1]);
  const y = useTransform(time, (t: number) => Math.sin(t / 2000) * 20);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const width = useTransform(scrollYProgress, [0, 0.1], ['100%', '150%']);

  return (
    <section id="home" className="min-h-screen relative pt-20 md:pt-32">
      {/* Blur Circles */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: "easeInOut" }}
        className="absolute -left-[20%] top-[10%] w-[300px] h-[300px] md:-left-1/4 md:w-[900px] md:h-[900px] rounded-full bg-[#1849C6]/70 opacity-40 md:opacity-50 blur-[40px] md:blur-[120px]"
      />
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, duration: 3, ease: "easeInOut" }}
        className="absolute -right-[20%] bottom-[10%] w-[300px] h-[300px] md:-right-1/4 md:w-[900px] md:h-[900px] rounded-full bg-[#1849C6]/70 opacity-40 md:opacity-50 blur-[40px] md:blur-[120px]"
      />
      
      <div className="container mt-12 md:mt-5 lg:mt-0 mx-auto px-4 relative z-10 flex flex-col items-center justify-center">
        <motion.div 
          className="text-center max-w-4xl"
          style={{ y: textY }}
        >
          <motion.h1 
            initial={{ opacity: 0, y: 40, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="text-4xl md:text-8xl mb-2 mt-8 font-cursive bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
          >
            We believe <span className="italic font-light">creativity</span>
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 40, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            className="text-3xl md:text-6xl w-8/12 md:w-full mx-auto font-normal mb-12 md:mb-16 font-cursive bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent pb-5"
          >
            can solve almost <span className="italic font-light">any problem</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          style={window.innerWidth >= 768 ? { scale, y, width } : { scale: 1, y }}
          className="relative rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(24,73,198,0.5)] mx-auto w-full max-w-6xl"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 z-10" />
          
          {/* Video for medium and larger screens */}
          <video
            className="hidden md:block w-full aspect-video object-cover rounded-2xl mix-blend-luminosity"
            src="/hero-video.mp4"
            autoPlay
            muted
            loop
          />

          {/* Video for mobile devices */}
          <video
            className="md:hidden w-full aspect-video object-cover rounded-2xl mix-blend-luminosity pb-10"
            src="/hero-video.mp4"
            autoPlay
            muted
            loop
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

export default Hero;
