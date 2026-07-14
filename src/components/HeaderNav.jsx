import React, { useState, useEffect, useRef } from "react";
import logoImage from "/src/assets/studioDNA_logo.png"; 

function HeaderNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const lastScrollY = useRef(0);
  const upScrollAccumulator = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Mark as scrolled earlier to trigger smooth shrinking transitions
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY.current) {
        // Reset the upward counter instantly when scrolling down
        upScrollAccumulator.current = 0;
        if (currentScrollY > 100) {
          setIsVisible(false);
        }
      } else {
        // Accumulate how far the user has scrolled back up
        upScrollAccumulator.current += lastScrollY.current - currentScrollY;
        
        // INCREASED THRESHOLD: Requires 350px of deliberate upward scrolling before revealing
        if (upScrollAccumulator.current > 350 || currentScrollY <= 60) {
          setIsVisible(true);
        }
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 select-none transition-all duration-500 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      } ${
        isScrolled
          ? "bg-[#4f5d39] backdrop-blur-md py-0.5 border-b border-white/10 shadow-sm" // Shrunk down padding
          : "bg-transparent py-4 border-white/70" // Generous default padding
      }`}
    >
      <div className="max-w-[1920px] mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center">
            {/* Using the compiled, safe logo asset here */}
            <img
              src={logoImage}
              alt="Studio DNA Logo"
              className={`w-auto -ml-7.5 object-contain transition-all duration-300 ease-in-out brightness-0 invert ${
                isScrolled ? "h-12 md:h-20" : "h-18 md:h-22"
              }`}
            />
          </a>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center gap-2 px-2.5 py-1.5 bg-white hover:bg-white/90 text-[#4f5d39] rounded-sm transition-all duration-300 hover:scale-[1.03] focus:outline-none"
          >
            <div className="flex flex-col gap-0.5 w-3">
              <span className="h-[1px] bg-[#4f5d39] w-full" />
              <span className="h-[1px] bg-[#4f5d39] w-full" />
            </div>
            <span
              className="text-[9px] font-bold tracking-widest uppercase"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              Menu
            </span>
          </button>
        </div>

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {["About", "Services", "Disciplines", "Projects", "Journal"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="text-[16px] font-medium tracking-[0.2em] uppercase text-white hover:text-white transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all after:duration-300"
                style={{ fontFamily: "'serif', sans-serif" }}
              >
                {item}
              </a>
            ),
          )}

          <div className="relative">
            <button
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              className="text-[10px] font-medium tracking-[0.2em] uppercase text-white hover:text-white/60 flex items-center gap-1 focus:outline-none"
              style={{ fontFamily: "'Jost', sans-serif" }}
            >
              More{" "}
              <span
                className={`text-[7px] transition-transform duration-300 ${isMoreOpen ? "rotate-180" : ""}`}
              >
                ▼
              </span>
            </button>
            {isMoreOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-[#4f5d39]/10 py-1 shadow-xl rounded-sm transition-all duration-300">
                <a
                  href="#"
                  className="block px-3 py-1.5 text-[14px] tracking-widest uppercase text-[#4f5d39]/80 hover:bg-[#4f5d39]/5"
                >
                  Recognition
                </a>
                <a
                  href="#"
                  className="block px-3 py-1.5 text-[14px] tracking-widest uppercase text-[#4f5d39]/80 hover:bg-[#4f5d39]/5"
                >
                  Consultation
                </a>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default HeaderNav;