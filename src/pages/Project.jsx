// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import ResortMain from '../assets/resort-main.jpg';
// import ResortTopView from '../assets/resort-top.jpg';
// import ResortGrid from '../assets/resort-grid.jpg';
// import ShirinVillaGrid from '../assets/shirin-villa.jpg';
// import InteriorMain from '../assets/resort-top.jpg';
// import InteriorView2 from '../assets/resort-top.jpg';
// import InteriorView3 from '../assets/resort-top.jpg';

// const allProjects = [
//   {
//     id: "ext-resort-1",
//     section: "exterior",
//     category: "Resort",
//     title: "PROPOSED DAY RESORT - BASHANTA BILASH",
//     location: "TARABO, KACHPUR, NARAYANGONJ.",
//     area: "35 BIGHA +",
//     timeline: "A PROJECT OF OUTLINE ARCHITECTS, 2020-PRESENT",
//     description: "An integrated multi-bigha water body landscape harmonized with modern hospitality pavilions. Designed to blur boundaries between open-air relaxation structures and organic heritage ecosystems.",
//     images: [ResortMain, ResortTopView, ResortGrid],
//     layoutType: "editorial-asymmetric"
//   },
//   {
//     id: "ext-office-1",
//     section: "exterior",
//     category: "Office",
//     title: "PROPOSED RESIDENCE & HOME OFFICE - SHIRIN VILLA",
//     location: "TARABO, KACHPUR, NARAYANGONJ.",
//     area: "10 KATHA",
//     timeline: "A PROJECT OF OUTLINE ARCHITECTS, 2024",
//     description: "A dual-purpose contemporary minimalist residential block showcasing sharp monolithic geometries juxtaposed with localized context elements.",
//     images: [ShirinVillaGrid, ResortTopView],
//     layoutType: "split-duo"
//   },
//   {
//     id: "int-office-1",
//     section: "interior",
//     category: "Office",
//     title: "PROPOSED DUPLEX INTERIOR - ELEGANT LIVING",
//     location: "BANANI, DHAKA.",
//     area: "3,800 SFT",
//     timeline: "STUDIO DNA DESIGNS, 2026",
//     description: "Curated premium interior environment prioritizing tactile materials, subtle lighting pathways, and acoustic balances tailored for upscale duplex living.",
//     images: [InteriorMain, InteriorView2],
//     layoutType: "split-duo"
//   }
// ];

// const categories = ["All", "Hospital", "Office", "Resort", "Restaurant"];

// function Project() {
//   const [exteriorFilter, setExteriorFilter] = useState("All");
//   const [interiorFilter, setInteriorFilter] = useState("All");

//   const ImageFrame = ({ src, alt, aspectClass = "aspect-[4/3]" }) => (
//     <div className={`relative w-full ${aspectClass} overflow-hidden group/img cursor-pointer transition-all duration-700 ease-out border border-[#4f5d39]/20`}>
//       <div className="absolute top-3 right-3 z-20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 pointer-events-none">
//         <div className="w-6 h-6 rounded-full border border-[#4f5d39]/30 bg-[#f4f1ea]/80 backdrop-blur-md flex items-center justify-center text-[#4f5d39] text-[10px] font-bold">
//           +
//         </div>
//       </div>
//       <img
//         src={src}
//         alt={alt}
//         className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover/img:scale-[1.03] filter brightness-[0.92] contrast-[1.05] grayscale-[40%] group-hover/img:brightness-100 group-hover/img:contrast-100 group-hover/img:grayscale-0"
//       />
//       {/* Newspaper ink tint overlay effect */}
//       <div className="absolute inset-0 bg-[#4f5d39]/5 mix-blend-multiply opacity-100 group-hover/img:opacity-0 transition-opacity duration-500 pointer-events-none" />
//     </div>
//   );

//   const renderProjectImages = (project) => {
//     switch (project.layoutType) {
//       case "editorial-asymmetric":
//         return (
//           <div className="w-full flex flex-col space-y-4">
//             <div className="max-w-[85%]">
//               <ImageFrame src={project.images[0]} alt="Primary Layout" aspectClass="aspect-[3/2]" />
//             </div>
//             <div className="grid grid-cols-12 gap-4">
//               <div className="col-span-7">
//                 <ImageFrame src={project.images[1] || project.images[0]} alt="Supporting Frame" aspectClass="aspect-[4/3]" />
//               </div>
//               <div className="col-span-5 flex items-end">
//                 <div className="w-full max-w-[90%]">
//                   <ImageFrame src={project.images[2] || project.images[0]} alt="Detail Macro" aspectClass="aspect-square" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         );
//       case "split-duo":
//         return (
//           <div className="grid grid-cols-2 gap-4 w-full items-start max-w-[90%]">
//             <div className="pt-8">
//               <ImageFrame src={project.images[0]} alt="Left Column" aspectClass="aspect-[4/5]" />
//             </div>
//             <div>
//               <ImageFrame src={project.images[1] || project.images[0]} alt="Right Column" aspectClass="aspect-[4/5]" />
//             </div>
//           </div>
//         );
//       default:
//         return (
//           <div className="w-full max-w-[85%]">
//             <ImageFrame src={project.images[0]} alt={project.title} aspectClass="aspect-[16/10]" />
//           </div>
//         );
//     }
//   };

