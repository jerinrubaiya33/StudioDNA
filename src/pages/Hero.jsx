
import React, { useState, useRef } from "react";
import archVideo from "/src/assets/arch.mp4"; 

function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  const handleVideoToggle = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch((err) => console.log("Video play interrupted:", err));
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const total = videoRef.current.duration;
    if (total > 0) {
      setProgress((current / total) * 100);
    }
  };

  return (
    /* FIXED: Changed to relative z-30 so it scrolls upward completely OVER the sticky Navbar layout underneath */
    <div 
      onClick={handleVideoToggle}
      className={`relative z-30 flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 -mt-32 text-center cursor-pointer transition-colors duration-700 ease-out shadow-[0_-20px_50px_rgba(0,0,0,0.3)] ${
        isPlaying ? "bg-[#3c472b]" : "bg-[#2a2c2a]"
      }`}
    >
      {/* Top Progress Bar */}
      <div className="absolute top-0 left-0 w-full bg-black/5 h-[3px] z-30">
        <div 
          className={`h-full transition-all duration-150 ease-out ${
            isPlaying ? "bg-[#ff7b00]" : "bg-[#ff7b00]/60"
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate}
        className={`absolute inset-0 h-full w-full object-cover select-none transition-all duration-700 ease-out ${
          isPlaying 
            ? "scale-100 blur-0 opacity-100 brightness-100" 
            : "scale-[1.02] blur-[8px] opacity-30 brightness-50 contrast-100"
        }`}
        style={{ zIndex: -2 }}
      >
        <source src={archVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dynamic Overlay Sheet to create the grayish tone on pause */}
      <div 
        className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
          isPlaying ? "bg-black/20 opacity-100" : "bg-zinc-900/50 opacity-0"
        }`}
        style={{ zIndex: -1 }}
      />

      {/* Architectural Typography Layout (Only visible when paused) */}
      <div 
        className={`z-10 max-w-5xl select-none px-4 transition-all duration-700 ease-out pointer-events-none ${
          isPlaying ? "opacity-0 scale-95 translate-y-4" : "opacity-100 scale-100 translate-y-0"
        }`}
      >
        <h2 
          className="text-4xl sm:text-6xl md:text-5xl lg:text-4xl leading-[1.15] uppercase font-serif font-light text-[#aab992]"
        >
          From <span className="text-[#e97100]">Imagining</span> To <span className="text-[#e97100]">Real Concrete</span> Form.<br />
          DECODING NATURE AND ARCHITECTURE FOLLOWING THE OUTLINE EMBEDDED TO OUR
          CIVILIZATION BY A MYSTERIOUS PROCESS NAMED CREATIVITY<span className="text-[#ff7b00]">.</span>
        </h2>
      </div>

      {/* Bottom Right Control Container */}
      <div className="absolute bottom-11 right-21 z-20">
        {/* Pause Icon (Only visible when PLAYING) */}
        <div 
          className={`p-4 rounded-full bg-black/10 backdrop-blur-md border border-white/10 text-white transition-all duration-700 ease-out shadow-lg  ${
            isPlaying ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-75 pointer-events-none translate-y-4 absolute inset-0"
          }`}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="currentColor" 
            viewBox="0 0 24 24" 
            className="w-6 h-6 transition-transform duration-300 hover:scale-110"
          >
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        </div>

        {/* Resume (Only visible when PAUSED) */}
        <div 
          className={`p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all duration-700 ease-out shadow-lg ${
            isPlaying ? "opacity-0 scale-75 pointer-events-none translate-y-4 absolute inset-0" : "opacity-100 scale-100 translate-y-0"
          }`}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="currentColor" 
            viewBox="0 0 24 24" 
            className="w-6 h-6 transition-transform duration-300 hover:scale-110"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

    </div>
  );
}

export default Hero;