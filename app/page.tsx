"use client";

import Hero from "@/components/Hero";
import QuizSection from "@/components/QuizSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ConnectionSection from "@/components/ConnectionSection";
import BioSection from "@/components/BioSection";
import FinalCTA from "@/components/FinalCTA";
import BookACallSection from "@/components/BookACallSection";
import Footer from "@/components/Footer";

export default function Home() {
  const handleQuizClick = () => {
    document.getElementById("quiz-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBookCallClick = () => {
    document.getElementById("book-call-section")?.scrollIntoView({ behavior: "smooth" });
  };

  const getProtocolSlug = (protocol: string): string => {
    const mapping: Record<string, string> = {
      "Muscle Growth": "muscle-growth-protocol",
      "Fat Loss": "fat-loss-protocol",
      "Brain Function": "brain-function-protocol",
    };
    return mapping[protocol] || protocol.toLowerCase().replace(/\s+/g, "-");
  };

  const handleQuizComplete = (data: {
    protocol: string;
    qualification: string;
    fullName: string;
    email: string;
    phone: string;
  }) => {
    // Store the data and redirect to lead magnet page
    const protocolSlug = getProtocolSlug(data.protocol);
    window.location.href = `/lead-magnet/${protocolSlug}?name=${encodeURIComponent(data.fullName)}&email=${encodeURIComponent(data.email)}&phone=${encodeURIComponent(data.phone)}&qualification=${encodeURIComponent(data.qualification)}`;
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Hero 
        onQuizClick={handleQuizClick}
      />
      <div id="quiz-section">
        <QuizSection onComplete={handleQuizComplete} onBookCallClick={handleBookCallClick} />
      </div>
      <TestimonialsSection />
      <div id="connection-section">
        <ConnectionSection />
      </div>
      <div id="book-call-section">
        <BookACallSection />
      </div>
      <BioSection />
      <FinalCTA onCTAClick={handleQuizClick} />
      <Footer />
    </main>
  );
}

