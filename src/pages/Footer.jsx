// import React from "react";
// import { MapPin, Phone, ArrowUp } from "lucide-react";

// // 1. Import your logo image from your assets folder (adjust filename/extension if needed)
// import logo from "/src/assets/studioDNA_logo_green.png"; 
// import logo2 from "/src/assets/outline.png";

// // Colorful SocialIcon
// const SocialIcon = ({ children, label, href, activeColor }) => (
//   <a
//     href={href}
//     aria-label={label}
//     target="_blank"
//     rel="noopener noreferrer"
//     style={{ "--brand-color": activeColor }}
//     className="group flex h-10 w-11 items-center justify-center rounded-full border transition-all duration-300 [border-color:var(--brand-color)] [color:var(--brand-color)] hover:bg-[var(--brand-color)] hover:text-white hover:-translate-y-0.5"
//   >
//     {children}
//   </a>
// );

// export default function Footer() {
//   return (
//     <footer
//       className="relative z-10 w-full bg-[rgb(243,243,243)] text-[#4f5d39]"
//       style={{ fontFamily: "'DM Sans', sans-serif" }}
//     >
//       <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
        
//         {/* Brand Row */}
//         <div className="flex flex-col gap-8 border-b border-[#4f5d39]/10 pb-12 sm:flex-row sm:items-center sm:justify-between">
//           <div className="flex items-center gap-4">
            
//             {/* 2. Replaced <Logomark /> with the <img> element */}
//             <img 
//               src={logo} 
//               alt="STUDIO DNA Logo"
//               className="h-22 -ml-7 w-auto shrink-0 object-contain" 
//             />
//             <p className="text-[#4f5d39] -ml-8">+</p>
//              <img 
//               src={logo2} 
//               alt="STUDIO DNA Logo"
//               className="h-20 -ml-4 mt-2 w-auto shrink-0 object-contain" 
//             />

//             <div>
//               <div
//                 className="text-2xl tracking-tight text-[#4f5d39]"
//                 style={{ fontFamily: "'serif'" }}
//               >
//                 STUDIO DNA
//               </div>
//               <div
//                 className="text-[11px] tracking-[0.25em] text-[#e97100] uppercase"
//                 style={{ fontFamily: "'JetBrains Mono', monospace" }}
//               >
//                 A Subsidiary Studio
//               </div>
//                <div
//                 className="text-2xl tracking-tight text-[#4f5d39]"
//                 style={{ fontFamily: "'serif'" }}
//               >
//                 OUTLINE ARCHITECTS
//               </div>
//             </div>
//           </div>

