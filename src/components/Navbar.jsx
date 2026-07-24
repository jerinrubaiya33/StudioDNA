// import React from "react";
// import scratchBImage from "/src/assets/scratchB.png"; 

// function Navbar() {
//   return (
//     /* Responsive sticky height container: prevents clipping on smaller mobile screens while maintaining desktop behaviors */
//     <div className="sticky top-0 min-h-screen md:h-screen w-full bg-[#4f5d39] text-white font-sans antialiased overflow-y-auto md:overflow-hidden z-10">
//       {/* Dynamic Keyframes Injection */}
//       <style>{`
//         @keyframes revealUp {
//           from { transform: translateY(40px); opacity: 0; }
//           to { transform: translateY(0); opacity: 1; }
//         }
//         @keyframes extendLine {
//           from { width: 0%; }
//           to { width: 100%; }
//         }
//         @keyframes fadeInCascade {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }
//         .animate-reveal-3 { animation: revealUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both; }
//         .animate-line-extend { animation: extendLine 1.6s cubic-bezier(0.65, 0, 0.35, 1) 0.4s both; }
//         .animate-cascade { animation: fadeInCascade 1s cubic-bezier(0.16, 1, 0.3, 1) both; }
//       `}</style>

//       {/* MAIN INTRO SCREEN CONTENT */}
//       <main className="pt-20 md:pt-36 max-w-[1920px] mx-auto px-6 md:px-8 relative z-10 pb-12 md:pb-0">
//         <div className="max-w-2xl mb-8 md:mb-12 overflow-hidden">
//           <h1 className="text-xl sm:text-2xl md:text-3xl font-normal tracking-wide uppercase leading-[1.3] md:leading-[1.1] text-[#ffffff] animate-reveal-3 font-serif">
//             <span className="text-[#ff7b00] inline-block transition-transform duration-300 hover:scale-[1.02]">OUTLINE ARCHITECTS</span> IS{" "}
//             PROUDLY PRESENTING{" "}
//             <span className="text-[#ff7b00] inline-block transition-transform duration-300 hover:scale-[1.02]">STUDIO DNA.</span> <br /> THE
//             BRAINCHILD AND INSPIRATIONAL PARTNER TO OFFER MORE EXCITING SERVICES
//             TO OUR VALUED CLIENTS<span className="text-white">.</span>
//           </h1>
//         </div>

//         {/* Structural Asymmetric Horizontal Line split */}
//         <div className="w-full h-[1px] bg-white/10 mb-8 md:mb-6 relative">
//           <div className="absolute left-0 top-0 h-[1px] bg-white/70 animate-line-extend" />
//         </div>

//         {/* Lower Info Meta-Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 items-start md:items-end pb-8 relative">
//           {/* Left Column: Image Asset & Capabilities */}
//           <div className="md:col-span-4 space-y-6 md:space-y-4 animate-cascade [animation-delay:0.7s]">
//             {/* Responsively handled image container: original styling untouched */}
//             <div className="w-full md:w-102 h-48 md:h-75 md:ml-165 md:-mt-76 overflow-hidden rounded-sm">
//               <img
//                 src={scratchBImage}
//                 alt="Studio DNA Showcase"
//                 className="w-full h-full object-cover opacity-90 grayscale-[60%] brightness-90 hover:grayscale-0 hover:brightness-100 hover:opacity-100 transition-all duration-300"
//               />
//             </div>

//             <div className="space-y-2 md:space-y-1">
//               <span className="block text-[9px] tracking-[0.2em] uppercase font-bold text-white mb-1 md:-mt-4 opacity-60">
//                 Capabilities
//               </span>
//               {["Architecture", "Interior Design", "Renovation"].map((tech, i) => (
//                 <a
//                   key={tech}
//                   href="#"
//                   className="block text-[13px] md:text-[14px] uppercase tracking-widest text-white/80 hover:text-white transition-all duration-300 hover:translate-x-2 relative w-fit after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all after:duration-300"
//                   style={{ animationDelay: `${0.8 + i * 0.1}s` }}
//                 >
//                   {tech}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Center Column: Recognition */}
//           <div className="md:col-span-5 space-y-2 md:space-y-1 animate-cascade [animation-delay:0.85s]">
//             <span className="block text-[9px] tracking-[0.2em] uppercase font-bold text-white mb-1.5 md:-mt-14 opacity-60">
//               Recognition
//             </span>
//             <p className="text-xs md:text-sm font-light tracking-wide text-white/80 transition-colors duration-300 hover:text-white inline-block">
//               OUTLINE ARCHITECTS
//             </p>
//           </div>

//           {/* Right Column: Contains the Consultation button */}
//           <div className="md:col-span-3 flex flex-col items-start md:items-end gap-2 relative z-0 animate-cascade [animation-delay:1s]">
//             <a
//               href="#consultation"
//               className="w-full md:w-auto inline-flex items-center justify-between gap-6 border border-white px-5 py-3.5 md:px-4 md:py-3 text-[11px] md:text-[12px] font-bold tracking-[0.25em] uppercase text-white bg-[#ff7b00] hover:bg-white hover:text-[#4f5d39] transition-all duration-500 transform hover:-translate-y-1 hover:shadow-lg active:translate-y-0 md:-mt-15"
//               style={{ fontFamily: "'Jost', sans-serif" }}
//             >
//               <span>Book a Consultation</span>
//               <span className="text-xs font-light">+</span>
//             </a>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default Navbar;
















