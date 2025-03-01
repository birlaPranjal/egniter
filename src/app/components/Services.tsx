"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef(null);
  const servicesRef = useRef(null);
  const containerRef = useRef(null);
  const resizeTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!servicesRef.current || !sectionRef.current) return;
    const servicesElement = servicesRef.current as HTMLElement;
    if (!servicesElement) return;

    // Calculate total scroll width needed with padding
    const totalWidth = servicesElement.scrollWidth;
    const viewportWidth = window.innerWidth;
    const scrollDistance = totalWidth - viewportWidth + 100;

    const initAnimations = () => {
      const ctx = gsap.context(() => {
        // Main timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=200%",
            scrub: 0.5,
            pin: true,
            anticipatePin: 1
          }
        });

        // Horizontal scroll animation
        tl.to(servicesRef.current, {
          x: -scrollDistance,
          ease: "power1.inOut"
        });

        // Parallax background animation
        gsap.to(".blur-circle-1", {
          xPercent: 15,
          yPercent: -10,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=200%",
            scrub: 1.5
          }
        });

        gsap.to(".blur-circle-2", {
          xPercent: -15,
          yPercent: 10,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=200%",
            scrub: 1.8
          }
        });
      });

      return ctx;
    };

    // Initialize animations
    let ctx = initAnimations();

    // Window resize handler
    const handleResize = () => {
      if (ctx) ctx.revert();
      
      if (resizeTimerRef.current) {
        clearTimeout(resizeTimerRef.current);
      }
      
      resizeTimerRef.current = setTimeout(() => {
        ctx = initAnimations();
      }, 250);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      if (ctx) ctx.revert();
      window.removeEventListener('resize', handleResize);
      if (resizeTimerRef.current !== null) {
        clearTimeout(resizeTimerRef.current);
      }
    };
  }, []);

  const cardClasses = `
    service-card p-6 md:p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 
    hover:border-white/20 transition-all min-w-[280px] md:min-w-[350px] group relative 
    overflow-hidden h-[400px] md:h-[450px] flex flex-col justify-between
  `;

  const hoverEffectClasses = `
    absolute inset-0 bg-gradient-to-br from-[#1849C6]/20 to-[#1849C6]/10 
    opacity-0 group-hover:opacity-100 transition-opacity duration-500
  `;

  const floatingEffectClasses = `
    absolute inset-0 rounded-3xl border border-white/10 
    group-hover:border-white/20 transition-all duration-500
  `;

  const services = [
    { 
      icon: '📱', 
      title: 'Social Media Marketing', 
      description: 'Crafting impactful social strategies',
      details: [
        'Content strategy development',
        'Platform-specific campaigns',
        'Community engagement',
        'Analytics & reporting'
      ]
    },
    { 
      icon: '🎯', 
      title: 'Campaign Management', 
      description: 'End-to-end campaign execution',
      details: [
        'Concept development',
        'Cross-channel integration',
        'Performance tracking',
        'ROI optimization'
      ]
    },
    { 
      icon: '📈', 
      title: 'Ads Management', 
      description: 'Optimized ad performance',
      details: [
        'Target audience analysis',
        'Ad creative development',
        'Budget optimization',
        'A/B testing'
      ]
    },
    { 
      icon: '🚀', 
      title: 'Brand Launch', 
      description: 'Memorable brand introductions',
      details: [
        'Brand positioning',
        'Launch strategy',
        'Media outreach',
        'Post-launch analysis'
      ]
    },
    { 
      icon: '🎥', 
      title: 'Content Production', 
      description: 'High-quality creative content',
      details: [
        'Video production',
        'Photography',
        'Graphic design',
        'Content distribution'
      ]
    },
    { 
      icon: '🖼️', 
      title: 'CGI Videos', 
      description: 'Stunning visual effects',
      details: [
        '3D modeling',
        'Animation',
        'Visual effects',
        'Post-production'
      ]
    },
    { 
      icon: '📚', 
      title: 'Brand Literature', 
      description: 'Compelling brand narratives',
      details: [
        'Brand guidelines',
        'Case studies',
        'Whitepapers',
        'Content strategy'
      ]
    },
    { 
      icon: '✈️', 
      title: 'FPV Videos', 
      description: 'Immersive aerial experiences',
      details: [
        'Drone cinematography',
        'Aerial mapping',
        '360° videos',
        'Virtual tours'
      ]
    }
  ];

  return (
    <section ref={sectionRef} id="services" className="relative overflow-hidden bg-black w-full">
      <div ref={containerRef} className="h-[100vh] w-full">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden w-full">
          <div className="w-full relative z-10">
            {/* Blur Circles */}
            <div className="blur-circle-1 absolute top-0 -right-1/4 w-[900px] h-[900px] rounded-full bg-[#1849C6] opacity-40 blur-[150px]" />
            <div className="blur-circle-2 absolute -left-1/4 bottom-0 w-[700px] h-[700px] rounded-full bg-[#1849C6] opacity-30 blur-[120px]" />

            {/* Heading Section */}
            <div className="text-center mb-16 px-4 w-full">
              <h3 className="text-sm text-[#1849C6] mb-4 tracking-widest font-medium">/OUR SERVICES</h3>
              <h2 className="text-5xl md:text-7xl mb-8 text-white font-bold">
                Full-Service <span className="italic font-light">Creative Solutions</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
                From concept to execution, we deliver comprehensive creative services that elevate brands and drive results.
              </p>
            </div>

            {/* Horizontal Scroll Section */}
            <div className="overflow-hidden w-full px-4 md:px-0">
              <div ref={servicesRef} className="flex gap-4 md:gap-8">
                <div className="min-w-[10vw] md:min-w-[25vw] h-4"></div>
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={cardClasses}
                    onMouseEnter={(e) => {
                      gsap.to(e.currentTarget, {
                        y: -10,
                        scale: 1.02,
                        duration: 0.3,
                        ease: "power2.out"
                      });
                    }}
                    onMouseLeave={(e) => {
                      gsap.to(e.currentTarget, {
                        y: 0,
                        scale: 1,
                        duration: 0.3,
                        ease: "power2.out"
                      });
                    }}
                  >
                    {/* Hover effect layer */}
                    <div className={hoverEffectClasses} />
                    
                    {/* Floating effect layer */}
                    <div className={floatingEffectClasses} />
                    
                    {/* Icon with animation */}
                    <div className="text-4xl md:text-5xl mb-4 md:mb-6 group-hover:-translate-y-2 transition-transform duration-300 relative z-10">
                      {service.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-white group-hover:text-[#1849C6] transition-colors duration-300 relative z-10">
                          {service.title}
                        </h3>
                        <p className="text-base md:text-lg text-gray-400 mb-4 md:mb-6 group-hover:text-white transition-colors duration-300 relative z-10">
                          {service.description}
                        </p>
                      </div>
                      
                      <ul className="space-y-1 md:space-y-2 relative z-10">
                        {service.details.map((detail, i) => (
                          <li 
                            key={i} 
                            className="text-sm md:text-base text-gray-400 group-hover:text-white transition-colors duration-300 flex items-start"
                          >
                            <span className="mr-2">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#1849C6]/30 to-[#1849C6]/10 blur-sm"></div>
                    </div>
                  </div>
                ))}
                <div className="min-w-[10vw] md:min-w-[25vw] h-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}