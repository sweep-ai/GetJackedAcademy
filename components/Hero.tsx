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

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="mb-6 flex flex-col items-center">
            <div className="mb-4">
              <Image
                src="/GetJackedLogo1.png"
                alt="Get Jacked Academy"
                width={200}
                height={200}
                className="object-contain mx-auto"
                priority
              />
            </div>

            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gray-600"></div>
              <span className="text-3xl font-bold text-gray-400">ACADEMY</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gray-600"></div>
            </div>
          </div>
        
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Battle-Tested Protocols forged in the fires of real-world results. No theory. No fluff. Only protocols that work.
          </p>
        </div>

        {/* VSL Section */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-lg overflow-hidden shadow-2xl">
            {/* Placeholder VSL */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 border-4 border-gray-600 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-gray-600 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <p className="text-gray-400 text-sm">Video Sales Letter</p>
                <p className="text-gray-600 text-xs mt-1">Placeholder - Replace with actual VSL</p>
              </div>
            </div>
            
            {/* Decorative corner elements */}
            <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-gray-600"></div>
            <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-gray-600"></div>
            <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-gray-600"></div>
            <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-gray-600"></div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
          <button
            onClick={onBookCallClick}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold text-lg uppercase tracking-wider rounded-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-700/50"
          >
            Book a Call
          </button>
          <button
            onClick={onQuizClick}
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold text-lg uppercase tracking-wider rounded-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-700/50"
          >
            Find Your Protocol
          </button>
        </div>
      </div>
    </section>
  );
}

