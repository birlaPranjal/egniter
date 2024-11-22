import { FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../../public/logo.svg';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 md:p-24">
      {/* Logo Section */}
      <div className="absolute top-8 md:top-24 w-full max-w-5xl flex justify-center">
        <div className="flex justify-center items-center text-4xl md:text-5xl font-bold logo-gradient">
          <Image src={logo} alt="Egniter Logo" className="w-12 h-12 md:w-20 md:h-20" />
          <div className='mb-3 font-medium'>egniter</div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-4">
          <div className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            <span className="text-[#3AA5F7]">&quot;We believe </span>
            <span className="gradient-text">creativity </span>
            <span className="text-[#3AA5F7]">can solve </span>
            <span className="gradient-text">almost any problem.&quot;</span>
          </div>
          <p className="text-xl md:text-2xl text-gray-400 mt-4">
            -George Lois
          </p>
        </div>
      </div>

      {/* Footer Text */}
      <div className="absolute bottom-32 md:bottom-40 w-full max-w-3xl text-center">
        <p className="text-xl md:text-2xl font-light text-white/90 hidden md:block">
          Our website is under construction, but our ideas never stop.
        </p>
        <p className="text-xl md:text-2xl font-light text-white/90 block md:hidden">
          Our website is under construction,<br/>but our ideas never stop.
        </p>
      </div>

      {/* Social Links */}
      <div className="absolute bottom-8 md:bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-4">
        <a 
          href="https://www.instagram.com/egniterproduction" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white/10 text-white backdrop-blur-sm px-5 py-3 rounded-full hover:bg-white/20 transition-all"
        >
          <FaInstagram className="w-5 h-5" />
          Instagram
        </a>
        <a 
          href="https://www.youtube.com/@Egniter" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white/10 text-white backdrop-blur-sm px-5 py-3 rounded-full hover:bg-white/20 transition-all"
        >
          <FaYoutube className="w-5 h-5" />
          Youtube
        </a>
      </div>
    </main>
  );
}
