"use client";
import {  useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion'

interface TeamMember {
  name: string;
  role: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

const Team: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const teamMembers: TeamMember[] = [
    {
      name: "Alex Johnson",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Sarah Williams",
      role: "Design Lead",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Michael Chen",
      role: "Technical Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Emily Rodriguez",
      role: "Strategy Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "David Kim",
      role: "Production Manager",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Olivia Martinez",
      role: "Client Relations",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "James Wilson",
      role: "Marketing Strategist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Sophia Lee",
      role: "Content Director",
      image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
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
            /OUR TEAM
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            Meet Our <span className="italic font-light">Creative Minds</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Our diverse team of passionate professionals brings together expertise across strategy, design, and technology to deliver exceptional creative solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 glitch-container">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full aspect-[3/4] object-cover glitch-image"
                />
                <div className="glitch-layers">
                  <div className="glitch-layer"></div>
                  <div className="glitch-layer"></div>
                  <div className="glitch-layer"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-center space-x-4">
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} className="text-white hover:text-[#1849C6] transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href={member.social.twitter} className="text-white hover:text-[#1849C6] transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      )}
                      {member.social.instagram && (
                        <a href={member.social.instagram} className="text-white hover:text-[#1849C6] transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_20%,black_80%)] opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-[#1849C6]">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 

<style jsx>{`
  @keyframes glitch-anim {
    0% {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      transform: translate(0);
    }
    10% {
      clip-path: polygon(0 10%, 100% 20%, 100% 80%, 0 90%);
      transform: translate(-10px, 5px);
    }
    20% {
      clip-path: polygon(0 20%, 100% 30%, 100% 70%, 0 80%);
      transform: translate(10px, -5px);
    }
    30% {
      clip-path: polygon(0 30%, 100% 40%, 100% 60%, 0 70%);
      transform: translate(-15px, 10px);
    }
    40% {
      clip-path: polygon(0 40%, 100% 50%, 100% 50%, 0 60%);
      transform: translate(15px, -10px);
    }
    50% {
      clip-path: polygon(0 50%, 100% 60%, 100% 40%, 0 50%);
      transform: translate(-20px, 15px);
    }
    60% {
      clip-path: polygon(0 60%, 100% 70%, 100% 30%, 0 40%);
      transform: translate(20px, -15px);
    }
    70% {
      clip-path: polygon(0 70%, 100% 80%, 100% 20%, 0 30%);
      transform: translate(-25px, 20px);
    }
    80% {
      clip-path: polygon(0 80%, 100% 90%, 100% 10%, 0 20%);
      transform: translate(25px, -20px);
    }
    90% {
      clip-path: polygon(0 90%, 100% 100%, 100% 0%, 0 10%);
      transform: translate(-30px, 25px);
    }
    100% {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
      transform: translate(0);
    }
  }

  .glitch-container {
    position: relative;
    overflow: hidden;
  }

  .glitch-image {
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
  }

  .glitch-layers {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .glitch-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    opacity: 0;
    mix-blend-mode: hard-light;
    animation: glitch-anim 0.5s infinite;
    filter: hue-rotate(90deg);
  }

  .glitch-layer:nth-child(1) {
    background: rgba(255, 0, 0, 0.5);
    animation-delay: 0.1s;
    transform: translate(-5px, 5px);
  }

  .glitch-layer:nth-child(2) {
    background: rgba(0, 255, 0, 0.5);
    animation-delay: 0.2s;
    transform: translate(5px, -5px);
  }

  .glitch-layer:nth-child(3) {
    background: rgba(0, 0, 255, 0.5);
    animation-delay: 0.3s;
    transform: translate(-10px, 10px);
  }

  .group:hover .glitch-image {
    filter: contrast(1.5) brightness(1.2) saturate(1.5);
    transform: scale(1.05);
  }

  .group:hover .glitch-layer {
    opacity: 1;
    animation-duration: 0.2s;
    filter: hue-rotate(180deg);
  }

  .group:hover .glitch-container {
    animation: shake 0.5s infinite;
  }

  @keyframes shake {
    0% { transform: translate(0); }
    10% { transform: translate(-2px, 2px); }
    20% { transform: translate(2px, -2px); }
    30% { transform: translate(-3px, 3px); }
    40% { transform: translate(3px, -3px); }
    50% { transform: translate(-4px, 4px); }
    60% { transform: translate(4px, -4px); }
    70% { transform: translate(-3px, 3px); }
    80% { transform: translate(3px, -3px); }
    90% { transform: translate(-2px, 2px); }
    100% { transform: translate(0); }
  }
`}</style> 