//   const renderProjectCard = (project) => (
//     <div key={project.id} className="w-full min-w-full snap-start flex flex-col lg:flex-row gap-12 lg:gap-16 items-center group/card pt-14 pb-16 relative">
//       <div className="w-full lg:w-[45%] flex flex-col justify-between text-left space-y-6">
//         <div className="space-y-3">
//           <div className="flex items-center gap-3">
//             <span className="text-[12px] font-sans font-bold tracking-[0.4em] text-[#4f5d39] uppercase">
//              {project.category}
//             </span>
//             <div className="w-6 h-[1px] bg-[#4f5d39]/30"></div>
//           </div>
//           <h3 className="text-xl md:text-3xl font-serif font-bold text-[#4f5d39] tracking-tight leading-tight group-hover/card:text-[#4f5d39]/80 transition-colors duration-400">
//             {project.title}
//           </h3>
//           <p className="font-sans text-xs text-[#4f5d39]/80 font-light leading-relaxed max-w-sm pt-1">
//             {project.description}
//           </p>
//         </div>

//         <div className="space-y-2.5 font-sans text-[14px] tracking-wide border-t border-b border-[#4f5d39]/30 py-5 max-w-sm">
//           <div className="grid grid-cols-4 gap-1">
//             <span className="col-span-1 font-bold text-[#4f5d39] uppercase text-[11px] tracking-widest">Location</span>
//             <span className="col-span-3 text-[#4f5d39] font-normal truncate">{project.location}</span>
//           </div>
//           <div className="grid grid-cols-4 gap-1 pt-1">
//             <span className="col-span-1 font-bold text-[#4f5d39] uppercase text-[11px] tracking-widest">Scale</span>
//             <span className="col-span-3 text-[#4f5d39] font-normal">{project.area}</span>
//           </div>
//           <div className="grid grid-cols-4 gap-1 pt-1">
//             <span className="col-span-1 font-bold text-[#4f5d39] uppercase text-[11px] tracking-widest">Credits</span>
//             <span className="col-span-3 text-[#4f5d39] italic font-normal text-[11px]">{project.timeline}</span>
//           </div>
//         </div>
//       </div>

//       <div className="w-full lg:w-[55%] flex justify-end">
//         <div className="w-full max-w-md lg:max-w-lg">
//           {renderProjectImages(project)}
//         </div>
//       </div>
//     </div>
//   );

//   const getFilteredProjects = (section, filter) => {
//     return allProjects.filter(p => p.section === section && (filter === "All" || p.category === filter));
//   };

//   const exteriorProjects = getFilteredProjects("exterior", exteriorFilter);
//   const interiorProjects = getFilteredProjects("interior", interiorFilter);

//   const renderFilterNavbar = (currentFilter, section, setFilter) => (
//     <div className="flex flex-wrap justify-start items-center gap-6 text-[10px] tracking-[0.25em] font-sans uppercase my-6 border-b border-[#4f5d39]/30 pb-3">
//       {categories.map((cat) => (
//         <button
//           key={cat}
//           onClick={() => setFilter(cat)}
//           className={`relative pb-2 transition-all duration-300 font-bold ${
//             currentFilter === cat ? "text-[#4f5d39]" : "text-[#4f5d39]/40 hover:text-[#4f5d39]/70"
//           }`}
//         >
//           {cat}
//           {currentFilter === cat && (
//             <span className="absolute bottom-[-1px] left-0 w-full h-[1.5px] bg-[#4f5d39]" />
//           )}
//         </button>
//       ))}
//     </div>
//   );

//   const renderSectionHeading = (indexStr, title) => (
//     <div className="w-full flex flex-col md:flex-row md:items-end justify-between border-b-2 border-[#4f5d39] pb-4">
//       <div className="space-y-0.5">
//         <span className="text-[10px] font-sans tracking-[0.4em] text-[#4f5d39]/70 font-bold uppercase block">
//           Portfolio Index — {indexStr}
//         </span>
//         <h2 className="text-2xl md:text-4xl font-serif font-black tracking-tight text-[#4f5d39] lowercase first-letter:uppercase">
//           {title}
//         </h2>
//       </div>
//       <span className="text-[10px] font-sans tracking-[0.2em] text-[#4f5d39]/70 font-bold mt-1 md:mt-0 uppercase">
//         [ 30 Years Archive ]
//       </span>
//     </div>
//   );

//   const renderExploreLink = (to, label) => (
//     <div className="pt-6 flex justify-end">
//       <Link
//         to={to}
//         className="group/link inline-flex items-center gap-4 text-[10px] font-sans tracking-[0.25em] font-bold text-[#4f5d39]/80 uppercase transition-colors duration-300 hover:text-[#4f5d39]"
//       >
//         <span className="relative py-1">
//           {label}
//           <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#4f5d39] group-hover/link:w-full transition-all duration-300" />
//         </span>
//         <span className="transition-transform duration-300 group-hover/link:translate-x-2 text-sm">&rarr;</span>
//       </Link>
//     </div>
//   );

//   const RenderProjectTrack = ({ projects }) => (
//     <div className="relative w-full group/track">
//       {/* Floating dynamic newspaper edge helper bar */}
//       {projects.length > 1 && (
//         <div className="absolute right-0 top-1/2 -translate-y-1/2 z-30 pointer-events-none flex flex-col items-center gap-1 text-[9px] font-sans font-bold tracking-[0.4em] text-[#4f5d39]/80 uppercase select-none bg-gradient-to-l from-[#f4f1ea] -mr-17 via-[#f4f1ea]/95 to-transparent pl-12 pr-4 py-8 rounded-l-md">
//           <span className="animate-bounce text-base tracking-normal font-light">&rarr;</span>
//           <span className="writing-mode-vertical text-[8px] tracking-[0.2em] opacity-80 pt-1">Next Works</span>
//         </div>
//       )}

