import React from "react";

const Meet = () => {
  // Sample Data for Architects (Replace images and details as needed)
  const architects = [
    {
      name: "Elena Rostova",
      role: "Principal Architect",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Marcus Vance",
      role: "Lead Sustainable Designer",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
    },
    {
      name: "Aria Takahashi",
      role: "Urban Planner & Partner",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=900",
    },
  ];

  return (
    <section className="relative z-10 -mt-20 mb-20 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 py-20 bg-white text-neutral-800 space-y-24">
     
      {/* 1. Meet Our Architects Section */}
      <div className="space-y-6">
        {/* Header: Made tighter and smaller */}
        <div className="text-center md:text-left">
          <span className="text-[10px] font-bold tracking-widest uppercase text-[#e97100]">
            The Minds Behind The Vision
          </span>
          <h3 className="text-xl md:text-4xl font-serif font-medium uppercase mt-1 text-[#4f5d39]">
            Consult Our Architects
          </h3>
                <hr className="border-neutral-200 mb-8 mt-1.5" />
        </div>

        {/* Grid & Cards: Made smaller, tight gaps, square images */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
          {architects.map((arch, index) => (
            <div key={index} className="group overflow-hidden max-w-[290px]">
              {/* Changed from 3/4 portrait to a compact square */}
              <div className="aspect-square overflow-hidden bg-neutral-100 grayscale-50 hover:grayscale-0 transition-all duration-500 ease-in-out">
                <img
                  src={arch.image}
                  alt={arch.name}
                  className="w-full h-85 object-cover transform group-hover:scale-105 transition duration-500"
                />
              </div>
              {/* Tighter text spacing and smaller fonts */}
              <div className="mt-2 space-y-0.5">
                <h4 className="text-base font-serif font-medium text-[#4f5d39] leading-tight">
                  {arch.name}
                </h4>
                <p className="text-[11px] tracking-wide text-neutral-500 uppercase">
                  {arch.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-neutral-200" />

      {/* 2. Trust & Consultation Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Attention & Trust Building */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-8">
          <span className="text-xs font-bold tracking-widest uppercase text-[#e97100]">
            Let's Build Together
          </span>
          <h3 className="text-3xl md:text-3xl text-[#4f5d39] font-serif font-medium uppercase leading-tight">
            From Imagining To Real Concrete Form.
          </h3>
          <p className="text-neutral-600 leading-relaxed">
            Great architecture doesn't start with blueprints; it starts with a
            conversation. We pride ourselves on being completely approachable,
            transparent, and genuinely excited about your ideas. No rigid
            formalities—just a friendly chat over coffee to see how we can bring
            your dream project to life.
          </p>

          {/* Trust Badges / Highlights */}
          <div className="space-y-3 pt-4">
            <div className="flex items-center space-x-3">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#aab992]/20 flex items-center justify-center text-[#aab992] font-bold text-xs">
                ✓
              </span>
              <span className="text-sm font-medium text-neutral-700">
                Zero obligation, 100% collaborative discovery call.
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#aab992]/20 flex items-center justify-center text-[#aab992] font-bold text-xs">
                ✓
              </span>
              <span className="text-sm font-medium text-neutral-700">
                Direct access to lead architects from day one.
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Google Calendar Booking Embed */}
        <div className="lg:col-span-7 -mt-10 bg-neutral-50 p-4 sm:p-6 rounded-2xl border border-neutral-100 shadow-sm">
          <div className="mb-4">
            <h4 className="font-serif text-lg font-medium text-neutral-900">
              Select a Date & Time
            </h4>
            <p className="text-xs text-neutral-500">
              Pick a slot below that works perfectly for your schedule.
            </p>
          </div>

          {/* Google Calendar Iframe container */}
          <div className="w-full aspect-[4/3] min-h-[450px] overflow-hidden bg-white rounded-xl border border-neutral-200">
            {/* 
                IMPORTANT: Replace the URL inside src with your actual Google Calendar public/appointment embed link.
                To get this link: Google Calendar Settings -> Settings for my calendars -> Integrate calendar -> Embed code / Public URL.
            */}
            <iframe
              src="https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FNew_York"
              style={{ border: 0 }}
              className="w-full h-full"
              frameBorder="0"
              scrolling="no"
              title="Google Calendar Booking"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Meet;