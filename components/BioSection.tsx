import Image from "next/image";
import ScrollButton from "./ScrollButton";

export default function BioSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="relative order-2 md:order-1">
            {/* Headshot */}
            <div className="aspect-square bg-gradient-to-br from-gray-800 to-black border-2 sm:border-4 border-gray-600 rounded-lg overflow-hidden relative max-w-sm mx-auto">
              <Image
                src="/Headshot.jpg"
                alt="Jack Mandeville"
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
              About Jack Mandeville
            </h2>
            <div className="space-y-3 sm:space-y-4 text-gray-300 leading-relaxed">
              <p className="text-sm sm:text-base">
                I wasn't always disciplined or high-performing. I was the overweight gamer kid with no energy, confidence, or direction, until I flipped a switch and lost over <strong className="text-gray-200">50 pounds of fat</strong> through extreme discipline and relentless work ethic. Just as my life began to change, I was diagnosed at 16 with hypogonadism—critically low testosterone—while doctors dismissed my symptoms and offered no real solutions.
              </p>
              <p className="text-sm sm:text-base">
                Instead of accepting that, I took control. I educated myself on training, nutrition, hormones, TRT, peptides, and performance science, and rebuilt my body from the inside out. The result wasn't just fat loss. It was a full transformation in energy, recovery, confidence, and drive.
              </p>
              <p className="text-sm sm:text-base">
                Today, I operate at a high physical and mental level. I've won an <strong className="text-gray-200">international powerlifting championship</strong>, built a lean, high-performing body, and created a system that helps men restore vitality, performance, and confidence using the same methods that gave me my life back.
              </p>
            </div>
            
            {/* Scroll Button */}
            <div className="mt-6 sm:mt-8">
              <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">Your transformation is one click away</p>
              <ScrollButton targetId="quiz-section" copy="Start Your Protocol" showArrow={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