//       <div className="w-full overflow-x-auto scrollbar-none snap-x snap-mandatory flex scroll-smooth border-b border-[#4f5d39]/20">
//         {projects.map((project) => renderProjectCard(project))}
//       </div>
//     </div>
//   );

//   return (
//     <section id="projects" className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-28 bg-[#f4f1ea] space-y-36 overflow-hidden z-20 transition-colors duration-500">

//       {/* 01. EXTERIOR ARCHITECTURE */}
//       <div className="space-y-2">
//         {renderSectionHeading("01", "Exterior structures")}
//         {renderFilterNavbar(exteriorFilter, "exterior", setExteriorFilter)}

//         {exteriorProjects.length > 0 ? (
//           <RenderProjectTrack projects={exteriorProjects} />
//         ) : (
//           <div className="text-center py-16 border-b border-[#4f5d39]/20">
//             <p className="text-xs tracking-widest text-[#4f5d39]/50 uppercase font-medium">
//               No archived structural works match this criteria.
//             </p>
//           </div>
//         )}

//         {exteriorFilter === "All" && renderExploreLink("/exterior-portfolio", "View Full Structural Index")}
//       </div>

//       {/* 02. INTERIOR ENVIRONMENTS */}
//       <div className="space-y-2">
//         {renderSectionHeading("02", "Interior environments")}
//         {renderFilterNavbar(interiorFilter, "interior", setInteriorFilter)}

//         {interiorProjects.length > 0 ? (
//           <RenderProjectTrack projects={interiorProjects} />
//         ) : (
//           <div className="text-center py-16 border-b border-[#4f5d39]/20">
//             <p className="text-xs tracking-widest text-[#4f5d39]/50 uppercase font-medium">
//               No curated space works match this criteria.
//             </p>
//           </div>
//         )}

//         {interiorFilter === "All" && renderExploreLink("/interior-portfolio", "View Full Interior Archive")}
//       </div>
//     </section>
//   );
// }

// export default Project;


























// import React, { useState, useRef } from 'react';
// import { Link } from 'react-router-dom';
// import ResortMain from '../assets/resort-main.jpg';
// import ResortTopView from '../assets/resort-top.jpg';
// import ResortGrid from '../assets/resort-grid.jpg';
// import ShirinVillaGrid from '../assets/shirin-villa.jpg';
// import InteriorMain from '../assets/resort-top.jpg';
// import InteriorView2 from '../assets/resort-top.jpg';

// const allProjects = [
//   {
//     id: "ext-resort-1",
//     section: "exterior",
//     category: "Resort",
//     title: "PROPOSED DAY RESORT - BASHANTA BILASH",
//     location: "TARABO, KACHPUR, NARAYANGONJ.",
//     area: "35 BIGHA +",
//     timeline: "OUTLINE ARCHITECTS, 2020-PRESENT",
//     description: "An integrated multi-bigha water body landscape harmonized with modern hospitality pavilions. Designed to blur boundaries between open-air relaxation structures and organic heritage ecosystems.",
//     images: [ResortMain, ResortTopView, ResortGrid],
//     layoutType: "editorial-asymmetric"
//   },
//   {
//     id: "ext-office-1",
//     section: "exterior",
//     category: "Office",
//     title: "PROPOSED RESIDENCE & HOME OFFICE - SHIRIN VILLA",
//     location: "TARABO, KACHPUR, NARAYANGONJ.",
//     area: "10 KATHA",
//     timeline: "OUTLINE ARCHITECTS, 2024",
//     description: "A dual-purpose contemporary minimalist residential block showcasing sharp monolithic geometries juxtaposed with localized context elements.",
//     images: [ShirinVillaGrid, ResortTopView],
//     layoutType: "split-duo"
//   },
//   {
//     id: "int-office-1",
//     section: "interior",
//     category: "Office",
//     title: "PROPOSED DUPLEX INTERIOR - ELEGANT LIVING",
//     location: "BANANI, DHAKA.",
//     area: "3,800 SFT",
//     timeline: "STUDIO DNA DESIGNS, 2026",
//     description: "Curated premium interior environment prioritizing tactile materials, subtle lighting pathways, and acoustic balances tailored for upscale duplex living.",
//     images: [InteriorMain, InteriorView2],
//     layoutType: "split-duo"
//   }
// ];

// const categories = ["All", "Hospital", "Office", "Resort", "Restaurant"];

// function Project() {
//   const [exteriorFilter, setExteriorFilter] = useState("All");
//   const [interiorFilter, setInteriorFilter] = useState("All");

//   const ImageFrame = ({ src, alt, aspectClass = "aspect-[4/3]" }) => (
//     <div className={`relative w-full ${aspectClass} overflow-hidden group/img cursor-pointer transition-all duration-500 ease-out bg-neutral-100`}>
//       <img
//         src={src}
//         alt={alt}
//         className="w-full h-full object-cover transition-transform duration-[1s] ease-out group-hover/img:scale-105"
//       />
//     </div>
//   );

