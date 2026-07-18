// import React, { useState, useEffect, useRef } from "react";
// import logoImage from "/src/assets/studioDNA_logo.png"; 
// import logo2Image from "/src/assets/studioDNA_logo_green.png"; 

// function HeaderNav() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isVisible, setIsVisible] = useState(true);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isMoreOpen, setIsMoreOpen] = useState(false);

//   const lastScrollY = useRef(0);
//   const upScrollAccumulator = useRef(0);

//   // Prevent scroll when overlay is active
//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }
//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [isMenuOpen]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
      
//       // Mark as scrolled earlier to trigger smooth shrinking transitions
//       setIsScrolled(currentScrollY > 20);

//       if (currentScrollY > lastScrollY.current) {
//         // Reset the upward counter instantly when scrolling down
//         upScrollAccumulator.current = 0;
//         if (currentScrollY > 100) {
//           setIsVisible(false);
//         }
//       } else {
//         // Accumulate how far the user has scrolled back up
//         upScrollAccumulator.current += lastScrollY.current - currentScrollY;
        
//         // INCREASED THRESHOLD: Requires 350px of deliberate upward scrolling before revealing
//         if (upScrollAccumulator.current > 350 || currentScrollY <= 60) {
//           setIsVisible(true);
//         }
//       }
//       lastScrollY.current = currentScrollY;
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const menuItems = ["About", "Services", "Who We are", "Projects", "Press", "Contact"];

//   return (
//     <>
//       {/* ---------- MAIN HEADER NAVBAR ---------- */}
//       <header
//         className={`fixed top-0 left-0 w-full z-50 select-none transition-all duration-500 ease-out ${
//           isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
//         } ${
//           isScrolled
//             ? "bg-[#4f5d39] backdrop-blur-md py-0.5 border-b border-white/10 shadow-sm"
//             : "bg-transparent py-4 border-white/70"
//         }`}
//       >
//         <div className="max-w-[1920px] mx-auto px-4 md:px-8 flex items-center justify-between">
//           <div className="flex items-center gap-4">
//             <a href="#" className="flex items-center">
//               <img
//                 src={logoImage}
//                 alt="Studio DNA Logo"
//                 className={`w-auto -ml-7.5 object-contain transition-all duration-300 ease-in-out brightness-0 invert ${
//                   isScrolled ? "h-12 md:h-20" : "h-18 md:h-22"
//                 }`}
//               />
//             </a>

//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="flex items-center gap-2 px-2.5 py-1.5 bg-white hover:bg-white/90 text-[#4f5d39] rounded-sm transition-all duration-300 hover:scale-[1.03] focus:outline-none"
//             >
//               <div className="flex flex-col gap-0.5 w-3">
//                 <span className="h-[1px] bg-[#4f5d39] w-full" />
//                 <span className="h-[1px] bg-[#4f5d39] w-full" />
//               </div>
//               <span
//                 className="text-[9px] font-bold tracking-widest uppercase"
//                 style={{ fontFamily: "'serif', sans-serif" }}
//               >
//                 Menu
//               </span>
//             </button>
//           </div>

//           <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
//             {menuItems.map((item) => (
//               <a
//                 key={item}
//                 href="#"
//                 className="text-[16px] font-medium tracking-[0.2em] uppercase text-white hover:text-white transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all after:duration-300"
//                 style={{ fontFamily: "'serif'" }}
//               >
//                 {item}
//               </a>
//             ))}
//           </nav>
//         </div>
//       </header>

//       {/* ---------- FULL-PAGE LIGHT GRAY OVERLAY MENU ---------- */}
//       <div
//         className={`fixed inset-0 z-[60] bg-[#d2d8c9] transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] flex flex-col justify-between p-6 md:p-12 ${
//           isMenuOpen 
//             ? "opacity-100 pointer-events-auto translate-y-0" 
//             : "opacity-0 pointer-events-none -translate-y-4"
//         }`}
//       >
//         {/* Top bar inside the fullscreen menu */}
//         <div className="max-w-[1920px] w-full mx-auto flex items-center justify-between">
//           <a href="#" onClick={() => setIsMenuOpen(false)} className="flex items-center">
//             <img
//               src={logo2Image}
//               alt="Studio DNA Logo"
//               className="h-14 md:h-20 w-auto object-contain mix-blend-multiply"
//               style={{ filter: "matrix(0.31, 0.36, 0.22, 0, 0, 0, 0.36, 0.27, 0.15, 0, 0, 0, 0.16, 0.2, 0.11, 0, 0, 0, 1, 0)" }} 
//             />
//           </a>

