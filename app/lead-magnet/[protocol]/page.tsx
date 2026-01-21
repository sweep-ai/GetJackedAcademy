"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

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

  const leadMagnetDocUrl =
    "https://docs.google.com/document/d/1WdiH3z8SO4zlQHq_0mB_xjRTriVtGJWn6okUyXdSlrc/preview";

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b-2 border-gray-800 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/GetJackedLogo.png"
              alt="Get Jacked Academy Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-2xl font-bold text-gray-300 hidden sm:inline">GET JACKED ACADEMY</span>
          </Link>
          <div className="text-sm text-gray-400">
            Welcome, {name || "Warrior"}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">{protocol.icon}</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-300 mb-4">
            {name ? `${name}, here's your ${protocol.title}` : protocol.title}
          </h1>
          <p className="text-xl text-gray-400 mb-6 max-w-2xl mx-auto">
            {protocol.description}
          </p>
          {protocol.painPoints.length > 0 && (
            <div className="text-left max-w-2xl mx-auto bg-gray-900/50 p-6 rounded-lg border border-gray-800">
              <p className="text-gray-300 mb-3">
                <span className="font-bold text-gray-200">You're dealing with:</span> {protocol.painPoints[0]}
                {protocol.painPoints.length > 1 && `, ${protocol.painPoints[1]}`}
              </p>
              <p className="text-gray-300">
                <span className="font-bold text-gray-200">You want:</span> {protocol.benefits[0]}
                {protocol.benefits.length > 1 && `, ${protocol.benefits[1]}`}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* VSL Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-4">
              Watch This First: Your Path to {protocol.title}
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              This video reveals the exact framework that bridges the gap between where you are now and where you want to be.
            </p>
          </div>

          <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-lg overflow-hidden shadow-2xl mb-8">
            {/* Placeholder VSL */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 border-4 border-gray-600 rounded-full flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-gray-600 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <p className="text-gray-400 text-xl">
                  {protocol.title} Video
                </p>
                <p className="text-gray-600 text-sm mt-2">
                  Placeholder - Replace with actual VSL
                </p>
              </div>
            </div>

            {/* Decorative corner elements */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gray-600"></div>
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gray-600"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gray-600"></div>
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gray-600"></div>
          </div>

          <div className="text-center">
            <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-6">
              After watching, review the protocol document below, then book your strategy call to personalize it to your exact situation.
            </p>
            <button
              onClick={() => {
                document.getElementById("book-strategy-call")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold text-lg uppercase tracking-wider rounded-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-700/50"
            >
              <span className="relative z-10">Book Your Free Strategy Call</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {/* Decorative border effect */}
              <div className="absolute inset-0 border-2 border-gray-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Lead Magnet Document Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-4">
              Your {protocol.title} Guide
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-2">
              This is the foundation—the battle-tested protocol that works.
            </p>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">
              <span className="font-bold text-gray-400">But here's the thing:</span> Generic protocols get generic results. 
              {peptideExperience && ` Based on your ${peptideExperience.toLowerCase()},`} 
              {peptideWillingness && ` and your ${peptideWillingness.toLowerCase()},`} 
              {" "}this protocol needs to be tailored to YOUR specific circumstances, goals, and current situation.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 p-8 rounded-lg relative mb-8">
            {/* Corner decorations */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gray-600"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gray-600"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gray-600"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gray-600"></div>

            <div className="relative" style={{ minHeight: '600px' }}>
              <iframe
                src={leadMagnetDocUrl}
                className="w-full"
                style={{ height: '600px', border: 'none' }}
                title="Lead Magnet Protocol Document"
                allow="clipboard-read; clipboard-write"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                loading="lazy"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <a
                href="https://docs.google.com/document/d/1WdiH3z8SO4zlQHq_0mB_xjRTriVtGJWn6okUyXdSlrc/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 text-sm transition-colors"
              >
                Open in new tab →
              </a>
            </div>
          </div>

          <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 text-center">
            <p className="text-gray-300 text-lg mb-4">
              <span className="font-bold text-gray-200">This protocol is powerful, but it's not personalized yet.</span>
            </p>
            <p className="text-gray-400 mb-4">
              {healthInvestment && `You mentioned you're ${healthInvestment.toLowerCase()}.`} 
              {" "}To get from where you are right now to where you want to be, you need a strategy call. 
              We'll review your specific situation, your goals, your experience level, and customize this protocol 
              to fit YOUR exact needs.
            </p>
            <p className="text-gray-300 font-bold">
              The bridge between this document and your results? That's what the strategy call is for.
            </p>
          </div>
        </div>
      </section>

      {/* Book Strategy Call Section */}
      <section id="book-strategy-call" className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-300 mb-6">
              Book Your Free Strategy Call
            </h2>
            <p className="text-gray-400 text-xl mb-4 max-w-2xl mx-auto">
              Let's personalize this protocol to your exact circumstances
            </p>
            <div className="space-y-3 text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              <p>
                On this call, we'll discuss:
              </p>
              <ul className="list-disc list-inside text-left space-y-2 max-w-xl mx-auto">
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
            data-url="https://calendly.com/mandevillefitness-kqti/45min"
            style={{ minWidth: '320px', height: '700px', width: '100%' }}
          ></div>
        </div>
      </section>

      {/* Calendly script */}
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />

      {/* Footer */}
      <footer className="border-t-2 border-gray-800 py-8 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
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
            </Link>
            <Link
              href="/"
              className="text-gray-500 hover:text-gray-400 transition-colors text-sm"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

