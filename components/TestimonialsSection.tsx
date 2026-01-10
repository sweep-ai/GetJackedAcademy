export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Warrior Alpha",
      result: "Lost 25lbs in 8 weeks",
      text: "The Fat Loss Protocol is absolutely battle-tested. No BS, just results.",
    },
    {
      name: "Cognitive Elite",
      result: "3x focus improvement",
      text: "Brain Function Protocol transformed my mental clarity. Game changer.",
    },
    {
      name: "Muscle Forge",
      result: "Gained 18lbs lean mass",
      text: "Muscle Growth Protocol delivered exactly what it promised. Pure results.",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-300 mb-4">
            Real Results. Real Warriors.
          </h2>
          <p className="text-gray-400 text-xl">
            These aren't promises. These are battle-tested transformations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 p-8 rounded-lg relative"
            >
              {/* Corner decorations */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gray-600"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gray-600"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gray-600"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gray-600"></div>

              <p className="text-gray-300 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t border-gray-800 pt-4">
                <p className="text-gray-400 font-bold">
                  {testimonial.name}
                </p>
                <p className="text-gray-400 text-sm mt-1">{testimonial.result}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Transformations placeholder */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-300 mb-8">
            Transformations
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="aspect-[3/4] bg-gradient-to-br from-gray-800 to-black border-2 border-gray-800 rounded-lg flex items-center justify-center relative overflow-hidden"
              >
                <div className="text-center">
                  <div className="w-24 h-24 border-4 border-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-500">Transformation Photo</p>
                  <p className="text-gray-600 text-sm mt-2">Placeholder</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

