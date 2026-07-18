import interiorImg from '../assets/interior.png'; 
import Renovation from '../assets/renovation.jpg'; 
import Construction from '../assets/construction.png';     
import anotherImg from '../assets/renovation-remodeling.jpg';
import inspact from '../assets/inspact.png';

const About = () => {
  return (
    <section className="w-full relative z-10 min-h-screen bg-[#DCDAD4] text-[#1A1A1A] px-6 py-12 md:px-16 md:py-24 font-sans flex flex-col justify-between select-none">
      
      {/* Top Section: Philosophy & Main Architecture Image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start w-full font-serif">
        
        {/* Left Content: Brand Definition & Philosophy */}
        <div className="lg:col-span-7 flex flex-col pt-2">
          <span className="text-[10px] uppercase tracking-[0.2em] ml-1 font-bold mb-6 md:mb-8 block text-[#4f5d39]/70">
            ABOUT THE STUDIO
          </span>
          
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-[30px] font-normal leading-[1.25] md:leading-[1.15] tracking-normal max-w-[640px] text-left md:text-justify subpixel-antialiased text-[#4f5d39]">
            <span className="font-semibold text-[#e66f00]">Studio DNA</span> is an architectural practice where every project is shaped through proportion, light, texture, and spatial balance. we help you uncover exactly how you want to live and what your space needs to become. We don't just hand over blueprints—our dedicated team works continuously by your side, guiding your project from the very first spark of an idea all the way through the final build.    
          </h2>
        </div>

        {/* Right Content: Main Architecture Image */}
        <div className="lg:col-span-5 w-full flex justify-end mt-4 lg:mt-0">
          <div className="w-full aspect-[16/10] sm:aspect-[4/3] lg:aspect-[5/4] overflow-hidden shadow-sm">
            <img 
              src={Renovation} 
              alt="Studio DNA Architecture Project" 
              className="w-full h-full object-cover grayscale-[15%]"
            />
          </div>
        </div>

      </div>

      {/* Middle Section: Side-by-Side Images (Three images total) */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mt-12 md:mt-16 lg:mt-12 items-end">
        
        {/* Middle Left: Interior Portrait Image */}
        <div className="md:col-span-1 lg:col-span-3">
          <div className="w-full aspect-[4/5] overflow-hidden shadow-sm">
            <img 
              src={interiorImg} 
              alt="Studio DNA Interior Detail" 
              className="w-full h-full object-cover grayscale"
            />
          </div>
        </div>

        {/* Middle Center: Landscape Image */}
        <div className="md:col-span-1 lg:col-span-5">
          <div className="w-full aspect-[16/10] overflow-hidden shadow-sm">
            <img 
              src={Construction} 
              alt="Studio DNA Landscape View" 
              className="w-full h-full object-cover grayscale-[10%]"
            />
          </div>
        </div>

        {/* Middle Right: Third Image */}
        <div className="md:col-span-2 lg:col-span-4">
          <div className="w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[4/3] overflow-hidden shadow-sm">
            <img 
              src={anotherImg} 
              alt="Studio DNA Additional Detail" 
              className="w-full h-full object-cover grayscale-[5%]"
            />
          </div>
        </div>

      </div>

      {/* Final Section: Full Width Hero Image */}
      <div className="w-full mt-12 md:mt-16 lg:mt-12">
        <div className="w-full aspect-[16/9] sm:aspect-[16/7] md:aspect-[21/9] overflow-hidden shadow-sm">
          <img 
            src={inspact} 
            alt="Studio DNA Panoramic View" 
            className="w-full h-full object-cover grayscale-[5%]"
          />
        </div>
      </div>

    </section>
  );
};

export default About;