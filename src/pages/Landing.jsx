const Landing = () => {
  const services = [
    {
      number: "01",
      title: "Exterior Design",
      description: "Crafting striking facades and harmonious outdoor spaces that redefine modern architecture.",
      href: "#exterior",
    },
    {
      number: "02",
      title: "Interior Design",
      description: "Bespoke internal layouts focusing on spatial fluidness, luxury finishes, and functional elegance.",
      href: "#interior",
    },
    {
      number: "03",
      title: "Renovation ?",
      description: "Breathing new life into historic or outdated structures with sensitive, high-end modernization.",
      href: "#renovation",
    },
  ];

  return (
    <section
      id="landing-details"
      className="relative z-10 min-h-screen flex flex-col items-center justify-start py-16 md:py-20 select-none bg-white text-zinc-950 w-full"
    >
      {/* 1. Professional Header Section */}
      <div className="w-full max-w-5xl mx-auto px-6 flex flex-col items-center gap-4 mb-20 text-center">
        <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#836e55]">
          Our Expertise
        </span>
        <h2 className="text-4xl md:text-4xl font-normal text-[#4f5d39] tracking-wider uppercase font-serif">
          Our Services
        </h2>
        <div className="w-12 h-[1px] bg-zinc-100 mt-2"></div>
      </div>

      {/* 2. Full-Width Vertical Premium Category Rows */}
      <div className="flex flex-col w-full border-t border-zinc-200 -mt-4">
        {services.map((service, index) => (
          <a
            key={index}
            href={service.href}
            className="group relative w-full border-b border-zinc-200 overflow-hidden transition-all duration-500 block"
          >
            {/* Elegant 10px Orange Strip Sliding up from the Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-[42px] bg-[#f5f5f5] translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 z-0" />


            {/* Elegant 10px Orange Strip Sliding up from the Bottom */}
            {/* <div className="absolute bottom-0 left-0 right-0 h-[10px] bg-[#ff9a27] translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0 z-0" /> */}

            {/* Inner Content Wrapper */}
            <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col md:flex-row md:items-center justify-between py-10 md:py-5 px-6 md:px-10 transition-transform duration-500 group-hover:scale-[0.98] ease-out">
              
              {/* Left: Number & Title */}
              <div className="flex items-baseline gap-6 md:gap-10 mb-4 md:mb-0 md:w-[380px] shrink-0 font-serif font-light">
                <span className="text-sm md:text-base text-[#718355]/70 group-hover:text-[#4f5d39] tracking-widest font-light transition-colors duration-300">
                  {service.number}
                </span>
                <h3 className="text-2xl md:text-3xl font-normal text-[#4f5d39] tracking-wide transition-colors duration-300">
                  {service.title}
                </h3>
              </div>

              {/* Middle: Short Description */}
              <div className="max-w-sm md:flex-1 mb-6 md:mb-0 text-left">
                <p className="text-sm text-[#4f5d39] font-light leading-relaxed transition-colors duration-300">
                  {service.description}
                </p>
              </div>

              {/* Right: Elegant Animated Arrow */}
              <div className="self-end md:self-center flex items-center justify-center w-10 h-10 rounded-full border border-zinc-300 text-zinc-400 group-hover:text-[#4f5d39] transition-all duration-300 transform group-hover:rotate-45 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>

            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Landing;