//   const renderProjectImages = (project) => {
//     switch (project.layoutType) {
//       case "editorial-asymmetric":
//         return (
//           <div className="w-full flex flex-col space-y-4 max-w-[85%] ml-auto">
//             <div className="w-full">
//               <ImageFrame src={project.images[0]} alt="Primary Layout" aspectClass="aspect-[16/10]" />
//             </div>
//             <div className="grid grid-cols-12 gap-4">
//               <div className="col-span-7">
//                 <ImageFrame src={project.images[1] || project.images[0]} alt="Supporting Frame" aspectClass="aspect-[4/3]" />
//               </div>
//               <div className="col-span-5">
//                 <ImageFrame src={project.images[2] || project.images[0]} alt="Detail Macro" aspectClass="aspect-square" />
//               </div>
//             </div>
//           </div>
//         );
//       case "split-duo":
//         return (
//           <div className="grid grid-cols-2 gap-4 w-full max-w-[80%] ml-auto">
//             <div className="mt-4">
//               <ImageFrame src={project.images[0]} alt="Left Column" aspectClass="aspect-[3/4]" />
//             </div>
//             <div>
//               <ImageFrame src={project.images[1] || project.images[0]} alt="Right Column" aspectClass="aspect-[3/4]" />
//             </div>
//           </div>
//         );
//       default:
//         return (
//           <div className="w-full max-w-[85%] ml-auto">
//             <ImageFrame src={project.images[0]} alt={project.title} aspectClass="aspect-[16/10]" />
//           </div>
//         );
//     }
//   };

//   const renderProjectCard = (project) => (
//     <div key={project.id} className="w-full min-w-full snap-start flex flex-col lg:flex-row gap-12 lg:gap-16 items-start pt-4 pb-10">
//       {/* Text Column */}
//       <div className="w-full lg:w-[50%] flex flex-col justify-between text-left space-y-6">
//         <div className="space-y-4">
//           <div className="text-[11px] font-sans font-semibold tracking-[0.3em] text-[#4f5d39]/60 uppercase">
//              {project.category}
//           </div>

//           <h3 className="text-2xl md:text-2xl font-light font-serif tracking-tight text-[#4f5d39] leading-tight pt-1">
//             {project.title}
//           </h3>

//           <p className="font-sans text-sm text-[#4f5d39]/80 font-light leading-relaxed max-w-md pb-4">
//             {project.description}
//           </p>

//           {/* Technical Info under title and description */}
//           <div className="space-y-2 font-sans text-[14px] tracking-wide border-t border-neutral-200/60 pt-5 max-w-md">
//             <div className="grid grid-cols-4 gap-2">
//               <span className="col-span-1 font-medium text-[#4f5d39]/50 uppercase text-[12px] tracking-wider">Location</span>
//               <span className="col-span-3 text-[#4f5d39] font-light truncate">{project.location}</span>
//             </div>
//             <div className="grid grid-cols-4 gap-2">
//               <span className="col-span-1 font-medium text-[#4f5d39]/50 uppercase text-[12px] tracking-wider">Scale</span>
//               <span className="col-span-3 text-[#4f5d39] font-light">{project.area}</span>
//             </div>
//             <div className="grid grid-cols-4 gap-2">
//               <span className="col-span-1 font-medium text-[#4f5d39]/50 uppercase text-[12px] tracking-wider">Credits</span>
//               <span className="col-span-3 text-[#4f5d39] font-light text-[14px]">{project.timeline}</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Smaller Image Column */}
//       <div className="w-full lg:w-[50%]">
//         {renderProjectImages(project)}
//       </div>
//     </div>
//   );

//   const getFilteredProjects = (section, filter) => {
//     return allProjects.filter(p => p.section === section && (filter === "All" || p.category === filter));
//   };

//   const exteriorProjects = getFilteredProjects("exterior", exteriorFilter);
//   const interiorProjects = getFilteredProjects("interior", interiorFilter);

//   const renderFilterNavbar = (currentFilter, section, setFilter) => (
//     <div className="flex flex-wrap justify-start items-center gap-8 text-[11px] tracking-[0.2em] font-sans uppercase my-6 border-b border-neutral-200/60 pb-3">
//       {categories.map((cat) => (
//         <button
//           key={cat}
//           onClick={() => setFilter(cat)}
//           className={`relative pb-3 transition-all duration-300 font-medium ${
//             currentFilter === cat ? "text-[#4f5d39] font-semibold" : "text-[#4f5d39]/50 hover:text-[#4f5d39]/80"
//           }`}
//         >
//           {cat}
//           {currentFilter === cat && (
//             <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-[#4f5d39]" />
//           )}
//         </button>
//       ))}
//     </div>
//   );

//   const renderSectionHeading = (indexStr, title) => (
//     <div className="w-full flex flex-col md:flex-row md:items-baseline justify-between border-b border-neutral-300 pb-4">
//       <div className="flex items-baseline gap-4">
//         <span className="text-xs font-mono tracking-wider text-[#4f5d39]/60">
//           {indexStr}
//         </span>
//         <h2 className="text-2xl md:text-3xl font-light tracking-tight text-[#4f5d39]">
//           {title}
//         </h2>
//       </div>
//     </div>
//   );

