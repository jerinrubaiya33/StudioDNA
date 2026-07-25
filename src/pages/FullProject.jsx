import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Bashanta from "../assets/bashanta.png";
import Kindergarten from "../assets/kindergarten.png";
import Simin from "../assets/simin.png";
import HospitalImg from "../assets/hospital (1).png";
import InteriorLobby from "../assets/jb.png";
import InteriorRestaurant from "../assets/sushi.png";
import bashantaInte from "../assets/bashantaInte.png";
import AKM from "../assets/akm.png";
import Pavillion from "../assets/pavillion_20.png";
import PavillionTop from "../assets/pavillion_top_right.png";
import Shirin from "../assets/shirin.png";
import Alibaba from "../assets/alibaba-day.jpg";
import Footer from "./Footer";
import Meet from "./Meet";

const projects = [
  {
    id: "bashanta-bilash",
    type: "Exterior",
    category: "Resort",
    title: "Bashanta Bilash",
    location: "Tarabo, Kachpur, Narayangonj",
    area: "35 Bigha +",
    year: "2020-Present",
    image: Bashanta,
    summary:
      "A resort landscape composed around water, pavilions, gardens, and long-view hospitality sequences.",
  },
  {
    id: "kindergarten-madrassa",
    type: "Exterior",
    category: "Institutional",
    title: "Kindergarten Madrassa",
    location: "Purbachal, Dhaka",
    area: "22 Bigha",
    year: "2022-2024",
    image: Kindergarten,
    summary:
      "A calm learning campus shaped with shaded courts, efficient circulation, and durable architectural language.",
  },
  {
    id: "simin-complex",
    type: "Exterior",
    category: "Villa",
    title: "Simin Complex",
    location: "Nokla, Sherpur",
    area: "10 Katha",
    year: "2024",
    image: Simin,
    summary:
      "A private complex balancing residential privacy, landscape edges, and a crisp contemporary massing.",
  },
  {
    id: "bangladesh-eye-hospital",
    type: "Exterior",
    category: "Hospital",
    title: "Bangladesh Eye Hospital",
    location: "Uttara, Dhaka",
    area: "1.5 Acre",
    year: "2023",
    image: HospitalImg,
    summary:
      "A healthcare environment planned for clarity, accessibility, patient comfort, and strong civic presence.",
  },
  {
    id: "pavillion-retreat",
    type: "Exterior",
    category: "Resort",
    title: "Pavillion Retreat",
    location: "Kachpur, Narayangonj",
    area: "8,500 Sqft",
    year: "2024",
    image: Pavillion,
    summary:
      "A compact retreat project using light structures, layered roofs, and open-air gathering spaces.",
  },
  {
    id: "pavillion-view",
    type: "Exterior",
    category: "Resort",
    title: "Pavillion View",
    location: "Tarabo, Narayangonj",
    area: "12,000 Sqft",
    year: "2024",
    image: PavillionTop,
    summary:
      "A landscape-focused pavilion study designed for event flow, shade, and seasonal flexibility.",
  },
  {
    id: "shirin-villa",
    type: "Exterior",
    category: "Villa",
    title: "Shirin Villa",
    location: "Kachpur, Narayangonj",
    area: "10 Katha",
    year: "2024",
    image: Shirin,
    summary:
      "A residence and home-office proposal with a restrained facade and clear separation of public and private life.",
  },
  {
    id: "alibaba-structure",
    type: "Exterior",
    category: "Commercial",
    title: "Alibaba Structure",
    location: "Dhaka",
    area: "18,000 Sqft",
    year: "2025",
    image: Alibaba,
    summary:
      "A commercial structure study focused on visibility, pragmatic spans, and efficient construction logic.",
  },
  {
    id: "jb-apartment",
    type: "Interior",
    category: "Residential",
    title: "JB Apartment",
    location: "Dhaka",
    area: "12,000 Sqft",
    year: "2021-Present",
    image: InteriorLobby,
    summary:
      "A warm residential interior with layered lighting, composed material transitions, and calm daily-use zones.",
  },
  {
    id: "sushi-samurai",
    type: "Interior",
    category: "Restaurant",
    title: "Sushi Samurai",
    location: "Gulshan, Dhaka",
    area: "4,500 Sqft",
    year: "2023",
    image: InteriorRestaurant,
    summary:
      "A restaurant interior designed around intimate seating, crafted surfaces, and strong hospitality rhythm.",
  },
  {
    id: "bashanta-interior",
    type: "Interior",
    category: "Resort",
    title: "Bashanta Bilash Interior",
    location: "Tarabo, Kachpur, Narayangonj",
    area: "12,000 Sqft",
    year: "2021-Present",
    image: bashantaInte,
    summary:
      "Interior suites and gathering spaces for the resort, developed with earthy finishes and relaxed detail.",
  },
  {
    id: "akm-restaurant",
    type: "Interior",
    category: "Restaurant",
    title: "AKM Restaurant & Convention Center",
    location: "Gulshan, Dhaka",
    area: "4,500 Sqft",
    year: "2023",
    image: AKM,
    summary:
      "A hospitality and event interior with flexible seating, ceremonial arrival, and a polished material palette.",
  },
];

