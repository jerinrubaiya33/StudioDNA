import React from "react";

const pillars = [
  {
    num: "01",
    icon: (
      <img
        src="/src/assets/Design.png"
        alt="Design"
        className="w-9 h-9 object-contain object-left group-hover:scale-105 transition-transform duration-300"
      />
    ),
    title: "DESIGN",
    desc: "Exclusive Architectural Interior Design",
  },
  {
    num: "02",
    icon: (
      <img
        src="/src/assets/Build2.png"
        alt="Build"
        className="w-9 h-9 -mt-3 mb-2 object-contain object-left group-hover:scale-105 transition-transform duration-300"
      />
    ),
    title: "BUILD",
    desc: "Custom Construction with Premium Material",
  },
  {
    num: "03",
    icon: (
      <img
        src="/src/assets/supply.png"
        alt="Supply"
        className="w-9 h-9 object-contain object-left group-hover:scale-105 transition-transform duration-300"
      />
    ),
    title: "SUPPLY",
    desc: "Premium Material Outsourcing Strength",
  },
  {
    num: "04",
    icon: (
      <img
        src="/src/assets/commitment.png"
        alt="Commitment"
        className="w-12 h-12 -mt-2.5 object-contain object-left group-hover:scale-105 transition-transform duration-300"
      />
    ),
    title: "COMMITMENT",
    desc: "On Time Delivery with Professional Integrity",
  },
  {
    num: "05",
    icon: (
      <img
        src="/src/assets/quality.png"
        alt="Quality"
        className="w-9 h-9 object-contain object-left group-hover:scale-105 transition-transform duration-300"
      />
    ),
    title: "QUALITY",
    desc: "Assured Quality in Every Detail",
  },
  {
    num: "06",
    icon: (
      <img
        src="/src/assets/sustainability.png"
        alt="Sustainability"
        className="w-9.5 h-9.5  -mt-3.5 mb-3 object-contain object-left group-hover:scale-105 transition-transform duration-300"
      />
    ),
    title: "SUSTAINABILITY",
    desc: "Eco Friendly Solutions for Better Future",
  },
];

const Features = () => {
  return (
    <section className="relative z-10 w-full max-w-7xl mx-auto pt-8 pb-3 px-18 bg-[#ffffff] text-[#718355] overflow-hidden select-none">
      {/* Fine Blueprint Border Lines */}
      <div className="absolute inset-3 bg-[#f8f8f8] border border-[#718355]/15 pointer-events-none" />

      {/* Inner wrapper */}
      <div className="max-w-5xl -ml-2 mx-auto relative pt-6 pb-2">
        {/* Compact Header */}
        <div className="flex items-center justify-between mb-8 border-b border-[#718355]/10 pb-2">
          <span
            style={{ fontFamily: "'Jost', sans-serif" }}
            className="text-xs tracking-[0.4em] text-[#718355] uppercase font-light"
          >
            Our Pillars
          </span>
          <span
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            className="text-xs text-[#718355]/60 italic font-light"
          >
            Sequence _ 01-06
          </span>
        </div>

        {/* Desktop Horizontal Timeline Layout */}
        <div className="relative hidden md:block my-16">
          {/* Continuous Core Horizontal Axis Line */}
          <div className="absolute top-[145px] left-0 w-full h-[1px] bg-[#718355]/20" />

          {/* 6-Column Alternating Layout */}
          <div className="grid grid-cols-6 gap-4 relative z-10">
            {pillars.map(({ num, icon, title, desc }, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={num}
                  className={`group flex flex-col relative px-2 transition-all duration-300 ${
                    isEven
                      ? "justify-end h-[115px] pb-5"
                      : "justify-start h-[115px] pt-6 mt-[160px]"
                  }`}
                >
                  {/* Vertical connector pinned to axis */}
                  <div
                    className={`absolute left-2 w-[1px] bg-[#718355]/40 group-hover:bg-[#718355] transition-colors duration-300 ${
                      isEven ? "bottom-[-18px] h-6" : "top-6 h-6 -translate-y-6"
                    }`}
                  >
                    {/* Node dot sitting exactly on axis line */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 w-[7px] h-[7px] rounded-full bg-[#718355]/60 border border-[#718355]/40 group-hover:border-[#718355] group-hover:bg-[#718355] group-hover:scale-125 transition-all duration-300 ${
                        isEven ? "bottom-[-3.5px]" : "top-0 -translate-y-1/2"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-1.5 text-left">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-[#ff7b00] tracking-wider">
                        {num}
                      </span>
                      <div className="text-[#718355] transition-colors duration-300">
                        {icon}
                      </div>
                    </div>
                    <h4
                      style={{ fontFamily: "'serif', sans-serif" }}
                      className="text-[20px] font-medium tracking-[0.15em] uppercase text-[#718355]"
                    >
                      {title}
                    </h4>
                    <p
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      className="text-[#718355] text-[14px] leading-snug line-clamp-2 font-normal opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      {desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Linear Vertical Stack Layout */}
        <div className="md:hidden space-y-6 pl-4 relative border-l border-[#718355]/20 mb-4">
          {pillars.map(({ num, icon, title, desc }) => (
            <div key={num} className="group relative pl-4">
              {/* Node pointer on line */}
              <div className="absolute -left-[21px] top-1.5 w-2 h-2 rounded-full bg-white border border-[#718355]" />

              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[10px] text-[#718355]/60">
                  {num}
                </span>
                <div className="text-[#718355]/80 flex items-center justify-center">
                  {icon}
                </div>
                <h4
                  style={{ fontFamily: "'Jost', sans-serif" }}
                  className="text-sm font-medium tracking-wider uppercase text-[#718355]"
                >
                  {title}
                </h4>
              </div>
              <p
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                className="text-[#718355]/80 text-[14px]"
              >
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* Micro Footer Spec Mark */}
        <div className="w-full text-right mt-2 text-[9px] font-mono text-[#718355]/20 uppercase tracking-widest hidden md:block">
          [ fine_line_schematic_rev.02 ]
        </div>
      </div>
    </section>
  );
};

export default Features;