//   const renderExploreLink = (to, label) => (
//     <div className="pt-2 flex justify-end">
//       <Link
//         to={to}
//         className="group/link inline-flex items-center gap-3 text-[11px] font-sans tracking-[0.2em] font-semibold text-[#4f5d39]/70 uppercase transition-colors duration-300 hover:text-[#4f5d39]"
//       >
//         <span className="relative py-1">
//           {label}
//           <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#4f5d39] group-hover/link:w-full transition-all duration-300" />
//         </span>
//         <span className="transition-transform duration-300 group-hover/link:translate-x-1 text-xs">&rarr;</span>
//       </Link>
//     </div>
//   );

//   const RenderProjectTrack = ({ projects }) => {
//     const [activeIndex, setActiveIndex] = useState(0);
//     const scrollContainerRef = useRef(null);

//     const handleScroll = (e) => {
//       const width = e.target.offsetWidth;
//       if (width > 0) {
//         const index = Math.round(e.target.scrollLeft / width);
//         setActiveIndex(index);
//       }
//     };

//     const scrollToIndex = (direction) => {
//       if (!scrollContainerRef.current) return;
//       const width = scrollContainerRef.current.offsetWidth;
//       const currentScroll = scrollContainerRef.current.scrollLeft;

//       const targetScroll = direction === 'next'
//         ? currentScroll + width
//         : currentScroll - width;

//       scrollContainerRef.current.scrollTo({
//         left: targetScroll,
//         behavior: 'smooth'
//       });
//     };

//     return (
//       <div className="relative w-full group/track space-y-4">
//         {/* Navigation Elements Bar */}
//         {projects.length > 1 && (
//           <div className="flex items-center justify-between py-2 border-b border-neutral-100">
//             {/* Minimal Progress Bars */}
//             <div className="flex gap-2">
//               {projects.map((_, idx) => (
//                 <div
//                   key={idx}
//                   className={`h-0.5 rounded-full transition-all duration-300 ${
//                     activeIndex === idx ? "w-8 bg-[#4f5d39]" : "w-2 bg-[#4f5d39]/20"
//                   }`}
//                 />
//               ))}
//             </div>

//             {/* Slider Action Icons (Arrows) */}
//             <div className="flex items-center gap-4 text-[#4f5d39]">
//               <button
//                 onClick={() => scrollToIndex('prev')}
//                 disabled={activeIndex === 0}
//                 className={`p-1 text-lg transition-opacity duration-200 ${activeIndex === 0 ? 'opacity-20 cursor-not-allowed' : 'opacity-100 hover:opacity-75'}`}
//                 aria-label="Previous Project"
//               >
//                 &#8592;
//               </button>
//               <span className="text-[11px] font-mono tracking-widest opacity-60">
//                 {activeIndex + 1} / {projects.length}
//               </span>
//               <button
//                 onClick={() => scrollToIndex('next')}
//                 disabled={activeIndex === projects.length - 1}
//                 className={`p-1 text-lg transition-opacity duration-200 ${activeIndex === projects.length - 1 ? 'opacity-20 cursor-not-allowed' : 'opacity-100 hover:opacity-75'}`}
//                 aria-label="Next Project"
//               >
//                 &#8594;
//               </button>
//             </div>
//           </div>
//         )}

//         <div
//           ref={scrollContainerRef}
//           onScroll={handleScroll}
//           className="w-full overflow-x-auto scrollbar-none snap-x snap-mandatory flex scroll-smooth"
//         >
//           {projects.map((project) => renderProjectCard(project))}
//         </div>
//       </div>
//     );
//   };

//   return (
//     <section id="projects" className="relative w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-20 bg-white space-y-24 overflow-hidden z-20">

//       {/* 01. EXTERIOR ARCHITECTURE */}
//       <div className="space-y-4">
//         {renderSectionHeading("01", "Exterior Architecture")}
//         {renderFilterNavbar(exteriorFilter, "exterior", setExteriorFilter)}

//         {exteriorProjects.length > 0 ? (
//           <RenderProjectTrack projects={exteriorProjects} />
//         ) : (
//           <div className="text-center py-16">
//             <p className="text-sm tracking-wide text-[#4f5d39]/50 font-light">
//               No structural works match this selection.
//             </p>
//           </div>
//         )}

//         {exteriorFilter === "All" && renderExploreLink("/exterior-portfolio", "Explore Exterior Index")}
//       </div>

//       {/* 02. INTERIOR ENVIRONMENTS */}
//       <div className="space-y-4 -mt-10">
//         {renderSectionHeading("02", "Interior Design")}
//         {renderFilterNavbar(interiorFilter, "interior", setInteriorFilter)}

//         {interiorProjects.length > 0 ? (
//           <RenderProjectTrack projects={interiorProjects} />
//         ) : (
//           <div className="text-center py-16">
//             <p className="text-sm tracking-wide text-[#4f5d39]/50 font-light">
//               No interior works match this selection.
//             </p>
//           </div>
//         )}

//         {interiorFilter === "All" && renderExploreLink("/interior-portfolio", "Explore Interior Index")}
//       </div>
//     </section>
//   );
// }

// export default Project;




















// // ______________ Side by side ---------------


import React, { useState } from "react";
import { Link } from "react-router-dom";
import Bashanta from "../assets/bashanta.png";
import Kindergarten from "../assets/kindergarten.png";
import Simin from "../assets/simin.png";
import HospitalImg from "../assets/hospital (1).png";
import InteriorLobby from "../assets/jb.png";
import InteriorRestaurant from "../assets/sushi.png";
import bashantaInte from "../assets/bashantaInte.png";
import AKM from "../assets/akm.png";



