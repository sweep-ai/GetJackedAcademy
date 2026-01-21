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
  const [peptideExperience, setPeptideExperience] = useState<string>("");
  const [peptideWillingness, setPeptideWillingness] = useState<string>("");
  const [healthInvestment, setHealthInvestment] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const peptideExperienceOptions = [
    "I've never used peptides before",
    "I have some experience with peptides",
    "I'm experienced with peptides",
    "I'm an expert with peptides",
  ];

  const peptideWillingnessOptions = [
    "I'm very interested and ready to start",
    "I'm interested but want to learn more",
    "I'm somewhat interested",
    "I'm not sure yet",
  ];

  const healthInvestmentOptions = [
    "I'm fully committed to investing in my health",
    "I'm willing to invest significantly",
    "I'm open to moderate investment",
    "I prefer lower-cost options",
  ];

  const handleProtocolSelect = (protocol: string) => {
    setSelectedProtocol(protocol);
    setStep(2);
  };

  const handlePeptideExperienceSelect = (experience: string) => {
    setPeptideExperience(experience);
    setStep(3);
  };

  const handlePeptideWillingnessSelect = (willingness: string) => {
    setPeptideWillingness(willingness);
    setStep(4);
  };

  const handleHealthInvestmentSelect = (investment: string) => {
    setHealthInvestment(investment);
    setStep(5);
  };

  // Protocol to pain point mapping
  const protocolPainPoints: Record<string, string> = {
    'Muscle Growth': 'Slow or stalled muscle growth',
    'Fat Loss': 'Stubborn fat that won\'t budge',
    'Brain Function': 'Mental fog and lack of focus',
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email && formData.phone) {
      setIsSubmitting(true);
      
      // Submit to Google Sheets via our API route (which proxies to Apps Script)
      try {
        const painPoint = protocolPainPoints[selectedProtocol] || selectedProtocol || '';
        
        const payload = {
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          painPoint: painPoint,
          experience: peptideExperience || '',
          peptideWillingness: peptideWillingness || '',
          investment: healthInvestment || '',
        };

        console.log('Submitting to Google Sheets:', payload);

        const response = await fetch('/api/submit-lead', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (response.ok) {
          const result = await response.json();
          console.log('Google Sheets submission successful:', result);
        } else {
          const error = await response.json();
          console.error('Google Sheets submission failed:', error);
        }
      } catch (error) {
        // Log error but don't block the user flow
        console.error('Failed to submit lead data:', error);
      } finally {
        // Continue with the normal flow regardless of API success/failure
        onComplete({
          protocol: selectedProtocol,
          qualification: `${peptideExperience} | ${peptideWillingness} | ${healthInvestment}`,
          ...formData,
        });
      }
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

        {/* Step 2: Peptide Experience */}
        {step === 2 && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-300 mb-6">
                What's your experience with peptides?
              </h2>
              <p className="text-gray-400 text-lg">
                This helps us tailor the right protocol for you
              </p>
            </div>

            <div className="space-y-4">
              {peptideExperienceOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handlePeptideExperienceSelect(option)}
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

        {/* Step 3: Willingness to Use Peptides */}
        {step === 3 && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-300 mb-6">
                Are you ready to use peptides to optimize your health and performance?
              </h2>
              <p className="text-gray-400 text-lg">
                Understanding your comfort level helps us guide you
              </p>
            </div>

            <div className="space-y-4">
              {peptideWillingnessOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handlePeptideWillingnessSelect(option)}
                  className="w-full group relative bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 p-6 rounded-lg transition-all duration-300 hover:border-gray-600 hover:shadow-2xl hover:shadow-gray-600/20 text-left"
                >
                  <span className="text-lg text-white group-hover:text-gray-300 transition-colors">
                    {option}
                  </span>
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep(2)}
              className="mt-8 text-gray-500 hover:text-gray-400 transition-colors"
            >
              ← Back
            </button>
          </div>
        )}

        {/* Step 4: Health Investment Interest */}
        {step === 4 && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-300 mb-6">
                How interested are you in investing in your overall health?
              </h2>
              <p className="text-gray-400 text-lg">
                This helps us understand your commitment level
              </p>
            </div>

            <div className="space-y-4">
              {healthInvestmentOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleHealthInvestmentSelect(option)}
                  className="w-full group relative bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 p-6 rounded-lg transition-all duration-300 hover:border-gray-600 hover:shadow-2xl hover:shadow-gray-600/20 text-left"
                >
                  <span className="text-lg text-white group-hover:text-gray-300 transition-colors">
                    {option}
                  </span>
                </button>
              ))}
            </div>

            <button
              onClick={() => setStep(3)}
              className="mt-8 text-gray-500 hover:text-gray-400 transition-colors"
            >
              ← Back
            </button>
          </div>
        )}

        {/* Step 5: Contact Form */}
        {step === 5 && (
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
                  disabled={isSubmitting}
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-black border-2 border-gray-800 rounded-sm text-white focus:outline-none focus:border-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
                  disabled={isSubmitting}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-black border-2 border-gray-800 rounded-sm text-white focus:outline-none focus:border-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
                  disabled={isSubmitting}
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-black border-2 border-gray-800 rounded-sm text-white focus:outline-none focus:border-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 border-2 border-gray-800 text-gray-400 rounded-sm hover:border-gray-600 hover:text-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold rounded-sm hover:from-gray-800 hover:to-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    "Access Protocol"
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}

