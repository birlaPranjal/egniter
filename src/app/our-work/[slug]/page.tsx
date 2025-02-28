"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  banner: string;
  clientDescription: string;
  brief: string;
  execution: string;
  results: string[];
  media: {
    type: 'image' | 'video';
    src: string;
    caption?: string;
  }[];
}

// Mock data - in a real app, this would come from a database or API
const caseStudiesData: Record<string, CaseStudy> = {
  'techvision-brand-transformation': {
    id: '1',
    title: 'Brand Transformation',
    client: 'TechVision Inc.',
    category: 'branding',
    banner: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80',
    clientDescription: 'TechVision Inc. is a leading technology company specializing in AI-driven solutions for enterprise clients. With a decade of experience in the industry, they were looking to reposition their brand to reflect their innovative approach and cutting-edge technology.',
    brief: 'TechVision approached us with the challenge of refreshing their brand identity to better align with their position as an industry leader in AI technology. They needed a comprehensive brand transformation that would communicate their forward-thinking approach while maintaining recognition among their established client base.',
    execution: 'We began with an extensive discovery phase, conducting stakeholder interviews, market research, and competitive analysis. This informed our strategy for the brand refresh, which included a new visual identity, messaging framework, and brand guidelines. We developed a modern, dynamic logo that incorporated elements of data visualization, paired with a sophisticated color palette that conveyed trust and innovation. The new brand system was applied across all touchpoints, from digital platforms to marketing materials and office environments.',
    results: [
      'Increased brand recognition by 45% among target audience',
      '32% improvement in website engagement metrics',
      'Successfully repositioned the company as a premium AI solutions provider',
      'Positive feedback from 92% of existing clients on the new brand direction'
    ],
    media: [
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        caption: 'Brand guidelines showcasing the new visual identity'
      },
      {
        type: 'image',
        src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
        caption: 'Office environment featuring new brand elements'
      },
      {
        type: 'video',
        src: 'https://player.vimeo.com/external/517090081.sd.mp4?s=ce49c8c6d8e28a89298ffb4c53a2e842f9b19d48&profile_id=165&oauth2_token_id=57447761',
        caption: 'Brand launch video introducing the new identity'
      }
    ]
  },
  // Additional case studies would be added here
};

const CaseStudyPage = () => {
  const params = useParams();
  const slug = params?.slug as string;
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, this would be an API call
    if (slug && caseStudiesData[slug]) {
      setCaseStudy(caseStudiesData[slug]);
    }
    setLoading(false);
  }, [slug]);

  if (loading) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#1849C6]"></div>
      </div>
    );
  }

  if (!caseStudy) {
    return (
      <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
        <Navbar />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl font-bold mb-6">Case Study Not Found</h1>
          <p className="text-gray-400 mb-8">The case study you&apos;re looking for doesn&apos;t exist or has been moved.</p>
          <Link href="/our-work" className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-lg transition-all duration-300">
            Back to Our Work
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-black text-white">
      <Navbar />
      
      {/* Banner */}
      <div className="relative h-[50vh] md:h-[70vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black z-10" />
        <img 
          src={caseStudy.banner} 
          alt={caseStudy.title} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 relative z-20 h-full flex flex-col justify-end pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-[#1849C6] text-white text-sm rounded-full mb-4">
              {caseStudy.category.charAt(0).toUpperCase() + caseStudy.category.slice(1)}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{caseStudy.title}</h1>
            <p className="text-xl text-gray-300">Client: {caseStudy.client}</p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-24">
        {/* About the Client */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">About the Client</h2>
          <p className="text-lg text-gray-300 leading-relaxed">{caseStudy.clientDescription}</p>
        </motion.section>

        {/* Project Brief & Execution */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Project Brief & Execution</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">The Brief</h3>
              <p className="text-gray-300 leading-relaxed">{caseStudy.brief}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">The Execution</h3>
              <p className="text-gray-300 leading-relaxed">{caseStudy.execution}</p>
            </div>
          </div>
        </motion.section>

        {/* Results */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudy.results.map((result, index) => (
              <div 
                key={index} 
                className="bg-gray-900 p-6 rounded-xl border border-gray-800"
              >
                <div className="flex items-start">
                  <div className="bg-[#1849C6] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-300">{result}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Media Gallery */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Media Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudy.media.map((item, index) => (
              <div key={index} className="rounded-xl overflow-hidden">
                {item.type === 'image' ? (
                  <img 
                    src={item.src} 
                    alt={item.caption || `Media item ${index + 1}`} 
                    className="w-full aspect-video object-cover"
                  />
                ) : (
                  <video 
                    src={item.src} 
                    controls 
                    className="w-full aspect-video object-cover"
                  />
                )}
                {item.caption && (
                  <p className="text-sm text-gray-400 mt-2">{item.caption}</p>
                )}
              </div>
            ))}
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
};

export default CaseStudyPage; 