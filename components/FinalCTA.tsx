import Image from "next/image";

interface FinalCTAProps {
  onCTAClick: () => void;
}

export default function FinalCTA({ onCTAClick }: FinalCTAProps) {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-gray-600 rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border-2 border-gray-600 rotate-12"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-6 flex justify-center">
          <Image
            src="/GetJackedLogo.png"
            alt="Get Jacked Academy"
            width={120}
            height={120}
            className="object-contain opacity-80"
          />
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Your Transformation Starts Now
        </h2>
        <p className="text-gray-400 text-xl mb-4 max-w-2xl mx-auto">
          The protocols are ready. The path is clear. The choice is yours.
        </p>
        <p className="text-gray-500 mb-12">
          Choose your battle. Begin your protocol.
        </p>

        <button
          onClick={onCTAClick}
          className="group relative px-12 py-6 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold text-xl uppercase tracking-wider rounded-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-700/50"
        >
          <span className="relative z-10">Select Your Protocol</span>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          {/* Decorative border effect */}
          <div className="absolute inset-0 border-2 border-gray-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          {/* Corner decorations on hover */}
          <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </button>
      </div>
    </section>
  );
}

