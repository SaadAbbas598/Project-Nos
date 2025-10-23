import React from "react";
import phoneMockup from "../assets/mobile-mockup.png"; // Add your mobile phone image here

export default function Dashboard() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-8 py-16 bg-gray-50 min-h-screen relative">
      {/* Left Section */}
      <div className="max-w-lg space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
          Remote Online Closing (RON)
        </h1>

        <p className="text-gray-600 text-lg">
          • save time &nbsp; • more convenient &nbsp; • more efficient •
        </p>

        <button className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-900 transition">
          Create Event
        </button>
      </div>

      {/* Right Section: Mobile Mockup */}
      <div className="relative mt-10 lg:mt-0 flex justify-center">
        <img
          src={phoneMockup}
          alt="Mobile App Mockup"
          className="w-[280px] md:w-[320px] drop-shadow-xl rounded-2xl"
        />

        {/* Blue background circle */}
        <div className="absolute -top-6 -right-6 bg-blue-900 w-32 h-32 rounded-full -z-10 opacity-20"></div>

        {/* Labels */}
        <p className="absolute -left-24 top-16 font-medium text-gray-700">
          ➤ Profile view
        </p>
        <p className="absolute -left-24 top-44 font-medium text-gray-700">
          ➤ Tasks
        </p>
        <p className="absolute -left-24 bottom-10 font-medium text-gray-700">
          ➤ Events
        </p>
      </div>
    </section>
  );
}
