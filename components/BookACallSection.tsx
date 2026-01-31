"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Script from "next/script";
import ScrollButton from "./ScrollButton";

declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

export default function BookACallSection() {
  const calendlyRef = useRef<HTMLDivElement>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [widgetInitialized, setWidgetInitialized] = useState(false);

  useEffect(() => {
    if (scriptLoaded && calendlyRef.current && !widgetInitialized) {
      // Clear any existing content
      if (calendlyRef.current) {
        calendlyRef.current.innerHTML = '';
      }

      // Initialize Calendly widget
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/mandevillefitness-kqti/45min?hide_event_type_details=1',
          parentElement: calendlyRef.current,
        });
        setWidgetInitialized(true);
      }
    }
  }, [scriptLoaded, widgetInitialized]);

  const handleScriptLoad = () => {
    setScriptLoaded(true);
  };

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
          ref={calendlyRef}
          style={{ minWidth: '320px', height: '600px', width: '100%' }}
          className="sm:h-[500px]"
        ></div>
        
        {/* Alternative CTA */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm mb-4">Prefer to get your protocol first?</p>
          <ScrollButton targetId="quiz-section" copy="Get Free Protocol" variant="secondary" showArrow={false} />
        </div>
      </div>

      {/* Calendly script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={handleScriptLoad}
      />
    </section>
  );
}

