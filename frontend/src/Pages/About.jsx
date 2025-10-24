import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

// Import all 5 mockup images
import mockup1 from "../assets/mobile-mockup.png";
import mockup2 from "../assets/mobile-mockup2.png";
import mockup3 from "../assets/mobile-mockup3.png";
import mockup4 from "../assets/mobile-mockup4.png";
import mockup5 from "../assets/mobile-mockup5.png";

export default function About() {
  const images = [mockup1, mockup2, mockup3, mockup4, mockup5];
  const [current, setCurrent] = useState(2); // middle image as default focus

  // Move carousel
  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <section className="relative bg-gradient-to-b from-white to-blue-50 py-20 overflow-hidden">
      {/* ===== Floating background circles ===== */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-blue-700 rounded-full"></div>
      <div className="absolute top-20 left-24 w-8 h-8 border-2 border-blue-700 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-5 h-5 bg-blue-700 rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-10 h-10 border-2 border-blue-700 rounded-full"></div>

      {/* ===== Content ===== */}
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
          Sign and notarize documents with audio <br className="hidden md:block" /> 
          and video anytime, anywhere on a <br className="hidden md:block" />
          computer or your phone
        </h1>

        <p className="text-gray-600 max-w-3xl mx-auto mb-12 text-sm md:text-base leading-relaxed">
          Important forms require a notarization or a witness, and now they can
          be completed without asking your customer to find a notary. The
          Notarize Network has completed millions of online notarizations.
          Notaries are available 24/7 and documents are acceptable in all 50
          states.
        </p>

        {/* ===== Image Carousel Section ===== */}
        <div className="flex justify-center items-center relative">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-8 bg-blue-700 p-3 rounded-full cursor-pointer hover:bg-blue-800 transition"
          >
            <ArrowRight className="text-white rotate-180 w-5 h-5" />
          </button>

          {/* Images */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
            {images.map((img, index) => {
              const distance = Math.abs(index - current);
              const isCenter = index === current;

              // Calculate size and opacity based on position
              let scale = 0.7;
              let opacity = 0.5;
              if (distance === 1) {
                scale = 0.85;
                opacity = 0.8;
              }
              if (isCenter) {
                scale = 1;
                opacity = 1;
              }

              return (
                <img
                  key={index}
                  src={img}
                  alt={`Mockup ${index + 1}`}
                  className="rounded-3xl drop-shadow-xl transition-all duration-500"
                  style={{
                    transform: `scale(${scale})`,
                    opacity,
                    width: isCenter ? "220px" : "150px",
                  }}
                />
              );
            })}
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-8 bg-blue-700 p-3 rounded-full cursor-pointer hover:bg-blue-800 transition"
          >
            <ArrowRight className="text-white w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
