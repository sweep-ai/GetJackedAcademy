"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, FormEvent } from "react";

export default function BookCallPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your calendar booking system
    // For now, we'll just show a success message
    alert("Thank you! We'll contact you shortly to schedule your call.");
  };

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
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-300 mb-6">
              Book a Call with Jack
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Schedule a personalized consultation to discuss your goals and get a custom 
              protocol tailored to your needs.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 p-8 rounded-lg relative">
            {/* Corner decorations */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gray-600"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gray-600"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gray-600"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gray-600"></div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm text-gray-300 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-black border-2 border-gray-800 rounded-sm text-white focus:outline-none focus:border-gray-600 transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-black border-2 border-gray-800 rounded-sm text-white focus:outline-none focus:border-gray-600 transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm text-gray-300 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-black border-2 border-gray-800 rounded-sm text-white focus:outline-none focus:border-gray-600 transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-300 mb-2"
                >
                  What would you like to discuss? (Optional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-black border-2 border-gray-800 rounded-sm text-white focus:outline-none focus:border-gray-600 transition-colors resize-none"
                  placeholder="Tell us about your goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold text-lg uppercase tracking-wider rounded-sm hover:from-gray-800 hover:to-black transition-all duration-300"
              >
                Request Call
              </button>
            </form>

            <p className="text-gray-500 text-sm mt-6 text-center">
              We'll contact you within 24 hours to schedule your call.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