const filters = [
  "All",
  "Exterior",
  "Interior",
  "Resort",
  "Restaurant",
  "Villa",
  "Hospital",
  "Commercial",
  "Institutional",
  "Residential",
];

function FullProject() {
  const [activeFilter, setActiveFilter] = useState("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter(
      (project) =>
        project.type === activeFilter || project.category === activeFilter,
    );
  }, [activeFilter]);

  return (
    <main className="fixed inset-0 z-50 overflow-y-auto bg-[#ffffff] text-[#2C3523] selection:bg-[#4F5D39] selection:text-white pt-6 md:pt-8 pb-16 md:pb-24 font-sans">
      {/* Top Header & Navigation */}
      <nav className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#2C3523]/15">
        <Link
          to="/"
          className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#4F5D39] hover:text-[#E97100] transition-colors"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1.5">
            ←
          </span>
          Back to Home
        </Link>
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#E97100]">
          Studio DNA × Outline
        </span>
      </nav>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto pt-8 md:pt-10 pb-8 md:pb-12 border-b border-[#2C3523]/15">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 md:gap-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] font-normal text-[#E97100] mb-2 md:mb-3">
              Archive Catalog
            </p>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl text-[#4F5D39] leading-tight md:leading-none tracking-tight">
              Projects
            </h1>
          </div>
          <div className="max-w-md lg:-mt-12">
            <p className="text-xs sm:text-sm leading-relaxed text-[#2C3523]/75">
              Designing spaces with purpose—bringing together architecture, interiors, and planning through a careful understanding of context, light, and material.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto pt-6 md:pt-8">
        <div className="flex flex-col gap-4 pb-6 md:pb-8 border-b border-[#2C3523]/15">
     
          {/* Non-scrollable Wrapping Filters */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 py-1">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`group relative overflow-hidden rounded-full px-3.5 sm:px-4 py-2 sm:py-2.5 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-[#4F5D39] text-white"
                      : "bg-[#f0f0f0] text-[#e97100]"
                  }`}
                >
                  {/* Hover fill */}
                  {!isActive && (
                    <span className="absolute inset-y-0 left-0 w-0 rounded-full bg-[#4F5D39] transition-all duration-500 ease-out group-hover:w-[86%]" />
                  )}

                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    {filter}
                  </span>
                </button>
              );
            })}
          </div>

            {/* Left-Aligned Counter */}
          <div className="text-xs mt-7 sm:-mt-10 -mb-5  font-mono tracking-widest text-[#2C3523]/60">
            ({visibleProjects.length.toString().padStart(2, "0")}) Index Items
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 md:gap-y-12">
          {visibleProjects.map((project) => (
            <Link 
              to={`/projects/${project.id}`} 
              key={project.id}
              className="group flex flex-col justify-between transition-all duration-500 cursor-pointer"
            >
              <article className="w-full h-full flex flex-col justify-between">
                <div>
                  {/* Full-Bleed Image Container */}
                  <div className="relative aspect-[16/11] w-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover grayscale-[15%] transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                    />
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex gap-2">
                      <span className="bg-[#2C3523]/90 text-[#F4F1EA] text-[9px] font-bold uppercase tracking-[0.2em] px-2.5 py-1">
                        {project.type}
                      </span>
                    </div>
                  </div>

                  {/* Content Header */}
                  <div className="pt-4 md:pt-6">
                    <div className="flex items-center justify-between text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold text-[#E97100]">
                      <span>{project.category}</span>
                      <span className="font-mono text-[#2C3523]/50">
                        {project.year}
                      </span>
                    </div>

                    <h2 className="mt-2 font-serif text-xl sm:text-2xl text-[#2C3523] group-hover:text-[#4F5D39] transition-colors leading-tight">
                      {project.title}
                    </h2>

                    <p className="mt-2 sm:mt-3 text-xs leading-relaxed text-[#2C3523]/70 line-clamp-3">
                      {project.summary}
                    </p>
                  </div>
                </div>

                {/* Architectural Spec Footer */}
                <div className="mt-4 sm:mt-6 pt-4 border-t border-[#2C3523]/10 grid grid-cols-2 gap-4 text-[11px]">
                  <div>
                    <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-[#2C3523]/40">
                      Location
                    </span>
                    <span
                      className="font-medium text-[#2C3523] truncate block mt-0.5"
                      title={project.location}
                    >
                      {project.location}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[9px] font-bold uppercase tracking-[0.2em] text-[#2C3523]/40">
                      Scale
                    </span>
                    <span className="font-medium text-[#2C3523] block mt-0.5">
                      {project.area}
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
      
      <div className="mt-16 md:mt-20">
        <Meet />
        <div>
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default FullProject;