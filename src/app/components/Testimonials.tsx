"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  video: string;
  quote: string;
}

const Testimonials: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechVision Inc.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
      video: "https://player.vimeo.com/external/517090081.sd.mp4?s=ce49c8c6d8e28a89298ffb4c53a2e842f9b19d48&profile_id=165&oauth2_token_id=57447761",
      quote: "Working with Egniter transformed our brand presence. Their creative approach and strategic thinking helped us connect with our audience in ways we never thought possible."
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "CEO",
      company: "Innovate Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      video: "https://player.vimeo.com/external/449623063.sd.mp4?s=d5de8a0a5776837b74179d7ab5e776af2bc6a829&profile_id=165&oauth2_token_id=57447761",
      quote: "The team at Egniter exceeded our expectations at every turn. Their attention to detail and commitment to excellence made our product launch a tremendous success."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Brand Manager",
      company: "Global Retail",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      video: "https://player.vimeo.com/external/394521300.sd.mp4?s=8f9d47aedc46497d4a0a2a9fa56636b1b3e5bc52&profile_id=165&oauth2_token_id=57447761",
      quote: "Egniter's creative vision and strategic approach helped us redefine our brand identity. Their team's passion and expertise made the entire process seamless and enjoyable."
    }
  ];

  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);
  const [videoRefs, setVideoRefs] = useState<(HTMLVideoElement | null)[]>([]);

  // Initialize video refs
  useEffect(() => {
    setVideoRefs(Array(testimonials.length).fill(null));
  }, [testimonials.length]);

  // Handle testimonial change
  useEffect(() => {
    // Pause all videos
    videoRefs.forEach((ref, index) => {
      if (ref && index !== activeTestimonial) {
        ref.pause();
      }
    });

    // Play active video
    const activeVideo = videoRefs[activeTestimonial];
    if (activeVideo) {
      activeVideo.currentTime = 0;
      activeVideo.play().catch(e => console.log("Video play error:", e));
    }
  }, [activeTestimonial, videoRefs]);

  return (
    <section ref={ref} className="py-24 bg-black text-white relative overflow-hidden">
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
            /CLIENT TESTIMONIALS
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            What Our <span className="italic font-light">Clients Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-12"
          >
            Hear directly from our clients about their experience working with us and the results we&apos;ve delivered.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(24,73,198,0.3)]">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className={`${index === activeTestimonial ? 'block' : 'hidden'}`}
                >
                  <video
                    ref={(el: HTMLVideoElement | null) => { videoRefs[index] = el; }}
                    src={testimonial.video}
                    className="w-full aspect-video object-cover"
                    muted
                    playsInline
                    loop
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full object-cover border-2 border-white"
                      />
                      <div className="ml-4">
                        <h4 className="text-white font-medium">{testimonial.name}</h4>
                        <p className="text-[#1849C6] text-sm">{testimonial.position}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Testimonial Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ 
                    opacity: index === activeTestimonial ? 1 : 0,
                    x: index === activeTestimonial ? 0 : 20
                  }}
                  transition={{ duration: 0.5 }}
                  className={`${index === activeTestimonial ? 'block' : 'hidden'}`}
                >
                  <svg className="text-[#1849C6] w-12 h-12 mb-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed italic">&quot;{testimonial.quote}&quot;</p>
                </motion.div>
              ))}

              {/* Navigation Dots */}
              <div className="flex space-x-3 mt-8">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.id}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeTestimonial 
                        ? 'bg-[#1849C6] w-12' 
                        : 'bg-gray-500 hover:bg-gray-400'
                    }`}
                    aria-label={`View testimonial from ${testimonial.name}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 