//           {/* Real Colorful Social Icons */}
//           <div className="flex items-center gap-3">
//             <SocialIcon label="Facebook" href="#" activeColor="#1877F2">
//               <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
//                 <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.86c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z" />
//               </svg>
//             </SocialIcon>
//             <SocialIcon label="Instagram" href="#" activeColor="#E1306C">
//               <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
//                 <path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.89 1.11 1.15 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 01-1.15 1.77 4.9 4.9 0 01-1.77 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 01-1.77-1.15 4.9 4.9 0 01-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 014.45 2.53c.64-.25 1.37-.42 2.43-.47C7.94 2.01 8.28 2 11 2h1zm0 1.8h-.96c-2.67 0-2.99.01-4.04.06-.97.04-1.5.2-1.85.34-.46.18-.79.4-1.14.75-.35.35-.57.68-.75 1.14-.14.35-.3.88-.34 1.85-.05 1.05-.06 1.37-.06 4.04s.01 2.99.06 4.04c.04.97.2 1.5.34 1.85.18.46.4.79.75 1.14.35.35.68.57 1.14.75.35.14.88.3 1.85.34 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.97-.04 1.5-.2 1.85-.34.46-.18.79-.4 1.14-.75.35-.35.57-.68.75-1.14.14-.35.3-.88.34-1.85.05-1.05.06-1.37.06-4.04s-.01-2.99-.06-4.04c-.04-.97-.2-1.5-.34-1.85a3.1 3.1 0 00-.75-1.14 3.1 3.1 0 00-1.14-.75c-.35-.14-.88-.3-1.85-.34-1.05-.05-1.37-.06-4.04-.06zM12 6.86A5.14 5.14 0 1112 17.14 5.14 5.14 0 0112 6.86zm0 1.8a3.34 3.34 0 100 6.68 3.34 3.34 0 000-6.68zm5.34-2a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
//               </svg>
//             </SocialIcon>
//             <SocialIcon label="Pinterest" href="#" activeColor="#BD081C">
//               <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
//                 <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.64 7.85 6.35 9.3-.09-.79-.17-2 .03-2.86.19-.78 1.22-4.99 1.22-4.99s-.31-.63-.31-1.55c0-1.45.84-2.54 1.89-2.54.89 0 1.32.67 1.32 1.47 0 .9-.57 2.24-.87 3.48-.25 1.04.52 1.89 1.55 1.89 1.86 0 3.29-1.96 3.29-4.79 0-2.5-1.8-4.25-4.36-4.25-2.97 0-4.71 2.23-4.71 4.53 0 .9.34 1.86.78 2.38.09.1.1.19.07.3l-.29 1.16c-.05.19-.15.24-.35.14-1.3-.6-2.11-2.49-2.11-4.01 0-3.27 2.38-6.28 6.86-6.28 3.6 0 6.4 2.57 6.4 6 0 3.58-2.26 6.46-5.39 6.46-1.05 0-2.04-.55-2.38-1.19l-.65 2.47c-.23.9-.87 2.02-1.3 2.71.98.3 2.02.47 3.1.47 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
//               </svg>
//             </SocialIcon>
//             <SocialIcon label="WhatsApp" href="#" activeColor="#25D366">
//               <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
//                 <path d="M17.47 14.38c-.28-.14-1.67-.82-1.93-.92-.26-.1-.45-.14-.64.14-.19.28-.73.92-.9 1.11-.16.19-.33.21-.61.07-.28-.14-1.18-.43-2.24-1.38-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.47.1-.19.05-.35-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.76.35-.26.28-1 .98-1 2.38 0 1.4 1.02 2.76 1.16 2.95.14.19 2 3.05 4.84 4.28.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.11.55-.08 1.67-.68 1.9-1.34.24-.66.24-1.22.17-1.34-.07-.12-.26-.19-.54-.33zM12.02 2C6.5 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.07L2 22l5.08-1.33A9.96 9.96 0 0012.02 22C17.53 22 22 17.52 22 12S17.53 2 12.02 2zm0 18.06c-1.65 0-3.2-.46-4.52-1.25l-.32-.19-3.02.79.81-2.94-.21-.31A8.03 8.03 0 014 12c0-4.42 3.6-8.02 8.02-8.02 4.42 0 8.02 3.6 8.02 8.02 0 4.42-3.6 8.06-8.02 8.06z" />
//               </svg>
//             </SocialIcon>
//           </div>
//         </div>

//         {/* Description */}
//         <div className="border-b border-[#4f5d39]/10 py-12">
//           <p
//             className="max-w-3xl text-[15px] leading-[1.9] text-[#4f5d39]/80"
//             style={{ fontFamily: "'DM Sans', sans-serif" }}
//           >
//             STUDIO DNA provides comprehensive services in architecture, planning &amp;
//             engineering, interior &amp; landscape design for both public and private
//             sector covering residential, commercial, institutional &amp; industrial
//             projects as well as renovations and landmark restoration projects. We are
//             focused to provide an efficient and complete design, build and supply
//             service to our valuable clients.
//           </p>
//         </div>

//         {/* Locations */}
//         <div className="grid grid-cols-1 gap-12 py-12 sm:grid-cols-2">
//           <div>
//             <div
//               className="mb-4 flex items-center gap-2 text-[11px] tracking-[0.25em] text-[#e97100]"
//               style={{ fontFamily: "'JetBrains Mono', monospace" }}
//             >
//               <span>01</span>
//               <span>—</span>
//               <span>STUDIO DNA</span>
//             </div>
//             <div className="flex items-start gap-3 text-sm text-[#4f5d39]/85">
//               <MapPin size={16} className="mt-0.5 shrink-0 text-[#e97100]" />
//               <span>
//                 House 42, Road 11, Baridhara,
//                 <br />
//                 Dhaka 1212, Bangladesh
//               </span>
//             </div>
//             <div className="mt-3 flex items-center gap-3 text-sm text-[#4f5d39]">
//               <Phone size={16} className="shrink-0 text-[#e97100]" />
//               <a href="tel:+8801711000000" className="transition-colors hover:text-[#e97100]">
//                 +880 1711-000 000
//               </a>
//             </div>
//           </div>

