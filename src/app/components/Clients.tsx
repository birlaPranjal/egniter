"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Clients() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const clients = [
    "https://cdn.prod.website-files.com/6720d903d656af8536211152/6720fd32c0049ef43226edbe_colorkit%20(3).svg",
    "https://cdn.prod.website-files.com/6720d903d656af8536211152/6720fd3165972b5afd84a579_colorkit%20(2)%20copy.svg",
    "https://cdn.prod.website-files.com/6720d903d656af8536211152/6720fd31602296efe5935ced_Sennheiser-Logo.wine%20(1).svg",
    "https://cdn.prod.website-files.com/6720d903d656af8536211152/6720fd314256fd3fcde9f548_Hilton.svg",
    "https://cdn.prod.website-files.com/6720d903d656af8536211152/6720fd31d4ea96e33f15c03f_colorkit.svg",
    "https://cdn.prod.website-files.com/6720d903d656af8536211152/6720fd326565c023627d2a31_N26.svg",
  ];

  return (
    <section
      ref={ref}
      id="clients"
      className="py-32 relative overflow-hidden  text-white"
    >
      {/* Blur Circles */}
      <div className="absolute -left-1/4 top-1/3 w-[500px] h-[500px] rounded-full bg-[#1849C6] opacity-50 blur-[120px]" />
      <div className="absolute right-1/3 top-[150px] bottom-0 w-[500px] h-[500px] rounded-full bg-[#1849C6] opacity-50 blur-[120px]" />

      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h3 className="text-sm text-[#1849C6] mb-4">/CLIENTS</h3>
          <h2 className="text-5xl md:text-8xl mb-12 font-bold">Our <span className='italic font-thin'>Clients</span></h2>
        </div>

        <hr className="mb-6 mx-auto bg-white opacity-50" />
        <div className="grid grid-cols-3 gap-8 mb-12">
          {clients.slice(0, 3).map((logo, index) => (
            <div key={index} className="flex flex-col items-center relative">
              {index !== 0 && (
                <div className="absolute inset-y-0 left-0 w-px h-full bg-white opacity-75" style={{ marginLeft: '-1px', height: 'calc(100% + 20px)' }} />
              )}
              <motion.img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="h-24 object-contain mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
              />
            </div>
          ))}
        </div>
        <hr className="mb-6 mx-auto border-gray-300 w-full" />
        <div className="grid grid-cols-3 gap-8">
          {clients.slice(3, 6).map((logo, index) => (
            <div key={index} className="flex flex-col items-center relative">
              {index !== 0 && (
                <div className="absolute inset-y-0 left-0 w-px h-full bg-white opacity-75" style={{ marginLeft: '-1px', height: 'calc(100% + 20px)' }} />
              )}
              <motion.img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="h-24 object-contain mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