//           {/* Close Trigger Button */}
//           <button
//             onClick={() => setIsMenuOpen(false)}
//             className="group flex items-center gap-3 px-3 py-2 border border-[#4f5d39]/25 hover:border-[#4f5d39] rounded-sm transition-all duration-300 focus:outline-none"
//           >
//             <span
//               className="text-[10px] font-bold tracking-[0.25em] text-[#4f5d39] uppercase"
//               style={{ fontFamily: "'serif', sans-serif" }}
//             >
//               Close
//             </span>
//             <div className="relative w-3.5 h-3.5 flex items-center justify-center">
//               <span className="absolute h-[1px] w-full bg-[#4f5d39] rotate-45 transition-transform duration-300 group-hover:rotate-90" />
//               <span className="absolute h-[1px] w-full bg-[#4f5d39] -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
//             </div>
//           </button>
//         </div>

//         {/* Center Navigation Links Container */}
//         <div className="max-w-7xl w-full mx-auto flex flex-col items-start justify-center flex-grow py-12">
//           <nav className="flex flex-col space-y-3 md:space-y-6">
//             {menuItems.map((item, index) => (
//               <div 
//                 key={item}
//                 className="overflow-hidden"
//                 style={{ transitionDelay: `${index * 70}ms` }}
//               >
//                 <a
//                   href="#"
//                   onClick={() => setIsMenuOpen(false)}
//                   className={`text-[9vw] sm:text-[7vw] md:text-[4vw] font-bold leading-none uppercase text-[#4f5d39] inline-block transition-all duration-500 ease-out hover:translate-x-4 hover:opacity-75 ${
//                     isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
//                   }`}
//                   style={{ 
//                     fontFamily: "'serif'",
//                     transition: "transform 0.6s cubic-bezier(0.215, 0.610, 0.355, 1), opacity 0.6s"
//                   }}
//                 >
//                   {item}
//                 </a>
//               </div>
//             ))}
//           </nav>
//         </div>

//         {/* Dynamic Studio Footer Context (Bottom of Full Page) */}
//         <div className="max-w-[1920px] w-full mx-auto border-t border-[#4f5d39]/15 pt-6 flex flex-col md:flex-row justify-between gap-4 text-[#4f5d39]/70 text-[11px] tracking-widest font-mono uppercase">
//           <div>© {new Date().getFullYear()} Studio DNA & Outline Architecture.</div>
//           <div className="flex gap-6">
//             <a href="#" className="hover:text-[#4f5d39] transition-colors">Instagram</a>
//             <a href="#" className="hover:text-[#4f5d39] transition-colors">LinkedIn</a>
//             <a href="#" className="hover:text-[#4f5d39] transition-colors">Journal</a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default HeaderNav;















import React, { useState, useEffect, useRef } from "react";
import logoImage from "/src/assets/studioDNA_logo.png"; 
import logo2Image from "/src/assets/studioDNA_logo_green.png"; 

function HeaderNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const lastScrollY = useRef(0);
  const upScrollAccumulator = useRef(0);

  // Prevent scroll when overlay is active
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

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

  const menuItems = ["About", "Services", "Who We are", "Projects", "Press", "Contact"];

  return (
    <>
      {/* ---------- MAIN HEADER NAVBAR ---------- */}
      <header
        className={`fixed top-0 left-0 w-full z-50 select-none transition-all duration-500 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } ${
          isScrolled
            ? "bg-[#4f5d39] backdrop-blur-md py-0.5 border-b border-white/10 shadow-sm"
            : "bg-transparent py-4 border-white/70"
        }`}
      >
        <div className="max-w-[1920px] mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Main layout container handling mobile and desktop order shifts */}
          <div className="flex items-center justify-between md:justify-start w-full md:w-auto gap-4">
            <a href="#" className="flex items-center order-1">
              <img
                src={logoImage}
                alt="Studio DNA Logo"
                className={`w-auto object-contain transition-all duration-300 ease-in-out brightness-0 invert ${
                  isScrolled ? "-ml-2 md:-ml-7.5 h-14 sm:h-16 md:h-20" : "-ml-2 md:-ml-7.5 h-18 sm:h-20 md:h-22"
                }`}
              />
            </a>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center gap-2 px-2.5 py-1.5 bg-white hover:bg-white/90 text-[#4f5d39] rounded-sm transition-all duration-300 hover:scale-[1.03] focus:outline-none order-2 md:order-2"
            >
              <div className="flex flex-col gap-0.5 w-3">
                <span className="h-[1px] bg-[#4f5d39] w-full" />
                <span className="h-[1px] bg-[#4f5d39] w-full" />
              </div>
              <span
                className="text-[9px] font-bold tracking-widest uppercase"
                style={{ fontFamily: "'serif', sans-serif" }}
              >
                Menu
              </span>
            </button>
          </div>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-[16px] font-medium tracking-[0.2em] uppercase text-white hover:text-white transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all after:duration-300"
                style={{ fontFamily: "'serif'" }}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* ---------- FULL-PAGE LIGHT GRAY OVERLAY MENU ---------- */}
      <div
        className={`fixed inset-0 z-[60] bg-[#d2d8c9] transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] flex flex-col justify-between p-6 md:p-12 overflow-y-auto ${
          isMenuOpen 
            ? "opacity-100 pointer-events-auto translate-y-0" 
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="flex flex-col justify-between min-h-full w-full max-w-[1920px] mx-auto gap-8">
          {/* Top bar inside the fullscreen menu */}
          <div className="w-full flex items-center justify-between">
            <a href="#" onClick={() => setIsMenuOpen(false)} className="flex items-center">
              <img
                src={logo2Image}
                alt="Studio DNA Logo"
                className="h-14 sm:h-16 md:h-20 w-auto object-contain mix-blend-multiply"
                style={{ filter: "matrix(0.31, 0.36, 0.22, 0, 0, 0, 0.36, 0.27, 0.15, 0, 0, 0, 0.16, 0.2, 0.11, 0, 0, 0, 1, 0)" }} 
              />
            </a>

            {/* Close Trigger Button */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="group flex items-center gap-3 px-3 py-2 border border-[#4f5d39]/25 hover:border-[#4f5d39] rounded-sm transition-all duration-300 focus:outline-none"
            >
              <span
                className="text-[10px] font-bold tracking-[0.25em] text-[#4f5d39] uppercase"
                style={{ fontFamily: "'serif', sans-serif" }}
              >
                Close
              </span>
              <div className="relative w-3.5 h-3.5 flex items-center justify-center">
                <span className="absolute h-[1px] w-full bg-[#4f5d39] rotate-45 transition-transform duration-300 group-hover:rotate-90" />
                <span className="absolute h-[1px] w-full bg-[#4f5d39] -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
              </div>
            </button>
          </div>

          {/* Center Navigation Links Container */}
          <div className="w-full flex flex-col items-start justify-center flex-grow py-6 md:py-12">
            <nav className="flex flex-col space-y-2 sm:space-y-3 md:space-y-6">
              {menuItems.map((item, index) => (
                <div 
                  key={item}
                  className="overflow-hidden"
                  style={{ transitionDelay: `${index * 70}ms` }}
                >
                  <a
                    href="#"
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-[8vw] sm:text-[7vw] md:text-[4vw] font-bold leading-none uppercase text-[#4f5d39] inline-block transition-all duration-500 ease-out hover:translate-x-4 hover:opacity-75 ${
                      isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
                    }`}
                    style={{ 
                      fontFamily: "'serif'",
                      transition: "transform 0.6s cubic-bezier(0.215, 0.610, 0.355, 1), opacity 0.6s"
                    }}
                  >
                    {item}
                  </a>
                </div>
              ))}
            </nav>
          </div>

          {/* Dynamic Studio Footer Context (Bottom of Full Page) */}
          <div className="w-full border-t border-[#4f5d39]/15 pt-6 flex flex-col md:flex-row justify-between gap-4 text-[#4f5d39]/70 text-[11px] tracking-widest font-mono uppercase">
            <div>© {new Date().getFullYear()} Studio DNA & Outline Architecture.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#4f5d39] transition-colors">Instagram</a>
              <a href="#" className="hover:text-[#4f5d39] transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-[#4f5d39] transition-colors">Journal</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderNav;