"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity touch-manipulation">
            <Image
              src="/GetJackedLogo.png"
              alt="Get Jacked Academy Logo"
              width={80}
              height={80}
              className="object-contain w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
            />
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#quiz-section"
              className="text-gray-400 hover:text-gray-300 transition-colors text-sm lg:text-base"
            >
              Protocols
            </a>
            <a
              href="#book-call-section"
              className="text-gray-400 hover:text-gray-300 transition-colors text-sm lg:text-base"
            >
              Book a Call
            </a>
          </nav>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-gray-300 transition-colors touch-manipulation"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-800 mt-2">
            <div className="flex flex-col gap-3 pt-4">
              <a
                href="#quiz-section"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-400 hover:text-gray-300 transition-colors py-2 px-2 text-base touch-manipulation"
              >
                Protocols
              </a>
              <a
                href="#book-call-section"
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-400 hover:text-gray-300 transition-colors py-2 px-2 text-base touch-manipulation"
              >
                Book a Call
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}