//           <div>
//             <div
//               className="mb-4 flex items-center gap-2 text-[11px] tracking-[0.25em] text-[#e97100]"
//               style={{ fontFamily: "'JetBrains Mono', monospace" }}
//             >
//               <span>02</span>
//               <span>—</span>
//               <span>OUTLINE ARCHITECTS</span>
//             </div>
//             <div className="flex items-start gap-3 text-sm text-[#4f5d39]">
//               <MapPin size={16} className="mt-0.5 shrink-0 text-[#e97100]" />
//               <span>
//                 Level 6, Chartered Tower, GEC Circle,
//                 <br />
//                 Chattogram 4000, Bangladesh
//               </span>
//             </div>
//             <div className="mt-3 flex items-center gap-3 text-sm text-[#4f5d39]">
//               <Phone size={16} className="shrink-0 text-[#e97100]" />
//               <a href="tel:+8801811000000" className="transition-colors hover:text-[#e97100]">
//                 +880 1811-000 000
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Relationship Note + Back to Top */}
//         <div className="flex flex-col items-start justify-between gap-6 pt-8 sm:flex-row sm:items-center">
//           <p
//             className="max-w-xl text-xs leading-relaxed text-[#4f5d39]"
//             style={{ fontFamily: "'JetBrains Mono', monospace" }}
//           >
//             STUDIO DNA IS A DESIGN BRANCH OF OUTLINE ARCHITECTS, EXTENDING 30 YEARS OF
//             PRACTICE INTO FOCUSED RESIDENTIAL &amp; BOUTIQUE WORK. © {new Date().getFullYear()}{" "}
//             ALL RIGHTS RESERVED.
//           </p>
//           <button
//             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//             className="group flex items-center gap-2 text-[11px] tracking-[0.2em] text-[#4f5d39] transition-colors hover:text-[#e97100]"
//             style={{ fontFamily: "'JetBrains Mono', monospace" }}
//           >
//             BACK TO TOP
//             <ArrowUp size={14} className="transition-transform group-hover:-translate-y-1" />
//           </button>
//         </div>
//       </div>
//     </footer>
//   );
// }














import React from "react";
import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";

// 1. Import your logo image from your assets folder (adjust filename/extension if needed)
import logo from "/src/assets/studioDNA_logo_green.png"; 
import logo2 from "/src/assets/outline.png";

// Colorful SocialIcon
const SocialIcon = ({ children, label, href, activeColor }) => (
  <a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    style={{ "--brand-color": activeColor }}
    className="group flex h-10 w-11 items-center justify-center rounded-full border transition-all duration-300 [border-color:var(--brand-color)] [color:var(--brand-color)] hover:bg-[var(--brand-color)] hover:text-white hover:-translate-y-0.5"
  >
    {children}
  </a>
);

