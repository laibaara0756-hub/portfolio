function Navbar() {
  return (
    <nav className="w-full px-8 md:px-20 py-6 flex justify-between items-center bg-[#0d0d0d]/90 backdrop-blur-md text-white sticky top-0 z-50 border-b border-gray-800/60 shadow-xl">
      
      {/* Brand / Name */}
      <div className="text-2xl md:text-3xl font-extrabold tracking-wider text-white cursor-pointer">
        Laiba <span className="text-[#D4AF37]">Sabir</span>
      </div>

      {/* Navigation Links — Corrected href IDs */}
      <div className="hidden md:flex gap-10 text-gray-300 font-semibold text-base">
        <a href="#home" className="relative py-1 group hover:text-[#D4AF37] transition duration-300">
          Home
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#about" className="relative py-1 group hover:text-[#D4AF37] transition duration-300">
          About
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#skills" className="relative py-1 group hover:text-[#D4AF37] transition duration-300">
          Skills
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#projects" className="relative py-1 group hover:text-[#D4AF37] transition duration-300">
          Projects
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#contact" className="relative py-1 group hover:text-[#D4AF37] transition duration-300">
          Contact
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>

      {/* Let's Talk Button */}
      <div>
        <a href="#contact" className="bg-[#D4AF37] text-[#0d0d0d] px-6 py-2.5 rounded-full font-bold text-sm md:text-base hover:bg-[#e6c158] hover:scale-105 transform transition-all duration-300 shadow-lg shadow-[#D4AF37]/20">
          Let's Talk
        </a>
      </div>

    </nav>
  );
}

export default Navbar;