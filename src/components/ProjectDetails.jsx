import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "../data/ProjectsData";
import Meet from "../pages/Meet";
import Footer from "../pages/Footer";

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((item) => item.id === id);

  // Fallback gallery images: prefer array, fallback to single image, or empty array
  const galleryImages = project?.images?.length
    ? project.images
    : project?.image
      ? [project.image]
      : [];

  // Reset scroll on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <main className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#ffffff] text-[#2C3523]">
        <h2 className="text-2xl font-serif mb-4">Project Not Found</h2>
        <Link
          to="/projects"
          className="text-xs uppercase tracking-[0.2em] font-semibold text-[#E97100] underline"
        >
          Return to Projects Index
        </Link>
      </main>
    );
  }

  // Reusable Image Component with class forwarding support
  const ImageFrame = ({ src, alt, aspectClass = "aspect-[4/3]", className = "" }) => (
    <div
      className={`relative w-full ${aspectClass} overflow-hidden group/img cursor-pointer transition-all duration-500 ease-out bg-neutral-100 rounded-sm mb-4 ${className}`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-[1s] ease-out group-hover/img:scale-105"
      />
    </div>
  );

  // Flexible layout dispatcher handling 1, 2, 3, 4, or 5+ images smoothly
  const renderProjectImages = () => {
    const count = galleryImages.length;

    if (count === 0) return null;

    // 1 Image: Large centered hero with height limit
    if (count === 1) {
      return (
        <div className="w-full flex justify-center">
          <ImageFrame
            src={galleryImages[0]}
            alt={`${project.title} Overview`}
            className="max-h-[50vh] sm:max-h-[70vh] w-auto object-contain"
          />
        </div>
      );
    }

    // 2 Images: Balanced 2-column flex container on tablet/desktop, stacked or grid on mobile
    if (count === 2) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full items-center">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="flex justify-center w-full">
              <ImageFrame
                src={img}
                alt={`${project.title} View ${idx + 1}`}
                className="max-h-[40vh] sm:max-h-[50vh] w-auto object-contain"
              />
            </div>
          ))}
        </div>
      );
    }

    // 3 Images:
    // Mobile: Image 1 takes FULL width (row 1), Images 2 & 3 share 2nd row side-by-side
    // Tablet/Desktop: Image 1 top hero, Images 2 & 3 side-by-side below
    if (count === 3) {
      return (
        <div className="w-full flex flex-col space-y-4 sm:space-y-8 items-center">
          {/* Row 1: 1st image takes full width on all screens */}
          <div className="flex justify-center w-full">
            <ImageFrame
              src={galleryImages[0]}
              alt={`${project.title} Primary View`}
              className="max-h-[45vh] sm:max-h-[60vh] w-auto object-contain"
            />
          </div>

          {/* Row 2: 2 images side-by-side (2 columns) on mobile and above */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6 w-full items-center">
            {galleryImages.slice(1).map((img, idx) => (
              <div key={idx} className="flex justify-center w-full">
                <ImageFrame
                  src={img}
                  alt={`${project.title} View ${idx + 2}`}
                  className="max-h-[30vh] sm:max-h-[45vh] w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      );
    }

    // 4 or More Images: 2-column grid
    return (
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-8 w-full items-center">
        {galleryImages.map((img, idx) => (
          <div key={idx} className="flex justify-center w-full">
            <ImageFrame
              src={img}
              alt={`${project.title} View ${idx + 1}`}
              className="max-h-[35vh] sm:max-h-[45vh] w-auto object-contain"
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <main className="fixed inset-0 z-50 overflow-y-auto bg-[#ffffff] text-[#2C3523] selection:bg-[#4F5D39] selection:text-white pt-6 sm:pt-8 pb-24 font-sans">
      {/* Top Header & Navigation */}
      <nav className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto flex items-center justify-between pb-4 sm:pb-6 border-b border-[#2C3523]/15">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="group inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] font-semibold text-[#4F5D39] hover:text-[#E97100] transition-colors cursor-pointer"
        >
          <span className="transition-transform duration-300 group-hover:-translate-x-1.5">
            ←
          </span>
          Back to Catalog
        </button>
        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] font-bold text-[#E97100] text-right">
          {project.category} {project.type ? `× ${project.type}` : ""}
        </span>
      </nav>

      {/* Main Section */}
      <section className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto pt-6 sm:pt-10 pb-12">
        <div className="w-full flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left: Text & Specifications Column */}
          <div className="w-full lg:w-[42%] lg:sticky lg:top-12 flex flex-col justify-between text-left space-y-6 mt-2 sm:mt-7">
            <div className="space-y-3 sm:space-y-4">
              <div className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.25em] sm:tracking-[0.3em] text-[#4F5D39]/60 uppercase">
                {project.category} Portfolio — {project.year}
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#4f5d39] tracking-tight leading-tight">
                {project.title}
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#2C3523]/80 font-light leading-relaxed max-w-md pb-2">
                {project.summary || project.description}
              </p>

              {project.summary && project.description && (
                <p className="font-sans text-[11px] sm:text-xs text-[#2C3523]/60 font-light leading-relaxed max-w-md pb-2">
                  {project.description}
                </p>
              )}

              {/* Technical Specifications Block */}
              <div className="space-y-3 font-sans text-xs sm:text-[13px] tracking-wide border-t border-[#2C3523]/15 pt-5 max-w-md">
                {project.location && (
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    <span className="col-span-1 font-semibold text-[#4F5D39] uppercase text-[10px] sm:text-[12px] tracking-wider">
                      Location
                    </span>
                    <span className="col-span-2 sm:col-span-3 text-[#4F5D39] font-normal uppercase break-words">
                      {project.location}
                    </span>
                  </div>
                )}

                {project.area && (
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    <span className="col-span-1 font-semibold text-[#4F5D39] uppercase text-[10px] sm:text-[12px] tracking-wider">
                      Scale
                    </span>
                    <span className="col-span-2 sm:col-span-3 uppercase text-[#4F5D39] font-normal">
                      {project.area}
                    </span>
                  </div>
                )}

                {(project.type || project.category) && (
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    <span className="col-span-1 font-semibold text-[#4F5D39] uppercase text-[10px] sm:text-[12px] tracking-wider">
                      Scope
                    </span>
                    <span className="col-span-2 sm:col-span-3 text-[#4F5D39] uppercase font-normal break-words">
                      {project.type
                        ? `${project.type} (${project.category})`
                        : project.category}
                    </span>
                  </div>
                )}

                {project.year && (
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    <span className="col-span-1 font-semibold text-[#4F5D39] uppercase text-[10px] sm:text-[12px] tracking-wider">
                      Timeline
                    </span>
                    <span className="col-span-2 sm:col-span-3 text-[#4F5D39] font-normal">
                      {project.year}
                    </span>
                  </div>
                )}
              </div>
              <hr className="text-gray-300" />
            </div>
          </div>

          {/* Right: Scaled Editorial Image Grid Column */}
          <div className="w-full lg:w-[58%]">{renderProjectImages()}</div>
        </div>
      </section>

      {/* Footer & Meet Section */}
      <div className="mt-12 sm:mt-20 -mb-25">
        <Meet />
        <div className="-mt-26">
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default ProjectDetails;






