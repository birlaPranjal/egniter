"use client";
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const Process: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const processSteps: ProcessStep[] = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We start by understanding your business, goals, audience, and challenges through in-depth research and collaborative workshops.'
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Based on our findings, we develop a tailored strategy that aligns with your objectives and provides a roadmap for success.'
    },
    {
      number: '03',
      title: 'Creation',
      description: 'Our multidisciplinary team brings the strategy to life through innovative design, compelling content, and cutting-edge technology.'
    },
    {
      number: '04',
      title: 'Implementation',
      description: 'We meticulously execute the plan, ensuring every detail is perfect and the solution meets the highest standards of quality.'
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute left-0 top-1/4 w-full md:w-1/2 h-96 rounded-full bg-blue-600 opacity-20 blur-3xl animate-pulse-slow" />
      <div className="absolute right-0 bottom-1/4 w-full md:w-1/2 h-96 rounded-full bg-purple-600 opacity-20 blur-3xl animate-pulse-slow" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-sm text-[#1849C6] mb-4 tracking-widest font-medium"
          >
            /HOW WE WORK
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-8 text-white"
          >
            Our <span className="italic font-light">Creative Process</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-12"
          >
            We follow a structured yet flexible approach that ensures we deliver exceptional results while adapting to your unique needs and challenges.
          </motion.p>
        </div>

        {/* Mobile view - vertical steps */}
        <div className="md:hidden space-y-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={`mobile-${index}`}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.2 + index * 0.1,
              }}
              className="relative"
            >
              {/* Connector line */}
              {index < processSteps.length - 1 && (
                <div className="absolute top-24 left-10 w-1 h-16 bg-gradient-to-b from-blue-500 to-purple-500 opacity-50 z-0" />
              )}
              
              <div className="flex items-start">
                {/* Step number */}
                <motion.div 
                  className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-2xl font-bold mr-6 z-10 relative"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 opacity-50 blur-sm animate-pulse" />
                  {step.number}
                </motion.div>
                
                {/* Content */}
                <div className="flex-1">
                  <motion.div
                    className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 relative overflow-hidden group"
                    whileHover={{ 
                      y: -5,
                      boxShadow: "0px 10px 20px rgba(59, 130, 246, 0.2)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{step.description}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop view - custom path layout with fixed positioning */}
        <div className="hidden md:block relative">
          {/* Container with fixed width and center alignment to prevent overflow */}
          <div className="mx-auto relative" style={{ width: '90%', maxWidth: '1200px' }}>
            {/* Main path line */}
            <motion.div 
              className="absolute top-1/2 left-0 w-full h-2 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.5 }}
              style={{ top: '300px' }}
            />

            <div className="relative h-[600px]">
              {/* Hard-coded positions to ensure all points are visible */}
              <motion.div
                key="step-1"
                initial={{ opacity: 0, y: -50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
                className="absolute top-0 w-64 transform -translate-x-1/2"
                style={{ left: '0%' }}
              >
                <StepComponent 
                  step={processSteps[0]} 
                  position="top"
                  inView={inView} 
                  index={0} 
                />
              </motion.div>
              
              <motion.div
                key="step-2"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.45, type: "spring", stiffness: 100 }}
                className="absolute bottom-0 w-64 transform -translate-x-1/2"
                style={{ left: '25%' }}
              >
                <StepComponent 
                  step={processSteps[1]} 
                  position="bottom"
                  inView={inView} 
                  index={1} 
                />
              </motion.div>
              
              <motion.div
                key="step-3"
                initial={{ opacity: 0, y: -50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
                className="absolute top-0 w-64 transform -translate-x-1/2"
                style={{ left: '50%' }}
              >
                <StepComponent 
                  step={processSteps[2]} 
                  position="top"
                  inView={inView} 
                  index={2} 
                />
              </motion.div>
              
              <motion.div
                key="step-4"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.75, type: "spring", stiffness: 100 }}
                className="absolute bottom-0 w-64 transform -translate-x-1/2"
                style={{ left: '75%' }}
              >
                <StepComponent 
                  step={processSteps[3]} 
                  position="bottom"
                  inView={inView} 
                  index={3} 
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Define interface for StepComponent props
interface StepComponentProps {
  step: ProcessStep;
  position: 'top' | 'bottom';
  inView: boolean;
  index: number;
}

// Separated component for each step to make the main component cleaner
const StepComponent: React.FC<StepComponentProps> = ({ step, position, inView, index }) => {
  const isTop = position === 'top';
  
  return (
    <>
      {/* Vertical connector to main path */}
      <motion.div 
        className={`absolute ${isTop ? 'top-full' : 'bottom-full'} left-1/2 w-1 h-20 bg-gradient-to-b from-blue-500 to-purple-500 opacity-50`}
        initial={{ scaleY: 0 }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
      />
      
      {/* Step number */}
      <motion.div 
        className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-xl font-bold mb-4 mx-auto relative z-10"
        whileHover={{ scale: 1.1, rotate: [0, 5, -5, 0] }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 opacity-50 blur-sm animate-pulse" />
        {step.number}
      </motion.div>
      
      {/* Content card */}
      <motion.div
        className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 relative overflow-hidden group"
        whileHover={{ 
          y: isTop ? -5 : 5,
          scale: 1.05,
          boxShadow: "0px 10px 30px rgba(59, 130, 246, 0.2)"
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          {step.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
        <div className="absolute inset-0 border border-transparent group-hover:border-blue-500/20 transition-all duration-300 pointer-events-none rounded-xl" />
      </motion.div>
    </>
  );
};

export default Process;