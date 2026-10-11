import profileImage from '../assets/images/image1.jpeg';

function About() {
  return (
    <section id="about" className="py-20 px-10 md:px-24 bg-[#0d0d0d] text-white border-t border-gray-800/60">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          About <span className="text-[#D4AF37]">Me</span>
        </h2>
        <p className="text-gray-400 mt-3 text-base md:text-lg">
          Transforming ideas into functional, real-world applications
        </p>
      </div>

      {/* Main Container: Left Image + Right Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto">
        
        {/* Left Side: Clean Profile Image Card */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden border-2 border-[#D4AF37]/50 bg-[#161616] shadow-2xl shadow-[#D4AF37]/10 group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent opacity-30 z-10"></div>
            <img 
              src={profileImage} 
              alt="Laiba Sabir" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </div>

        {/* Right Side: Centered Bio & Enhanced Cards */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          
          {/* Bio Box — Centered Content */}
          <div className="bg-[#161616] border border-gray-800 p-6 md:p-8 rounded-2xl shadow-xl relative overflow-hidden group hover:border-[#D4AF37]/50 transition-all duration-300 text-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-2xl group-hover:bg-[#D4AF37]/10 transition"></div>
            
            <p className="text-gray-300 leading-relaxed text-base md:text-lg mb-4">
              I am a dedicated <span className="text-[#D4AF37] font-semibold">Flutter & MERN Stack Developer</span> driven by a passion for transforming complex concepts into seamless, user-centric digital experiences across both mobile and web platforms.
            </p>
            <p className="text-gray-400 leading-relaxed text-base">
              My core philosophy centers on writing clean, scalable code and engineering robust backend architectures to deliver high-performance products.
            </p>
          </div>

          {/* Mini Highlights Grid (2x2) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            
            <div className="bg-[#161616] border border-gray-800 p-6 rounded-2xl hover:border-[#D4AF37] hover:bg-[#1a1a1a] hover:-translate-y-1.5 transition-all duration-300 shadow-lg hover:shadow-[#D4AF37]/10 text-center flex flex-col items-center justify-center min-h-[140px]">
              <div className="text-3xl mb-2.5">📱</div>
              <h3 className="text-[#D4AF37] font-bold text-base mb-1">Cross-Platform</h3>
              <p className="text-gray-400 text-xs leading-relaxed">Mobile (Flutter) & Web (MERN) solutions.</p>
            </div>

            <div className="bg-[#161616] border border-gray-800 p-6 rounded-2xl hover:border-[#D4AF37] hover:bg-[#1a1a1a] hover:-translate-y-1.5 transition-all duration-300 shadow-lg hover:shadow-[#D4AF37]/10 text-center flex flex-col items-center justify-center min-h-[140px]">
              <div className="text-3xl mb-2.5">💻</div>
              <h3 className="text-[#D4AF37] font-bold text-base mb-1">Clean Code</h3>
              <p className="text-gray-400 text-xs leading-relaxed">Maintainable & efficient architecture.</p>
            </div>

            <div className="bg-[#161616] border border-gray-800 p-6 rounded-2xl hover:border-[#D4AF37] hover:bg-[#1a1a1a] hover:-translate-y-1.5 transition-all duration-300 shadow-lg hover:shadow-[#D4AF37]/10 text-center flex flex-col items-center justify-center min-h-[140px]">
              <div className="text-3xl mb-2.5">💡</div>
              <h3 className="text-[#D4AF37] font-bold text-base mb-1">Problem Solving</h3>
              <p className="text-gray-400 text-xs leading-relaxed">Building practical productivity tools.</p>
            </div>

            <div className="bg-[#161616] border border-gray-800 p-6 rounded-2xl hover:border-[#D4AF37] hover:bg-[#1a1a1a] hover:-translate-y-1.5 transition-all duration-300 shadow-lg hover:shadow-[#D4AF37]/10 text-center flex flex-col items-center justify-center min-h-[140px]">
              <div className="text-3xl mb-2.5">🚀</div>
              <h3 className="text-[#D4AF37] font-bold text-base mb-1">Continuous Learner</h3>
              <p className="text-gray-400 text-xs leading-relaxed">Exploring new frameworks & tools.</p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;