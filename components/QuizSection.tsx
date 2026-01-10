"use client";

import { useState, FormEvent } from "react";

interface QuizSectionProps {
  onComplete: (data: {
    protocol: string;
    qualification: string;
    fullName: string;
    email: string;
    phone: string;
  }) => void;
}

export default function QuizSection({ onComplete }: QuizSectionProps) {
  const [step, setStep] = useState(1);
  const [selectedProtocol, setSelectedProtocol] = useState<string>("");
  const [qualification, setQualification] = useState<string>("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });

  const protocols = [
    {
      id: "muscle-growth",
      title: "Muscle Growth",
      icon: "⚔️",
    },
    {
      id: "fat-loss",
      title: "Fat Loss",
      icon: "🔥",
    },
    {
      id: "brain-function",
      title: "Brain Function",
      icon: "🧠",
    },
  ];

  const qualificationOptions = [
    "I'm just getting started",
    "I have some experience",
    "I'm advanced and looking to optimize",
    "I want to learn more about protocols",
  ];

  const handleProtocolSelect = (protocol: string) => {
    setSelectedProtocol(protocol);
    setStep(2);
  };

  const handleQualificationSelect = (qual: string) => {
    setQualification(qual);
    setStep(3);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email && formData.phone) {
      onComplete({
        protocol: selectedProtocol,
        qualification,
        ...formData,
      });
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 border border-gray-800 rotate-45 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 border border-gray-800 rotate-45 translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Step 1: Protocol Selection */}
        {step === 1 && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-300 mb-6">
                How can I help you improve...
              </h2>
            </div>

            <div className="space-y-4">
              {protocols.map((protocol) => (
                <button
                  key={protocol.id}
                  onClick={() => handleProtocolSelect(protocol.title)}
                  className="w-full group relative bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 p-6 rounded-lg transition-all duration-300 hover:border-gray-600 hover:shadow-2xl hover:shadow-gray-600/20 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{protocol.icon}</span>
                    <span className="text-2xl font-bold text-white group-hover:text-gray-300 transition-colors">
                      {protocol.title}
                    </span>
                    <svg
                      className="w-6 h-6 ml-auto text-gray-500 group-hover:text-gray-400 group-hover:translate-x-1 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Qualification Question */}
        {step === 2 && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-300 mb-6">
                Tell us about your experience
              </h2>
              <p className="text-gray-400 text-lg">
                This helps us personalize your protocol
              </p>
            </div>

            <div className="space-y-4">
              {qualificationOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleQualificationSelect(option)}
                  className="w-full group relative bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 p-6 rounded-lg transition-all duration-300 hover:border-gray-600 hover:shadow-2xl hover:shadow-gray-600/20 text-left"
                >
                  <span className="text-lg text-white group-hover:text-gray-300 transition-colors">
                    {option}
                  </span>
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep(1)}
              className="mt-8 text-gray-500 hover:text-gray-400 transition-colors"
            >
              ← Back
            </button>
          </div>
        )}

        {/* Step 3: Contact Form */}
        {step === 3 && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-300 mb-6">
                Almost there!
              </h2>
              <p className="text-gray-400 text-lg">
                Enter your details to access your personalized protocol
              </p>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-6">
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

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 px-6 py-3 border-2 border-gray-800 text-gray-400 rounded-sm hover:border-gray-600 hover:text-gray-300 transition-colors"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold rounded-sm hover:from-gray-800 hover:to-black transition-all duration-300"
                >
                  Access Protocol
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}

