import Image from "next/image";

interface HeroProps {
  onBookCallClick: () => void;
  onQuizClick: () => void;
}

export default function Hero({ onBookCallClick, onQuizClick }: HeroProps) {
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

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
          <button
            onClick={onBookCallClick}
            className="group relative w-full sm:w-auto min-h-[56px] sm:min-h-[64px] px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 text-white font-bold text-lg sm:text-xl uppercase tracking-wider rounded-sm overflow-hidden transition-all duration-300 active:scale-95 hover:scale-110 hover:shadow-2xl hover:shadow-gray-500/60 touch-manipulation border-2 border-gray-500 hover:border-gray-400"
          >
            <span className="relative z-10">Book a Call</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-500 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          <button
            onClick={onQuizClick}
            className="w-full sm:w-auto min-h-[48px] px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold text-base sm:text-lg uppercase tracking-wider rounded-sm overflow-hidden transition-all duration-300 active:scale-95 hover:scale-105 hover:shadow-2xl hover:shadow-gray-700/50 touch-manipulation"
          >
            Get A Free Protocol
          </button>
        </div>

        {/* VSL Section */}
        <div className="max-w-3xl mx-auto mb-4 sm:mb-8">
          <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-lg overflow-hidden shadow-2xl">
            {/* YouTube Embed */}
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/VZ6oZ9VfS00?controls=0&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1&autoplay=1&mute=1&loop=0"
              title="Video Sales Letter"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
            
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