const allProjects = [
  {
    id: "ext-resort-1",
    section: "exterior",
    category: "Resort",
    title: "BASHANTA BILASH",
    location: "Tarabo, Kachpur, Narayangonj",
    area: "35 Bigha +",
    timeline: "Outline Architects, 2020–Present",
    image: Bashanta,
  },
  {
    id: "ext-resort-2",
    section: "exterior",
    category: "Resort",
    title: "KIDERGARTEN MADRASSA",
    location: "Purbachal, Dhaka",
    area: "22 Bigha",
    timeline: "Outline Architects, 2022–2024",
    image: Kindergarten,
  },
  {
    id: "ext-villa-1",
    section: "exterior",
    category: "Villa",
    title: "SIMIN COMPLEX",
    location: "NOKLA, SHERPUR",
    area: "10 Katha",
    timeline: "Outline Architects, 2024",
    image: Simin,
  },
  {
    id: "ext-hospital-1",
    section: "exterior",
    category: "Hospital",
    title: "BANGLADESH EYE HOSPITAL",
    location: "Uttara, Dhaka",
    area: "1.5 Acre",
    timeline: "Outline Architects, 2023",
    image: HospitalImg,
  },
  {
    id: "int-resort-1",
    section: "interior",
    category: "Resort",
    title: "JB APARTMENT",
    location: "Tarabo, Kachpur, Narayangonj",
    area: "12,000 Sqft",
    timeline: "Outline Architects, 2021–Present",
    image: InteriorLobby,
  },
  {
    id: "int-rest-1",
    section: "interior",
    category: "Restaurant",
    title: "SUSHI SAMURAI",
    location: "Gulshan, Dhaka",
    area: "4,500 Sqft",
    timeline: "Outline Architects, 2023",
    image: InteriorRestaurant,
  },

  {
    id: "int-resort-1",
    section: "interior",
    category: "Resort",
    title: "BASHANTA BILASH",
    location: "Tarabo, Kachpur, Narayangonj",
    area: "12,000 Sqft",
    timeline: "Outline Architects, 2021–Present",
    image: bashantaInte,
  },
  {
    id: "int-rest-1",
    section: "interior",
    category: "Restaurant",
    title: "AKM RESTAURANT & CONVENTION CENTER",
    location: "Gulshan, Dhaka",
    area: "4,500 Sqft",
    timeline: "Outline Architects, 2023",
    image: AKM,
  },
];

const categories = ["All", "Hospital", "Resort", "Restaurant", "Villa"];

function ProjectCard({ project }) {
  return (
    <div className="bg-[#e7e7e7] z-10 text-[#4f5d39] p-3 md:p-4 flex flex-col select-none shadow-sm transition-transform duration-500 hover:-translate-y-1">
      {/* Title overlaps the top of the image */}
      <div className="text-center relative z-20 pointer-events-none">
        <h3 className="text-2xl md:text-4xl -mb-4 md:-mb-3.5 font-serif tracking-wide font-semibold text-[#4f5d39] drop-shadow-md">
          {project.title}
        </h3>
      </div>

      {/* Image */}
      <div className="w-full h-44 md:h-70 overflow-hidden bg-neutral-900/10">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-[center_48%] transition-transform duration-700 hover:scale-105"
        />
      </div>

      {/* Technical specs */}
      <div className="grid grid-cols-3 gap-2 border-t border-white/20 mt-3 pt-3 text-[10px] md:text-[11px] tracking-wide font-sans text-[#4f5d39] ">
        <div className="flex flex-col space-y-0.5">
          <span className="text-[#4f5d39] text-[9px] uppercase tracking-wider font-semibold">
            Location
          </span>
          <span className="font-normal leading-snug text-[#4f5d39]">{project.location}</span>
        </div>
        <div className="flex flex-col space-y-0.5 border-l border-white/20 pl-3">
          <span className="text-[#4f5d39] text-[9px] uppercase tracking-wider font-semibold">
            Scale
          </span>
          <span className="font-normal">{project.area}</span>
        </div>
        <div className="flex flex-col space-y-0.5 border-l border-white/20 pl-3">
          <span className="text-[#4f5d39] text-[9px] uppercase tracking-wider font-semibold">
            Credits
          </span>
          <span className="font-normal leading-snug">{project.timeline}</span>
        </div>
      </div>
    </div>
  );
}

