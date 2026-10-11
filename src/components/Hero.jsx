import { useState } from 'react';
import profileImage from '../assets/images/image1.jpeg';

function Hero() {
  const [isMovedUp, setIsMovedUp] = useState(false);

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center justify-between px-10 md:px-24 py-16 bg-[#0d0d0d] text-white overflow-hidden">
      
      {/* Background Glowing Animation Blobs */}
      <div className="absolute top-10 left-1/4 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Left Content (Text & Buttons) */}
      <div className="relative z-10 flex-1 flex flex-col items-start text-left gap-y-4 pr-8">
        
        {/* Availability Badge */}
        <span className="text-xs md:text-sm text-[#D4AF37] border border-[#D4AF37]/40 bg-[#D4AF37]/10 rounded-full px-4 py-1.5 font-medium tracking-wide shadow-sm">
          Available for opportunities
        </span>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mt-2 mb-1">
          Hi, I'm <span className="text-[#D4AF37]">Laiba Sabir</span>
        </h1>

        {/* Sub-heading */}
        <p className="text-xl md:text-2xl text-gray-300 font-semibold mb-1">
          Flutter & MERN Stack Developer
        </p>

        {/* Description */}
        <p className="max-w-xl text-gray-400 font-normal leading-relaxed text-base md:text-lg">
          I design and build full-stack applications — combining clean UI with solid backend logic to create products that actually work well.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-4">
          <a href="#projects" className="bg-[#D4AF37] text-[#0d0d0d] px-7 py-3 rounded-md font-bold hover:bg-[#e6c158] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#D4AF37]/20">
            View Projects
          </a>
          <a href="#contact" className="border border-gray-700 text-white px-7 py-3 rounded-md font-medium hover:border-[#D4AF37] hover:text-[#D4AF37] hover:scale-105 transition-all duration-300">
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Content (Interactive Profile Circle with Subtle Border) */}
      <div className="relative z-10 flex-shrink-0 hidden md:block">
        <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#D4AF37] to-transparent opacity-20 blur-md"></div>
        <div 
          onClick={() => setIsMovedUp(!isMovedUp)}
          className={`relative w-80 h-80 rounded-full overflow-hidden border-2 border-[#D4AF37]/70 bg-[#161616] shadow-2xl shadow-[#D4AF37]/10 cursor-pointer transition-transform duration-500 ease-in-out ${
            isMovedUp ? '-translate-y-6' : 'translate-y-0'
          }`}
          title="Click to move up/down"
        >
          <img src={profileImage} alt="Laiba Sabir" className="w-full h-full object-cover" />
        </div>
      </div>

    </section>
  );
}

export default Hero;