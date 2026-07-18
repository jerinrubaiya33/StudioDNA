import scratchBImage from "/src/assets/scratchB.png"; 

function Navbar() {
  return (
    /* Responsive sticky height container: prevents clipping on smaller mobile screens while maintaining desktop behaviors */
    <div className="sticky top-0 min-h-screen md:h-screen w-full bg-[#4f5d39] text-white font-sans antialiased overflow-y-auto md:overflow-hidden z-10">
      {/* Dynamic Keyframes Injection */}
      <style>{`
        @keyframes revealUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes extendLine {
          from { width: 0%; }
          to { width: 100%; }
        }
        @keyframes fadeInCascade {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-reveal-3 { animation: revealUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both; }
        .animate-line-extend { animation: extendLine 1.4s cubic-bezier(0.65, 0, 0.35, 1) 0.4s both; }
        .animate-cascade { animation: fadeInCascade 1s cubic-bezier(0.16, 1, 0.3, 1) both; }
      `}</style>

      {/* MAIN INTRO SCREEN CONTENT */}
      <main className="pt-20 md:pt-36 max-w-[1920px] mx-auto px-6 md:px-8 relative z-10 pb-12 md:pb-0 ">
        <div className="max-w-2xl mb-8 md:mb-12">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-normal tracking-wide uppercase leading-[1.3] md:leading-[1.1] text-[#ffffff] animate-reveal-3 font-serif">
            <span className="text-[#ff7b00]">OUTLINE ARCHITECTS</span> IS{" "}
            PROUDLY PRESENTING{" "}
            <span className="text-[#ff7b00]">STUDIO DNA.</span> <br /> THE
            BRAINCHILD AND INSPIRATIONAL PARTNER TO OFFER MORE EXCITING SERVICES
            TO OUR VALUED CLIENTS<span className="text-white">.</span>
          </h1>
        </div>

        {/* Structural Asymmetric Horizontal Line split */}
        <div className="w-full h-[1px] bg-white/10 mb-8 md:mb-6 relative">
          <div className="absolute left-0 top-0 h-[1px] bg-white/70 animate-line-extend" />
        </div>

        {/* Lower Info Meta-Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-start md:items-end pb-8 relative">
          {/* Left Column: Image Asset & Capabilities */}
          <div className="md:col-span-4 space-y-6 md:space-y-4 animate-cascade [animation-delay:0.7s]">
            {/* Responsively handled image container: uses original specifications strictly on desktop (md:) */}
            <div className="w-full md:w-102 h-48 md:h-75 md:ml-165 md:-mt-76 overflow-hidden rounded-sm">
              <img
                src={scratchBImage}
                alt="Studio DNA Showcase"
                className="w-full h-full object-cover opacity-90 grayscale-[60%] brightness-90 hover:grayscale-0 hover:brightness-100 hover:opacity-100 transition-all duration-300"
              />
            </div>

            <div className="space-y-2 md:space-y-1">
              <span className="block text-[9px] tracking-[0.2em] uppercase font-bold text-white mb-1 md:-mt-4">
                Capabilities
              </span>
              {["Architecture", "Interior Design", "Renovation"].map((tech) => (
                <a
                  key={tech}
                  href="#"
                  className="block text-[13px] md:text-[14px] uppercase tracking-widest text-white/80 hover:text-white transition-all duration-300 hover:translate-x-1"
                >
                  {tech}
                </a>
              ))}
            </div>
          </div>

          {/* Center Column: Recognition */}
          <div className="md:col-span-5 space-y-2 md:space-y-1 animate-cascade [animation-delay:0.85s]">
            <span className="block text-[9px] tracking-[0.2em] uppercase font-bold text-white mb-1.5 md:-mt-14">
              Recognition
            </span>
            <p className="text-xs md:text-sm font-light tracking-wide text-white/80">
              OUTLINE ARCHITECTS
            </p>
          </div>

          {/* Right Column: Contains the Consultation button */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end gap-2 relative z-0 animate-cascade [animation-delay:1s]">
            <a
              href="#consultation"
              className="w-full md:w-auto  inline-flex items-center justify-between gap-6 border border-white px-5 py-3.5 md:px-4 md:py-3 text-[11px] md:text-[12px] font-bold tracking-[0.25em] uppercase text-white bg-[#ff7b00] hover:bg-white hover:text-[#4f5d39] transition-all duration-500 transform hover:-translate-y-0.5 md:-mt-15 bg-[#
//               ] hover:bg-white hover:text-[#4f5d39]"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              
              <span>Book a Consultation</span>
              <span className="text-xs font-light">+</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Navbar;