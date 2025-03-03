"use client";
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  video: string;
  quote: string;
  rating: number;
}

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Motion values for parallax effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);
  const springRotateX = useSpring(rotateX, { stiffness: 100, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 100, damping: 30 });

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechVision Inc.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
      video: "https://player.vimeo.com/external/517090081.sd.mp4?s=ce49c8c6d8e28a89298ffb4c53a2e842f9b19d48&profile_id=165&oauth2_token_id=57447761",
      quote: "Working with Egniter transformed our brand presence. Their creative approach and strategic thinking helped us connect with our audience in ways we never thought possible.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CEO",
      company: "Innovate Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      video: "https://player.vimeo.com/external/449623063.sd.mp4?s=d5de8a0a5776837b74179d7ab5e776af2bc6a829&profile_id=165&oauth2_token_id=57447761",
      quote: "The team at Egniter exceeded our expectations at every turn. Their attention to detail and commitment to excellence made our product launch a tremendous success.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Brand Manager",
      company: "Global Retail",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      video: "https://player.vimeo.com/external/394521300.sd.mp4?s=8f9d47aedc46497d4a0a2a9fa56636b1b3e5bc52&profile_id=165&oauth2_token_id=57447761",
      quote: "Egniter's creative vision and strategic approach helped us redefine our brand identity. Their team's passion and expertise made the entire process seamless and enjoyable.",
      rating: 4
    },
    {
      id: 4,
      name: "David Park",
      position: "Creative Director",
      company: "Design Collective",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      video: "https://player.vimeo.com/external/370467553.sd.mp4?s=32ef1f185aadf594be7e5e2e8ae8739b95f60c1b&profile_id=165&oauth2_token_id=57447761",
      quote: "The level of creativity and innovation that Egniter brings to each project is unmatched. They don't just execute ideas, they elevate them to new heights.",
      rating: 5
    },
    {
      id: 5,
      name: "Olivia Martinez",
      position: "Product Manager",
      company: "NextGen Tech",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
      video: "https://player.vimeo.com/external/368320203.sd.mp4?s=38d67ac8c92f69e32b87e4d0a4feb622ec7a3c45&profile_id=165&oauth2_token_id=57447761",
      quote: "From concept to execution, Egniter delivered beyond our expectations. Their strategic approach and attention to detail resulted in a product that truly resonates with our users.",
      rating: 5
    }
  ];

  // Handle mouse move for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  // Reset mouse position when mouse leaves
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Calculate the current pair of testimonials
  const currentPair = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length]
  ];

  // Update navigation functions to move by 2
  const handlePrev = () => {
    setIsAutoplay(false);
    setDirection(-1);
    setCurrentIndex((prevIndex) => 
      (prevIndex - 2 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setIsAutoplay(false);
    setDirection(1);
    setCurrentIndex((prevIndex) => 
      (prevIndex + 2) % testimonials.length
    );
  };

  // Update the autoplay to move by 2
  useEffect(() => {
    const startAutoplay = () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
      
      if (isAutoplay && !isHovered) {
        autoplayTimerRef.current = setInterval(() => {
          setDirection(1);
          setCurrentIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
        }, 5000);
      }
    };

    startAutoplay();

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [isAutoplay, isHovered, testimonials.length]);

  // Variants for animations
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    })
  };

  // Render star rating
  const renderRating = (rating: number) => {
    return (
      <div className="flex space-x-1 mt-4">
        {[...Array(5)].map((_, i) => (
          <motion.svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={i < rating ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={i < rating ? "text-yellow-400" : "text-gray-400"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </motion.svg>
        ))}
      </div>
    );
  };

  return (
    <section 
      ref={ref} 
      className="py-20 md:py-32 bg-black relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black opacity-80 z-10"></div>
        <video
          className="w-full h-full object-cover opacity-20"
          src={testimonials[currentIndex].video}
          autoPlay
          muted
          loop
        />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-sm text-[#1849C6] mb-4 tracking-widest font-medium">/CLIENT FEEDBACK</h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
            What Our Clients <span className="italic font-light">Are Saying</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
            Dont just take our word for it. Hear what our clients have to say about working with us.
          </p>
        </motion.div>

        <div 
          ref={containerRef}
          className="max-w-7xl mx-auto relative"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            className="perspective-1000 transform-gpu"
            style={{
              rotateX: springRotateX,
              rotateY: springRotateY,
            }}
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {currentPair.map((testimonial) => (
                  <div 
                    key={testimonial.id}
                    className="bg-gray-900/80 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-800 shadow-2xl"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2">
                      {/* Image side */}
                      <div className="relative h-64 md:h-auto overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 mix-blend-overlay z-10"></div>
                        <motion.img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          initial={{ scale: 1.2 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 1.5 }}
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent h-1/3"></div>
                      </div>
                      
                      {/* Content side */}
                      <div className="p-8 md:p-10 flex flex-col justify-center">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3, duration: 0.8 }}
                        >
                          <svg 
                            className="w-12 h-12 text-blue-500 mb-6 opacity-50"
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="currentColor"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                          
                          <motion.p 
                            className="text-lg md:text-xl text-gray-300 mb-6 italic"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                          >
                            {testimonial.quote}
                          </motion.p>
                          
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                          >
                            <h3 className="text-xl font-bold text-white">
                              {testimonial.name}
                            </h3>
                            <p className="text-blue-400">
                              {testimonial.position}, {testimonial.company}
                            </p>
                            
                            {renderRating(testimonial.rating)}
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Navigation buttons */}
          <div className="flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 px-4 z-30">
            <motion.button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </motion.button>
            
            <motion.button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center border border-white/10 hover:bg-white/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Update pagination to show pairs */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
            <motion.button
              key={index}
              className={`w-3 h-3 rounded-full ${index === Math.floor(currentIndex / 2) ? 'bg-blue-500' : 'bg-gray-600'}`}
              onClick={() => {
                setDirection(index > Math.floor(currentIndex / 2) ? 1 : -1);
                setCurrentIndex(index * 2);
                setIsAutoplay(false);
              }}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 