function Project() {
  const [exteriorFilter, setExteriorFilter] = useState("All");
  const [interiorFilter, setInteriorFilter] = useState("All");

  const getFiltered = (section, filter) =>
    allProjects.filter(
      (p) => p.section === section && (filter === "All" || p.category === filter),
    );

  const exteriorProjects = getFiltered("exterior", exteriorFilter);
  const interiorProjects = getFiltered("interior", interiorFilter);

  // const renderFilterNavbar = (currentFilter, setFilter) => (
  //   <div className="flex z-10 flex-wrap items-center gap-6 text-[12px] tracking-wider font-sans my-6 text-neutral-500 mb-14 ">
  //     {categories.map((cat) => (
  //       <button
  //         key={cat}
  //         onClick={() => setFilter(cat)}
  //         className={`transition-colors duration-300 ${
  //           currentFilter === cat
  //             ? "text-[#4f5d39] font-medium"
  //             : "hover:text-[#4f5d39]"
  //         }`}
  //       >
  //         {cat}
  //       </button>
  //     ))}
  //   </div>
  // );
const renderFilterNavbar = (currentFilter, setFilter) => (
    <div className="flex z-10 flex-wrap items-center gap-6 text-[12px] tracking-wider font-sans mt-6 mb-2 pb-3 text-neutral-500 mb-12 border-b border-neutral-100">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setFilter(cat)}
          className={`transition-colors duration-300 ${
            currentFilter === cat
              ? "text-[#4f5d39] font-medium"
              : "hover:text-[#4f5d39]"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
  // Added extraClass parameter here
  const renderSection = (title, projects, filter, setFilter, link, linkLabel, extraClass = "") => (
    <div className={`space-y-2 z-10 ${extraClass}`}>
      <h2 className="text-4xl md:text-5xl font-serif text-[#4f5d39] tracking-wide border-b border-neutral-200 pb-3 ">
        {title}
      </h2>
      {renderFilterNavbar(filter, setFilter)}

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 border border-dashed border-neutral-200">
          <p className="text-sm text-neutral-400 font-light">
            No works match this selection.
          </p>
        </div>
      )}

      <div className="pt-4 flex justify-end">
        <Link
          to={link}
          className="inline-flex items-center gap-2 text-xs font-serif text-neutral-500 hover:text-[#4f5d39] transition-colors"
        >
          {linkLabel} <span className="text-sm">&rarr;</span>
        </Link>
      </div>
    </div>
  );

  return (
    <section
      id="projects"
      className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-12 bg-[#ffffff] space-y-16 "
    >
      {renderSection(
        "Exterior Architecture",
        exteriorProjects,
        exteriorFilter,
        setExteriorFilter,
        "/exterior-portfolio",
        "Explore more exterior projects",
        "mt-14"
      )}

      {renderSection(
        "Interior Architecture",
        interiorProjects,
        interiorFilter,
        setInteriorFilter,
        "/interior-portfolio",
        "Explore more interior projects",
      )}
    </section>
  );
}

export default Project;



















// import React, { useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import ResortMain from "../assets/resort-main.jpg";
// import ResortTopView from "../assets/resort-top.jpg";
// import ShirinVillaGrid from "../assets/resort-main.jpg";
// import HospitalImg from "../assets/resort-main.jpg";
// import InteriorLobby from "../assets/resort-main.jpg";
// import InteriorRestaurant from "../assets/resort-main.jpg";

// const allProjects = [
//   {
//     id: "ext-resort-1",
//     section: "exterior",
//     category: "Resort",
//     title: "Bashanta Bilash",
//     location: "Tarabo, Kachpur, Narayangonj",
//     area: "35 Bigha +",
//     timeline: "Outline Architects, 2020–Present",
//     image: ResortMain,
//   },
//   {
//     id: "ext-resort-2",
//     section: "exterior",
//     category: "Resort",
//     title: "Lakeside Retreat",
//     location: "Purbachal, Dhaka",
//     area: "22 Bigha",
//     timeline: "Outline Architects, 2022–2024",
//     image: ResortTopView,
//   },
//   {
//     id: "ext-villa-1",
//     section: "exterior",
//     category: "Villa",
//     title: "Shirin Villa",
//     location: "Tarabo, Kachpur, Narayangonj",
//     area: "10 Katha",
//     timeline: "Outline Architects, 2024",
//     image: ShirinVillaGrid,
//   },
//   {
//     id: "ext-hospital-1",
//     section: "exterior",
//     category: "Hospital",
//     title: "Aroggo Medical Center",
//     location: "Uttara, Dhaka",
//     area: "1.5 Acre",
//     timeline: "Outline Architects, 2023",
//     image: HospitalImg,
//   },
//   {
//     id: "int-resort-1",
//     section: "interior",
//     category: "Resort",
//     title: "Simin Group Lounge",
//     location: "Tarabo, Kachpur, Narayangonj",
//     area: "12,000 Sqft",
//     timeline: "Outline Architects, 2021–Present",
//     image: InteriorLobby,
//   },
//   {
//     id: "int-rest-1",
//     section: "interior",
//     category: "Restaurant",
//     title: "The Copper Table",
//     location: "Gulshan, Dhaka",
//     area: "4,500 Sqft",
//     timeline: "Outline Architects, 2023",
//     image: InteriorRestaurant,
//   },
// ];

// const categories = ["All", "Hospital", "Resort", "Restaurant", "Villa"];
// function ProjectCard({ project }) {
//   return (
//     <div className="snap-center shrink-0 w-full mt-5 ">
//       <div className="bg-[#4f5d39] text-white p-4 md:p-6 flex flex-col select-none shadow-sm">
//         {/* Title overlaps the top of the image */}
//         <div className="text-center relative z-20 pointer-events-none">
//           <h3 className="text-3xl md:text-7xl -mb-6 md:-mb-10 font-serif tracking-wide font-semibold text-white drop-shadow-md">
//             {project.title}
//           </h3>
//         </div>

//         {/* Image — taller now so it actually reads well */}
//         <div className="w-full h-72 md:h-[26rem] overflow-hidden bg-neutral-900/10">
//           <img
//             src={project.image}
//             alt={project.title}
//             loading="lazy"
//             className="w-full h-full object-cover object-[center_60%]"
//           />
//         </div>

//         {/* Technical specs */}
//         <div className="grid grid-cols-3 gap-3 border-t border-white/20 mt-4 pt-4 text-[11px] md:text-[12px] tracking-wide font-sans text-white/90">
//           <div className="flex flex-col space-y-0.5">
//             <span className="text-white/50 text-[10px] uppercase tracking-wider font-semibold">
//               Location
//             </span>
//             <span className="font-light leading-snug">{project.location}</span>
//           </div>
//           <div className="flex flex-col space-y-0.5 border-l border-white/20 pl-4">
//             <span className="text-white/50 text-[10px] uppercase tracking-wider font-semibold">
//               Scale
//             </span>
//             <span className="font-light">{project.area}</span>
//           </div>
//           <div className="flex flex-col space-y-0.5 border-l border-white/20 pl-4">
//             <span className="text-white/50 text-[10px] uppercase tracking-wider font-semibold">
//               Credits
//             </span>
//             <span className="font-light leading-snug">{project.timeline}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Horizontal one-at-a-time track with arrow controls + dots.
// function ProjectTrack({ projects }) {
//   const trackRef = useRef(null);
//   const [activeIndex, setActiveIndex] = useState(0);

//   const scrollToIndex = (i) => {
//     const el = trackRef.current;
//     if (!el) return;
//     const clamped = Math.max(0, Math.min(i, projects.length - 1));
//     el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });
//     setActiveIndex(clamped);
//   };

//   const handleScroll = () => {
//     const el = trackRef.current;
//     if (!el) return;
//     const i = Math.round(el.scrollLeft / el.clientWidth);
//     setActiveIndex(i);
//   };

//   if (projects.length === 0) return null;

//   return (
//     <div className="relative">
//       {projects.length > 1 && (
//         <button
//           onClick={() => scrollToIndex(activeIndex - 1)}
//           disabled={activeIndex === 0}
//           aria-label="Previous project"
//           className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 text-[#4f5d39] shadow-md disabled:opacity-0 transition-opacity"
//         >
//           &#8592;
//         </button>
//       )}

//       <div
//         ref={trackRef}
//         onScroll={handleScroll}
//         className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
//       >
//         {projects.map((p) => (
//           <ProjectCard key={p.id} project={p} />
//         ))}
//       </div>

//       {projects.length > 1 && (
//         <button
//           onClick={() => scrollToIndex(activeIndex + 1)}
//           disabled={activeIndex === projects.length - 1}
//           aria-label="Next project"
//           className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 text-[#4f5d39] shadow-md disabled:opacity-0 transition-opacity"
//         >
//           &#8594;
//         </button>
//       )}

//       {projects.length > 1 && (
//         <div className="flex justify-center gap-2 mt-4">
//           {projects.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => scrollToIndex(i)}
//               aria-label={`Go to project ${i + 1}`}
//               className={`h-1.5 rounded-full transition-all duration-300 ${
//                 i === activeIndex ? "w-6 bg-[#4f5d39]" : "w-1.5 bg-[#4f5d39]/25"
//               }`}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// function Project() {
//   const [exteriorFilter, setExteriorFilter] = useState("All");
//   const [interiorFilter, setInteriorFilter] = useState("All");

//   const getFiltered = (section, filter) =>
//     allProjects.filter(
//       (p) => p.section === section && (filter === "All" || p.category === filter),
//     );

//   const exteriorProjects = getFiltered("exterior", exteriorFilter);
//   const interiorProjects = getFiltered("interior", interiorFilter);

//   const renderFilterNavbar = (currentFilter, setFilter) => (
//     <div className="flex flex-wrap items-center gap-6 text-[12px] tracking-wider font-sans my-6 text-neutral-500 mb-8">
//       {categories.map((cat) => (
//         <button
//           key={cat}
//           onClick={() => setFilter(cat)}
//           className={`transition-colors duration-300 ${
//             currentFilter === cat
//               ? "text-[#4f5d39] font-medium"
//               : "hover:text-[#4f5d39]"
//           }`}
//         >
//           {cat}
//         </button>
//       ))}
//     </div>
//   );

//   const renderSection = (title, projects, filter, setFilter, link, linkLabel) => (
//     <div className="space-y-2">
//       <h2 className="text-4xl md:text-5xl font-serif text-[#4f5d39] tracking-wide border-b border-neutral-200 pb-3 mt-12">
//         {title}
//       </h2>
//       {renderFilterNavbar(filter, setFilter)}

//       {projects.length > 0 ? (
//         <ProjectTrack projects={projects} />
//       ) : (
//         <div className="text-center py-12 border border-dashed border-neutral-200">
//           <p className="text-sm text-neutral-400 font-light">
//             No works match this selection.
//           </p>
//         </div>
//       )}

//       <div className="pt-4 flex justify-end">
//         <Link
//           to={link}
//           className="inline-flex items-center gap-2 text-xs font-serif text-neutral-500 hover:text-[#4f5d39] transition-colors"
//         >
//           {linkLabel} <span className="text-sm">&rarr;</span>
//         </Link>
//       </div>
//     </div>
//   );

//   return (
//     <section
//       id="projects"
//       className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-12  bg-[#fefff5] space-y-16"
//     >
//       {renderSection(
//         "Exterior Architecture",
//         exteriorProjects,
//         exteriorFilter,
//         setExteriorFilter,
//         "/exterior-portfolio",
//         "Explore more exterior projects",
//       )}

//       {renderSection(
//         "Interior Architecture",
//         interiorProjects,
//         interiorFilter,
//         setInteriorFilter,
//         "/interior-portfolio",
//         "Explore more interior projects",
//       )}
//     </section>
//   );
// }

// export default Project;