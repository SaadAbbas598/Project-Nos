import React from "react";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section className="relative bg-gradient-to-b from-white to-blue-50 py-20 overflow-hidden">
      {/* Floating circles background */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-blue-700 rounded-full"></div>
      <div className="absolute top-20 left-24 w-8 h-8 border-2 border-blue-700 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-5 h-5 bg-blue-700 rounded-full"></div>
      <div className="absolute bottom-20 right-20 w-10 h-10 border-2 border-blue-700 rounded-full"></div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Sign and notarize documents with audio <br className="hidden md:block" /> 
          and video anytime, anywhere on a <br className="hidden md:block" />
          computer or your phone
        </h1>

        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Important forms require a notarization or a witness, and now they can
          be completed without asking your customer to find a notary. The
          Notarize Network has completed millions of online notarizations.
          Notaries are available 24/7 and documents are acceptable in all 50
          states.
        </p>

        {/* Mockup section */}
        <div className="flex flex-wrap justify-center items-end gap-4 relative">
          <div className="relative flex justify-center">
            {/* Phone mockups */}
            {[1, 2, 3, 4, 5].map((item, index) => (
              <div
                key={index}
                className="w-36 sm:w-40 md:w-44 lg:w-48 bg-white shadow-lg rounded-3xl border border-gray-200 p-4 relative z-10"
                style={{
                  transform: `translateY(${index % 2 === 0 ? "20px" : "0"})`,
                }}
              >
                <div className="text-left">
                  <h2 className="text-sm font-semibold text-gray-900">
                    Hi, Steven
                  </h2>
                  <p className="text-xs text-gray-500 mb-2">
                    Let’s make this day productive
                  </p>

                  <div className="space-y-2">
                    <div className="border rounded-lg p-2">
                      <p className="text-xs text-gray-700 font-medium">
                        My Task
                      </p>
                      <p className="text-xs text-gray-400">Completed</p>
                    </div>
                    <div className="border rounded-lg p-2">
                      <p className="text-xs text-gray-700 font-medium">
                        Upcoming Events
                      </p>
                      <p className="text-xs text-gray-400">Meeting 07:30</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Left and right floating arrows */}
            <div className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 bg-blue-700 p-3 rounded-full">
              <ArrowRight className="text-white rotate-180 w-5 h-5" />
            </div>
            <div className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 bg-blue-700 p-3 rounded-full">
              <ArrowRight className="text-white w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
