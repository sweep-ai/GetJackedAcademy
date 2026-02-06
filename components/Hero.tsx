"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

interface HeroProps {
  onQuizClick: () => void;
}

export default function Hero({ onQuizClick }: HeroProps) {
  const [isMuted, setIsMuted] = useState(true); // Start muted for autoplay compatibility
  const [showUnmuteButton, setShowUnmuteButton] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const videoId = "VZ6oZ9VfS00";
  
  // Start with muted autoplay (most reliable across browsers)
  const videoSrc = `https://www.youtube.com/embed/${videoId}?controls=1&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1&autoplay=1&mute=1&loop=0&enablejsapi=1`;
  
  // Attempt to unmute after a short delay if user has interacted with page
  useEffect(() => {
    const handleUserInteraction = () => {
      // After user interaction, try to unmute
      setTimeout(() => {
        if (iframeRef.current && !isMuted) {
          // Try to send unmute command via postMessage
          iframeRef.current.contentWindow?.postMessage(
            JSON.stringify({
              event: 'command',
              func: 'unMute',
              args: []
            }),
            'https://www.youtube.com'
          );
        }
      }, 1000);
    };

    // Listen for any user interaction
    const events = ['click', 'touchstart', 'keydown'];
    events.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { once: true });
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleUserInteraction);
      });
    };
  }, [isMuted]);
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-gray-600 rotate-45"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-gray-600 rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-gray-800"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-0">
        <div className="text-center mb-8">
          <div className="mb-6 flex flex-col items-center">
            <div className="mb-4 sm:mb-6">
              <Image
                src="/GetJackedLogo1.png"
                alt="Get Jacked Academy"
                width={320}
                height={320}
                className="object-contain mx-auto w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px]"
                priority
              />
            </div>

            <div className="flex items-center justify-center gap-2 sm:gap-6 mb-3 px-2">
              <div className="h-px w-8 sm:w-24 bg-gradient-to-r from-transparent to-gray-600"></div>
              <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-400 leading-tight">Battle-Tested. Results-Driven.</span>
              <div className="h-px w-8 sm:w-24 bg-gradient-to-l from-transparent to-gray-600"></div>
            </div>
          </div>
        
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
            Protocols proven in the field. Refined through execution. Delivering results that speak for themselves.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
          <button
            onClick={onQuizClick}
            className="group relative w-full sm:w-auto min-h-[64px] sm:min-h-[72px] px-10 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-gray-500 via-gray-600 to-gray-700 text-white font-bold text-lg sm:text-xl md:text-2xl uppercase tracking-wider rounded-sm overflow-hidden transition-all duration-300 active:scale-95 hover:scale-110 hover:shadow-2xl hover:shadow-gray-400/60 touch-manipulation border-2 border-gray-400 hover:border-gray-300"
          >
            <span className="relative z-10">Get A Free Protocol</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-12 group-hover:translate-x-full"></div>
          </button>
        </div>

        {/* VSL Section */}
        <div className="max-w-3xl mx-auto mb-4 sm:mb-8">
          <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-lg overflow-hidden shadow-2xl">
            {/* YouTube Embed */}
            <iframe
              ref={iframeRef}
              key="video-embed"
              className="absolute inset-0 w-full h-full"
              src={videoSrc}
              title="Video Sales Letter"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
            
            {/* Unmute Button - Show if video is muted */}
            {showUnmuteButton && isMuted && (
              <button
                onClick={() => {
                  setIsMuted(false);
                  setShowUnmuteButton(false);
                  // Reload iframe with unmuted version
                  if (iframeRef.current) {
                    iframeRef.current.src = `https://www.youtube.com/embed/${videoId}?controls=1&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1&autoplay=1&mute=0&loop=0&enablejsapi=1`;
                  }
                }}
                className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-black/80 hover:bg-black/90 border-2 border-gray-600 hover:border-gray-400 text-white font-bold text-sm sm:text-base uppercase tracking-wider rounded-sm transition-all duration-300 hover:scale-105 backdrop-blur-sm"
                aria-label="Unmute video"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M6.343 6.343l13.314 13.314M3 3l3.586 3.586m0 0L12 12m-5.414-5.414L6.343 6.343M12 12l-3.586 3.586m0 0L3 21m5.414-5.414L12 12m0 0l3.586-3.586M12 12l3.586 3.586"
                  />
                </svg>
                <span>Unmute</span>
              </button>
            )}
            
            {/* Decorative corner elements */}
            <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-gray-600 pointer-events-none z-10"></div>
            <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-gray-600 pointer-events-none z-10"></div>
            <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-gray-600 pointer-events-none z-10"></div>
            <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-gray-600 pointer-events-none z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

