"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

const protocolData: Record<string, { 
  title: string; 
  description: string; 
  icon: string;
  painPoints: string[];
  benefits: string[];
}> = {
  "brain-function-protocol": {
    title: "Brain Function Protocol",
    description: "Unlock peak cognitive performance with battle-tested nootropic protocols",
    icon: "🧠",
    painPoints: [
      "Mental fog and lack of focus",
      "Struggling with memory and recall",
      "Feeling mentally drained and unfocused",
      "Difficulty maintaining peak cognitive performance"
    ],
    benefits: [
      "Enhanced mental clarity and focus",
      "Improved memory and cognitive recall",
      "Sustained peak performance throughout the day",
      "Sharper decision-making and mental acuity"
    ],
  },
  "fat-loss-protocol": {
    title: "Fat Loss Protocol",
    description: "Shred fat and reveal your warrior physique with proven metabolic strategies",
    icon: "🔥",
    painPoints: [
      "Stubborn fat that won't budge",
      "Plateaued weight loss despite efforts",
      "Slow metabolism and energy crashes",
      "Frustration with traditional diet and exercise"
    ],
    benefits: [
      "Accelerated fat loss and metabolic boost",
      "Breaking through weight loss plateaus",
      "Sustained energy and improved body composition",
      "Revealing the physique you've been working for"
    ],
  },
  "muscle-growth-protocol": {
    title: "Muscle Growth Protocol",
    description: "Build battle-ready muscle with anabolic protocols that deliver real results",
    icon: "⚔️",
    painPoints: [
      "Slow or stalled muscle growth",
      "Difficulty recovering between workouts",
      "Not seeing results despite consistent training",
      "Lack of strength and muscle definition"
    ],
    benefits: [
      "Accelerated muscle growth and recovery",
      "Increased strength and power output",
      "Enhanced muscle definition and size",
      "Faster recovery for more intense training"
    ],
  },
};

