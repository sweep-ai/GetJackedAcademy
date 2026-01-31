import Image from "next/image";
import ScrollButton from "./ScrollButton";

export default function TestimonialsSection() {

  return (
    <section className="pt-20 sm:pt-24 pb-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-300 mb-3 sm:mb-4 px-2">
            Real Results. Real Warriors.
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl px-2">
            These aren't promises. These are real transformations from real men.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
        </div>

        {/* Transformations */}
        <div className="mt-8 sm:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Chris */}
            <div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="relative aspect-[3/4] border-2 border-gray-700 rounded-lg overflow-hidden">
                  <Image
                    src="/ChrisBefore.png"
                    alt="Chris Before"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-black/80 px-2 py-1 rounded text-xs font-bold text-gray-300">
                    BEFORE
                  </div>
                </div>
                <div className="relative aspect-[3/4] border-2 border-gray-700 rounded-lg overflow-hidden">
                  <Image
                    src="/ChrisAfter.png"
                    alt="Chris After"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-black/80 px-2 py-1 rounded text-xs font-bold text-gray-300">
                    AFTER
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 p-4 sm:p-6 rounded-lg relative">
                {/* Corner decorations */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gray-600"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gray-600"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gray-600"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gray-600"></div>
                <p className="text-gray-300 mb-4 italic leading-relaxed text-sm sm:text-base">
                  "Chris had zero energy, no drive to train, and felt disconnected from the man in the mirror. After rebuilding his peptide protocol and aligning everything, he now wakes up energized, drops body fat effortlessly, and his confidence is obvious the moment he walks into a room. The transformation wasn't just physical. It reset how he shows up."
                </p>
                <div className="border-t border-gray-800 pt-4">
                  <p className="text-gray-400 font-bold text-sm sm:text-base">Chris</p>
                </div>
              </div>
            </div>

            {/* Rich */}
            <div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="relative aspect-[3/4] border-2 border-gray-700 rounded-lg overflow-hidden">
                  <Image
                    src="/RichBefore.jpg"
                    alt="Rich Before"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-black/80 px-2 py-1 rounded text-xs font-bold text-gray-300">
                    BEFORE
                  </div>
                </div>
                <div className="relative aspect-[3/4] border-2 border-gray-700 rounded-lg overflow-hidden">
                  <Image
                    src="/RichAfter.jpg"
                    alt="Rich After"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-black/80 px-2 py-1 rounded text-xs font-bold text-gray-300">
                    AFTER
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 p-4 sm:p-6 rounded-lg relative">
                {/* Corner decorations */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gray-600"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gray-600"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gray-600"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gray-600"></div>
                <p className="text-gray-300 mb-4 italic leading-relaxed text-sm sm:text-base">
                  "Rich was 200 lbs at 25% body fat, struggling with mood swings and zero drive despite TRT. After a few months, he dropped to 185 lbs and 15% body fat without tracking calories. His testosterone increased on a lower TRT dose, and his mental clarity and energy returned to levels he hadn't felt in 30 years."
                </p>
                <div className="border-t border-gray-800 pt-4">
                  <p className="text-gray-400 font-bold text-sm sm:text-base">Rich</p>
                </div>
              </div>
            </div>

            {/* Jack */}
            <div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="relative aspect-[3/4] border-2 border-gray-700 rounded-lg overflow-hidden">
                  <Image
                    src="/JackBefore.png"
                    alt="Jack Before"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-black/80 px-2 py-1 rounded text-xs font-bold text-gray-300">
                    BEFORE
                  </div>
                </div>
                <div className="relative aspect-[3/4] border-2 border-gray-700 rounded-lg overflow-hidden">
                  <Image
                    src="/JackAfter.jpeg"
                    alt="Jack After"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-black/80 px-2 py-1 rounded text-xs font-bold text-gray-300">
                    AFTER
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 p-4 sm:p-6 rounded-lg relative">
                {/* Corner decorations */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gray-600"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gray-600"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gray-600"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gray-600"></div>
                <p className="text-gray-300 mb-4 italic leading-relaxed text-sm sm:text-base">
                  "I was the overweight gamer kid with 197 ng/dL testosterone, exhausted and broken. When I took control and learned to fix my body through science, everything changed. Now I wake up with energy, train hard, recover fast, and feel alive physically, mentally, and hormonally. This transformation didn't just change my body. It gave me my life back."
                </p>
                <div className="border-t border-gray-800 pt-4">
                  <p className="text-gray-400 font-bold text-sm sm:text-base">Jack Mandeville</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Button */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm mb-4">See how I transformed my life</p>
          <ScrollButton targetId="connection-section" copy="My Story" variant="secondary" />
        </div>
      </div>
    </section>
  );
}

