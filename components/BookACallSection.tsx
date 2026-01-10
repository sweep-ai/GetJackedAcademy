import Image from "next/image";

export default function BookACallSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 flex justify-center">
          <Image
            src="/GetJackedLogo2.png"
            alt="Jack Mandeville"
            width={200}
            height={200}
            className="object-contain opacity-90"
          />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-300 mb-6">
          Book a Free Strategy Call
        </h2>
        <p className="text-gray-400 text-xl mb-8 max-w-2xl mx-auto">
          Ready to take your performance to the next level? Schedule a personalized consultation 
          to discuss your goals and get a custom protocol tailored to your needs.
        </p>
        
        <a
          href="/book-call"
          className="inline-block group relative px-12 py-6 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold text-xl uppercase tracking-wider rounded-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-700/50"
        >
          <span className="relative z-10">Schedule Your Call</span>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          {/* Decorative border effect */}
          <div className="absolute inset-0 border-2 border-gray-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </a>
      </div>
    </section>
  );
}

