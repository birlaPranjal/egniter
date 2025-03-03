"use client";
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
}

const BrandTestimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials: Testimonial[] = [
    {
      quote: "Working with this team transformed our brand from just another player in the market to a distinctive voice that resonates with our audience. Their strategic approach to brand building delivered measurable results for our business.",
      author: "Sarah Johnson",
      position: "Chief Marketing Officer",
      company: "TechVision Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    {
      quote: "The brand strategy they developed for us perfectly captured our company's essence while positioning us for future growth. Their ability to translate complex ideas into compelling brand narratives is unmatched.",
      author: "Michael Chen",
      position: "Founder & CEO",
      company: "Innovate Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    },
    {
      quote: "Our rebrand was a critical turning point for our company. The team's holistic approach ensured every aspect of our brand identity was aligned with our values and resonated with our customers. The results exceeded our expectations.",
      author: "Emma Rodriguez",
      position: "Brand Director",
      company: "Global Retail Group",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-24 bg-black text-white relative overflow-hidden">
      {/* Blur Circle */}
      <div className="absolute right-1/4 bottom-0 w-[500px] h-[500px] rounded-full bg-[#1849C6] opacity-30 blur-[120px]" />
      
      <div className="container mx-auto px-4 md:px-24 relative z-10">
        <div className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-sm text-[#1849C6] mb-4 tracking-widest font-medium"
          >
            /CLIENT SUCCESS STORIES
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            Brand <span className="italic font-light">Transformations</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-12"
          >
            Hear from our clients about how our strategic brand building approach has transformed their businesses and driven meaningful results.
          </motion.p>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-800 p-8 md:p-12 max-w-4xl mx-auto"
          >
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 md:top-10 md:left-10 text-6xl text-[#1849C6] opacity-30">
              
            </div>
            
            {/* Testimonial Content */}
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Author Image */}
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-[#1849C6]/30">
                <img 
                  src={testimonials[activeIndex].image} 
                  alt={testimonials[activeIndex].author}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Quote and Author */}
              <div className="flex-1">
                <p className="text-xl md:text-2xl text-gray-300 italic mb-8 relative">
                  {testimonials[activeIndex].quote}
                </p>
                <div>
                  <h4 className="text-xl font-bold text-white">{testimonials[activeIndex].author}</h4>
                  <p className="text-[#1849C6]">{testimonials[activeIndex].position}</p>
                  <p className="text-gray-400">{testimonials[activeIndex].company}</p>
                </div>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex justify-center mt-8 gap-4">
              <button 
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-gray-800 hover:bg-[#1849C6] transition-colors duration-300 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-gray-800 hover:bg-[#1849C6] transition-colors duration-300 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Indicators */}
            <div className="flex justify-center mt-4 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'bg-[#1849C6] w-6' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandTestimonials; 