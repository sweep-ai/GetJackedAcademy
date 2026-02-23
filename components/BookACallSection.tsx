"use client";

import Image from "next/image";
import ScrollButton from "./ScrollButton";

export default function BookACallSection() {

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 sm:mb-8 flex justify-center">
          <Image
            src="/GetJackedLogo2.png"
            alt="Jack Mandeville"
            width={200}
            height={200}
            className="object-contain opacity-90 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48"
          />
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-300 mb-4 sm:mb-6 px-2">
          Book a Free Strategy Call
        </h2>
        <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
          Ready to take your performance to the next level? Schedule a personalized consultation 
          to discuss your goals and get a custom protocol tailored to your needs.
        </p>
        
        {/* Calendly inline widget */}
        <div 
          className="calendly-inline-widget" 
          data-url="https://calendly.com/mandevillefitness-kqti/enhanced-optimization-strategy-call-clone"
          style={{ minWidth: '320px', height: '700px', width: '100%' }}
        ></div>
        
        {/* Alternative CTA */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm mb-4">Prefer to get your protocol first?</p>
          <ScrollButton targetId="quiz-section" copy="Get Free Protocol" variant="secondary" showArrow={false} />
        </div>
      </div>
    </section>
  );
}

