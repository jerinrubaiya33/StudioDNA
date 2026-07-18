import React, { useState, useRef, useEffect } from "react";
import archVideo from "/src/assets/arch.mp4"; 

function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  // Sync state with the actual HTML5 video element
  useEffect(() => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.play().catch((err) => {
        console.log("Video play blocked or interrupted:", err);
      });
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  const handleVideoToggle = (e) => {
    e.stopPropagation(); 
    setIsPlaying((prev) => !prev);
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
    <div 
      onClick={handleVideoToggle}
      className={`relative z-30 flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 pt-75 sm:pt-24 text-center cursor-pointer transition-colors duration-700 ease-out shadow-[0_-20px_50px_rgba(0,0,0,0.3)] 
        w-full aspect-video md:h-auto md:min-h-screen 
        -mt-20 sm:-mt-28 md:-mt-34 
        ${isPlaying ? "bg-[#3c472b]" : "bg-[#2a2c2a]"}`}
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
        loop
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate}
        className={`absolute inset-0 h-full w-full object-cover select-none transition-all duration-700 ease-out ${
          isPlaying 
            ? "scale-100 blur-0 opacity-100 brightness-100" 
            : "scale-[0.998] blur-[0px] opacity-90 brightness-80 contrast-100"
        }`}
        style={{ zIndex: -2 }}
      >
        <source src={archVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dynamic Overlay Sheet */}
      <div 
        className={`absolute inset-0 transition-opacity duration-700 pointer-events-none ${
          isPlaying ? "bg-black/20 opacity-100" : "bg-zinc-900/50 opacity-0"
        }`}
        style={{ zIndex: -1 }}
      />

      {/* Bottom Right Control Container */}
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 md:bottom-11 md:right-21 z-20 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
        {/* Pause Icon */}
        <div 
          className={`absolute p-3 sm:p-4 rounded-full backdrop-blur-md border border-white/10 text-white transition-all duration-700 ease-out shadow-lg ${
            isPlaying ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-75 translate-y-4 invisible pointer-events-none"
          }`}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="currentColor" 
            viewBox="0 0 24 24" 
            className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 hover:scale-110"
          >
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        </div>

        {/* Resume Icon */}
        <div 
          className={`absolute p-3 sm:p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white transition-all duration-700 ease-out shadow-lg ${
            isPlaying ? "opacity-0 scale-75 translate-y-4 invisible pointer-events-none" : "opacity-100 scale-100 translate-y-0 visible"
          }`}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="currentColor" 
            viewBox="0 0 24 24" 
            className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 hover:scale-110"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

    </div>
  );
}

export default Hero;