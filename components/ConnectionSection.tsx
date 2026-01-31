import Image from "next/image";
import ScrollButton from "./ScrollButton";

export default function ConnectionSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="relative aspect-[4/3] border-2 sm:border-4 border-gray-600 rounded-lg overflow-hidden">
              <Image
                src="/Winning.jpeg"
                alt="Jack Mandeville winning powerlifting championship"
                fill
                className="object-cover"
              />
              
              {/* Decorative corner elements */}
              <div className="absolute top-2 left-2 sm:top-4 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-gray-500"></div>
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-r-2 border-gray-500"></div>
              <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-l-2 border-gray-500"></div>
              <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-gray-500"></div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-300 mb-4 sm:mb-6 px-2">
              I've Been In Your Position
            </h2>
            <div className="space-y-3 sm:space-y-4 text-gray-300 leading-relaxed">
              <p className="text-sm sm:text-base">
                I know what it feels like to look in the mirror and not recognize the person staring back. I know the frustration of trying everything and seeing zero progress. I know what it's like to feel broken, exhausted, and disconnected from the man you know you could be.
              </p>
              <p className="text-sm sm:text-base">
                I was that guy. Overweight. Low energy. No confidence. Doctors telling me I was "normal" when I felt anything but. I had every reason to stay stuck.
              </p>
              <p className="text-sm sm:text-base">
                But I didn't accept that. I took control. I learned the science. I rebuilt my body from the inside out. And I didn't just transform my physique. I won a <strong className="text-gray-200">national powerlifting championship</strong>. I built a system that works. I got my life back.
              </p>
              <p className="text-lg sm:text-xl font-bold text-gray-200 pt-2 sm:pt-4">
                If I can do it, you can too.
              </p>
              <p className="text-gray-400 text-sm sm:text-base">
                The same methods that gave me my life back are the ones I use to help men like you reclaim their energy, their confidence, and their identity. Your transformation starts when you decide it does.
              </p>
            </div>
            
            {/* Scroll Button */}
            <div className="mt-6 sm:mt-8">
              <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">Ready to start your transformation?</p>
              <ScrollButton targetId="book-call-section" copy="Book Your Strategy Call" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

