import Image from "next/image";
import soon from "../../public/big.png";
import mobile from "../../public/mobile.svg";
import { FaInstagram, FaYoutube } from "react-icons/fa";

export default function Home() {
  return (
    <div className="relative h-[92.5vh] md:h-screen w-screen">
      <Image src={soon} alt="Coming Soon" className="h-full w-full object-cover sm:block hidden" />
      <Image src={mobile} alt="Coming Soon" className="h-full w-full object-cover block sm:hidden" />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-10 md:mb-16 flex space-x-4">
        <a 
          href="https://www.instagram.com/egniterproduction" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-black/50 backdrop-blur-sm px-5 py-4 rounded-full hover:bg-black/30 transition-all"
        >
          <FaInstagram className="w-5 h-5 text-pink-500" />
          Instagram
        </a>
        <a 
          href="https://www.youtube.com/@Egniter" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-black/50 backdrop-blur-sm px-5 py-4 rounded-full hover:bg-black/30 transition-all"
        >
          <FaYoutube className="w-5 h-5 text-red-500" />
          Youtube
        </a>
      </div>
    </div>
  );
}
