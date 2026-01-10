"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const protocolData: Record<string, { title: string; description: string; icon: string }> = {
  "brain-function-protocol": {
    title: "Brain Function Protocol",
    description: "Unlock peak cognitive performance with battle-tested nootropic protocols",
    icon: "🧠",
  },
  "fat-loss-protocol": {
    title: "Fat Loss Protocol",
    description: "Shred fat and reveal your warrior physique with proven metabolic strategies",
    icon: "🔥",
  },
  "muscle-growth-protocol": {
    title: "Muscle Growth Protocol",
    description: "Build battle-ready muscle with anabolic protocols that deliver real results",
    icon: "⚔️",
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

  useEffect(() => {
    const nameParam = searchParams.get("name");
    const emailParam = searchParams.get("email");
    if (nameParam) setName(decodeURIComponent(nameParam));
    if (emailParam) setEmail(decodeURIComponent(emailParam));
  }, [searchParams]);

  const protocol = protocolData[params.protocol] || {
    title: "Protocol",
    description: "Your personalized protocol",
    icon: "⚔️",
  };

  const faqDocUrl =
    "https://docs.google.com/document/d/1WdiH3z8SO4zlQHq_0mB_xjRTriVtGJWn6okUyXdSlrc/edit?tab=t.0#heading=h.tsz3hs3244ct";

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
      <section className="pt-16 pb-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-6xl mb-6">{protocol.icon}</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-300 mb-6">
            {protocol.title}
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            {protocol.description}
          </p>
        </div>
      </section>

      {/* VSL Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-4">
              {name}'s Personalized Protocol Video
            </h2>
            <p className="text-gray-400">
              Watch this exclusive video to unlock your complete {protocol.title}
            </p>
          </div>

          <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-lg overflow-hidden shadow-2xl">
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
        </div>
      </section>

      {/* Protocol Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 p-8 rounded-lg relative">
            {/* Corner decorations */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gray-600"></div>
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gray-600"></div>
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gray-600"></div>
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gray-600"></div>

            <h2 className="text-3xl font-bold text-gray-300 mb-6">
              Your Complete Protocol Guide
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                This is your personalized {protocol.title} guide. Every detail has been 
                battle-tested and refined through real-world application.
              </p>
              <p>
                Follow this protocol exactly as outlined. No shortcuts. No modifications. 
                Trust the process that has delivered results for warriors who came before you.
              </p>
              <p className="text-gray-400 mt-6">
                Your protocol content will be displayed here. This is a placeholder section 
                where you can add detailed protocol information, dosages, schedules, and 
                implementation guidelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ/Playbook Link Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-6">
            Complete FAQ & Peptide Protocol Playbook
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Access Jack Mandeville's comprehensive, live-updated playbook covering all 
            protocols, peptides, and research compounds. This is your complete reference guide.
          </p>

          <a
            href={faqDocUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block group relative px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-900 text-white font-bold text-lg uppercase tracking-wider rounded-sm overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-700/50"
          >
            <span className="relative z-10">Access Complete Playbook</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black opacity-0 group-hover:opacity-100 transition-opacity"></div>
            
            {/* Decorative border effect */}
            <div className="absolute inset-0 border-2 border-gray-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>

          <p className="text-gray-500 text-sm mt-6">
            Opens in a new tab • Live-updated by Jack Mandeville
          </p>
        </div>
      </section>

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