export default function Footer() {
  return (
    <footer
      className="relative z-10 w-full bg-[rgb(243,243,243)] text-[#4f5d39]"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
        
        {/* Brand Row */}
        <div className="flex flex-col gap-8 border-b border-[#4f5d39]/10 pb-12 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            
            {/* 2. Replaced <Logomark /> with the <img> element */}
            <img 
              src={logo} 
              alt="STUDIO DNA Logo"
              className="h-22 -ml-7 w-auto shrink-0 object-contain" 
            />
            <p className="text-[#4f5d39] -ml-8">+</p>
             <img 
              src={logo2} 
              alt="STUDIO DNA Logo"
              className="h-20 -ml-4 mt-2 w-auto shrink-0 object-contain" 
            />

            <div>
              <div
                className="text-2xl tracking-tight text-[#4f5d39]"
                style={{ fontFamily: "'serif'" }}
              >
                STUDIO DNA
              </div>
              <div
                className="text-[11px] tracking-[0.25em] text-[#e97100] uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                A Subsidiary Studio
              </div>
               <div
                className="text-2xl tracking-tight text-[#4f5d39]"
                style={{ fontFamily: "'serif'" }}
              >
                OUTLINE ARCHITECTS
              </div>
            </div>
          </div>

          {/* Real Colorful Social Icons */}
          <div className="flex items-center gap-3">
            <SocialIcon label="Facebook" href="#" activeColor="#1877F2">
              <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
                <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.86c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z" />
              </svg>
            </SocialIcon>
            <SocialIcon label="Instagram" href="#" activeColor="#E1306C">
              <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
                <path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.89 1.11 1.15 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 01-1.15 1.77 4.9 4.9 0 01-1.77 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 01-1.77-1.15 4.9 4.9 0 01-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 014.45 2.53c.64-.25 1.37-.42 2.43-.47C7.94 2.01 8.28 2 11 2h1zm0 1.8h-.96c-2.67 0-2.99.01-4.04.06-.97.04-1.5.2-1.85.34-.46.18-.79.4-1.14.75-.35.35-.57.68-.75 1.14-.14.35-.3.88-.34 1.85-.05 1.05-.06 1.37-.06 4.04s.01 2.99.06 4.04c.04.97.2 1.5.34 1.85.18.46.4.79.75 1.14.35.35.68.57 1.14.75.35.14.88.3 1.85.34 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.97-.04 1.5-.2 1.85-.34.46-.18.79-.4 1.14-.75.35-.35.57-.68.75-1.14.14-.35.3-.88.34-1.85.05-1.05.06-1.37.06-4.04s-.01-2.99-.06-4.04c-.04-.97-.2-1.5-.34-1.85a3.1 3.1 0 00-.75-1.14 3.1 3.1 0 00-1.14-.75c-.35-.14-.88-.3-1.85-.34-1.05-.05-1.37-.06-4.04-.06zM12 6.86A5.14 5.14 0 1112 17.14 5.14 5.14 0 0112 6.86zm0 1.8a3.34 3.34 0 100 6.68 3.34 3.34 0 000-6.68zm5.34-2a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
              </svg>
            </SocialIcon>
            <SocialIcon label="Pinterest" href="#" activeColor="#BD081C">
              <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.64 7.85 6.35 9.3-.09-.79-.17-2 .03-2.86.19-.78 1.22-4.99 1.22-4.99s-.31-.63-.31-1.55c0-1.45.84-2.54 1.89-2.54.89 0 1.32.67 1.32 1.47 0 .9-.57 2.24-.87 3.48-.25 1.04.52 1.89 1.55 1.89 1.86 0 3.29-1.96 3.29-4.79 0-2.5-1.8-4.25-4.36-4.25-2.97 0-4.71 2.23-4.71 4.53 0 .9.34 1.86.78 2.38.09.1.1.19.07.3l-.29 1.16c-.05.19-.15.24-.35.14-1.3-.6-2.11-2.49-2.11-4.01 0-3.27 2.38-6.28 6.86-6.28 3.6 0 6.4 2.57 6.4 6 0 3.58-2.26 6.46-5.39 6.46-1.05 0-2.04-.55-2.38-1.19l-.65 2.47c-.23.9-.87 2.02-1.3 2.71.98.3 2.02.47 3.1.47 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
              </svg>
            </SocialIcon>
            <SocialIcon label="WhatsApp" href="#" activeColor="#25D366">
              <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
                <path d="M17.47 14.38c-.28-.14-1.67-.82-1.93-.92-.26-.1-.45-.14-.64.14-.19.28-.73.92-.9 1.11-.16.19-.33.21-.61.07-.28-.14-1.18-.43-2.24-1.38-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.47.1-.19.05-.35-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49-.17-.01-.36-.01-.55-.01-.19 0-.5.07-.76.35-.26.28-1 .98-1 2.38 0 1.4 1.02 2.76 1.16 2.95.14.19 2 3.05 4.84 4.28.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.11.55-.08 1.67-.68 1.9-1.34.24-.66.24-1.22.17-1.34-.07-.12-.26-.19-.54-.33zM12.02 2C6.5 2 2 6.48 2 12c0 1.85.5 3.58 1.38 5.07L2 22l5.08-1.33A9.96 9.96 0 0012.02 22C17.53 22 22 17.52 22 12S17.53 2 12.02 2zm0 18.06c-1.65 0-3.2-.46-4.52-1.25l-.32-.19-3.02.79.81-2.94-.21-.31A8.03 8.03 0 014 12c0-4.42 3.6-8.02 8.02-8.02 4.42 0 8.02 3.6 8.02 8.02 0 4.42 3.6 8.06-8.02 8.06z" />
              </svg>
            </SocialIcon>
          </div>
        </div>

        {/* Description - Centered Middle of Page */}
        <div className="border-b border-[#4f5d39]/10 py-12">
          <p
            className="mx-auto max-w-6xl mr-10 text-left  text-[15px] leading-[1.9] text-[#4f5d39]"
            style={{ fontFamily: "'serif', sans-serif" }}
          >
            STUDIO DNA provides comprehensive services in architecture, planning &amp;
            engineering, interior &amp; landscape design for both public and private
            sector covering residential, commercial, institutional &amp; industrial
            projects as well as renovations and landmark restoration projects. We are
            focused to provide an efficient and complete design, build and supply
            service to our valuable clients.
          </p>
        </div>

        {/* Locations */}
        <div className="grid grid-cols-1 gap-12 py-12 sm:grid-cols-2">
          <div>
            <div
              className="mb-4 flex items-center gap-2 text-[11px] tracking-[0.25em] text-[#e97100]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <span>01</span>
              <span>—</span>
              <span>STUDIO DNA</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-[#4f5d39]/85">
              <MapPin size={16} className="mt-0.5 shrink-0 text-[#e97100]" />
              <span>
                House 42, Road 11, Baridhara,
                <br />
                Dhaka 1212, Bangladesh
              </span>
            </div>
            <div className="mt-3 flex items-center gap-3 text-sm text-[#4f5d39]">
              <Phone size={16} className="shrink-0 text-[#e97100]" />
              <a href="tel:+8801711000000" className="transition-colors hover:text-[#e97100]">
                +880 1711-000 000
              </a>
            </div>
            {/* Studio DNA Email with Horizontal Alignment Fix */}
            <div className="mt-2 flex items-center gap-3 text-sm text-[#4f5d39]">
              <Mail size={16} className="shrink-0 text-[#e97100]" />
              <a href="mailto:info@studiodna.com" className="transition-colors hover:text-[#e97100]">
                info@studiodna.com
              </a>
            </div>
          </div>

          <div>
            <div
              className="mb-4 flex items-center gap-2 text-[11px] tracking-[0.25em] text-[#e97100]"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              <span>02</span>
              <span>—</span>
              <span>OUTLINE ARCHITECTS</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-[#4f5d39]">
              <MapPin size={16} className="mt-0.5 shrink-0 text-[#e97100]" />
              <span>
                Level 6, Chartered Tower, GEC Circle,
                <br />
                Chattogram 4000, Bangladesh
              </span>
            </div>
            <div className="mt-3 flex items-center gap-3 text-sm text-[#4f5d39]">
              <Phone size={16} className="shrink-0 text-[#e97100]" />
              <a href="tel:+8801811000000" className="transition-colors hover:text-[#e97100]">
                +880 1811-000 000
              </a>
            </div>
            {/* Outline Architects Email with Horizontal Alignment Fix */}
            <div className="mt-2 flex items-center gap-3 text-sm text-[#4f5d39]">
              <Mail size={16} className="shrink-0 text-[#e97100]" />
              <a href="mailto:contact@outlinearchitects.com" className="transition-colors hover:text-[#e97100]">
                contact@outlinearchitects.com
              </a>
            </div>
          </div>
        </div>

        {/* Relationship Note + Back to Top */}
        <div className="flex flex-col items-start justify-between gap-6 pt-8 sm:flex-row sm:items-center">
          <p
            className="max-w-xl text-xs leading-relaxed text-[#4f5d39]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            STUDIO DNA IS A DESIGN BRANCH OF OUTLINE ARCHITECTS, EXTENDING 30 YEARS OF
            PRACTICE INTO FOCUSED RESIDENTIAL &amp; BOUTIQUE WORK. © {new Date().getFullYear()}{" "}
            ALL RIGHTS RESERVED.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 text-[11px] tracking-[0.2em] text-[#4f5d39] transition-colors hover:text-[#e97100]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            BACK TO TOP
            <ArrowUp size={14} className="transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </footer>
  );
}