import React from "react";
import scratchBImage from "/src/assets/scratchB.png";

// Headline broken into word tokens so it can render + animate word by word
const HEADLINE_WORDS = [
  { text: "OUTLINE", highlight: true },
  { text: "ARCHITECTS", highlight: true },
  { text: "IS" },
  { text: "PROUDLY" },
  { text: "PRESENTING" },
  { text: "STUDIO", highlight: true },
  { text: "DNA.", highlight: true, breakAfter: true },
  { text: "THE" },
  { text: "BRAINCHILD" },
  { text: "AND" },
  { text: "INSPIRATIONAL" },
  { text: "PARTNER" },
  { text: "TO" },
  { text: "OFFER" },
  { text: "MORE" },
  { text: "EXCITING" },
  { text: "SERVICES" },
  { text: "TO" },
  { text: "OUR" },
  { text: "VALUED" },
  { text: "CLIENTS." },
];

function Navbar() {
  return (
    <div className="relative sticky top-0 min-h-screen md:h-screen w-full bg-[#4f5d39] text-white font-sans antialiased overflow-y-auto md:overflow-hidden z-10">
      
      {/* Dynamic Keyframes Injection */}
      <style>{`
        @keyframes revealUp {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes extendLine {
          from { width: 0%; }
          to { width: 100%; }
        }
        @keyframes fadeInCascade {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes wordReveal {
          from { opacity: 0; transform: translateY(14px) scale(0.98); filter: blur(3px); }
          to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
        }
        .animate-reveal-3 { animation: revealUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both; }
        .animate-line-extend { animation: extendLine 1.6s cubic-bezier(0.65, 0, 0.35, 1) 0.4s both; }
        .animate-cascade { animation: fadeInCascade 1s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .animate-word-reveal {
          display: inline-block;
          opacity: 0;
          animation: wordReveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* MAIN INTRO SCREEN CONTENT */}
      <main className="pt-20 md:pt-36 max-w-[1920px] mx-auto px-6 md:px-8 relative z-10 pb-12 md:pb-0">
        <div className="max-w-2xl mb-8 md:mb-12">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-normal tracking-wide uppercase leading-[1.3] md:leading-[1.1] text-white font-serif">
            {HEADLINE_WORDS.map((word, i) => (
              <React.Fragment key={i}>
                <span
                  className={`animate-word-reveal ${
                    word.highlight
                      ? "text-[#ff7b00] transition-transform duration-300 hover:scale-[1.02]"
                      : ""
                  }`}
                  // Stagger delay set to 0.25s per word for a slower, smooth cascade
                  style={{ animationDelay: `${0.2 + i * 0.25}s` }}
                >
                  {word.text}
                </span>{" "}
                {word.breakAfter && <br />}
              </React.Fragment>
            ))}
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
            <div className="w-full md:w-102 h-48 md:h-75 md:ml-165 md:-mt-76 overflow-hidden rounded-sm">
              <img
                src={scratchBImage}
                alt="Studio DNA Showcase"
                className="w-full h-full object-cover opacity-90 grayscale-[60%] brightness-90 hover:grayscale-0 hover:brightness-100 hover:opacity-100 transition-all duration-300"
              />
            </div>

            <div className="space-y-2 md:space-y-1">
              <span className="block text-[9px] tracking-[0.2em] uppercase font-bold text-white mb-1 md:-mt-4 opacity-60">
                Capabilities
              </span>
              {["Architecture", "Interior Design", "Renovation"].map((tech, i) => (
                <a
                  key={tech}
                  href="#"
                  className="block text-[13px] md:text-[14px] uppercase tracking-widest text-white/80 hover:text-white transition-all duration-300 hover:translate-x-2 relative w-fit after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-white hover:after:w-full after:transition-all after:duration-300"
                  style={{ animationDelay: `${0.8 + i * 0.1}s` }}
                >
                  {tech}
                </a>
              ))}
            </div>
          </div>

          {/* Center Column: Recognition */}
          <div className="md:col-span-5 space-y-2 md:space-y-1 animate-cascade [animation-delay:0.85s]">
            <span className="block text-[9px] tracking-[0.2em] uppercase font-bold text-white mb-1.5 md:-mt-14 opacity-60">
              Recognition
            </span>
            <p className="text-xs md:text-sm font-light tracking-wide text-white/80 transition-colors duration-300 hover:text-white inline-block">
              OUTLINE ARCHITECTS
            </p>
          </div>

          {/* Right Column: Contains the Consultation button */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end gap-2 relative z-0 animate-cascade [animation-delay:1s]">
            <a
              href="#consultation"
              className="w-full md:w-auto inline-flex items-center justify-between gap-6 border border-white px-5 py-3.5 md:px-4 md:py-3 text-[11px] md:text-[12px] font-bold tracking-[0.25em] uppercase text-white bg-[#ff7b00] hover:bg-white hover:text-[#4f5d39] transition-all duration-500 transform hover:-translate-y-1 hover:shadow-lg active:translate-y-0 md:-mt-15"
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