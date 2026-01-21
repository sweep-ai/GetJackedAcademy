"use client";

import Link from "next/link";
import Image from "next/image";
import Script from "next/script";

export default function BookCallPage() {
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
          <Link
            href="/"
            className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-300 mb-4">
              Book a Call with Jack
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Schedule a personalized consultation to discuss your goals and get a custom 
              protocol tailored to your needs.
            </p>
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
    </main>
  );
}

