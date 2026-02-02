import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t-2 border-gray-800 py-12 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity">
              <Image
                src="/GetJackedLogo.png"
                alt="Get Jacked Academy Logo"
                width={50}
                height={50}
                className="object-contain"
              />
              <span className="text-xl font-bold text-gray-300">GET JACKED ACADEMY</span>
            </Link>
            <p className="text-gray-500 text-sm text-center md:text-left">
              Created by Jack Mandeville
            </p>
            <p className="text-gray-600 text-xs mt-2 text-center md:text-left">
              Battle-tested protocols for peak performance
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6 text-center md:text-left">
            <div>
              <h3 className="text-gray-400 font-bold mb-2">Quick Links</h3>
              <ul className="space-y-1">
                <li>
                  <a href="#quiz-section" className="text-gray-500 hover:text-gray-300 transition-colors text-sm">
                    Protocols
                  </a>
                </li>
                <li>
                  <a href="#book-call-section" className="text-gray-500 hover:text-gray-300 transition-colors text-sm">
                    Book a Call
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Get Jacked Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}