export default function LeadMagnetPage({
  params,
}: {
  params: { protocol: string };
}) {
  const searchParams = useSearchParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [qualification, setQualification] = useState("");

  useEffect(() => {
    const nameParam = searchParams.get("name");
    const emailParam = searchParams.get("email");
    const qualParam = searchParams.get("qualification");
    if (nameParam) setName(decodeURIComponent(nameParam));
    if (emailParam) setEmail(decodeURIComponent(emailParam));
    if (qualParam) setQualification(decodeURIComponent(qualParam));
  }, [searchParams]);

  // Suppress harmless Google Docs iframe console errors
  useEffect(() => {
    const originalError = console.error;
    const originalWarn = console.warn;
    
    console.error = (...args: any[]) => {
      const message = args[0]?.toString() || '';
      // Filter out Google Docs font loading errors
      if (
        message.includes('filesystem:https://docs.google.com') ||
        message.includes('ERR_FILE_NOT_FOUND') ||
        message.includes('persistent/docs/fonts')
      ) {
        return; // Suppress these errors
      }
      originalError.apply(console, args);
    };

    console.warn = (...args: any[]) => {
      const message = args[0]?.toString() || '';
      // Filter out permissions policy violations from Google Docs iframe
      if (
        message.includes('Potential permissions policy violation') ||
        message.includes('payment is not allowed')
      ) {
        return; // Suppress these warnings
      }
      originalWarn.apply(console, args);
    };

    return () => {
      console.error = originalError;
      console.warn = originalWarn;
    };
  }, []);

  const protocol = protocolData[params.protocol] || {
    title: "Protocol",
    description: "Your personalized protocol",
    icon: "⚔️",
    painPoints: [],
    benefits: [],
  };

  // Parse qualification data
  const qualParts = qualification.split(" | ");
  const peptideExperience = qualParts[0] || "";
  const peptideWillingness = qualParts[1] || "";
  const healthInvestment = qualParts[2] || "";

  // Map protocol slugs to Google Drive PDF file IDs (AGELESS, BUILD, SHRED)
  const protocolFileIds: Record<string, string> = {
    "fat-loss-protocol": "1Ymuhhsc_rxRPhz-43noWRO4wJi35MJg2",       // SHRED - Fat Loss and Muscle Retention
    "muscle-growth-protocol": "1ytm1R6iRBV-GrYsE3TBQIbNaxVqVrVxq",   // BUILD - Muscle Growth and Recovery
    "brain-function-protocol": "1cjUj17oCIzP8WHMlbuQ-3n0yqLB6rfRK",  // AGELESS - Longevity and Vitality
  };

  const fileId = protocolFileIds[params.protocol] || protocolFileIds["fat-loss-protocol"];
  const leadMagnetDocUrl = `https://drive.google.com/file/d/${fileId}/preview`;

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b-2 border-gray-800 py-4 sm:py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity touch-manipulation">
            <Image
              src="/GetJackedLogo.png"
              alt="Get Jacked Academy Logo"
              width={80}
              height={80}
              className="object-contain w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20"
            />
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-300 hidden sm:inline">GET JACKED ACADEMY</span>
          </a>
          <div className="text-xs sm:text-sm text-gray-400 px-2">
            Welcome, {name || "Warrior"}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-12 sm:pt-16 pb-8 sm:pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          
        </div>
      </section>

      {/* Lead Magnet Document Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <div className="text-4xl sm:text-5xl md:text-6xl mb-4 sm:mb-6">{protocol.icon}</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-300 mb-3 sm:mb-4 px-2">
              Your {protocol.title} Guide
            </h2>
            {protocol.painPoints.length > 0 && protocol.benefits.length > 0 && (
              <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
                You're dealing with {protocol.painPoints[0].toLowerCase()}. You want {protocol.benefits[0].toLowerCase()}.
              </p>
            )}
          </div>

          {/* Book a Call CTA Button */}
          <div className="text-center mb-6 sm:mb-8">
            <button
              onClick={() => {
                document.getElementById("book-strategy-call")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold text-sm sm:text-base md:text-lg uppercase tracking-wider rounded-sm overflow-hidden transition-all duration-300 active:scale-95 hover:scale-105 hover:shadow-2xl hover:shadow-gray-700/50 touch-manipulation min-h-[48px] sm:min-h-[56px]"
            >
              <span className="relative z-10">Book Your Free Strategy Call</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Decorative border effect */}
              <div className="absolute inset-0 border-2 border-gray-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 p-4 sm:p-6 md:p-8 rounded-lg relative mb-6 sm:mb-8">
            {/* Corner decorations */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gray-600"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gray-600"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gray-600"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gray-600"></div>

            <div className="relative" style={{ minHeight: '400px' }}>
              <iframe
                src={leadMagnetDocUrl}
                className="w-full"
                style={{ height: '400px' }}
                title="Lead Magnet Protocol PDF"
                allow="clipboard-read; clipboard-write"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                loading="lazy"
              ></iframe>
            </div>
            <div className="mt-3 sm:mt-4 text-center">
              <a
                href={`https://drive.google.com/file/d/${fileId}/view?usp=drive_link`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 text-xs sm:text-sm transition-colors touch-manipulation inline-block py-2"
              >
                Open in new tab →
              </a>
            </div>
          </div>

          <div className="bg-gray-900/50 p-4 sm:p-6 rounded-lg border border-gray-800 text-center">
            <p className="text-gray-300 text-base sm:text-lg mb-3 sm:mb-4 px-2">
              <span className="font-bold text-gray-200">This protocol is powerful, but it's not personalized yet.</span>
            </p>
            <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4 px-2">
              {healthInvestment && `You mentioned you're ${healthInvestment.toLowerCase()}.`} 
              {" "}To get from where you are right now to where you want to be, you need a strategy call. 
              We'll review your specific situation, your goals, your experience level, and customize this protocol 
              to fit YOUR exact needs.
            </p>
            <p className="text-gray-300 font-bold text-sm sm:text-base px-2">
              The bridge between this document and your results? That's what the strategy call is for.
            </p>
          </div>
        </div>
      </section>

      {/* Book Strategy Call Section */}
      <section id="book-strategy-call" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-300 mb-4 sm:mb-6 px-2">
              Book Your Free Strategy Call
            </h2>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-4 max-w-2xl mx-auto px-2">
              Let's personalize this protocol to your exact circumstances
            </p>
            <div className="space-y-3 text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
              <p>
                On this call, we'll discuss:
              </p>
              <ul className="list-disc list-inside text-left space-y-2 max-w-xl mx-auto text-sm sm:text-base">
                <li>Your specific goals and current situation</li>
                <li>How to adapt this protocol to your {peptideExperience ? peptideExperience.toLowerCase() : "experience level"}</li>
                <li>Dosages, timing, and implementation tailored to you</li>
                <li>Creating a personalized roadmap from where you are to where you want to be</li>
              </ul>
            </div>
          </div>

          {/* Calendly inline widget */}
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/mandevillefitness-kqti/15min"
            style={{ minWidth: '320px', height: '700px', width: '100%' }}
          ></div>
        </div>
      </section>

      {/* Proof Building Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-300 mb-3 sm:mb-4 px-2">
              Real Men. Real Results. Real Transformations.
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-4 sm:mb-6 px-2">
              These aren't stock photos or empty promises. These are actual transformations from men who took action and got their lives back.
            </p>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl font-bold max-w-2xl mx-auto px-2">
              The only difference between them and you? They booked the call.
            </p>
          </div>

          {/* Testimonial Gallery */}
          <div className="flex justify-center mb-8 sm:mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full max-w-lg md:max-w-2xl">
              <div className="relative aspect-[3/4] border-2 border-gray-700 rounded-lg overflow-hidden group cursor-pointer hover:border-gray-600 transition-all w-full max-w-[180px] sm:max-w-[200px] md:max-w-[220px] mx-auto">
                <Image
                  src="/RichAfter.jpg"
                  alt="Rich Transformation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-bold text-sm">Rich</p>
                    <p className="text-gray-300 text-xs">200 lbs to 185 lbs. Energy returned to his 20s.</p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[3/4] border-2 border-gray-700 rounded-lg overflow-hidden group cursor-pointer hover:border-gray-600 transition-all w-full max-w-[180px] sm:max-w-[200px] md:max-w-[220px] mx-auto">
                <Image
                  src="/ChrisAfter.png"
                  alt="Chris Transformation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-bold text-sm">Chris</p>
                    <p className="text-gray-300 text-xs">Dropped body fat effortlessly. Confidence restored.</p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-[3/4] border-2 border-gray-700 rounded-lg overflow-hidden group cursor-pointer hover:border-gray-600 transition-all w-full max-w-[180px] sm:max-w-[200px] md:max-w-[220px] mx-auto">
                <Image
                  src="/JackAfter.jpeg"
                  alt="Jack Transformation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-bold text-sm">Jack</p>
                    <p className="text-gray-300 text-xs">International powerlifting champion.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Powerful CTA */}
          <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-lg p-6 sm:p-8 md:p-12 text-center relative">
            {/* Corner decorations */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gray-600"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gray-600"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gray-600"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gray-600"></div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-300 mb-3 sm:mb-4 px-2">
              Your Transformation Starts With One Decision
            </h3>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
              Every man in those photos was once where you are right now. Stuck. Frustrated. Ready for change but not sure where to start.
            </p>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto font-bold px-2">
              They didn't wait for the perfect moment. They didn't wait until they felt ready. They booked the call. They took action. They got results.
            </p>
            <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              The protocol is in front of you. The proof is above you. The only thing standing between you and your transformation is clicking that button and booking your strategy call.
            </p>
            <button
              onClick={() => {
                document.getElementById("book-strategy-call")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative px-6 sm:px-8 md:px-10 py-3.5 sm:py-4 md:py-5 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold text-sm sm:text-base md:text-lg uppercase tracking-wider rounded-sm overflow-hidden transition-all duration-300 active:scale-95 hover:scale-105 hover:shadow-2xl hover:shadow-gray-700/50 touch-manipulation min-h-[48px] sm:min-h-[56px]"
            >
              <span className="relative z-10">Book Your Strategy Call Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 border-2 border-gray-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-gray-800 py-8 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <Image
                src="/GetJackedLogo.png"
                alt="Get Jacked Academy Logo"
                width={40}
                height={40}
                className="object-contain"
              />
              <div className="text-center md:text-left">
                <p className="text-gray-300 font-bold">Get Jacked Academy</p>
                <p className="text-gray-600 text-sm">Created by Jack Mandeville</p>
              </div>
            </a>
            <a
              href="/"
              className="text-gray-500 hover:text-gray-400 transition-colors text-sm"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

