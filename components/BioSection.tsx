import Image from "next/image";

export default function BioSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            {/* Headshot placeholder with logo */}
            <div className="aspect-square bg-gradient-to-br from-gray-800 to-black border-4 border-gray-600 rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                    <Image
                      src="/GetJackedLogo2.png"
                      alt="Jack Mandeville"
                      width={128}
                      height={128}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-gray-500">Jack Mandeville</p>
                  <p className="text-gray-600 text-sm mt-2">Founder, Get Jacked Academy</p>
                </div>
              </div>
              
              {/* Decorative corner elements */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-gray-500"></div>
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gray-500"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-gray-500"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-gray-500"></div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-300 mb-6">
              About Jack Mandeville
            </h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Jack Mandeville is a battle-tested expert in peptides, performance enhancement, 
                and research compounds. With years of real-world experience, he's forged protocols 
                that deliver results—not theory.
              </p>
              <p>
                Every protocol in Get Jacked Academy has been tested in the field, refined through 
                trial and error, and proven to work. No fluff. No marketing speak. Just the hard 
                truth about what actually moves the needle.
              </p>
              <p>
                When you follow a Jack Mandeville protocol, you're not following a trend. You're 
                following a path that's been walked by warriors who demanded results and got them.
              </p>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-800">
              <p className="text-gray-400 text-lg">
                "The only protocol worth following is one that's been battle-tested."
              </p>
              <p className="text-gray-500 text-sm mt-2">— Jack Mandeville</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

