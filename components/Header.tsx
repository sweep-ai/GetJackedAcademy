import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Image
              src="/GetJackedLogo.png"
              alt="Get Jacked Academy Logo"
              width={50}
              height={50}
              className="object-contain"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#quiz-section"
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              Protocols
            </a>
            <a
              href="#book-call-section"
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              Book a Call
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

